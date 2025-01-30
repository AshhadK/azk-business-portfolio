import Layout from "../component/Layout/Layout";
import React from "react";
import Style from "../component/Reuseable/Style";
import HeaderOne from '../component/Header/HeaderOne';
import PageBanner from '../component/BannerSection/PageBanner';
import MainFooter from '../component/MainFooter/MainFooter';
import ServicesSectionThree from "../component/ServicesSection/ServiceSectionThree";
import ServicesSectionOne from "../component/ServicesSection/ServicesSectionOne";
import ServiceTechStack from "../component/ServicesSection/ServiceTechStack";
import CallToSectionTwo from "../component/CallToSection/CallToSectionTwo";
import MobileMenu from '../component/Header/MobileMenu';



const ServicesMain = () => {
    return (
        <Layout pageTitle="Services">
            <Style />
            <HeaderOne />
            <MobileMenu />
            <PageBanner title="Services" />
            <ServicesSectionThree className="padd-top" />
            <ServicesSectionOne />
            <ServiceTechStack className="padd-top" />
            <CallToSectionTwo className="alternate" />
            <MainFooter normalPadding={false} />
        </Layout>
    );
};

export default ServicesMain;
