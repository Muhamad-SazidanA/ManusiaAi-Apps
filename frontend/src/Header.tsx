import { useState } from 'react';
import { Button } from './ui/button';
import { Menu, X, ChevronDown } from 'lucide-react';
import { LanguageSelector } from './LanguageSelector';
import { useTranslation } from './TranslationContext';
import { useRouter } from './Router';

export function Header() {
  const { t } = useTranslation();
  const { navigateTo, currentPage } = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navigation = [
    {
      name: t('nav.platform'),
      href: '#platform',
      dropdown: [
        { name: t('nav.dropdown.ai.processing'), href: '#ai-processing', page: 'ai-processing' },
        { name: t('nav.dropdown.json.output'), href: '#json-output', page: 'json-output' },
        { name: t('nav.dropdown.no.template'), href: '#no-template', page: 'no-template' },
        { name: t('nav.dropdown.deployment'), href: '#deployment', page: 'deployment' },
      ]
    },
    {
      name: t('nav.solutions'),
      href: '#solutions',
      dropdown: [
        { name: t('nav.dropdown.customer.onboarding'), href: '#customer-onboarding', page: 'customer-onboarding' },
        { name: t('nav.dropdown.accounts.payable'), href: '#accounts-payable', page: 'accounts-payable' },
        { name: t('nav.dropdown.purchase.orders'), href: '#purchase-orders', page: 'purchase-orders' },
        { name: t('nav.dropdown.industry.solutions'), href: '#industry-solutions', page: 'industry-solutions' },
      ]
    },
    { 
      name: t('nav.customers'), 
      href: '#customers',
      dropdown: [
        { name: t('nav.dropdown.banking'), href: '#banking', page: 'banking' },
        { name: t('nav.dropdown.insurance'), href: '#insurance', page: 'insurance' },
        { name: t('nav.dropdown.healthcare'), href: '#healthcare', page: 'healthcare' },
        { name: t('nav.dropdown.logistics'), href: '#logistics', page: 'logistics' },
        { name: t('nav.dropdown.education'), href: '#education', page: 'education' },
        { name: t('nav.dropdown.manufacturing'), href: '#manufacturing', page: 'manufacturing' },
      ]
    },
    { 
      name: t('nav.partners'), 
      href: '#partners',
      dropdown: [
        { name: t('nav.dropdown.partnership.opportunities'), href: '#partnership-opportunities', page: 'partnership-opportunities' },
        { name: t('nav.dropdown.partner.benefits'), href: '#partner-benefits', page: 'partner-benefits' },
        { name: t('nav.dropdown.partner.types'), href: '#partner-types', page: 'partner-types' },
      ]
    },
    { 
      name: t('nav.resources'), 
      href: '#resources',
      dropdown: [
        { name: t('nav.dropdown.blog'), href: '#blog', page: 'blog' },
        { name: t('nav.dropdown.case.studies'), href: '#case-studies', page: 'case-studies' },
        { name: t('nav.dropdown.whitepapers'), href: '#whitepapers', page: 'whitepapers' },
        { name: t('nav.dropdown.webinars'), href: '#webinars', page: 'webinars' },
      ]
    },
    { 
      name: t('nav.company'), 
      href: '#company',
      dropdown: [
        { name: t('nav.dropdown.about'), href: '#about', page: 'about' },
        { name: t('nav.dropdown.newsroom'), href: '#newsroom', page: 'newsroom' },
        { name: t('nav.dropdown.careers'), href: '#careers', page: 'careers' },
        { name: t('nav.dropdown.contact'), href: '#contact', page: 'contact' },
      ]
    },
  ];

  const handleNavigation = (item: any) => {
    console.log('Navigation clicked:', item); // Debug log
    
    if (item.page) {
      console.log('Navigating to page:', item.page); // Debug log
      navigateTo(item.page);
    } else if (item.href) {
      console.log('Scrolling to section:', item.href); // Debug log
      if (currentPage !== 'home') {
        navigateTo('home');
        setTimeout(() => {
          document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  const handleLogoClick = () => {
    navigateTo('home');
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-border sticky top-0 z-50 shadow-sm supports-[backdrop-filter]:bg-white/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div 
              className="flex items-center space-x-2 group cursor-pointer"
              onClick={handleLogoClick}
            >
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                <span className="text-primary-foreground font-bold text-sm">R</span>
              </div>
              <span className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-200">
                rangkum.ai
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  id={item.dropdown ? `${item.name}-menu-button` : undefined}
                  onClick={() => handleNavigation(item)}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200 flex items-center space-x-1 py-2 px-3 rounded-lg hover:bg-accent/50 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  aria-expanded={item.dropdown && activeDropdown === item.name}
                  aria-haspopup={item.dropdown ? 'menu' : undefined}
                  type="button"
                >
                  <span>{item.name}</span>
                  {item.dropdown && (
                    <ChevronDown 
                      className={`w-3 h-3 transition-transform duration-200 ${
                        activeDropdown === item.name ? 'rotate-180' : ''
                      }`} 
                    />
                  )}
                </button>
                
                {/* Dropdown Menu */}
                {item.dropdown && activeDropdown === item.name && (
                  <div 
                    className="absolute top-full left-0 mt-1 w-64 bg-white rounded-xl shadow-lg border border-border py-2 z-50 animate-in fade-in-0 zoom-in-95"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby={`${item.name}-menu-button`}
                  >
                    {item.dropdown.map((dropdownItem) => (
                      <button
                        key={dropdownItem.name}
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          console.log('Dropdown item clicked:', dropdownItem); // Debug log
                          handleNavigation(dropdownItem);
                        }}
                        className="block w-full text-left px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-accent transition-colors duration-200 rounded-lg mx-2 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                        role="menuitem"
                        tabIndex={0}
                      >
                        {dropdownItem.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Language Selector & CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <LanguageSelector />
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => navigateTo('demo')}
              className="hover:bg-accent transition-colors duration-200"
            >
              {t('nav.demo')}
            </Button>
            <Button 
              size="sm" 
              onClick={() => navigateTo('free-trial')}
              className="shadow-sm hover:shadow-md transition-all duration-200"
            >
              {t('nav.getstarted')}
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <LanguageSelector />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border bg-white/95 backdrop-blur-sm supports-[backdrop-filter]:bg-white/90">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <div key={item.name}>
                  <button
                    onClick={() => handleNavigation(item)}
                    className="block w-full text-left px-3 py-2 text-muted-foreground hover:text-foreground hover:bg-accent rounded-md transition-colors duration-200 font-medium"
                  >
                    {item.name}
                  </button>
                  {item.dropdown && (
                    <div className="ml-4 space-y-1">
                      {item.dropdown.map((dropdownItem) => (
                        <button
                          key={dropdownItem.name}
                          onClick={() => handleNavigation(dropdownItem)}
                          className="block w-full text-left px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground hover:bg-accent rounded-md transition-colors duration-200"
                        >
                          {dropdownItem.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="px-3 py-2 space-y-2 border-t border-border mt-4 pt-4">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full"
                  onClick={() => {
                    navigateTo('demo');
                    setIsMenuOpen(false);
                  }}
                >
                  {t('nav.demo')}
                </Button>
                <Button 
                  size="sm" 
                  className="w-full"
                  onClick={() => {
                    navigateTo('free-trial');
                    setIsMenuOpen(false);
                  }}
                >
                  {t('nav.getstarted')}
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}