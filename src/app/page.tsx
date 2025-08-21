"use client";

import PageTitle from "@/components/subcomponents/pageTitle";
import ApproachSection from "@/components/approach";
import HeroImage from "@/components/HeroImage";
import Grid from "@/components/serviceGrid"


export default function Home() {

  const services = [
    {
        img: "https://images.ctfassets.net/biri6h57v7dr/4rWdkzCWxA1UUJPnhyQ0LF/7e9d44adc46732140a638a51d0b1449b/Picture4.jpg?h=250",
        title:"Direct Sales"
    },
    {
        img: "https://images.ctfassets.net/biri6h57v7dr/5XXSLjCzaKoXHB6b0ErqbQ/60b0f350570c806635453dd07d49f69f/IMG-20250620-WA0004.jpg?h=250",
        title:"Reseller Partnership Model)"
    },
    {
        img: "https://images.ctfassets.net/biri6h57v7dr/5xaNwCLVy0PjpeaKVITFP1/d422ab8b9931cec20ccd1f70bdd437a3/Picture5.png",
        title:"Franchise Model and Support System"
    },
    {
        img: "https://images.ctfassets.net/biri6h57v7dr/6GrT7WFV2OyNeBjC1blJUc/1ea96f3b21feb09e7a75f71f86c2422b/IMG-20250612-WA0011.jpg?h=250",
        title:"LPG Smart Station Sales (Coming Soon)"
    }


]

  return (
    <main>
      
      <HeroImage showButton={false} title="Jibu Gas One" imageurl="https://images.ctfassets.net/biri6h57v7dr/3ngcpqBSmxpUPiHWXIndOc/fe7725f5a94e433011a26dceddec8e97/Picture2.jpg"
      subtitle="This Joint venture partnership between Jibu Co and the Japanese 
      leading LP Gas company Saisan Co Ltd, brings to life the JV Company; Jibu Gas One.
      It is exptected to contribute to and change the management and flow of LP Gas in Rwanda"/>
      <ApproachSection />
      <PageTitle title="Our Services" />
      <Grid services={services}/>
    </main>
  );
}


