"use client";

import PageTitle from "@/components/subcomponents/pageTitle";
import ApproachSection from "@/components/approach";
import HeroImage from "@/components/HeroImage";
import Grid from "@/components/serviceGrid"


export default function Home() {

  const services = [
    {
        img: "https://images.ctfassets.net/biri6h57v7dr/5GNgv4ArOtHNg3Y66rRa2K/ee29cf48222fcc37c7d66ddaff18d604/Twitter_and_Facebook_cover-02.jpg?h=250",
        title:"Direct Sales"
    },
    {
        img: "https://images.ctfassets.net/biri6h57v7dr/5XXSLjCzaKoXHB6b0ErqbQ/60b0f350570c806635453dd07d49f69f/IMG-20250620-WA0004.jpg?h=250",
        title:"Reseller Partnership Model)"
    },
    {
        img: "https://images.ctfassets.net/biri6h57v7dr/5SaTq64pHmwxCNuvOCCIRo/715188794570b165b9cdeb3ba9c6142b/IMG-20250809-WA0005.jpg?h=250",
        title:"Franchise Model and Support System"
    },
    {
        img: "https://images.ctfassets.net/biri6h57v7dr/6GrT7WFV2OyNeBjC1blJUc/1ea96f3b21feb09e7a75f71f86c2422b/IMG-20250612-WA0011.jpg?h=250",
        title:"LPG Smart Station Sales (Coming Soon)"
    }


]

  return (
    <main>
      
      <HeroImage showButton={false} title="Jibu Gas One" imageurl="https://images.ctfassets.net/biri6h57v7dr/1vsxjtkP1wBJpXvTbuSSrw/ed42f9ea6297c929f4231c639316f408/IMG-20250808-WA0013.jpg"
      subtitle="This Joint venture partnership between Jibu Co and the Japanese 
      leading LP Gas company Saisan Co Ltd, brings to life the JV Company; Jibu Gas One.
      It is exptected to contribute to and change the management and flow of LP Gas in Rwanda"/>
      <ApproachSection />
      <PageTitle title="Our Services" />
      <Grid services={services}/>
    </main>
  );
}


