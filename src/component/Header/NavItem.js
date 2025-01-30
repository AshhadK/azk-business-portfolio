import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const SubItem = ({ subItem = {} }) => {
  const [active, setActive] = useState(false);
  const { pathname } = useLocation();
  const { subItems, to, name, isNew } = subItem;

  const handleActive = (e) => {
    e.preventDefault();
    setActive((prev) => !prev);
  };

  return (
    <li className={`${subItems?.length ? "dropdown" : ""} ${pathname === to ? "current" : ""}`}>
      <Link to={to}>
        {name} {isNew && <span>new</span>}
        {subItems?.length > 0 && (
          <button onClick={handleActive} className={`dropdown-btn${active ? " open" : ""}`}>
            <span className="fa fa-angle-right"></span>
          </button>
        )}
      </Link>
      {subItems?.length > 0 && (
        <ul style={{ display: active ? "block" : "none" }}>
          {subItems.map((item) => (
            <li key={item.id}>
              <Link to={item.to}>
                {item.name} {item.isNew && <span>new</span>}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

const NavItem = ({ navItem = {}, onePage = false }) => {
  const [active, setActive] = useState(false);
  const { pathname } = useLocation();

  const { name, to, subNavItems = [] } = navItem;
  const current = pathname === to || subNavItems.some((item) => item.to === pathname);

  const handleActive = (e) => {
    e.preventDefault();
    setActive((prev) => !prev);
  };

  return (
    <li className={`dropdown${current ? " current" : ""}`}>
      <Link to={to}>
        {name}
        {subNavItems.length > 0 && (
          <button onClick={handleActive} className={`dropdown-btn${active ? " open" : ""}`}>
            <span className="fa fa-angle-right"></span>
          </button>
        )}
      </Link>
      {subNavItems.length > 0 && (
        <ul style={{ display: active ? "block" : "none" }}>
          {subNavItems.map((subItem) => (
            <SubItem key={subItem.id} subItem={subItem} />
          ))}
        </ul>
      )}
    </li>
  );
};

export default NavItem;
