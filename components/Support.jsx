import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
export default function Support() {
    const Services = [
        { img: '/support/mobDev.svg', txt: 'Custom Mobile App Development', desc: 'We specialize in developing, updating, and managing secure, custom Android apps using Java, Kotlin, and Android SDK.' },
        { img: '/support/fullstack.svg', txt: 'Full-stack App Development', desc: 'Hire skilled app developers to build secure, scalable, and feature-rich applications that drive efficiency and profitability from concept to launch.' },
        { img: '/support/appSol.svg', txt: 'Enterprise App Solutions', desc: 'Hire app developers to build adaptable enterprise solutions powered by smart data analytics, enhancing customer experience and workflow efficiency.' },
        { img: '/support/appdecv.svg', txt: 'Cross platform app Development ', desc: 'We specialize in developing, updating, & managing secure, custom cross-platform apps using Flutter, React Native for seamless performance across devices..' },
        { img: '/support/thirdparty.svg', txt: 'Third Party Integration', desc: 'Hire expert developers to integrate third-party APIs for seamless connectivity and enhanced app functionality.' },

        { img: '/support/mobDev.svg', txt: 'Custom Mobile App Development', desc: 'We specialize in developing, updating, and managing secure, custom Android apps using Java, Kotlin, and Android SDK.' },
        { img: '/support/fullstack.svg', txt: 'Full-stack App Development', desc: 'Hire skilled app developers to build secure, scalable, and feature-rich applications that drive efficiency and profitability from concept to launch.' },
        { img: '/support/appSol.svg', txt: 'Enterprise App Solutions', desc: 'Hire app developers to build adaptable enterprise solutions powered by smart data analytics, enhancing customer experience and workflow efficiency.' },
        { img: '/support/appdecv.svg', txt: 'Cross platform app Development ', desc: 'We specialize in developing, updating, & managing secure, custom cross-platform apps using Flutter, React Native for seamless performance across devices..' },
        { img: '/support/thirdparty.svg', txt: 'Third Party Integration', desc: 'Hire expert developers to integrate third-party APIs for seamless connectivity and enhanced app functionality.' },


        { img: '/support/mobDev.svg', txt: 'Custom Mobile App Development', desc: 'We specialize in developing, updating, and managing secure, custom Android apps using Java, Kotlin, and Android SDK.' },
        { img: '/support/fullstack.svg', txt: 'Full-stack App Development', desc: 'Hire skilled app developers to build secure, scalable, and feature-rich applications that drive efficiency and profitability from concept to launch.' },
        { img: '/support/appSol.svg', txt: 'Enterprise App Solutions', desc: 'Hire app developers to build adaptable enterprise solutions powered by smart data analytics, enhancing customer experience and workflow efficiency.' },
        { img: '/support/appdecv.svg', txt: 'Cross platform app Development ', desc: 'We specialize in developing, updating, & managing secure, custom cross-platform apps using Flutter, React Native for seamless performance across devices..' },
        { img: '/support/thirdparty.svg', txt: 'Third Party Integration', desc: 'Hire expert developers to integrate third-party APIs for seamless connectivity and enhanced app functionality.' },


    ]

    const itemsPerPage = 5;
    const [currentPage, setCurrentPage] = useState(0);

    const totalPages = Math.ceil(Services.length / itemsPerPage);
    const startIndex = currentPage * itemsPerPage;
    const visibleServices = Services.slice(startIndex, startIndex + itemsPerPage);
    return (
        <div
            className="relative container section h-[690px] rounded-[24px]"
            style={{
                background: "linear-gradient(96.57deg, rgba(255, 255, 255, 0.8) 0.24%, #FCE6FF 99.76%)",
            }}
        >
            <div className='w-[930px] mx-auto pt-[113px]'>
                <h1 className='text-[48px] font-semibold text-[#02021E]'
                    style={{ fontFamily: "'Funnel Display', sans-serif" }}>
                    Hire Mobile App Programmers to Deliver {" "}
                    <span className="bg-gradient-to-r from-[#5D59EA] to-[#B4B2FF] font-bold text-white rounded-md px-2 py-3">
                        Top Quality App Development
                    </span>{" "}
                    Services
                </h1>
            </div>

            {/* <div className='mt-[48px] flex gap-[16px]'>
                {Services.map((item, index) => (
                    <div key={index} className='w-[299px] h-[227px] border border-[#22222233] rounded-[12px] bg-[#FFFFFF] p-[20px]'>
                        <div className='flex gap-[12px]'>
                            <img src={item.img} className='bg-[#E1E0FF] p-2 rounded-full' />
                            <span className='text-[18px] text-[#02021E] font-semibold'>{item.txt}</span>
                        </div>
                        <div className='mt-[15px]'>
                            <span className='text-[#4C586F] text-[16px] '>
                                {item.desc}
                            </span>
                        </div>
                    </div>
                ))}
            </div> */}

            <div className="mt-[48px]">
                {/* Animated Service Cards */}
                <div className="flex flex-wrap justify-center gap-[16px] relative overflow-hidden">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentPage} // triggers animation on page change
                            initial={{ opacity: 0, y: 20, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -20, scale: 0.98 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            className="flex flex-wrap justify-center gap-[16px]"
                        >
                            {visibleServices.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                    className="w-[299px] h-[227px] border border-[#22222233] rounded-[12px] bg-[#FFFFFF] p-[20px]"
                                >
                                    <div className="flex gap-[12px]">
                                        <img src={item.img} className="bg-[#E1E0FF] p-2 rounded-full" />
                                        <span className="text-[18px] text-[#02021E] font-semibold">{item.txt}</span>
                                    </div>
                                    <div className="mt-[15px]">
                                        <span className="text-[#4C586F] text-[16px]">{item.desc}</span>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Pagination Dots */}
                {totalPages > 1 && (
                    <div className="flex justify-center mt-6 gap-3">
                        {Array.from({ length: totalPages }).map((_, pageIndex) => (
                            <button
                                key={pageIndex}
                                onClick={() => setCurrentPage(pageIndex)}
                                className={`w-3 h-3 rounded-full transition-all ${currentPage === pageIndex
                                    ? "bg-[#5D59EA] w-6"
                                    : "bg-[#D1D1D1] hover:bg-[#A1A1A1]"
                                    }`}
                            />
                        ))}
                    </div>
                )}
            </div>

            <div className="absolute -top-5 -left-5">

                <div className="relative">
                    <div
                        className="w-[182px] h-[80px] bg-[#FFFFFF] rounded-[10px] flex flex-col items-center justify-center gap-2"
                        style={{
                            boxShadow: "13px 14px 40px 0px #27628326",
                        }}
                    >
                        <img src="/Qsupport.svg" alt="Quick Support" className="absolute -top-5" />
                        <span className="text-[20px] font-semibold text-[#020817] text-center absolute top-10">
                            Quick Support
                        </span>
                    </div>
                </div>
            </div>

        </div>
    )
}
