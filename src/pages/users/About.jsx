import React from "react";
import { Outlet, Link } from 'react-router-dom';

export default function About() {
    const handleNavigation = (url) => {
        window.location.href = url; // Force reload the page
    };
    return (
        <div className="w-full min-h-screen font-inter relative overflow-x-hidden">
            {/* Banner Section */}
            <section className="w-full flex flex-col items-center justify-center pt-12 pb-0 relative overflow-hidden bg-white">
                <div className="relative z-10 w-full flex flex-col items-start justify-center translate-x-[70px] h-[500px] px-4">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-500/30 rounded-full px-6 py-3 mb-8">
                        <img
                            src="/images/Image-BintangBG.svg"
                            alt="Star"
                            className="w-5 h-5 animate-pulse opacity-60"
                        />
                        <span className="text-blue-300 text-sm font-inter font-normal">
                            New: Our AI integration just landed
                        </span>
                    </div>

                    {/* Main Title */}
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6  leading-tight">
                        Custom AI for Your <br />
                        Real Business Challenges
                    </h1>

                    {/* Subtitle */}
                    <p className="text-lg md:text-xl text-white/90 mb-8 text-center max-w-[60%] font-medium">
                        From Data to Insights: Tailored AI Solutions for Enterprise Growth
                    </p>

                    {/* CTA Button */}
                    <div className="flex justify-center">
                        <button className="flex justify-center items-center h-10 px-10 text-white bg-blue-600/20 border border-blue-500/30 rounded-md mb-12 hover:bg-blue-600/30 hover:border-blue-500/60 hover:shadow-md hover:scale-105 transition-all duration-200 ease-in-out cursor-pointer font-inter font-light">
                            Start for free
                        </button>
                    </div>
                </div>

                {/* Banner Images as background */}
                <div className="absolute left-0 top-0 w-full h-full z-0 flex items-center justify-center">
                    {/* Hapus overlay gradient */}
                    <img
                        src="/images/Home/ImagesHome1.jpg"
                        alt="Banner 1"
                        className="absolute w-full h-full object-cover opacity-100"
                        draggable={false}
                        style={{ background: "#fff" }}
                    />
                </div>
            </section>
            {/* Section Solusi dari Brilian.AI */}
            <section className="relative py-20 bg-white">
                <div className="max-w-6xl mx-auto text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-[#00000] mb-12">
                        What is     <span className="text-[#0377FF]">Manusia.AI</span>
                    </h2>
                    <p className="text-lg md:text-2xl text-gray-800 max-w-5xl mx-auto">
                        Manusia.AI adalah perusahaan konsultan dan custom AI yang berbasis di Jakarta, yang berfokus pada penyediaan layanan konsultasi strategi AI
                        dan pengembangan solusi AI kustom untuk kebutuhan perusahaan skala
                        menengah hingga besar. Kami tidak hanya memberikan saran strategis,
                        kami juga membangun dan menerapkan solusi AI yang disesuaikan dengan
                        konteks dan tantangan spesifik bisnis setiap customer.
                    </p>
                </div>
                <div className="flex flex-col md:flex-row-reverse relative max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 mt-12 mb-20">
                    <div className="flex-1 flex flex-col items-start justify-center px-0 md:px-6">
                        <h2 className="text-4xl md:text-5xl font-semibold text-[#0377FF] mb-12 md:mb-8 text-left md:text-left w-full">
                            Our Vision
                        </h2>
                        <p className="text-lg md:text-2xl text-gray-800 max-w-4xl mx-auto leading-relaxed max-w-lg text-left">
                            Menjadi mitra transformasi AI terpercaya bagi perusahaan di Indonesia dan Asia Tenggara — dengan solusi yang relevan, berdampak nyata, dan mudah diadopsi.
                        </p>
                    </div>
                    <div className="flex-1 flex items-center justify-center px-0 md:px-6">
                        <img
                            src="/images/About/ImagesAbout1.svg"
                            alt="HR Document Management"
                            className="w-full max-w-md h-auto"
                        />
                    </div>
                </div>

                <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 mt-20">
                    <div className="flex-1 flex flex-col items-start justify-center px-0 md:px-6">
                        <h2 className="text-4xl md:text-5xl font-semibold text-[#0377FF] mb-12 md:mb-8 text-left md:text-left w-full">
                            Our Mission
                        </h2>
                        <ul className="space-y-6 relative z-20">
                            <li className="flex items-center gap-6 ml-[20px]">
                                <span className="w-2 h-2 mt-1 rounded-full bg-gray-800 flex-shrink-0" />
                                <span className="text-lg md:text-2xl font-inter font-normal text-gray-800 leading-relaxed ">Percepat waktu respon klaim<br />& underwriting</span>
                            </li>
                            <li className="flex items-center gap-6 ml-[20px]">
                                <span className="w-2 h-2 mt-1 rounded-full bg-gray-800 flex-shrink-0" />
                                <span className="text-lg md:text-2xl font-inter font-normal text-gray-800 leading-relaxed">Pengambilan keputusan<br />lebih cepat & berbasis data</span>
                            </li>
                            <li className="flex items-center gap-6 ml-[20px]">
                                <span className="w-2 h-2 mt-1 rounded-full bg-gray-800 flex-shrink-0" />
                                <span className="text-lg md:text-2xl font-inter font-normal text-gray-800 leading-relaxed">Kurangi kesalahan akibat<br /> misinterpretasi dokumen</span>
                            </li>
                        </ul>
                    </div>
                    <div className="flex-1 flex items-center justify-center px-0 md:px-6">
                        <img
                            src="/images/About/ImagesAbout2.svg"
                            alt="HR Document Management"
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

            <section className="py-20 bg-white px-2 md:px-0">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold text-[#0377FF] mb-16 text-center">
                        Contact Us
                    </h2>
                    <p className="text-lg md:text-2xl text-gray-800 max-w-4xl mx-auto leading-relaxed text-center mb-12">
                        Manusia.AI adalah perusahaan konsultan dan custom AI yang berbasis di Jakarta, yang berfokus pada penyediaan layanan konsultasi strategi AI dan pengembangan solusi AI kustom
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
                        {/* Contact Form */}
                        <div className="bg-white border border-blue-200/50 rounded-2xl shadow-lg p-8 md:p-10"
                            style={{ boxShadow: '0 8px 32px rgba(33, 150, 243, 0.12)' }}>
                            <h2 className="text-2xl md:text-3xl font-bold text-[#0377FF] mb-2">Contact Us</h2>
                            <p className="text-[#0377FF] text-sm mb-6">
                                Don't have time to call? Send your enquiry to the Manusia.AI team and we'll get back to you quickly. If you do not receive a response, please reach out via WhatsApp.
                            </p>
                            <form className="space-y-5">
                                <div>
                                    <label className="block text-[#0377FF] text-sm mb-2 font-semibold">Name</label>
                                    <input
                                        type="text"
                                        placeholder="Your full name"
                                        className="w-full bg-[#F0F7FF] border-2 border-[#E3F2FD] rounded-xl px-6 py-3 text-[#2196F3] placeholder-[#90CAF9] focus:outline-none focus:border-[#2196F3] transition-all shadow-[0_4px_12px_0_rgba(3,119,255,0.12)]"
                                    />
                                </div>
                                <div>
                                    <label className="block text-[#0377FF] text-sm mb-2 font-semibold">Email</label>
                                    <input
                                        type="email"
                                        placeholder="Your email address"
                                        className="w-full bg-[#F0F7FF] border-2 border-[#E3F2FD] rounded-xl px-6 py-3 text-[#2196F3] placeholder-[#90CAF9] focus:outline-none focus:border-[#2196F3] transition-all shadow-[0_4px_12px_0_rgba(3,119,255,0.12)]"
                                    />
                                </div>
                                <div>
                                    <label className="block text-[#0377FF] text-sm mb-2 font-semibold">Company Name</label>
                                    <input
                                        type="text"
                                        placeholder="Enter Company Name"
                                        className="w-full bg-[#F0F7FF] border-2 border-[#E3F2FD] rounded-xl px-6 py-3 text-[#2196F3] placeholder-[#90CAF9] focus:outline-none focus:border-[#2196F3] transition-all shadow-[0_4px_12px_0_rgba(3,119,255,0.12)]"
                                    />
                                </div>
                                <div>
                                    <label className="block text-[#0377FF] text-sm mb-2 font-semibold">Phone Number</label>
                                    <input
                                        type="text"
                                        placeholder="Enter Phone Number"
                                        className="w-full bg-[#F0F7FF] border-2 border-[#E3F2FD] rounded-xl px-6 py-3 text-[#2196F3] placeholder-[#90CAF9] focus:outline-none focus:border-[#2196F3] transition-all shadow-[0_4px_12px_0_rgba(3,119,255,0.12)]"
                                    />
                                </div>
                                <div>
                                    <label className="block text-[#0377FF] text-sm mb-2 font-semibold">How can we help</label>
                                    <textarea
                                        placeholder="How can we help you"
                                        rows="4"
                                        className="w-full bg-[#F0F7FF] border-2 border-[#E3F2FD] rounded-xl px-6 py-3 text-[#2196F3] placeholder-[#90CAF9] focus:outline-none focus:border-[#2196F3] transition-all resize-none shadow-[0_4px_12px_0_rgba(3,119,255,0.12)]"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-[#0377FF] hover:bg-blue-600 text-white py-3 rounded-xl font-semibold text-base shadow-[0_4px_12px_0_rgba(3,119,255,0.12)] transition-colors duration-200"
                                >
                                    Submit Message
                                </button>
                            </form>
                        </div>
                        {/* Info & Map */}
                        <div className="flex flex-col justify-start items-start">
                            <h1 className="text-2xl md:text-3xl font-bold text-[#0377FF] mb-4 mt-2 md:mt-20 leading-tight">
                                Bring Your Ideas to Life<br />
                                with Manusia.AI.
                            </h1>
                            <p className="text-[#0377FF] text-base mb-8 max-w-md">
                                Reach out today — let's craft intelligent solutions that accelerate your business transformation.
                            </p>
                            <h3 className="text-xl font-bold text-[#0377FF] mb-2">Our Office</h3>
                            <div className="flex items-start gap-3 mb-4">
                                <div className="w-6 h-6 bg-[#2196F3] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-[#0377FF] text-sm leading-relaxed">
                                        Jl. Siantar No.18, RT.1/RW.2, Cideng,<br />
                                        Kecamatan Gambir, Kota Jakarta Pusat,<br />
                                        Daerah Khusus Ibukota Jakarta 10150
                                    </p>
                                </div>
                            </div>
                            <div className="w-full h-64 bg-[#F0F7FF] border-2 border-[#E3F2FD] rounded-2xl overflow-hidden mt-4">
                                <iframe
                                    title="Office Location Map"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.7503560738334!2d106.81235011476955!3d-6.167364095531146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5d2129e2647%3A0x67c1035a121f7f4a!2sJl.%20Siantar%20No.18%2C%20Cideng%2C%20Kec.%20Gambir%2C%20Kota%20Jakarta%20Pusat%2C%20Daerah%20Khusus%20Ibukota%20Jakarta%2010150!5e0!3m2!1sen!2sid!4v1722211111330!5m2!1sen!2sid"
                                    width="100%"
                                    height="100%"
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="w-full h-full border-0 rounded-2xl"
                                />
                            </div>
                        </div>
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