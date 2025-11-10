import React from "react";

export default function SuccessTogather() {
    return (
        <div className="container container_content section mx-auto px-4 py-16">
            <div
                className="relative rounded-[24px] border border-[#5D59EACC] flex flex-col justify-center items-center text-center px-6 sm:px-8 md:px-12 lg:px-20 xl:px-28 py-10 sm:py-12 md:py-16"
                style={{
                    background:
                        "linear-gradient(92.88deg, rgba(60, 131, 246, 0.2) 0%, rgba(124, 59, 237, 0.2) 49.86%)",
                }}
            >
                {/* Mission Floating Card */}
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 sm:-translate-x-0 sm:left-8 md:left-10 xl:-left-10">
                    <div
                        className="relative w-[160px] sm:w-[180px] md:w-[200px] lg:w-[218px] h-[90px] sm:h-[95px] md:h-[100px] lg:h-[103px] bg-white rounded-[10px] flex flex-col items-center justify-center shadow-lg"
                        style={{ boxShadow: "13px 14px 40px 0px #27628326" }}
                    >
                        <img
                            src="/misson.svg"
                            alt="Mission"
                            className="absolute -top-6 sm:-top-7 w-[40px] sm:w-[50px] md:w-[55px]"
                        />
                        <div className="absolute top-8 flex flex-col items-center">
                            <span className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[23px] font-bold text-[#020817] text-center">
                                Mission
                            </span>
                            <span className="text-[#4B4D4C] text-[13px] sm:text-[14px] md:text-[15px]">
                                Innovate. Develop. Deliver.
                            </span>
                        </div>
                    </div>
                </div>

                {/* Main Text Section */}
                <div className="max-w-[800px] lg:max-w-[710px] mx-auto">
                    <h1
                        className="text-[30px] sm:text-[36px] md:text-[42px] lg:text-[50px] font-semibold text-[#02021E] leading-tight"
                        style={{ fontFamily: "'Funnel Display', sans-serif" }}
                    >
                        Let’s Build{" "}
                        <span className="relative inline-block text-[#5D59EA]">
                            Success
                            <img
                                src="/underline.svg"
                                alt=""
                                className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-[10px] w-[100px] sm:w-[130px] md:w-[160px]"
                            />
                        </span>{" "}
                        Together.
                    </h1>

                    <p className="mt-4 sm:mt-5 text-[#02021E] text-[15px] sm:text-[16px] md:text-[18px] leading-relaxed">
                        Share your project details to build your path toward success.
                    </p>
                </div>

                {/* Button */}
                <div className="flex justify-center items-center mt-8 sm:mt-10 md:mt-12">
                    <button
                        className="bg-[#5D59EA] text-[16px] sm:text-[18px] md:text-[20px] rounded-full text-white px-6 sm:px-8 md:px-10 py-3 sm:py-3.5 md:py-4 w-[240px] sm:w-[300px] md:w-[380px] lg:w-[427px] shadow-lg hover:scale-[1.03] transition-all duration-300"
                        style={{ boxShadow: "0px 0px 18px 0px #5D59EA99" }}
                    >
                        Get in touch with us today
                    </button>
                </div>
            </div>
        </div>
    );
}
