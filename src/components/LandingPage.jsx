import React from 'react';
import {
    Rocket,
    Clock,
    DollarSign,
    BarChart2,
    Users,
    Settings,
    Briefcase,
    FileText,
    CheckSquare
} from 'lucide-react';

const LandingPage = () => {
    const features = [
        {
            icon: <Rocket className="text-blue-600" size={32} />,
            title: "Enterprise-Grade Automation for Small Businesses",
            description: "Automate approvals, assets, and tasks just like big corporations. No need for a tech team—Asappio is designed for simplicity.",
            benefit: "🚀 Unlock Enterprise-Level Efficiency"
        },
        {
            icon: <CheckSquare className="text-green-600" size={32} />,
            title: "Hassle-Free Approval Workflows",
            description: "Streamline approvals for leave requests, purchases, expenses, and more. Track and manage requests effortlessly in real time.",
            benefit: "🚀 Start Automating Approvals Today"
        },
        {
            icon: <Briefcase className="text-purple-600" size={32} />,
            title: "Effortless Asset Management",
            description: "Manage IT and non-IT assets with ease—track, assign, and reassign. Eliminate the chaos of outdated spreadsheets.",
            benefit: "🚀 Take Control of Your Assets"
        },
        {
            icon: <FileText className="text-orange-600" size={32} />,
            title: "Simplified Task Management",
            description: "Assign and monitor tasks with minimal effort. Ensure deadlines are met with intuitive task tracking.",
            benefit: "🚀 Boost Task Efficiency Now"
        },
        {
            icon: <Users className="text-indigo-600" size={32} />,
            title: "End-to-End HR Modules",
            description: "Manage your team's entire journey: onboarding, payroll, leave, and exits. Enhance employee satisfaction while reducing manual efforts.",
            benefit: "🚀 Streamline HR Operations"
        }
    ];

    const benefits = [
        { icon: <Clock className="text-blue-600 mr-3" size={24} />, text: "Save Time: Reduce manual processes by 50%" },
        { icon: <DollarSign className="text-green-600 mr-3" size={24} />, text: "Save Money: Automate workflows and save $50,000+ annually" },
        { icon: <BarChart2 className="text-purple-600 mr-3" size={24} />, text: "Boost Productivity: Help your team focus on what matters" }
    ];

    const differentiators = [
        { icon: <Settings className="text-blue-600 mr-3" size={24} />, text: "Intuitive Design: Anyone can use it—no learning curve" },
        { icon: <Briefcase className="text-green-600 mr-3" size={24} />, text: "All-in-One Platform: Approvals, assets, tasks, and HR in one place" },
        { icon: <Users className="text-purple-600 mr-3" size={24} />, text: "Tailored for SMBs: Affordable, scalable, and results-driven" }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
            <div className="container mx-auto px-4 py-16">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-white shadow-2xl rounded-3xl p-8 border border-blue-100">
                        <h1 className="text-4xl font-extrabold text-blue-900 mb-4 text-center">
                            👉 Automation for Everyone: Empowering Small Businesses
                        </h1>

                        <p className="text-xl text-gray-700 mb-8 text-center">
                            What was once exclusive to enterprises is now within your reach. Asappio brings cutting-edge automation to small businesses, helping you manage <span className="font-bold">PEOPLE, PROCESSES, & PROJECTS</span> seamlessly.
                        </p>

                        <h2 className="text-2xl font-bold text-blue-900 mb-6 text-center">Why Asappio?</h2>

                        <div className="grid md:grid-cols-3 gap-6 mb-12">
                            {features.map((feature, index) => (
                                <div
                                    key={index}
                                    className="bg-blue-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
                                >
                                    <div className="flex items-center mb-4">
                                        {feature.icon}
                                        <h3 className="ml-4 text-lg font-bold text-gray-800">{feature.title}</h3>
                                    </div>
                                    <p className="text-gray-600 mb-4">{feature.description}</p>
                                    <span className="text-blue-600 font-semibold">{feature.benefit}</span>
                                </div>
                            ))}
                        </div>

                        <div className="bg-blue-100 rounded-xl p-6 mb-8">
                            <h2 className="text-2xl font-bold text-blue-900 mb-4">⚓ Benefits of Automating with Asappio</h2>
                            <div className="space-y-4">
                                {benefits.map((benefit, index) => (
                                    <div key={index} className="flex items-center">
                                        {benefit.icon}
                                        <span className="font-semibold text-gray-700">{benefit.text}</span>
                                    </div>
                                ))}
                            </div>
                            <p className="text-gray-700 mt-4 italic">
                                Accessible for All: Designed for businesses of any size, no tech skills required.
                            </p>
                        </div>

                        <div className="bg-green-50 rounded-xl p-6 mb-8">
                            <h2 className="text-2xl font-bold text-blue-900 mb-4">What Sets Asappio Apart?</h2>
                            <div className="space-y-4">
                                {differentiators.map((diff, index) => (
                                    <div key={index} className="flex items-center">
                                        {diff.icon}
                                        <span className="font-semibold text-gray-700">{diff.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="text-center">
                            <p className="text-2xl font-bold text-blue-900 mb-4">Why Wait? Transform Your Business Today</p>
                            <p className="text-gray-700 mb-6">
                                With Asappio, small businesses can finally access automation tools that were once exclusive to large companies. Save time, cut costs, and operate like an enterprise—without the enterprise price tag.
                            </p>

                            <a
                                href="https://app.asappio.com/register"
                                className="inline-block px-8 py-4 bg-blue-600 text-white rounded-full text-lg font-bold hover:bg-blue-700 transition duration-300 shadow-lg hover:shadow-xl cursor-pointer"
                            >
                                {/* ↪️ */}
                                Sign Up for Free Today
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;