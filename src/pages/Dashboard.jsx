import React from "react";

export default function Dashboard() {
  return (
    <div className="w-full min-h-screen bg-[#F6FBFF] text-[#1A2B4C] font-inter flex flex-col items-center">
      {/* Banner Section */}
      <section className="w-full flex flex-col items-center justify-center pt-12 pb-0 relative overflow-hidden">
        <div className="relative z-10 w-full flex flex-col items-center justify-center h-[400px] px-4">
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
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 text-center leading-tight">
            Custom AI for Your <br />
            Real Business Challenges
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-white/90 mb-8 text-center max-w-2xl font-medium">
            From Data to Insights: Tailored AI Solutions for Enterprise Growth
          </p>

          {/* CTA Button */}
          <button className="bg-[#2196F3] text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:bg-[#1565C0] transition-all duration-300 hover:scale-105">
            Star for free
          </button>
        </div>

        {/* Banner Images as background with dark overlay */}
        <div className="absolute left-0 top-0 w-full h-full z-0 flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-blue-900/40 to-black/80 z-10"></div>
          <img
            src="/images/Home/ImagesHome1.svg"
            alt="Banner 1"
            className="absolute w-auto h-auto object-cover opacity-100"
            draggable={false}
          />
        </div>
      </section>

      {/* What is Manusia.AI */}
      <section className="w-full bg-white py-10 px-4 flex flex-col items-center">
        <div className="flex flex-col items-center max-w-3xl mx-auto">
          <div className="flex items-center gap-4 mb-2">
            <img
              src="/images/Image-BintangBG.svg"
              alt="Star"
              className="w-5 h-5 animate-pulse opacity-60"
            />
            <h2 className="text-2xl md:text-3xl font-bold text-[#222]">
              What is{" "}
              <span className="text-[#2196F3]">Manusia.AI</span>
            </h2>
            <img
              src="/images/Image-BintangBG.svg"
              alt="Star"
              className="w-5 h-5 animate-pulse opacity-60"
            />
          </div>
          <p className="text-base md:text-lg text-[#222] text-center max-w-2xl mt-2">
            Manusia.AI adalah perusahaan konsultan dan custom AI yang berbasis di
            Jakarta, yang berfokus pada penyediaan layanan konsultasi strategi AI
            dan pengembangan solusi AI kustom untuk kebutuhan perusahaan skala
            menengah hingga besar. Kami tidak hanya memberikan saran strategis,
            kami juga membangun dan menerapkan solusi AI yang disesuaikan dengan
            konteks dan tantangan spesifik bisnis setiap customer.
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="w-full bg-white py-10 px-4 flex flex-col items-center">
        <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="flex flex-col items-center">
            <img
              src="/images/Home/ImagesHome2.svg"
              alt="Vision"
              className="mb-4 w-full max-w-md"
            />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#2196F3] mb-2">
              Our Vision
            </h2>
            <p className="text-base text-[#222]">
              Menjadi mitra transformasi AI terpercaya bagi perusahaan di Indonesia
              dan Asia Tenggara — dengan solusi yang relevan, berdampak nyata, dan
              mudah diadopsi.
            </p>
          </div>
        </div>
        <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center mt-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#2196F3] mb-2">
              Our Mission
            </h2>
            <ul className="list-disc ml-6 text-base text-[#222] space-y-2">
              <li>
                Menyederhanakan teknologi AI agar mudah dipahami dan diterapkan
                oleh perusahaan.
              </li>
              <li>
                Membangun solusi AI yang relevan & kustom sesuai kebutuhan bisnis
                klien.
              </li>
              <li>
                Mewujudkan dampak nyata melalui efisiensi, ROI, dan transformasi
                proses kerja.
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="/images/Home/ImagesHome3.svg"
              alt="Mission"
              className="mb-4 w-full max-w-md"
            />
          </div>
        </div>
      </section>

      {/* Brilian.AI Section */}
      <section className="w-full bg-white py-10 px-4 flex flex-col items-center">
        <div className="flex flex-col md:flex-row items-center gap-8 max-w-5xl mx-auto">
          <div className="flex flex-col items-center">
            <img
              src="/images/Home/ImagesHome4.svg"
              alt="Brilian.AI"
              className="mb-4 w-full max-w-md"
            />
          </div>
          <div className="flex-1 flex flex-col justify-center">
            <h2 className="text-2xl md:text-3xl font-bold text-[#2196F3] mb-2">
              Brilian.AI
            </h2>
            <p className="text-base text-[#222] mb-4">
              AI-powered knowledge management platform yang membantu organisasi
              mengakses informasi internal secara cepat, cerdas, dan aman.
            </p>
            <button className="bg-[#2196F3] text-white px-6 py-2 rounded-lg font-semibold shadow hover:bg-[#1565C0] transition mb-2">
              Request Demo
            </button>
          </div>
        </div>
        <div className="w-full bg-[#2196F3] py-10 mt-10">
          <h3 className="text-xl md:text-2xl font-bold text-white text-center mb-8">
            AI-powered knowledge management platform
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow p-6 text-center">
              <h4 className="text-[#2196F3] font-semibold mb-2">Tanya Apa Aja</h4>
              <p className="text-xs text-[#222]">
                Every meeting becomes notes, tasks, agendas, and follow-ups,
                automatically.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow p-6 text-center">
              <h4 className="text-[#2196F3] font-semibold mb-2">Buatin Laporan</h4>
              <p className="text-xs text-[#222]">
                Every meeting becomes notes, tasks, agendas, and follow-ups,
                automatically.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow p-6 text-center">
              <h4 className="text-[#2196F3] font-semibold mb-2">Analisa Laporan</h4>
              <p className="text-xs text-[#222]">
                Every meeting becomes notes, tasks, agendas, and follow-ups,
                automatically.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow p-6 text-center">
              <h4 className="text-[#2196F3] font-semibold mb-2">Riset Market</h4>
              <p className="text-xs text-[#222]">
                Every meeting becomes notes, tasks, agendas, and follow-ups,
                automatically.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow p-6 text-center">
              <h4 className="text-[#2196F3] font-semibold mb-2">Pikirkan Ide</h4>
              <p className="text-xs text-[#222]">
                Every meeting becomes notes, tasks, agendas, and follow-ups,
                automatically.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow p-6 text-center">
              <h4 className="text-[#2196F3] font-semibold mb-2">Rangkumin Meeting</h4>
              <p className="text-xs text-[#222]">
                Every meeting becomes notes, tasks, agendas, and follow-ups,
                automatically.
              </p>
            </div>
          </div>
          <div className="flex justify-center mt-8">
            <button className="bg-white text-[#2196F3] px-6 py-2 rounded-lg font-semibold shadow hover:bg-[#EAF3FF] transition">
              Request Demo
            </button>
          </div>
        </div>
      </section>

      {/* Rangkum.AI Section */}
      <section className="w-full bg-white py-10 px-4 flex flex-col items-center">
        <div className="flex flex-col md:flex-row items-center gap-8 max-w-5xl mx-auto">
          <div className="flex flex-col items-center">
            <img
              src="/images/Home/ImagesHome5.svg"
              alt="Rangkum.AI"
              className="mb-4 w-full max-w-md"
            />
          </div>
          <div className="flex-1 flex flex-col justify-center">
            <h2 className="text-2xl md:text-3xl font-bold text-[#2196F3] mb-2">
              Rangkum.AI
            </h2>
            <p className="text-base text-[#222] mb-4">
              Intelligent Document Processing (IDP) yang membantu organisasi
              mengakses informasi internal secara cepat, cerdas, dan aman.
            </p>
            <button className="bg-[#2196F3] text-white px-6 py-2 rounded-lg font-semibold shadow hover:bg-[#1565C0] transition mb-2">
              Request Demo
            </button>
          </div>
        </div>
        <div className="w-full bg-[#2196F3] py-10 mt-10">
          <h3 className="text-xl md:text-2xl font-bold text-white text-center mb-8">
            Supported Document Types
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow p-6 text-left">
              <h4 className="text-[#2196F3] font-semibold mb-2 flex items-center gap-2">
                <i className="fa-solid fa-id-card"></i> Identitas
              </h4>
              <ul className="text-xs text-[#222] ml-4 space-y-1">
                <li>KTP</li>
                <li>SIM</li>
                <li>Passport</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl shadow p-6 text-left">
              <h4 className="text-[#2196F3] font-semibold mb-2 flex items-center gap-2">
                <i className="fa-solid fa-file-invoice"></i> Finansial
              </h4>
              <ul className="text-xs text-[#222] ml-4 space-y-1">
                <li>Invoice</li>
                <li>Faktur</li>
                <li>NPWP</li>
                <li>Rekening Koran</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl shadow p-6 text-left">
              <h4 className="text-[#2196F3] font-semibold mb-2 flex items-center gap-2">
                <i className="fa-solid fa-file-contract"></i> Legal
              </h4>
              <ul className="text-xs text-[#222] ml-4 space-y-1">
                <li>Akta</li>
                <li>SIUP</li>
                <li>NIB</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl shadow p-6 text-left">
              <h4 className="text-[#2196F3] font-semibold mb-2 flex items-center gap-2">
                <i className="fa-solid fa-user-graduate"></i> HR
              </h4>
              <ul className="text-xs text-[#222] ml-4 space-y-1">
                <li>Ijazah</li>
                <li>CV</li>
                <li>Transkrip</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl shadow p-6 text-left">
              <h4 className="text-[#2196F3] font-semibold mb-2 flex items-center gap-2">
                <i className="fa-solid fa-file-pdf"></i> Format
              </h4>
              <ul className="text-xs text-[#222] ml-4 space-y-1">
                <li>PDF</li>
                <li>JPG</li>
                <li>PNG</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl shadow p-6 text-left">
              <h4 className="text-[#2196F3] font-semibold mb-2 flex items-center gap-2">
                <i className="fa-solid fa-notes-medical"></i> Kesehatan
              </h4>
              <ul className="text-xs text-[#222] ml-4 space-y-1">
                <li>Rekam Medis</li>
                <li>Surat Rujukan</li>
                <li>Kuitansi RS</li>
              </ul>
            </div>
          </div>
          <div className="flex justify-center mt-8">
            <button className="bg-white text-[#2196F3] px-6 py-2 rounded-lg font-semibold shadow hover:bg-[#EAF3FF] transition">
              Request Demo
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-white py-10 px-4 flex flex-col items-center">
        <div className="max-w-xl w-full bg-white rounded-xl shadow-lg p-6 flex flex-col md:flex-row items-center justify-between gap-6 border border-[#2196F3]">
          <div>
            <h4 className="text-[#2196F3] font-bold text-lg mb-2">
              Get started today!
            </h4>
            <p className="text-[#2196F3] text-base mb-2">
              Siap Mempercepat Akses Pengetahuan Anda?
            </p>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <div className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-500/30 rounded-full px-4 py-2 mb-2">
              <img
                src="/images/Image-/Image-BintangBG.pngngBG.png"
                alt="Star"
                className="w-5 h-5 animate-pulse opacity-60"
              />
              <span className="text-blue-300 text-sm font-inter font-normal">
                New: Our AI integration just landed
              </span>
            </div>
            <div className="flex gap-2">
              <button className="bg-[#2196F3] text-white px-4 py-2 rounded-lg font-semibold shadow hover:bg-[#1565C0] transition">
                Get Started
              </button>
              <button className="bg-black text-white px-4 py-2 rounded-lg font-semibold shadow hover:bg-[#222] transition">
                Book a demo
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}