import React from 'react';
import { Link } from 'react-router-dom';

export default function Solutions() {
    const handleNavigation = (url) => {
        window.location.href = url; // Force reload the page
    };
    return (
        <div className="w-full min-h-screen bg-white text-blue-800 font-inter relative overflow-x-hidden">
            {/* Hero Section */}
            <section className="min-h-screen flex items-center justify-center bg-white overflow-hidden relative px-4 md:px-12">
                <div className="relative max-w-6xl w-full mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10 mb-16">
                    {/* Kiri: Teks dan Button */}
                    <div className="flex-1 flex flex-col items-start justify-center px-0 md:px-6">
                        <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold font-inter mb-5 leading-[1.3] pb-[10px]">
                            <span className="bg-[#0377FF] text-transparent bg-clip-text whitespace-nowrap">
                                Tailored AI Solutions for<br />Real Business Impact
                            </span>
                        </h1>
                        <p className="text-base md:text-3xl text-black/90 mb-8 font-light max-w-lg  text-left">
                            Kami bangun solusi AI yang relevan, kustom, dan berdampak nyata. untuk bisnis Anda.
                        </p>
                        <Link onClick={() => handleNavigation('/demo-email')}
                            className="px-8 py-4 rounded-xl font-semibold text-lg bg-[#0377FF] text-white shadow-lg border border-blue-300 hover:scale-105 transition-all duration-200">
                            Request Demo
                        </Link>
                    </div>
                    {/* Kanan: Gambar */}
                    <div className="flex-1 flex items-center justify-center px-0 md:px-6">
                        <img
                            src="/images/Solutions/ImageSolustions1.svg"
                            alt="HR Document Management"
                            className="w-full max-w-md"
                        />
                    </div>
                </div>
            </section>

            {/*Section Solusi dari Brilian.AI*/}
            <section className="relative py-16 overflow-hidden px-4 md:px-12">
                <h3 className="relative text-4xl md:text-5xl font-light text-[#0377FF] mb-20 text-center">Our Services</h3>
                <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 mb-25">
                    <div className="flex-1 flex flex-col items-start justify-center px-0 md:px-6">
                        <h2 className="text-3xl md:text-4xl font-semibold text-[#0377FF] mb-12 md:mb-8 text-left md:text-left w-full">
                            AI Readiness &<br /> Opportunity Assessment
                        </h2>
                        <p className="text-1xl md:text-3xl font-inter font-normal text-black/90 leading-relaxed max-w-lg text-left">
                            Evaluasi kesiapan digital dan identifikasi potensi penerapan AI di berbagai fungsi bisnis Anda.
                        </p>
                    </div>
                    <div className="flex-1 flex items-center justify-center px-0 md:px-6">
                        <img
                            src="/images/Solutions/ImageSolustions2.svg"
                            alt="HR Document Management"
                            className="w-full max-w-md h-auto"
                        />
                    </div>
                </div>
                <hr className="border-t-2 border-gray-200 mt-12 mb-12" />
                <div className="flex flex-col md:flex-row-reverse relative max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 ">
                    <div className="flex-1 flex flex-col items-start justify-center px-0 md:px-6">
                        <h2 className="text-3xl md:text-4xl font-semibold text-[#0377FF] mb-12 md:mb-8 text-left md:text-left w-full">
                            Custom AI Development
                        </h2>
                        <p className="text-1xl md:text-3xl font-inter font-normal text-black/90 leading-relaxed max-w-lg text-left">
                            Pengembangan model AI kustom seperti NLP, OCR, prediction model, LLM tuning, dan lainnya — sesuai kebutuhan spesifik Anda.
                        </p>
                    </div>
                    <div className="flex-1 flex items-center justify-center px-0 md:px-6">
                        <img
                            src="/images/Solutions/ImageSolustions3.svg"
                            alt="HR Document Management"
                            className="w-full max-w-md h-auto"
                        />
                    </div>
                </div>
                <hr className="border-t-2 border-gray-200 mt-12 mb-12" />
                <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 mb-25">
                    <div className="flex-1 flex flex-col items-start justify-center px-0 md:px-6">
                        <h2 className="text-3xl md:text-4xl font-semibold text-[#0377FF] mb-12 md:mb-8 text-left md:text-left w-full">
                            Integration with Existing<br />Systems
                        </h2>
                        <p className="text-1xl md:text-3xl font-inter font-normal text-black/90 leading-relaxed max-w-lg text-left">
                            Solusi kami dirancang untuk terhubung mulus dengan ERP, CRM, RPA, atau sistem internal lainnya.
                        </p>
                    </div>
                    <div className="flex-1 flex items-center justify-center px-0 md:px-6">
                        <img
                            src="/images/Solutions/ImageSolustions4.svg"
                            alt="HR Document Management"
                            className="w-full max-w-md h-auto"
                        />
                    </div>
                </div>
                <hr className="border-t-2 border-gray-200 mt-12 mb-12" />
                <div className="flex flex-col md:flex-row-reverse relative max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 mb-25">
                    <div className="flex-1 flex flex-col items-start justify-center px-0 md:px-6">
                        <h2 className="text-3xl md:text-4xl font-semibold text-[#0377FF] mb-12 md:mb-8 text-left md:text-left w-full">
                            Proof-of-Concept &<br />Scalable Deployment
                        </h2>
                        <p className="text-1xl md:text-3xl font-inter font-normal text-black/90 leading-relaxed max-w-lg text-left">
                            Kami bantu uji coba awal (POC) hingga deployment skala besar untuk memastikan AI memberikan dampak nyata.
                        </p>
                    </div>
                    <div className="flex-1 flex items-center justify-center px-0 md:px-6">
                        <img
                            src="/images/Solutions/ImageSolustions5.svg"
                            alt="HR Document Management"
                            className="w-full max-w-md h-auto"
                        />
                    </div>
                </div>
                <hr className="border-t-2 border-gray-200 mt-12 mb-12" />
                <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 mb-25">
                    <div className="flex-1 flex flex-col items-start justify-center px-0 md:px-6">
                        <h2 className="text-3xl md:text-4xl font-semibold text-[#0377FF] mb-12 md:mb-8 text-left md:text-left w-full">
                            AI Lifecycle Support &<br />Optimisation
                        </h2>
                        <p className="text-1xl md:text-3xl font-inter font-normal text-black/90 leading-relaxed max-w-lg text-left">
                            Monitoring, retraining, dan pengembangan berkelanjutan agar performa AI tetap optimal seiring waktu.
                        </p>
                    </div>
                    <div className="flex-1 flex items-center justify-center px-0 md:px-6">
                        <img
                            src="/images/Solutions/ImageSolustions6.svg"
                            alt="HR Document Management"
                            className="w-full max-w-md h-auto"
                        />
                    </div>
                </div>
                <hr className="border-t-2 border-gray-200 mt-12 mb-12" />
            </section>
            <section className="py-16 bg-white text-center px-4 md:px-12">
                <h2 className="text-3xl md:text-4xl font-bold text-[#0377FF] mb-12">
                    Why <span className="text-[#0377FF]">Manusia.AI?</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
                    <div className="bg-[#0377FF] text-white rounded-lg shadow-lg p-6">
                        <h3 className="text-xl font-semibold mb-4">Pendekatan end-to-end</h3>
                        <p className="text-base font-light">
                            Dari strategi hingga implementasi untuk memastikan solusi AI yang berdampak.
                        </p>
                    </div>
                    <div className="bg-[#0377FF] text-white rounded-lg shadow-lg p-6">
                        <h3 className="text-xl font-semibold mb-4">Solusi 100% disesuaikan</h3>
                        <p className="text-base font-light">
                            Bukan plug-and-play generik, tetapi solusi yang relevan untuk bisnis Anda.
                        </p>
                    </div>
                    <div className="bg-[#0377FF] text-white rounded-lg shadow-lg p-6">
                        <h3 className="text-xl font-semibold mb-4">Fokus pada dampak bisnis</h3>
                        <p className="text-base font-light">
                            Bukan sekadar eksperimen teknologi, tetapi solusi yang memberikan hasil nyata.
                        </p>
                    </div>
                    <div className="bg-[#0377FF] text-white rounded-lg shadow-lg p-6">
                        <h3 className="text-xl font-semibold mb-4">Tim multidisiplin</h3>
                        <p className="text-base font-light">
                            AI engineers, data scientists, dan business consultants bekerja sama untuk Anda.
                        </p>
                    </div>
                </div>
            </section>

            {/* deskripsi */}
            <section className="py-16 bg-white text-center px-4 md:px-0">
                <h2 className="text-[2rem] md:text-[2.5rem] font-bold text-[#0377FF] mb-8 leading-tight">
                    Siap Bangun Solusi AI yang<br /> Relevan untuk Bisnis Anda?
                </h2>
                <p className="text-lg md:text-3xl font-medium text-[#0377FF] max-w-3xl mx-auto leading-snug">
                    Mari diskusi dan mulai dari yang paling berdampak.
                </p>
            </section>

            {/* CTA Section */}
            <section className="relative py-24 bg-white flex flex-col items-center justify-center overflow-hidden px-4 md:px-0">
                {/* Deskripsi */}
                <div className="text-center mb-12">
                    <h2 className="text-[2rem] md:text-[2.5rem] font-bold text-[#0377FF] mb-4 leading-tight">
                        Siap Bangun Solusi AI yang<br /> Relevan untuk Bisnis Anda?
                    </h2>
                    <p className="text-lg md:text-3xl font-medium text-[#0377FF] max-w-3xl mx-auto leading-snug">
                        Mari diskusi dan mulai dari yang paling berdampak.
                    </p>
                </div>

                {/* Card Container */}
                <div className="relative z-10 w-full flex justify-center items-center">
                    <div
                        className="flex flex-col md:flex-row items-center justify-between w-full max-w-5xl px-8 py-10 rounded-2xl"
                        style={{
                            background: "white",
                            boxShadow: "0 0 24px 4px #2196F3",
                            border: "1px solid #d3eaff"
                        }}
                    >
                        <div className="absolute left-1/2 -translate-x-20 -translate-y-10 w-auto h-20 animate-pulse delay-500 opacity-30 z-30 pointer-events-none">
                            <img src="/images/Image-BintangBG.svg" alt="Star" className="w-full h-full" />
                        </div>
                        {/* Left Side */}
                        <div className="flex-1 text-left pr-0 md:pr-10">
                            <h2 className="text-3xl md:text-4xl font-bold text-[#0377FF] mb-2">
                                Get started today!
                            </h2>
                            <p className="text-lg md:text-4xl font-light text-[#0377FF] max-w-3xl mx-auto leading-snug">
                                Siap Mempercepat Akses <br /> Pengetahuan Anda?
                            </p>
                        </div>

                        {/* Right Side */}
                        <div className="flex-1 flex flex-col justify-center items-center gap-4 w-full md:w-auto mt-0">
                            {/* Badge */}
                            <div className="w-full flex justify-center md:justify-end">
                                <div className="inline-flex items-center gap-2 bg-[#0075FF] text-white px-6 py-2 rounded-full text-base font-medium shadow-md">
                                    <img src="/images/Image-BintangBG.svg" alt="Star" className="w-5 h-5" />
                                    New: Our AI integration just landed
                                </div>
                            </div>
                            {/* Button */}
                            <div className="w-full flex justify-center md:justify-end">
                                <Link onClick={() => handleNavigation('/demo-email')}
                                    className="bg-[#0075FF] hover:bg-[#0066e0] text-white text-lg font-bold px-8 py-3 rounded-xl shadow-lg border border-[#A4D1FF] transition-transform transform hover:scale-105">
                                    Request Demo
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}