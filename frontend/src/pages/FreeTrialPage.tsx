import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Checkbox } from '../ui/checkbox';
import { Badge } from '../ui/badge';
import { useTranslation } from '../TranslationContext';
import { 
  Rocket,
  CheckCircle,
  ArrowRight,
  Star,
  Clock,
  Shield,
  Zap,
  Users,
  Building2,
  Mail,
  Phone,
  Target,
  TrendingUp
} from 'lucide-react';

export function FreeTrialPage() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    jobTitle: '',
    industry: '',
    companySize: '',
    useCase: '',
    currentChallenge: '',
    documentVolume: '',
    timeline: '',
    agreedToTerms: false,
    agreedToMarketing: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const industries = [
    { value: 'banking', label: 'Banking & Financial Services' },
    { value: 'insurance', label: 'Insurance' },
    { value: 'healthcare', label: 'Healthcare' },
    { value: 'manufacturing', label: 'Manufacturing' },
    { value: 'logistics', label: 'Logistics & Supply Chain' },
    { value: 'education', label: 'Education' },
    { value: 'government', label: 'Government' },
    { value: 'technology', label: 'Technology' },
    { value: 'retail', label: 'Retail & E-commerce' },
    { value: 'other', label: 'Lainnya' }
  ];

  const companySizes = [
    { value: 'startup', label: '1-10 karyawan' },
    { value: 'small', label: '11-50 karyawan' },
    { value: 'medium', label: '51-200 karyawan' },
    { value: 'large', label: '201-1000 karyawan' },
    { value: 'enterprise', label: '1000+ karyawan' }
  ];

  const useCases = [
    { value: 'invoice-processing', label: 'Invoice & AP Processing' },
    { value: 'customer-onboarding', label: 'Customer Onboarding & KYC' },
    { value: 'contract-analysis', label: 'Contract Analysis' },
    { value: 'compliance', label: 'Compliance & Regulatory' },
    { value: 'claims-processing', label: 'Claims Processing' },
    { value: 'hr-documents', label: 'HR Document Processing' },
    { value: 'financial-analysis', label: 'Financial Document Analysis' },
    { value: 'other', label: 'Lainnya' }
  ];

  const documentVolumes = [
    { value: 'low', label: '< 100 dokumen/bulan' },
    { value: 'medium', label: '100-1,000 dokumen/bulan' },
    { value: 'high', label: '1,000-10,000 dokumen/bulan' },
    { value: 'enterprise', label: '> 10,000 dokumen/bulan' }
  ];

  const timelines = [
    { value: 'immediate', label: 'Segera (dalam 1 bulan)' },
    { value: 'quarter', label: 'Q1-Q2 tahun ini' },
    { value: 'later', label: 'Q3-Q4 tahun ini' },
    { value: 'exploring', label: 'Masih eksplorasi' }
  ];

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.agreedToTerms) return;

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const trialFeatures = [
    {
      icon: <Zap className="w-5 h-5" />,
      title: "1,000 Dokumen Gratis",
      description: "Process hingga 1,000 dokumen tanpa biaya"
    },
    {
      icon: <Clock className="w-5 h-5" />, 
      title: "30 Hari Akses Penuh",
      description: "Akses semua fitur platform selama 1 bulan"
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Setup & Support Gratis",
      description: "Bantuan setup dan technical support"
    },
    {
      icon: <Target className="w-5 h-5" />,
      title: "Custom Use Case",
      description: "Konfigurasi sesuai kebutuhan spesifik Anda"
    }
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary/5 to-accent/10 py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <Card className="border-green-200 bg-green-50/50 shadow-xl">
              <CardContent className="pt-12 pb-8">
                <div className="text-center">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-green-600" />
                  </div>
                  <h1 className="text-3xl font-bold mb-4">Free Trial Berhasil Diaktivasi!</h1>
                  <p className="text-lg text-muted-foreground mb-8">
                    Selamat! Akun free trial Anda telah dibuat dan siap digunakan.
                  </p>
                  
                  <div className="bg-white rounded-xl p-8 mb-8">
                    <h3 className="text-xl font-semibold mb-6">Detail Akun Trial Anda:</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="text-center p-4 bg-blue-50 rounded-lg">
                        <div className="text-2xl font-bold text-blue-600 mb-2">1,000</div>
                        <div className="text-sm text-blue-800">Dokumen Tersedia</div>
                      </div>
                      <div className="text-center p-4 bg-green-50 rounded-lg">
                        <div className="text-2xl font-bold text-green-600 mb-2">30 Hari</div>
                        <div className="text-sm text-green-800">Periode Trial</div>
                      </div>
                      <div className="text-center p-4 bg-purple-50 rounded-lg">
                        <div className="text-2xl font-bold text-purple-600 mb-2">API</div>
                        <div className="text-sm text-purple-800">Akses Lengkap</div>
                      </div>
                      <div className="text-center p-4 bg-orange-50 rounded-lg">
                        <div className="text-2xl font-bold text-orange-600 mb-2">24/7</div>
                        <div className="text-sm text-orange-800">Support</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 rounded-xl p-6 mb-8">
                    <h4 className="font-semibold mb-4 text-blue-900">Langkah Selanjutnya:</h4>
                    <ul className="text-sm text-blue-800 space-y-2 text-left max-w-md mx-auto">
                      <li className="flex items-start">
                        <span className="w-6 h-6 bg-blue-200 rounded-full flex items-center justify-center text-xs mr-3 mt-0.5">1</span>
                        Cek email untuk kredential akses API
                      </li>
                      <li className="flex items-start">
                        <span className="w-6 h-6 bg-blue-200 rounded-full flex items-center justify-center text-xs mr-3 mt-0.5">2</span>
                        Download dokumentasi dan SDK
                      </li>
                      <li className="flex items-start">
                        <span className="w-6 h-6 bg-blue-200 rounded-full flex items-center justify-center text-xs mr-3 mt-0.5">3</span>
                        Mulai testing dengan sample documents
                      </li>
                      <li className="flex items-start">
                        <span className="w-6 h-6 bg-blue-200 rounded-full flex items-center justify-center text-xs mr-3 mt-0.5">4</span>
                        Schedule onboarding call dengan team kami
                      </li>
                    </ul>
                  </div>

                  <div className="flex gap-4 justify-center flex-wrap">
                    <Button size="lg" className="px-8">
                      Akses Dashboard
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                    <Button variant="outline" size="lg" className="px-8">
                      Download Dokumentasi
                    </Button>
                    <Button variant="outline" size="lg" className="px-8">
                      Schedule Onboarding
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-accent/10 py-24">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center">
              <Rocket className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl font-bold">Mulai Uji Coba Gratis</h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Coba rangkum.ai secara gratis selama 30 hari. Tidak perlu kartu kredit, 
            tidak ada komitmen - langsung mulai memproses dokumen Anda hari ini.
          </p>
        </div>

        {/* Trial Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {trialFeatures.map((feature, index) => (
            <Card key={index} className="card-premium text-center">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mx-auto mb-4">
                  {feature.icon}
                </div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Form */}
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-xl">
            <CardHeader className="text-center pb-8">
              <Badge className="mx-auto mb-4">
                <Star className="w-4 h-4 mr-1" />
                Free Trial - No Credit Card Required
              </Badge>
              <CardTitle className="text-2xl">Mulai Free Trial Anda</CardTitle>
              <CardDescription className="text-base">
                Isi form di bawah untuk mendapatkan akses instant ke platform rangkum.ai
              </CardDescription>
            </CardHeader>

            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Personal Information */}
                <div>
                  <h3 className="text-lg font-semibold mb-4 flex items-center">
                    <Users className="w-5 h-5 mr-2" />
                    Informasi Pribadi
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">Nama Depan *</Label>
                      <Input
                        id="firstName"
                        placeholder="John"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Nama Belakang *</Label>
                      <Input
                        id="lastName"
                        placeholder="Doe"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Bisnis *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Nomor Telepon</Label>
                      <Input
                        id="phone"
                        placeholder="+62 812 3456 7890"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                {/* Company Information */}
                <div className="border-t pt-8">
                  <h3 className="text-lg font-semibold mb-4 flex items-center">
                    <Building2 className="w-5 h-5 mr-2" />
                    Informasi Perusahaan
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="company">Nama Perusahaan *</Label>
                      <Input
                        id="company"
                        placeholder="PT. Contoh Teknologi"
                        value={formData.company}
                        onChange={(e) => handleInputChange('company', e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="jobTitle">Job Title *</Label>
                      <Input
                        id="jobTitle"
                        placeholder="IT Manager, CTO, etc."
                        value={formData.jobTitle}
                        onChange={(e) => handleInputChange('jobTitle', e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="industry">Industri *</Label>
                      <Select value={formData.industry} onValueChange={(value) => handleInputChange('industry', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Pilih industri" />
                        </SelectTrigger>
                        <SelectContent>
                          {industries.map((industry) => (
                            <SelectItem key={industry.value} value={industry.value}>
                              {industry.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="companySize">Ukuran Perusahaan *</Label>
                      <Select value={formData.companySize} onValueChange={(value) => handleInputChange('companySize', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Pilih ukuran perusahaan" />
                        </SelectTrigger>
                        <SelectContent>
                          {companySizes.map((size) => (
                            <SelectItem key={size.value} value={size.value}>
                              {size.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                {/* Use Case Information */}
                <div className="border-t pt-8">
                  <h3 className="text-lg font-semibold mb-4 flex items-center">
                    <Target className="w-5 h-5 mr-2" />
                    Use Case & Requirements
                  </h3>
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="useCase">Primary Use Case *</Label>
                        <Select value={formData.useCase} onValueChange={(value) => handleInputChange('useCase', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Pilih use case utama" />
                          </SelectTrigger>
                          <SelectContent>
                            {useCases.map((useCase) => (
                              <SelectItem key={useCase.value} value={useCase.value}>
                                {useCase.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="documentVolume">Volume Dokumen per Bulan</Label>
                        <Select value={formData.documentVolume} onValueChange={(value) => handleInputChange('documentVolume', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Estimasi volume dokumen" />
                          </SelectTrigger>
                          <SelectContent>
                            {documentVolumes.map((volume) => (
                              <SelectItem key={volume.value} value={volume.value}>
                                {volume.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="currentChallenge">Tantangan Saat Ini *</Label>
                      <Textarea
                        id="currentChallenge"
                        placeholder="Ceritakan tantangan pemrosesan dokumen yang sedang Anda hadapi saat ini..."
                        value={formData.currentChallenge}
                        onChange={(e) => handleInputChange('currentChallenge', e.target.value)}
                        rows={4}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="timeline">Timeline Implementasi</Label>
                      <Select value={formData.timeline} onValueChange={(value) => handleInputChange('timeline', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Kapan Anda berencana implementasi?" />
                        </SelectTrigger>
                        <SelectContent>
                          {timelines.map((timeline) => (
                            <SelectItem key={timeline.value} value={timeline.value}>
                              {timeline.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                {/* Terms and Conditions */}
                <div className="border-t pt-8 space-y-4">
                  <div className="flex items-start space-x-2">
                    <Checkbox
                      id="terms"
                      checked={formData.agreedToTerms}
                      onCheckedChange={(checked) => handleInputChange('agreedToTerms', checked as boolean)}
                    />
                    <Label htmlFor="terms" className="text-sm">
                      Saya setuju dengan{' '}
                      <a href="#" className="text-primary hover:underline">syarat dan ketentuan</a>{' '}
                      dan{' '}
                      <a href="#" className="text-primary hover:underline">kebijakan privasi</a>{' '}
                      rangkum.ai. *
                    </Label>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Checkbox
                      id="marketing"
                      checked={formData.agreedToMarketing}
                      onCheckedChange={(checked) => handleInputChange('agreedToMarketing', checked as boolean)}
                    />
                    <Label htmlFor="marketing" className="text-sm">
                      Saya ingin menerima update produk, tips, dan penawaran khusus dari rangkum.ai.
                    </Label>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="border-t pt-8">
                  <div className="text-center space-y-4">
                    <Button
                      type="submit"
                      disabled={!formData.agreedToTerms || isSubmitting}
                      size="lg"
                      className="px-12 py-4 text-lg"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          Sedang Memproses...
                        </>
                      ) : (
                        <>
                          Mulai Free Trial Sekarang
                          <ArrowRight className="w-5 h-5 ml-2" />
                        </>
                      )}
                    </Button>
                    <div className="flex items-center justify-center space-x-6 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <CheckCircle className="w-4 h-4 mr-1 text-green-500" />
                        No Credit Card
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="w-4 h-4 mr-1 text-green-500" />
                        30 Days Free
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="w-4 h-4 mr-1 text-green-500" />
                        Cancel Anytime
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}