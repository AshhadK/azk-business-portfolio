import React from "react";
import headerData from "../../data/header";
import { useAppContext } from "../../context/ContextProvider"; // Import the context hook
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import NavItem from "./NavItem";

const { icon, text, email, phone, socials, navItems, navItemsTwo } = headerData;

const MobileMenu = ({ onePage = false }) => {
    // Use the custom context hook
    const { menuOpen, toggleMenu } = useAppContext();

    const newNavItems = onePage ? navItemsTwo : navItems;

    return (
        <div className={`side-menu__block${menuOpen ? " active" : ""}`}>
            <div
                onClick={toggleMenu}
                className="side-menu__block-overlay custom-cursor__overlay"
            >
                <div className="cursor"></div>
                <div className="cursor-follower"></div>
            </div>
            <div className="side-menu__block-inner">
                <div className="side-menu__top justify-content-end">
                    <button
                        onClick={toggleMenu}
                        className="side-menu__toggler side-menu__close-btn"
                    >
                        <Image src={icon} alt="" />
                    </button>
                </div>

                <nav className="mobile-nav__container">
                    <div
                        className="collapse navbar-collapse show clearfix"
                        id="navbarSupportedContent"
                    >
                        <ul className="navigation clearfix">
                            {newNavItems.map((navItem) => (
                                <NavItem navItem={navItem} key={navItem.id} mobile />
                            ))}
                        </ul>
                    </div>
                </nav>
                <div className="side-menu__sep"></div>
                <div className="side-menu__content">
                    <p>{text}</p>
                    <p>
                        <Link to={`mailto:${email}`}>{email}</Link> <br />{" "}
                        <Link to={`tel:${phone.split(" ").join("")}`}>{phone}</Link>
                    </p>
                    <div className="side-menu__social">
                        {socials.map(({ id, icon, to }) => (
                            <Link key={id} to={to}>
                                <i className={icon}></i>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobileMenu;
