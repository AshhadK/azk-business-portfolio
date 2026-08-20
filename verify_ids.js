const fs = require('fs');

function extractItems(filePath, arrayName, isExport) {
  const content = fs.readFileSync(filePath, 'utf8');
  const pattern = isExport
    ? new RegExp(`export const ${arrayName} = \\[([\\s\\S]*?)\\n\\];`)
    : new RegExp(`const ${arrayName} = \\[([\\s\\S]*?)\\n\\];`);
  const match = content.match(pattern);
  if (!match) return { items: [], error: 'array not found' };
  const arr = match[1];
  const items = [];
  const re = /id:\s*(\d+)[\s\S]*?title:\s*"([^"]+)"/g;
  let m;
  while ((m = re.exec(arr)) !== null) {
    items.push({ id: parseInt(m[1]), title: m[2] });
  }
  return { items };
}

const ps = extractItems('c:/Users/hp/Downloads/Clone/azk-business-portfolio/src/data/projectSection.js', 'projects', true);
const gs = extractItems('c:/Users/hp/Downloads/Clone/azk-business-portfolio/src/data/gallerySection.js', 'items2', false);

console.log('projectSection projects:', ps.items.length, 'items');
console.log('gallerySection items2:', gs.items.length, 'items');
console.log('');

// Check duplicates in each
function checkDups(arr, name) {
  const counts = {};
  arr.forEach(x => counts[x.id] = (counts[x.id] || 0) + 1);
  const dups = Object.entries(counts).filter(([_,c]) => c > 1);
  if (dups.length) {
    console.log(name + ' DUPLICATE IDs:', dups.map(([id,c]) => `ID${id}x${c}`).join(', '));
    return false;
  }
  console.log(name + ': No duplicates');
  return true;
}
checkDups(ps.items, 'projectSection');
checkDups(gs.items, 'gallerySection');
console.log('');

// Check sequential IDs
function checkSeq(arr, name) {
  const ids = arr.map(x => x.id).sort((a,b) => a-b);
  const min = ids[0], max = ids[ids.length-1];
  if (min !== 1 || max !== ids.length) {
    console.log(name + ` IDs NOT sequential 1..${ids.length}. Got ${min}..${max}`);
    return false;
  }
  for (let i = 0; i < ids.length; i++) {
    if (ids[i] !== i+1) {
      console.log(name + ` IDs NOT sequential: missing ID ${i+1}`);
      return false;
    }
  }
  console.log(name + `: IDs sequential 1..${ids.length}`);
  return true;
}
checkSeq(ps.items, 'projectSection');
checkSeq(gs.items, 'gallerySection');
console.log('');

// Match check
console.log('=== Project-by-Project ID Match Check ===');
const len = Math.max(ps.items.length, gs.items.length);
let mismatches = 0;
for (let i = 1; i <= len; i++) {
  const p = ps.items.find(x => x.id === i);
  const g = gs.items.find(x => x.id === i);
  if (!p) { console.log(`  ID ${i}: MISSING in projectSection`); mismatches++; continue; }
  if (!g) { console.log(`  ID ${i}: MISSING in gallerySection`); mismatches++; continue; }
  // normalize: lower case, remove non-alpha, take first 8 chars
  const pn = p.title.toLowerCase().replace(/[^a-z0-9]/g,'').slice(0,8);
  const gn = g.title.toLowerCase().replace(/[^a-z0-9]/g,'').slice(0,8);
  if (pn !== gn) {
    console.log(`  ID ${i}: MISMATCH -> PS="${p.title.slice(0,30)}" vs GS="${g.title.slice(0,30)}"`);
    mismatches++;
  }
}
if (mismatches === 0) {
  console.log('  ALL ' + len + ' IDs MATCH PERFECTLY! ');
} else {
  console.log('  Total mismatches: ' + mismatches);
}
