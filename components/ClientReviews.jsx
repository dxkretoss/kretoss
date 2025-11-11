import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ClientReviews() {
    const reviews = [
        {
            title: (
                <>
                    A stylish <b>Mobile app store</b> created for <b>Drawn Dating App</b>
                </>
            ),
            appUsed: "React Native / Flutter",
            description:
                "The design is clean, user-friendly, and perfectly aligns with our brand vision. Everything was executed with attention to detail, and the functionality works seamlessly. The team was professional, responsive, and delivered the project on time. We couldn't be happier with the outcome—thank you for bringing our ideas to life!",
            rating: 4,
            clientImage: "/reviews/client-1.jpg",
            clientName: "Ishit",
            clientPosition: "Founder of Ludic",
            reviewImage: "/reviews/review1.jpg",
        },
        {
            title: (
                <>
                    E-commerce App for <b>TrendyWear Fashion Store</b>
                </>
            ),
            appUsed: "React Native / Flutter",
            description:
                "Our fashion app came out better than we could have imagined. The performance is smooth, the UI stunning, and the checkout flow flawless. The Kretoss team went above and beyond — we got constant updates and quick responses. Highly recommended!",
            rating: 5,
            clientImage: "/reviews/client-2.jpg",
            clientName: "Samantha",
            clientPosition: "CEO of TrendyWear",
            reviewImage: "/reviews/review2.jpg",
        },
        {
            title: (
                <>
                    Next-Gen Fitness Tracker for <b>FitLife</b>
                </>
            ),
            appUsed: "React Native / Flutter",
            description:
                "We wanted an intuitive fitness app and Kretoss nailed it. From design to deployment, everything was handled with precision. The final product exceeded expectations — our users love it!",
            rating: 4,
            clientImage: "/reviews/client-3.jpg",
            clientName: "Rahul Mehta",
            clientPosition: "Founder of FitLife",
            reviewImage: "/reviews/review3.png",
        },
    ];

    const [current, setCurrent] = useState(0);
    const [direction, setDirection] = useState(0); // for slide direction

    const handleNext = () => {
        setDirection(1);
        setCurrent((prev) => (prev + 1) % reviews.length);
    };

    const handlePrev = () => {
        setDirection(-1);
        setCurrent((prev) => (prev - 1 + reviews.length) % reviews.length);
    };

    const review = reviews[current];

    const variants = {
        enter: (direction) => ({
            opacity: 0,
            x: direction > 0 ? 80 : -80,
        }),
        center: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.6, ease: "easeInOut" },
        },
        exit: (direction) => ({
            opacity: 0,
            x: direction < 0 ? 80 : -80,
            transition: { duration: 0.5, ease: "easeInOut" },
        }),
    };

    return (
        <div className="container section max-auto container_content">
            <h1
                className="max-w-[1100px] mx-auto text-[26px] lg:text-[34px] xl:text-[42px] 2xl:text-[48px] font-semibold text-[#02021E] text-center relative"
                style={{ fontFamily: "'Funnel Display', sans-serif" }}
            >
                A Showcase of Our{" "}
                <span className="relative inline-block text-[#5D59EA]">
                    Global Client
                    <img
                        src="/underline.svg"
                        alt=""
                        className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-[12px]"
                    />
                </span>{" "}
                Solutions
            </h1>

            {/* Review Card */}
            <div className="relative mt-[60px] flex justify-center">
                <div
                    className="min-h-[654px] rounded-[16px] transition-all duration-500 ease-in-out overflow-hidden"
                    style={{
                        background:
                            "linear-gradient(96.57deg, #FCE6FF 0.24%, rgba(255, 255, 255, 0.8) 99.76%)",
                    }}
                >
                    <AnimatePresence custom={direction} mode="wait">
                        <motion.div
                            key={current}
                            custom={direction}
                            variants={variants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            className="flex flex-col md:flex-row"
                        >
                            {/* Left Text Section */}
                            <div className="w-full md:w-[55%] px-[20px] py-[30px] md:px-[70px] md:py-[90px] flex flex-col justify-center">
                                <h1 className="w-[65%] mx-auto md:w-full text-[26px] md:text-[36px] text-[#02021E] leading-[46px]">
                                    {review.title}
                                </h1>

                                <div className="flex items-center mt-[9px]">
                                    <p className="text-[16px] font-bold">
                                        Apps we used:{" "}
                                        <span className="text-[20px] text-[#486FEB]">
                                            {review.appUsed}
                                        </span>
                                    </p>
                                </div>

                                <div className="mt-[22px]">
                                    <p className="text-[14px] md:text-[16px] text-[#000000CC] max-w-[480px] leading-[28px]">
                                        “{review.description}”
                                    </p>
                                </div>

                                {/* Stars */}
                                <div className="flex justify-center md:justify-start mt-[20px] gap-2">
                                    {[...Array(5)].map((_, i) => (
                                        <img
                                            key={i}
                                            src={
                                                i < review.rating
                                                    ? "/reviews/fillstar.svg"
                                                    : "/reviews/unfillstar.svg"
                                            }
                                            alt="star"
                                            className="w-[24px] h-[24px]"
                                        />
                                    ))}
                                </div>

                                {/* Client Info */}
                                <div className="mt-[20px] flex justify-center md:justify-start gap-[10px] items-center">
                                    <img
                                        src={review.clientImage}
                                        className="w-[45px] border-2 border-[#FFFFFF] rounded-full"
                                        alt={review.clientName}
                                    />
                                    <div className="flex flex-col">
                                        <p className="text-[16px] font-semibold text-[#000000]">
                                            {review.clientName}
                                        </p>
                                        <span className="text-[14px] text-[#000000CC]">
                                            {review.clientPosition}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Right Image */}
                            <div className="max-w-[872px] h-[354px] md:h-[654px]">
                                <img
                                    src={review.reviewImage}
                                    className="rounded-[16px] h-full w-full object-cover"
                                    alt={review.clientName}
                                />
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Left Arrow */}
                {/* Left Arrow */}
                <button
                    onClick={handlePrev}
                    className="absolute top-10 left-4 md:top-1/2 md:-translate-y-1/2 md:-left-10 bg-[#1A1A1A] border-4 border-[#FFFFFF] rounded-full p-4 md:p-5 cursor-pointer hover:scale-105 transition-transform"
                    style={{
                        boxShadow: "0px 6px 20px -6px #1E2E4826",
                    }}
                >
                    <img src="/reviews/left.svg" alt="Previous" />
                </button>

                {/* Right Arrow */}
                <button
                    onClick={handleNext}
                    className="absolute top-10 right-4 md:top-1/2 md:-translate-y-1/2 md:-right-10 bg-[#1A1A1A] border-4 border-[#FFFFFF] rounded-full p-4 md:p-5 cursor-pointer hover:scale-105 transition-transform"
                    style={{
                        boxShadow: "0px 6px 20px -6px #1E2E4826",
                    }}
                >
                    <img src="/reviews/right.svg" alt="Next" />
                </button>


            </div>
        </div>
    );
}
