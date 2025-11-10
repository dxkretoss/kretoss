import React, { useState } from 'react'

export default function Contact() {
    const [showThankYou, setShowThankYou] = useState(false);

    const handleSend = () => {
        setShowThankYou(true);
    };

    const closePopup = () => {
        setShowThankYou(false);
    };
    return (
        <div className="section h-[776px]"
            style={{
                background: "linear-gradient(96.57deg, #F8F8F8 0.24%, #E6F0FF 99.76%)",
            }}>
            <div className='container'>
                <div className='flex gap-[56px] w-[1620px] mx-auto pt-[121px]'>
                    <div className='w-[782px] h-[535px] bg-[#FFFFFF] p-[24px] rounded-[8px] border border-[#E0E0E0]'
                        style={{ boxShadow: "0px 0px 10px 0px #0000000D" }}>
                        <h2 className="text-[24px] font-bold text-[#5D59EA] mb-[30px]">Let’s Talk</h2>


                        <div className="flex flex-col gap-[20px]">
                            {/* Name & Email */}
                            <div className="grid grid-cols-2 gap-[20px]">
                                <div>
                                    <label className="block text-[#000000] text-[16px] font-medium mb-[6px]">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="John Deo"
                                        className="w-full h-[48px] px-[12px] rounded-[6px] border border-[#E0E0E0] bg-[#F5F8FC] outline-none"
                                    />
                                </div>
                                <div>
                                    <label className="block text-[#000000] text-[16px] font-medium mb-[6px]">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="john.doe@gmail.com"
                                        className="w-full h-[48px] px-[12px] rounded-[6px] border border-[#E0E0E0] bg-[#F5F8FC] outline-none"
                                    />
                                </div>
                            </div>

                            {/* Phone Number & Budget */}
                            <div className="grid grid-cols-2 gap-[20px]">
                                <div>
                                    <label className="block text-[#000000] text-[16px] font-medium mb-[6px]">
                                        Phone Number
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="123 432 3432"
                                        className="w-full h-[48px] px-[12px] rounded-[6px] border border-[#E0E0E0] bg-[#F5F8FC] outline-none"
                                    />
                                </div>
                                <div>
                                    <label className="block text-[#000000] text-[16px] font-medium mb-[6px]">
                                        Budget
                                    </label>
                                    <select
                                        className="w-full h-[48px] px-[12px] rounded-[6px] border border-[#E0E0E0] bg-[#F5F8FC] text-[#666] outline-none"
                                    >
                                        <option>Select project budget</option>
                                        <option>$1,000 - $5,000</option>
                                        <option>$5,000 - $10,000</option>
                                        <option>$10,000 - $50,000</option>
                                        <option>$50,000+</option>
                                    </select>
                                </div>
                            </div>

                            {/* Message */}
                            <div>
                                <label className="block text-[#000000] text-[16px] font-medium mb-[6px]">
                                    Message
                                </label>
                                <textarea
                                    placeholder="Tell us about your requirements..."
                                    className="w-full h-[120px] px-[12px] py-[10px] rounded-[6px] border border-[#E0E0E0] bg-[#F5F8FC] resize-none outline-none"
                                ></textarea>
                            </div>

                            {/* Button */}
                            <button
                                onClick={() => { handleSend(); }}
                                className="w-[180px] h-[50px] rounded-[8px] bg-[#5D59EA] text-[#FFFFFF] font-semibold hover:bg-[#4a46d4] transition-all shadow-[0_4px_10px_rgba(93,89,234,0.4)] cursor-pointer"
                            >
                                Send Message
                            </button>
                        </div>
                    </div>

                    {showThankYou && (
                        <div className="fixed inset-0 bg-black/50 bg-opacity-50 flex items-center justify-center z-50">
                            <div className="bg-white w-[450px] rounded-[12px] p-8 shadow-lg relative">
                                {/* Close Button */}
                                <button
                                    onClick={() => { closePopup(); }}
                                    className="absolute top-3 right-4 text-gray-500 text-xl cursor-pointer"
                                >
                                    ✕
                                </button>
                                <div className="text-center py-10">
                                    <img
                                        src="/logo.svg"
                                        alt="Thank You"
                                        className="mx-auto w-[80px] mb-4"
                                    />
                                    <h3 className="text-[22px] font-semibold text-[#02021E]">
                                        Thank You!
                                    </h3>
                                    <p className="text-gray-600 mt-2">
                                        We’ll get back to you shortly.
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}

                    <div className='w-[782px] h-[535px]'>
                        <h2 className="text-[24px] font-bold text-[#5D59EA] mb-[30px]">Get in Touch</h2>
                        <p className='text-[#000000B2] text-[18px] w-[723px]'>Our skilled mobile app developers are ready to help you streamline your processes and elevate your business performance.</p>

                        <div className='mt-[20px]'>
                            <div className='flex gap-[16px] items-start'>
                                <img src='/email.svg' />
                                <div className='flex flex-col'>
                                    <p className='text-[18px] text0[#000000] font-semibold'>Email Us</p>
                                    <span className='text-[#323233] text-[16px]'>info@kretoss.com</span>
                                </div>
                            </div>

                            <div className='flex gap-[16px] mt-[35px] items-start'>
                                <img src='/wp.svg' />
                                <div className='flex flex-col'>
                                    <p className='text-[18px] text0[#000000] font-semibold'>WhatsApp Us</p>
                                    <span className='text-[#323233] text-[16px]'>(+91) 63534-23473</span>
                                </div>
                            </div>

                            <div className='flex gap-[16px] mt-[35px] items-start'>
                                <img src='/loc.svg' />
                                <div className='flex gap-[80px]'>
                                    <div className='flex flex-col'>
                                        <p className='text-[18px] text0[#000000] font-semibold'>Visit Us</p>
                                        <div className='flex gap-2'>
                                            <img src='/india.svg' />
                                            <span className='text-[#323233] text-[16px]'>India</span>
                                        </div>
                                        <span className='text-[#323233] text-[16px] w-[376px]'>B-1007, Shilp Corporate Park, Near Rajpath Club, Rajpath-Rangoli Road, Ahmedabad. 380054</span>
                                    </div>

                                    <div className='flex flex-col'>
                                        <div className='flex gap-2 mt-[25px]'>
                                            <img src='/usa.svg' />
                                            <span className='text-[#323233] text-[16px]'>United States</span>
                                        </div>
                                        <span className='text-[#323233] text-[16px] w-[239px]'>9245 East Wood Drive, SCOTTSDALE, AZ 85260</span>
                                    </div>
                                </div>
                            </div>

                            <div className='bg-[#FFFFFF] border border-[#E0E0E0] mt-[22px] h-[107px] rounded-[12px] px-[25px] py-[15px]'>
                                <h1 className='text-[16px] text-[#000000] font-bold'>Kretoss Technology</h1>
                                <span className='text-[#323233] text-[16px] font-medium w-[721px]'>Need a mobile app for your business? Hire our expert mobile app developers to build tailored solutions that perfectly fit your goals and requirements.</span>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
