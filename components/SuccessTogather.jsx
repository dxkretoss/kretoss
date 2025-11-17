import React, { useState } from "react";
import { useRouter } from 'next/router';

export default function SuccessTogather() {
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
        <div className="container container_content section mx-auto px-4 py-16">
            <div
                className="relative rounded-[24px] border border-[#5D59EACC] flex flex-col justify-center items-center text-center px-6 sm:px-8 md:px-12 lg:px-20 xl:px-28 py-10 sm:py-12 md:py-16"
                style={{
                    background:
                        "linear-gradient(92.88deg, rgba(60, 131, 246, 0.2) 0%, rgba(124, 59, 237, 0.2) 49.86%)",
                }}
            >
                <div
                    className="
                            absolute 
                            -top-8 
                            left-1/2 
                            -translate-x-1/2 

                            sm:left-8 sm:translate-x-0
                            md:left-10
                            lg:top-auto lg:-bottom-8
                            xl:-left-10 xl:-translate-x-0
                        "
                >

                    <div
                        className="relative w-[160px] lg:w-[180px] xl:w-[200px] 2xl:w-[218px] h-[65px] md:h-[80px] lg:h-[103px] bg-white rounded-[10px] flex flex-col items-center justify-center shadow-lg"
                        style={{ boxShadow: "13px 14px 40px 0px #27628326" }}
                    >
                        <img
                            src="/assets/images/mobile-app/misson.svg"

                            alt="Mission"
                            className="absolute -top-6 sm:-top-7 w-[40px] sm:w-[50px] md:w-[55px]"
                        />
                        <div className="absolute top-5 md:top-8 flex flex-col items-center">
                            <span className="text-[15px] xl:text-[18px] 2xl:text-[23px] font-bold text-[#020817] text-center">
                                Mission
                            </span>
                            <span className="text-[#4B4D4C] text-[12px] xl:text-[15px] 2xl:text-[15px]">
                                Innovate. Develop. Deliver.
                            </span>
                        </div>
                    </div>
                </div>

                <div className="max-w-[800px] lg:max-w-[710px] mx-auto">
                    <h1
                        className="text-[30px] sm:text-[36px] md:text-[42px] lg:text-[50px] font-semibold text-[#02021E] leading-tight"
                    >
                        Let’s Build{" "}
                        <span className="relative inline-block text-[#5D59EA]">
                            Success
                            <img
                                src="/assets/images/mobile-app/underline.svg"

                                alt=""
                                className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-[10px]"
                            />
                        </span>{" "}
                        Together.
                    </h1>

                    <p className="mt-4 sm:mt-5 text-[#02021E] text-[15px] sm:text-[16px] md:text-[18px] leading-relaxed">
                        Share your project details and begin your journey toward success.
                    </p>
                </div>

                <div className="flex justify-center items-center mt-8 sm:mt-10 md:mt-12">
                    <button
                        onClick={() => setIsOpen(true)}
                        className="bg-[#5D59EA] text-[16px] sm:text-[18px] md:text-[20px] rounded-full text-white px-6 sm:px-8 md:px-10 py-3 sm:py-3.5 md:py-4 w-[250px] sm:w-[300px] md:w-[380px] lg:w-[427px] shadow-lg hover:scale-[1.03] transition-all duration-300"
                        style={{ boxShadow: "0px 0px 18px 0px #5D59EA99" }}
                    >
                        Get in touch with us today
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
                                Get in touch with us today
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
                                    className="bg-[#5D59EA] text-[16px] sm:text-[18px] md:text-[20px] rounded-full text-white px-6 sm:px-8 md:px-10 py-3 sm:py-3.5 md:py-4 w-full shadow-lg hover:scale-[1.03] transition-all duration-300"
                                    style={{ boxShadow: "0px 0px 18px 0px #5D59EA99" }}
                                >
                                    Get in touch with us today
                                </button>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
