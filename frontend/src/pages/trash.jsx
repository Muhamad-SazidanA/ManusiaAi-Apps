import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { FaWhatsapp } from "react-icons/fa";

export default function Template() {
    const [activeTab, setActiveTab] = useState('null');
    const [newsDefaultTab, setNewsDefaultTab] = useState('blog');
    const [scrolled, setScrolled] = useState(false);

    const handleNavigation = (url) => {
        window.location.href = url; // Force reload the page
    };

    return (
        <div className="min-h-screen flex flex-col bg-[#F6F8FB] text-[#222]">
            {/* Floating WhatsApp Button */}
            <a
                href="https://wa.me/62882114156666 "
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-6 right-6 z-50 bg-gradient-to-tr from-green-400 to-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-xl hover:scale-110 transition-transform duration-300 group"
                title="Hubungi via WhatsApp"
            >
                <div className="relative">
                    <div className="absolute inset-0 bg-green-500 rounded-full blur-md opacity-30 animate-pulse"></div>
                    <FaWhatsapp size={28} className="relative z-10" />
                </div>
            </a>
            {/* Header */}
            <header className={`w-full bg-white fixed top-0 left-0 z-50 transition-all duration-300 ${scrolled ? 'shadow-[0_4px_32px_0_rgba(0,0,0,0.18)] border-b border-black/10' : 'shadow-none'}`}>
                <nav className="max-w-6xl mx-auto relative flex justify-center items-center px-2 md:px-10 py-4">
                    {/* Logo - kiri */}
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 ml-2" style={{ marginLeft: '-32px' }}>
                        <Link
                            onClick={() => handleNavigation('/')}
                            className="flex items-start gap-3"
                        >
                            <img src="/LogoUtama-Manusia.Ai.svg" alt="Manusia.AI" className="h-10 w-auto" />
                        </Link>
                    </div>

                    {/* Menu - tengah */}
                    <ul className="flex items-center mt-1 gap-2 md:gap-3 font-medium text-[#222]">
                        <li>
                            <Link
                                onClick={() => handleNavigation('/')}
                                className="relative px-3 py-2 rounded-lg transition-all duration-200 hover:bg-[#F0F7FF] hover:text-[#1976ED] focus:bg-[#F0F7FF] focus:text-[#1976ED]"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                onClick={() => handleNavigation('/#')}
                                className="relative px-3 py-2 rounded-lg transition-all duration-200 hover:bg-[#F0F7FF] hover:text-[#1976ED] focus:bg-[#F0F7FF] focus:text-[#1976ED]"
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link
                                onClick={() => handleNavigation('/solutions')}
                                className="relative px-3 py-2 rounded-lg transition-all duration-200 hover:bg-[#F0F7FF] hover:text-[#1976ED] focus:bg-[#F0F7FF] focus:text-[#1976ED]"
                            >
                                Solutions
                            </Link>
                        </li>
                        <li
                            className="relative group"
                            onMouseEnter={() => setActiveTab('products')}
                            onMouseLeave={() => setActiveTab(null)}
                        >
                            <div className="flex items-center gap-1 px-3 py-2 rounded-lg transition-all duration-200 hover:bg-[#F0F7FF] hover:text-[#1976ED] cursor-pointer">
                                <span>Products</span>
                                <i className="fas fa-chevron-down text-xs"></i>
                            </div>
                            <div
                                className="absolute top-full left-0 mt-2 rounded-xl z-50 overflow-hidden
                                transition-all duration-300 opacity-0 invisible group-hover:opacity-100 group-hover:visible
                                min-w-[150px] bg-white border border-[#E5E7EB]"
                                style={{
                                    boxShadow: '0 4px 20px rgba(25, 118, 237, 0.12), 0 1px 3px rgba(0, 0, 0, 0.05)'
                                }}
                            >
                                <div className="p-3">
                                    <Link
                                        onClick={() => handleNavigation('/brilian-ai')}
                                        className="relative px-3 py-2 rounded-lg transition-all duration-200 hover:bg-[#F0F7FF] hover:text-[#1976ED] focus:bg-[#F0F7FF] focus:text-[#1976ED] text-[#444] flex items-center gap-2 w-full"
                                    >
                                        <i className="fa-solid fa-brain text-[#1976ED] text-lg"></i> Brilian.AI
                                    </Link>
                                    <Link
                                        onClick={() => handleNavigation('/rangkum-ai')}
                                        className="relative px-3 py-2 rounded-lg transition-all duration-200 hover:bg-[#F0F7FF] hover:text-[#1976ED] focus:bg-[#F0F7FF] focus:text-[#1976ED] text-[#444] flex items-center gap-2 w-full"

                                    >
                                        <i className="fa-solid fa-file-lines text-[#1976ED] text-lg"></i> Rangkum.AI
                                    </Link>
                                </div>
                            </div>
                        </li>

                        {/* INDUSTRIES DROPDOWN */}
                        <li className="relative group" onMouseEnter={() => setActiveTab(null)}>
                            <div className="flex items-center gap-1 px-3 py-2 rounded-lg transition-all duration-200 hover:bg-[#F0F7FF] hover:text-[#1976ED] cursor-pointer">
                                <span>Industries</span>
                                <i className="fas fa-chevron-down text-xs"></i>
                            </div>
                            <div
                                className={`absolute top-full left-0 mt-2 rounded-xl z-50 overflow-hidden
                                    transition-all duration-300 opacity-0 invisible group-hover:opacity-100 group-hover:visible
                                    ${activeTab === 'brilian' || activeTab === 'rangkum' ? 'min-w-[520px]' : 'min-w-[150px]'}
                                    bg-white border border-[#E5E7EB]`}
                                style={{
                                    boxShadow: '0 4px 20px rgba(25, 118, 237, 0.12), 0 1px 3px rgba(0, 0, 0, 0.05)'
                                }}
                                onMouseLeave={() => setActiveTab(null)}
                            >
                                <div className="p-2 flex">
                                    {/* Tab Switcher */}
                                    <div className="flex flex-col gap-2 min-w-[160px]">
                                        <div
                                            className={`relative px-3 py-2 rounded-lg transition-all duration-200 hover:bg-[#F0F7FF] hover:text-[#1976ED] cursor-pointer flex items-center gap-2 text-[#444]
                                            ${activeTab === 'brilian' ? 'bg-[#F0F7FF] text-[#1976ED]' : ''}`}
                                            onMouseEnter={() => setActiveTab('brilian')}
                                        >
                                            <i className="fa-solid fa-brain text-[#1976ED] text-lg"></i> Brilian.AI
                                            <i
                                                className={`fa-solid ${activeTab === 'brilian' ? 'fa-chevron-right' : 'fa-chevron-down'} text-xs ml-auto transition-all duration-200`}
                                            ></i>
                                        </div>

                                        <div
                                            className={`relative px-3 py-2 rounded-lg transition-all duration-200 hover:bg-[#F0F7FF] hover:text-[#1976ED] cursor-pointer flex items-center gap-2 text-[#444]
                                            ${activeTab === 'rangkum' ? 'bg-[#F0F7FF] text-[#1976ED]' : ''}`}
                                            onMouseEnter={() => setActiveTab('rangkum')}
                                        >
                                            <i className="fa-solid fa-file-lines text-[#1976ED] text-lg"></i> Rangkum.AI
                                            <i
                                                className={`fa-solid ${activeTab === 'rangkum' ? 'fa-chevron-right' : 'fa-chevron-down'} text-xs ml-auto transition-all duration-200`}
                                            ></i>
                                        </div>
                                    </div>

                                    {/* Industries Content */}
                                    {activeTab === 'brilian' && (
                                        <div className="ml-4 animate-fade-in flex items-center" style={{ minWidth: 340, minHeight: 180 }}>
                                            <div className="grid grid-cols-2 gap-x-6 gap-y-4 w-full">
                                                <Link onClick={() => handleNavigation('/brilianai-banking')}
                                                    className="relative px-3 py-2 rounded-lg transition-all duration-200 hover:bg-[#F0F7FF] hover:text-[#1976ED] focus:bg-[#F0F7FF] focus:text-[#1976ED] text-[#444] flex items-center gap-2" >
                                                    <i className="fa-solid fa-landmark text-[#1976ED] text-xl"></i>
                                                    <span>
                                                        BANK dan<br />Multifinance
                                                    </span>
                                                </Link>
                                                <Link onClick={() => handleNavigation('/brilianai-hospital')}
                                                    className="relative px-3 py-2 rounded-lg transition-all duration-200 hover:bg-[#F0F7FF] hover:text-[#1976ED] focus:bg-[#F0F7FF] focus:text-[#1976ED] text-[#444] flex items-center gap-2" >
                                                    <i className="fa-solid fa-hospital text-[#1976ED] text-xl"></i>
                                                    <span>Health Care</span>
                                                </Link>
                                                <Link onClick={() => handleNavigation('/brilianai-insurance')}
                                                    className="relative px-3 py-2 rounded-lg transition-all duration-200 hover:bg-[#F0F7FF] hover:text-[#1976ED] focus:bg-[#F0F7FF] focus:text-[#1976ED] text-[#444] flex items-center gap-2" >
                                                    <i className="fa-solid fa-hand-holding-medical text-[#1976ED] text-xl"></i>
                                                    <span>Insurance</span>
                                                </Link>
                                                <Link onClick={() => handleNavigation('/brilianai-humanr')}
                                                    className="relative px-3 py-2 rounded-lg transition-all duration-200 hover:bg-[#F0F7FF] hover:text-[#1976ED] focus:bg-[#F0F7FF] focus:text-[#1976ED] text-[#444] flex items-center gap-2" >
                                                    <i className="fa-solid fa-users text-[#1976ED] text-xl"></i>
                                                    <span>
                                                        Human<br />Resource
                                                    </span>
                                                </Link>
                                                <Link onClick={() => handleNavigation('/brilianai-fmgc')}
                                                    className="relative px-3 py-2 rounded-lg transition-all duration-200 hover:bg-[#F0F7FF] hover:text-[#1976ED] focus:bg-[#F0F7FF] focus:text-[#1976ED] text-[#444] flex items-center gap-2" >
                                                    <i className="fa-solid fa-basket-shopping text-[#1976ED] text-xl"></i>
                                                    <span>FMGC</span>
                                                </Link>
                                            </div>
                                        </div>
                                    )}
                                    {activeTab === 'rangkum' && (
                                        <div className="ml-4 animate-fade-in flex items-center" style={{ minWidth: 340, minHeight: 180 }}>
                                            <div className="grid grid-cols-2 gap-x-4 gap-y-4 w-full">
                                                <Link onClick={() => handleNavigation('/rangkum-banking')}
                                                    className="relative px-3 py-2 rounded-lg transition-all duration-200 hover:bg-[#F0F7FF] hover:text-[#1976ED] focus:bg-[#F0F7FF] focus:text-[#1976ED] text-[#444] flex items-center gap-2" >
                                                    <i className="fa-solid fa-landmark text-[#1976ED] text-xl"></i>
                                                    <span>
                                                        BANK dan<br />Multifinance
                                                    </span>
                                                </Link>
                                                <Link onClick={() => handleNavigation('/rangkum-hospital')}
                                                    className="relative px-3 py-2 rounded-lg transition-all duration-200 hover:bg-[#F0F7FF] hover:text-[#1976ED] focus:bg-[#F0F7FF] focus:text-[#1976ED] text-[#444] flex items-center gap-2" >
                                                    <i className="fa-solid fa-hospital text-[#1976ED] text-xl"></i>
                                                    <span>Health Care</span>
                                                </Link>
                                                <Link onClick={() => handleNavigation('/rangkum-insurance')}
                                                    className="relative px-3 py-2 rounded-lg transition-all duration-200 hover:bg-[#F0F7FF] hover:text-[#1976ED] focus:bg-[#F0F7FF] focus:text-[#1976ED] text-[#444] flex items-center gap-2" >
                                                    <i className="fa-solid fa-hand-holding-medical text-[#1976ED] text-xl"></i>
                                                    <span>Insurance</span>
                                                </Link>
                                                <Link onClick={() => handleNavigation('/rangkum-humanr')}
                                                    className="relative px-3 py-2 rounded-lg transition-all duration-200 hover:bg-[#F0F7FF] hover:text-[#1976ED] focus:bg-[#F0F7FF] focus:text-[#1976ED] text-[#444] flex items-center gap-2" >
                                                    <i className="fa-solid fa-users text-[#1976ED] text-xl"></i>
                                                    <span>
                                                        Human<br />Resource
                                                    </span>
                                                </Link>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </li>
                        {/* News Dropdown */}
                        <li
                            className="relative group"
                            onMouseEnter={() => {
                                // Jika tidak sedang di salah satu tab, pakai default
                                if (!['blog', 'events', 'case'].includes(activeTab)) {
                                    setActiveTab(newsDefaultTab);
                                }
                            }}
                            onMouseLeave={() => setActiveTab(null)}
                        >
                            <div className="flex items-center gap-1 px-3 py-2 rounded-lg transition-all duration-200 hover:bg-[#F0F7FF] hover:text-[#1976ED] cursor-pointer">
                                <span>News</span>
                                <i className="fas fa-chevron-down text-xs"></i>
                            </div>
                            {/* DROPDOWN FULL WIDTH - Styled to match other dropdowns */}
                            <div
                                className="fixed left-0 top-[60px] w-full opacity-0 invisible group-hover:opacity-100 group-hover:visible z-[40] transition-all duration-300"
                                style={{
                                    background: 'white',
                                    boxShadow: '0 4px 20px rgba(25, 118, 237, 0.12), 0 2px 5px rgba(0, 0, 0, 0.05)',
                                    borderTop: '1px solid #E5E7EB',
                                    fontSize: '1rem',
                                }}
                                onMouseLeave={() => setActiveTab(null)}
                            >
                                <div className="max-w-7xl mx-auto flex px-8 py-6 gap-8">
                                    {/* Sidebar */}
                                    <div className="w-1/4 border-r border-gray-200 pr-6">
                                        <ul className="space-y-4 font-semibold">
                                            <li
                                                onClick={() => {
                                                    setActiveTab('blog');
                                                    setNewsDefaultTab('blog');
                                                }}
                                                className={`cursor-pointer hover:text-[#1976ED] transition ${activeTab === 'blog' ? 'text-[#1976ED] font-bold' : 'text-[#444]'}`}
                                            >
                                                Blog
                                            </li>
                                            <li
                                                onClick={() => {
                                                    setActiveTab('events');
                                                    setNewsDefaultTab('events');
                                                }}
                                                className={`cursor-pointer hover:text-[#1976ED] transition ${activeTab === 'events' ? 'text-[#1976ED] font-bold' : 'text-[#444]'}`}
                                            >
                                                Events
                                            </li>
                                            <li
                                                onClick={() => {
                                                    setActiveTab('case');
                                                    setNewsDefaultTab('case');
                                                }}
                                                className={`cursor-pointer hover:text-[#1976ED] transition ${activeTab === 'case' ? 'text-[#1976ED] font-bold' : 'text-[#444]'}`}
                                            >
                                                Case Study
                                            </li>
                                        </ul>
                                    </div>
                                    {/* Content Area */}
                                    <div className="w-3/4">
                                        {activeTab === 'blog' && (
                                            <>
                                                <div className="grid grid-cols-3 gap-6 mb-4 animate-fade-in">
                                                    <div className="bg-gray-50 rounded-xl overflow-hidden shadow-sm border border-gray-100">
                                                        <img src="/images/DummyContent.svg" className="w-full" />
                                                        <div className="p-4 font-semibold text-[#444] text-sm">Judul Artikel Blog 1</div>
                                                    </div>
                                                    <div className="bg-gray-50 rounded-xl overflow-hidden shadow-sm border border-gray-100">
                                                        <img src="/images/DummyContent.svg" className="w-full" />
                                                        <div className="p-4 font-semibold text-[#444] text-sm">Judul Artikel Blog 2</div>
                                                    </div>
                                                    <div className="bg-gray-50 rounded-xl overflow-hidden shadow-sm border border-gray-100">
                                                        <img src="/images/DummyContent.svg" className="w-full" />
                                                        <div className="p-4 font-semibold text-[#444] text-sm">Judul Artikel Blog 3</div>
                                                    </div>
                                                </div>
                                                <div className="flex justify-start">
                                                    <Link onClick={() => handleNavigation('/blog')}
                                                        className="text-[#1976ED] hover:underline font-medium flex items-center gap-2"

                                                    >
                                                        View all Blog <span className="text-lg">&rarr;</span>
                                                    </Link>
                                                </div>
                                            </>
                                        )}
                                        {activeTab === 'events' && (
                                            <>
                                                <div className="grid grid-cols-3 gap-6 mb-4 animate-fade-in">
                                                    <div className="bg-gray-50 rounded-xl overflow-hidden shadow-sm border border-gray-100">
                                                        <img src="/images/DummyContent.svg" className="w-full" />
                                                        <div className="p-4 font-semibold text-[#444] text-sm">Judul Events 1</div>
                                                    </div>
                                                    <div className="bg-gray-50 rounded-xl overflow-hidden shadow-sm border border-gray-100">
                                                        <img src="/images/DummyContent.svg" className="w-full" />
                                                        <div className="p-4 font-semibold text-[#444] text-sm">Judul Events 2</div>
                                                    </div>
                                                    <div className="bg-gray-50 rounded-xl overflow-hidden shadow-sm border border-gray-100">
                                                        <img src="/images/DummyContent.svg" className="w-full" />
                                                        <div className="p-4 font-semibold text-[#444] text-sm">Judul Events 3</div>
                                                    </div>
                                                </div>
                                                <div className="flex justify-start">
                                                    <Link onClick={() => handleNavigation('/events')}
                                                        className="text-[#1976ED] hover:underline font-medium flex items-center gap-2"
                                                    >
                                                        View all Events <span className="text-lg">&rarr;</span>
                                                    </Link>
                                                </div>
                                            </>
                                        )}
                                        {activeTab === 'case' && (
                                            <>
                                                <div className="grid grid-cols-3 gap-6 mb-4 animate-fade-in">
                                                    <div className="bg-gray-50 rounded-xl overflow-hidden shadow-sm border border-gray-100">
                                                        <img src="/images/DummyContent.svg" className="w-full" />
                                                        <div className="p-4 font-semibold text-[#444] text-sm">Judul Case Study 1</div>
                                                    </div>
                                                    <div className="bg-gray-50 rounded-xl overflow-hidden shadow-sm border border-gray-100">
                                                        <img src="/images/DummyContent.svg" className="w-full" />
                                                        <div className="p-4 font-semibold text-[#444] text-sm">Judul Case Study 2</div>
                                                    </div>
                                                    <div className="bg-gray-50 rounded-xl overflow-hidden shadow-sm border border-gray-100">
                                                        <img src="/images/DummyContent.svg" className="w-full" />
                                                        <div className="p-4 font-semibold text-[#444] text-sm">Judul Case Study 3</div>
                                                    </div>
                                                </div>
                                                <div className="flex justify-start">
                                                    <Link onClick={() => handleNavigation('/casestudy')}
                                                        className="text-[#1976ED] hover:underline font-medium flex items-center gap-2"
                                                    >
                                                        View all Case Study <span className="text-lg">&rarr;</span>
                                                    </Link>
                                                </div>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>

                    {/* Button - kanan */}
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 mr-2" style={{ marginRight: '-20px' }}>
                        <Link
                            onClick={() => handleNavigation('/demo-email')}
                            className="bg-[#0A7AFF] text-white px-5 py-2 rounded-lg font-semibold shadow hover:bg-[#1976ED] transition"
                        >
                            Request Demo
                        </Link>
                    </div>
                </nav>
            </header>

            {/* Main Content */}
            <main className="flex-1 w-full pt-[80px]">
                <Outlet />
            </main>

            {/* Footer */}
            <footer className="bg-[#162447] mt-auto text-white">
                <div className="max-w-6xl mx-auto px-8 py-14 w-full">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-10">
                        {/* Brand & Social */}
                        <div className="flex flex-col items-center md:items-start mb-8 md:mb-0">
                            <img src="/Logo-PutihManusiaAi.svg" alt="Manusia.AI" className="h-10 w-auto mb-4" />
                            <p className="text-white/70 text-sm max-w-xs mb-4 text-center md:text-left">
                                Manusia.AI adalah konsultan & pengembang solusi AI kustom untuk bisnis Indonesia.
                                Kami membantu perusahaan bertransformasi dengan teknologi AI yang relevan dan berdampak nyata.
                            </p>
                            <div className="flex gap-3 mt-2">
                                <a href="#" className="w-9 h-9 flex items-center justify-center rounded-lg border border-white/30 hover:bg-white/10 transition">
                                    <i className="fab fa-linkedin-in text-white text-lg"></i>
                                </a>
                                <a href="#" className="w-9 h-9 flex items-center justify-center rounded-lg border border-white/30 hover:bg-white/10 transition">
                                    <i className="fab fa-instagram text-white text-lg"></i>
                                </a>
                                <a href="#" className="w-9 h-9 flex items-center justify-center rounded-lg border border-white/30 hover:bg-white/10 transition">
                                    <i className="fab fa-whatsapp text-white text-lg"></i>
                                </a>
                            </div>
                        </div>
                        {/* Navigation */}
                        <div className="flex-1 flex justify-end">
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-16 gap-y-8">
                                <div>
                                    <h4 className="font-semibold mb-3 text-white/90">Company</h4>
                                    <ul className="space-y-2 text-white/80 text-sm">
                                        <li><Link to="/" className="hover:underline">Home</Link></li>
                                        <li><Link to="#" className="hover:underline">About</Link></li>
                                        <li><Link to="/solutions" className="hover:underline">Solutions</Link></li>
                                        <li><Link to="/industries" className="hover:underline">Industries</Link></li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-3 text-white/90">Products</h4>
                                    <ul className="space-y-2 text-white/80 text-sm">
                                        <li><Link to="/brilian-ai" className="hover:underline">Brilian.AI</Link></li>
                                        <li><Link to="/rangkum-ai" className="hover:underline">Rangkum.AI</Link></li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-3 text-white/90">Resources</h4>
                                    <ul className="space-y-2 text-white/80 text-sm">
                                        <li><Link to="/blog" className="hover:underline">Blog</Link></li>
                                        <li><Link to="/events" className="hover:underline">Events</Link></li>
                                        <li><Link to="/casestudy" className="hover:underline">Case Study</Link></li>
                                        <li><Link to="/demo-email" className="hover:underline">Request Demo</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-white/20 mt-10 pt-6 text-center text-white/60 text-xs">
                        &copy; {new Date().getFullYear()} Manusia.AI. All rights reserved.
                    </div>
                </div>
            </footer>
        </div>
    );
}