import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ClientReviews() {
    const reviews = [
        {
            title: (
                <>
                    Elegant <b>E-Commerce App</b> Crafted for <b>TrendyWear Fashion</b>
                </>
            ),
            appUsed: ["Flutter", "NodeJS", "GCP", "Socket.IO"],
            description:
                "Our fashion app came out better than we could have imagined. The performance is smooth, the UI stunning, and the checkout flow flawless. The Kretoss team went above and beyond — we got constant updates and quick responses. Highly recommended!",
            rating: 5,
            clientImage: "/assets/images/mobile-app/reviews/client-2.jpg",
            clientName: "Samantha Miller",
            clientPosition: "CEO of TrendyWear",
            reviewImage: "/assets/images/mobile-app/reviews/review2.jpg",
        },
        {
            title: (
                <>
                    Modern <b>App Store Experience</b> Designed for <b>Drawn Dating</b>
                </>
            ),
            appUsed: ["React Native"],
            description:
                "The design is clean, user-friendly, and perfectly aligns with our brand vision. Everything was executed with attention to detail, and the functionality works seamlessly. The team was professional, responsive, and delivered the project on time. We couldn't be happier with the outcome—thank you for bringing our ideas to life!",
            rating: 4,
            clientImage: "/assets/images/mobile-app/reviews/client-1.jpg",
            clientName: "Ethan Collins",
            clientPosition: "Founder of Drawn Dating",
            reviewImage: "/assets/images/mobile-app/reviews/review1.jpg",
        },
        {
            title: (
                <>
                    A <b>Luxury Shopify</b> Experience for <b>Tango Swim</b> Enthusiasts
                </>
            ),
            appUsed: ["Flutter", "NodeJS", "MongoDB", "Socket.IO"],
            description:
                "This is by far the best app experience I've had! The design is sleek, user- friendly, and truly captures the essence of my brand. The team was incredibly professional, attentive to details, and delivered beyond my expectations. I no longer need to look for another team—they are simply the best! Highly recommended for anyone looking to build a stunning App! 👏👏👏",
            rating: 4,
            clientImage: "/assets/images/mobile-app/reviews/client-4.jpg",
            clientName: "Rebekah Johnson",
            clientPosition: "CEO of Tango Swim",
            reviewImage: "/assets/images/mobile-app/reviews/review4.png",
        },
        {
            title: (
                <>
                    Innovative <b>Mobile Store</b> Built for <b>Roamaly Travel App</b>
                </>
            ),
            appUsed: ["Flutter", "Shopify"],
            description:
                "Kretoss technology did an EXCEPTIONAL job with my website—professional, bug-free, and detailed to perfection! Their quick responsiveness and going above and beyond made the entire process smooth and stress- free.Highly recommend working with them! 🙌",
            rating: 4,
            clientImage: "/assets/images/mobile-app/reviews/client-5.jpg",
            clientName: "Lucas Bennett",
            clientPosition: "Founder of Roamaly",
            reviewImage: "/assets/images/mobile-app/reviews/review5.png",
        },
        {
            title: (
                <>
                    Seamless <b>Wellness Platform</b> for <b>Somnexis</b> — Designed to Inspire
                </>
            ),
            appUsed: ["Flutter", "Laravel", "MySQL"],
            description:
                "I have been working more than 10 years and this is the first time I have work with this amazing team and I can say is I never have to find another team again for any future task this is a team from heaven.I highly recommend anyone to put your trust in this team absolutely the best 👏👏👏",
            rating: 4,
            clientImage: "/assets/images/mobile-app/reviews/client-2.jpg",
            clientName: "Olivia Carter",
            clientPosition: "Founder of Somnexis",
            reviewImage: "/assets/images/mobile-app/reviews/review6.png",
        },
    ];


    const [current, setCurrent] = useState(0);
    const [direction, setDirection] = useState(0);

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
            >
                A Showcase of Our{" "}
                <span className="relative inline-block text-[#5D59EA]">
                    Global Client
                    <img
                        src="/assets/images/mobile-app/underline.svg"
                        alt=""
                        loading="lazy"
                        className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-[12px]"
                    />
                </span>{" "}
                Solutions
            </h1>

            <div className="relative mt-[60px] flex justify-center">
                <div
                    className="rounded-[16px] transition-all duration-500 ease-in-out overflow-hidden"
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
                            className="flex flex-col lg:flex-row"
                        >
                            <div className="w-full lg:w-[55%] px-[20px] py-[30px] md:px-[70px] md:py-[90px] flex flex-col justify-center">
                                <h1 className="w-[65%] mx-auto lg:w-full text-[26px] md:text-[36px] text-[#02021E] leading-[46px]">
                                    {review.title}
                                </h1>

                                <div className="flex items-center mt-[9px]">
                                    <p className="text-[16px] font-bold flex flex-wrap gap-2 mt-2">
                                        {review.appUsed.map((tech, index) => (
                                            <span
                                                key={index}
                                                className="bg-[#486FEB]/10 text-[#486FEB] text-[14px] font-semibold px-3 py-1 rounded-full"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </p>

                                </div>

                                <div className="mt-[22px]">
                                    <p className="text-[14px] md:text-[16px] text-[#000000CC] max-w-[480px] leading-[28px]">
                                        “{review.description}”
                                    </p>
                                </div>

                                <div className="flex justify-center md:justify-start mt-[20px] gap-2">
                                    {[...Array(5)].map((_, i) => (
                                        <img
                                            key={i}
                                            loading="lazy"
                                            src={
                                                i < review.rating
                                                    ? "/assets/images/mobile-app/reviews/fillstar.svg"
                                                    : "/assets/images/mobile-app/reviews/unfillstar.svg"
                                            }
                                            alt="star"
                                            className="w-[24px] h-[24px]"
                                        />
                                    ))}
                                </div>

                                <div className="mt-[20px] flex justify-center md:justify-start gap-[10px] items-center">
                                    <img
                                        src={review.clientImage}
                                        loading="lazy"
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

                            <div className="max-w-[872px] h-[354px] md:h-[754px]">
                                <img
                                    src={review.reviewImage}
                                    loading="lazy"
                                    className="rounded-[16px] h-full w-full object-cover"
                                    alt={review.clientName}
                                />
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                <button
                    onClick={handlePrev}
                    className="absolute right-aero  bg-[#1A1A1A] border-[4px] border-[#FFFFFF] rounded-full px-4 py-3 cursor-pointer hover:scale-105 transition-transform"
                    style={{
                        boxShadow: "0px 6px 20px -6px #1E2E4826",
                    }}
                >
                    <img src="/assets/images/mobile-app/reviews/left.svg" loading="lazy" alt="Previous" />
                </button>

                <button
                    onClick={handleNext}
                    className="absolute left-aero bg-[#1A1A1A] border-4 border-[#FFFFFF] rounded-full px-4 py-3 cursor-pointer hover:scale-105 transition-transform"
                    style={{
                        boxShadow: "0px 6px 20px -6px #1E2E4826",
                    }}
                >
                    <img src="/assets/images/mobile-app/reviews/right.svg" loading="lazy" alt="Next" />
                </button>
            </div>
        </div>
    );
}
