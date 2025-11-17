import React, { useState } from 'react'
import { useRouter } from 'next/router';

export default function Faqs() {
    const faqs = [
        {
            question:
                "What Are the Benefits of Hiring App Developers from Kretoss Technology?",
            answer:
                "When you hire mobile app developers from Kretoss Technology, you gain access to a skilled team with deep expertise in app development. Our developers offer full-time commitment, seamless collaboration, flexible hiring options, and transparent communication throughout the entire development process.",
        },
        {
            question: "Can I hire mobile app developers to work remotely?",
            answer:
                "Yes, our mobile app developers can work remotely and seamlessly integrate with your team to ensure smooth collaboration and communication.",
        },
        {
            question: "What is the process for hiring mobile app developers for my project?",
            answer:
                "You can share your project requirements with us, and we’ll recommend suitable developers. After reviewing their skills and experience, you can hire them for your desired duration and engagement model.",
        },
        {
            question: "Do you specialize in both native and cross-platform app development?",
            answer:
                "Absolutely. We have expertise in both native (iOS, Android) and cross-platform frameworks like Flutter and React Native to suit your project’s needs.",
        },
        {
            question:
                "How do you handle maintenance and support after the app is deployed?",
            answer:
                "We offer ongoing maintenance and post-launch support, including bug fixes, feature updates, and performance optimization to keep your app running smoothly.",
        },
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

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
        <div className="container section mx-auto container_content px-4 py-16">
            <div className=" max-w-[900px] mx-auto mb-20">
                <h2 className="text-center text-[36px] sm:text-[42px] md:text-[48px] font-semibold text-[#000000] mb-10">
                    FAQs
                </h2>

                <div className="flex flex-col gap-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-white/80 border border-[#E5E9F2E5] rounded-[12px] shadow-sm"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full text-left px-4 sm:px-6 py-4 sm:py-5 flex justify-between items-center text-[16px] sm:text-[18px] font-medium text-[#02021E]"
                            >
                                <span className="text-[#02021E] text-[16px] sm:text-[18px] font-semibold">
                                    {faq.question}
                                </span>
                                <span className="transition-transform duration-300 ml-4 flex-shrink-0">
                                    {activeIndex === index ? (
                                        <img src="/assets/images/mobile-app/downaero.svg" alt="collapse" />
                                    ) : (
                                        <img src="/assets/images/mobile-app/rightaero.svg" alt="expand" />
                                    )}
                                </span>
                            </button>

                            {activeIndex === index && (
                                <div className="px-4 sm:px-6 pb-5 text-[#323233] text-[15px] sm:text-[16px] leading-relaxed">
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            <div
                className="w-full max-w-[1620px] mx-auto border border-[#5D59EACC] rounded-[24px] p-6 sm:p-10 md:p-14 flex flex-col items-center justify-between gap-6 md:gap-10 text-center md:text-left"
                style={{
                    background: "linear-gradient(180deg, rgba(238, 239, 255, 0.5) 0%, #CFE6FF 100%)",
                }}
            >
                <div className="flex-1 flex-col max-w-[1000px]">
                    <h1 className="text-center text-[28px] sm:text-[36px] md:text-[44px] lg:text-[48px] text-[#000000] font-semibold leading-snug">
                        Mobile App Development At Your{" "}
                        <span className="text-[#5D59EA]">Fingertips</span>
                    </h1>
                </div>

                <div className="flex justify-center md:justify-end w-full md:w-auto">
                    <button
                        onClick={() => setIsOpen(true)}
                        className="bg-[#5D59EA] text-[16px] sm:text-[18px] md:text-[20px] rounded-full text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-[15px] h-auto w-full sm:w-[350px] md:w-[400px] lg:w-[427px] transition-transform hover:scale-105 duration-300"
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
    )
}
