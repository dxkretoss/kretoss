import React, { useState } from 'react'

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
    return (
        <div className="container section">

            <div className="w-[886px] mx-auto mt-[80px] mb-[100px] px-4">
                <h2 className="text-center text-[48px] font-semibold text-[#000000] mb-[40px]">
                    FAQs
                </h2>

                <div className="flex flex-col gap-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-[#FFFFFFCC] border border-[#E5E9F2E5] rounded-[12px] shadow-sm"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full text-left px-6 py-5 flex justify-between items-center text-[18px] font-medium text-[#02021E]"
                            >
                                <span className='text-[#02021E] text-[16px] font-semibold'>{faq.question}</span>
                                <span
                                    className={`transition-transform duration-300`}
                                >
                                    {activeIndex === index ? <img src='/downaero.svg' /> : <img src='/rightaero.svg' />}
                                </span>
                            </button>

                            {activeIndex === index && (
                                <div className="px-6 pb-5 text-[#323233] text-[16px] leading-relaxed">
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            <div className=' mt-111px] w-[1620px] h-[300px] p-[59px] border border-[#5D59EACC] rounded-[24px]'
                style={{ background: "linear-gradient(180deg, rgba(238, 239, 255, 0.5) 0%, #CFE6FF 100%)" }}>
                <div className='w-[1007px] mx-auto'>
                    <h1 className='text-[48px] text-[#000000] font-semibold'>Mobile App Development At Your{" "}
                        <span className='text-[#5D59EA]'>Fingertips</span></h1>
                </div>

                <div className='flex justify-center items-center mt-[50px]'>
                    <button
                        className='bg-[#5D59EA] text-[20px] rounded-full text-white px-5 py-2  h-[61px] w-[427px]'
                        style={{ boxShadow: '0px 0px 18px 0px #5D59EA99' }}
                    >
                        Get in touch with us today
                    </button>
                </div>

            </div>
        </div>
    )
}
