import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { useRouter } from 'next/router';

export default function Header() {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setTimeout(() => {
            setIsOpen(false);
            router.push('/thankyou');
        }, 2000);
    };

    return (
        <header className="bg-[#FFFFFF] h-[80px] 2xl:h-[100px] flex items-center relative shadow-sm w-full z-50">
            <div className="container mx-auto px-4 flex justify-between items-center w-full">
                <div className="flex items-center">
                    <img src="/assets/images/mobile-app//logo.svg" alt="Kretoss" className="w-[160px]" />
                </div>

                <nav className="hidden lg:flex absolute left-1/2 -translate-x-1/2 text-center">
                    <ul className="flex items-center gap-8 text-[#222222] text-[16px] font-medium">
                        {[
                            { label: "About Us", target: "about" },
                            { label: "Industries", target: "industries" },
                            { label: "Services", target: "services" },
                            { label: "Hire Resources", target: "hire" },
                            { label: "Contact Us", target: "contact" },
                        ].map((item, index) => (
                            <li key={index}>
                                <button
                                    onClick={() => {
                                        const section = document.getElementById(item.target);
                                        if (section) {
                                            section.scrollIntoView({ behavior: "smooth" });
                                        }
                                    }}
                                    className="relative group transition bg-transparent border-none outline-none cursor-pointer"
                                >
                                    {item.label}
                                    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#007bff] transition-all duration-300 group-hover:w-full"></span>
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="hidden lg:flex items-center gap-3">
                    <button
                        onClick={() => setIsOpen(true)}
                        className="bg-[#5D59EA] rounded-full text-white px-5 py-2 font-medium cursor-pointer hover:bg-[#4a47d1] transition"
                        style={{ boxShadow: "0px 0px 22px 0px #5D59EA99" }}
                    >
                        Get A Free Quote
                    </button>
                </div>

                <div className="lg:hidden flex items-center">
                    <button
                        onClick={() => setIsSidebarOpen(true)}
                        className="text-[#222222] text-3xl focus:outline-none"
                    >
                        <Menu />
                    </button>
                </div>
            </div>

            {isSidebarOpen && (
                <div className="fixed inset-0 bg-black/40 z-50">
                    <div className="fixed right-0 top-0 h-full w-[260px] bg-white shadow-lg p-6 flex flex-col  transition-transform duration-300 ease-in-out">
                        <div className="flex justify-between items-center mb-6">
                            <img src="/assets/images/mobile-app//logo.svg" alt="Kretoss" className="w-[130px]" />
                            <button
                                onClick={() => setIsSidebarOpen(false)}
                                className="text-gray-600 text-2xl"
                            >
                                <X />
                            </button>
                        </div>

                        <ul className="flex flex-col gap-5 text-[#222222] text-[16px] font-medium">
                            {[
                                { label: "About Us", target: "about" },
                                { label: "Services", target: "services" },
                                { label: "Hire Resources", target: "hire" },
                                { label: "Industries", target: "industries" },
                                { label: "Contact Us", target: "contact" },
                            ].map((item, index) => (
                                <li key={index}>
                                    <a
                                        href={`/#${item.target}`}
                                        className="block hover:text-[#5D59EA] transition"
                                        onClick={() => setIsSidebarOpen(false)}
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>


                        <button
                            onClick={() => {
                                setIsSidebarOpen(false);
                                setIsOpen(true);
                            }}
                            className="bg-[#5D59EA] rounded-full text-white px-5 py-2 font-medium cursor-pointer hover:bg-[#4a47d1] transition mt-6"
                            style={{ boxShadow: "0px 0px 22px 0px #5D59EA99" }}
                        >
                            Get A Free Quote
                        </button>
                    </div>
                </div>
            )}

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
                            Get A Free Quote
                        </h2>

                        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
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
                            </div>
                            <button
                                type="submit"
                                className="bg-[#5D59EA] text-white font-semibold py-2 rounded-full mt-2 hover:bg-[#4a47d1] transition"
                                style={{ boxShadow: "0px 0px 22px 0px #5D59EA99" }}
                            >
                                Get Quote
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </header>
    );
}
