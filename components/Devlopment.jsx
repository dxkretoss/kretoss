import React from 'react'

export default function Devlopment() {
    const developers = [
        {
            category: "Junior Developers",
            cost: "$17",
            experience: "1–2 Years",
            methodology: "Agile",
            manager: "Yes",
            timezone: "Yes",
            hours: "40 hours/Week",
        },
        {
            category: "Mid-Level Developers",
            cost: "$22",
            experience: "2–5 Years",
            methodology: "Agile",
            manager: "Yes",
            timezone: "Yes",
            hours: "40 hours/Week",
        },
        {
            category: "Senior Developers",
            cost: "$30",
            experience: "5+ Years",
            methodology: "Agile",
            manager: "Yes",
            timezone: "Yes",
            hours: "40 hours/Week",
        },
    ];
    return (
        <div className="container section">
            <h1
                className="w-[1200px] mx-auto text-[48px] font-semibold text-[#02021E] text-center relative"
                style={{ fontFamily: "'Funnel Display', sans-serif" }}
            >
                Hire  App Developers to Empower Your Business with Our Proven Development {" "}
                <span className="relative inline-block text-[#5D59EA]">
                    Expertise and Quality
                    <img
                        src="/underline.svg"
                        alt=""
                        className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-[12px]"
                    />
                </span>
            </h1>

            {/* Table */}
            <div className="w-[1460px] mx-auto mt-[80px] rounded-[12px] border border-[#C2C0F4] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.05)]">
                <table className="w-full border-collapse text-left text-[#02021E] text-[18px] ]">
                    <thead>
                        <tr className="bg-[#5D59EA] text-white text-[18px]">
                            <th className="p-4 font-semibold border-r border-[#C2C0F4]">Category</th>
                            <th className="p-4 font-semibold border-r border-[#C2C0F4]">Approx Cost</th>
                            <th className="p-4 font-semibold border-r border-[#C2C0F4]">Years of Experience</th>
                            <th className="p-4 font-semibold border-r border-[#C2C0F4]">Methodology</th>
                            <th className="p-4 font-semibold border-r border-[#C2C0F4]">Project Manager</th>
                            <th className="p-4 font-semibold border-r border-[#C2C0F4]">Time Zone Flexibility</th>
                            <th className="p-4 font-semibold ">Working Hours</th>
                        </tr>
                    </thead>

                    {/* ✅ Dynamic rows */}
                    <tbody className="bg-white">
                        {developers.map((dev, index) => (
                            <tr
                                key={index}
                                className={`border-b text-[18px] border-[#C2C0F4] ${index === developers.length - 1 ? "border-b-0" : ""
                                    }`}
                            >
                                <td className="p-4 font-semibold bg-[#E6F0FF] text-[#02021E]  border-r border-[#C2C0F4] ">{dev.category}</td>
                                <td className="p-4 bg-[#FBFAFF] text-[#4C586F] border-r border-[#C2C0F4]">{dev.cost}</td>
                                <td className="p-4 bg-[#FBFAFF] text-[#4C586F] border-r border-[#C2C0F4]">{dev.experience}</td>
                                <td className="p-4 bg-[#FBFAFF] text-[#4C586F] border-r border-[#C2C0F4]">{dev.methodology}</td>
                                <td className="p-4 bg-[#FBFAFF] text-[#4C586F] border-r border-[#C2C0F4]">{dev.manager}</td>
                                <td className="p-4 bg-[#FBFAFF] text-[#4C586F] border-r border-[#C2C0F4]">{dev.timezone}</td>
                                <td className="p-4 bg-[#FBFAFF] text-[#4C586F] ">{dev.hours}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
