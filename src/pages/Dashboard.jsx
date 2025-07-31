import React from "react";

export default function Dashboard() {
  return (
    <div className="w-full min-h-screen font-inter relative overflow-x-hidden">
      {/* Banner Section */}
      <section className="w-full flex flex-col items-center justify-center pt-12 pb-0 relative overflow-hidden">
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

        {/* Banner Images as background with dark overlay */}
        <div className="absolute left-0 top-0 w-full h-full z-0 flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-blue-900/40 to-black/80 z-10"></div>
          <img
            src="/images/Home/ImagesHome1.jpg"
            alt="Banner 1"
            className="absolute w-full h-full object-cover opacity-100"
            draggable={false}
          />
        </div>
      </section>
      {/*Section Solusi dari Brilian.AI*/}
      <section className="relative py-20 overflow-hidden px-4 md:px-0">
        <h2 className="relative text-4xl md:text-5xl font-semibold text-[#00000] mb-20 text-center">
          What is <span className="text-[#0377FF]">Manusia.AI</span>
        </h2>
        <div className="flex justify-center px-0 md:px-6">
          <p className="text-base md:text-3xl font-inter font-normal text-black/90 text-center max-w-[60%] md:max-w-[70%] mt-2 mb-20">
            Manusia.AI adalah perusahaan konsultan dan custom AI yang berbasis di Jakarta, yang berfokus pada penyediaan layanan konsultasi strategi AI
            dan pengembangan solusi AI kustom untuk kebutuhan perusahaan skala
            menengah hingga besar. Kami tidak hanya memberikan saran strategis,
            kami juga membangun dan menerapkan solusi AI yang disesuaikan dengan
            konteks dan tantangan spesifik bisnis setiap customer.
          </p>
        </div>
        <div className="flex flex-col md:flex-row-reverse relative max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 ">
          <div className="flex-1 flex flex-col items-start justify-center px-0 md:px-6">
            <h2 className="text-4xl md:text-5xl font-semibold text-[#0377FF] mb-12 md:mb-8 text-left md:text-left w-full">
              Our Vision
            </h2>
            <p className="text-1xl md:text-3xl font-inter font-normal text-black/90 leading-relaxed max-w-lg text-left">
              Menjadi mitra transformasi AI terpercaya bagi perusahaan di Indonesia dan Asia Tenggara — dengan solusi yang relevan, berdampak nyata, dan mudah diadopsi.
            </p>
          </div>
          <div className="flex-1 flex items-center justify-center px-0 md:px-6">
            <img
              src="/images/Home/ImagesHome2.svg"
              alt="HR Document Management"
              className="w-full max-w-md h-auto"
            />
          </div>
        </div>
        <hr className="border-t-2 border-gray-200 mt-12 mb-12" />
        <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 mb-25">
          <div className="flex-1 flex flex-col items-start justify-center px-0 md:px-6">
            <lu className="text-4xl md:text-5xl font-semibold text-[#0377FF] mb-12 md:mb-8 text-left md:text-left w-full">
              Our Mission
            </lu>
            <ul className="space-y-6 relative z-20">
              <li className="flex items-center gap-6 ml-[-20px]">
                <span className="w-2 h-2 mt-1 rounded-full bg-black/90 flex-shrink-0" />
                <span className="text-1xl md:text-3xl font-inter font-normal text-black/90 leading-relaxed ">Percepat waktu respon klaim<br />& underwriting</span>
              </li>
              <li className="flex items-center gap-6 ml-[-20px]">
                <span className="w-2 h-2 mt-1 rounded-full bg-black/90 flex-shrink-0" />
                <span className="text-1xl md:text-3xl font-inter font-normal text-black/90 leading-relaxed">Pengambilan keputusan<br />lebih cepat & berbasis data</span>
              </li>
              <li className="flex items-center gap-6 ml-[-20px]">
                <span className="w-2 h-2 mt-1 rounded-full bg-black/90 flex-shrink-0" />
                <span className="text-1xl md:text-3xl font-inter font-normal text-black/90 leading-relaxed">Kurangi kesalahan akibat<br /> misinterpretasi dokumen</span>
              </li>
            </ul>
          </div>
          <div className="flex-1 flex items-center justify-center px-0 md:px-6">
            <img
              src="/images/Home/ImagesHome3.svg"
              alt="HR Document Management"
              className="w-full max-w-md h-auto"
            />
          </div>
        </div>
        <hr className="border-t-2 border-gray-200 mt-12 mb-12" />
      </section>

      {/*Section Solusi dari Brilian.AI*/}
      <section className="relative py-16 overflow-hidden px-4 md:px-0">
        <h2 className="relative text-4xl md:text-5xl font-semibold text-[#0377FF] mb-8 text-center">
          Brilian.AI
        </h2>
        <p className="text-bold md:text-4xl text-black/90 flex justify-center text-center px-0 md:px-6">
          AI-powered knowledge management platform
        </p>
        <p className="text-semibold md:text-3xl text-[#0377FF] flex justify-center text-center px-0 md:px-6 mb-20">
          yang membantu organisasi mengakses informasi<br />internal secara cepat,cerdas, dan aman
        </p>
        <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row-reverse items-center justify-between gap-10">
          <div className="flex-1 flex flex-col items-start justify-center px-0 md:px-6">
            <span className="text-1xl md:text-3xl font-inter font-normal text-black/90 leading-relaxed max-w-lg text-left mb-12">
              brilian.ai merupakan AI-powered knowledge management platform yang membantu organisasi mengakses informasi internal secara cepat,cerdas, dan aman.Dengan pencarian kontekstual dan otomatisasi dokumen.
            </span>
            <button className="px-8 py-4 rounded-xl font-semibold text-lg bg-[#0377FF] text-white shadow-lg border border-blue-300 hover:scale-105 transition-all duration-200">
              Request Demo
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center px-0 md:px-6">
            <img
              src="/images/Home/ImagesHome4.svg"
              alt="Solusi Rangkum.AI"
              className="w-full max-w-md h-auto"
            />
          </div>
        </div>
      </section>

      <section className="relative py-16 overflow-hidden px-4 bg-[#0377FF] md:px-0">
        <h2 className="relative text-4xl md:text-5xl font-semibold text-white mb-12 text-center">
          AI-powered knowledge<br />management platform
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Card 1 */}
          <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center">
            <h3 className="text-2xl font-semibold text-[#0377FF] mb-4 flex items-center gap-2">
              <i className="fa-solid fa-question-circle text-[#0377FF]"></i> Tanya Apa Aja
            </h3>
            <p className="text-base text-gray-600">
              Every meeting becomes notes, tasks, agendas, and follow-ups, automatically.
            </p>
          </div>
          {/* Card 2 */}
          <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center">
            <h3 className="text-2xl font-semibold text-[#0377FF] mb-4 flex items-center gap-2">
              <i className="fa-solid fa-file-alt text-[#0377FF]"></i> Buatin Laporan
            </h3>
            <p className="text-base text-gray-600">
              Get trusted answers from every corner of your Workspace, instantly and in full context.
            </p>
          </div>
          {/* Card 3 */}
          <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center">
            <h3 className="text-2xl font-semibold text-[#0377FF] mb-4 flex items-center gap-2">
              <i className="fa-solid fa-chart-line text-[#0377FF]"></i> Analisa Laporan
            </h3>
            <p className="text-base text-gray-600">
              Turn ideas into visuals, writing, and tasks with zero prompt engineering or manual work.
            </p>
          </div>
          {/* Card 4 */}
          <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center">
            <h3 className="text-2xl font-semibold text-[#0377FF] mb-4 flex items-center gap-2">
              <i className="fa-solid fa-search text-[#0377FF]"></i> Riset Market
            </h3>
            <p className="text-base text-gray-600">
              Every meeting becomes notes, tasks, agendas, and follow-ups, automatically.
            </p>
          </div>
          {/* Card 5 */}
          <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center">
            <h3 className="text-2xl font-semibold text-[#0377FF] mb-4 flex items-center gap-2">
              <i className="fa-solid fa-lightbulb text-[#0377FF]"></i> Pikirkan Ide
            </h3>
            <p className="text-base text-gray-600">
              Get trusted answers from every corner of your Workspace, instantly and in full context.
            </p>
          </div>
          {/* Card 6 */}
          <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center">
            <h3 className="text-2xl font-semibold text-[#0377FF] mb-4 flex items-center gap-2">
              <i className="fa-solid fa-users text-[#0377FF]"></i> Rangkumin Meeting
            </h3>
            <p className="text-base text-gray-600">
              Turn ideas into visuals, writing, and tasks with zero prompt engineering or manual work.
            </p>
          </div>
        </div>
        <div className="mt-12 items-center flex justify-center">
          <button className="bg-white text-[#0377FF] px-8 py-4 rounded-xl font-semibold shadow hover:bg-[#EAF3FF] transition">
            Request Demo
          </button>
        </div>
      </section>

      {/*Section Solusi dari Brilian.AI*/}
      <section className="relative py-16 overflow-hidden px-4 md:px-0">
        <h2 className="relative text-4xl md:text-5xl font-semibold text-[#0377FF] mb-8 text-center">
          Rangkum.AI
        </h2>
        <p className="text-bold md:text-4xl text-black/90 flex justify-center text-center px-0 md:px-6">
          Intelligent Document Processing (IDP)
        </p>
        <p className="text-semibold md:text-3xl text-[#0377FF] flex justify-center text-center px-0 md:px-6 mb-20">
          yang membantu organisasi mengakses informasi internal secara<br />cepat,cerdas, dan aman
        </p>
        <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="flex-1 flex flex-col items-start justify-center px-0 md:px-6">
            <span className="text-1xl md:text-3xl font-inter font-normal text-black/90 leading-relaxed max-w-lg text-left mb-12">
              Rangkum.ai adalah platform Intelligent Document Processing (IDP)berbasis AI yang membantu organisasi mengotomatisasi ekstraksi,pemrosesan, dan peringkasan dokumen, dari PDF, formulir, hingga laporan kompleks
            </span>
            <button className="px-8 py-4 rounded-xl font-semibold text-lg bg-[#0377FF] text-white shadow-lg border border-blue-300 hover:scale-105 transition-all duration-200">
              Request Demo
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center px-0 md:px-6">
            <img
              src="/images/Home/ImagesHome5.svg"
              alt="Solusi Rangkum.AI"
              className="w-full max-w-md h-auto"
            />
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#0377FF] text-center px-4 md:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
          Supported Document Types
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Identitas */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center gap-4 mb-4">
              <i className="fa-solid fa-id-card text-[#0377FF] text-3xl"></i>
              <h3 className="text-xl font-semibold text-[#0377FF]">Identitas</h3>
            </div>
            <ul className="space-y-6 relative z-20">
              <li className="flex items-center gap-6 ">
                <span className="w-6 h-6 mt-1 rounded-full bg-gradient-to-b from-[#97BDFD] to-[#1A62DC] flex-shrink-0" />
                <span className="text-1xl md:text-3xl font-inter font-normal text-[#0377FF] leading-relaxed">KTP</span>
              </li>
              <li className="flex items-center gap-6">
                <span className="w-6 h-6 mt-1 rounded-full bg-gradient-to-b from-[#97BDFD] to-[#1A62DC] flex-shrink-0" />
                <span className="text-1xl md:text-3xl font-inter font-normal text-[#0377FF] leading-relaxed">SIM</span>
              </li>
              <li className="flex items-center gap-6">
                <span className="w-6 h-6 mt-1 rounded-full bg-gradient-to-b from-[#97BDFD] to-[#1A62DC] flex-shrink-0" />
                <span className="text-1xl md:text-3xl font-inter font-normal text-[#0377FF] leading-relaxed">Passport</span>
              </li>
            </ul>
          </div>

          {/* Finansial */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center gap-4 mb-4">
              <i className="fa-solid fa-file-invoice-dollar text-[#0377FF] text-3xl"></i>
              <h3 className="text-xl font-semibold text-[#0377FF]">Finansial</h3>
            </div>
            <ul className="space-y-6 relative z-20">
              <li className="flex items-center gap-6">
                <span className="w-6 h-6 mt-1 rounded-full bg-gradient-to-b from-[#97BDFD] to-[#1A62DC] flex-shrink-0" />
                <span className="text-1xl md:text-3xl font-inter font-normal text-[#0377FF] leading-relaxed">Invoice</span>
              </li>
              <li className="flex items-center gap-6">
                <span className="w-6 h-6 mt-1 rounded-full bg-gradient-to-b from-[#97BDFD] to-[#1A62DC] flex-shrink-0" />
                <span className="text-1xl md:text-3xl font-inter font-normal text-[#0377FF] leading-relaxed">Faktur</span>
              </li>
              <li className="flex items-center gap-6">
                <span className="w-6 h-6 mt-1 rounded-full bg-gradient-to-b from-[#97BDFD] to-[#1A62DC] flex-shrink-0" />
                <span className="text-1xl md:text-3xl font-inter font-normal text-[#0377FF] leading-relaxed">NPWP</span>
              </li>
              <li className="flex items-center gap-6">
                <span className="w-6 h-6 mt-1 rounded-full bg-gradient-to-b from-[#97BDFD] to-[#1A62DC] flex-shrink-0" />
                <span className="text-1xl md:text-3xl font-inter font-normal text-[#0377FF] leading-relaxed">Rekening Koran</span>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center gap-4 mb-4">
              <i className="fa-solid fa-file-contract text-[#0377FF] text-3xl"></i>
              <h3 className="text-xl font-semibold text-[#0377FF]">Legal</h3>
            </div>
            <ul className="space-y-6 relative z-20">
              <li className="flex items-center gap-6">
                <span className="w-6 h-6 mt-1 rounded-full bg-gradient-to-b from-[#97BDFD] to-[#1A62DC] flex-shrink-0" />
                <span className="text-1xl md:text-3xl font-inter font-normal text-[#0377FF] leading-relaxed">Akta</span>
              </li>
              <li className="flex items-center gap-6">
                <span className="w-6 h-6 mt-1 rounded-full bg-gradient-to-b from-[#97BDFD] to-[#1A62DC] flex-shrink-0" />
                <span className="text-1xl md:text-3xl font-inter font-normal text-[#0377FF] leading-relaxed">SIUP</span>
              </li>
              <li className="flex items-center gap-6">
                <span className="w-6 h-6 mt-1 rounded-full bg-gradient-to-b from-[#97BDFD] to-[#1A62DC] flex-shrink-0" />
                <span className="text-1xl md:text-3xl font-inter font-normal text-[#0377FF] leading-relaxed">NIB</span>
              </li>
            </ul>
          </div>

          {/* HR */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center gap-4 mb-4">
              <i className="fa-solid fa-user-tie text-[#0377FF] text-3xl"></i>
              <h3 className="text-xl font-semibold text-[#0377FF]">HR</h3>
            </div>
            <ul className="space-y-6 relative z-20">
              <li className="flex items-center gap-6">
                <span className="w-6 h-6 mt-1 rounded-full bg-gradient-to-b from-[#97BDFD] to-[#1A62DC] flex-shrink-0" />
                <span className="text-1xl md:text-3xl font-inter font-normal text-[#0377FF] leading-relaxed">Ijazah</span>
              </li>
              <li className="flex items-center gap-6">
                <span className="w-6 h-6 mt-1 rounded-full bg-gradient-to-b from-[#97BDFD] to-[#1A62DC] flex-shrink-0" />
                <span className="text-1xl md:text-3xl font-inter font-normal text-[#0377FF] leading-relaxed">CV</span>
              </li>
              <li className="flex items-center gap-6">
                <span className="w-6 h-6 mt-1 rounded-full bg-gradient-to-b from-[#97BDFD] to-[#1A62DC] flex-shrink-0" />
                <span className="text-1xl md:text-3xl font-inter font-normal text-[#0377FF] leading-relaxed">Transkrip</span>
              </li>
            </ul>
          </div>

          {/* Format */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center gap-4 mb-4">
              <i className="fa-solid fa-file-alt text-[#0377FF] text-3xl"></i>
              <h3 className="text-xl font-semibold text-[#0377FF]">Format</h3>
            </div>
            <ul className="space-y-6 relative z-20">
              <li className="flex items-center gap-6">
                <span className="w-6 h-6 mt-1 rounded-full bg-gradient-to-b from-[#97BDFD] to-[#1A62DC] flex-shrink-0" />
                <span className="text-1xl md:text-3xl font-inter font-normal text-[#0377FF] leading-relaxed">PDF</span>
              </li>
              <li className="flex items-center gap-6">
                <span className="w-6 h-6 mt-1 rounded-full bg-gradient-to-b from-[#97BDFD] to-[#1A62DC] flex-shrink-0" />
                <span className="text-1xl md:text-3xl font-inter font-normal text-[#0377FF] leading-relaxed">JPG</span>
              </li>
              <li className="flex items-center gap-6">
                <span className="w-6 h-6 mt-1 rounded-full bg-gradient-to-b from-[#97BDFD] to-[#1A62DC] flex-shrink-0" />
                <span className="text-1xl md:text-3xl font-inter font-normal text-[#0377FF] leading-relaxed">PNG</span>
              </li>
            </ul>
          </div>

          {/* Kesehatan */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center gap-4 mb-4">
              <i className="fa-solid fa-file-medical text-[#0377FF] text-3xl"></i>
              <h3 className="text-xl font-semibold text-[#0377FF]">Kesehatan</h3>
            </div>
            <ul className="space-y-6 relative z-20">
              <li className="flex items-center gap-6">
                <span className="w-6 h-6 mt-1 rounded-full bg-gradient-to-b from-[#97BDFD] to-[#1A62DC] flex-shrink-0" />
                <span className="text-1xl md:text-3xl font-inter font-normal text-[#0377FF] leading-relaxed">Rekam Medis</span>
              </li>
              <li className="flex items-center gap-6">
                <span className="w-6 h-6 mt-1 rounded-full bg-gradient-to-b from-[#97BDFD] to-[#1A62DC] flex-shrink-0" />
                <span className="text-1xl md:text-3xl font-inter font-normal text-[#0377FF] leading-relaxed">Surat Rujukan</span>
              </li>
              <li className="flex items-center gap-6">
                <span className="w-6 h-6 mt-1 rounded-full bg-gradient-to-b from-[#97BDFD] to-[#1A62DC] flex-shrink-0" />
                <span className="text-1xl md:text-3xl font-inter font-normal text-[#0377FF] leading-relaxed">Kuitansi RS</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12">
          <button className="bg-white text-[#0377FF] px-8 py-4 rounded-xl font-semibold shadow hover:bg-[#EAF3FF] transition">
            Request Demo
          </button>
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
      <section className="relative py-24 bg-white flex items-center justify-center overflow-hidden px-4 md:px-0">
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
                <button className="bg-[#0075FF] hover:bg-[#0066e0] text-white text-lg font-bold px-8 py-3 rounded-xl shadow-lg border border-[#A4D1FF] transition-transform transform hover:scale-105">
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