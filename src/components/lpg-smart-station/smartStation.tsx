import React from "react"
import { TreePine, MapPin, SproutIcon, Building, FactoryIcon, Construction } from "lucide-react"
import { NumberOne, NumberThree, NumberTwo, NumberFour } from "../subcomponents/numbers"

interface Features {
    icon: string,
    featureName: string,
    featureDesc: string,
}

export default function SmartStation() {
    return(
    <div>
        <div className="m-4 text-white">
            <section className="md:px-6">
                <div className="grid md:grid-cols-2 gap-6 items-center">
                    <div>
                    <p className="mb-4">Becoming a smart station owner</p>
                    <h1 className="text-3xl md:text-5xl font-semibold mb-4">
                        Interested customers can partner with Jibu Gas One!
                    </h1>
                    <p className="italic ">Imagine owning a business that not only makes profits but also transforms lives and protects the environment.</p>
                        
                        
                    </div>
                    <div className="hidden md:flex md:aspect-[4/3] w-full overflow-hidden items-center">
                        <div>
                            
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <div className="grid grid-cols-1 gap-4 mt-10 px-10 text-white">
        <div className="flex items-center gap-3 border rounded-lg p-4">
            <NumberOne className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 shrink-0" />
            <div className="ml-2">
            <h4 className="font-semibold text-base text-primary tracking-normal">
                Sign a supply contract with Jibu Gas One
            </h4>
            </div>
        </div>

        <div className="flex items-center gap-3 border rounded-lg p-4">
            <NumberTwo className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 shrink-0" />
            <div className="ml-2">
            <h4 className="font-semibold text-base text-primary tracking-normal">
                Pay a license fee of US$ 15,000
            </h4>
            </div>
        </div>

        <div className="flex items-center gap-3 border rounded-lg p-4">
            <NumberThree className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 shrink-0" />
            <div className="ml-2">
            <h4 className="font-semibold text-base text-primary tracking-normal">
                Site requirements: 300m<sup>2</sup> plot to meet safety regulations
            </h4>
            </div>
        </div>

        <div className="flex items-center gap-3 border rounded-lg p-4">
            <NumberFour className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 shrink-0" />
            <div className="ml-2">
            <h4 className="font-semibold text-base text-primary tracking-normal">
                Access up to US$ 25,000 in financing through a Kiva loan
            </h4>
            <p className="text-sm font-normal text-gray-100 tracking-normal italic">
                (Primarily for Jibuco franchisees)
            </p>
            </div>
        </div>
    </div>

    </div>
) }