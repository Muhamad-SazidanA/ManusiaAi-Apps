import React from 'react';

export default function BrilianBanking() {
  return (
    <div className="w-full min-h-screen bg-white text-blue-800 font-inter relative overflow-x-hidden">
      {/* Hero Section */}
      <section className="min-h-screen py-20 px-6 md:px-16 flex items-center justify-center bg-white overflow-hidden relative">
        <div className="relative max-w-6xl w-full mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-0 md:px-10 gap-10">
          {/* Kiri: Teks dan Button */}
          <div className="flex-1 flex flex-col items-start justify-center">
            <div className="absolute -translate-x-[70px] -translate-y-[50px]">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5 leading-[1.3] pb-[10px] text-blue-700">
                Smarter Decision-Making <br /> Banking & Multifinance
              </h1>
              <p className="text-base md:text-2xl text-blue-800 mb-8 font-medium max-w-lg text-left">
                Ubah Data Tak Terstruktur Jadi <br /> Keputusan yang Cerdas
              </p>
              <button className="bg-[#1669F2] hover:bg-[#1257C3] text-white px-6 py-3 rounded-md font-semibold shadow-md transition-all duration-200">
                Request Demo
              </button>
            </div>
          </div>
          {/* Kanan: Gambar */}
          <div className="flex-1 flex justify-center items-center">
            <img src="/images/BrilianAi/BrilianBanking/BrilianBanking1.svg" alt="Banking Chart" className="absolute z-1 w-full max-w-lg md:max-w-1xl h-auto object-contain drop-shadow-2xl translate-x-[50px]" />
          </div>
        </div>
      </section>

      {/* Solusi Brilian.AI Section */}
      <section className="relative py-16 bg-white overflow-hidden">
        <div className="relative max-w-6xl mx-auto px-10">
          <h2 className="text-4xl md:text-5xl font-semibold text-blue-700 mb-8 text-center relative z-20">Solusi dari Brilian.AI</h2>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <p className="text-10xl md:text-2xl font-normal leading-relaxed ml-[-70px] mt-[-90px] text-blue-800">
                Brilian.AI adalah platform AI-powered knowledge <br />
                management yang membantu tim perbankan & <br />
                multifinance menemukan informasi penting, <br />
                merangkum dokumen, dan menjawab pertanyaan <br />
                secara instan<br />
              </p>
            </div>
            <div className="flex justify-center relative z-10">
              <img
                src="/images/BrilianAi/BrilianBanking/BrilianBanking2.svg"
                alt="Solusi Brilian.AI"
                className="w-full max-w-md h-auto object-contain scale-[1.5]"
              />
            </div>
          </div>
        </div>
      </section>

<section className="relative py-16 bg-white overflow-hidden">
  <h3 className="relative z-20 text-4xl md:text-5xl font-semibold text-blue-700 mb-20 text-center">
    Benefits for Banks & Multifinance
  </h3>

  <div className="max-w-6xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-start justify-between gap-12">
    
    {/* List Benefit */}
    <div className="flex-1">
      <ul className="space-y-6 relative z-20">
        {[
          'Menghemat waktu pencarian informasi & riset internal hingga 80%',
          'Mempercepat pengambilan keputusan kredit & operasional',
          'Meningkatkan konsistensi informasi antar cabang',
          'Mendukung efisiensi customer service dan complaint handling',
        ].map((text, i) => (
          <li key={i} className="flex items-start gap-4">
            <span className="w-6 h-6 mt-2 rounded-full bg-gradient-to-b from-[#97BDFD] to-[#1A62DC] flex-shrink-0" />
            <span className="text-xl md:text-2xl font-normal leading-relaxed text-blue-800">{text}</span>
          </li>
        ))}
      </ul>
    </div>

    {/* Gambar lebih besar */}
    <div className="w-full md:w-[400px] flex justify-center md:justify-end relative z-10">
      <img
        src="/images/BrilianAi/BrilianBanking/BrilianBanking3.svg"
        alt="Banking Chart"
        className="w-full max-w-[360px] h-auto object-contain"
      />
    </div>
    
  </div>
</section>



      {/* deskripsi */}
      <section className="py-20 bg-white text-center">
        <h2 className="text-2xl md:text-4xl font-semibold text-[#1A62DC] mb-6">
          Siap Transformasi Pengetahuan<br />  Menjadi Keunggulan Kompetitif?
        </h2>
        <p className="text-lg md:text-xl text-[#1A62DC] max-w-2xl mx-auto leading-relaxed">
          Brilian.AI bantu tim Anda mengambil keputusan lebih cepat, akurat, dan berbasis data internal yang selama ini belum tergali.
        </p>
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