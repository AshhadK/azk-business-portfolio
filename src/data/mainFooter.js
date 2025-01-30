import demoBg from "../assets/images/background/footer-bg-2.jpg";
import logo from "../assets/images/footer-logo.png";

export const footer = { year: "2025", author: "Ashhad Zafar Khan" };

export const mainFooterDemo = {
  ...footer,
  demoBg,
  title: "Create Stunning Website Now!",
  tagline: "Purchase rebix Template Now",
  templateLink: "#",
};

export const mainFooter = {
  logo,
  bg: demoBg,
  title: "Let’s Start Working Together",
  about:
    "There are many variation of passages of lorem ipsum available, but the majority suffered.",
  about2: "The new corporate agency theme",
  about3:
    "We’ve grown our business on a set of \n three building blocks. Enjoy the \n people you work.",
  text: "Welcome to My Business Portfolio Website.",
  address: "",
  address3: "",
  address2:
    "214 Gold Street Round Road. 66 \n Code New York, United States \n of America",
  phone: "0315-2920819",
  phone2: "+92-3152920819",
  email: "ashhad.k2@gmail.com",
  textBottom:
    "Email for Details.",
  subscribeText:
    "Register and get notified about the news & updates before it gets too late.",
  socials: [
    {
      id: 1,
      href: "#",
      icon: "fab fa-facebook-square",
    },
    {
      id: 2,
      href: "#",
      icon: "fab fa-twitter",
    },
    {
      id: 3,
      href: "#",
      icon: "fab fa-instagram",
    },
    {
      id: 4,
      href: "#",
      icon: "fab fa-linkedin-in",
    },
  ],
  links: [
    {
      id: 1,
      href: "/about-me",
      title: "About",
    },
    {
      id: 2,
      href: "/services",
      title: "Services",
    },
    {
      id: 3,
      href: "/portfolio",
      title: "Portfolio",
    },

  ],
  ...footer,
  newses: [
    {
      id: 1,
      image: "footer-1-1.png",
      date: "20 Nov, 2020",
      title: "The best digital services for the startups",
    },
    {
      id: 2,
      image: "footer-1-2.png",
      date: "20 Nov, 2020",
      title: "The best digital services for the startups",
    },
  ],
};