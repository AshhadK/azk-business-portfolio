import icon from "../assets/images/icons/close-1-1.png";
import logo1 from "../assets/images/logo.png";


const home = {
  id: 1,
  name: "Home",
  to: "/",
};


const navItems = [
  home,
  {
    id: 2,
    name: "Services",
    to: "/services",
  },
  {
    id: 3,
    name: "Portfolio",
    to: "/portfolio",
  },
  {
    id: 4,
    name: "About",
    to: "/about",
  },

];

export const socials = [
  {
    id: 1,
    icon: "fab fa-linkedin-in",
    to: "https://www.linkedin.com/in/ashhad-zak/",
  },
  {
    id: 2,
    icon: "fab fa-github",
    to: "https://github.com/AshhadK/",
  },
  {
    id: 3,
    icon: "fas fa-envelope",
    to: "ashhad.k2@gmail.com",
  },

];

const headerData = {
  title: "AZK - Portfolio",
  title2: "Welcome to Creative Buinsess Agency.",
  title3: "Welcome to Amazing Consulting Agency.",
  logo1,
  navItems,
  address: "Suite 20 Golden Street USA",
  phone: "0315-2920819",
  phone2: "0315-2920819",
  email: "ashhad.k2@gmail.com",
  socials,
  icon,
  text: "A sleek, high-performance portfolio showcasing my projects, skills, and blog posts. Implemented smooth animations and interactive elements for a dynamic user experience.",
};

export default headerData;
