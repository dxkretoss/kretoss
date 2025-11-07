import React from 'react'

export default function TopHeader() {
    return (
        <div className='bg-[#E6F0FF] h-[60px] flex items-center relative '>
            <div className='container'>
                <div className='flex justify-between w-full px-4 items-center'>

                    {/* Left section */}
                    <div className='flex gap-4'>
                        <div className='flex items-center gap-2'>
                            <img src='/india.svg' alt='India' />
                            <span className='text-[#222222] text-[13px]'>+91 123 456 7890</span>
                        </div>
                        <div className='h-6 w-[1px] bg-[#4C586F4D]'></div>
                        <div className='flex items-center gap-2'>
                            <img src='/usa.svg' alt='USA' />
                            <span className='text-[#222222] text-[13px]'>+1 (309)123 4536</span>
                        </div>
                    </div>

                    {/* Center text (absolutely centered) */}
                    <div className='absolute left-1/2 -translate-x-1/2 text-center'>
                        <span className='text-[#222222] text-[18px] whitespace-nowrap'>
                            “user friendly apps tailored to your project”
                        </span>
                    </div>

                    {/* Right section */}
                    <div className='flex items-center gap-3'>
                        <img src='/call.svg' alt='Call' />
                        <div className='h-6 w-[1px] bg-[#4C586F4D]'></div>
                        <img src='/mail.svg' alt='Mail' />
                    </div>

                </div>
            </div>
        </div>
    )
}
