import React, { useState } from 'react'

export default function SkillsSolutions() {

    const categories = {
        "App Development": [
            { name: "iOS", icon: "/skills/ios.svg" },
            { name: "Android", icon: "/skills/android.svg" },
            { name: "Swift", icon: "/skills/swift.svg" },
            { name: "Kotlin", icon: "/skills/kotlin.svg" },
            { name: "Flutter", icon: "/skills/flutter.svg" },
            { name: "Python", icon: "/skills/python.svg" },
        ],
        "Web Development": [
            { name: "NodeJS", icon: "/skills/nodejs.svg" },
            { name: "PHP", icon: "/skills/php.svg" },
            { name: "Codeigniter", icon: "/skills/codeigniter.svg" },
            { name: "Laravel", icon: "/skills/laravel.svg" },
            { name: "Java Spring Boot", icon: "/skills/spring.svg" },
            { name: "Python", icon: "/skills/python1.svg" },
        ],
        "Front-End": [
            { name: "Angular", icon: "/skills/angular.svg" },
            { name: "React JS", icon: "/skills/React.svg" },
            { name: "Knockout JS", icon: "/skills/knock.svg" },
            { name: "Express JS", icon: "/skills/express.svg" },
            { name: "Vue.js", icon: "/skills/Vue.js.svg" },
            { name: "Svelte", icon: "/skills/Svelte.svg" },
        ],
        "Back-End": [
            { name: "NodeJS", icon: "/skills/nodejs.svg" },
            { name: "Python", icon: "/skills/python1.svg" },
            { name: "Java", icon: "/skills/java.svg" },
            { name: "Express JS", icon: "/skills/express.svg" },
            { name: "Spring", icon: "/skills/spring.svg" },
            { name: "Laravel", icon: "/skills/laravel.svg" },
        ],
        Microsoft: [
            { name: "ASP.NET", icon: "/skills/dontnet.svg" },
            { name: "C#", icon: "/skills/c.svg" },
            { name: "ASP.NET Core", icon: "/skills/NET_Core.svg" },
            { name: "GitHub", icon: "/skills/git.svg" },
            { name: "SQL", icon: "/skills/Sql_data.svg" },
            { name: "Power Apps", icon: "/skills/Powerapps.svg" },
        ],
        "Open Source": [
            { name: "WordPress", icon: "/skills/wordpress.svg" },
            { name: "Magento", icon: "/skills/magento.svg" },
            { name: "WooCommerce", icon: "/skills/woo.svg" },
            { name: "Shopify", icon: "/skills/shopify.svg" },
            { name: "Drupal", icon: "/skills/drupal.svg" },
            { name: "Bagisto", icon: "/skills/bagisto.svg" },
        ],
        Database: [
            { name: "MySQL", icon: "/skills/Sql_data.svg" },
            { name: "Oracle", icon: "/skills/oracle.svg" },
            { name: "MongoDB", icon: "/skills/mongo.svg" },
            { name: "MariaDB", icon: "/skills/maria.svg" },
            { name: "SQLite", icon: "/skills/drupal.svg" },
            { name: "Redis", icon: "/skills/bagisto.svg" },
        ],
        Servers: [
            { name: "Amazon Web Services", icon: "/skills/aws.svg" },
            { name: "Google Cloud", icon: "/skills/google.svg" },
            { name: "Microsoft Azure", icon: "/skills/micro-azure.svg" },
            { name: "IBM Cloud", icon: "/skills/ibm.svg" },
            { name: "Oracle Cloud", icon: "/skills/oracle-cloud.svg" },
            { name: "DigitalOcean", icon: "/skills/digitalocean.svg" },
        ],
        DevOps: [
            { name: "Kubernetes", icon: "/skills/kuber.svg" },
            { name: "Jenkins", icon: "/skills/jenkins.svg" },
            { name: "Chef", icon: "/skills/chef.svg" },
            { name: "Maven", icon: "/skills/maven.svg" },
            { name: "Docker", icon: "/skills/docer.svg" },
            { name: "OpenShift", icon: "/skills/openswift.svg" },
        ],
    };

    const [activeTab, setActiveTab] = useState("App Development");
    return (
        <div
            className="relative container section h-[777px] rounded-[24px]"
            style={{
                background: "linear-gradient(96.57deg, #FFFFFF 0.24%, #ECE6FF 99.76%)",
            }}
        >
            <div className='w-[1290px] mx-auto pt-[113px]'>
                <h1
                    className="w-[1290px] mx-auto text-[48px] font-semibold text-[#02021E] text-center relative"
                    style={{ fontFamily: "'Funnel Display', sans-serif" }}
                >
                    Our Skilled Developers Use Their Technical Expertise To Deliver {" "}
                    <span className="relative inline-block text-[#5D59EA]">
                        Top-Quality, High-Performing
                        <img
                            src="/underline.svg"
                            alt=""
                            className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-[12px]"
                        />
                    </span>{" "}
                    Solutions.
                </h1>
            </div>

            <div className="relative">
                <div className='relative z-10 w-[1460px] gap-2 px-[30px] py-[19px] mx-auto h-[100px] rounded-[100px] bg-[#5D59EA] mt-[50px] flex justify-between items-center'>
                    {Object.keys(categories).map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`h-[61px] px-4 py-2 rounded-full text-[18px] cursor-pointer font-medium transition-all duration-300 ${activeTab === tab
                                ? "bg-white text-[#5D59EA] shadow-md"
                                : "hover:bg-[#6C68F5] text-white"
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                <div className="relative z-0 w-[1397px] h-[247px] -mt-2  justify-center items-center mx-auto grid grid-cols-3 md:grid-cols-6 gap-6 justify-items-center bg-white border rounded-b-[24px] border-[#02021E33]  py-6">
                    {categories[activeTab].map((item) => (
                        <div
                            key={item.name}
                            className="flex flex-col items-center gap-2 text-gray-700"
                        >
                            <div className='w-[80px] h-[80px] flex justify-center items-center bg-[#FFFFFF] border border-[#02021E33] shadow-[#9E9E9E40] rounded-full px-5 py-4'>
                                <img src={item.icon} />
                            </div>
                            <span className="text-[20px] font-medium text-[#02021E] mt-[11px]">{item.name}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="absolute -top-5 -left-5">
                <div className="relative">
                    <div
                        className="w-[182px] h-[80px] bg-[#FFFFFF] rounded-[10px] flex flex-col items-center justify-center gap-2"
                        style={{
                            boxShadow: "13px 14px 40px 0px #27628326",
                        }}
                    >
                        <img src="/Highq.svg" alt="Quick Support" className="absolute -top-5" />
                        <span className="text-[20px] font-semibold text-[#020817] text-center absolute top-10">
                            Highly Qualified
                        </span>
                    </div>
                </div>
            </div>

        </div>
    )
}
