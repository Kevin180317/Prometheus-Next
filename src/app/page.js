"use client"
import {NextUIProvider} from "@nextui-org/react";
import React, {useState, useEffect} from 'react'
import HeroSection from './Pages/HeroSection'
import Loading from './components/Loading'  // Asegúrate de que la ruta sea correcta
import Navbar from "./components/NavBar";
import AboutSection from "./Pages/AboutSection";
import TeamSection from "./Pages/TeamSection";
import PortfolioSection from "./Pages/PortfolioSection";
import FooterSection from "./Pages/FooterSection";
import VideoSection from "./Pages/VideoSection";
export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200); // Puedes ajustar este tiempo según tus necesidades

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <NextUIProvider>
      <main className="flex flex-col items-center justify-between min-h-screen p-24 bg-white">
        <Navbar />
        <HeroSection />
        <VideoSection />
        <PortfolioSection />
        {/* <AboutSection />
        <TeamSection />
        <FooterSection /> */}
      </main>
    </NextUIProvider>
  );
}
