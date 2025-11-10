import React from 'react'

export default function ProcessHire() {
    const Process = [
        { img: '/process/appdev.svg', txt: 'Meet Our App Developers ', desc: 'Connect with our experts to discuss your development goals and requirements.' },
        { img: '/process/team.svg', txt: 'Team Allocation', desc: 'We’ll share developer profiles based on your requirements, allowing you to review and shortlist the best fit.' },
        { img: '/process/interview.svg', txt: 'Schedule Interview', desc: 'Interview shortlisted developers to evaluate their skills and choose the best team for your project.' },
        { img: '/process/onboarding.svg', txt: 'Onboarding Process', desc: 'After hiring developers, you can track real-time progress and leverage their full technical expertise.' },
    ]
    return (
        <div className="container section">
            <div className='w-[1200px] mx-auto flex justify-center flex-col'>
                <h1
                    className="w-[1200px] mx-auto text-[48px] font-semibold text-[#02021E] text-center relative"
                    style={{ fontFamily: "'Funnel Display', sans-serif" }}
                >
                    A Streamlined {" "}
                    <span className="relative inline-block text-[#5D59EA]">
                        Process to Hire
                        <img
                            src="/underline.svg"
                            alt=""
                            className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-[12px]"
                        />
                    </span>{" "}
                    App Developers
                </h1>
                <p className='w-[912px] mx-auto mt-[20px] text-[#191919] text-[20px] text-center'>
                    Looking to strengthen your development team with top talent? Follow our quick and simple process to hire expert app developers from our skilled team.</p>
            </div>

            <div className='mt-[51px] flex gap-[105px]'>
                {Process?.map((items, index) => (
                    <div key={index} className='w-[328px]'>
                        <img src={items.img} />
                        <p className='mt-[30px] text-[#000000] text-[24px] font-semibold'>{items.txt}</p>
                        <p className='mt-[30px] text-[#000000CC] text-[18px]'>{items.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
