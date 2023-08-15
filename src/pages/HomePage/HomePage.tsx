import React from "react";
import { HeroSection } from "./components/HeroSection/HeroSection";
import { TrendingCollection } from "./components/Trending Collection/Trending Collection";
import { Footer } from "../../components/Footer/Footer";

export const HomePage = () =>{
    return(
        <>
        <HeroSection />
        <TrendingCollection />
        <Footer />
        </>
    )
}