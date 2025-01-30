import useScroll from "../../hooks/useScroll";
import React from "react";
import { Link as ScrollLink } from "react-scroll";

const Layout = ({ children, pageTitle, mainClass }) => {
  document.title = `Portfolio - AZK | ${pageTitle}`;
  const { scrollTop } = useScroll(100);

  return (
    <>
      <main id="wrapper" className={`page-wrapper ${mainClass}`}>
        {children}
      </main>
      {scrollTop && (
        <ScrollLink
          to="wrapper"
          smooth={true}
          duration={500}
          id="backToTop"
          style={{ cursor: "pointer" }}
          className="scroll-to-target scroll-to-top d-inline-block fadeIn animated"
        >
          <i className="fa fa-angle-up"></i>
        </ScrollLink>
      )}
    </>
  );
};

export default Layout;
