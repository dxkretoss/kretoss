import { useState } from 'react';
import { useRouter } from 'next/router';
export default function Contact() {
    const router = useRouter();
    // const [showThankYou, setShowThankYou] = useState(false);

    // const handleSend = () => setShowThankYou(true);
    // const closePopup = () => setShowThankYou(false);

    return (
        <div
            className="section w-full py-[80px] md:py-[100px] bg-gradient-to-r from-[#F8F8F8] to-[#E6F0FF]"
        >
            <div className="container container_content mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-[40px] lg:gap-[56px] items-start justify-center">

                    <div
                        className="w-full lg:w-1/2 bg-white rounded-[12px] p-[20px] sm:p-[30px] md:p-[40px] border border-[#E0E0E0] shadow-md"
                    >
                        <h2 className="text-[22px] sm:text-[24px] font-bold text-[#5D59EA] mb-[24px]">
                            Let’s Talk
                        </h2>

                        <div className="flex flex-col gap-[20px]">
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

                            <div>
                                <label className="block text-[#000000] text-[16px] font-medium mb-[6px]">
                                    Message
                                </label>
                                <textarea
                                    placeholder="Tell us about your requirements..."
                                    className="w-full h-[120px] px-[12px] py-[10px] rounded-[6px] border border-[#E0E0E0] bg-[#F5F8FC] resize-none outline-none"
                                ></textarea>
                            </div>

                            <button
                                onClick={() => router.push('thankyou')}
                                className="w-[160px] sm:w-[180px] h-[48px] sm:h-[50px] rounded-[8px] bg-[#5D59EA] text-white font-semibold hover:bg-[#4a46d4] transition-all shadow-[0_4px_10px_rgba(93,89,234,0.4)] cursor-pointer"
                            >
                                Send Message
                            </button>
                        </div>
                    </div>

                    <div className="w-full lg:w-1/2 flex flex-col">
                        <h2 className="text-[22px] sm:text-[24px] font-bold text-[#5D59EA] mb-[20px]">
                            Get in Touch
                        </h2>
                        <p className="text-[#000000B2] text-[16px] sm:text-[18px] leading-relaxed mb-[20px]">
                            Our skilled mobile app developers are ready to help you streamline your processes and elevate your business performance.
                        </p>

                        <div className="flex flex-col gap-[25px]">
                            <div className="flex gap-[16px] items-start">
                                <img src="/assets/images/mobile-app/email.svg" loading="lazy" alt="email" />
                                <div>
                                    <p className="text-[18px] font-semibold text-[#000]">Email Us</p>
                                    <span className="text-[#323233] text-[16px]">info@kretoss.com</span>
                                </div>
                            </div>

                            <div className="flex gap-[16px] items-start">
                                <img src="/assets/images/mobile-app/wp.svg" loading="lazy" alt="whatsapp" />
                                <div>
                                    <p className="text-[18px] font-semibold text-[#000]">WhatsApp Us</p>
                                    <span className="text-[#323233] text-[16px]">(+91) 63534-23473</span>
                                </div>
                            </div>

                            <div className="flex gap-[16px] items-start">
                                <img src="/assets/images/mobile-app/loc.svg" loading="lazy" alt="location" />
                                <div className="flex flex-col gap-[10px] w-full">
                                    <div className="flex flex-col">
                                        <p className="text-[18px] font-semibold text-[#000]">Visit Us</p>
                                    </div>

                                    <div className='flex flex-col  gap-[15px]'>
                                        <div className="flex flex-col">
                                            <div className="flex items-center gap-2 mt-1">
                                                <img src="/assets/images/mobile-app/india.svg" loading="lazy" alt="india" />
                                                <span className="text-[#323233] text-[16px]">India</span>
                                            </div>
                                            <span className="text-[#323233] text-[15px] mt-3 max-w-[400px]">
                                                B-1007, Shilp Corporate Park, Near Rajpath Club, Rajpath-Rangoli Road, Ahmedabad. 380054
                                            </span>
                                        </div>

                                        <div className="flex flex-col mt-[15px]">
                                            <div className="flex items-center gap-2 mt-[25px] sm:mt-0">
                                                <img src="/assets/images/mobile-app/usa.svg" loading="lazy" alt="usa" />
                                                <span className="text-[#323233] text-[16px]">United States</span>
                                            </div>
                                            <span className="text-[#323233] text-[15px] mt-3 max-w-[400px]">
                                                9245 East Wood Drive, SCOTTSDALE, AZ 85260
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <div className="bg-white border border-[#E0E0E0] mt-[24px] rounded-[12px] px-[15px] py-[15px] shadow-sm">
                            <h1 className="text-[16px] text-[#000000] font-bold">Kretoss Technology</h1>
                            <span className="text-[#323233] text-[15px] sm:text-[16px] font-medium leading-relaxed block mt-1">
                                Need a mobile app for your business? Hire our expert mobile app developers to build tailored solutions that perfectly fit your goals and requirements.
                            </span>
                        </div> */}
                    </div>
                </div>
            </div>

        </div>
    );
}
