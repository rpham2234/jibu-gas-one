import React from "react"
import Image from "next/image"

export default function OurStory() {
    return(
        <div className="m-4 md:m-12">
            {/* Section 2 */}
        <section className="bg-[#ffffff] p-6 md:flex-col-reverse">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div className="aspect-[4/3] w-full overflow-hidden order-1 md:order-2">
              <Image
                src="https://images.ctfassets.net/biri6h57v7dr/1UHEG7bmSVjFWThX05Hr0s/1d8672b5a29cfe2321bcb979bb380a30/IMG-20250809-WA0003.jpg"
                alt="Japanese Guy"
                width={768}
                height={768}
                unoptimized
                className="w-full"
              />
            </div>
            <div className="order-2 md:order-1">
              <div className="md: py-16">
                <h2 className="text-2xl font-bold mb-4">Our Story</h2>
                <p className="mb-3">
                    This Joint venture partnership between Jibu Rwanda and Japan&apos;s leading LP Gas company 
                    Saisan Co Ltd., brings to life the Joint Venture company, Jibu Gas One. It is expected to 
                    contribute to and change the management and flow of LP Gas in Rwanda. 
                </p>
              </div>
              <img className="center" src="https://images.ctfassets.net/biri6h57v7dr/6Y76GPEouVsmeuLC52j6Ap/2daca1d3e33e4d5c90fb3a91128ad6e3/Frame_60.png"
              width={484}
              height={93} />
                
            </div>
            
          </div>
        </section>
        </div>
    )
}