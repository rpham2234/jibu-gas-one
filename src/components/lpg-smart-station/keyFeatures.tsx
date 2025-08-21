import React from "react"
import { TreePine, MapPin, SproutIcon, Building, FactoryIcon, Construction } from "lucide-react"
import { PropaneIcon } from "../subcomponents/propaneIcon"

interface Features {
    icon: string,
    featureName: string,
    featureDesc: string,
}

export default function KeyFeatures() {
    return(
    
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10 p-10">
        <div className="flex border rounded-lg p-4 bg-white">
            <PropaneIcon width={48} height={48}/>
            <div className="ml-2">
                <h4 className="font-semibold text-base text-primary tracking-normal">Affordable Refills</h4>
                <p className="text-sm font-normal text-gray tracking-normal">LPG Refills from just 2-3 kg.</p>
            </div>
        </div>
        <div className="flex border rounded-lg p-4 bg-white">
            <SproutIcon width={48} height={48}/>
            <div className="ml-2">
                <h4 className="font-semibold text-base text-primary tracking-normal">Cleaner Cooking</h4>
                <p className="text-sm font-normal text-gray tracking-normal">Less Charcoal, healthier homes</p>
            </div>
        </div>
        <div className="flex border rounded-lg p-4 bg-white">
            <TreePine width={48} height={48}/>
            <div className="ml-2">
                <h4 className="font-semibold text-base text-primary tracking-normal">Protecting Forests</h4>
                <p className="text-sm font-normal text-gray tracking-normal">Practical alternative to deforestation</p>
            </div>
        </div>
        <div className="flex border rounded-lg p-4 bg-white">
            <Building width={48} height={48}/>
            <div className="ml-2">
                <h4 className="font-semibold text-base text-primary tracking-normal">Availiable Anywhere</h4>
                <p className="text-sm font-normal text-gray tracking-normal">Suitable for Urban and Rural locations</p>
            </div>
        </div>
        <div className="flex border rounded-lg p-4 bg-white">
            <MapPin width={48} height={48}/>
            <div className="ml-2">
                <h4 className="font-semibold text-base text-primary tracking-normal">Smart, Local Access</h4>
                <p className="text-sm font-normal text-gray tracking-normal">Clean energy close to home</p>
            </div>
        </div>
        <div className="flex border rounded-lg p-4 bg-white">
            <Construction width={48} height={48}/>
            <div className="ml-2">
                <h4 className="font-semibold text-base text-primary tracking-normal">Meet Safety Needs</h4>
                <p className="text-sm font-normal text-gray tracking-normal">Requires a 300m<sup>2</sup> plot to meet regulatory distance requirements</p>
            </div>
        </div>
    </div>
) }