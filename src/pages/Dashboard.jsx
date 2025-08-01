import React from "react";
import { Outlet, Link } from 'react-router-dom';

export default function Dashboard() {
  const handleNavigation = (url) => {
    window.location.href = url; // Force reload the page
  };
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
      {/* Value Proposition Section */}
      <section className="py-20 bg-white px-4 md:px-12">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[#0377FF] mb-6">
            Manusia.AI is your partner for<br />
            <span className="text-[#0377FF]">Custom AI Platform & Consulting Services</span>
          </h2>
          <p className="text-lg md:text-2xl text-gray-800 max-w-4xl mx-auto">
            Build and deploy tailored AI solutions—faster, scalable,<br />
            and designed for real business impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {/* Card 1 - Expertise */}
          <div
            className="bg-white rounded-xl p-6 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2 flex flex-col items-center"
            style={{
              boxShadow: "0 0 24px 8px rgba(33, 150, 243, 0.18)"
            }}
          >
            <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4">
              <div className="w-12 h-12 rounded-full bg-[#0377FF] flex items-center justify-center text-white">
                <i className="fa-solid fa-brain text-white text-xl"></i>
              </div>
            </div>
            <h3 className="font-bold text-lg text-[#0377FF] mb-3">Expertise</h3>
            <p className="text-gray-600 text-sm text-center">
              Kombinasi konsultan strategi + tim teknis AI
              Kami tidak hanya membangun sistem AI, tapi juga memastikan solusi tersebut sesuai konteks bisnis dan siap berdampak nyata.
            </p>
          </div>

          {/* Card 2 - Integrasi */}
          <div
            className="bg-white rounded-xl p-6 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2 flex flex-col items-center"
            style={{
              boxShadow: "0 0 24px 8px rgba(33, 150, 243, 0.18)"
            }}
          >
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
              <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center text-white">
                <i className="fa-solid fa-plug-circle-check text-white text-xl"></i>
              </div>
            </div>
            <h3 className="font-bold text-lg text-green-600 mb-3">Integrasi</h3>
            <p className="text-gray-600 text-sm text-center">
              Solusi AI yang langsung terhubung dengan sistem Anda Tidak perlu ganti infrastruktur—kami rancang dan integrasikan AI ke dalam sistem dan alur kerja yang sudah berjalan.
            </p>
          </div>

          {/* Card 3 - Efisiensi */}
          <div
            className="bg-white rounded-xl p-6 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2 flex flex-col items-center"
            style={{
              boxShadow: "0 0 24px 8px rgba(33, 150, 243, 0.18)"
            }}
          >
            <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center mb-4">
              <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center text-white">
                <i className="fa-solid fa-gauge-high text-white text-xl"></i>
              </div>
            </div>
            <h3 className="font-bold text-lg text-orange-600 mb-3">Efisiensi</h3>
            <p className="text-gray-600 text-sm text-center">
              Hemat waktu, tenaga, dan biaya operasional. Dengan AI untuk otomasi tugas manual, pembuatan laporan, dan knowledge discovery yang memangkas biaya format hingga 60-80% waktu kerja tim.
            </p>
          </div>

          {/* Card 4 - Time-to-Impact */}
          <div
            className="bg-white rounded-xl p-6 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2 flex flex-col items-center"
            style={{
              boxShadow: "0 0 24px 8px rgba(33, 150, 243, 0.18)"
            }}
          >
            <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4">
              <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white">
                <i className="fa-solid fa-rocket text-white text-xl"></i>
              </div>
            </div>
            <h3 className="font-bold text-lg text-blue-600 mb-3">Time-to-Impact</h3>
            <p className="text-gray-600 text-sm text-center">
              Implementasi cepat, hasil langsung terasa. Kami kembangkan model AI yang sudah terlatih untuk yang mempersingkat proses dari ide ke produktivitas.
            </p>
          </div>

          {/* Card 5 - Keamanan & Kepatuhan */}
          <div
            className="bg-white rounded-xl p-6 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2 flex flex-col items-center"
            style={{
              boxShadow: "0 0 24px 8px rgba(33, 150, 243, 0.18)"
            }}
          >
            <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mb-4">
              <div className="w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center text-white">
                <i className="fa-solid fa-shield-halved text-white text-xl"></i>
              </div>
            </div>
            <h3 className="font-bold text-lg text-purple-600 text-center mb-3">Keamanan & Kepatuhan</h3>
            <p className="text-gray-600 text-sm text-center">
              Sistem AI yang aman dengan regulasi mutakhir. Kami mengimplementasikan keamanan data, dengan pemisahan sensitif ID, PDPN, CBPR, dan praktik keamanan terbaik.
            </p>
          </div>
        </div>
      </section>
      {/* Why Choose Us Section */}
      <section className="py-20 bg-white px-4 md:px-12">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-[#0377FF] mb-12">
            10 Why Choose Us for Your AI Journey?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Item 1 */}
          <div className="bg-white rounded-xl p-6 border border-blue-100 relative overflow-hidden"
            style={{
              clipPath: "polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 0 100%)",
              boxShadow: "0 0 20px rgba(0,0,0,0.08)"
            }}>
            <div className="absolute top-0 right-0">
              <div className="w-16 h-16 rounded-full bg-[#0377FF] flex items-center justify-center text-white font-bold text-xl"
                style={{
                  boxShadow: "0 4px 10px rgba(3, 119, 255, 0.3)"
                }}>
                01
              </div>
            </div>
            <div className="mt-10 pt-1 pl-1">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Measurable Business Impact</h3>
              <p className="text-gray-600 text-sm">
                We don't promise fuzzy innovation. All our AI solutions are designed to increase efficiency, cut costs, and unlock actionable insights that align with quantifiable outcomes.
              </p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="bg-white rounded-xl p-6 border border-blue-100 relative overflow-hidden"
            style={{
              clipPath: "polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 0 100%)",
              boxShadow: "0 0 20px rgba(0,0,0,0.08)"
            }}>
            <div className="absolute top-0 right-0">
              <div className="w-16 h-16 rounded-full bg-[#0377FF] flex items-center justify-center text-white font-bold text-xl"
                style={{
                  boxShadow: "0 4px 10px rgba(3, 119, 255, 0.3)"
                }}>
                02
              </div>
            </div>
            <div className="mt-10 pt-1 pl-1">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Deep Industry & Technical Expertise</h3>
              <p className="text-gray-600 text-sm">
                Our team combines deep consulting experience with deep domain understanding—whether you're in healthcare, manufacturing, finance, or retail.
              </p>
            </div>
          </div>

          {/* Item 3 */}
          <div className="bg-white rounded-xl p-6 border border-blue-100 relative overflow-hidden"
            style={{
              clipPath: "polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 0 100%)",
              boxShadow: "0 0 20px rgba(0,0,0,0.08)"
            }}>
            <div className="absolute top-0 right-0">
              <div className="w-16 h-16 rounded-full bg-[#0377FF] flex items-center justify-center text-white font-bold text-xl"
                style={{
                  boxShadow: "0 4px 10px rgba(3, 119, 255, 0.3)"
                }}>
                03
              </div>
            </div>
            <div className="mt-10 pt-1 pl-1">
              <h3 className="text-xl font-bold text-gray-800 mb-3">End-to-End Solutions</h3>
              <p className="text-gray-600 text-sm">
                From strategy and planning to deployment and seamless integration, we provide full-cycle support across the entire AI journey.
              </p>
            </div>
          </div>

          {/* Item 4 */}
          <div className="bg-white rounded-xl p-6 border border-blue-100 relative overflow-hidden"
            style={{
              clipPath: "polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 0 100%)",
              boxShadow: "0 0 20px rgba(0,0,0,0.08)"
            }}>
            <div className="absolute top-0 right-0">
              <div className="w-16 h-16 rounded-full bg-[#0377FF] flex items-center justify-center text-white font-bold text-xl"
                style={{
                  boxShadow: "0 4px 10px rgba(3, 119, 255, 0.3)"
                }}>
                04
              </div>
            </div>
            <div className="mt-10 pt-1 pl-1">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Customized to Your Business</h3>
              <p className="text-gray-600 text-sm">
                No one-size-fits-all here. Every solution is tailored to your specific data, workflow, and business context.
              </p>
            </div>
          </div>

          {/* Item 5 */}
          <div className="bg-white rounded-xl p-6 border border-blue-100 relative overflow-hidden"
            style={{
              clipPath: "polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 0 100%)",
              boxShadow: "0 0 20px rgba(0,0,0,0.08)"
            }}>
            <div className="absolute top-0 right-0">
              <div className="w-16 h-16 rounded-full bg-[#0377FF] flex items-center justify-center text-white font-bold text-xl"
                style={{
                  boxShadow: "0 4px 10px rgba(3, 119, 255, 0.3)"
                }}>
                05
              </div>
            </div>
            <div className="mt-10 pt-1 pl-1">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Faster Time to Value</h3>
              <p className="text-gray-600 text-sm">
                With modular components, proven frameworks, and accelerated deployment modules, we shorten your path from idea to implementation.
              </p>
            </div>
          </div>

          {/* Item 6 */}
          <div className="bg-white rounded-xl p-6 border border-blue-100 relative overflow-hidden"
            style={{
              clipPath: "polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 0 100%)",
              boxShadow: "0 0 20px rgba(0,0,0,0.08)"
            }}>
            <div className="absolute top-0 right-0">
              <div className="w-16 h-16 rounded-full bg-[#0377FF] flex items-center justify-center text-white font-bold text-xl"
                style={{
                  boxShadow: "0 4px 10px rgba(3, 119, 255, 0.3)"
                }}>
                06
              </div>
            </div>
            <div className="mt-10 pt-1 pl-1">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Easy Integration with Existing Systems</h3>
              <p className="text-gray-600 text-sm">
                We build AI that works with—not against—your current infrastructure. We make the transition smoother with minimal disruption.
              </p>
            </div>
          </div>

          {/* Item 7 */}
          <div className="bg-white rounded-xl p-6 border border-blue-100 relative overflow-hidden"
            style={{
              clipPath: "polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 0 100%)",
              boxShadow: "0 0 20px rgba(0,0,0,0.08)"
            }}>
            <div className="absolute top-0 right-0">
              <div className="w-16 h-16 rounded-full bg-[#0377FF] flex items-center justify-center text-white font-bold text-xl"
                style={{
                  boxShadow: "0 4px 10px rgba(3, 119, 255, 0.3)"
                }}>
                07
              </div>
            </div>
            <div className="mt-10 pt-1 pl-1">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Enterprise-Grade Security & Compliance</h3>
              <p className="text-gray-600 text-sm">
                Our solutions are built with security, privacy, and regulatory compliance (like PDPN & GDPR) as fundamental requirements.
              </p>
            </div>
          </div>

          {/* Item 8 */}
          <div className="bg-white rounded-xl p-6 border border-blue-100 relative overflow-hidden"
            style={{
              clipPath: "polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 0 100%)",
              boxShadow: "0 0 20px rgba(0,0,0,0.08)"
            }}>
            <div className="absolute top-0 right-0">
              <div className="w-16 h-16 rounded-full bg-[#0377FF] flex items-center justify-center text-white font-bold text-xl"
                style={{
                  boxShadow: "0 4px 10px rgba(3, 119, 255, 0.3)"
                }}>
                08
              </div>
            </div>
            <div className="mt-10 pt-1 pl-1">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Human-Centered Approach</h3>
              <p className="text-gray-600 text-sm">
                We prioritize user adoption. Our AI is explainable, intuitive, and built to enhance human capabilities—not replace human talent.
              </p>
            </div>
          </div>

          {/* Item 9 */}
          <div className="bg-white rounded-xl p-6 border border-blue-100 relative overflow-hidden"
            style={{
              clipPath: "polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 0 100%)",
              boxShadow: "0 0 20px rgba(0,0,0,0.08)"
            }}>
            <div className="absolute top-0 right-0">
              <div className="w-16 h-16 rounded-full bg-[#0377FF] flex items-center justify-center text-white font-bold text-xl"
                style={{
                  boxShadow: "0 4px 10px rgba(3, 119, 255, 0.3)"
                }}>
                09
              </div>
            </div>
            <div className="mt-10 pt-1 pl-1">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Innovation with Stability</h3>
              <p className="text-gray-600 text-sm">
                We stay ahead of the curve with the latest AI innovations while ensuring stability, reliability, and ongoing improvement.
              </p>
            </div>
          </div>

          {/* Item 10 */}
          <div className="bg-white rounded-xl p-6 border border-blue-100 relative overflow-hidden"
            style={{
              clipPath: "polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 0 100%)",
              boxShadow: "0 0 20px rgba(0,0,0,0.08)"
            }}>
            <div className="absolute top-0 right-0">
              <div className="w-16 h-16 rounded-full bg-[#0377FF] flex items-center justify-center text-white font-bold text-xl"
                style={{
                  boxShadow: "0 4px 10px rgba(3, 119, 255, 0.3)"
                }}>
                10
              </div>
            </div>
            <div className="mt-10 pt-1 pl-1">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Dedicated Partnership, Not Just a Vendor</h3>
              <p className="text-gray-600 text-sm">
                We don't disappear after delivery. We act as your long-term AI partner, offering continual support, updates, and optimization.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <Link onClick={() => handleNavigation('/solutions')}
            className="inline-flex items-center gap-2 bg-[#0377FF] text-white px-8 py-4 rounded-xl font-semibold shadow-lg border border-blue-300 hover:scale-105 transition-all duration-200"
          >
            <span>Discover How We Can Help</span>
            <i className="fas fa-arrow-right"></i>
          </Link>
        </div>
      </section>

      {/* Document Intelligence System Section */}
      <section className="py-20 bg-white px-4 md:px-12 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          {/* Product Selection Tabs */}
          <div className="flex justify-center mb-14">
            <div className="flex gap-4 rounded-full p-2 bg-gray-100">
              <button className="px-8 py-3 bg-[#0075FF] text-white font-medium rounded-full flex items-center gap-2 shadow-md">
                <img src="/images/Home/LogoRangkumAiP.svg" alt="Rangkum.AI" className="w-30 h-10" />
              </button>
              <button className="px-8 py-3 bg-white text-gray-700 font-medium rounded-full flex items-center gap-2 hover:bg-gray-50 transition-all">
                <img src="/images/Home/LogoBrilianAiH.svg" alt="Brilian.AI" className="w-30 h-10" />
              </button>
              <button className="px-8 py-3 bg-white text-gray-700 font-medium rounded-full flex items-center gap-2 hover:bg-gray-50 transition-all">
                <img src="/images/Home/logoAdvinH.svg" alt="ADVIN" className="w-30 h-10" />
              </button>
            </div>
          </div>

          {/* Content Section */}
          <div className="flex flex-col md:flex-row items-start gap-10">
            {/* Left Side - Mockup Image */}
            <div className="flex-1">
              <img
                src="/images/Home/ImagesHomeRangkumAI.svg"
                alt="Rangkum.AI Platform"
                className="w-full max-w-md mx-auto"
              />
            </div>

            {/* Right Side - Content */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Document Intelligence System</h2>
              <h3 className="text-xl md:text-2xl font-medium text-[#0377FF] mb-6">AI-Powered Document Automation Platform</h3>

              <p className="text-gray-700 mb-8">
                Rangkum.AI adalah platform cerdas untuk otomatisasi dokumen, dirancang untuk mengekstrak informasi penting dari berbagai dokumen seperti identitas, invoice, surat medis, dan formulir—tanpa template. Cocok untuk perusahaan di sektor keuangan, kesehatan, logistik, dan banyak lagi.
              </p>

              {/* Stats Section */}
              <div className="grid grid-cols-3 gap-4 mb-10">
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <div className="text-[#0377FF] font-bold text-2xl">98%+</div>
                  <div className="text-sm text-gray-600">Extraction Accuracy</div>
                  <div className="text-xs text-gray-500">Untuk data penting dalam dokumen</div>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <div className="text-[#0377FF] font-bold text-2xl">100+</div>
                  <div className="text-sm text-gray-600">Supported Types</div>
                  <div className="text-xs text-gray-500">Termasuk invoice dan form</div>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <div className="text-[#0377FF] font-bold text-2xl">60%</div>
                  <div className="text-sm text-gray-600">Process Time Reduction</div>
                  <div className="text-xs text-gray-500">Versus manual & template processing</div>
                </div>
              </div>

              {/* Key Modules */}
              <h4 className="text-lg font-bold text-gray-800 mb-4">Key Modules</h4>
              <div className="grid grid-cols-3 gap-4 mb-10">
                <div className="bg-white border border-gray-200 p-4 rounded-lg">
                  <div className="bg-blue-100 rounded-md w-8 h-8 flex items-center justify-center mb-3">
                    <span className="text-blue-600 text-sm font-bold">ID</span>
                  </div>
                  <h5 className="font-medium text-sm mb-2">ID & KYC Verification</h5>
                  <p className="text-xs text-gray-500">Ekstraksi data identitas dari KTP, SIM, paspor, dan dokumen lain</p>
                </div>
                <div className="bg-white border border-gray-200 p-4 rounded-lg">
                  <div className="bg-blue-100 rounded-md w-8 h-8 flex items-center justify-center mb-3">
                    <span className="text-blue-600 text-sm font-bold">$</span>
                  </div>
                  <h5 className="font-medium text-sm mb-2">Invoice & Finance</h5>
                  <p className="text-xs text-gray-500">Otomatis ekstrak, kelola, pakai, validasi invoice, dan bukti pembayaran</p>
                </div>
                <div className="bg-white border border-gray-200 p-4 rounded-lg">
                  <div className="bg-blue-100 rounded-md w-8 h-8 flex items-center justify-center mb-3">
                    <span className="text-blue-600 text-sm font-bold">+</span>
                  </div>
                  <h5 className="font-medium text-sm mb-2">Healthcare & Form</h5>
                  <p className="text-xs text-gray-500">Memahami struktur resep medis, rekam medis digital, dengan teknologi tinggi medan</p>
                </div>
              </div>

              {/* Key Features */}
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-4">
                  <i className="fa-solid fa-desktop text-[#0377FF]"></i>
                  <h4 className="text-lg font-bold text-gray-800">Key Features</h4>
                </div>
                <div className="space-y-3 pl-6">
                  <div className="flex gap-2 items-center text-gray-700">
                    <i className="fa-solid fa-angle-right text-[#0377FF]"></i>
                    <span>Ekstraksi data tanpa template/manual zoning</span>
                  </div>
                  <div className="flex gap-2 items-center text-gray-700">
                    <i className="fa-solid fa-angle-right text-[#0377FF]"></i>
                    <span>AI klasifikasi otomatis jenis dokumen</span>
                  </div>
                  <div className="flex gap-2 items-center text-gray-700">
                    <i className="fa-solid fa-angle-right text-[#0377FF]"></i>
                    <span>Deteksi tabel kompleks & tulisan tangan</span>
                  </div>
                  <div className="flex gap-2 items-center text-gray-700">
                    <i className="fa-solid fa-angle-right text-[#0377FF]"></i>
                    <span>Dukungan multibahasa (termasuk Bahasa Indonesia)</span>
                  </div>
                  <div className="flex gap-2 items-center text-gray-700">
                    <i className="fa-solid fa-angle-right text-[#0377FF]"></i>
                    <span>Integrasi mudah dengan sistem ERP, CRM, RPA</span>
                  </div>
                  <div className="flex gap-2 items-center text-gray-700">
                    <i className="fa-solid fa-angle-right text-[#0377FF]"></i>
                    <span>Model terus belajar dari dokumen baru</span>
                  </div>
                </div>
              </div>

              {/* Document Evidence Box */}
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 mb-8 flex items-start gap-3">
                <div className="bg-blue-500 text-white rounded-full p-1 mt-0.5">
                  <i className="fa-solid fa-info text-xs"></i>
                </div>
                <div>
                  <h5 className="font-medium text-sm text-gray-800 mb-1">Document Evidence</h5>
                  <p className="text-xs text-gray-600">Rangkum.AI menyimpan dokumen asli sebagai bukti, lengkap dengan timestamp untuk proses audit/validasi dokumen secara historical.</p>
                </div>
              </div>

              {/* Learn More Button */}
              <div className="text-center md:text-left">
                <Link onClick={() => handleNavigation('/rangkum-ai')}
                  className="inline-block px-8 py-3 bg-[#0377FF] text-white font-medium rounded-md hover:bg-blue-600 transition-colors">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Knowledge Intelligence Platform Section */}
      <section className="py-20 bg-white px-4 md:px-12 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          {/* Product Selection Tabs */}
          <div className="flex justify-center mb-14">
            <div className="flex gap-4 rounded-full p-2 bg-gray-100">
              <button className="px-8 py-3 bg-white text-gray-700 font-medium rounded-full flex items-center gap-2 hover:bg-gray-50 transition-all">
                <img src="/images/Home/LogoRangkumAiH.svg" alt="Rangkum.AI" className="w-30 h-10" />
              </button>
              <button className="px-8 py-3 bg-[#0075FF] text-white font-medium rounded-full flex items-center gap-2 shadow-md">
                <img src="/images/Home/LogoBrilianAiP.svg" alt="Brilian.AI" className="w-30 h-10" />
              </button>
              <button className="px-8 py-3 bg-white text-gray-700 font-medium rounded-full flex items-center gap-2 hover:bg-gray-50 transition-all">
                <img src="/images/Home/logoAdvinH.svg" alt="ADVIN" className="w-30 h-10" />
              </button>
            </div>
          </div>

          {/* Content Section */}
          <div className="flex flex-col md:flex-row items-start gap-10">
            {/* Left Side - Mockup Image */}
            <div className="flex-1">
              <img
                src="/images/Home/ImagesBrilianAI.svg"
                alt="Brilian.AI Platform"
                className="w-full max-w-md mx-auto"
              />
            </div>

            {/* Right Side - Content */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Knowledge Intelligence Platform</h2>
              <h3 className="text-xl md:text-2xl font-medium text-[#0377FF] mb-6">AI-Powered Knowledge Assistant for Enterprise</h3>

              <p className="text-gray-700 mb-8">
                Brilian.AI adalah sistem AI cerdas yang membantu yang mampu menemukan dokumen internal, menjawab pertanyaan, menyusun laporan, hingga analisis data harian — semua dalam satu platform terintegrasi. Cocok untuk tim HR, legal, sales, customer service, hingga bisnis intelligence dalam membantu akes memori institusional.
              </p>

              {/* Stats Section */}
              <div className="grid grid-cols-3 gap-4 mb-10">
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <div className="text-[#0377FF] font-bold text-2xl">100+</div>
                  <div className="text-sm text-gray-600">Integrasi Jenis File</div>
                  <div className="text-xs text-gray-500">Termasuk PDF, Excel, Word, Email</div>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <div className="text-[#0377FF] font-bold text-2xl">90%</div>
                  <div className="text-sm text-gray-600">Reduction Search Time</div>
                  <div className="text-xs text-gray-500">Versus traditional search</div>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <div className="text-[#0377FF] font-bold text-2xl">90%</div>
                  <div className="text-sm text-gray-600">Less Errors</div>
                  <div className="text-xs text-gray-500">Versus manual search</div>
                </div>
              </div>

              {/* Key Modules */}
              <h4 className="text-lg font-bold text-gray-800 mb-4">Key Modules</h4>
              <div className="grid grid-cols-3 gap-4 mb-10">
                <div className="bg-white border border-gray-200 p-4 rounded-lg">
                  <div className="bg-blue-100 rounded-md w-8 h-8 flex items-center justify-center mb-3">
                    <span className="text-blue-600 text-sm font-bold">🔍</span>
                  </div>
                  <h5 className="font-medium text-sm mb-2">Tanya Apa Saja</h5>
                  <p className="text-xs text-gray-500">Pencarian dokumen dan jawaban dengan bahasa alami seperti ChatGPT</p>
                </div>
                <div className="bg-white border border-gray-200 p-4 rounded-lg">
                  <div className="bg-blue-100 rounded-md w-8 h-8 flex items-center justify-center mb-3">
                    <span className="text-blue-600 text-sm font-bold">📊</span>
                  </div>
                  <h5 className="font-medium text-sm mb-2">Laporan & Insight Otomatis</h5>
                  <p className="text-xs text-gray-500">Analisis dokumen, temukan tren, dan dapatkan ringkasan dari data yang kompleks</p>
                </div>
                <div className="bg-white border border-gray-200 p-4 rounded-lg">
                  <div className="bg-blue-100 rounded-md w-8 h-8 flex items-center justify-center mb-3">
                    <span className="text-blue-600 text-sm font-bold">🔄</span>
                  </div>
                  <h5 className="font-medium text-sm mb-2">Meeting & Timeline Manager</h5>
                  <p className="text-xs text-gray-500">Rekam percakapan rapat, ekstrak agenda dan tindak lanjut</p>
                </div>
              </div>

              {/* Key Features */}
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-4">
                  <i className="fa-solid fa-desktop text-[#0377FF]"></i>
                  <h4 className="text-lg font-bold text-gray-800">Key Features</h4>
                </div>
                <div className="space-y-3 pl-6">
                  <div className="flex gap-2 items-center text-gray-700">
                    <i className="fa-solid fa-angle-right text-[#0377FF]"></i>
                    <span>Pemahaman bahasa natural (NLP) untuk pencarian cerdas total</span>
                  </div>
                  <div className="flex gap-2 items-center text-gray-700">
                    <i className="fa-solid fa-angle-right text-[#0377FF]"></i>
                    <span>Integrasi mudah dengan folder cloud (Google Drive, OneDrive, dll)</span>
                  </div>
                  <div className="flex gap-2 items-center text-gray-700">
                    <i className="fa-solid fa-angle-right text-[#0377FF]"></i>
                    <span>Bisa membaca berbagai format: PDF, Excel, Word, Email</span>
                  </div>
                  <div className="flex gap-2 items-center text-gray-700">
                    <i className="fa-solid fa-angle-right text-[#0377FF]"></i>
                    <span>Analisis tren, kesimpulan, dan ringkasan otomatis</span>
                  </div>
                  <div className="flex gap-2 items-center text-gray-700">
                    <i className="fa-solid fa-angle-right text-[#0377FF]"></i>
                    <span>Dapat digunakan oleh tim HR, Finance, Legal, hingga Management</span>
                  </div>
                  <div className="flex gap-2 items-center text-gray-700">
                    <i className="fa-solid fa-angle-right text-[#0377FF]"></i>
                    <span>Aman, privat, dan dapat disesuaikan dengan alur kerja Anda</span>
                  </div>
                </div>
              </div>

              {/* Document Evidence Box */}
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 mb-8 flex items-start gap-3">
                <div className="bg-blue-500 text-white rounded-full p-1 mt-0.5">
                  <i className="fa-solid fa-info text-xs"></i>
                </div>
                <div>
                  <h5 className="font-medium text-sm text-gray-800 mb-1">Document Intelligence in Action</h5>
                  <p className="text-xs text-gray-600">Brilian.AI terintegrasi langsung dengan proses bisnis harian untuk mengakses pengetahuan dari ribuan dokumen.</p>
                </div>
              </div>

              {/* Learn More Button */}
              <div className="text-center md:text-left">
                <Link onClick={() => handleNavigation('/brilian-ai')}
                  className="inline-block px-8 py-3 bg-[#0377FF] text-white font-medium rounded-md hover:bg-blue-600 transition-colors">
                  Learn More
                </Link>
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
              boxShadow: "0 0 24px 8px #2196F3",
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