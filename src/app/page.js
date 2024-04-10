"use client"
import { NextUIProvider } from "@nextui-org/react";
import React, { useState, useEffect } from "react";
import HeroSection from "./pages/HeroSection";
import Loading from "./components/Loading";
import Navbar from "./components/NavBar";
import AboutSection from "./pages/AboutSection";
import TeamSection from "./pages/TeamSection";
import FooterSection from "./pages/FooterSection";
import VideoSection from "./pages/VideoSection";
import Formulario from "./pages/FormSection";
import Banner from "./pages/BannerSection"
export default function Home() {
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setLoading(false);
  //   }, 1200);

  //   return () => clearTimeout(timer);
  // }, []);

  // if (loading) {
  //   return <Loading />;
  // }

  return (
    <NextUIProvider>
      <main className="bg-white">
        <Navbar />
        <Banner />
        <HeroSection />
        <VideoSection />
        <AboutSection />
        <TeamSection />
        <Formulario />
        {/* <FooterSection /> */}
      </main>
    </NextUIProvider>
  );
}