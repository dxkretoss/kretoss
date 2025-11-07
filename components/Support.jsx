import React, { useState } from "react";

export default function Support() {
    const Services = [
        { img: '/support/mobDev.svg', txt: 'Custom Mobile App Development', desc: 'We specialize in developing, updating, and managing secure, custom Android apps using Java, Kotlin, and Android SDK.' },
        { img: '/support/fullstack.svg', txt: 'Full-stack App Development', desc: 'Hire skilled app developers to build secure, scalable, and feature-rich applications that drive efficiency and profitability from concept to launch.' },
        { img: '/support/appSol.svg', txt: 'Enterprise App Solutions', desc: 'Hire app developers to build adaptable enterprise solutions powered by smart data analytics, enhancing customer experience and workflow efficiency.' },
        { img: '/support/appdecv.svg', txt: 'Cross platform app Development ', desc: 'We specialize in developing, updating, & managing secure, custom cross-platform apps using Flutter, React Native for seamless performance across devices..' },
        { img: '/support/thirdparty.svg', txt: 'Third Party Integration', desc: 'Hire expert developers to integrate third-party APIs for seamless connectivity and enhanced app functionality.' },
    ]

    return (
        <div
            className="container section h-[690px] rounded-[24px] overflow-hidden"
            style={{
                background: "linear-gradient(96.57deg, rgba(255, 255, 255, 0.8) 0.24%, #FCE6FF 99.76%)",
            }}
        >
            <div className='w-[930px] mx-auto pt-[113px]'>
                <h1 className='text-[48px] font-semibold text-[#02021E]'
                    style={{ fontFamily: "'Funnel Display', sans-serif" }}>
                    Hire Mobile App Programmers to Deliver {" "}
                    <span className="bg-gradient-to-r from-[#5D59EA] to-[#B4B2FF] font-bold text-white rounded-md px-2 py-3">
                        Top Quality App Development
                    </span>{" "}
                    Services
                </h1>
            </div>

            <div className='mt-[48px] flex gap-[16px]'>
                {Services.map((item, index) => (
                    <div key={index} className='w-[299px] h-[227px] border border-[#22222233] rounded-[12px] bg-[#FFFFFF] p-[20px]'>
                        <div className='flex gap-[12px]'>
                            <img src={item.img} className='bg-[#E1E0FF] p-2 rounded-full' />
                            <span className='text-[18px] text-[#02021E] font-semibold'>{item.txt}</span>
                        </div>
                        <div className='mt-[15px]'>
                            <span className='text-[#4C586F] text-[16px] '>
                                {item.desc}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
