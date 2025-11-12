import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { useRouter } from 'next/router';

export default function Header() {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        project: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setTimeout(() => {
            setIsOpen(false);
            setFormData({ name: "", email: "", phone: "", project: "" });
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
                            { label: "Services", target: "services" },
                            { label: "Hire Resources", target: "hire" },
                            { label: "Industries", target: "industries" },
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
                            {["About Us", "Services", "Hire Resources", "Industries", "Contact Us"].map(
                                (item, index) => (
                                    <li key={index}>
                                        <a
                                            href="#"
                                            className="block hover:text-[#5D59EA] transition"
                                            onClick={() => setIsSidebarOpen(false)}
                                        >
                                            {item}
                                        </a>
                                    </li>
                                )
                            )}
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
                    <div className="bg-white w-[450px] max-w-[90%] rounded-[12px] p-8 shadow-lg relative overflow-auto max-h-[90vh]">
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
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                value={formData.name}
                                onChange={handleChange}
                                className="border border-gray-300 rounded-[8px] px-4 py-2 focus:outline-none focus:border-[#5D59EA]"
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleChange}
                                className="border border-gray-300 rounded-[8px] px-4 py-2 focus:outline-none focus:border-[#5D59EA]"
                                required
                            />
                            <input
                                type="tel"
                                name="phone"
                                placeholder="Phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="border border-gray-300 rounded-[8px] px-4 py-2 focus:outline-none focus:border-[#5D59EA]"
                                required
                            />
                            <textarea
                                name="project"
                                placeholder="Project Description"
                                value={formData.project}
                                onChange={handleChange}
                                className="border border-gray-300 rounded-[8px] px-4 py-2 focus:outline-none focus:border-[#5D59EA] min-h-[100px]"
                                required
                            />
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
