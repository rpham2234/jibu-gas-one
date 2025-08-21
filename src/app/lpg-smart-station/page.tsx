"use client";


import HeroImage from "@/components/HeroImage";
import React from "react";
import CTA from "@/components/lpg-smart-station/call-to-action";
import KeyFeatures from "@/components/lpg-smart-station/keyFeatures";
import PageTitle  from "@/components/subcomponents/pageTitle"
import { Carousel } from "@/components/lpg-smart-station/carousel";
import SmartStation from "@/components/lpg-smart-station/smartStation";


export default function uganda() {

  const slides = [
    {
      src: "https://images.ctfassets.net/biri6h57v7dr/6GrT7WFV2OyNeBjC1blJUc/1ea96f3b21feb09e7a75f71f86c2422b/IMG-20250612-WA0011.jpg",
      alt: "Industrial tank in a yard",
      title: "Caption",
      description: "Description of the current photo.",
    },
    {
      src: "https://images.ctfassets.net/biri6h57v7dr/5vC2sllzCL5hoXdQeQ5ed0/d73cd4e3193d9e7feda3e1788dea808f/800px-Saisan_Co._Ltd._1.jpg",
      alt: "Another image",
      title: "Saisan Headquarters",
      description: "Saisan office in Japan",
    },
    {
      src: "https://images.ctfassets.net/biri6h57v7dr/9SMyjYwAJ8EG7jUDpiopS/63a16ee5d337debb519429a51bbd3dfb/IMG-20250702-WA0016.jpg",
      alt: "Forest",
      title: "Caption",
      description: "Third image description.",
    },
  ];

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
      <section className="md:p-12">
        <Carousel className="md:m-4" slides={slides}/>
      </section>
      <section className="bg-[#27a9e1] py-3 md:p-6">
        <SmartStation />

      </section>
      
      
    </main>
  )};