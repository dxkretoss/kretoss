import React from 'react'

export default function SuccessTogather() {
    return (
        <div className="container section">
            <div className='relative w-[1620px] h-[340px] rounded-[24px] border border-[#5D59EACC]'
                style={{ background: "linear-gradient(92.88deg, rgba(60, 131, 246, 0.2) 0%, rgba(124, 59, 237, 0.2) 49.86%)" }}>
                <div className='w-[710px] mx-auto p-[53px]'>
                    <h1
                        className="w-[710px] mx-auto text-[50px] font-semibold text-[#02021E] text-center relative"
                        style={{ fontFamily: "'Funnel Display', sans-serif" }}
                    >
                        Let’s Build {" "}
                        <span className="relative inline-block text-[#5D59EA]">
                            Success
                            <img
                                src="/underline.svg"
                                alt=""
                                className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-[12px]"
                            />
                        </span>{" "}
                        Together.
                    </h1>
                    <p className='mt-[20px] text-[#02021E] text-center text-[18px]'>Share your project details to build your path toward success</p>

                    <div className='flex justify-center items-center mt-[50px]'>
                        <button
                            className='bg-[#5D59EA] text-[20px] rounded-full text-white px-5 py-2  h-[61px] w-[427px]'
                            style={{ boxShadow: '0px 0px 18px 0px #5D59EA99' }}
                        >
                            Get in touch with us today
                        </button>
                    </div>

                    <div className="absolute -bottom-15 -left-12">
                        <div className="relative">
                            <div
                                className="w-[218px] h-[103px] bg-[#FFFFFF] rounded-[10px] flex flex-col items-center justify-center gap-2"
                                style={{
                                    boxShadow: "13px 14px 40px 0px #27628326",
                                }}
                            >
                                <img src="/misson.svg" alt="Quick Support" className="absolute -top-7" />
                                <div className='absolute top-8 flex flex-col'>
                                    <span className="text-[23px] font-bold text-[#020817] text-center">
                                        Mission
                                    </span>
                                    <span className='text-[#4B4D4C] text-[15px]"'>Innovate. Develop. Deliver.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
