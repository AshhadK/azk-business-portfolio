import Layout from "../component/Layout/Layout";
import React from "react";
import Style from "../component/Reuseable/Style";
import HeaderOne from '../component/Header/HeaderOne'
// import MobileMenu from "../component/Header/MobileMenu";
import PageBanner from '../component/BannerSection/PageBanner'
import MainFooter from '../component/MainFooter/MainFooter'
import GallerySectionOne from "../component/GallerySection/GallerySectionOne";
import MobileMenu from '../component/Header/MobileMenu';

const PortfolioMain = () => {
    return (
        <Layout pageTitle="Portfolio">
            <Style />
            <HeaderOne />
            <MobileMenu />
            <PageBanner title="Portfolio" />
            <GallerySectionOne portfolio />
            <MainFooter />
        </Layout>
    );
};

export default PortfolioMain;
