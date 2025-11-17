import React, { useState } from 'react';
import { MoveRight } from 'lucide-react';
import { useRouter } from 'next/router';

export default function GlobalExp() {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setTimeout(() => {
            setIsOpen(false);
            router.push('/thankyou');
        }, 2000);
    };
    return (
        <div className="container section container_content mx-auto w-full px-4 sm:px-6 md:px-10 lg:px-16 py-12 md:py-20">

            <div
                className="flex flex-col lg:flex-row items-center gap-10 lg:gap-12 
                           p-5 sm:p-8 lg:p-10 2xl:p-[30px] bg-gradient-to-b from-[#EEF0FF80] to-[#CFE6FF] rounded-[24px]"
            >
                <div className="flex-1 text-center lg:text-left max-w-full lg:max-w-[640px]">
                    <img
                        src="/assets/images/mobile-app/logo.svg"
                        alt="Logo"

                        className="mx-auto lg:mx-0 w-[120px] sm:w-[140px] lg:w-[160px]"
                    />

                    <h1
                        className="mt-6 sm:mt-8 text-[26px] sm:text-[34px] md:text-[40px] 2xl:text-[48px] 
                                   font-semibold text-[#02021E] leading-tight"
                    >
                        Tap Into{" "}
                        <span
                            className="bg-gradient-to-r from-[#5D59EA] to-[#B4B2FF] 
                                       font-bold text-white rounded-md px-2 sm:px-3 py-1 sm:py-1.5
                                       whitespace-nowrap"
                        >
                            Global Expertise
                        </span>
                    </h1>

                    <p
                        className="mt-4 sm:mt-6 text-[15px] sm:text-[16px] md:text-[18px] 2xl:text-[20px] 
                                   text-[#02021E] leading-relaxed max-w-[95%] lg:max-w-[600px] mx-auto lg:mx-0"
                    >
                        Our team of experts brings deep domain knowledge and innovative thinking to every project. Their dynamic, out-of-the-box approach sets us apart in the market.
                    </p>

                    <button
                        onClick={() => setIsOpen(true)}
                        className="mt-6 sm:mt-8 md:mt-10 
                                   w-full sm:w-[240px] md:w-[260px] h-[44px] md:h-[50px] 2xl:h-[61px] 
                                   flex items-center justify-center gap-2 
                                   rounded-full bg-[#5D59EA] text-white 
                                   text-[15px] sm:text-[16px] md:text-[18px] 2xl:text-[20px] 
                                   font-medium hover:opacity-90 transition-all duration-300 
                                   shadow-md sm:shadow-lg mx-auto lg:mx-0"
                        style={{ boxShadow: '0px 0px 22px 0px #5D59EA99' }}
                    >
                        Hire App Developer
                        <MoveRight className="w-4 h-4 md:w-5 md:h-5" />
                    </button>
                </div>

                {isOpen && (
                    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[60]">
                        <div className="bg-white w-[650px] max-w-[90%] rounded-[12px] p-8 shadow-lg relative overflow-auto max-h-[90vh]">
                            <button
                                onClick={() => setIsOpen(false)}
                                className="absolute top-3 right-4 text-gray-500 text-xl cursor-pointer"
                            >
                                ✕
                            </button>


                            <h2 className="text-[24px] font-semibold text-[#02021E] mb-6 text-center">
                                Hire Mobile App Developer
                            </h2>

                            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                                <div className="flex flex-col gap-[20px]">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-[20px]">
                                        <div>
                                            <label className="text-start block text-[#000000] text-[16px] font-medium mb-[6px]">
                                                Name
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="John Deo"
                                                className="w-full h-[48px] px-[12px] rounded-[6px] border border-[#E0E0E0] bg-[#F5F8FC] outline-none"
                                            />
                                        </div>
                                        <div>
                                            <label className="text-start block text-[#000000] text-[16px] font-medium mb-[6px]">
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
                                            <label className="text-start block text-[#000000] text-[16px] font-medium mb-[6px]">
                                                Phone Number
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="123 432 3432"
                                                className="w-full h-[48px] px-[12px] rounded-[6px] border border-[#E0E0E0] bg-[#F5F8FC] outline-none"
                                            />
                                        </div>
                                        <div>
                                            <label className="text-start block text-[#000000] text-[16px] font-medium mb-[6px]">
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
                                        <label className="text-start block text-[#000000] text-[16px] font-medium mb-[6px]">
                                            Message
                                        </label>
                                        <textarea
                                            placeholder="Tell us about your requirements..."
                                            className="w-full h-[120px] px-[12px] py-[10px] rounded-[6px] border border-[#E0E0E0] bg-[#F5F8FC] resize-none outline-none"
                                        ></textarea>
                                    </div>
                                </div>
                                <button
                                    type="submit"
                                    className="hidden ml-[10px] 2xl:ml-[15px] sm:w-auto sm:mt-0 xl:flex gap-2 items-center justify-center bg-[#5D59EA] text-white px-6 sm:px-8 py-3 sm:py-3.5 rounded-full font-semibold text-[15px] sm:text-[16px] hover:opacity-90 transition"
                                    style={{ boxShadow: "0px 0px 22px 0px #5D59EA99" }}
                                >
                                    Hire App Developer
                                    <MoveRight className="w-4 h-4 sm:w-5 sm:h-5" />
                                </button>

                                <button
                                    type="submit"
                                    className="flex ml-[8px] sm:ml-[15px] sm:w-auto sm:mt-0 xl:hidden gap-2 items-center justify-center bg-[#5D59EA] text-white px-6 sm:px-8 py-3 sm:py-3.5 rounded-full font-semibold text-[15px] sm:text-[16px] hover:opacity-90 transition"
                                    style={{ boxShadow: "0px 0px 22px 0px #5D59EA99" }}
                                >
                                    Hire App Developer
                                    <MoveRight className="w-4 h-4 sm:w-5 sm:h-5" />
                                </button>
                            </form>
                        </div>
                    </div>
                )}

                <div className="flex-1 flex justify-center lg:justify-end w-full">
                    <img
                        src="/assets/images/mobile-app/GlobalExp.svg"
                        alt="Global Expertise"

                        className="w-[90%] sm:w-[80%] md:w-[70%] lg:w-full max-w-[600px] 
                                   h-auto object-contain"
                    />
                </div>
            </div>
        </div>
    );
}
