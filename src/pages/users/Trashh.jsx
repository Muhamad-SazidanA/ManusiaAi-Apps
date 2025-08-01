import React from 'react';

export default function Trashh() {
    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8 min-h-screen bg-gradient-to-b from-black via-blue-900 to-slate-900">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-14">
                    <h1 className="text-4xl font-bold text-white mb-3 drop-shadow" style={{ textShadow: '0 0 8px #2563eb55' }}>
                        Events
                    </h1>
                    <p className="text-lg text-white/70 mb-6">
                        Stay ahead of the curve with our curated articles on AI, IT trends, automation, and real-world case studies
                    </p>
                    <div className="border-t border-blue-900/40 my-6"></div>
                </div>

                {/* Blog Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    <div className="group bg-slate-900/80 rounded-2xl overflow-hidden shadow-lg border border-[#489CFF]/30 hover:border-[#489CFF]/60 hover:bg-[#489CFF]/10 transition-all duration-300 flex flex-col"
                        style={{ boxShadow: '0 0 24px 4px rgba(72,156,255,0.10)' }}>
                        <div className="overflow-hidden">
                            <img
                                src="/images/DummyContent.svg"
                                alt="BLOG1"
                                className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        <div className="p-6 flex flex-col flex-1">
                            <h3 className="text-2xl font-semibold text-[#489CFF] mb-2 group-hover:text-blue-400 transition-colors duration-300">
                                BLOG1
                            </h3>
                            <p className="text-white/70 mb-4 flex-1">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
                            </p>
                            <button className="self-start text-[#489CFF] font-medium hover:text-blue-400 transition-colors duration-300">
                                Read More →
                            </button>
                        </div>
                    </div>
                    <div className="group bg-slate-900/80 rounded-2xl overflow-hidden shadow-lg border border-[#489CFF]/30 hover:border-[#489CFF]/60 hover:bg-[#489CFF]/10 transition-all duration-300 flex flex-col"
                        style={{ boxShadow: '0 0 24px 4px rgba(72,156,255,0.10)' }}>
                        <div className="overflow-hidden">
                            <img
                                src="/images/DummyContent.svg"
                                alt="BLOG2"
                                className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        <div className="p-6 flex flex-col flex-1">
                            <h3 className="text-2xl font-semibold text-[#489CFF] mb-2 group-hover:text-blue-400 transition-colors duration-300">
                                BLOG2
                            </h3>
                            <p className="text-white/70 mb-4 flex-1">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
                            </p>
                            <button className="self-start text-[#489CFF] font-medium hover:text-blue-400 transition-colors duration-300">
                                Read More →
                            </button>
                        </div>
                    </div>
                    <div className="group bg-slate-900/80 rounded-2xl overflow-hidden shadow-lg border border-[#489CFF]/30 hover:border-[#489CFF]/60 hover:bg-[#489CFF]/10 transition-all duration-300 flex flex-col"
                        style={{ boxShadow: '0 0 24px 4px rgba(72,156,255,0.10)' }}>
                        <div className="overflow-hidden">
                            <img
                                src="/images/DummyContent.svg"
                                alt="BLOG3"
                                className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        <div className="p-6 flex flex-col flex-1">
                            <h3 className="text-2xl font-semibold text-[#489CFF] mb-2 group-hover:text-blue-400 transition-colors duration-300">
                                BLOG3
                            </h3>
                            <p className="text-white/70 mb-4 flex-1">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
                            </p>
                            <button className="self-start text-[#489CFF] font-medium hover:text-blue-400 transition-colors duration-300">
                                Read More →
                            </button>
                        </div>
                    </div>
                    <div className="group bg-slate-900/80 rounded-2xl overflow-hidden shadow-lg border border-[#489CFF]/30 hover:border-[#489CFF]/60 hover:bg-[#489CFF]/10 transition-all duration-300 flex flex-col"
                        style={{ boxShadow: '0 0 24px 4px rgba(72,156,255,0.10)' }}>
                        <div className="overflow-hidden">
                            <img
                                src="/images/DummyContent.svg"
                                alt="BLOG4"
                                className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        <div className="p-6 flex flex-col flex-1">
                            <h3 className="text-2xl font-semibold text-[#489CFF] mb-2 group-hover:text-blue-400 transition-colors duration-300">
                                BLOG4
                            </h3>
                            <p className="text-white/70 mb-4 flex-1">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
                            </p>
                            <button className="self-start text-[#489CFF] font-medium hover:text-blue-400 transition-colors duration-300">
                                Read More →
                            </button>
                        </div>
                    </div>
                    <div className="group bg-slate-900/80 rounded-2xl overflow-hidden shadow-lg border border-[#489CFF]/30 hover:border-[#489CFF]/60 hover:bg-[#489CFF]/10 transition-all duration-300 flex flex-col"
                        style={{ boxShadow: '0 0 24px 4px rgba(72,156,255,0.10)' }}>
                        <div className="overflow-hidden">
                            <img
                                src="/images/DummyContent.svg"
                                alt="BLOG5"
                                className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        <div className="p-6 flex flex-col flex-1">
                            <h3 className="text-2xl font-semibold text-[#489CFF] mb-2 group-hover:text-blue-400 transition-colors duration-300">
                                BLOG5
                            </h3>
                            <p className="text-white/70 mb-4 flex-1">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
                            </p>
                            <button className="self-start text-[#489CFF] font-medium hover:text-blue-400 transition-colors duration-300">
                                Read More →
                            </button>
                        </div>
                    </div>
                    <div className="group bg-slate-900/80 rounded-2xl overflow-hidden shadow-lg border border-[#489CFF]/30 hover:border-[#489CFF]/60 hover:bg-[#489CFF]/10 transition-all duration-300 flex flex-col"
                        style={{ boxShadow: '0 0 24px 4px rgba(72,156,255,0.10)' }}>
                        <div className="overflow-hidden">
                            <img
                                src="/images/DummyContent.svg"
                                alt="BLOG6"
                                className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        <div className="p-6 flex flex-col flex-1">
                            <h3 className="text-2xl font-semibold text-[#489CFF] mb-2 group-hover:text-blue-400 transition-colors duration-300">
                                BLOG6
                            </h3>
                            <p className="text-white/70 mb-4 flex-1">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
                            </p>
                            <button className="self-start text-[#489CFF] font-medium hover:text-blue-400 transition-colors duration-300">
                                Read More →
                            </button>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
        
    );
}