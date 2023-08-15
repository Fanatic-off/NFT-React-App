import React from "react";
import { HeroSection } from "./components/HeroSection/HeroSection";
import { TrendingCollection } from "./components/Trending Collection/Trending Collection";
import { Footer } from "../../components/Footer/Footer";
import { TopCreators } from "./components/TopCreators/TopCreators";
import { BrowseCategories } from "./components/Browse Categories/Browse Categories";
import { Mushroom } from "./components/Mushroom/Mushroom";

export const HomePage = () => {
    return (
        <>
            <HeroSection />
            <TrendingCollection />
            <TopCreators />
            <BrowseCategories />
            <Mushroom />
            <Footer />
        </>
    )
}