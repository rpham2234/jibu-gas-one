import React from 'react'

export default function Overview() {
  return (
    <section className="bg-[#1b559b] text-white">
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          

          {/* Established */}
          <div className="space-y-4 text-center md:text-left">
            <h6 className="italic">Established</h6>
            <ul className="space-y-2">
              <li>
                <h1 className="text-2xl md:text-5xl">2024</h1> 
              </li>
              
            </ul>
          </div>

          {/* Investors */}
          <div className="space-y-4 text-center md:text-left">
            <h6 className="italic">Investors</h6>
            <ul className="space-y-2">
              <li>
                <h1 className="text-2xl md:text-4xl">Saisan Co, Ltd.</h1> 
              </li>
              <li>
                <h1 className="text-2xl md:text-4xl">Jibu (RW) Co, Ltd</h1> 
              </li>
             
            </ul>
          </div>

          {/* Location */}
          <div className="space-y-4 text-center md:text-left">
            <h6 className="italic">Location</h6>
            <ul className="space-y-2">
              <li>
                <h1 className="text-2xl md:text-4xl">Rwanda</h1> 
              </li>
            </ul>
          </div>

          {/* Explore Links */}
          <div className="space-y-4 text-center md:text-left">
            <h6 className="italic">Message from Representatives</h6>
            <ul className="space-y-2">
              <li>
                <p>At Jibu Gas One, our mission is simple - to put our customers first. We also embrace the principle of doing ordinary things properly. We believe that these steady efforts are what build trust and strengthen our company. Moreover, guided by our slogan, “Clean Energy, Live Better,” we are committed to supporting our communities, protecting the environment, and contributing to a better quality of life.
</p>
              </li>
              
            </ul>
          </div>

        </div>
      </div>

    
    </section>
  );
}
