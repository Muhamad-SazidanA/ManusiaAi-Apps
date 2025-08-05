import React from 'react';
import { Link } from 'react-router-dom';

export default function BrilianBanking() {
  const handleNavigation = (url) => {
    window.location.href = url; // Force reload the page
  };
  return (
    <div className="w-full min-h-screen bg-white text-blue-800 font-inter relative overflow-x-hidden">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-white overflow-hidden relative px-4 md:px-0">
        <div className="relative max-w-6xl w-full mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10 py-10 md:py-0">

          {/* Kiri: Teks dan Button */}
          <div className="flex-1 flex flex-col items-center md:items-start justify-center text-center md:text-left px-0 md:px-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold font-inter mb-5 leading-snug">
              <span className="bg-[#0377FF] text-transparent bg-clip-text">
                Smarter Decision-Making<br className="hidden sm:block" />Banking & Multifinance
              </span>
            </h1>
            <p className="text-sm sm:text-base md:text-2xl text-[#0377FF] mb-8 font-light max-w-md">
              Ubah Data Tak Terstruktur Jadi Keputusan yang Cerdas
            </p>
            <Link
              onClick={() => handleNavigation('/demo-email')}
              className="px-6 py-3 md:px-8 md:py-4 rounded-xl font-semibold text-sm md:text-lg bg-[#0377FF] text-white shadow-lg border border-blue-300 hover:scale-105 transition-all duration-200"
            >
              Request Demo
            </Link>
          </div>

          {/* Kanan: Gambar */}
          <div className="flex-1 flex items-center justify-center px-0 md:px-6">
            <img
              src="/images/BrilianAi/BrilianBanking/BrilianBanking1.svg"
              alt="HR Document Management"
              className="w-full max-w-[300px] sm:max-w-md md:max-w-md h-auto"
            />
          </div>

        </div>
      </section>


      {/Section Solusi dari Brilian.AI/}
      <section className="relative py-16 overflow-hidden px-4 md:px-0">
        <h2 className="text-3xl md:text-4xl font-semibold text-[#0377FF] mb-20 text-left md:text-center w-full">
          Solusi dari Brilian.AI
        </h2>
        <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="flex-1 flex flex-col items-start justify-center px-0 md:px-6">
            <p className="text-base md:text-2xl font-inter font-normal text-black/90 leading-relaxed max-w-lg text-left">
              Brilian.AI adalah platform AI-powered knowledge management yang membantu tim perbankan & multifinance menemukan informasi penting, merangkum dokumen, dan menjawab pertanyaan secara instan—layaknya “ChatGPT internal” yang aman dan terkendali.
            </p>
          </div>
          <div className="flex-1 flex items-center justify-center px-0 md:px-6">
            <img
              src="/images/BrilianAi/BrilianBanking/BrilianBanking2.svg"
              alt="Solusi Brilian.AI"
              className="w-full max-w-md h-auto"
            />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative py-16 overflow-hidden px-4 md:px-0">
        <h3 className="relative z-20 text-4xl md:text-5xl font-semibold text-[#0377FF] mb-20 text-center">Benefits for Banks & Multifinance</h3>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1">
            <ul className="space-y-6 relative z-20">
              <li className="flex items-center gap-6 ml-[-30px]">
                <span className="w-8 h-8 mt-1 rounded-full bg-gradient-to-b from-[#97BDFD] to-[#1A62DC] flex-shrink-0" />
                <span className="text-1xl md:text-3xl font-inter font-normal text-[#0377FF] leading-relaxed ">Menghemat waktu pencarian<br /> informasi & riset internal<br />hingga 80%</span>
              </li>
              <li className="flex items-center gap-6 ml-[-30px]">
                <span className="w-8 h-8 mt-1 rounded-full bg-gradient-to-b from-[#97BDFD] to-[#1A62DC] flex-shrink-0" />
                <span className="text-1xl md:text-3xl font-inter font-normal text-[#0377FF] leading-relaxed">Mempercepat pengambilan<br />keputusan kredit & operasional</span>
              </li>
              <li className="flex items-center gap-6 ml-[-30px]">
                <span className="w-8 h-8 mt-1 rounded-full bg-gradient-to-b from-[#97BDFD] to-[#1A62DC] flex-shrink-0" />
                <span className="text-1xl md:text-3xl font-inter font-normal text-[#0377FF] leading-relaxed">Meningkatkan konsistensi<br />informasi antar cabang</span>
              </li>
              <li className="flex items-center gap-6 ml-[-30px]">
                <span className="w-8 h-8 mt-1 rounded-full bg-gradient-to-b from-[#97BDFD] to-[#1A62DC] flex-shrink-0" />
                <span className="text-1xl md:text-3xl font-inter font-normal text-[#0377FF] leading-relaxed">Mendukung efisiensi customer<br />service dan complaint handling</span>
              </li>
            </ul>
          </div>
          <div className="flex-none w-[180px] md:w-[280px] relative z-10">
            <img
              src="/images/BrilianAi/BrilianBanking/BrilianBanking3.svg"
              alt="Banking Chart"
              className="w-full max-w-md h-auto object-contain scale-[2.2] -translate-x-[60px] translate-y-[30px] mb-[100px]"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 bg-white flex flex-col items-center justify-center overflow-hidden px-4 md:px-0">
        {/* Deskripsi */}
        <div className="text-center mb-12">
          <h2 className="text-[2rem] md:text-[2.5rem] font-bold text-[#0377FF] mb-4 leading-tight">
            Siap Transformasi Pengetahuan <br />Menjadi Keunggulan Kompetitif?
          </h2>
          <p className="text-lg md:text-3xl font-medium text-[#0377FF] max-w-3xl mx-auto leading-snug">
            Brilian.AI bantu tim Anda mengambil keputusan lebih cepat, akurat, dan berbasis data internal yang selama ini belum tergali.
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