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
        "Access a Diverse Pool of Multi - Tech Experts",
        "Reduce Training and Retention Costs",
        "Optimize Your IT Capabilities",
        "Enjoy Flexible Engagement Plans",
        "Bridge and Strengthen Tech Gaps",
        "Foster Continuous Knowledge Exchange",
        "Communicate Directly with Your Team"
    ]
    return (
        <div className="container section">
            <div className="h-[839px] w-[1620px] mx-auto rounded-[26px]" style={{ background: "linear-gradient(96.57deg, #E6F0FF 0.24%, #FFFFFF 99.76%)" }}>
                <div className='p-[60px] flex gap-[40px]'>
                    <div className='relative bg-[#FFFFFF] border p-[30px] border-[#22222233] h-[719px] w-[730px] rounded-[24px]'>
                        <h1 className='text-[38px] text-[#02021E] w-[600px]'>Why Hire Mobile App Developers from {" "}
                            <span className='font-bold'>Kretoss Technology</span>
                        </h1>

                        <div className='mt-[30px] flex flex-col gap-[12px]'>
                            {keypointsOne?.map((items, index) => (
                                <div key={index} className='flex gap-[12px] h-[63px] items-center'
                                    style={{ background: 'linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(93, 89, 234, 0.1) 50.23%, rgba(255, 255, 255, 0) 100%)' }}>
                                    <img src='/points.svg' className='w-[32px] h-[32px]' />

                                    <p className='text-[20px] text-[#000000]'>{items}</p>

                                </div>
                            ))}
                        </div>

                        <img src='/points2.svg' className='absolute -top-15 -right-20' />
                    </div>

                    <div className='relative bg-[#FFFFFF] border p-[30px] border-[#22222233] h-[719px] w-[730px] rounded-[24px]'>
                        <h1 className='text-[38px] text-[#02021E] w-[600px]'>Kretoss Technology’s Dedicated Team Your Partner in {" "}
                            <span className='font-bold'>Excellence</span>
                        </h1>

                        <div className='mt-[30px] flex flex-col gap-[12px]'>
                            {keypointsTwo?.map((items, index) => (
                                <div key={index} className='flex gap-[12px] h-[63px] items-center'
                                    style={{ background: 'linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(93, 89, 234, 0.1) 50.23%, rgba(255, 255, 255, 0) 100%)' }}>
                                    <img src='/points.svg' className='w-[32px] h-[32px]' />

                                    <p className='text-[20px] text-[#000000]'>{items}</p>

                                </div>
                            ))}
                        </div>
                        <img src='/points1.svg' className='absolute -top-15 -right-20' />
                    </div>

                </div>
            </div>
        </div>
    )
}
