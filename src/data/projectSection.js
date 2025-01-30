
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
    date: "Jun 2021 - Dec 2021",
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
    date: "Jun 2022 - Aug 2023",
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
    date: "Jun 2022 - Aug 2023",
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
    date: "10 June, 2021",
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
    clients: "John Doe",
    category: "Mobile Development",
    date: "10 June, 2021",
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
    clients: "Jessica Brown Green",
    category: "Mobile Development",
    date: "20 May, 2020",
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
    clients: "Jessica Brown Green",
    category: "Mobile Development",
    date: "20 May, 2020",
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
    clients: "John Doe",
    category: "Mobile Development",
    date: "10 June, 2021",
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
    date: "10 June, 2021",
    link: "",
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
    date: "June 2021 - Dec 2021",
    link: "",
    githubLink: "https://github.com/AshhadK/teach-mate",
  },

];
