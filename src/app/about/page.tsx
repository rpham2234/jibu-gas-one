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
      <HeroImage imageurl="https://images.ctfassets.net/biri6h57v7dr/1w6MNB3rgoSAGForNTRXY4/744e8f9765a23db245fcd99815a90389/WhatsApp_Image_2025-08-26_at_09.12.15_cd04b43c.jpg" showText={true} title="About Us" subtitle="Clean Energy, Live Better" showButton={false} />
      <section className="p-6 bg-[#1b559b]">
        <Overview />
      </section>
      
      <OurStory />
      <section className="p-6 bg-[#1b559b]">
        <OurMission />
      </section>
    </main>
  )};