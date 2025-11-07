import React from 'react'

export default function Solution() {
    const solutionData = [
        { "img": '/solutions/edu.svg', "txt": 'Education & e-learning' },
        { "img": '/solutions/ecom.svg', "txt": 'Retail Ecommerce' },
        { "img": '/solutions/health.svg', "txt": 'Healthcare & Fitness' },
        { "img": '/solutions/logi.svg', "txt": 'Logistics & Distribution' },
        { "img": '/solutions/network.svg', "txt": 'Social Networking' },
        { "img": '/solutions/estate.svg', "txt": 'Real Esate' },
        { "img": '/solutions/travel.svg', "txt": 'Travel & Tour' },
        { "img": '/solutions/food.svg', "txt": 'Food & Restaurant' },
    ]
    return (
        <div className="container section h-[398px]">
            <h1
                className="w-[960px] mx-auto text-[48px] font-semibold text-[#02021E] text-center relative"
                style={{ fontFamily: "'Funnel Display', sans-serif" }}
            >
                Hire Expert App Developers To Craft Tailored{" "}
                <span className="relative inline-block text-[#5D59EA]">
                    Mobile Solutions.
                    <img
                        src="/underline.svg"
                        alt=""
                        className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-[12px]"
                    />
                </span>
            </h1>

            <div className='mt-[70px] flex gap-[26px]'>
                {solutionData.map((item, index) => (
                    <div key={index} className='flex flex-col bg-white border border-[#22222224] w-[180px] h-[180px] rounded-[22px] p-[20px]'
                        style={{
                            boxShadow: "0px 0px 21px 0px #0000001A"
                        }}>

                        <img src={item.img} className='w-[62px] h-[62px]' />
                        <span className='text-[#02021E] font-medium text-[22px] mt-[22px]'>{item.txt}</span>
                    </div>
                ))}

            </div>

        </div>
    )
}
