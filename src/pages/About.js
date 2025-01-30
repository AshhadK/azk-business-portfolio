import Layout from "../component/Layout/Layout";
import React from "react";
import Style from "../component/Reuseable/Style";
import HeaderOne from '../component/Header/HeaderOne'
import PageBanner from '../component/BannerSection/PageBanner'
import MainFooter from '../component/MainFooter/MainFooter'
import AboutMeOne from '../component/AboutSection/AboutMeOne'
import AboutContactDetails from '../component/AboutSection/AboutContactDetails'
import ContactSectionTwo from '../component/ContactSection/ContactSectionTwo';
import MobileMenu from '../component/Header/MobileMenu';


const AboutMain = () => {
    return (
        <Layout pageTitle="About">
            <Style />
            <HeaderOne />
            <MobileMenu />
            <PageBanner title="About" />
            <AboutMeOne />
            <AboutContactDetails />
            <PageBanner title="Contact" />
            <ContactSectionTwo />
            <MainFooter />
        </Layout>
    );
};

export default AboutMain;
