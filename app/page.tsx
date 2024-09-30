"use client";

import React from "react";
import { motion } from "framer-motion";

import { NavbarDemo } from "@/components/Navbar";

import CompanyLogos from "@/components/CompanyLogos";
import Clients from "@/components/Clients";
import ResultsSection from "@/components/TrustSection/ResultsSection";
import Impressions from "@/components/Impressions ";
import ServicesSection from "@/components/Services/ServicesSection";

import StatisticsSection from "@/components/StatisticsSection/StatisticsSection";
import ContactSection from "@/components/ContactSection/ContactSection";
import TestimonialSection from "@/components/TestimonialSection/TestimonialSection";
import InfluencerCarousel from "@/components/influencerCarousel/InfluencerCarousel";
import Footer from "@/components/Footer/Footer";
import logo from "@/public/logo.png";
import ContentCreationHouse from "@/components/ContentCreationHouse/ContentCreationHouse";
import PortfolioSection from "@/components/PortfolioSection/PortfolioSection";
export default function Home() {
  return (
    <div className="">
      <NavbarDemo />
      <ContentCreationHouse
        influencerCount={800}
        title="Welcome to TK media group, a Content Creation House"
        description="Spanker line bilge seven league topsail. Blimey aft topmast starboard anchor road."
      />
      {/* <Hero /> */}
      <CompanyLogos />
      <ResultsSection />
      <StatisticsSection />
      <ServicesSection />
      <PortfolioSection />
      <InfluencerCarousel />
      <TestimonialSection />
      <ContactSection />
      <Footer
        logoSrc={logo.src}
        description="Nest smartly gangplank yarr the overhaul salmagundi sail round."
      />
    </div>
  );
}
