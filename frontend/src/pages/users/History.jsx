import React from "react";
import { Outlet, Link } from 'react-router-dom';

export default function History() {
    const handleNavigation = (url) => {
        window.location.href = url; // Force reload the page
    };
    return (
        <div className="w-full min-h-screen font-inter relative overflow-x-hidden">
            {/* Banner Section */}
            <section className="w-full flex flex-col items-center justify-center pt-12 pb-0 relative overflow-hidden bg-white">
                <div className="relative z-10 w-full flex flex-col items-start md:items-start justify-center h-[500px] px-4 md:px-8 lg:px-16 pt-10 md:pt-0">
                    {/* Badge */}
                    <div className="w-full flex justify-center md:justify-start">
                        <div className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-500/30 rounded-full px-6 py-3 mb-6">
                            <img
                                src="/images/Image-BintangBG.svg"
                                alt="Star"
                                className="w-5 h-5 animate-pulse opacity-60"
                            />
                            <span className="text-blue-300 text-sm font-inter font-bold">
                                Best Indonesia AI Expert
                            </span>
                        </div>
                    </div>


                    {/* Main Title */}
                    <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight text-center md:text-left">
                        Empowering Humans<br />with AI.
                    </h1>

                    {/* Subtitle */}
                    <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 text-center md:text-left max-w-full md:max-w-[70%] font-medium">
                        Manusia.AI is here to help companies design, build, and integrate relevant and impactful AI solutions.
                    </p>

                    {/* CTA Button */}
                    <div className="w-full flex justify-center md:justify-start">
                        <button className="flex justify-center items-center h-10 px-10 text-white bg-blue-600/20 border border-blue-500/30 rounded-md hover:bg-blue-600/30 hover:border-blue-500/60 hover:shadow-md hover:scale-105 transition-all duration-200 ease-in-out cursor-pointer font-inter font-semibold">
                            Start For Free
                        </button>
                    </div>

                </div>

                {/* Banner Images as background */}
                <div className="absolute left-0 top-0 w-full h-full z-0 flex items-center justify-center">
                    {/* Hapus overlay gradient */}
                    <img
                        src="/images/Banner/BannerAbout.svg"
                        alt="Banner 1"
                        className="absolute w-full h-full object-cover opacity-100"
                        draggable={false}
                        style={{ background: "#fff" }}
                    />
                </div>
            </section>
            {/* Section Solusi dari Brilian.AI */}
            <section className="relative py-20 bg-white px-4 md:px-8">
                {/* Judul & Deskripsi */}
                <div className="max-w-6xl mx-auto text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-black mb-12">
                        What is <span className="text-[#0377FF]">Manusia.AI</span>
                    </h2>
                    <p className="text-lg md:text-2xl text-gray-800 max-w-5xl mx-auto leading-relaxed">
                        Manusia.AI adalah perusahaan konsultan dan custom AI yang berbasis di Jakarta, yang berfokus pada penyediaan layanan konsultasi strategi AI
                        dan pengembangan solusi AI kustom untuk kebutuhan perusahaan skala
                        menengah hingga besar. Kami tidak hanya memberikan saran strategis,
                        kami juga membangun dan menerapkan solusi AI yang disesuaikan dengan
                        konteks dan tantangan spesifik bisnis setiap customer.
                    </p>
                </div>

                {/* Our Vision */}
                <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-10 max-w-6xl mx-auto mt-12 mb-20">
                    {/* Text */}
                    <div className="flex-1 flex flex-col items-start md:items-start justify-center text-center md:text-left">
                        <h2 className="text-3xl md:text-5xl font-semibold text-[#0377FF] mb-6 w-full text-center md:text-left">
                            Our Vision
                        </h2>
                        <p className="text-base md:text-2xl text-gray-800 leading-relaxed max-w-lg mx-auto md:mx-0">
                            Menjadi mitra transformasi AI terpercaya bagi perusahaan di Indonesia dan Asia Tenggara — dengan solusi yang relevan, berdampak nyata, dan mudah diadopsi.
                        </p>
                    </div>

                    {/* Image */}
                    <div className="flex-1 flex justify-center items-center">
                        <img
                            src="/images/About/ImagesAbout1.svg"
                            alt="Vision"
                            className="w-full max-w-md h-auto"
                        />
                    </div>
                </div>

                {/* Our Mission */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-10 max-w-6xl mx-auto mt-20">
                    {/* Text */}
                    <div className="flex-1 flex flex-col items-start md:items-start justify-center text-center md:text-left">
                        <h2 className="text-3xl md:text-5xl font-semibold text-[#0377FF] mb-6 w-full text-center md:text-left">
                            Our Mission
                        </h2>
                        <ul className="space-y-6 mt-4">
                            {[
                                "Percepat waktu respon klaim & underwriting",
                                "Pengambilan keputusan lebih cepat & berbasis data",
                                "Kurangi kesalahan akibat misinterpretasi dokumen"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-4 ml-4 md:ml-6">
                                    <span className="w-2 h-2 mt-2 rounded-full bg-gray-800 flex-shrink-0" />
                                    <span className="text-base md:text-2xl font-normal text-gray-800 leading-relaxed text-left">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Image */}
                    <div className="flex-1 flex justify-center items-center">
                        <img
                            src="/images/About/ImagesAbout2.svg"
                            alt="Mission"
                            className="w-full max-w-md h-auto"
                        />
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white text-center px-4 md:px-12">
                <h2 className="text-3xl md:text-5xl font-bold text-[#00000] mb-20">
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
                        className="flex flex-col md:flex-row items-center justify-between w-full max-w-5xl px-6 py-10 rounded-2xl text-center md:text-left"
                        style={{
                            background: "white",
                            boxShadow: "0 0 24px 8px #2196F3",
                            border: "1px solid #d3eaff"
                        }}
                    >
                        {/* Bintang - hanya tampil di md ke atas */}
                        <div className="absolute left-1/2 -translate-x-20 -translate-y-10 w-auto h-20 animate-pulse delay-500 opacity-30 z-30 pointer-events-none hidden md:block">
                            <img src="/images/Image-BintangBG.svg" alt="Star" className="w-full h-full" />
                        </div>

                        {/* Left Side */}
                        <div className="flex-1 pr-0 md:pr-10 mb-6 md:mb-0">
                            <h2 className="text-2xl md:text-4xl font-bold text-[#0377FF] mb-2">
                                Get started today!
                            </h2>
                            <p className="text-base md:text-2xl font-light text-[#0377FF] leading-snug">
                                Temukan bagaimana AI bisa mempercepat proses dan keputusan bisnis Anda.
                            </p>
                        </div>

                        {/* Right Side */}
                        <div className="flex-1 flex flex-col justify-center items-center md:items-end gap-3 w-full md:w-auto">
                            {/* Badge */}
                            <div className="w-full flex justify-center md:justify-end">
                                <div className="inline-flex items-center gap-2 bg-[#0075FF] text-white px-4 py-1.5 md:px-6 md:py-2 rounded-full text-sm md:text-base font-medium shadow-md">
                                    <img src="/images/Image-BintangBG.svg" alt="Star" className="w-4 h-4 md:w-5 md:h-5" />
                                    New: Our AI integration just landed
                                </div>
                            </div>
                            {/* Button */}
                            <div className="w-full flex justify-center md:justify-end">
                                <Link
                                    onClick={() => handleNavigation('/demo-email')}
                                    className="bg-[#0075FF] hover:bg-[#0066e0] text-white text-base md:text-lg font-bold px-6 py-2 md:px-8 md:py-3 rounded-xl shadow-lg border border-[#A4D1FF] transition-transform transform hover:scale-105"
                                >
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