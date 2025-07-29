import React, { useState, useEffect } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { FaWhatsapp } from "react-icons/fa";

export default function Template() {
    const [activeTab, setActiveTab] = useState('null');
    const [scrolled, setScrolled] = useState(false);

    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <div className="min-h-screen flex flex-col bg-[#F6F8FB] text-[#222]">
            {/* Floating WhatsApp Button */}
            <a
                href="https://wa.me/6288211415611"
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
                <nav className="max-w-6xl mx-auto flex items-center justify-between px-8 py-6">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2" onClick={scrollToTop}>
                        <img src="/LogoUtama-Manusia.Ai.svg" alt="Manusia.AI" className="h-8 w-auto" />
                    </Link>
                    {/* Menu */}
                    <ul className="flex items-center gap-10 font-medium text-[#222]">
                        <li><Link to="/" className="hover:text-[#1976ED] transition">Home</Link></li>
                        <li><Link to="#" className="hover:text-[#1976ED] transition">About</Link></li>
                        <li><Link to="/solutions" className="hover:text-[#1976ED] transition">Solutions</Link></li>
                        <li className="relative group">
                            <button className="flex items-center gap-1 hover:text-[#1976ED] transition bg-transparent">
                                Products <i className="fas fa-chevron-down text-xs"></i>
                            </button>
                            {/* Dropdown */}
                            <div className="absolute left-0 top-full mt-2 bg-white rounded-lg shadow-lg min-w-[160px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                                <Link to="/brilian-ai" className="block px-4 py-2 hover:bg-[#F0F7FF] text-[#1976ED]">Brilian.AI</Link>
                                <Link to="/rangkum-ai" className="block px-4 py-2 hover:bg-[#F0F7FF] text-[#1976ED]">Rangkum.AI</Link>
                            </div>
                        </li>
                        {/* INDUSTRIES DROPDOWN */}
                        <li className="relative group"
                            onMouseEnter={() => setActiveTab(null)}
                        >
                            <div className="block px-4 py-2 font-medium text-[#222] rounded-xl transition-all duration-200 hover:bg-[#0075FF] hover:text-white">
                                <div className="flex items-center gap-2">
                                    <span>Industries</span>
                                    <i className="fas fa-chevron-down text-xs"></i>
                                </div>
                            </div>
                            <div
                                className={`
                                            absolute top-full left-0 mt-2 rounded-2xl z-50 shadow-lg overflow-hidden
                                            transition-all duration-300
                                            opacity-0 invisible group-hover:opacity-100 group-hover:visible
                                            ${activeTab === 'brilian' || activeTab === 'rangkum' ? 'min-w-[520px] p-3 flex' : 'min-w-[180px] p-1'}
                                        `}
                                style={{
                                    background: 'rgba(20, 30, 55, 0.55)',
                                    backdropFilter: 'blur(18px)',
                                    WebkitBackdropFilter: 'blur(18px)',
                                    boxShadow: '0 0 16px 2px #4A9EFF, 0 0 0 1px #1C64DD',
                                    border: '1.5px solid #2196FF',
                                    fontSize: '0.93rem',
                                    alignItems: 'flex-start'
                                }}
                                onMouseLeave={() => setActiveTab(null)}
                            >
                                {/* Tab Switcher dengan Link */}
                                <div className="flex flex-col gap-2 min-w-[160px]">
                                    <div
                                        className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-base transition-all cursor-pointer
                                                ${activeTab === 'brilian' ? 'bg-[#2196FF] text-white shadow' : 'bg-transparent text-white/80 hover:bg-[#2196FF]/20'}`}
                                        onMouseEnter={() => setActiveTab('brilian')}
                                    >
                                        <i className="fa-solid fa-brain text-lg"></i> Brilian.AI
                                        <i
                                            className={`fa-solid ${activeTab === 'brilian' ? 'fa-chevron-right' : 'fa-chevron-down'
                                                } text-xs ml-auto transition-all duration-200`}
                                        ></i>
                                    </div>

                                    <div
                                        className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-base transition-all cursor-pointer
${activeTab === 'rangkum' ? 'bg-[#2196FF] text-white shadow' : 'bg-transparent text-white/80 hover:bg-[#2196FF]/20'}`}
                                        onMouseEnter={() => setActiveTab('rangkum')}
                                    >
                                        <i className="fa-solid fa-file-lines text-lg"></i> Rangkum.AI
                                        <i
                                            className={`fa-solid ${activeTab === 'rangkum' ? 'fa-chevron-right' : 'fa-chevron-down'
                                                } text-xs ml-auto transition-all duration-200`}
                                        ></i>
                                    </div>
                                </div>
                                {/* Industries Content */}
                                {activeTab === 'brilian' && (
                                    <div className="ml-4 animate-fade-in flex items-center" style={{ minWidth: 340, minHeight: 180 }}>
                                        <div className="grid grid-cols-2 gap-x-6 gap-y-4 w-full">
                                            <Link to="/brilianai-banking" className="flex items-center gap-2 text-white text-sm font-bold block px-4 py-2 font-semibold text-white/80 rounded-xl transition-all duration-200 hover:bg-[#0075FF] hover:text-white" onClick={scrollToTop}>
                                                <i className="fa-solid fa-landmark text-xl"></i>
                                                <span>
                                                    BANK dan<br />Multifinance
                                                </span>
                                            </Link>
                                            <Link to="/brilianai-hospital" className="flex items-center gap-2 text-white text-sm font-bold block px-4 py-2 font-semibold text-white/80 rounded-xl transition-all duration-200 hover:bg-[#0075FF] hover:text-white" onClick={scrollToTop}>
                                                <i className="fa-solid fa-hospital text-xl"></i>
                                                <span>Health Care</span>
                                            </Link>
                                            <Link to="/brilianai-insurance" className="flex items-center gap-2 text-white text-sm font-bold block px-4 py-2 font-semibold text-white/80 rounded-xl transition-all duration-200 hover:bg-[#0075FF] hover:text-white" onClick={scrollToTop}>
                                                <i className="fa-solid fa-hand-holding-medical text-xl"></i>
                                                <span>Insurance</span>
                                            </Link>
                                            <Link to="/brilianai-humanr" className="flex items-center gap-2 text-white text-sm font-bold block px-4 py-2 font-semibold text-white/80 rounded-xl transition-all duration-200 hover:bg-[#0075FF] hover:text-white" onClick={scrollToTop}>
                                                <i className="fa-solid fa-users text-xl"></i>
                                                <span>
                                                    Human<br />Resource
                                                </span>
                                            </Link>
                                            <Link to="/brilianai-fmgc" className="flex items-center gap-2 text-white text-sm font-bold block px-4 py-2 font-semibold text-white/80 rounded-xl transition-all duration-200 hover:bg-[#0075FF] hover:text-white" onClick={scrollToTop}>
                                                <i className="fa-solid fa-basket-shopping text-xl"></i>
                                                <span>FMGC</span>
                                            </Link>
                                        </div>
                                    </div>
                                )}
                                {activeTab === 'rangkum' && (
                                    <div className="ml-4 animate-fade-in flex items-center" style={{ minWidth: 340, minHeight: 180 }}>
                                        <div className="grid grid-cols-2 gap-x-6 gap-y-4 w-full">
                                            <Link to="/rangkum-banking" className="flex items-center gap-2 text-white text-sm font-bold block px-4 py-2 font-semibold text-white/80 rounded-xl transition-all duration-200 hover:bg-[#0075FF] hover:text-white" onClick={scrollToTop}>
                                                <i className="fa-solid fa-landmark text-xl"></i>
                                                <span>
                                                    BANK dan<br />Multifinance
                                                </span>
                                            </Link>
                                            <Link to="/rangkum-hospital" className="flex items-center gap-2 text-white text-sm font-bold block px-4 py-2 font-semibold text-white/80 rounded-xl transition-all duration-200 hover:bg-[#0075FF] hover:text-white" onClick={scrollToTop}>
                                                <i className="fa-solid fa-hospital text-xl"></i>
                                                <span>Health Care</span>
                                            </Link>
                                            <Link to="/rangkum-insurance" className="flex items-center gap-2 text-white text-sm font-bold block px-4 py-2 font-semibold text-white/80 rounded-xl transition-all duration-200 hover:bg-[#0075FF] hover:text-white" onClick={scrollToTop}>
                                                <i className="fa-solid fa-hand-holding-medical text-xl"></i>
                                                <span>Insurance</span>
                                            </Link>
                                            <Link to="/rangkum-humanr" className="flex items-center gap-2 text-white text-sm font-bold block px-4 py-2 font-semibold text-white/80 rounded-xl transition-all duration-200 hover:bg-[#0075FF] hover:text-white" onClick={scrollToTop}>
                                                <i className="fa-solid fa-users text-xl"></i>
                                                <span>
                                                    Human<br />Resource
                                                </span>
                                            </Link>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </li>
                        <li
                            className="relative group"
                            onMouseEnter={() => setActiveTab('blog')}
                        >
                            <div className="block px-4 py-2 font-medium text-[#222] rounded-xl transition-all duration-200 hover:bg-[#0075FF] hover:text-white cursor-pointer">
                                <div className="flex items-center gap-2">
                                    <span>News</span>
                                    <i className="fas fa-chevron-down text-xs"></i>
                                </div>
                            </div>

                            {/* DROPDOWN FULL WIDTH */}
                            <div
                                className="fixed left-0 top-[80px] w-full opacity-0 invisible group-hover:opacity-100 group-hover:visible z-[40] transition-all duration-300"
                                style={{
                                    background: 'rgba(20, 30, 55, 0.55)',
                                    backdropFilter: 'blur(18px)',
                                    WebkitBackdropFilter: 'blur(18px)',
                                    boxShadow: '0 0 16px 2px #4A9EFF, 0 0 0 1px #1C64DD',
                                    borderTop: '1.5px solid #2196FF',
                                    fontSize: '1rem',
                                }}
                                onMouseLeave={() => setActiveTab('null')}
                            >
                                <div className="max-w-7xl mx-auto flex px-8 py-6 gap-8">
                                    {/* Sidebar */}
                                    <div className="w-1/4 border-r border-white/20 pr-6">
                                        <ul className="space-y-4 text-white/90 font-semibold">
                                            <li
                                                onClick={() => setActiveTab('blog')}
                                                className={`cursor-pointer hover:text-[#4A9EFF] transition ${activeTab === 'blog' ? 'text-[#4A9EFF] font-bold' : ''}`}
                                            >
                                                Blog
                                            </li>
                                            <li
                                                onClick={() => setActiveTab('events')}
                                                className={`cursor-pointer hover:text-[#4A9EFF] transition ${activeTab === 'events' ? 'text-[#4A9EFF] font-bold' : ''}`}
                                            >
                                                Events
                                            </li>
                                            <li
                                                onClick={() => setActiveTab('case')}
                                                className={`cursor-pointer hover:text-[#4A9EFF] transition ${activeTab === 'case' ? 'text-[#4A9EFF] font-bold' : ''}`}
                                            >
                                                Case Study
                                            </li>
                                        </ul>
                                    </div>

                                    {/* Konten Utama */}
                                    <div className="w-3/4">
                                        {activeTab === 'blog' && (
                                            <>
                                                <div className="grid grid-cols-3 gap-6 mb-4 animate-fade-in">
                                                    <div className="bg-white/10 rounded-xl overflow-hidden shadow">
                                                        <img src="/images/DummyContent.svg" className="w-full" />
                                                        <div className="p-4 font-semibold text-white text-sm">Judul Artikel Blog 1</div>
                                                    </div>
                                                    <div className="bg-white/10 rounded-xl overflow-hidden shadow">
                                                        <img src="/images/DummyContent.svg" className="w-full" />
                                                        <div className="p-4 font-semibold text-white text-sm">Judul Artikel Blog 2</div>
                                                    </div>
                                                    <div className="bg-white/10 rounded-xl overflow-hidden shadow">
                                                        <img src="/images/DummyContent.svg" className="w-full" />
                                                        <div className="p-4 font-semibold text-white text-sm">Judul Artikel Blog 3</div>
                                                    </div>
                                                </div>
                                                <div className="flex justify-start">
                                                    <Link to="/blog" className="text-white hover:underline font-medium flex items-center gap-2">
                                                        View all Blog <span className="text-lg">&rarr;</span>
                                                    </Link>
                                                </div>
                                            </>
                                        )}
                                        {activeTab === 'events' && (
                                            <>
                                                <div className="grid grid-cols-3 gap-6 mb-4 animate-fade-in">
                                                    <div className="bg-white/10 rounded-xl overflow-hidden shadow">
                                                        <img src="/images/DummyContent.svg" className="w-full" />
                                                        <div className="p-4 font-semibold text-white text-sm">Judul Events 1</div>
                                                    </div>
                                                    <div className="bg-white/10 rounded-xl overflow-hidden shadow">
                                                        <img src="/images/DummyContent.svg" className="w-full" />
                                                        <div className="p-4 font-semibold text-white text-sm">Judul Events 2</div>
                                                    </div>
                                                    <div className="bg-white/10 rounded-xl overflow-hidden shadow">
                                                        <img src="/images/DummyContent.svg" className="w-full" />
                                                        <div className="p-4 font-semibold text-white text-sm">Judul Events 3</div>
                                                    </div>
                                                </div>
                                                <div className="flex justify-start">
                                                    <Link to="/events" className="text-white hover:underline font-medium flex items-center gap-2">
                                                        View all Events <span className="text-lg">&rarr;</span>
                                                    </Link>
                                                </div>
                                            </>
                                        )}
                                        {activeTab === 'case' && (
                                            <>
                                                <div className="grid grid-cols-3 gap-6 mb-4 animate-fade-in">
                                                    <div className="bg-white/10 rounded-xl overflow-hidden shadow">
                                                        <img src="/images/DummyContent.svg" className="w-full" />
                                                        <div className="p-4 font-semibold text-white text-sm">Judul Case Study 1</div>
                                                    </div>
                                                    <div className="bg-white/10 rounded-xl overflow-hidden shadow">
                                                        <img src="/images/DummyContent.svg" className="w-full" />
                                                        <div className="p-4 font-semibold text-white text-sm">Judul Case Study 2</div>
                                                    </div>
                                                    <div className="bg-white/10 rounded-xl overflow-hidden shadow">
                                                        <img src="/images/DummyContent.svg" className="w-full" />
                                                        <div className="p-4 font-semibold text-white text-sm">Judul Case Study 3</div>
                                                    </div>
                                                </div>
                                                <div className="flex justify-start">
                                                    <Link to="/casestudy" className="text-white hover:underline font-medium flex items-center gap-2">
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
                    {/* Request Demo Button */}
                    <Link to="/demo-email" className="bg-[#0A7AFF] text-white px-5 py-2 rounded-lg font-semibold shadow hover:bg-[#1976ED] transition" onClick={scrollToTop}>
                        Request Demo
                    </Link>
                </nav>
            </header>

            {/* Main Content */}
            <main className="flex-1 w-full pt-[80px]">
                <Outlet />
            </main>

            {/* Footer */}
            <footer className="bg-[#0A7AFF] mt-auto text-white">
                <div className="max-w-6xl mx-auto px-8 py-14 flex flex-col md:flex-row justify-between items-start gap-10">
                    {/* Left: Logo & Social */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <img src="/Logo-PutihManusiaAi.svg" alt="Manusia.AI" className="h-8 w-auto" />
                        </div>
                        <div className="flex gap-4 mb-6">
                            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-lg border border-white/30 hover:bg-white/10 transition">
                                <i className="fab fa-linkedin-in text-white text-lg"></i>
                            </a>
                            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-lg border border-white/30 hover:bg-white/10 transition">
                                <i className="fab fa-instagram text-white text-lg"></i>
                            </a>
                            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-lg border border-white/30 hover:bg-white/10 transition">
                                <i className="fab fa-whatsapp text-white text-lg"></i>
                            </a>
                        </div>
                    </div>
                    {/* Right: Menu */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-10 w-full">
                        <div>
                            <h4 className="text-lg font-bold mb-3">About</h4>
                        </div>
                        <div>
                            <h4 className="text-lg font-bold mb-3">Products</h4>
                            <ul className="space-y-2">
                                <li><Link to="/brilian-ai" className="text-white/90 hover:underline">Brilian.AI</Link></li>
                                <li><Link to="/rangkum-ai" className="text-white/90 hover:underline">Rangkum.AI</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-lg font-bold mb-3">Industries</h4>
                            <ul className="space-y-2">
                                <li><Link to="/industries" className="text-white/90 hover:underline">All Industries</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-lg font-bold mb-3">Blog</h4>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}