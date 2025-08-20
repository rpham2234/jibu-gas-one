"use client";


import HeroImage from "@/components/HeroImage";
import React from "react";
import { info } from "../info"
import CTA from "@/components/lpg-smart-station/call-to-action";
import KeyFeatures from "@/components/lpg-smart-station/keyFeatures";
import PageTitle  from "@/components/subcomponents/pageTitle"
import SampleCarousel from "@/components/SampleCarousel"


export default function uganda() {
  return (
    <main>
      <HeroImage imageurl="https://images.ctfassets.net/biri6h57v7dr/6LID3FUABgKYKjoJVFjReW/054a85643328275bf48c7b24a7d9dadc/IMG-20250623-WA0005.jpg" showText={true} title="LPG Smart Station" subtitle="
      The Jibu Gas One LPG Smart Station is a breakthrough solution that makes clean cooking
      energy avaliable and accessible for everyone, especially low income households" showButton={false} />
      <section className="bg-[#005499] p-6">
        <CTA />
      </section>
      <section className="md:p-6">
        <PageTitle title="Key Features" />
        <KeyFeatures />
      </section>
      <SampleCarousel />
      
      
    </main>
  )};