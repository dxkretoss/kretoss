import React from 'react'

export default function Solution() {
    const solutionData = [
        { img: '/solutions/edu.svg', txt: 'Education & e-learning' },
        { img: '/solutions/ecom.svg', txt: 'Retail Ecommerce' },
        { img: '/solutions/health.svg', txt: 'Healthcare & Fitness' },
        { img: '/solutions/logi.svg', txt: 'Logistics & Distribution' },
        { img: '/solutions/network.svg', txt: 'Social Networking' },
        { img: '/solutions/estate.svg', txt: 'Real Estate' },
        { img: '/solutions/travel.svg', txt: 'Travel & Tour' },
        { img: '/solutions/food.svg', txt: 'Food & Restaurant' },
    ]
    return (
        <div className="container mx-auto section container_content py-12 px-4 sm:px-6 lg:px-8">
            {/* Heading */}
            <h1
                className="max-w-[960px] mx-auto text-3xl sm:text-4xl lg:text-[48px] font-semibold text-center text-[#02021E] relative leading-snug"
                style={{ fontFamily: "'Funnel Display', sans-serif" }}
            >
                Hire Expert App Developers To Craft Tailored{' '}
                <span className="relative inline-block text-[#5D59EA]">
                    Mobile Solutions.
                    <img
                        src="/underline.svg"
                        alt=""
                        className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-[8px] sm:translate-y-[12px]"
                    />
                </span>
            </h1>

            {/* Solution Cards */}
            <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-8 2xl:grid-cols-8 gap-6 sm:gap-8 lg:gap-5 justify-items-center">
                {solutionData.map((item, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center bg-white border border-[#22222224] rounded-[22px] p-5 sm:p-6 w-[160px] sm:w-[150px] 2xl:w-[180px] h-[160px] sm:h-[180px]"
                        style={{ boxShadow: '0px 0px 21px 0px #0000001A' }}
                    >
                        <img src={item.img} className="w-[50px] sm:w-[42px] 2xl:w-[62px] h-[50px] sm:h-[62px]" />
                        <span className="text-[#02021E] font-medium text-[14px] sm:text-[18px] 2xl:text-[22px] mt-4 sm:mt-5 text-center">
                            {item.txt}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    )
}
