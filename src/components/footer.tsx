import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#46aae3] text-white">
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Logo + Text */}
          <div className="space-y-4 text-center md:text-center">
            <a  href="/">
            <Image
              src="https://images.ctfassets.net/biri6h57v7dr/2ICT3zO1IF75k11BQ9RVSW/bcc3cf03b2f1b66cd483bb1eab74c823/jibu_Gas_One_logo.png"
              alt="Jibu Logo"
              width={150}
              height={150}
            />
            </a>
           
          </div>

          {/* Explore Links */}
          <div className="space-y-4 text-center md:text-left">
            <h6 className="uppercase font-bold">Explore</h6>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="hover:underline">
                  About
                </a>
              </li>
              <li>
                <a href="/network" className="hover:underline">
                  Our Network
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:underline">
                  Contact
                </a>
              </li>
              <li>
                <a href="/lpg-smart-station" className="hover:underline">
                  LPG Smart Station
                </a>
              </li>
            </ul>
          </div>

          

          {/* Jibu Countries */}
          
        </div>
      </div>

      <div className="bg-gray-900 text-center text-xs py-3">
        <p className="font-bold">2025 © Jibu, Inc, All Rights Reserved</p>
      </div>
    </footer>
  );
}
