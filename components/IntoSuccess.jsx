import React from "react";

export default function IntoSuccess() {
    const successCards = [
        {
            title: "STARTUPS",
            subtitle: "Accelerate Your Launch. Maximize Your Seed.",
            image: "/success/success-1.svg",
        },
        {
            title: "Mid level Businesses",
            subtitle: "Scale with Confidence. Outpace Competitors.",
            image: "/success/success-2.svg",
        },
        {
            title: "Enterprise Level Businesses",
            subtitle: "Master Complexity. Drive Strategic Innovation.",
            image: "/success/success-3.svg",
        },
    ];

    return (
        <div className="container section mx-auto px-4 sm:px-6 lg:px-12 py-12 sm:py-16">
            {/* Title Section */}
            <div className="max-w-[900px] mx-auto text-center px-2">
                <h1
                    className="text-[26px] sm:text-[34px] md:text-[42px] lg:text-[48px] font-semibold text-[#02021E] leading-snug"
                    style={{ fontFamily: "'Funnel Display', sans-serif" }}
                >
                    Hire Mobile App Developers To Turn Your{" "}
                    <span
                        style={{
                            background:
                                "linear-gradient(180deg, #FFFFFF 0%, #BBB9FF 130.23%)",
                        }}
                        className="font-bold text-[#5D59EA] rounded-md px-1 sm:px-2"
                    >
                        Idea Into Success.
                    </span>
                </h1>
            </div>

            {/* Cards Section */}
            <div className="flex flex-col lg:flex-row items-stretch gap-6 sm:gap-8 mt-10 sm:mt-14">
                {successCards.map((card, index) => (
                    <div
                        key={index}
                        className="flex-1 bg-[#5D59EA] rounded-[20px] p-6 sm:p-8 flex flex-col justify-between items-center text-center shadow-lg hover:scale-[1.02] transition-transform duration-300 min-h-[400px] md:min-h-[450px] lg:min-h-[500px]"
                    >
                        {/* Top Section */}
                        <div className="flex flex-col flex-grow">
                            <h2 className="text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] text-white font-bold uppercase">
                                {card.title}
                            </h2>
                            <p className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] text-white font-medium mt-3 sm:mt-4 leading-snug max-w-[90%] mx-auto">
                                {card.subtitle}
                            </p>
                        </div>

                        {/* Bottom Image */}
                        <div className="bg-[#B2C7FF] rounded-[16px] p-4 sm:p-6 mt-6 sm:mt-8 w-full flex justify-center items-center">
                            <img
                                src={card.image}
                                alt={card.title}
                                className=" object-contain"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
