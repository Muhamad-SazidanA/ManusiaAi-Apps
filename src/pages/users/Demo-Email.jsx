import React from 'react';

export default function DemoEmail() {
    return (
        <section className="min-h-screen bg-[#F6FBFF] text-[#1A2B4C] font-inter">
            {/* Banner Background */}
            <div className="relative w-full h-[320px] md:h-[340px] flex items-center justify-center overflow-hidden">
                <img
                    src="/images/Banner/ImagesBanner001.svg"
                    alt="Banner"
                    className="absolute inset-0 w-full h-full object-cover z-0"
                    draggable={false}
                />
                <div className="absolute inset-0 bg-blue-900/40 z-1"></div>
                <div className="relative z-10 w-full flex flex-col items-center justify-center h-full px-4 text-center">
                    {/* Badge - now inside the centered content div */}
                    <div className="inline-flex items-center gap-2 bg-blue-600/40 border border-[#0377FF]/30 rounded-full px-4 py-2 mb-6">
                        <img
                            src="/images/Image-BintangBG.svg"
                            alt="Star"
                            className="w-4 h-4 animate-pulse opacity-60"
                        />
                        <span className="text-blue-300 text-sm font-inter font-normal">
                            New: Our AI integration just landed
                        </span>
                    </div>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4  text-center drop-shadow-lg">
                        Request Demo
                    </h1>
                    <p className="text-lg md:text-xl text-white mb-2 text-center">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    </p>
                </div>
            </div>

            <div className="min-h-screen bg-[#F6FBFF] text-[#1A2B4C] font-inter flex items-center justify-center">
            <div className="w-full max-w-xl mx-auto my-12">
                <div className="bg-white rounded-2xl shadow-[0_0_0_2px_rgba(3,119,255,0.10)] border border-blue-100 p-8 md:p-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#0377FF] mb-10 text-center">Request Demo</h2>
                    <form>
                        <div className="mb-5">
                            <label className="block text-sm font-semibold text-[#0377FF] mb-2">Name</label>
                            <input
                                type="text"
                                placeholder="Your full name"
                                className="w-full px-5 py-3 rounded-xl border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-300 text-base shadow-[0_4px_12px_0_rgba(3,119,255,0.12)] transition"
                            />
                        </div>
                        <div className="mb-5">
                            <label className="block text-sm font-semibold text-[#0377FF] mb-2">Email</label>
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="w-full px-5 py-3 rounded-xl border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-300 text-base shadow-[0_4px_12px_0_rgba(3,119,255,0.12)] transition"
                            />
                        </div>
                        <div className="mb-5">
                            <label className="block text-sm font-semibold text-[#0377FF] mb-2">Company Name</label>
                            <input
                                type="text"
                                placeholder="Enter Company Name"
                                className="w-full px-5 py-3 rounded-xl border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-300 text-base shadow-[0_4px_12px_0_rgba(3,119,255,0.12)] transition"
                            />
                        </div>
                        <div className="mb-5">
                            <label className="block text-sm font-semibold text-[#0377FF] mb-2">Phone Number</label>
                            <input
                                type="tel"
                                placeholder="Enter Phone Number"
                                className="w-full px-5 py-3 rounded-xl border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-300 text-base shadow-[0_4px_12px_0_rgba(3,119,255,0.12)] transition"
                            />
                        </div>
                        {/* LinkedIn URL Field */}
                        <div className="mb-5">
                            <label className="block text-sm font-semibold text-[#0377FF] mb-2">LinkedIn URL</label>
                            <input
                                type="url"
                                placeholder="Enter LinkedIn URL"
                                className="w-full px-5 py-3 rounded-xl border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-300 text-base shadow-[0_4px_12px_0_rgba(3,119,255,0.12)] transition"
                            />
                        </div>
                        <div className="mb-8">
                            <label className="block text-sm font-semibold text-[#0377FF] mb-2">How can we help</label>
                            <textarea
                                rows="4"
                                placeholder="How can we help you"
                                className="w-full px-5 py-3 rounded-xl border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-300 text-base shadow-[0_4px_12px_0_rgba(3,119,255,0.12)] resize-none transition"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-[#0377FF] hover:bg-blue-600 text-white py-3 rounded-xl font-semibold text-base shadow-[0_4px_12px_0_rgba(3,119,255,0.12)] transition-colors duration-200"
                        >
                            Submit Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
        </section>
    );
}