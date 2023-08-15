import React from "react";
import { HeroSection } from "./components/HeroSection/HeroSection";
import { TrendingCollection } from "./components/Trending Collection/Trending Collection";
import { Footer } from "../../components/Footer/Footer";
import { TopCreators } from "./components/TopCreators/TopCreators";

export const HomePage = () =>{
    return(
        <>
        <HeroSection />
        <TrendingCollection />
        <TopCreators />
        <Footer />
        </>
    )
}