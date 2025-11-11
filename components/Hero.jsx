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

const stats = [
    {
        icon: "/exp.svg",
        value: "10+",
        label: "Experience",
    },
    {
        icon: "/dev.svg",
        value: "2k+",
        label: "Developers",
    },
    {
        icon: "/client.svg",
        value: "210+",
        label: "Clients",
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
            className="relative bg-cover bg-center bg-no-repeat flex items-center justify-center text-white py-16 md:py-24 lg:py-0"
            style={{
                backgroundImage: "url('/herobg.svg')",
                minHeight: "800px",
            }}
        >
            <div className="absolute inset-0 bg-black/50"></div>

            <div className="container container_content relative z-10 flex flex-col lg:flex-row items-center justify-between px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24 2xl:px-36 gap-10 md:gap-14">
                <div className="w-full lg:w-[55%] flex flex-col items-center text-center lg:items-start lg:text-left">
                    <h1 className="text-[28px] sm:text-[32px] md:text-[40px] lg:text-[44px] 2xl:text-[56px] leading-tight mb-6 font-semibold">
                        Hire{" "}
                        <span className="bg-gradient-to-r from-[#5D59EA] to-[#B4B2FF] font-bold text-white rounded-md px-3 sm:px-4 md:px-5 py-2 sm:py-3">
                            Mobile App
                        </span>{" "}
                        Developers
                    </h1>

                    <p className="text-[#FFFFFF] text-[16px] sm:text-[18px] md:text-[20px] 2xl:text-[24px] mt-4 sm:mt-6 mb-8 sm:mb-10 max-w-[600px]">
                        Hire a skilled team of app developers to deliver top-quality,
                        user-friendly app solutions tailored to your project needs.
                    </p>

                    <div className="sm:w-auto flex flex-wrap items-center mb-10 bg-white rounded-full border border-[#E4E3FF] px-4 sm:px-6 py-3 sm:py-4">
                        <span className="text-[#222222] text-[14px] sm:text-[16px] md:text-[18px] font-medium">
                            Starting at
                        </span>
                        <img
                            src="/clock.svg"
                            className="ml-[8px] sm:ml-[15px] w-[20px] sm:w-[28px]"
                        />
                        <span className="text-[#02021E] text-[22px] sm:text-[28px] md:text-[32px] font-semibold ml-2">
                            $22.00/
                        </span>
                        <span className="text-[#222222] text-[14px] sm:text-[16px] md:text-[18px] ml-1">
                            hour
                        </span>
                        <button
                            className="hidden ml-[8px] sm:ml-[15px] sm:w-auto sm:mt-0 sm:flex gap-2 items-center justify-center bg-[#5D59EA] text-white px-6 sm:px-8 py-3 sm:py-3.5 rounded-full font-semibold text-[14px] sm:text-[16px] hover:opacity-90 transition"
                            style={{ boxShadow: "0px 0px 22px 0px #5D59EA99" }}
                        >
                            Hire Mobile App Developer
                            <MoveRight className="w-4 h-4 sm:w-5 sm:h-5" />
                        </button>

                        <button
                            className="flex ml-[8px] sm:ml-[15px] sm:w-auto sm:mt-0 sm:hidden gap-2 items-center justify-center bg-[#5D59EA] text-white px-6 sm:px-8 py-3 sm:py-3.5 rounded-full font-semibold text-[14px] sm:text-[16px] hover:opacity-90 transition"
                            style={{ boxShadow: "0px 0px 22px 0px #5D59EA99" }}
                        >
                            Hire
                            <MoveRight className="w-4 h-4 sm:w-5 sm:h-5" />
                        </button>
                    </div>

                    {/* Stats */}
                    <div className="flex flex-wrap items-center justify-start gap-5 sm:gap-8 text-gray-200 mb-10">
                        {stats.map((item, index) => (
                            <div
                                key={index}
                                className="flex items-center justify-center gap-3 sm:gap-4 w-full sm:w-[180px] md:w-[190px] h-[64px] sm:h-[74px] border border-[#FFFFFF80] rounded-md"
                                style={{
                                    background: "#FFFFFF1F",
                                    backdropFilter: "blur(12px)",
                                }}
                            >
                                <img
                                    src={item.icon}
                                    alt={item.label}
                                    className="w-[24px] sm:w-[32px]"
                                />
                                <div className="flex flex-col text-center sm:text-left">
                                    <span className="text-[#FFFFFF] text-[20px] sm:text-[26px] font-semibold">
                                        {item.value}
                                    </span>
                                    <span className="text-[#FFFFFF] text-[14px] sm:text-[17px]">
                                        {item.label}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-wrap items-center gap-4 sm:gap-8 text-[#FFFFFF]">
                        <p className="text-[20px] sm:text-[24px] md:text-[28px] font-light">
                            <span className="font-bold">Trusted</span> by:
                        </p>
                        <div className="flex flex-wrap items-center">
                            {[
                                "/trusted/emaar.png",
                                "/trusted/google.png",
                                "/trusted/npci.png",
                                "/trusted/astral.png",
                            ].map((src, index) => (
                                <div
                                    key={index}
                                    className={`flex items-center px-[10px] sm:px-[20px] ${index !== 0 ? "border-l border-[#FFFFFF80]" : ""
                                        }`}
                                >
                                    <img
                                        src={src}
                                        className="w-[70px] sm:w-[100px] h-[35px] sm:h-[50px]"
                                        alt="trusted brand"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="relative w-full sm:w-[80%] md:w-[70%] lg:w-[45%] flex justify-center items-center mt-8 lg:mt-0">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentCountry.countryName}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -50 }}
                            transition={{ duration: 0.6 }}
                            className="relative w-full max-w-[400px] sm:max-w-[500px] md:max-w-[550px] lg:max-w-[600px] xl:max-w-[700px] bg-gradient-to-b from-[#FFFFFF] to-[#CFE6FF] border border-[#22222224] rounded-2xl p-6 sm:p-8 shadow-xl text-center"
                        >
                            <div className="flex justify-between items-center">
                                <img
                                    src={currentCountry.smallLogo}
                                    alt={currentCountry.countryName}
                                    className="w-[60px] sm:w-[70px]"
                                />
                                <img
                                    src="/logo.svg"
                                    className="w-[100px] sm:w-[130px] md:w-[150px]"
                                    alt="logo"
                                />
                            </div>

                            <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center mt-[40px] sm:mt-[50px] gap-6 sm:gap-8">
                                <img
                                    src={currentCountry.mapLogo}
                                    alt={currentCountry.countryName}
                                    className="w-[150px] sm:w-[180px] md:w-[200px]"
                                />
                                <div className="flex flex-col text-center sm:text-left">
                                    <span className="text-[26px] sm:text-[32px] text-[#02021E] font-medium">
                                        {currentCountry.countryName}
                                    </span>
                                    <div>
                                        <span className="text-[26px] sm:text-[32px] text-[#02021E] font-bold">
                                            {currentCountry.hourlyPrice}/
                                        </span>
                                        <span className="text-[18px] sm:text-[22px] text-[#02021E] ml-1">
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
