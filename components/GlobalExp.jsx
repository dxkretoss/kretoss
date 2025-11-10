import React from 'react'
import { MoveRight } from 'lucide-react'

export default function GlobalExp() {
    return (
        <div
            className="container section container_content mx-auto h-[640px] rounded-[24px] overflow-hidden"
            style={{
                background: "linear-gradient(180deg, rgba(238, 239, 255, 0.5) 0%, #CFE6FF 100%)",
            }}
        >

            <div className='flex'>
                <div className='w-[679px] pt-[112px] pl-[50px]'>
                    <img src='logo.svg' />

                    <h1 className='text-[48px] font-semibold text-[#02021E] mt-[40px]'
                        style={{ fontFamily: "'Funnel Display', sans-serif" }}>
                        Tap Into  {" "}
                        <span className="bg-gradient-to-r from-[#5D59EA] to-[#B4B2FF] font-bold text-white rounded-md px-2 py-3">
                            Global Expertise
                        </span>{" "}
                    </h1>

                    <div className=' mt-[30px]'>
                        <span className='text-[24px] text-[#02021E]'>
                            Our team of experts brings deep domain knowledge and innovative thinking to every project. Their dynamic, out of the box approach sets us apart in the market.
                        </span>
                    </div>

                    <button className="w-[256px] h-[61px] mt-[40px] text-[20px] items-center flex gap-2 rounded-full bg-[#5D59EA] text-white px-6 font-medium  hover:opacity-90 transition"
                        style={{ boxShadow: '0px 0px 22px 0px #5D59EA99' }}>
                        Hire App Developer
                        <MoveRight />
                    </button>
                </div>

                <div className='p-[70px]'>
                    <img src='/GlobalExp.svg' />
                </div>
            </div>

        </div>
    )
}
