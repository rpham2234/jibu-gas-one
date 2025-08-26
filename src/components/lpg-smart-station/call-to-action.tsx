import { ArrowUpRight } from "lucide-react"
import React from "react"

export default function CTA() {
    return(
        <div className="m-4 md:m-12  text-white">
            <section className="md:p-6">
            <div className="grid md:grid-cols-2 gap-6 items-center">
                <div>
                <h1 className="text-3xl md:text-5xl font-semibold mb-4">
                    Bring Clean Energy to Your Community with a Jibu Gas One LPG Smart Station
                </h1>
                <p className="italic mb-4">Imagine owning a business that not only makes profits but also transforms lives and protects the environment.</p>
                    <button
                        //variant="outline"
                        className="border-2 border-white text-white px-6 py-3 rounded-full hover:bg-white hover:text-blue-800 md:hidden"
                    >
                        Become a Smart Station Owner
                    </button>
                    
                </div>
                <div className="hidden md:flex md:aspect-[4/3] w-full overflow-hidden items-center">
                    <div>
                        <button
                        //variant="outline"
                        className="border-2 border-white text-white px-6 py-12 m-12 rounded-full hover:bg-white hover:text-blue-800"
                        >
                            <h1 className="text-2xl font-semibold">Become a Smart Station Owner</h1>
                            
                        </button>
                    </div>
                </div>
            </div>
            </section>
        </div>
    )
}