import React, { useState } from 'react';

export default function Contact() {
    const [showThankYou, setShowThankYou] = useState(false);

    const handleSend = () => setShowThankYou(true);
    const closePopup = () => setShowThankYou(false);

    return (
        <div
            className="section w-full py-[80px] md:py-[100px] bg-gradient-to-r from-[#F8F8F8] to-[#E6F0FF]"
        >
            <div className="container mx-auto px-4">
                {/* Main Layout */}
                <div className="flex flex-col lg:flex-row gap-[40px] lg:gap-[56px] items-start justify-center">

                    {/* Left Side - Form */}
                    <div
                        className="w-full lg:w-1/2 bg-white rounded-[12px] p-[20px] sm:p-[30px] md:p-[40px] border border-[#E0E0E0] shadow-md"
                    >
                        <h2 className="text-[22px] sm:text-[24px] font-bold text-[#5D59EA] mb-[24px]">
                            Let’s Talk
                        </h2>

                        <div className="flex flex-col gap-[20px]">
                            {/* Name & Email */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[20px]">
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
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[20px]">
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
                                onClick={handleSend}
                                className="w-[160px] sm:w-[180px] h-[48px] sm:h-[50px] rounded-[8px] bg-[#5D59EA] text-white font-semibold hover:bg-[#4a46d4] transition-all shadow-[0_4px_10px_rgba(93,89,234,0.4)] cursor-pointer"
                            >
                                Send Message
                            </button>
                        </div>
                    </div>

                    {/* Right Side - Contact Info */}
                    <div className="w-full lg:w-1/2 flex flex-col">
                        <h2 className="text-[22px] sm:text-[24px] font-bold text-[#5D59EA] mb-[20px]">
                            Get in Touch
                        </h2>
                        <p className="text-[#000000B2] text-[16px] sm:text-[18px] leading-relaxed mb-[20px]">
                            Our skilled mobile app developers are ready to help you streamline your processes and elevate your business performance.
                        </p>

                        {/* Contact Items */}
                        <div className="flex flex-col gap-[25px]">
                            {/* Email */}
                            <div className="flex gap-[16px] items-start">
                                <img src="/email.svg" alt="email" />
                                <div>
                                    <p className="text-[18px] font-semibold text-[#000]">Email Us</p>
                                    <span className="text-[#323233] text-[16px]">info@kretoss.com</span>
                                </div>
                            </div>

                            {/* WhatsApp */}
                            <div className="flex gap-[16px] items-start">
                                <img src="/wp.svg" alt="whatsapp" />
                                <div>
                                    <p className="text-[18px] font-semibold text-[#000]">WhatsApp Us</p>
                                    <span className="text-[#323233] text-[16px]">(+91) 63534-23473</span>
                                </div>
                            </div>

                            {/* Visit Us */}
                            <div className="flex gap-[16px] items-start">
                                <img src="/loc.svg" alt="location" />
                                <div className="flex flex-col sm:flex-row gap-[20px] w-full items-end">
                                    <div className="flex flex-col">
                                        <p className="text-[18px] font-semibold text-[#000]">Visit Us</p>
                                        <div className="flex items-center gap-2 mt-1">
                                            <img src="/india.svg" alt="india" />
                                            <span className="text-[#323233] text-[16px]">India</span>
                                        </div>
                                        <span className="text-[#323233] text-[15px] mt-1 max-w-[400px]">
                                            B-1007, Shilp Corporate Park, Near Rajpath Club, Rajpath-Rangoli Road, Ahmedabad. 380054
                                        </span>
                                    </div>

                                    <div className="flex flex-col">
                                        <div className="flex items-center gap-2 mt-[25px] sm:mt-0">
                                            <img src="/usa.svg" alt="usa" />
                                            <span className="text-[#323233] text-[16px]">United States</span>
                                        </div>
                                        <span className="text-[#323233] text-[15px] mt-1 max-w-[400px]">
                                            9245 East Wood Drive, SCOTTSDALE, AZ 85260
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Bottom Card */}
                        <div className="bg-white border border-[#E0E0E0] mt-[24px] rounded-[12px] px-[15px] py-[15px] shadow-sm">
                            <h1 className="text-[16px] text-[#000000] font-bold">Kretoss Technology</h1>
                            <span className="text-[#323233] text-[15px] sm:text-[16px] font-medium leading-relaxed block mt-1">
                                Need a mobile app for your business? Hire our expert mobile app developers to build tailored solutions that perfectly fit your goals and requirements.
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Popup */}
            {showThankYou && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                    <div className="bg-white w-[90%] sm:w-[450px] rounded-[12px] p-8 shadow-lg relative">
                        <button
                            onClick={closePopup}
                            className="absolute top-3 right-4 text-gray-500 text-xl cursor-pointer"
                        >
                            ✕
                        </button>
                        <div className="text-center py-6 sm:py-10">
                            <img
                                src="/logo.svg"
                                alt="Thank You"
                                className="mx-auto w-[60px] sm:w-[80px] mb-4"
                            />
                            <h3 className="text-[20px] sm:text-[22px] font-semibold text-[#02021E]">
                                Thank You!
                            </h3>
                            <p className="text-gray-600 mt-2 text-[15px] sm:text-[16px]">
                                We’ll get back to you shortly.
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
