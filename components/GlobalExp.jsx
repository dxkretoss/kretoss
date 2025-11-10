import React from 'react';
import { MoveRight } from 'lucide-react';

export default function GlobalExp() {
    return (
        <div
            className="container mx-auto section container_content rounded-[24px] overflow-hidden bg-gradient-to-b from-[#EEF0FF80] to-[#CFE6FF] px-4 sm:px-6 lg:px-16 py-12"
        >
            <div className="flex flex-col lg:flex-row items-center lg:items-center gap-8 lg:gap-5 lg:p-[40px] 2xl:p-[70px]">
                {/* Left Section */}
                <div className="flex-1 text-center lg:text-left lg:w-[679px]">
                    <img src="logo.svg" className="mx-auto lg:mx-0" alt="Logo" />

                    <h1
                        className="text-[36px] 2xl:text-[48px] font-semibold text-[#02021E] mt-8 sm:mt-10"
                        style={{ fontFamily: "'Funnel Display', sans-serif" }}
                    >
                        Tap Into{" "}
                        <span className="bg-gradient-to-r from-[#5D59EA] to-[#B4B2FF] font-bold text-white rounded-md px-2 py-1 sm:py-2">
                            Global Expertise
                        </span>
                    </h1>

                    <p className="mt-4 2xl:mt-8 text-[16px] 2xl:text-[20px] text-[#02021E] leading-relaxed">
                        Our team of experts brings deep domain knowledge and innovative thinking to every project. Their dynamic, out of the box approach sets us apart in the market.
                    </p>

                    <button
                        className="mt-4 2xl:mt-10 w-full sm:w-[256px] lg:h-[41px] 2xl:h-[61px] flex items-center justify-center gap-2 rounded-full bg-[#5D59EA] text-white text-[16px] 2xl:text-[20px] font-medium hover:opacity-90 transition-shadow shadow-md sm:shadow-lg mx-auto lg:mx-0"
                        style={{ boxShadow: '0px 0px 22px 0px #5D59EA99' }}
                    >
                        Hire App Developer
                        <MoveRight />
                    </button>
                </div>

                {/* Right Section */}
                <div className="flex-1 flex justify-center lg:justify-end w-full lg:w-auto">
                    <img src="/GlobalExp.svg" className="w-full max-w-[500px] sm:max-w-[550px] lg:max-w-[600px]" alt="Global Expertise" />
                </div>
            </div>
        </div>
    );
}
