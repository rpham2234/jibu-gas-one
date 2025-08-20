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
      <HeroImage imageurl="https://images.ctfassets.net/biri6h57v7dr/3GHOaBSz8TxcbqOdBwLzXI/9d368a14af776c4c4cca151f2acf1f6b/IMG-20250702-WA0017.jpg" showText={true} title="About Us" subtitle="" showButton={false} />
      <section className="p-6 bg-[#1b559b]">
        <Overview />
      </section>
      
      <OurStory />
      <section className="p-6 bg-[#1b559b]">
        <OurMission />
      </section>
    </main>
  )};