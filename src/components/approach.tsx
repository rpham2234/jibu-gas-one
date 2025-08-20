import React from "react";

export default function ApproachSection() {
  return (
    <section className="relative bg-[#005499] text-white py-16 px-8 flex items-center justify-center">
      <div className="max-w-5xl w-full flex flex-col md:flex-row md:items-center md:justify-between">
        {/* Left content */}
        <div className="mb-8 md:mb-0">
          <p className="text-sm font-light mb-4">Our Approach</p>
          <h2 className="text-4xl font-bold mb-2">凡事徹底</h2>
          <h3 className="text-xl font-medium mb-4">(Bonji Tettei)</h3>
          <p className="italic text-sm text-gray-200">
            &quot;Implementation thoroughly, even common tasks.&quot;
          </p>
        </div>

        {/* Right buttons */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-6">
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full">
            Contact Us
          </button>
          <button
            //variant="outline"
            className="border-2 border-white text-white px-6 py-3 rounded-full hover:bg-white hover:text-blue-800"
          >
            Reseller and LPG Smart Station Operation Opportunities
          </button>
        </div>
      </div>
    </section>
  );
}
