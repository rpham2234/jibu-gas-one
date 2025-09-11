"use client";


import HeroImage from "@/components/HeroImage";
import React from "react";
import CTA from "@/components/lpg-smart-station/call-to-action";
import KeyFeatures from "@/components/lpg-smart-station/keyFeatures";
import PageTitle  from "@/components/subcomponents/pageTitle"
import { Carousel } from "@/components/lpg-smart-station/carousel";
import SmartStation from "@/components/lpg-smart-station/smartStation";
import { getPictures, LPGCarousel } from "./getPictures";
import { useState, useEffect } from "react";


export default function Page() {

  const [pictures, setPictures] = useState<LPGCarousel[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let alive = true;
    (async () => {
      try {
        const data = await getPictures(); // must return Franchisee[]
        if (alive) setPictures(Array.isArray(data) ? data : []);
      } finally {
        if (alive) setLoading(false);
      }
    })();
    return () => { alive = false; };
  }, []);

  if (loading) return <main className="p-8">Loading…</main>;

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
        <Carousel className="md:m-4" slides={pictures}/>
      </section>
      <section className="bg-[#27a9e1] py-3 md:p-6">
        <SmartStation />

      </section>
      
      
    </main>
  )};