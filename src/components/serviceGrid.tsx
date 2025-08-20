"use client";

import React from "react";
import CardWithImageExample from "./card";

// Define the Product interface
interface Service {
  img: string;
  title:string;
}

interface GridProps {
  services?: Service[]; // Array of products (optional)
}

export default function CardGrid({ services = [] }: GridProps) {
  return (
    <div className="container mx-auto my-12 flex justify-center">
      <div className="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 gap-4">

        {services.map((service, index) => (
            <CardWithImageExample key={index} title={service.title} image={service.img} />
        ))}
        
      </div>
    </div>
  );
}
