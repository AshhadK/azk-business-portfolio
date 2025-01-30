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
    icon: "fab fa-facebook-square",
    to: "#",
  },
  {
    id: 2,
    icon: "fab fa-twitter",
    to: "#",
  },
  {
    id: 3,
    icon: "fab fa-instagram",
    to: "#",
  },
  {
    id: 4,
    icon: "fab fa-pinterest-p",
    to: "#",
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
  text: "azk-khan is a premium Template for Digital Agencies, Start Ups, Small Business and a wide range of other agencies.",
};

export default headerData;
