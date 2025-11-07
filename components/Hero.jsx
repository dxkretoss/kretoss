import React, { useState, useEffect } from "react";
import { MoveRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const countryData = [
    {
        smallLogo: "/maps/indiaCountry.svg",
        mapLogo: "/maps/india.svg",
        countryName: "India",
        hourlyPrice: "$23.00",
    },
    {
        smallLogo: "/maps/austContry.svg",
        mapLogo: "/maps/aust.svg",
        countryName: "Australia",
        hourlyPrice: "AUD 150.00",
    },
    {
        smallLogo: "/maps/newzealandContry.svg",
        mapLogo: "/maps/newzealand.svg",
        countryName: "New Zealand",
        hourlyPrice: "NZD 170.00",
    },
    {
        smallLogo: "/maps/usaCountry.svg",
        mapLogo: "/maps/usamap.svg",
        countryName: "USA",
        hourlyPrice: "$150.00",
    },
    {
        smallLogo: "/maps/europeCountry.svg",
        mapLogo: "/maps/europe.svg",
        countryName: "Europe",
        hourlyPrice: "€130.00",
    },
];

export default function Hero() {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Change country every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % countryData.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const currentCountry = countryData[currentIndex];
    return (
        <section
            className="relative bg-cover bg-center bg-no-repeat h-[800px] flex items-center justify-center text-white"
            style={{ backgroundImage: "url('/herobg.svg')" }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50"></div>
            {/* Content */}
            <div className="container relative z-10 w-full  px-6 flex flex-col md:flex-row items-center justify-between gap-12">
                {/* LEFT SECTION */}
                <div className="max-w-[771px]">
                    <h1 className="text-[56px] leading-tight mb-6">
                        Hire{" "}
                        <span className="bg-gradient-to-r from-[#5D59EA] to-[#B4B2FF] font-bold text-white rounded-md px-5 py-4">
                            Mobile App
                        </span>{" "}
                        Developers
                    </h1>

                    <p className="text-[#FFFFFF] text-[24px] mt-[40px] mb-[40px]">
                        Hire a skilled team of app developers to deliver top-quality,
                        user-friendly app solutions tailored to your project needs.
                    </p>

                    {/* Pricing & Button */}
                    <div className="w-[729px] h-[85px] flex flex-wrap items-center gap-4 mb-10 bg-white rounded-full  border border-[#E4E3FF]">
                        <div className="flex items-center  px-6 py-3">
                            <span className="text-[22px] font-medium text-[#222222]">Starting at</span>
                            <img src="/clock.svg" className="ml-[19px]" />
                            <span className="text-[32px] font-semibold text-[#02021E] ml-[15px]">$22.00/</span>
                            <span className="text-[22px] text-[#222222] ml-1">hour</span>
                        </div>

                        <button className="w-[299px] h-[47px] flex gap-2 rounded-full bg-[#5D59EA] text-white px-6 py-3 font-semibold  hover:opacity-90 transition"
                            style={{ boxShadow: '0px 0px 22px 0px #5D59EA99' }}>
                            Hire Mobile App Developer
                            <MoveRight />
                        </button>
                    </div>

                    {/* Stats */}
                    <div className="flex flex-wrap items-center gap-8 text-gray-200 mb-10">
                        <div className="flex  items-center justify-center gap-4 w-[190px] h-[74px] border-[0.5px] border-[#FFFFFF] rounded-md"
                            style={{
                                background: "#FFFFFF1F",
                                backdropFilter: "blur(12px)",
                            }}>
                            <img src="/exp.svg" alt="" />
                            <div className="flex flex-col">
                                <span className="text-[#FFFFFF] text-[26px] font-semibold">10+</span>
                                <span className="text-[#FFFFFF] text-[17px] ">Experience</span>
                            </div>
                        </div>

                        <div className="flex items-center justify-center gap-4 w-[190px] h-[74px] border-[0.5px] border-[#FFFFFF] rounded-md "
                            style={{
                                background: "#FFFFFF1F",
                                backdropFilter: "blur(12px)",
                            }}>
                            <img src="/dev.svg" alt="" />
                            <div className="flex flex-col">
                                <span className="text-[#FFFFFF] text-[26px] font-semibold">2k+</span>
                                <span className="text-[#FFFFFF] text-[17px] ">Developers</span>
                            </div>
                        </div>

                        <div className="flex items-center justify-center gap-4 w-[190px] h-[74px] border-[0.5px] border-[#FFFFFF] rounded-md"
                            style={{
                                background: "#FFFFFF1F",
                                backdropFilter: "blur(12px)",
                            }}>
                            <img src="/client.svg" alt="" />
                            <div className="flex flex-col">
                                <span className="text-[#FFFFFF] text-[26px] font-semibold">210+</span>
                                <span className="text-[#FFFFFF] text-[17px] ">Clients</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-8 text-gray-200">
                        <p className="text-[#FFFFFF] text-[28px]"><span className=" font-bold ">Trusted</span> by:</p>
                    </div>
                </div>

                <div className="relative w-[700px] h-[500px] overflow-hidden flex items-center justify-center">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentCountry.countryName}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -50 }}
                            transition={{ duration: 0.6 }}
                            className="absolute  w-[700px] max-h-[500px] border border-[#22222224] rounded-2xl p-8 shadow-xl text-center bg-gradient-to-b from-[#FFFFFF] to-[#CFE6FF] "

                        >
                            <div className="flex justify-between w-full">
                                <img
                                    src={currentCountry.smallLogo}
                                />
                                <img src="/logo.svg" className="w-[137px] h-[44px]" />
                            </div>
                            <div className="flex justify-between items-center mt-[53px] ml-[69px] mr-[69px]">
                                <img src={currentCountry.mapLogo} />
                                <div className="flex flex-col">
                                    <span className="text-[32px] text-[#02021E] font-medium">
                                        {currentCountry.countryName}
                                    </span>
                                    <div>
                                        <span className="text-[32px] text-[#02021E] font-bold">
                                            {currentCountry.hourlyPrice}/
                                        </span>
                                        <span className="text-[22px] text-[#02021E] ml-1">
                                            hour
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
