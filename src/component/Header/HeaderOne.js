import React from "react";
import headerData from "../../data/header";
import useScroll from "../../hooks/useScroll";
import { useAppContext } from "../../context/ContextProvider"; // Import the context hook
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import NavItem from "./NavItem";

const {
  title,
  logo1,
  title2,
  navItems,
  phone,
  socials,
} = headerData;

const HeaderOne = ({
  headerStyle = "header-style-one",
  logo = 1,
  onePage = false,
  topBar = false,
  autoContainer = false,
  links = true,
  rightMenu = false,
}) => {
  const { toggleMenu, toggleSearch } = useAppContext(); // Use context hook
  const { scrollTop } = useScroll(120);
  const newNavItems = navItems;
  let Logo = logo1;

  return (
    <header
      className={`main-header${scrollTop ? " fixed-header" : ""} ${headerStyle}`}
    >
      {topBar && (
        <div className="topbar-four">
          <div className="auto-container">
            <p>{title2}</p>
            <div className="right-content">
              <div className="phone">
                <span className="icon flaticon-call"></span>
                <Link to={`tel:${phone.split(" ").join("")}`}>{phone}</Link>
              </div>
              <ul className="list-unstyled social-links">
                {socials.map(({ id, icon, to }) => (
                  <li key={id}>
                    <Link to={to}>
                      <span className={icon}></span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
      <div className="header-upper">
        <div className={autoContainer ? "inner-container clearfix" : ""}>
          <div
            className={autoContainer ? "auto-container" : "inner-container clearfix"}
          >
            <div className="logo-box">
              <div className="logo">
                <Link to="/" title={title}>
                  <Image
                    id="thm-logo"
                    src={Logo}
                    alt={title}
                    title={title}
                  />
                </Link>
              </div>
            </div>
            <div className="nav-outer clearfix">
              <div onClick={toggleMenu} className="mobile-nav-toggler">
                <span className="icon flaticon-menu-2"></span>
                <span className="txt">Menu</span>
              </div>

              <nav className="main-menu navbar-expand-md navbar-light">
                <div
                  className={autoContainer ? "" : "collapse navbar-collapse show clearfix"}
                  id={autoContainer ? "" : "navbarSupportedContent"}
                >
                  <ul className="navigation clearfix">
                    {newNavItems.map((navItem) => (
                      <NavItem
                        navItem={navItem}
                        key={navItem.id}
                        onePage={onePage}
                      />
                    ))}
                  </ul>
                </div>
              </nav>
            </div>

            {links && (
              <div className="other-links clearfix">
                <div className="link-box">
                  <div className="call-us">
                    <Link
                      className="link"
                      to={`tel:${phone.split(" ").join("")}`}
                    >
                      <span className="icon"></span>
                      <span className="sub-text">Call Anytime</span>
                      <span className="number">{phone}</span>
                    </Link>
                  </div>
                </div>
              </div>
            )}
            {rightMenu && (
              <div className="right-menu">
                <div className="search-btn">
                  <button
                    onClick={toggleSearch}
                    type="button"
                    className="theme-btn search-toggler"
                  >
                    <span className="flaticon-loupe"></span>
                  </button>
                </div>
                <div onClick={toggleMenu} className="mobile-nav-toggler">
                  <span className="bar"></span>
                  <span className="bar"></span>
                  <span className="bar"></span>
                  <span className="txt">Menu</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderOne;
