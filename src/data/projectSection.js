
export const projectSix = {
  tagline: "Checkout Our Work",
  title: "Recent project list",
  projects: [
    {
      id: 1,
      image: "project-1-1.jpg",
      category: "Project List",
      title: "Substantial Growth",
    },
    {
      id: 2,
      image: "project-1-2.jpg",
      category: "Project List",
      title: "Substantial Growth",
    },
    {
      id: 3,
      image: "project-1-3.jpg",
      category: "Project List",
      title: "Substantial Growth",
    },
    {
      id: 4,
      image: "project-1-4.jpg",
      category: "Project List",
      title: "Substantial Growth",
    },
    {
      id: 5,
      image: "project-1-1.jpg",
      category: "Project List",
      title: "Substantial Growth",
    },
    {
      id: 6,
      image: "project-1-2.jpg",
      category: "Project List",
      title: "Substantial Growth",
    },
    {
      id: 7,
      image: "project-1-3.jpg",
      category: "Project List",
      title: "Substantial Growth",
    },
    {
      id: 8,
      image: "project-1-4.jpg",
      category: "Project List",
      title: "Substantial Growth",
    },
    {
      id: 9,
      image: "project-1-1.jpg",
      category: "Project List",
      title: "Substantial Growth",
    },
    {
      id: 10,
      image: "project-1-2.jpg",
      category: "Project List",
      title: "Substantial Growth",
    },
    {
      id: 11,
      image: "project-1-3.jpg",
      category: "Project List",
      title: "Substantial Growth",
    },
    {
      id: 12,
      image: "project-1-4.jpg",
      category: "Project List",
      title: "Substantial Growth",
    },
    {
      id: 13,
      image: "project-1-1.jpg",
      category: "Project List",
      title: "Substantial Growth",
    },
    {
      id: 14,
      image: "project-1-2.jpg",
      category: "Project List",
      title: "Substantial Growth",
    },
    {
      id: 15,
      image: "project-1-3.jpg",
      category: "Project List",
      title: "Substantial Growth",
    },
    {
      id: 16,
      image: "project-1-4.jpg",
      category: "Project List",
      title: "Substantial Growth",
    },
  ],
};

export const projectSeven = [
  {
    id: 1,
    image: "project-2-1.jpg",
    title: "Web Marketing",
    category: "SEO, Marketin",
  },
  {
    id: 2,
    image: "project-2-2.jpg",
    title: "Web Marketing",
    category: "SEO, Marketin",
  },
  {
    id: 3,
    image: "project-2-3.jpg",
    title: "Web Marketing",
    category: "SEO, Marketin",
  },
  {
    id: 4,
    image: "project-2-4.jpg",
    title: "Web Marketing",
    category: "SEO, Marketin",
  },
];

export const projectEight = {
  tagline: "Recent Cases",
  title: "New Case Studies",
  projects: [
    {
      id: 1,
      image: "project-8-1.jpg",
      title: "Business Growth",
    },
    {
      id: 2,
      image: "project-8-2.jpg",
      title: "Business Growth",
    },
    {
      id: 3,
      image: "project-8-3.jpg",
      title: "Business Growth",
    },
    {
      id: 4,
      image: "project-8-4.jpg",
      title: "Business Growth",
    },
    {
      id: 5,
      image: "project-8-1.jpg",
      title: "Business Growth",
    },
    {
      id: 6,
      image: "project-8-2.jpg",
      title: "Business Growth",
    },
    {
      id: 7,
      image: "project-8-3.jpg",
      title: "Business Growth",
    },
    {
      id: 8,
      image: "project-8-4.jpg",
      title: "Business Growth",
    },
  ],
};

