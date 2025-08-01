import React from 'react';
import { Link } from 'react-router-dom';

export default function BrilianHospital() {
  const handleNavigation = (url) => {
    window.location.href = url; // Force reload the page
  };
  return (
    <div className="w-full min-h-screen bg-white text-blue-800 font-inter relative overflow-x-hidden">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-white overflow-hidden relative px-4 md:px-0">
        <div className="relative max-w-6xl w-full mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10">
          {/* Kiri: Teks dan Button */}
          <div className="flex-1 flex flex-col items-start justify-center px-0 md:px-6">
            <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold font-inter mb-5 leading-[1.3] pb-[10px]">
              <span className="bg-[#0377FF] text-transparent bg-clip-text whitespace-nowrap">
                Smarter Knowledge Access<br />for Smarter Healthcare
              </span>
            </h1>
            <p className="text-base md:text-3xl text-black/90 mb-8 font-light max-w-lg text-[#0377FF] text-left">
              Satu Sumber Informasi untuk Tim Medis & Operasional
            </p>
            <Link onClick={() => handleNavigation('/demo-email')}
              className="px-8 py-4 rounded-xl font-semibold text-lg bg-[#0377FF] text-white shadow-lg border border-blue-300 hover:scale-105 transition-all duration-200">
              Request Demo
            </Link>
          </div>
          {/* Kanan: Gambar */}
          <div className="flex-1 flex items-center justify-center px-0 md:px-6">
            <img
              src="/images/BrilianAi/BrilianHospital/BrilianHC1.svg"
              alt="HR Document Management"
              className="w-full max-w-md"
            />
          </div>
        </div>
      </section>

      {/*Section Solusi dari Brilian.AI*/}
      <section className="relative py-16 overflow-hidden px-4 md:px-0">
        <h2 className="text-3xl md:text-4xl font-semibold text-[#0377FF] mb-20 text-left md:text-center w-full">
          Solusi dari Brilian.AI
        </h2>
        <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="flex-1 flex flex-col items-start justify-center px-0 md:px-6">
            <p className="text-base md:text-2xl font-inter font-normal text-black/90 leading-relaxed max-w-lg text-left">
              Brilian.AI adalah platform AI-powered knowledge management yang membantu tim rumah sakit menemukan, memahami, dan memanfaatkan pengetahuan internal — cukup dengan bertanya layaknya ke ChatGPT internal, dari SOP IGD hingga pedoman BPJS.
            </p>
          </div>
          <div className="flex-1 flex items-center justify-center px-0 md:px-6">
            <img
              src="/images/BrilianAi/BrilianHospital/BrilianHC2.svg"
              alt="Solusi Brilian.AI"
              className="w-full max-w-md h-auto"
            />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative py-16 overflow-hidden px-4 md:px-0">
        <h3 className="relative z-20 text-4xl md:text-5xl font-semibold text-[#0377FF] mb-20 text-center">Benefits for Hospitals</h3>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1">
            <ul className="space-y-6 relative z-20">
              <li className="flex items-center gap-6 ml-[-30px]">
                <span className="w-8 h-8 mt-1 rounded-full bg-gradient-to-b from-[#97BDFD] to-[#1A62DC] flex-shrink-0" />
                <span className="text-1xl md:text-3xl font-inter font-normal text-[#0377FF] leading-relaxed ">Percepat akses ke informasi<br />klinis & operasional<br />80%</span>
              </li>
              <li className="flex items-center gap-6 ml-[-30px]">
                <span className="w-8 h-8 mt-1 rounded-full bg-gradient-to-b from-[#97BDFD] to-[#1A62DC] flex-shrink-0" />
                <span className="text-1xl md:text-3xl font-inter font-normal text-[#0377FF] leading-relaxed">Kurangi kesalahan akibat<br /> miskomunikasi prosedur</span>
              </li>
              <li className="flex items-center gap-6 ml-[-30px]">
                <span className="w-8 h-8 mt-1 rounded-full bg-gradient-to-b from-[#97BDFD] to-[#1A62DC] flex-shrink-0" />
                <span className="text-1xl md:text-3xl font-inter font-normal text-[#0377FF] leading-relaxed">Dukung akurasi & efisiensi<br />pelayanan pasien</span>
              </li>
              <li className="flex items-center gap-6 ml-[-30px]">
                <span className="w-8 h-8 mt-1 rounded-full bg-gradient-to-b from-[#97BDFD] to-[#1A62DC] flex-shrink-0" />
                <span className="text-1xl md:text-3xl font-inter font-normal text-[#0377FF] leading-relaxed">Mempermudah<br />pelatihan staf baru</span>
              </li>
            </ul>
          </div>
          <div className="flex-none w-[180px] md:w-[280px] relative z-10">
            <img
              src="/images/BrilianAi/BrilianHospital/BrilianHC3.svg"
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
            Wujudkan Rumah Sakit yang<br />Lebih Cerdas & Responsif
          </h2>
          <p className="text-lg md:text-3xl font-medium text-[#0377FF] max-w-3xl mx-auto leading-snug">
            Dengan Brilian.AI, tim rumah sakit Anda bisa mengakses pengetahuan penting dalam hitungan detik.
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