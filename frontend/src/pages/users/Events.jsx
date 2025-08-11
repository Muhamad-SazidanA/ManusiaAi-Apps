import React from 'react';

export default function Events() {
    return (
        <section className="min-h-screen bg-[#F6FBFF] text-[#1A2B4C] font-inter">
            {/* Banner Background */}
            <div className="relative w-full h-[320px] md:h-[340px] flex items-center justify-center overflow-hidden">
                <img
                    src="/images/Banner/BannerNews.svg"
                    alt="Banner"
                    className="absolute inset-0 w-full h-full object-cover z-0"
                    draggable={false}
                />
                <div className="relative z-10 w-full flex flex-col items-center justify-center h-full px-4">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 text-center drop-shadow-lg">
                        Event
                    </h1>
                    <p className="text-lg md:text-xl text-white mb-2 text-center drop-shadow">
                        Stay ahead of the curve with our curated articles on AI, IT trends, automation, and real-world case studies
                    </p>
                </div>
            </div>

            {/* Blog Grid */}
            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                        <div
                            key={i}
                            className="bg-white rounded-2xl overflow-hidden border border-[#D6E6F7] shadow-[0_4px_24px_rgba(74,158,255,0.08)] flex flex-col items-center justify-center py-8 px-6 transition-all duration-300 hover:shadow-lg"
                            style={{
                                boxShadow: "0 0 24px 2px #2196F3, 0 0 0 2px #2196F3",
                            }}
                        >
                            <h3 className="text-xl font-semibold text-[#0377FF] mb-4 text-center">BLOG1</h3>
                            <div className="w-full flex justify-center mb-4">
                                <img
                                    src="/images/DummyContent.svg"
                                    alt={`BLOG${i}`}
                                    className="w-full max-w-[220px] h-[120px] object-cover rounded-lg"
                                />
                            </div>
                            <div className="flex flex-col items-center gap-2">
                                <span className="inline-block px-3 py-1 rounded-full bg-[#F0F7FF] text-[#0377FF] text-xs font-medium mb-2 shadow">
                                    AI is taking notes.
                                </span>
                                <p className="text-[#0377FF] text-sm text-center mb-2">
                                    This section is a sample blog content.
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}