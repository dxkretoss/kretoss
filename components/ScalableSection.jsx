import React from 'react'
import CountUpNumber from './CountUpNumber'
import { MoveRight } from "lucide-react";
export default function ScalableSection() {
    return (
        <div
            className="container section container_content overflow-hidden"
        >
            <div className='flex flex-col lg:flex-row gap-5 h-[800px] rounded-[24px]'
                style={{
                    background: "linear-gradient(96.57deg, #E6F0FF 0.24%, #F8F8F8 99.76%)",
                }}>
                <div className='w-[100%] lg:w-[49%] p-[20px] lg:p-[50px] flex flex-col justify-center'>
                    <h1
                        className="text-[28px] sm:text-[34px] md:text-[40px] 2xl:text-[48px] font-semibold text-center lg:text-left text-[#02021E] relative leading-snug"
                        style={{ fontFamily: "'Funnel Display', sans-serif" }}
                    >
                        Hire Mobile App Developers to Build {" "}
                        <span className="relative inline-block text-[#5D59EA]">
                            Scalable, Innovative
                            <img
                                src="/underline.svg"
                                alt=""
                                className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-[8px] sm:translate-y-[12px]"
                            />
                        </span> {" "}
                        Apps
                    </h1>

                    <div className='lg:hidden flex overflow-hidden'>
                        <div className='animate-scroll mt-[30px] flex '>
                            <div className='flex flex-col  items-center text-center h-[136px] p-5'>
                                <img src="/mob-app.svg" alt="" className='w-[53px] h-[53px]' />
                                <p className="text-[28px] font-semibold text[#000000]"> <CountUpNumber target={200} />+</p>
                                <p className="text-[#000000] text-[15px]">Mobile Apps Delivered</p>
                            </div>

                            <div className='flex flex-col  items-center text-center h-[136px] p-5'>
                                <img src="/bussines.svg" alt="" className='w-[53px] h-[53px]' />
                                <p className="text-[28px] font-semibold text[#000000]">$<CountUpNumber target={1} decimals={1} />B+</p>
                                <p className="text-[#000000] text-[15px]">Business Impact for Our Clients</p>
                            </div>

                            <div className='flex flex-col  items-center text-center h-[136px] p-5'>
                                <img src="/review.svg" alt="" className='w-[53px] h-[53px]' />
                                <p className="text-[28px] font-semibold text[#000000]"><CountUpNumber target={600} />+</p>
                                <p className="text-[#000000] text-[15px]">Five-Star Client Reviews</p>
                            </div>

                            <div className='flex flex-col  items-center text-center h-[136px] p-5'>
                                <img src="/award.svg" alt="" className='w-[53px] h-[53px]' />
                                <p className="text-[28px] font-semibold text[#000000]"><CountUpNumber target={11} />+</p>
                                <p className="text-[#000000] text-[15px]">Awards for Kretoss</p>
                            </div>

                            <div className='flex flex-col  items-center text-center h-[136px] p-5'>
                                <img src="/mob-app.svg" alt="" className='w-[53px] h-[53px]' />
                                <p className="text-[28px] font-semibold text[#000000]"> <CountUpNumber target={200} />+</p>
                                <p className="text-[#000000] text-[15px]">Mobile Apps Delivered</p>
                            </div>

                            <div className='flex flex-col  items-center text-center h-[136px] p-5'>
                                <img src="/bussines.svg" alt="" className='w-[53px] h-[53px]' />
                                <p className="text-[28px] font-semibold text[#000000]">$<CountUpNumber target={1} decimals={1} />B+</p>
                                <p className="text-[#000000] text-[15px]">Business Impact for Our Clients</p>
                            </div>

                            <div className='flex flex-col  items-center text-center h-[136px] p-5'>
                                <img src="/review.svg" alt="" className='w-[53px] h-[53px]' />
                                <p className="text-[28px] font-semibold text[#000000]"><CountUpNumber target={600} />+</p>
                                <p className="text-[#000000] text-[15px]">Five-Star Client Reviews</p>
                            </div>

                            <div className='flex flex-col  items-center text-center h-[136px] p-5'>
                                <img src="/award.svg" alt="" className='w-[53px] h-[53px]' />
                                <p className="text-[28px] font-semibold text[#000000]"><CountUpNumber target={11} />+</p>
                                <p className="text-[#000000] text-[15px]">Awards for Kretoss</p>
                            </div>

                            <div className='flex flex-col  items-center text-center h-[136px] p-5'>
                                <img src="/mob-app.svg" alt="" className='w-[53px] h-[53px]' />
                                <p className="text-[28px] font-semibold text[#000000]"> <CountUpNumber target={200} />+</p>
                                <p className="text-[#000000] text-[15px]">Mobile Apps Delivered</p>
                            </div>

                            <div className='flex flex-col  items-center text-center h-[136px] p-5'>
                                <img src="/bussines.svg" alt="" className='w-[53px] h-[53px]' />
                                <p className="text-[28px] font-semibold text[#000000]">$<CountUpNumber target={1} decimals={1} />B+</p>
                                <p className="text-[#000000] text-[15px]">Business Impact for Our Clients</p>
                            </div>

                            <div className='flex flex-col  items-center text-center h-[136px] p-5'>
                                <img src="/review.svg" alt="" className='w-[53px] h-[53px]' />
                                <p className="text-[28px] font-semibold text[#000000]"><CountUpNumber target={600} />+</p>
                                <p className="text-[#000000] text-[15px]">Five-Star Client Reviews</p>
                            </div>

                            <div className='flex flex-col  items-center text-center h-[136px] p-5'>
                                <img src="/award.svg" alt="" className='w-[53px] h-[53px]' />
                                <p className="text-[28px] font-semibold text[#000000]"><CountUpNumber target={11} />+</p>
                                <p className="text-[#000000] text-[15px]">Awards for Kretoss</p>
                            </div>

                            <div className='flex flex-col  items-center text-center h-[136px] p-5'>
                                <img src="/mob-app.svg" alt="" className='w-[53px] h-[53px]' />
                                <p className="text-[28px] font-semibold text[#000000]"> <CountUpNumber target={200} />+</p>
                                <p className="text-[#000000] text-[15px]">Mobile Apps Delivered</p>
                            </div>

                            <div className='flex flex-col  items-center text-center h-[136px] p-5'>
                                <img src="/bussines.svg" alt="" className='w-[53px] h-[53px]' />
                                <p className="text-[28px] font-semibold text[#000000]">$<CountUpNumber target={1} decimals={1} />B+</p>
                                <p className="text-[#000000] text-[15px]">Business Impact for Our Clients</p>
                            </div>

                            <div className='flex flex-col  items-center text-center h-[136px] p-5'>
                                <img src="/review.svg" alt="" className='w-[53px] h-[53px]' />
                                <p className="text-[28px] font-semibold text[#000000]"><CountUpNumber target={600} />+</p>
                                <p className="text-[#000000] text-[15px]">Five-Star Client Reviews</p>
                            </div>

                            <div className='flex flex-col  items-center text-center h-[136px] p-5'>
                                <img src="/award.svg" alt="" className='w-[53px] h-[53px]' />
                                <p className="text-[28px] font-semibold text[#000000]"><CountUpNumber target={11} />+</p>
                                <p className="text-[#000000] text-[15px]">Awards for Kretoss</p>
                            </div>


                        </div>
                    </div>

                    <div className='lg:hidden  flex justify-center'>
                        <button className="w-[256px] h-[61px] mt-[20px] text-[20px] items-center flex gap-2 rounded-full bg-[#5D59EA] text-white px-6 font-medium  hover:opacity-90 transition"
                            style={{ boxShadow: '0px 0px 22px 0px #5D59EA99' }}>
                            Hire App Developer
                            <MoveRight />
                        </button>
                    </div>

                    <div className='hidden lg:flex lg:flex-col'>
                        <div className="flex lg:mt-[59px] 2xl:mt-[79px]">
                            <div className='flex h-[136px] w-[296px] border-r border-b border-[#0000001A] p-5'>
                                <img src="/mob-app.svg" alt="" className='w-[53px] h-[53px]' />
                                <div className='ml-[22px] w-[144px]'>
                                    <p className="text-[28px] font-semibold text[#000000]"> <CountUpNumber target={200} />+</p>
                                    <p className="text-[#000000] text-[15px]">Mobile Apps Delivered</p>
                                </div>
                            </div>

                            <div className='flex h-[136px] w-[296px] border-b border-[#0000001A] p-5'>
                                <img src="/bussines.svg" alt="" className='w-[53px] h-[53px]' />
                                <div className='ml-[22px] w-[144px]'>
                                    <p className="text-[28px] font-semibold text[#000000]">$<CountUpNumber target={1} decimals={1} />B+</p>
                                    <p className="text-[#000000] text-[15px]">Business Impact for Our Clients</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex">
                            <div className='flex h-[136px] w-[296px] border-r border-[#0000001A] p-8'>
                                <img src="/review.svg" alt="" className='w-[53px] h-[53px]' />
                                <div className='ml-[22px] w-[144px]'>
                                    <p className="text-[28px] font-semibold text[#000000]"><CountUpNumber target={600} />+</p>
                                    <p className="text-[#000000] text-[15px]">Five-Star Client Reviews</p>
                                </div>
                            </div>

                            <div className='flex h-[136px] w-[296px] p-8'>
                                <img src="/award.svg" alt="" className='w-[53px] h-[53px]' />
                                <div className='ml-[22px] w-[144px]'>
                                    <p className="text-[28px] font-semibold text[#000000]"><CountUpNumber target={11} />+</p>
                                    <p className="text-[#000000] text-[15px]">Awards for Kretoss</p>
                                </div>
                            </div>
                        </div>
                        <button className="w-[256px] h-[61px] mt-[40px] text-[20px] items-center flex gap-2 rounded-full bg-[#5D59EA] text-white px-6 font-medium  hover:opacity-90 transition"
                            style={{ boxShadow: '0px 0px 22px 0px #5D59EA99' }}>
                            Hire App Developer
                            <MoveRight />
                        </button>
                    </div>
                </div>

                <div className="flex lg:hidden justify-center overflow-hidden">
                    <div className="animate-scroll flex gap-4">
                        <img src="/mobile/mob-1.png" />
                        <img src="/mobile/mob-2.png" />
                        <img src="/mobile/mob-3.png" />
                        <img src="/mobile/mob-4.png" />
                        <img src="/mobile/mob-5.png" />
                        <img src="/mobile/mob-6.png" />
                        <img src="/mobile/mob-7.png" />
                        <img src="/mobile/mob-1.png" />
                        <img src="/mobile/mob-2.png" />
                        <img src="/mobile/mob-3.png" />
                        <img src="/mobile/mob-4.png" />
                        <img src="/mobile/mob-5.png" />
                        <img src="/mobile/mob-6.png" />
                        <img src="/mobile/mob-7.png" />
                        <img src="/mobile/mob-1.png" />
                        <img src="/mobile/mob-2.png" />
                        <img src="/mobile/mob-3.png" />
                        <img src="/mobile/mob-4.png" />
                        <img src="/mobile/mob-5.png" />
                        <img src="/mobile/mob-6.png" />
                        <img src="/mobile/mob-7.png" />
                        <img src="/mobile/mob-1.png" />
                        <img src="/mobile/mob-2.png" />
                        <img src="/mobile/mob-3.png" />
                        <img src="/mobile/mob-4.png" />
                        <img src="/mobile/mob-5.png" />
                        <img src="/mobile/mob-6.png" />
                        <img src="/mobile/mob-7.png" />
                    </div>
                </div>

                <div className="hidden lg:flex gap-6">
                    {/* Column 1 */}
                    <div className="scroll-column">
                        <div className="scroll-inner">
                            <img src="/mobile/mob-1.png" />
                            <img src="/mobile/mob-2.png" />
                            <img src="/mobile/mob-1.png" />
                            <img src="/mobile/mob-2.png" />
                            <img src="/mobile/mob-1.png" />
                            <img src="/mobile/mob-2.png" />
                            <img src="/mobile/mob-1.png" />
                            <img src="/mobile/mob-2.png" />
                        </div>
                    </div>

                    {/* Column 2 */}
                    <div className="scroll-column">
                        <div className="scroll-inner scroll-inner-delay">
                            <img src="/mobile/mob-3.png" />
                            <img src="/mobile/mob-4.png" />
                            <img src="/mobile/mob-5.png" />
                            <img src="/mobile/mob-3.png" />
                            <img src="/mobile/mob-4.png" />
                            <img src="/mobile/mob-5.png" />
                            <img src="/mobile/mob-3.png" />
                            <img src="/mobile/mob-4.png" />
                            <img src="/mobile/mob-5.png" />
                            <img src="/mobile/mob-3.png" />
                        </div>
                    </div>

                    {/* Column 3 */}
                    <div className="scroll-column">
                        <div className="scroll-inner">
                            <img src="/mobile/mob-6.png" />
                            <img src="/mobile/mob-7.png" />
                            <img src="/mobile/mob-6.png" />
                            <img src="/mobile/mob-7.png" />
                            <img src="/mobile/mob-6.png" />
                            <img src="/mobile/mob-7.png" />
                            <img src="/mobile/mob-6.png" />
                            <img src="/mobile/mob-7.png" />
                            <img src="/mobile/mob-6.png" />
                        </div>
                    </div>
                </div>
            </div>
        </div >

    )
}
