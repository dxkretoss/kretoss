import React, { useState } from 'react'

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
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
        setIsSubmitted(true);

        // Reset after 2 seconds
        setTimeout(() => {
            setIsSubmitted(false);
            setIsOpen(false);
            setFormData({ name: "", email: "", phone: "", project: "" });
        }, 2000);
    };

    return (
        <div className='bg-[#FFFFFF] h-[100px] flex items-center relative'>
            <div className='container'>
                <div className='flex justify-between w-full items-center'>

                    {/* Left section */}
                    <div>
                        <img src='/logo.svg' alt='Kretoss' />
                    </div>

                    {/* Center text (absolutely centered) */}
                    <div className='absolute left-1/2 -translate-x-1/2 text-center'>
                        <nav>
                            <ul className="flex items-center gap-8 text-[#222222] text-[16px] font-medium">
                                {["About Us", "Services", "Hire Resources", "Industries", "Contact Us"].map(
                                    (item, index) => (
                                        <li key={index}>
                                            <a
                                                href="#"
                                                className="relative group transition"
                                            >
                                                {item}
                                                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#007bff] transition-all duration-300 group-hover:w-full"></span>
                                            </a>
                                        </li>
                                    )
                                )}
                            </ul>
                        </nav>
                    </div>

                    {/* Right section */}
                    <div className='flex items-center gap-3'>
                        <button
                            onClick={() => setIsOpen(true)}
                            className='bg-[#5D59EA] rounded-full text-white px-5 py-2 font-medium cursor-pointer'
                            style={{ boxShadow: '0px 0px 22px 0px #5D59EA99' }}
                        >
                            Get A Free Quote
                        </button>
                    </div>


                    {/* Popup Modal */}
                    {isOpen && (
                        <div className="fixed inset-0 bg-black/50 bg-opacity-50 flex items-center justify-center z-50">
                            <div className="bg-white w-[450px] rounded-[12px] p-8 shadow-lg relative">
                                {/* Close Button */}
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="absolute top-3 right-4 text-gray-500 text-xl cursor-pointer"
                                >
                                    ✕
                                </button>

                                {!isSubmitted ? (
                                    <>
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
                                                className="bg-[#5D59EA] text-white cursor-pointer font-semibold py-2 rounded-full mt-2 hover:bg-[#4a47d1] transition"
                                                style={{ boxShadow: "0px 0px 22px 0px #5D59EA99" }}
                                            >
                                                Get Quote
                                            </button>
                                        </form>
                                    </>
                                ) : (
                                    <div className="text-center py-10">
                                        <img
                                            src="/logo.svg"
                                            alt="Thank You"
                                            className="mx-auto w-[80px] mb-4"
                                        />
                                        <h3 className="text-[22px] font-semibold text-[#02021E]">
                                            Thank You!
                                        </h3>
                                        <p className="text-gray-600 mt-2">
                                            We’ll get back to you shortly.
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}


                </div>
            </div>
        </div>
    )
}
