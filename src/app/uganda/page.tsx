"use client";

import Header from "@/components/countries/uganda/header";
import HeroImage from "@/components/HeroImage";
import React from "react";
import { info } from "../info"


export default function uganda() {
  return (
    <main>
      <HeroImage imageurl={info.banner} showText={true} title="We Deliver to your doorstep" subtitle="" showButton={false} />
      <Header country={info.country} countryCode={info.countryCode}/>
      
    </main>
  )};