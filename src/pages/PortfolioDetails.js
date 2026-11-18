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
import { projects } from "../data/projectSection";

const PortfolioDetails = () => {
    const { id } = useParams();  // Extract id from URL
    const currentId = parseInt(id, 10);
    const project = projects.find(
        (proj) => proj.id === currentId && !proj.hidden
    );

    return (
        <Layout pageTitle="Portfolio">
            <Style />
            <HeaderOne />
            <MobileMenu />
            <PageBanner title="Portfolio" />
            <ProjectSingle id={id} />
            {project && <PostControl id={id} />}
            <GallerySectionOne
                similar
                category={project?.category}
                currentId={currentId}
            />
            <MainFooter />
        </Layout>
    );
};

export default PortfolioDetails;
