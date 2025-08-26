import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Checkbox } from './ui/checkbox';
import { Badge } from './ui/badge';
import { Calendar, Users, Building, Mail, Phone, MessageSquare, CheckCircle } from 'lucide-react';

export function DemoForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    position: '',
    industry: '',
    teamSize: '',
    useCase: '',
    message: '',
    preferredTime: '',
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

  const teamSizes = [
    '1-10 karyawan',
    '11-50 karyawan',
    '51-200 karyawan',
    '201-1000 karyawan',
    '1000+ karyawan'
  ];

  const useCases = [
    'Onboarding Nasabah/KYC',
    'Pemrosesan Invoice/AP',
    'Purchase Order Management',
    'Manajemen Kontrak',
    'Compliance & Audit',
    'Data Entry Automation',
    'Digitalisasi Dokumen',
    'Lainnya'
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
      <Card className="max-w-2xl mx-auto" id="demo-form">
        <CardContent className="p-12 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <h3 className="text-2xl font-semibold mb-4">Demo Berhasil Dijadwalkan!</h3>
          <p className="text-muted-foreground mb-6">
            Terima kasih atas minat Anda. Tim kami akan menghubungi Anda dalam 1 hari kerja 
            untuk mengatur jadwal demo yang sesuai.
          </p>
          <div className="bg-accent/50 rounded-lg p-4 mb-6">
            <p className="text-sm text-muted-foreground">
              <strong>Langkah selanjutnya:</strong><br />
              1. Anda akan menerima konfirmasi email<br />
              2. Tim kami akan menghubungi untuk koordinasi jadwal<br />
              3. Demo personal akan disesuaikan dengan use case Anda
            </p>
          </div>
          <Button 
            variant="outline" 
            onClick={() => {
              setIsSubmitted(false);
              setFormData({
                name: '', email: '', phone: '', company: '', position: '', 
                industry: '', teamSize: '', useCase: '', message: '', 
                preferredTime: '', newsletter: false
              });
            }}
          >
            Jadwalkan Demo Lain
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="max-w-4xl mx-auto" id="demo-form">
      <CardHeader className="text-center pb-8">
        <div className="flex items-center justify-center space-x-3 mb-4">
          <Calendar className="w-8 h-8 text-primary" />
          <CardTitle className="text-3xl">Jadwalkan Demo Personal</CardTitle>
        </div>
        <CardDescription className="text-lg max-w-2xl mx-auto">
          Dapatkan demo personal yang disesuaikan dengan kebutuhan spesifik perusahaan Anda. 
          Tim ahli kami akan menunjukkan bagaimana rangkum.ai dapat mengoptimalkan workflow dokumen Anda.
        </CardDescription>
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          <Badge variant="secondary">✓ Demo 30 menit</Badge>
          <Badge variant="secondary">✓ Disesuaikan use case</Badge>
          <Badge variant="secondary">✓ Q&A dengan experts</Badge>
          <Badge variant="secondary">✓ ROI calculation</Badge>
        </div>
      </CardHeader>
      
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Personal Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name">Nama Lengkap *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                required
                placeholder="Masukkan nama lengkap Anda"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email Perusahaan *</Label>
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
              <Label htmlFor="phone">Nomor Telepon *</Label>
              <Input
                id="phone"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                required
                placeholder="+62 xxx xxxx xxxx"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="position">Posisi/Jabatan *</Label>
              <Input
                id="position"
                value={formData.position}
                onChange={(e) => handleInputChange('position', e.target.value)}
                required
                placeholder="CTO, Head of IT, Manager, dll"
              />
            </div>
          </div>

          {/* Company Information */}
          <div className="border-t pt-6">
            <h4 className="font-semibold mb-4 flex items-center">
              <Building className="w-5 h-5 mr-2" />
              Informasi Perusahaan
            </h4>
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="space-y-2">
                <Label htmlFor="teamSize">Ukuran Tim/Perusahaan</Label>
                <Select onValueChange={(value) => handleInputChange('teamSize', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Pilih ukuran tim" />
                  </SelectTrigger>
                  <SelectContent>
                    {teamSizes.map((size) => (
                      <SelectItem key={size} value={size}>
                        {size}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="useCase">Primary Use Case *</Label>
                <Select onValueChange={(value) => handleInputChange('useCase', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Pilih use case utama" />
                  </SelectTrigger>
                  <SelectContent>
                    {useCases.map((useCase) => (
                      <SelectItem key={useCase} value={useCase}>
                        {useCase}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Demo Details */}
          <div className="border-t pt-6">
            <h4 className="font-semibold mb-4 flex items-center">
              <MessageSquare className="w-5 h-5 mr-2" />
              Detail Demo
            </h4>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="message">
                  Ceritakan tentang kebutuhan dokumen processing Anda
                </Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  placeholder="Jelaskan tantangan dan tujuan yang ingin dicapai dengan solusi document processing..."
                  rows={4}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="preferredTime">Waktu Preferensi Demo</Label>
                <Input
                  id="preferredTime"
                  value={formData.preferredTime}
                  onChange={(e) => handleInputChange('preferredTime', e.target.value)}
                  placeholder="Contoh: Senin-Jumat 10:00-16:00 WIB"
                />
              </div>
            </div>
          </div>

          {/* Consent */}
          <div className="flex items-start space-x-3 p-4 bg-accent/30 rounded-lg">
            <Checkbox
              id="newsletter"
              checked={formData.newsletter}
              onCheckedChange={(checked) => handleInputChange('newsletter', !!checked)}
            />
            <Label htmlFor="newsletter" className="text-sm leading-relaxed">
              Saya ingin menerima update produk, industry insights, dan konten edukatif 
              dari rangkum.ai melalui email. (Opsional)
            </Label>
          </div>

          <div className="text-center pt-6">
            <Button 
              type="submit" 
              size="lg" 
              className="px-12 py-3 text-lg"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Menjadwalkan Demo...
                </>
              ) : (
                <>
                  <Calendar className="w-5 h-5 mr-2" />
                  Jadwalkan Demo Sekarang
                </>
              )}
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              Tim kami akan menghubungi Anda dalam 1 hari kerja untuk konfirmasi jadwal
            </p>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}