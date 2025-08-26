import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Checkbox } from './ui/checkbox';
import { Badge } from './ui/badge';
import { Rocket, Zap, Clock, Shield, CheckCircle, ArrowRight } from 'lucide-react';

export function GetStartedForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    industry: '',
    monthlyDocuments: '',
    terms: false,
    newsletter: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const industries = [
    'Perbankan & Keuangan',
    'Asuransi', 
    'Kesehatan',
    'Manufaktur',
    'Retail & E-commerce',
    'Logistik & Supply Chain',
    'Pendidikan',
    'Pemerintahan',
    'Teknologi',
    'Lainnya'
  ];

  const documentVolumes = [
    'Kurang dari 100/bulan',
    '100-1,000/bulan',
    '1,000-10,000/bulan', 
    '10,000-100,000/bulan',
    'Lebih dari 100,000/bulan'
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (isSubmitted) {
    return (
      <Card className="max-w-2xl mx-auto" id="get-started-form">
        <CardContent className="p-12 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <h3 className="text-2xl font-semibold mb-4">Selamat Datang di rangkum.ai!</h3>
          <p className="text-muted-foreground mb-6">
            Akun Anda telah berhasil dibuat. Kami telah mengirimkan email dengan 
            panduan langkah pertama dan akses ke dashboard Anda.
          </p>
          <div className="bg-accent/50 rounded-lg p-6 mb-6">
            <h4 className="font-semibold mb-3">Langkah Selanjutnya:</h4>
            <div className="space-y-2 text-sm text-muted-foreground text-left">
              <div className="flex items-center">
                <span className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs mr-3">1</span>
                Cek email untuk aktivasi akun
              </div>
              <div className="flex items-center">
                <span className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs mr-3">2</span>
                Login ke dashboard dan upload dokumen pertama
              </div>
              <div className="flex items-center">
                <span className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs mr-3">3</span>
                Explore fitur-fitur dan integrase API
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="px-8">
              Buka Dashboard
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button variant="outline">
              Lihat Dokumentasi API
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="max-w-3xl mx-auto" id="get-started-form">
      <CardHeader className="text-center pb-8">
        <div className="flex items-center justify-center space-x-3 mb-4">
          <Rocket className="w-8 h-8 text-primary" />
          <CardTitle className="text-3xl">Mulai Sekarang</CardTitle>
        </div>
        <CardDescription className="text-lg max-w-2xl mx-auto">
          Dapatkan akses langsung ke platform rangkum.ai dan mulai transformasi 
          pemrosesan dokumen Anda hari ini juga.
        </CardDescription>
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          <Badge variant="secondary">
            <Zap className="w-3 h-3 mr-1" />
            Setup 5 menit
          </Badge>
          <Badge variant="secondary">
            <Clock className="w-3 h-3 mr-1" />
            Uji coba 14 hari gratis
          </Badge>
          <Badge variant="secondary">
            <Shield className="w-3 h-3 mr-1" />
            Tidak perlu kartu kredit
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Basic Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name">Nama Lengkap *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                required
                placeholder="Masukkan nama lengkap"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                required
                placeholder="nama@perusahaan.com"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="company">Nama Perusahaan *</Label>
              <Input
                id="company"
                value={formData.company}
                onChange={(e) => handleInputChange('company', e.target.value)}
                required
                placeholder="PT Nama Perusahaan"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="industry">Industri *</Label>
              <Select onValueChange={(value) => handleInputChange('industry', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Pilih industri" />
                </SelectTrigger>
                <SelectContent>
                  {industries.map((industry) => (
                    <SelectItem key={industry} value={industry}>
                      {industry}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="monthlyDocuments">Volume Dokumen per Bulan (estimasi)</Label>
            <Select onValueChange={(value) => handleInputChange('monthlyDocuments', value)}>
              <SelectTrigger>
                <SelectValue placeholder="Pilih volume dokumen bulanan" />
              </SelectTrigger>
              <SelectContent>
                {documentVolumes.map((volume) => (
                  <SelectItem key={volume} value={volume}>
                    {volume}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Trial Benefits */}
          <div className="bg-gradient-to-br from-primary/5 to-accent/20 rounded-lg p-6">
            <h4 className="font-semibold mb-4">Yang Anda Dapatkan dalam Uji Coba:</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                <div>
                  <p className="font-medium">Akses Penuh Platform</p>
                  <p className="text-sm text-muted-foreground">Semua fitur AI processing tersedia</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                <div>
                  <p className="font-medium">1,000 Dokumen Gratis</p>
                  <p className="text-sm text-muted-foreground">Cukup untuk testing menyeluruh</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                <div>
                  <p className="font-medium">API Documentation</p>
                  <p className="text-sm text-muted-foreground">Panduan integrasi lengkap</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                <div>
                  <p className="font-medium">Support Team</p>
                  <p className="text-sm text-muted-foreground">Bantuan setup dan implementasi</p>
                </div>
              </div>
            </div>
          </div>

          {/* Terms and Consent */}
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <Checkbox
                id="terms"
                checked={formData.terms}
                onCheckedChange={(checked) => handleInputChange('terms', !!checked)}
                required
              />
              <Label htmlFor="terms" className="text-sm leading-relaxed">
                Saya setuju dengan{' '}
                <a href="#" className="text-primary hover:underline">
                  Syarat & Ketentuan
                </a>{' '}
                dan{' '}
                <a href="#" className="text-primary hover:underline">
                  Kebijakan Privasi
                </a>{' '}
                rangkum.ai *
              </Label>
            </div>
            <div className="flex items-start space-x-3">
              <Checkbox
                id="newsletter"
                checked={formData.newsletter}
                onCheckedChange={(checked) => handleInputChange('newsletter', !!checked)}
              />
              <Label htmlFor="newsletter" className="text-sm leading-relaxed">
                Saya ingin menerima tips product, industry insights, dan update fitur terbaru 
                dari rangkum.ai (Opsional)
              </Label>
            </div>
          </div>

          <div className="text-center pt-6">
            <Button 
              type="submit" 
              size="lg" 
              className="px-12 py-3 text-lg w-full sm:w-auto"
              disabled={isSubmitting || !formData.terms}
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Membuat Akun...
                </>
              ) : (
                <>
                  <Rocket className="w-5 h-5 mr-2" />
                  Mulai Uji Coba Gratis
                </>
              )}
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              Tidak perlu kartu kredit • Aktivasi langsung • Cancel kapan saja
            </p>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}