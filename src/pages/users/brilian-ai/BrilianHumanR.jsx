import React from 'react';

export default function BrilianHumanR() {
  return (
    <div className="w-full min-h-screen bg-white text-[#1669F2] font-inter relative overflow-x-hidden">
      {/* Hero Section */}
      <section className="min-h-screen py-20 px-6 md:px-16 flex items-center justify-center z-10 overflow-hidden relative">
        <div className="relative max-w-6xl w-full mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-0 md:px-10 gap-10">
          {/* Kiri: Teks dan Button */}
          <div className="flex-1 flex flex-col items-start justify-center">
            <div className="absolute -translate-x-[70px] -translate-y-[50px]">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-inter mb-5 leading-[1.3] pb-[10px] bg-gradient-to-b from-[#1669F2] to-[#1669F2] text-transparent bg-clip-text">
                Transform the Way HR <br />Teams Manage & Share <br />Knowledge
              </h1>
              <p className="text-base md:text-2xl text-[#1669F2] mb-8 font-medium max-w-lg text-left">
                Permudah Akses Informasi & Tingkatkan <br />Efisiensi Tim HR
              </p>
              <button className="px-6 py-3 rounded-xl font-semibold text-lg bg-gradient-to-r from-[#1669F2] to-[#3B82F6] text-white shadow-lg border border-blue-300 hover:scale-105 transition-all duration-200">
                Book a demo
              </button>
            </div>
          </div>
          {/* Kanan: Gambar */}
          <div className="flex-1 flex justify-center items-center">
            <img src="/images/BrilianAi/BrilianHumanR/BrilianHR1.svg" alt="Banking Chart" className="absolute z-1 w-full max-w-lg md:max-w-1xl h-auto object-contain drop-shadow-2xl translate-x-[100px] -translate-y-[50px]" />
          </div>
        </div>
      </section>

      {/* Glow BG */}
      <div className="relative w-full z-0">
        <div className="absolute w-full flex justify-center pointer-events-none -translate-y-[800px]">
          <img
            src="/images/BrilianAi/BrilianHumanR/BrilianHR1w.svg"
            alt="Glow Background"
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      {/* Solusi Section */}
      <section className="relative py-16 z-10 overflow-hidden">
        <div className="relative max-w-6xl mx-auto px-10">
          <h2 className="text-4xl md:text-5xl font-semibold text-[#1669F2] mb-8 text-center relative z-20">Solusi dari Brilian.AI</h2>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <p className="text-10xl md:text-2xl font-inter font-normal text-[#1669F2] leading-relaxed ml-[-70px] mt-[-90px]">
                Brilian.AI adalah platform AI-powered knowledge <br />
                management yang membantu tim HR menyimpan, <br />
                mengelola, dan membagikan informasi internal <br />
                secara cerdas. Karyawan cukup “tanya apa aja”, <br />
                dan AI akan menjawab langsung dari kebijakan <br />
                atau dokumen resmi perusahaan — seperti<br />
                asisten HR digital 24/7.
              </p>
            </div>
            <div className="flex justify-center relative z-10">
              <img
                src="/images/BrilianAi/BrilianHumanR/BrilianHR2.svg"
                alt="Solusi Brilian.AI"
                className="w-full max-w-md h-auto object-contain scale-[1.5]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative py-16 z-10 overflow-hidden">
        <h3 className="relative z-20 text-4xl md:text-5xl font-semibold text-[#1669F2] mb-40 text-center">Benefits for HR & Employees</h3>
        <div className="max-w-6xl mx-auto px-10 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1">
            <ul className="space-y-6 relative z-20">
              {[
                "Percepat akses ke informasi klinis & operasional",
                "Kurangi kesalahan akibat miskomunikasi prosedur",
                "Dukung akurasi & efisiensi pelayanan pasien",
                "Mempermudah pelatihan staf baru",
                "Meningkatkan kepatuhan terhadap regulasi",
              ].map((text, i) => (
                <li key={i} className="flex items-center gap-6 ml-[-30px]">
                  <span className="w-8 h-8 mt-1 rounded-full bg-gradient-to-b from-[#97BDFD] to-[#1A62DC] flex-shrink-0" />
                  <span className="text-1xl md:text-3xl font-inter font-normal text-[#1669F2] leading-relaxed">{text}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-none w-[180px] md:w-[280px] relative z-10">
            <img
              src="/images/BrilianAi/BrilianHumanR/BrilianHR3.svg"
              alt="Banking Chart"
              className="w-full max-w-md h-auto object-contain scale-[2.2] -translate-x-[60px] translate-y-[30px] mb-[100px]"
            />
          </div>
        </div>
      </section>

      {/* deskripsi */}
      <section className="py-20 bg-white text-center">
        <h2 className="text-2xl md:text-4xl font-semibold text-[#1A62DC] mb-6">
          Wujudkan Rumah Sakit yang <br />
          Lebih Cerdas & Responsif     </h2>
        <p className="text-lg md:text-xl text-[#1A62DC] max-w-2xl mx-auto leading-relaxed">
          Dengan Brilian.AI, tim rumah sakit Anda bisa mengakses pengetahuan penting dalam hitungan detik.      </p>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 bg-white flex items-center justify-center overflow-hidden">
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
            {/* Left Side */}
            <div className="flex-1 text-left pr-0 md:pr-10">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0075FF] mb-2">
                Get started today!
              </h2>
              <p className="text-xl md:text-2xl font-medium text-[#0075FF]">
                Siap Mempercepat Akses <br /> Pengetahuan Anda?
              </p>
            </div>

            {/* Right Side */}
            <div className="flex-1 flex flex-col items-center md:items-end gap-4 w-full md:w-auto mt-8 md:mt-0">
              {/* Badge */}
              <div className="flex justify-center w-full md:w-auto">
                <div className="inline-flex items-center gap-2 bg-[#0075FF] text-white px-6 py-2 rounded-full text-sm font-medium shadow-md">
                  <img src="/images/Image-BintangBG.svg" alt="Star" className="w-4 h-4" />
                  New: Our AI integration just landed
                </div>
              </div>

              {/* Button */}
              <div className="flex justify-center md:justify-end w-full md:w-auto">
                <button className="bg-[#0075FF] hover:bg-[#0066e0] text-white text-lg font-bold px-8 py-3 rounded-xl shadow-lg transition-transform transform hover:scale-105">
                  Request Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}