export const projects = [
  {
    id: 1,
    images: Array.from({ length: 31 - 18 + 1 }, (_, index) => `featured-image-${index + 18}.jpg`),
    title: "Primero-Avionics: Airline Reservation System",
    about: "Primero-Avionics lets you book flights, select seats, generate tickets, and tracks the flight.",
    paragraphs: [
      `"Primero Avionics" has modernized the airline reservation process, eliminating the inefficiencies of the past where employees manually handled reservations with index cards. The system allows users to create accounts, providing them with convenient access to reservation management. Users can effortlessly select flights based on day, departure, and destination, with real-time updates on availability.`,
      `The system supports flexible booking options, enabling users to reserve multiple tickets and choose their preferred class (Business or Economy) for each passenger. Seamless online payment processing with credit cards ensures a secure and swift transaction experience. Once payment is confirmed, electronic tickets are generated and accessible on the website, with copies sent to users via email for reference.`,
      `Ticket retrieval is simplified through unique ticket numbers, allowing users to easily access and review their flight details. Administrators have robust capabilities, managing and updating the list of available flights in real-time through a connected database. They can also monitor and track website activities to ensure smooth operations.`,
      `The system's integrated database stores comprehensive information, including flight details and user accounts, ensuring accuracy and providing up-to-date information to users. "Primero Avionics" redefines the air travel reservation experience, offering a user-friendly interface, efficient booking options, and robust security measures, making it convenient for users to plan their journeys anytime, anywhere.`,
    ],
    clients: "Semester Project",
    category: "Web Development",
    link: "https://airline.novacare.site/",
    githubLink: "https://github.com/AshhadK/primero-avionics"
  },
  {
    id: 2,
    images: Array.from({ length: 47 - 32 + 1 }, (_, index) => `featured-image-${index + 32}.jpg`),
    title: "The Datayard : Backup & Restoration solution",
    about:
      "The Datayard is a backup, restore and a user log tracker plugin for Wordpress website.",

    paragraphs: [
      `Business websites are increasingly susceptible to threats that can have significant repercussions, stemming from either malicious intent or inadvertent user errors. These risks encompass file and data corruption, unintentional alterations by non-technical users, and, in severe cases, website crashes and database hacking.`,
      `The surge in websites, particularly those using WordPress, has amplified security concerns, driven by vulnerability exploitation and user mistakes. Due to the high cost associated with on-site security solutions, organizations are turning to outsourcing for their security needs. This report proposes the development of a security service aimed at safeguarding against unintentional changes to websites, facilitating swift recovery.`,
      `The project's methodology involves a systematic approach with verification and validation at each stage. The process includes analysis, design, and implementation, featuring website and plugin development. The chosen tools and languages encompass PHP for backend and plugin development, HTML, CSS, JS for frontend, and MySQL for data storage. Third-party integrations with Stripe, Dropbox, and Crypto are also incorporated. The Datayard plugin's core services encompass backups, restoration, user activity monitoring, and the ability to revert user actions.`,
      `The Datayard aspires to be a comprehensive security solution catering to the diverse needs of business startups and small-scale enterprises. Categorized services based on security requirements and organizational size will address the unique challenges faced by WordPress websites, offering relief from potential issues.`,
      `Major findings underscore that website threats arise from both intentional malicious attempts and user unawareness. The proposed solution, The Datayard, aims to address these security needs effectively, providing support for WordPress-based websites and mitigating potential challenges.`,
    ],
    clients: "Semester Project",
    category: "Web Development",
    link: "",
    githubLink: "https://github.com/AshhadK/the_datayard"
  }
  ,
  {
    id: 3,
    images: ["featured-image-48.jpg"],
    video: require("../assets/videos/featured-video-1.mp4"),
    title: "The Datayard : Backup & Restoration solution",
    about:
      "The Datayard is a backup, restore and a user log tracker plugin for Wordpress website.",
    paragraphs: [
      `Business websites are increasingly susceptible to threats that can have significant repercussions, stemming from either malicious intent or inadvertent user errors. These risks encompass file and data corruption, unintentional alterations by non-technical users, and, in severe cases, website crashes and database hacking.`,
      `The surge in websites, particularly those using WordPress, has amplified security concerns, driven by vulnerability exploitation and user mistakes. Due to the high cost associated with on-site security solutions, organizations are turning to outsourcing for their security needs. This report proposes the development of a security service aimed at safeguarding against unintentional changes to websites, facilitating swift recovery.`,
      `The project's methodology involves a systematic approach with verification and validation at each stage. The process includes analysis, design, and implementation, featuring website and plugin development. The chosen tools and languages encompass PHP for backend and plugin development, HTML, CSS, JS for frontend, and MySQL for data storage. Third-party integrations with Stripe, Dropbox, and Crypto are also incorporated. The Datayard plugin's core services encompass backups, restoration, user activity monitoring, and the ability to revert user actions.`,
      `The Datayard aspires to be a comprehensive security solution catering to the diverse needs of business startups and small-scale enterprises. Categorized services based on security requirements and organizational size will address the unique challenges faced by WordPress websites, offering relief from potential issues.`,
      `Major findings underscore that website threats arise from both intentional malicious attempts and user unawareness. The proposed solution, The Datayard, aims to address these security needs effectively, providing support for WordPress-based websites and mitigating potential challenges.`,
    ],
    clients: "Semester Project",
    category: "Plugin Development",
    link: "",
    githubLink: "https://github.com/AshhadK/the_datayard"
  },
  {
    id: 4,
    images: ["featured-image-49.jpg"],
    video: require("../assets/videos/featured-video-5.mp4"),
    title: "Salezman App: Sales Base Application",
    about: "Salezman App helps you better for sales",
    paragraphs: [
      `In our Flutter app, the primary aim is to create a seamless and user-friendly experience for students seeking job opportunities. The app consists of multiple pages to gather detailed information about the users and their career preferences.`,
      `The development of the real-time salesman app at Muller & Phipps Pakistan (Pvt.) Ltd. began with designing the interface using Figma. This step ensured a user-friendly and efficient layout, setting the foundation for a seamless user experience. The next phase involved creating the app in Flutter to replicate the functionality of an existing Java-based application. This process showcased a blend of design expertise and technical proficiency, resulting in a practical and innovative solution for sales management.`,
      `The salesman app is designed to streamline the daily operations of sales representatives. It features real-time data synchronization, allowing salesmen to access the latest product information, inventory levels, and customer details on the go.`,
      `The app includes functionalities such as order placement, route planning, and sales tracking, all accessible through an intuitive interface. Additionally, it supports offline capabilities, enabling salesmen to continue working without an internet connection, with automatic data syncing once connectivity is restored. This app aims to improve productivity and efficiency, making it an essential tool for modern sales teams.`,
      `In summary, the real-time salesman app developed during the internship not only replicates the functionality of the existing Java application but also enhances it with a user-friendly interface and real-time data capabilities.`,
    ],
    clients: "Muller & Phipps Pvt Ltd. M&P",
    category: "Mobile Development",
    link: "https://figma.com/proto/kPmHdvnLyv60ON3krAm2vK/SALESMAN-APP?node-id=168-5&p=f&t=3j2idT8QVTfdXeqh-0&scaling=scale-down&content-scaling=fixed&page-id=15%3A49",
    githubLink: "https://github.com/AshhadK/salezman_app"
  },
  {
    id: 5,
    images: ["featured-image-50.jpg"],
    video: require("../assets/videos/featured-video-4.mp4"),
    title: "BP - Yard Application: Keep records of your Blood Pressure ",
    about:
      "You can keep track of your blood pressure through this app and it'll remind you too",
    paragraphs: [
      `In our Flutter app, the primary aim is to create a seamless and user-friendly experience for students seeking job opportunities. The app consists of multiple pages to gather detailed information about the users and their career preferences.`,
      `Introducing BP-Yard, an advanced health monitoring application aimed at revolutionizing the way individuals track and manage their blood pressure on a daily basis. The core objective of BP-Yard is to provide users with a comprehensive tool that not only records real-time blood pressure data but also offers insightful feedback, enabling a proactive approach to cardiovascular health.`,
      `BP-Yard's standout feature lies in its ability to simplify the process of recording daily blood pressure readings. Users can effortlessly input their data, creating a detailed log that serves as a valuable resource for ongoing health assessment. This streamlined approach ensures that users can maintain a consistent record of their cardiovascular metrics.`,
      `The app categorizes blood pressure readings into clear indicators—high, low, or normal—providing users with an immediate understanding of their current cardiovascular status. This smart feedback system adds a layer of convenience and accessibility to health monitoring.`,
      `Users can set reminders within the app to prompt them to check their blood pressure regularly. This feature is a proactive measure to encourage users to stay committed to their health routine, fostering a habit of regular check-ins.`,
    ],
    clients: "Personal Project",
    category: "Mobile Development",
    link: "https://www.figma.com/design/ojlr8LbOTYRCQNWzwbUO8H/BP-YARD?node-id=0-1&t=CiYoOEr5s7tU1lWJ-1",
    githubLink: "https://github.com/AshhadK/bp_yard",

  },
  {
    id: 6,
    images: ["featured-image-51.jpg"],
    video: require("../assets/videos/featured-video-7.mp4"),
    title: "Jooble App: A place for job hunting",
    about: "Jooble App is an application similar to LinkedIn for job hunting",
    paragraphs: [
      `In our Flutter app, the primary aim is to create a seamless and user-friendly experience for students seeking job opportunities. The app consists of multiple pages to gather detailed information about the users and their career preferences.`,
      `The journey begins with a login/signup page where users create their accounts by providing a unique username and password. To ensure account security, a confirmation email is sent for activation.`,
      `Upon successful login, users navigate to the second page to furnish their personal and professional details. This includes their name, age, specialization, education level, and location. Additionally, users can input links to their CV, LinkedIn, Twitter, YouTube, Github, Instagram, and any other platform showcasing their technical skills.`,
      `Moving on to the third page, we employ a more visual approach. Users are presented with a set of images representing various aspects of their ideal workplace, job role, and an additional task they would willingly perform for their employer without cost.`,
      `The final page delves into the user's future aspirations. Users articulate their plans for the next five years, providing a comprehensive understanding of their career trajectory.`,
      `In summary, our app not only captures the basic demographic and professional information but also delves into the user's preferences and long-term goals. This multifaceted approach ensures that employers accessing this data gain a holistic view of each candidate. The app is designed to be intuitive, secure, and tailored to the unique needs of job-seeking students.`,
    ],
    clients: "Freelance Project",
    category: "Mobile Development",
    link: "https://www.figma.com/design/IXXekqrxANhfxCt1MBoDgy/Jooble?node-id=0-1&t=i2gJweMCyDfhI0ru-1",
    githubLink: "https://github.com/AshhadK/jooble_app",

  },

  {
    id: 7,
    images: ["featured-image-52.jpg"],
    video: require("../assets/videos/featured-video-3.mp4"),
    title: "Expense Diaries : Keep your expenses tracked",
    about: "A comprehensive financial management app for tracking accounts, expenses, and investments with ease and precision.",
    paragraphs: [
      `Expense Diaries is a comprehensive financial management app designed to simplify your personal finance tracking. Here's what you can do with Expense Diaries`,
      `Sign Up & Login: Create a new account or log in using alternative login (biometrics) options for convenience.`,
      `Manage Accounts: Add your bank accounts along with their respective amounts. You can deposit money into these accounts and transfer funds between them seamlessly.`,
      `Add Debit Cards: Keep track of all your debit cards in one place.`,
      `Investment Tracking: A dedicated page to view all your investments and add daily profits, helping you monitor and manage your investment portfolio effectively.`,
      `Expense Tracking: Record your daily expenses easily. Choose the bank account to be debited for each expense, ensuring accurate tracking of your spending.`,
      `View Statements: Access detailed statements that show all credits and debits across your accounts, helping you stay on top of your financial transactions.`

    ],
    clients: "Personal Porject",
    category: "Mobile Development",
    link: "https://www.figma.com/proto/WK30lI9DYxwDt8wGy9o9Vv/EXPENSE-DIARIES?node-id=270-92&p=f&t=RkY4hriPAanGD8rU-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1",
    githubLink: "https://github.com/AshhadK/expense_diaries",
  },
  {
    id: 8,
    images: ["featured-image-53.jpg"],
    video: require("../assets/videos/featured-video-6.mp4"),
    title: "Test Signup-Login",
    about: "A development task assigned to me using BLOC statemanagement ",
    paragraphs: [
      `This application consists of 4 screens i.e. HomePage, Signup, Login and Profile. `,
      `The first page HOME PAGE takes the email of the user and then check wether the user is
already registered to our app or not? If the user is already registered then you can
navigate it to the Login Page and if the user is not already registered then you can
navigate it to the signup page.`,
      `In the SIGN UP page you have to register the user by taking its name and password. You have to
use the same email which user entered on the welcome screen.`,
      `In the LOG IN page you have to check that if the password entered by user is correct or not? If
the password is correct then you should navigate the user to the profile page else you
are required to show an error popup with the proper message.
b. Here you have to implement the feature that if we click on view the password will
become visible and “view” will change to “hide”.`,
      `The last screen PROFILE INFO displays all the user information (profile image, full name, email
address,phone number and address).`,
    ],
    clients: "Dev Test Task",
    category: "Mobile Development",
    link: "",
    githubLink: "https://github.com/AshhadK/dev_task",
  },

  {
    id: 9,
    images: ["featured-image-56.jpg", "featured-image-57.jpg"],
    title: "MovieFinder",
    about: "Find Movies through open movie api",
    paragraphs: [`Created a simple React website with the Open Movie API integrated. It has a search functionality, and when a movie is searched, the movie details are displayed upon clicking the movie title.`],
    clients: "Personal Project",
    category: "Website Development",
    link: "Personal Project",
    githubLink: "https://github.com/AshhadK/open-movie",
  },
  {
    id: 10,
    images: Array.from({ length: 78 - 58 + 1 }, (_, index) => `featured-image-${index + 58}.jpg`),
    title: "TeachMate: Online Tutoring Platform",
    about: "A Platform for Students to Find best teachers for tution",
    paragraphs: [`This tutoring platform allows students to find and connect with teachers based on desired subjects and locations. Teachers can post their
expertise in specific subjects and indicate the areas they can travel to, facilitating a seamless match between students and teachers
`],
    clients: "Freelance Project",
    category: "Website Development",
    link: "Freelance Project",
    githubLink: "https://github.com/AshhadK/teach-mate",
  },
  {
    id: 11,
    images: ["featured-image-13.jpg"],
    title: "Cuirderi: Online Market Place for Custom Jackets",
    about: "Cuirderi offers premium custom leather jackets, allowing customers to personalize every detail for a perfect fit.",
    paragraphs: [
      "Cuirderi is dedicated to creating high-quality leather jackets that stand out for their craftsmanship and attention to detail. The brand believes in offering customers the freedom to design their jackets according to their own taste. Whether it's choosing the color, the type of leather, or the overall fit, Cuirderi ensures that every jacket is a perfect match for the customer’s personality and style.",
      "The brand prides itself on its commitment to providing premium quality without the steep price tag. By cutting out middlemen and focusing on direct-to-consumer sales, Cuirderi is able to offer handcrafted jackets at an affordable price, ensuring customers get excellent value for their money. Each jacket is made with care and precision, ensuring longevity and a timeless appeal that will last for years.",
      "What truly sets Cuirderi apart is the dedication to customer satisfaction. With a production time of just 20 days, customers can expect fast delivery without compromising on quality. Each jacket goes through over 40 quality control checkpoints, ensuring that every stitch is perfect and the finished product meets the highest standards. Cuirderi doesn’t just sell jackets; they provide a tailored experience that reflects the customer’s individuality."
    ],
    clients: "CodesSavvy Dev Test Task",
    category: "Website Development",
    link: "https://www.cuirderi.com/",

  },
  {
    id: 12,
    images: ["featured-image-14.jpg"],
    title: "Safe Kiddo Gear: Safety Essentials for Kids",
    about: "Safe Kiddo Gear provides high-quality, child-safe products designed for everyday use, ensuring parents can keep their kids safe and comfortable.",
    paragraphs: [
      "Safe Kiddo Gear specializes in offering a wide range of safe and durable products for children, from protective gear to everyday essentials.",
      "The brand prioritizes child safety by using high-quality, non-toxic materials and ensuring all products meet safety regulations.",
      "Parents trust Safe Kiddo Gear for its commitment to quality, affordability, and peace of mind, providing essential items that make parenting easier."
    ],
    clients: "Freelance Project",
    category: "CMS - Shopify",
    link: "https://safekiddogear.com/"
  },
  {
    id: 12,
    images: ["featured-image-14.jpg"],
    title: "Safe Kiddo Gear: Safety Essentials for Kids",
    about: "Safe Kiddo Gear provides high-quality, child-safe products designed for everyday use, ensuring parents can keep their kids safe and comfortable.",
    paragraphs: [
      "Safe Kiddo Gear is a trusted destination for parents seeking high-quality products designed to keep their children safe and comfortable. From protective gear to everyday essentials, the brand offers a wide range of carefully crafted items that meet rigorous safety standards. Every product is designed with children's well-being in mind, using non-toxic materials that parents can trust.",
      "The brand’s mission goes beyond just providing products; it focuses on creating solutions that make parenting simpler and stress-free. Whether parents are looking for durable outdoor gear, ergonomic accessories, or thoughtful everyday items, Safe Kiddo Gear delivers with a focus on functionality and comfort. This commitment ensures that both kids and parents enjoy peace of mind.",
      "Parents choose Safe Kiddo Gear for its dedication to quality, affordability, and safety. With an emphasis on innovation and practicality, the brand continues to be a go-to choice for families who prioritize their children’s well-being without compromising on style or functionality."
    ],
    clients: "Freelance Project",
    category: "CMS - Shopify",
    link: "https://safekiddogear.com/"
  },
  {
    id: 13,
    images: ["featured-image-15.jpg"],
    title: "Kustom Neons Falkirk: Personalized Neon Signs",
    about: "Kustom Neons Falkirk specializes in creating custom neon signs for homes, businesses, and events, adding a vibrant and unique touch to any space.",
    paragraphs: [
      "Kustom Neons Falkirk brings creativity to life by crafting personalized neon signs that add a vibrant and stylish touch to any space. From home decor to commercial signage and event decorations, the brand offers fully customizable options that fit every need and aesthetic preference.",
      "The brand’s dedication to high-quality craftsmanship ensures that each neon sign is visually stunning and durable. With a variety of design options, colors, and sizes, customers can bring their creative visions to life with ease. The attention to detail and expert craftsmanship ensure that the final product not only looks beautiful but also stands the test of time.",
      "Whether you're looking to elevate your business branding, enhance your home interior, or create a memorable event setup, Kustom Neons Falkirk delivers bespoke solutions. Their personalized approach and commitment to customer satisfaction make them a trusted partner for unique and impactful signage."
    ],
    clients: "Freelance Project",
    category: "CMS - Shopify",
    link: "https://kustomneonsfalkirk.co.uk/"
  },
  {
    id: 14,
    images: ["featured-image-16.jpg"],
    title: "The Yoga Tree Mat: Premium Eco-Friendly Yoga Mats",
    about: "The Yoga Tree Mat offers sustainable, eco-friendly yoga mats designed to enhance your practice with comfort and durability.",
    paragraphs: [
      "The Yoga Tree Mat is committed to supporting mindful and eco-conscious lifestyles by offering premium yoga mats made from sustainable and non-toxic materials. These mats are thoughtfully crafted to provide a superior grip and cushioning, enhancing every yoga session with comfort and stability.",
      "The brand believes that a high-quality yoga mat is essential for a fulfilling practice. Each mat is designed to withstand rigorous use while maintaining its shape and functionality. The combination of durability and comfort makes these mats an excellent choice for both beginners and seasoned yoga practitioners.",
      "Beyond just providing mats, The Yoga Tree Mat encourages a lifestyle of balance and respect for the environment. Their commitment to sustainability and quality has made them a trusted name among yoga enthusiasts seeking products that align with their values."
    ],
    clients: "Freelance Project",
    category: "CMS - Shopify",
    link: "https://www.theyogatreemat.com/"
  },
  {
    id: 15,
    images: ["featured-image-17.jpg"],
    title: "Luca + Danni: Handcrafted Jewelry with Meaning",
    about: "Luca + Danni creates meaningful, handcrafted jewelry that celebrates individuality and life's special moments.",
    paragraphs: [
      "Luca + Danni is a brand that believes in the power of meaningful jewelry. Their artisan-crafted pieces are designed to celebrate individuality and commemorate life's special moments. From beautifully crafted bracelets to elegant necklaces, each piece is a work of art with a story to tell.",
      "What sets Luca + Danni apart is their commitment to quality and craftsmanship. Every piece is carefully handcrafted with precision and care, ensuring that it not only looks stunning but also holds lasting value. The brand takes pride in creating jewelry that resonates emotionally with its wearers.",
      "Whether you're looking for a thoughtful gift or a personal keepsake, Luca + Danni offers a wide range of options that blend elegance and personal meaning. Their dedication to craftsmanship and storytelling makes them a favorite among those who appreciate jewelry with heart and soul."
    ],
    clients: "Freelance Project",
    category: "CMS - Shopify",
    link: "https://www.lucadanni.com"
  },
  {
    id: 16,
    images: ["featured-image-79.jpg"],
    title: "Blue Light Barrier: Stylish Blue Light Glasses",
    about: "Blue Light Barrier provides stylish and protective eyewear designed to shield your eyes from harmful blue light emissions.",
    paragraphs: [
      "Blue Light Barrier offers a chic and functional solution to the modern-day problem of screen-induced eye strain. Their stylish blue light glasses are designed to protect your eyes from harmful blue light emissions while keeping you fashionable.",
      "The brand understands the importance of blending style with functionality. With a variety of frame designs and color options, customers can find the perfect pair to complement their look. The lightweight and comfortable design ensures that you can wear these glasses all day without discomfort.",
      "Whether you're working long hours in front of a computer, gaming, or simply browsing your phone, Blue Light Barrier glasses provide essential protection. Their commitment to quality and customer satisfaction makes them a must-have accessory for anyone seeking to maintain eye health while staying stylish."
    ],
    clients: "Freelance Project",
    category: "CMS - Shopify",
    link: "https://www.bluelightbarrier.com"
  },
  {
    id: 17,
    images: ["featured-image-80.jpg"],
    title: "Experience Fresh: Inspiring Culinary Creations",
    about: "Experience Fresh provides expert culinary tips, inspiring recipes, and resources to elevate your cooking adventures.",
    paragraphs: [
      "Experience Fresh is your go-to destination for culinary inspiration, offering a treasure trove of creative recipes, expert cooking tips, and product recommendations. Whether you're a beginner in the kitchen or a seasoned chef, this platform empowers you to create delicious meals with confidence.",
      "The brand focuses on making cooking accessible, fun, and rewarding for everyone. With easy-to-follow recipes and thoughtful insights, Experience Fresh helps home cooks elevate their skills and explore new flavors.",
      "Whether it's a special occasion or everyday meal planning, Experience Fresh is dedicated to fostering a love for cooking. Their curated collection of content makes it easier than ever to discover and enjoy the joy of food preparation."
    ],
    clients: "Freelance Project",
    category: "CMS - WordPress",
    link: "https://experiencefresh.com/"
  },
  {
    id: 18,
    images: ["featured-image-81.jpg"],
    title: "Navion Senior Solutions: Compassionate Senior Care",
    about: "Navion Senior Solutions provides personalized care and living options designed to enhance the lives of seniors.",
    paragraphs: [
      "Navion Senior Solutions is dedicated to providing compassionate and tailored care solutions for seniors. Their range of services includes independent living, assisted living, memory care, and respite care, all designed to meet the diverse needs of aging individuals.",
      "With a focus on dignity and respect, Navion creates nurturing environments where seniors can thrive physically, mentally, and socially. Their expert staff is trained to provide personalized care that promotes health and happiness.",
      "Navion Senior Solutions is a trusted partner for families seeking high-quality care for their loved ones. Their commitment to excellence and compassionate service makes them a leader in senior care."
    ],
    clients: "Freelance Project",
    category: "CMS - WordPress",
    link: "https://navionseniorsolutions.com/"
  },
  {
    id: 19,
    images: ["featured-image-82.jpg"],
    title: "CarterCo Plumbing: Expert Plumbing Solutions",
    about: "CarterCo Plumbing offers professional plumbing services for residential and commercial clients in Australia.",
    paragraphs: [
      "CarterCo Plumbing is a trusted name in the Australian plumbing industry, offering a wide range of services, including repairs, installations, and maintenance for both residential and commercial properties.",
      "The brand is known for its team of highly skilled and certified plumbers who are dedicated to delivering prompt and reliable solutions. From emergency repairs to complex installations, CarterCo Plumbing handles every job with precision and care.",
      "Their commitment to customer satisfaction and high-quality service has made them a preferred choice for clients seeking dependable plumbing solutions. CarterCo Plumbing ensures that your plumbing systems run smoothly and efficiently."
    ],
    clients: "Freelance Project",
    category: "CMS - WordPress",
    link: "https://cartercoplumbing.com.au/"
  },
  {
    id: 20,
    images: ["featured-image-83.jpg"],
    title: "Zayra Dental: Comprehensive Dental Care",
    about: "Zayra Dental provides high-quality dental services designed to promote optimal oral health for patients of all ages.",
    paragraphs: [
      "Zayra Dental is committed to delivering comprehensive and personalized dental care services in a comfortable and friendly environment. From routine check-ups to advanced dental procedures, they cater to the diverse needs of their patients.",
      "The clinic is equipped with state-of-the-art technology and staffed by experienced dental professionals who prioritize patient care and comfort. Their range of services includes preventive care, cosmetic dentistry, and restorative treatments.",
      "Zayra Dental's dedication to excellence and patient satisfaction has earned them a reputation as a trusted provider of dental care in the community. They help patients achieve healthy and beautiful smiles that last a lifetime."
    ],
    clients: "Freelance Project",
    category: "CMS - WordPress",
    link: "https://zayradental.co.uk/"
  },
  {
    id: 21,
    images: ["featured-image-84.jpg"],
    title: "Fast Line Insurance: Comprehensive Coverage Solutions",
    about: "Fast Line Insurance offers personalized insurance plans designed to protect your assets and provide peace of mind.",
    paragraphs: [
      "Fast Line Insurance specializes in providing comprehensive and customized insurance solutions to meet the diverse needs of individuals and businesses. Their range of products includes auto, home, health, and commercial insurance.",
      "The brand is dedicated to simplifying the insurance process, making it easier for clients to find the right coverage at competitive rates. Their team of experienced professionals works closely with clients to assess their needs and recommend suitable plans.",
      "Fast Line Insurance is known for its exceptional customer service and commitment to delivering reliable protection. They help clients navigate the complexities of insurance and ensure they are well-protected against unexpected events."
    ],
    clients: "Freelance Project",
    category: "CMS - WordPress",
    link: "https://fastlineinsurance.com/"
  },
  {
    id: 22,
    images: ["featured-image-85.jpg"],
    title: "Bubble Games: Fun and Engaging Gaming Experiences",
    about: "Bubble Games offers a wide selection of fun and engaging games designed for players of all ages.",
    paragraphs: [
      "Bubble Games is a platform dedicated to providing fun and engaging gaming experiences for players of all ages. Their collection includes a variety of games that are designed to entertain and challenge players.",
      "The brand focuses on creating interactive and visually appealing games that capture the imagination. Whether you're looking for casual entertainment or a more competitive gaming experience, Bubble Games has something for everyone.",
      "Bubble Games is committed to enhancing the gaming experience by constantly updating their collection with new and exciting titles. They are a go-to destination for anyone seeking entertainment and fun."
    ],
    clients: "Freelance Project",
    category: "CMS - WordPress",
    link: "https://bubblegames.com.au/"
  },
    {
    id: 23,
    images: ["featured-image-87.jpg"],
    title: "Bancroft Construction: Expert Construction Solutions",
    about: "Bancroft Construction provides professional construction services for residential, commercial, and industrial projects.",
    paragraphs: [
      "Bancroft Construction is a trusted provider of expert construction services, delivering high-quality solutions for residential, commercial, and industrial projects. Their team of experienced professionals handles every aspect of construction, from design and planning to execution and project management.",
      "The brand is known for its commitment to quality, safety, and customer satisfaction. With a focus on innovation and efficiency, Bancroft Construction delivers projects that meet and exceed client expectations.",
      "Whether it's a small renovation or a large-scale development, Bancroft Construction ensures that every project is completed on time, within budget, and to the highest standards. Their dedication to excellence has earned them a reputation as a reliable and trusted construction partner."
    ],
    clients: "Freelance Project",
    category: "CMS - WordPress",
    link: "https://bancroftconstruction.com/"
  },
    {
    id: 24,
    images: ["featured-image-54.jpg"],
    title: "Attendance Management System",
    about: "Attendance Management System is a software solution designed to help organizations track and manage employee attendance efficiently.",
    paragraphs: [
      "Crafting user-centric interfaces is my passion. Using Illustrator, Figma, and Adobe XD, I design visually appealing graphics and seamless layouts. Illustrator refines intricate details, Figma facilitates collaborative prototyping, and Adobe XD brings designs to life with interactive prototypes. Join me in creating digital experiences where innovation meets aesthetic precision.",
      "Prototyping is where ideas come to life. With Illustrator, Figma, and Adobe XD, I seamlessly transition from graphic elements to interactive designs. Illustrator ensures detailed graphics, Figma streamlines collaborative prototyping, and Adobe XD transforms static designs into engaging prototypes. Explore the fusion of creativity and functionality in the realm of prototyping, where every click tells a story of design evolution.",
      "In our Flutter app, the primary aim is to create a seamless and user-friendly experience for students seeking job opportunities. The app consists of multiple pages to gather detailed information about the users and their career preferences.",
      "The journey begins with a login/signup page where users create their accounts by providing a unique username and password. To ensure account security, a confirmation email is sent for activation.",
      "Upon successful login, users navigate to the second page to furnish their personal and professional details. This includes their name, age, specialization, education level, and location. Additionally, users can input links to their CV, LinkedIn, Twitter, YouTube, Github, Instagram, and any other platform showcasing their technical skills.",
      "Moving on to the third page, we employ a more visual approach. Users are presented with a set of images representing various aspects of their ideal workplace, job role, and an additional task they would willingly perform for their employer without cost.",
      "The final page delves into the user's future aspirations. Users articulate their plans for the next five years, providing a comprehensive understanding of their career trajectory.",
      "In summary, our app not only captures the basic demographic and professional information but also delves into the user's preferences and long-term goals. This multifaceted approach ensures that employers accessing this data gain a holistic view of each candidate. The app is designed to be intuitive, secure, and tailored to the unique needs of job-seeking students."
    ],
    clients: "Freelance Project",
    category: "CMS - WordPress",
    link: "https://bubblegames.com.au/"
  },
    
    {
    id: 25,
    images: ["featured-image-90.jpg"],
    title: "Humsafar Forever Love",
    about: "A matrimonial matchmaking platform",
    paragraphs: [
      "Humsafar Forever Love is a matrimonial matchmaking platform that helps users find suitable life partners based on their personal preferences. The platform provides a secure, user-friendly, and reliable matchmaking experience.",
"Users can create and manage profiles, add personal and preference-based details, and explore potential matches. The frontend is built with React JS to ensure smooth navigation and responsive design, while the backend is developed using Node JS and Express JS. MySQL is used for secure data storage and profile management, along with an admin panel for efficient platform control."
       ],
    clients: "Company Project",
 
      category: "Web Development",
    link: "https://humsafarforeverlove.com/",
  }
  ,
   {
    id: 26,
    images: ["featured-image-91.jpg"],
    title: "Quantumnexa",
    about: "Company Website.",
    paragraphs: [
      "QuantumNexa is a modern corporate website developed to present the company’s services, vision, and brand identity with a clean and professional design. The website is fully responsive and optimized to deliver a smooth user experience across all devices.",
"This project was frontend-only, built using React JS. The focus was on creating reusable components, clean UI layouts, responsive design, and performance optimization. The website follows modern design practices and is structured to be SEO-friendly."
    ],
    clients: "Company Project",
 
      category: "Web Development",
    link: "https://quantumnexa.com/",
  },
   {
    id: 27,
    images: ["featured-image-92.jpg"],
    title: "Genvita",
    about: "Company Website.",
    paragraphs: [
      "Genvita Cosmetology is a modern skincare and beauty brand dedicated to enhancing natural beauty through safe, effective, and science-based formulations.",
      "Our products are carefully developed to support healthy skin and hair, using high-quality ingredients suitable for all skin types.",
      "At Genvita, we focus on quality, safety, and visible results, offering dermatologically tested and cruelty-free beauty solutions you can trust."
    ],
    clients: "Genvita",
 
      category: "Web Development",
    link: "https://www.genvitapak.com/",
  },
   {
    id: 28,
    images: ["featured-image-93.jpg"],
    title: "Abzai",
    about: "Company Website.",
    paragraphs: [
      "Abzaipk (also branded as ABZAI™) is a lifestyle and fragrance brand offering premium perfumes and scent products designed to reflect elegance, confidence, and personal style. The brand focuses on delivering long‑lasting fragrances that are crafted for everyday wear with nationwide delivery across Pakistan.",
      "Our collection includes unique and memorable scents inspired by luxury perfumes, made to help you feel confident and refreshed throughout the day. Each fragrance is carefully developed to combine timeless notes with a modern touch, suitable for both men and women.",
      "At Abzaipk, our mission is to provide high‑quality, affordable fragrances that make everyday life more expressive and enjoyable, backed by easy online shopping and delivery services.",
      "Abzaipk (ABZAI™) is a premium fragrance brand offering long‑lasting, elegant scents with nationwide delivery across Pakistan."
    ],
    clients: "Abzai",
 
      category: "Web Development",
    link: "https://abzaipk.com/",
  },
   {
    id: 29,
    images: ["featured-image-94.jpg"],
    title: "MB Enterprize",
    about: "Company Website.",
    paragraphs: [
      "MB Enterprize is an online home décor store dedicated to bringing stylish and modern decorative solutions to homes across Pakistan. We specialize in premium acrylic mirror wall décor and creative décor pieces that elevate your living space with elegance and personality.",
      "Our collection features a variety of eye‑catching wall art, mirror stickers, geometric designs, and themed décor items designed to add charm, depth, and modern flair to every room. Each product is selected for its quality, aesthetic appeal, and ability to transform ordinary walls into inspiring focal points.",
      "At MB Enterprize, we are committed to offering beautiful, affordable, and high‑quality décor options that help you personalize your home with style and creativity.",
      "MB Enterprize is a home décor brand offering stylish acrylic mirror wall décor and decorative pieces designed to enhance interior spaces with modern elegance."
    ],
    clients: "MB Enterprize",
 
      category: "Web Development",
    link: "https://mbenterprize.com/",
  },
   {
    id: 30,
    images: ["featured-image-95.jpg"],
    title: "BN Traders",
    about: "Company Website.",
    paragraphs: [
      "BN Traders is a versatile online store in Pakistan offering a wide range of everyday products including tumblers, home décor, kitchen essentials, storage solutions, organizers, and lifestyle accessories. The brand focuses on quality, variety, and customer convenience, making it easy to shop for useful and stylish items in one place.",
      "We provide a curated selection of practical and trendy products designed to make daily life more efficient and enjoyable. From vacuum-insulated tumblers and travel mugs to household organizers and travel bags, BN Traders brings functional style to your home and lifestyle needs.",
      "Our goal is to deliver quality products with excellent customer service and free delivery on orders above a set value, ensuring a smooth and satisfying shopping experience for customers across Pakistan.",
      "BN Traders is an online lifestyle store in Pakistan offering quality home, kitchen, travel, and daily use products with a focus on variety, value, and customer satisfaction."
    ],
    clients: "BN Traders",
 
    category: "CMS - Shopify",
    link: "https://bntraders.pk/",
  },

   {
    id: 31,
    images: ["featured-image-96.jpg"],
    title: "Luxxesh",
    about: "Home Decor & Acrylic",
    paragraphs: [
     " Luxxesh is a home décor brand dedicated to transforming ordinary spaces into elegant and stylish environments with premium, eye-catching décor products. Our mission is to bring sophistication and charm to your home through unique, high-quality wall décor pieces designed for modern living. ",

"We offer a curated collection of acrylic mirror wall décor, geometric designs, decorative accents, and more that instantly elevate interiors with a luxurious touch. Every piece is crafted with attention to detail, ensuring durability, beauty, and a refined finish.",
"At Luxxesh, we combine premium quality, affordable pricing, and excellent customer support to make your décor shopping experience seamless and rewarding. With free delivery across Pakistan, we aim to bring elegance right to your doorstep.",
    ],
    clients: "Luxxesh",
 
      category: "CMS - Shopify",
    link: "https://luxxesh.com/",
  },
  {
    id: 32,
    images: ["featured-image-97.jpg"],
    title: "Whitening Recipe",
    about: "Skincare Product",
    paragraphs: [
      "Whitening Recipe is a premium skincare brand dedicated to enhancing natural beauty through safe, effective, and science-backed formulations.",
      "Our products are carefully designed to improve skin health, hydration, and glow by combining advanced dermatological research with high-quality ingredients.",
  "At Whitening Recipe, we believe in gentle yet powerful skincare, offering dermatologist-tested solutions that deliver visible results without compromising skin safety.",
        ],
    clients: "Whitening Recipe",
 
      category: "CMS - Shopify",
    link: "https://whiteningrecipe.store/",
  },
 
  {
    id: 33,
    images: ["featured-image-98.jpg"],
    title: "Elara",
    about: "Skincare Product",
    paragraphs: [
      "Elara Skin is a modern skincare brand focused on giving you clear, healthy, and glowing skin.",
"We combine advanced dermatological research with natural ingredients to create products that are safe and effective for everyday use.",
"Our formulations are dermatologist-tested and free from harsh chemicals, designed to nourish and enhance your skin with visible results.",
    ],
    clients: "Elara",
 
      category: "CMS - Shopify",
    link: "https://www.elara.skin/",
  },
   {
    id: 34,
    images: ["featured-image-99.jpg"],
    title: "Chanova Design",
    about: "Interior Design Studio",
    paragraphs: [
      "Designed and developed a modern, elegant website for Chanova Design, a California-based boutique interior design studio. The website showcases the studio’s restorative design philosophy, featured projects, design services, and end-to-end interior design process.",
      "The website focuses on creating a premium and calming digital experience that reflects Chanova Design’s approach to intentional, functional, and wellness-oriented interiors. It presents services ranging from design consultations and curated design packages to full-service design implementation and construction management.",
    ],
    clients: "Upwork Outsource",
 
    category: "CMS - Wix",
    link: "https://chanovadesign.com/",
  },
  {
    id: 35,
    images: ["featured-image-100.jpg"],
    title: "Guardisse",
    about: "Fashion E-commerce Store",
    paragraphs: [
      "Designed and developed a modern e-commerce website for Guardisse, a lifestyle fashion brand specializing in stylish and functional wristlets and wrist wallets. The website provides customers with a seamless shopping experience while showcasing the brand’s collections, product offerings, lifestyle content, and unique design philosophy.",
      "The website combines a clean, premium visual aesthetic with e-commerce functionality, including product collections, promotional sections, blog content, gift cards, customer FAQs, and responsive navigation to create an engaging online shopping experience.",
    ],
    clients: "Upwork Outsource",
    category: "CMS - Wix",
    link: "https://www.guardisse.com/",
  },
  {
    id: 36,
    images: ["featured-image-101.jpg"],
    title: "Contractor Supply Co.",
    about: "B2B Construction Supply ",
    paragraphs: [
      "Designed and developed a modern B2B e-commerce website for Contractor Supply Co., a construction supply company serving contractors, builders, remodelers, property managers, and multifamily professionals.",
      "The platform allows customers to browse and order construction materials including cabinetry, plumbing fixtures, interior finishes, electrical products, door hardware, doors, trim, and related supplies. It also features a secure client portal, real-time inventory availability, online payments, order tracking, saved lists, and scheduled warehouse pickup.",
      "The website was designed to provide contractors with a fast, reliable, and streamlined procurement experience while maintaining a professional and industry-focused digital presence.",
    ],
    clients: "Upwork Outsource",
    category: "CMS - WordPress",
    link: "https://contractorsupplyco.com/",
  },

];
