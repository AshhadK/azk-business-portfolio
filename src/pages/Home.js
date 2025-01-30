import Layout from "../component/Layout/Layout";
import React from "react";
import Style from "../component/Reuseable/Style";
import HeaderOne from '../component/Header/HeaderOne';
import MobileMenu from '../component/Header/MobileMenu';
import BannerOne from '../component/BannerSection/BannerOne'
import MainFooter from '../component/MainFooter/MainFooter'
import WeDOSection from "../component/WeDOSection/WeDOSection";
import ServicesSectionOne from "../component/ServicesSection/ServicesSectionOne";
import GallerySectionOne from "../component/GallerySection/GallerySectionOne";
import ParallaxSection from "../component/ParallaxSection/ParallaxSection";
import AgencySection from "../component/AgencySection/AgencySection";

import CallToSection from "../component/CallToSection/CallToSection";

const HomeMain = () => {
  return (
    <Layout pageTitle="Home">
      <Style />
      <HeaderOne />
      <MobileMenu />
      <BannerOne />
      <WeDOSection />
      <ServicesSectionOne />
      <GallerySectionOne />
      <ParallaxSection />
      <AgencySection />
      <CallToSection />
      <MainFooter normalPadding={false} />
    </Layout>
  );
};

export default HomeMain;
