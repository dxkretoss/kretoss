import React from 'react'

export default function Header() {
    return (
        <div className='bg-[#FFFFFF] h-[100px] flex items-center relative'>
            <div className='container'>
                <div className='flex justify-between w-full items-center'>

                    {/* Left section */}
                    <div>
                        <img src='/logo.svg' alt='Kretoss' />
                    </div>

                    {/* Center text (absolutely centered) */}
                    <div className='absolute left-1/2 -translate-x-1/2 text-center'>
                        <nav>
                            <ul className='flex items-center gap-8 text-[#222222] text-[16px] font-medium'>
                                <li className='hover:text-[#007bff] cursor-pointer transition'>About Us</li>
                                <li className='hover:text-[#007bff] cursor-pointer transition'>Services</li>
                                <li className='hover:text-[#007bff] cursor-pointer transition'>Hire Resources</li>
                                <li className='hover:text-[#007bff] cursor-pointer transition'>Industries</li>
                                <li className='hover:text-[#007bff] cursor-pointer transition'>Contact Us</li>
                            </ul>
                        </nav>
                    </div>

                    {/* Right section */}
                    <div className='flex items-center gap-3'>
                        <button
                            className='bg-[#5D59EA] rounded-full text-white px-5 py-2 font-medium'
                            style={{ boxShadow: '0px 0px 22px 0px #5D59EA99' }}
                        >
                            Get A Free Quote
                        </button>
                    </div>


                </div>
            </div>
        </div>
    )
}
