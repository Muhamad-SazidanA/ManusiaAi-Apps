import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { FaWhatsapp, FaBars, FaTimes, FaChevronDown, FaChevronUp } from "react-icons/fa";

export default function Template() {
    const [activeTab, setActiveTab] = useState(null);
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [mobileDropdown, setMobileDropdown] = useState({
        about: false,
        products: false,
        industries: false,
        news: false,
    });

    const handleNavigation = (url) => {
        window.location.href = url;
    };

    React.useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }, [mobileMenuOpen]);

    React.useEffect(() => {
        if (!mobileMenuOpen) {
            setMobileDropdown({
                about: false,
                products: false,
                industries: false,
                news: false,
            });
        }
    }, [mobileMenuOpen]);

    return (
        <div className="min-h-screen flex flex-col bg-[#F6F8FB] text-[#222]">
            {/* Floating WhatsApp Button */}
            <a
                href="https://wa.me/628973923000"
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
            <header className={`w-full bg-white fixed top-0 left-0 z-50 transition-all duration-300 shadow-[0_8px_32px_0_rgba(180,180,180,0.18)] border-b border-gray-200`}>
                <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-10 py-6 min-h-[96px]">
                    {/* Logo - Left */}
                    <div className="flex items-center flex-shrink-0">
                        <Link
                            onClick={() => handleNavigation('/')}
                            className="flex items-center gap-3"
                        >
                            <img
                                src="/LogoUtama-Manusia.Ai.svg"
                                alt="Manusia.AI"
                                className={`h-10 w-auto transition-all duration-200 ${mobileMenuOpen ? 'h-8' : 'h-10'}`}
                            />
                        </Link>
                    </div>

                    {/* Navbar - Center */}
                    <ul className="hidden lg:flex items-center gap-2 md:gap-4 font-medium text-[#222] mx-auto">
                        <li>
                            <Link onClick={() => handleNavigation('/')} className="relative px-4 py-2 rounded-lg transition-all duration-200 hover:bg-[#F0F7FF] hover:text-[#1976ED]">Home</Link>
                        </li>
                        <li className="relative group"
                            onMouseEnter={() => setActiveTab('about')}
                            onMouseLeave={() => setActiveTab(null)}
                        >
                            <div className="flex items-center gap-1 px-4 py-2 rounded-lg transition-all duration-200 hover:bg-[#F0F7FF] hover:text-[#1976ED] cursor-pointer">
                                <span>About</span>
                                <FaChevronDown className="text-xs" />
                            </div>
                            {activeTab === 'about' && (
                                <div className="absolute top-full left-1/2 -translate-x-1/2 rounded-xl z-50 overflow-hidden min-w-[150px] bg-white border border-[#E5E7EB] shadow-lg">
                                    <div className="p-3">
                                        <Link onClick={() => handleNavigation('/history')} className="block px-3 py-2 rounded-lg hover:bg-[#F0F7FF] hover:text-[#1976ED] text-[#444]">History</Link>
                                        <Link onClick={() => handleNavigation('/contact-us')} className="block px-3 py-2 rounded-lg hover:bg-[#F0F7FF] hover:text-[#1976ED] text-[#444]">Contact Us</Link>
                                    </div>
                                </div>
                            )}
                        </li>
                        <li>
                            <Link onClick={() => handleNavigation('/solutions')} className="relative px-4 py-2 rounded-lg transition-all duration-200 hover:bg-[#F0F7FF] hover:text-[#1976ED]">Solutions</Link>
                        </li>

                        {/* --- KEEP THIS PRODUCTS & INDUSTRIES DROPDOWN --- */}
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
                        <li
                            className="relative group"
                            onMouseEnter={() => setActiveTab('news')}
                            onMouseLeave={() => setActiveTab(null)}
                        >
                            <div className="flex items-center gap-1 px-3 py-2 rounded-lg transition-all duration-200 hover:bg-[#F0F7FF] hover:text-[#1976ED] cursor-pointer">
                                <span>News</span>
                                <i className="fas fa-chevron-down text-xs"></i>
                            </div>
                            <div
                                className="absolute top-full left-0 mt-2 rounded-xl z-50 overflow-hidden transition-all duration-300 opacity-0 invisible group-hover:opacity-100 group-hover:visible min-w-[160px] bg-white border border-[#E5E7EB]"
                                style={{
                                    boxShadow: '0 4px 20px rgba(25, 118, 237, 0.12), 0 1px 3px rgba(0, 0, 0, 0.05)'
                                }}
                            >
                                <div className="p-3">
                                    <Link onClick={() => handleNavigation('/blog')} className="relative px-3 py-2 rounded-lg transition-all duration-200 hover:bg-[#F0F7FF] hover:text-[#1976ED] focus:bg-[#F0F7FF] focus:text-[#1976ED] text-[#444] flex items-center gap-2 w-full">
                                        <i className="fa-solid fa-brain text-[#1976ED] text-lg"></i> Blogs
                                    </Link>
                                    <Link onClick={() => handleNavigation('/events')} className="relative px-3 py-2 rounded-lg transition-all duration-200 hover:bg-[#F0F7FF] hover:text-[#1976ED] focus:bg-[#F0F7FF] focus:text-[#1976ED] text-[#444] flex items-center gap-2 w-full">
                                        <i className="fa-solid fa-file-lines text-[#1976ED] text-lg"></i> Events
                                    </Link>
                                    <Link onClick={() => handleNavigation('/casestudy')} className="relative px-3 py-2 rounded-lg transition-all duration-200 hover:bg-[#F0F7FF] hover:text-[#1976ED] focus:bg-[#F0F7FF] focus:text-[#1976ED] text-[#444] flex items-center gap-2 w-full whitespace-nowrap">
                                        <i className="fa-solid fa-file-lines text-[#1976ED] text-lg"></i> Case Study
                                    </Link>
                                </div>
                            </div>
                        </li>
                    </ul>

                    {/* Request Demo - Right */}
                    <div className="hidden lg:flex items-center flex-shrink-0">
                        <Link
                            onClick={() => handleNavigation('/demo-email')}
                            className="bg-[#0A7AFF] text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-[#1976ED] transition"
                        >
                            Request Demo
                        </Link>
                    </div>

                    {/* Hamburger Button */}
                    <button
                        className="lg:hidden flex items-center justify-center p-2 rounded-md text-[#0377FF] focus:outline-none z-50"
                        onClick={() => setMobileMenuOpen(true)}
                        aria-label="Open menu"
                    >
                        <FaBars size={28} />
                    </button>

                    {/* Mobile Menu Overlay */}
                    {mobileMenuOpen && (
                        <div className="fixed inset-0 z-50 bg-black/40 flex">
                            {/* Slide Menu from left */}
                            <div className="mr-auto w-4/5 max-w-xs bg-white h-full shadow-lg flex flex-col py-6 px-6 animate-slide-in-left overflow-y-auto">
                                <div className="flex justify-between items-center mb-8">
                                    <img src="/LogoUtama-Manusia.Ai.svg" alt="Manusia.AI" className="h-8 w-auto" />
                                    <button
                                        className="text-[#0377FF] p-2\ rounded-md focus:outline-none"
                                        onClick={() => setMobileMenuOpen(false)}
                                        aria-label="Close menu"
                                    >
                                        <FaTimes size={28} />
                                    </button>
                                </div>
                                <nav className="flex flex-col gap-2">
                                    <Link onClick={() => { setMobileMenuOpen(false); handleNavigation('/'); }} className="py-2 px-2 rounded-lg hover:bg-[#F0F7FF] font-semibold">Home</Link>
                                    {/* About */}
                                    <button
                                        className="flex items-center justify-between w-full py-2 px-2 rounded-lg hover:bg-[#F0F7FF] font-semibold"
                                        onClick={() => setMobileDropdown(d => ({ ...d, about: !d.about }))}
                                    >
                                        <span>About</span>
                                        {mobileDropdown.about ? <FaChevronUp /> : <FaChevronDown />}
                                    </button>
                                    {mobileDropdown.about && (
                                        <div className="ml-4 flex flex-col gap-1">
                                            <Link onClick={() => { setMobileMenuOpen(false); handleNavigation('/history'); }} className="block py-2 px-2 rounded-lg hover:bg-[#F0F7FF]">History</Link>
                                            <Link onClick={() => { setMobileMenuOpen(false); handleNavigation('/contact-us'); }} className="block py-2 px-2 rounded-lg hover:bg-[#F0F7FF]">Contact Us</Link>
                                        </div>
                                    )}
                                    {/* Solutions */}
                                    <Link onClick={() => { setMobileMenuOpen(false); handleNavigation('/solutions'); }} className="py-2 px-2 rounded-lg hover:bg-[#F0F7FF] font-semibold">Solutions</Link>
                                    {/* Products */}
                                    <button
                                        className="flex items-center justify-between w-full py-2 px-2 rounded-lg hover:bg-[#F0F7FF] font-semibold"
                                        onClick={() => setMobileDropdown(d => ({ ...d, products: !d.products }))}
                                    >
                                        <span>Products</span>
                                        {mobileDropdown.products ? <FaChevronUp /> : <FaChevronDown />}
                                    </button>
                                    {mobileDropdown.products && (
                                        <div className="ml-4 flex flex-col gap-1">
                                            <Link onClick={() => { setMobileMenuOpen(false); handleNavigation('/brilian-ai'); }} className="block py-2 px-2 rounded-lg hover:bg-[#F0F7FF]">Brilian.AI</Link>
                                            <Link onClick={() => { setMobileMenuOpen(false); handleNavigation('/rangkum-ai'); }} className="block py-2 px-2 rounded-lg hover:bg-[#F0F7FF]">Rangkum.AI</Link>
                                        </div>
                                    )}
                                    {/* Industries */}
                                    <button
                                        className="flex items-center justify-between w-full py-2 px-2 rounded-lg hover:bg-[#F0F7FF] font-semibold"
                                        onClick={() => setMobileDropdown(d => ({ ...d, industries: !d.industries }))}
                                    >
                                        <span>Industries</span>
                                        {mobileDropdown.industries ? <FaChevronUp /> : <FaChevronDown />}
                                    </button>
                                    {mobileDropdown.industries && (
                                        <div className="ml-4 flex flex-col gap-1">
                                            {/* Brilian.AI Submenu */}
                                            <button
                                                className="flex items-center justify-between w-full py-2 px-2 rounded-lg hover:bg-[#F0F7FF] font-semibold"
                                                onClick={() => setMobileDropdown(d => ({ ...d, industriesBrilian: !d.industriesBrilian }))}
                                            >
                                                <span>Brilian.AI</span>
                                                {mobileDropdown.industriesBrilian ? <FaChevronUp /> : <FaChevronDown />}
                                            </button>
                                            {mobileDropdown.industriesBrilian && (
                                                <div className="ml-4 flex flex-col gap-1">
                                                    <Link onClick={() => { setMobileMenuOpen(false); handleNavigation('/brilianai-banking'); }} className="block py-2 px-2 rounded-lg hover:bg-[#F0F7FF]">BANK & Multifinance</Link>
                                                    <Link onClick={() => { setMobileMenuOpen(false); handleNavigation('/brilianai-hospital'); }} className="block py-2 px-2 rounded-lg hover:bg-[#F0F7FF]">Health Care</Link>
                                                    <Link onClick={() => { setMobileMenuOpen(false); handleNavigation('/brilianai-insurance'); }} className="block py-2 px-2 rounded-lg hover:bg-[#F0F7FF]">Insurance</Link>
                                                    <Link onClick={() => { setMobileMenuOpen(false); handleNavigation('/brilianai-humanr'); }} className="block py-2 px-2 rounded-lg hover:bg-[#F0F7FF]">Human Resource</Link>
                                                    <Link onClick={() => { setMobileMenuOpen(false); handleNavigation('/brilianai-fmgc'); }} className="block py-2 px-2 rounded-lg hover:bg-[#F0F7FF]">FMGC</Link>
                                                </div>
                                            )}
                                            {/* Rangkum.AI Submenu */}
                                            <button
                                                className="flex items-center justify-between w-full py-2 px-2 rounded-lg hover:bg-[#F0F7FF] font-semibold"
                                                onClick={() => setMobileDropdown(d => ({ ...d, industriesRangkum: !d.industriesRangkum }))}
                                            >
                                                <span>Rangkum.AI</span>
                                                {mobileDropdown.industriesRangkum ? <FaChevronUp /> : <FaChevronDown />}
                                            </button>
                                            {mobileDropdown.industriesRangkum && (
                                                <div className="ml-4 flex flex-col gap-1">
                                                    <Link onClick={() => { setMobileMenuOpen(false); handleNavigation('/rangkum-banking'); }} className="block py-2 px-2 rounded-lg hover:bg-[#F0F7FF]">BANK & Multifinance</Link>
                                                    <Link onClick={() => { setMobileMenuOpen(false); handleNavigation('/rangkum-hospital'); }} className="block py-2 px-2 rounded-lg hover:bg-[#F0F7FF]">Health Care</Link>
                                                    <Link onClick={() => { setMobileMenuOpen(false); handleNavigation('/rangkum-insurance'); }} className="block py-2 px-2 rounded-lg hover:bg-[#F0F7FF]">Insurance</Link>
                                                    <Link onClick={() => { setMobileMenuOpen(false); handleNavigation('/rangkum-humanr'); }} className="block py-2 px-2 rounded-lg hover:bg-[#F0F7FF]">Human Resource</Link>
                                                </div>
                                            )}
                                        </div>
                                    )}
                                    {/* News */}
                                    <button
                                        className="flex items-center justify-between w-full py-2 px-2 rounded-lg hover:bg-[#F0F7FF] font-semibold"
                                        onClick={() => setMobileDropdown(d => ({ ...d, news: !d.news }))}
                                    >
                                        <span>News</span>
                                        {mobileDropdown.news ? <FaChevronUp /> : <FaChevronDown />}
                                    </button>
                                    {mobileDropdown.news && (
                                        <div className="ml-4 flex flex-col gap-1">
                                            <Link onClick={() => { setMobileMenuOpen(false); handleNavigation('/blog'); }} className="block py-2 px-2 rounded-lg hover:bg-[#F0F7FF]">Blogs</Link>
                                            <Link onClick={() => { setMobileMenuOpen(false); handleNavigation('/events'); }} className="block py-2 px-2 rounded-lg hover:bg-[#F0F7FF]">Events</Link>
                                            <Link onClick={() => { setMobileMenuOpen(false); handleNavigation('/casestudy'); }} className="block py-2 px-2 rounded-lg hover:bg-[#F0F7FF]">Case Study</Link>
                                        </div>
                                    )}
                                    {/* Request Demo */}
                                    <Link
                                        onClick={() => { setMobileMenuOpen(false); handleNavigation('/demo-email'); }}
                                        className="w-full bg-[#0A7AFF] text-white py-3 rounded-lg font-semibold shadow hover:bg-[#1976ED] transition text-center "
                                    >
                                        Request Demo
                                    </Link>
                                </nav>
                            </div>
                            {/* Overlay click to close */}
                            <div className="flex-1" onClick={() => setMobileMenuOpen(false)} />
                        </div>
                    )}
                </nav>
            </header>

            {/* Main Content */}
            <main className={`flex-1 w-full ${mobileMenuOpen ? 'pt-[112px]' : 'pt-[80px]'}`}>
                <Outlet />
            </main>

            {/* Footer */}
            <footer className="bg-[#162447] mt-auto text-white">
                <div className="max-w-6xl mx-auto px-4 md:px-8 py-10 md:py-14 w-full">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-10">
                        {/* Brand & Social */}
                        <div className="flex flex-col items-center md:items-start mb-8 md:mb-0 w-full md:w-1/3">
                            <img src="/Logo-PutihManusiaAi.svg" alt="Manusia.AI" className="h-14 w-auto mb-5 drop-shadow-lg" />
                            <p className="text-white/80 text-base max-w-xs mb-6 text-center md:text-left leading-relaxed">
                                Di Manusia.AI, kami percaya teknologi AI harus mudah diakses, relevan dengan konteks lokal, dan berdampak langsung bagi bisnis. Kami membantu perusahaan Indonesia menghadirkan efisiensi, inovasi, dan keputusan berbasis data secara menyeluruh.
                            </p>
                            <div className="flex gap-3 mt-2">
                                <a href="#" className="w-10 h-10 flex items-center justify-center rounded-lg border border-white/30 hover:bg-white/10 transition">
                                    <i className="fab fa-linkedin-in text-white text-xl"></i>
                                </a>
                                <a href="#" className="w-10 h-10 flex items-center justify-center rounded-lg border border-white/30 hover:bg-white/10 transition">
                                    <i className="fab fa-instagram text-white text-xl"></i>
                                </a>
                                <a href="#" className="w-10 h-10 flex items-center justify-center rounded-lg border border-white/30 hover:bg-white/10 transition">
                                    <i className="fab fa-whatsapp text-white text-xl"></i>
                                </a>
                            </div>
                        </div>
                        {/* Navigation */}
                        <div className="flex-1 flex flex-col sm:flex-row justify-between gap-8">
                            <div className="w-full">
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                                    {/* Company */}
                                    <div>
                                        <h4 className="font-semibold mb-3 text-white/90 text-center sm:text-left">Company</h4>
                                        <ul className="flex flex-wrap justify-center sm:justify-start gap-y-2 gap-x-0 sm:flex-col sm:gap-0 text-white/80 text-sm list-none p-0 m-0">
                                            <li className="w-1/2 sm:w-auto text-center sm:text-left">
                                                <Link to="/" className="hover:underline block py-1 sm:py-0">Home</Link>
                                            </li>
                                            <li className="w-1/2 sm:w-auto text-center sm:text-left">
                                                <Link to="#" className="hover:underline block py-1 sm:py-0">About</Link>
                                            </li>
                                            <li className="w-1/2 sm:w-auto text-center sm:text-left">
                                                <Link to="/solutions" className="hover:underline block py-1 sm:py-0">Solutions</Link>
                                            </li>
                                            <li className="w-1/2 sm:w-auto text-center sm:text-left">
                                                <Link to="/industries" className="hover:underline block py-1 sm:py-0">Industries</Link>
                                            </li>
                                        </ul>
                                    </div>
                                    {/* Products */}
                                    <div>
                                        <h4 className="font-semibold mb-3 text-white/90 text-center sm:text-left">Products</h4>
                                        <ul className="flex flex-wrap justify-center sm:justify-start gap-y-2 gap-x-0 sm:flex-col sm:gap-0 text-white/80 text-sm list-none p-0 m-0">
                                            <li className="w-1/2 sm:w-auto text-center sm:text-left">
                                                <Link to="/brilian-ai" className="hover:underline block py-1 sm:py-0">Brilian.AI</Link>
                                            </li>
                                            <li className="w-1/2 sm:w-auto text-center sm:text-left">
                                                <Link to="/rangkum-ai" className="hover:underline block py-1 sm:py-0">Rangkum.AI</Link>
                                            </li>
                                        </ul>
                                    </div>
                                    {/* Resources */}
                                    <div>
                                        <h4 className="font-semibold mb-3 text-white/90 text-center sm:text-left">Resources</h4>
                                        <ul className="flex flex-wrap justify-center sm:justify-start gap-y-2 gap-x-0 sm:flex-col sm:gap-0 text-white/80 text-sm list-none p-0 m-0">
                                            <li className="w-1/2 sm:w-auto text-center sm:text-left">
                                                <Link to="/blog" className="hover:underline block py-1 sm:py-0">Blog</Link>
                                            </li>
                                            <li className="w-1/2 sm:w-auto text-center sm:text-left">
                                                <Link to="/events" className="hover:underline block py-1 sm:py-0">Events</Link>
                                            </li>
                                            <li className="w-1/2 sm:w-auto text-center sm:text-left">
                                                <Link to="/casestudy" className="hover:underline block py-1 sm:py-0">Case Study</Link>
                                            </li>
                                            <li className="w-1/2 sm:w-auto text-center sm:text-left">
                                                <Link to="/demo-email" className="hover:underline block py-1 sm:py-0">Request Demo</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-white/20 mt-10 pt-6 text-center text-white/60 text-xs">
                        &copy; {new Date().getFullYear()} Manusia.AI. All rights reserved.
                    </div>
                </div>
            </footer>
            <style>
                {`
@media (max-width: 640px) {
    .grid-cols-1 > div {
        margin-bottom: 2rem;
    }
    footer ul {
        font-size: 0.8rem;
    }
    footer ul {
        justify-content: center !important;
    }
    footer ul li {
        width: 50% !important;
        text-align: center !important;
        padding-left: 0 !important;
        padding-right: 0 !important;
    }
    footer h4 {
        text-align: center !important;
    }
}
`}
            </style>
        </div>
    );
}