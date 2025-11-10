import React from 'react'

export default function IntoSuccess() {
    const successCards = [
        {
            title: "STARTUPS",
            subtitle: "Accelerate Your Launch. Maximize Your Seed.",
            image: "/success/success-1.svg",
        },
        {
            title: "Mid level Businesses",
            subtitle: "Scale with Confidence. Outpace Competitors..",
            image: "/success/success-2.svg",
        },
        {
            title: "Enterprise Level Businesses",
            subtitle: "Master Complexity. Drive Strategic Innovation.",
            image: "/success/success-3.svg",
        },
    ];

    return (
        <div className="container section">
            <div className='w-[947px] mx-auto'>
                <h1 className='text-[48px] text-center font-semibold text-[#02021E]'
                    style={{ fontFamily: "'Funnel Display', sans-serif" }}>
                    Hire Mobile App Developers To Turn Your {" "}
                    <span
                        style={{
                            background: "linear-gradient(180deg, #FFFFFF 0%, #BBB9FF 130.23%)",
                        }}
                        className="font-bold text-[#5D59EA] rounded-md px-2 py-3">
                        Idea Into Success.
                    </span>{" "}
                </h1>
            </div>

            <div className="flex justify-center gap-[30px] mt-[60px]">
                {successCards.map((card, index) => (
                    <div
                        key={index}
                        className="w-[510px] h-[550px] bg-[#5D59EA] rounded-[24px] flex justify-center"
                    >
                        <div className="p-[20px] flex flex-col justify-between items-center text-center w-full h-full">
                            {/* Top Section */}
                            <div className='p-[20px] '>
                                <h1 className="text-[25px] text-[#FFFFFF] font-bold uppercase">
                                    {card.title}
                                </h1>
                                <p className="text-[24px] text-[#FFFFFF] font-medium mt-[15px] w-[409px]">
                                    {card.subtitle}
                                </p>
                            </div>

                            {/* Bottom Image Section */}
                            <div className="bg-[#B2C7FF] p-[30px] flex justify-center items-center rounded-[16px]">
                                <img src={card.image} alt={card.title} className="rounded-[16px]" />
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}
