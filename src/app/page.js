"use client"
import { NextUIProvider } from "@nextui-org/react";
import React, { useState, useEffect } from "react";
import HeroSection from "./Pages/HeroSection";
import Loading from "./components/Loading";
import Navbar from "./components/NavBar";
import AboutSection from "./Pages/AboutSection";
import TeamSection from "./Pages/TeamSection";
import PortfolioSection from "./Pages/PortfolioSection";
import FooterSection from "./Pages/FooterSection";
import VideoSection from "./Pages/VideoSection";
import Formulario from "./Pages/FormSection";
export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <NextUIProvider>
      <main className="mt-16 bg-white">
        <Navbar />
        <HeroSection />
        <VideoSection />
        <AboutSection />
        <TeamSection />
        <Formulario />
        <FooterSection />
      </main>
    </NextUIProvider>
  );
}