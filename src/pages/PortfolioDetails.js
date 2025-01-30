import React from "react";
import { useParams } from "react-router-dom";
import Layout from "../component/Layout/Layout";
import Style from "../component/Reuseable/Style";
import HeaderOne from "../component/Header/HeaderOne";
import PageBanner from "../component/BannerSection/PageBanner";
import MainFooter from "../component/MainFooter/MainFooter";
import GallerySectionOne from "../component/GallerySection/GallerySectionOne";
import PostControl from "../component/PostControl/PostControl";
import ProjectSingle from "../component/ProjectSection/ProjectSingle";
import MobileMenu from '../component/Header/MobileMenu';

const PortfolioDetails = () => {
    const { id } = useParams();  // Extract id from URL

    return (
        <Layout pageTitle="Portfolio">
            <Style />
            <HeaderOne />
            <MobileMenu />
            <PageBanner title="Portfolio" />
            <ProjectSingle id={id} />
            <PostControl id={id} />
            <GallerySectionOne similar />
            <MainFooter />
        </Layout>
    );
};

export default PortfolioDetails;
