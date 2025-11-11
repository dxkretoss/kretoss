import React from 'react'

export default function WhyKretoss() {
    const keypointsOne = [
        "Over 14 Years of Industry Experience",
        "1100+ Skilled and Dedicated Developers",
        "98% Project Success Rate",
        "2600+ Satisfied Global Clients",
        "Proven Development Expertise",
        "Comprehensive End-to-End Support",
        "Flexible Hiring Models"
    ]

    const keypointsTwo = [
        "Access a Diverse Pool of Multi-Tech Experts",
        "Reduce Training and Retention Costs",
        "Optimize Your IT Capabilities",
        "Enjoy Flexible Engagement Plans",
        "Bridge and Strengthen Tech Gaps",
        "Foster Continuous Knowledge Exchange",
        "Communicate Directly with Your Team"
    ]

    return (
        <div className="container section mx-auto container_content px-4 py-16">
            <div
                className="w-full max-w-[1620px] mx-auto rounded-[26px] p-6 sm:p-8 md:p-10 lg:p-14"
                style={{
                    background: "linear-gradient(96.57deg, #E6F0FF 0.24%, #FFFFFF 99.76%)",
                }}
            >
                {/* Wrapper */}
                <div className="flex flex-col lg:flex-row gap-8 xl:gap-[40px] justify-center items-stretch">
                    {/* Left Card */}
                    <div className="relative bg-white border border-[#22222233] p-5 xl:p-8 2xl:p-10 rounded-[24px] flex-1 flex flex-col justify-between shadow-sm">
                        <div>
                            <h1 className="text-[20px] lg:text-[24px] xl:text-[30px] 2xl:text-[38px] text-[#02021E] font-semibold leading-snug mb-6">
                                Why Hire Mobile App Developers from{" "}
                                <span className="font-bold">Kretoss Technology</span>
                            </h1>

                            <div className="mt-[20px] flex flex-col gap-3">
                                {keypointsOne.map((item, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-[12px]"
                                        style={{
                                            background:
                                                "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(93,89,234,0.1) 50.23%, rgba(255,255,255,0) 100%)",
                                        }}
                                    >
                                        <img
                                            src="/points.svg"
                                            className="w-[24px] xl:w-[28px] 2xl:w-[32px] h-[24px] xl:h-[28px] 2xl:h-[32px]"
                                            alt="point"
                                        />
                                        <p className="text-[16px] xl:text-[18px] 2xl:text-[20px] text-[#000000] leading-snug">
                                            {item}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Decorative Image */}
                        <img
                            src="/points2.svg"
                            className="absolute -top-6 -right-10 w-[100px] h-[100px]"
                            alt=""
                        />
                    </div>

                    {/* Right Card */}
                    <div className="relative bg-white border border-[#22222233] p-5 xl:p-8 2xl:p-10 rounded-[24px] flex-1 flex flex-col justify-between shadow-sm">
                        <div>
                            <h1 className="text-[20px] lg:text-[24px] xl:text-[30px] 2xl:text-[38px] text-[#02021E] font-semibold leading-snug mb-6">
                                Kretoss Technology’s Dedicated Team — Your Partner in{" "}
                                <span className="font-bold">Excellence</span>
                            </h1>

                            <div className="mt-[20px] flex flex-col gap-3">
                                {keypointsTwo.map((item, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-[12px]"
                                        style={{
                                            background:
                                                "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(93,89,234,0.1) 50.23%, rgba(255,255,255,0) 100%)",
                                        }}
                                    >
                                        <img
                                            src="/points.svg"
                                            className="w-[24px] xl:w-[28px] 2xl:w-[32px] h-[24px] xl:h-[28px] 2xl:h-[32px]"
                                            alt="point"
                                        />
                                        <p className="text-[16px] xl:text-[18px] 2xl:text-[20px] text-[#000000] leading-snug">
                                            {item}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Decorative Image */}
                        <img
                            src="/points1.svg"
                            className="absolute -top-6 -right-10 w-[100px] h-[100px]"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
