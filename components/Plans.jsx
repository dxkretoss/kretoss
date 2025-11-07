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

    // Active plan (default = Quarterly)
    const [activePlan, setActivePlan] = useState("Quarterly Plan");

    return (
        <div className="container section">
            {/* Heading */}
            <div className="w-[1200px] mx-auto flex flex-col justify-center items-center">
                <h1
                    className="text-[48px] font-semibold text-[#02021ECC] text-center relative"
                    style={{ fontFamily: "'Funnel Display', sans-serif" }}
                >
                    <span className="relative inline-block text-[#5D59EA]">
                        Estimated Cost
                        <img
                            src="/underline.svg"
                            alt=""
                            className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-[12px]"
                        />
                    </span>{" "}
                    to Hire Mobile App Developers
                </h1>
                <span className="text-center mt-[20px] text-[24px]">
                    Hire Mobile App Developers in India from{" "}
                    <b>Kretoss Technology</b> Starting at
                </span>
            </div>

            {/* Plans Grid */}
            <div className="mt-[60px] flex justify-center gap-[24px] flex-wrap">
                {plans.map((plan) => {
                    const isActive = plan.name === activePlan;
                    return (
                        <div
                            key={plan.id}
                            className={`w-[487px] h-[636px] rounded-[24px] bg-[#FFFFFF] border p-[30px] flex flex-col items-center justify-center transition-all duration-300 
                ${isActive
                                    ? "border-[#5D59EA80] shadow-[0px_0px_25px_0px_#5D59EA99]"
                                    : "border-[#02021E33]"
                                }`}
                        >
                            <img
                                src={plan.img}
                                alt={plan.name}
                                className="bg-[#E1E0FF] rounded-full p-5"
                            />
                            <span className="text-[38px] text-[#02021E] font-semibold mt-[15px]">
                                {plan.name}
                            </span>

                            {/* Price Section */}
                            <div
                                style={{
                                    background:
                                        "linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(93, 89, 234, 0.2) 50.23%, rgba(255, 255, 255, 0) 100%)",
                                }}
                                className="h-[83px] w-full mt-[15px] justify-center flex items-center"
                            >
                                <span className="text-[38px] font-bold text-[#5D59EA] ml-[15px]">
                                    {plan.price}
                                </span>
                                <span className="text-[22px] font-medium text-[#02021E] ml-1">
                                    {plan.duration}
                                </span>
                            </div>

                            {/* Features */}
                            <ul className="list-disc pl-6 space-y-3 mt-[30px] text-[#4C586F] text-[20px]">
                                {plan.features.map((feature, index) => (
                                    <li key={index}>{feature}</li>
                                ))}
                            </ul>

                            {/* Button */}
                            <button
                                onClick={() => setActivePlan(plan.name)}
                                className={`mt-[30px] w-full h-[60px] text-[20px] rounded-full transition-all duration-300 ${isActive
                                    ? "bg-[#5D59EA] text-white"
                                    : "border border-[#5D59EA] text-[#5D59EA] bg-transparent"
                                    }`}
                                style={
                                    isActive
                                        ? { boxShadow: "0px 0px 22px 0px #5D59EA99" }
                                        : undefined
                                }
                            >
                                Hire {plan.name.split(" ")[0]}
                            </button>

                            <span className="text-[#02021ECC] text-[16px] mt-[20px] text-center">
                                * Prices are starting estimates and may vary based on scope.
                            </span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
