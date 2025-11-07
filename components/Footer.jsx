import React from 'react'

export default function Footer() {
    return (
        <div className="section h-[494px]"
            style={{
                background: "linear-gradient(99.21deg, #343284 0.29%, #5D59EA 99.71%)",
            }}>

            <div className=' w-[1620px] mx-auto'>
                <div className='pt-[85px] flex gap-20 '>
                    <div className='bg-[#FFFFFF1A] p-[30px] border border-[#FFFFFF4D] rounded-[24px] w-[538px] h-[232px]'>
                        <img src='/footerlogo.svg' />
                        <div className='mt-[25px]'>
                            <span className=' text-[#FFFFFF] text-[20px]'>Have a great idea? We're here to bring it to life with innovative & digital solutions</span>
                        </div>
                    </div>

                    <div className='mt-[20px]'>
                        <div className='flex gap-[85px]'>
                            <span className='text-[24px] text-[#FFFFFF]'>About Us</span>
                            <span className='text-[24px] text-[#FFFFFF]'>Services</span>
                            <span className='text-[24px] text-[#FFFFFF]'>Hire Resources</span>
                            <span className='text-[24px] text-[#FFFFFF]'>Industries</span>
                            <span className='text-[24px] text-[#FFFFFF]'>Contact Us</span>
                        </div>

                        <hr className='mt-[26px] text-[#FFFFFF4D]' />

                        <div>
                            <div className='flex gap-[88px]'>
                                <div className='mt-[26px] '>
                                    <span className='text-[24px] text-[#FFFFFF] font-medium '>Social Media</span>
                                    <div className='flex gap-[30px] mt-[15px]'>
                                        <img src='/footer/linkedin.svg' />
                                        <img src='/footer/facebook.svg' />
                                        <img src='/footer/x.svg' />
                                        <img src='/footer/insta.svg' />
                                    </div>
                                </div>
                                <div className='mt-[26px] '>
                                    <span className='text-[24px] text-[#FFFFFF] font-medium '>Subscribe To Our Newsletter</span>
                                    <div className='flex gap-[10px] mt-[15px]'>
                                        <input
                                            type='text'
                                            placeholder='Enter your email'
                                            className='border border-[#FFFFFF4D] rounded-full w-[454px] pl-[20px] placeholder-[#FFFFFFCC] text-white' />
                                        <button className='bg-[#FFFFFF] rounded-full h-[52px] px-6 text-[20px] text-[#5D59EA] font-medium'>
                                            Submit
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className='text-[#FFFFFF4D] mt-[85px]' />
                <div className='mt-[30px] flex justify-center'>
                    <span className='text-center text-[20px] text-[#FFFFFF] '>Copyright © 2025 | Designed By Kretoss Technology.</span>
                </div>

            </div>

        </div>
    )
}
