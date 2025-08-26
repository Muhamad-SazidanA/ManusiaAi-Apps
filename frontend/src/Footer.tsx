import { Button } from './ui/button';
import { Separator } from './ui/separator';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Twitter, 
  Github,
  Shield,
  Globe,
  FileText,
  Users,
  Building2,
  Send
} from 'lucide-react';

export function Footer() {
  const footerSections = [
    {
      title: "Platform",
      links: [
        { name: "Pemrosesan Dokumen AI", href: "#ai-processing" },
        { name: "Output API JSON", href: "#json-output" },
        { name: "Ekstraksi Tanpa Template", href: "#no-template" },
        { name: "Opsi Implementasi", href: "#deployment" },
        { name: "Dokumentasi API", href: "#resources" }
      ]
    },
    {
      title: "Solusi",
      links: [
        { name: "Onboarding Nasabah", href: "#customer-onboarding" },
        { name: "Pembayaran Tagihan", href: "#accounts-payable" },
        { name: "Purchase Order", href: "#purchase-orders" },
        { name: "Perbankan", href: "#banking" },
        { name: "Kesehatan", href: "#healthcare" }
      ]
    },
    {
      title: "Sumber Daya",
      links: [
        { name: "Blog", href: "#blog" },
        { name: "Studi Kasus", href: "#case-studies" },
        { name: "Whitepaper", href: "#whitepapers" },
        { name: "Webinar", href: "#webinars" },
        { name: "Developer Tools", href: "#resources" }
      ]
    },
    {
      title: "Perusahaan",
      links: [
        { name: "Tentang Kami", href: "#about" },
        { name: "Karier", href: "#careers" },
        { name: "Newsroom", href: "#newsroom" },
        { name: "Mitra", href: "#partners" },
        { name: "Hubungi Kami", href: "#contact" }
      ]
    }
  ];

  const compliance = [
    { name: "ISO 27001", icon: <Shield className="w-4 h-4" /> },
    { name: "GDPR Compliant", icon: <Globe className="w-4 h-4" /> },
    { name: "SOC 2 Type II", icon: <FileText className="w-4 h-4" /> },
    { name: "Data Lokalisasi", icon: <Building2 className="w-4 h-4" /> }
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-primary-foreground rounded-lg flex items-center justify-center">
                <span className="text-primary font-semibold">R</span>
              </div>
              <span className="text-xl font-semibold">rangkum.ai</span>
            </div>
            <p className="text-primary-foreground/80 mb-6 text-sm leading-relaxed">
              Transformasi setiap dokumen menjadi data terstruktur yang bersih dengan 
              platform Pemrosesan Dokumen Cerdas berbasis AI kami.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2 text-primary-foreground/80">
                <Mail className="w-4 h-4" />
                <a href="mailto:sales@rangkum.ai" className="hover:text-primary-foreground transition-colors">
                  sales@rangkum.ai
                </a>
              </div>
              <div className="flex items-center space-x-2 text-primary-foreground/80">
                <Phone className="w-4 h-4" />
                <a href="tel:+6289739230000" className="hover:text-primary-foreground transition-colors">
                  +62 897 392 3000
                </a>
              </div>
              <div className="flex items-start space-x-2 text-primary-foreground/80">
                <MapPin className="w-4 h-4 mt-1" />
                <span>Cideng, Jakarta Pusat<br />Indonesia</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              <Button variant="ghost" size="sm" className="text-primary-foreground/80 hover:text-primary-foreground p-2">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-primary-foreground/80 hover:text-primary-foreground p-2">
                <Linkedin className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-primary-foreground/80 hover:text-primary-foreground p-2">
                <Github className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Footer Links */}
          <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8">
            {footerSections.map((section, index) => (
              <div key={index}>
                <h4 className="font-semibold mb-4">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a 
                        href={link.href}
                        className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-4 lg:space-y-0">
            <div>
              <h4 className="font-semibold mb-2">Tetap Update</h4>
              <p className="text-sm text-primary-foreground/80">
                Dapatkan insights terbaru tentang AI document processing dan automasi bisnis.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
              <input
                type="email"
                placeholder="Masukkan email Anda"
                className="px-4 py-2 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder-primary-foreground/60 text-sm min-w-64"
              />
              <Button variant="secondary" size="sm" className="px-6 flex items-center">
                <Send className="w-4 h-4 mr-2" />
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-primary-foreground/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-6 lg:space-y-0">
            {/* Compliance Badges */}
            <div className="flex flex-wrap items-center gap-4">
              {compliance.map((item, index) => (
                <div key={index} className="flex items-center space-x-2 text-xs text-primary-foreground/80">
                  {item.icon}
                  <span>{item.name}</span>
                </div>
              ))}
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap items-center space-x-6 text-xs text-primary-foreground/80">
              <a href="#" className="hover:text-primary-foreground transition-colors">
                Kebijakan Privasi
              </a>
              <a href="#" className="hover:text-primary-foreground transition-colors">
                Syarat & Ketentuan
              </a>
              <a href="#" className="hover:text-primary-foreground transition-colors">
                Kebijakan Cookie
              </a>
              <span>© 2024 rangkum.ai. Hak cipta dilindungi.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}