import React, { useState } from "react";

export default function Plans() {
    const plans = [
        {
            id: 1,
            name: "Monthly Plan",
            price: "$2499.00",
            duration: "/Month",
            img: "/plans/monthly.svg",
            features: [
                "Dedicated developer time",
                "Weekly sprints & demos",
                "Bug fixes & maintenance",
            ],
        },
        {
            id: 2,
            name: "Quarterly Plan",
            price: "$6999.00",
            duration: "/Quarter",
            img: "/plans/qurter.svg",
            features: [
                "Product roadmap support",
                "Bi-weekly milestones",
                "Priority bug fixes",
            ],
        },
        {
            id: 3,
            name: "Yearly Plan",
            price: "$19,999.00",
            duration: "/Year",
            img: "/plans/yearly.svg",
            features: [
                "Dedicated team",
                "Full-cycle delivery",
                "Quarterly strategy reviews",
            ],
        },
    ];

    const [activePlan, setActivePlan] = useState("Quarterly Plan");

    return (
        <div className="container section container_content mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 py-10">
            {/* Heading */}
            <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
                <h1
                    className="text-[28px] sm:text-[34px] md:text-[40px] 2xl:text-[48px] font-semibold text-[#02021ECC] relative"
                    style={{ fontFamily: "'Funnel Display', sans-serif" }}
                >
                    <span className="relative inline-block text-[#5D59EA]">
                        Estimated Cost
                        <img
                            src="/underline.svg"
                            alt=""
                            className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-3"
                        />
                    </span>{" "}
                    to Hire Mobile App Developers
                </h1>
                <p className="mt-4 sm:mt-6 text-lg sm:text-xl md:text-2xl">
                    Hire Mobile App Developers in India from <b>Kretoss Technology</b> Starting at
                </p>
            </div>

            {/* Plans Grid */}
            <div className="mt-10 sm:mt-16 flex flex-wrap justify-center gap-6">
                {plans.map((plan) => {
                    const isActive = plan.name === activePlan;
                    return (
                        <div
                            key={plan.id}
                            className={`w-full lg:w-[30%] rounded-2xl bg-white border p-6 sm:p-8 flex flex-col items-center justify-center transition-all duration-300 
                                ${isActive
                                    ? "border-[#5D59EA80] shadow-[0px_0px_25px_0px_#5D59EA99]"
                                    : "border-[#02021E33]"
                                }`}
                        >
                            <img
                                src={plan.img}
                                alt={plan.name}
                                className="bg-[#E1E0FF] rounded-full p-4 sm:p-5 w-20 h-20 "
                            />
                            <span className="text-[18px] sm:text-[22px] md:text-[28px] 2xl:text-[38px] text-[#02021E] font-semibold mt-4 sm:mt-5">
                                {plan.name}
                            </span>

                            {/* Price Section */}
                            <div
                                className="h-20 xl:h-[50px] 2xl:h-[83px] w-full mt-4 sm:mt-5 flex items-center justify-center"
                                style={{
                                    background:
                                        "linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(93, 89, 234, 0.2) 50.23%, rgba(255, 255, 255, 0) 100%)",
                                }}
                            >
                                <span className="text-[18px] sm:text-[22px] md:text-[28px] 2xl:text-[38px] font-bold text-[#5D59EA]">
                                    {plan.price}
                                </span>
                                <span className="text-lg sm:text-xl md:text-2xl font-medium text-[#02021E] ml-1">
                                    {plan.duration}
                                </span>
                            </div>

                            {/* Features */}
                            <ul className="list-disc pl-5 sm:pl-6 mt-4 sm:mt-6 space-y-2 sm:space-y-3 text-[#4C586F] text-sm sm:text-base md:text-lg">
                                {plan.features.map((feature, index) => (
                                    <li key={index}>{feature}</li>
                                ))}
                            </ul>

                            {/* Button */}
                            <button
                                onClick={() => setActivePlan(plan.name)}
                                className={`mt-4 sm:mt-6 w-full h-12 sm:h-[60px] text-sm sm:text-[20px] rounded-full transition-all duration-300 flex items-center justify-center
                                    ${isActive
                                        ? "bg-[#5D59EA] text-white"
                                        : "border border-[#5D59EA] text-[#5D59EA] bg-transparent"
                                    }`}
                                style={isActive ? { boxShadow: "0px 0px 22px 0px #5D59EA99" } : undefined}
                            >
                                Hire {plan.name.split(" ")[0]}
                            </button>

                            <span className="text-[#02021ECC] text-xs sm:text-sm mt-3 text-center">
                                * Prices are starting estimates and may vary based on scope.
                            </span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
