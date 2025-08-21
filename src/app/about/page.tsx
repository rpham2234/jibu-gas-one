"use client";

import HeroImage from "@/components/HeroImage";
import Overview from "@/components/about/overview";
import React from "react";
import { info } from "../info"
import OurStory from "@/components/about/our-story";
import OurMission from "@/components/about/mission";


export default function uganda() {
  return (
    <main>
      <HeroImage imageurl="https://images.ctfassets.net/biri6h57v7dr/3ut1n3af8ijTKYPWXBRFsN/94241acdbcc5cdf20953a61ea180b6bc/Picture3.jpg" showText={true} title="About Us" subtitle="" showButton={false} />
      <section className="p-6 bg-[#1b559b]">
        <Overview />
      </section>
      
      <OurStory />
      <section className="p-6 bg-[#1b559b]">
        <OurMission />
      </section>
    </main>
  )};