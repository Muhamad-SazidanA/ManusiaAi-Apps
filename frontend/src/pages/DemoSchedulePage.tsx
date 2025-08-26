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
  Calendar,
  Clock,
  User,
  Building2,
  Mail,
  Phone,
  MessageCircle,
  CheckCircle,
  ArrowRight,
  Target,
  Users,
  Briefcase,
  Monitor,
  Headphones,
  Globe
} from 'lucide-react';

export function DemoSchedulePage() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    position: '',
    industry: '',
    companySize: '',
    currentChallenges: '',
    demoGoals: '',
    timeframe: '',
    preferredDate: '',
    preferredTime: '',
    timezone: 'WIB',
    demoType: '',
    documentTypes: '',
    attendees: '',
    specificQuestions: '',
    agreedToTerms: false
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

  const demoTypes = [
    { value: 'overview', label: 'Platform Overview - Gambaran umum capabilities (30 menit)' },
    { value: 'technical', label: 'Technical Deep Dive - API, integration & development (45 menit)' },
    { value: 'industry', label: 'Industry-Specific Demo - Use cases untuk industri Anda (45 menit)' },
    { value: 'custom', label: 'Custom Demo - Sesuai dengan dokumen dan workflow Anda (60 menit)' }
  ];

  const timeframes = [
    { value: 'immediate', label: 'Segera (dalam 1 bulan)' },
    { value: 'quarter', label: 'Q1-Q2 tahun ini' },
    { value: 'later', label: 'Q3-Q4 tahun ini' },
    { value: 'next-year', label: 'Tahun depan' },
    { value: 'exploring', label: 'Masih eksplorasi' }
  ];

  const preferredTimes = [
    { value: 'morning', label: '09:00 - 12:00 WIB' },
    { value: 'afternoon', label: '13:00 - 17:00 WIB' },
    { value: 'evening', label: '19:00 - 21:00 WIB' },
    { value: 'flexible', label: 'Fleksibel' }
  ];

  const timezones = [
    { value: 'WIB', label: 'WIB (Jakarta)' },
    { value: 'WITA', label: 'WITA (Makassar)' },
    { value: 'WIT', label: 'WIT (Jayapura)' },
    { value: 'SGT', label: 'SGT (Singapore)' },
    { value: 'other', label: 'Other' }
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

  const demoFeatures = [
    {
      icon: <Monitor className="w-5 h-5" />,
      title: "Live Demo",
      description: "Interactive demo dengan document samples nyata"
    },
    {
      icon: <Headphones className="w-5 h-5" />, 
      title: "Q&A Session",
      description: "Diskusi mendalam dengan solution architect"
    },
    {
      icon: <Target className="w-5 h-5" />,
      title: "Custom Use Case",
      description: "Demo disesuaikan dengan kebutuhan Anda"
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "No Commitment",
      description: "Gratis tanpa kewajiban apapun"
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
                  <h1 className="text-3xl font-bold mb-4">Demo Berhasil Dijadwalkan!</h1>
                  <p className="text-lg text-muted-foreground mb-8">
                    Terima kasih! Kami telah menerima request demo Anda dan akan menghubungi 
                    Anda dalam 24 jam untuk konfirmasi jadwal.
                  </p>
                  
                  <div className="bg-white rounded-xl p-8 mb-8">
                    <h3 className="text-xl font-semibold mb-6">Detail Demo Request Anda:</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                      <div>
                        <span className="text-sm text-muted-foreground">Jenis Demo:</span>
                        <div className="font-medium">
                          {demoTypes.find(t => t.value === formData.demoType)?.label?.split(' - ')[0] || 'Platform Overview'}
                        </div>
                      </div>
                      <div>
                        <span className="text-sm text-muted-foreground">Tanggal Preferensi:</span>
                        <div className="font-medium">{formData.preferredDate || 'Akan dikonfirmasi'}</div>
                      </div>
                      <div>
                        <span className="text-sm text-muted-foreground">Waktu Preferensi:</span>
                        <div className="font-medium">
                          {preferredTimes.find(t => t.value === formData.preferredTime)?.label || 'Fleksibel'}
                        </div>
                      </div>
                      <div>
                        <span className="text-sm text-muted-foreground">Solution Architect:</span>
                        <div className="font-medium">Akan ditentukan</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 rounded-xl p-6 mb-8">
                    <h4 className="font-semibold mb-4 text-blue-900">Persiapan Demo:</h4>
                    <ul className="text-sm text-blue-800 space-y-2 text-left max-w-lg mx-auto">
                      <li className="flex items-start">
                        <span className="w-6 h-6 bg-blue-200 rounded-full flex items-center justify-center text-xs mr-3 mt-0.5">1</span>
                        Siapkan sample dokumen yang ingin di-demo (opsional)
                      </li>
                      <li className="flex items-start">
                        <span className="w-6 h-6 bg-blue-200 rounded-full flex items-center justify-center text-xs mr-3 mt-0.5">2</span>
                        Identifikasi stakeholder yang perlu join demo
                      </li>
                      <li className="flex items-start">
                        <span className="w-6 h-6 bg-blue-200 rounded-full flex items-center justify-center text-xs mr-3 mt-0.5">3</span>
                        Siapkan pertanyaan tentang integration requirements
                      </li>
                      <li className="flex items-start">
                        <span className="w-6 h-6 bg-blue-200 rounded-full flex items-center justify-center text-xs mr-3 mt-0.5">4</span>
                        Pastikan koneksi internet stable untuk video call
                      </li>
                    </ul>
                  </div>

                  <div className="flex gap-4 justify-center flex-wrap">
                    <Button size="lg" className="px-8">
                      Add to Calendar
                      <Calendar className="w-5 h-5 ml-2" />
                    </Button>
                    <Button variant="outline" size="lg" className="px-8">
                      Download Prep Guide
                    </Button>
                    <Button variant="outline" size="lg" className="px-8" onClick={() => window.location.href = '/'}>
                      Back to Home
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
              <Calendar className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl font-bold">Jadwalkan Demo Personal</h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Lihat langsung bagaimana rangkum.ai dapat mentransformasi workflow pemrosesan 
            dokumen di perusahaan Anda. Demo personal dengan solution architect kami.
          </p>
        </div>

        {/* Demo Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {demoFeatures.map((feature, index) => (
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
                <Monitor className="w-4 h-4 mr-1" />
                Live Demo Session
              </Badge>
              <CardTitle className="text-2xl">Request Demo Personal</CardTitle>
              <CardDescription className="text-base">
                Isi form di bawah dan kami akan menghubungi Anda untuk mengatur jadwal demo
              </CardDescription>
            </CardHeader>

            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Personal Information */}
                <div>
                  <h3 className="text-lg font-semibold mb-4 flex items-center">
                    <User className="w-5 h-5 mr-2" />
                    Informasi Kontak
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
                      <Label htmlFor="phone">Nomor Telepon *</Label>
                      <Input
                        id="phone"
                        placeholder="+62 812 3456 7890"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="position">Posisi/Jabatan *</Label>
                      <Input
                        id="position"
                        placeholder="IT Manager, CTO, Operations Head"
                        value={formData.position}
                        onChange={(e) => handleInputChange('position', e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Nama Perusahaan *</Label>
                      <Input
                        id="company"
                        placeholder="PT. Contoh Teknologi Indonesia"
                        value={formData.company}
                        onChange={(e) => handleInputChange('company', e.target.value)}
                        required
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

                {/* Demo Requirements */}
                <div className="border-t pt-8">
                  <h3 className="text-lg font-semibold mb-4 flex items-center">
                    <Target className="w-5 h-5 mr-2" />
                    Requirements Demo
                  </h3>
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="demoType">Jenis Demo *</Label>
                      <Select value={formData.demoType} onValueChange={(value) => handleInputChange('demoType', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Pilih jenis demo yang Anda inginkan" />
                        </SelectTrigger>
                        <SelectContent>
                          {demoTypes.map((type) => (
                            <SelectItem key={type.value} value={type.value}>
                              {type.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="currentChallenges">Tantangan Saat Ini *</Label>
                      <Textarea
                        id="currentChallenges"
                        placeholder="Ceritakan tantangan dalam pemrosesan dokumen yang sedang Anda hadapi..."
                        value={formData.currentChallenges}
                        onChange={(e) => handleInputChange('currentChallenges', e.target.value)}
                        rows={3}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="demoGoals">Tujuan Demo *</Label>
                      <Textarea
                        id="demoGoals"
                        placeholder="Apa yang ingin Anda lihat atau evaluasi dari demo ini?"
                        value={formData.demoGoals}
                        onChange={(e) => handleInputChange('demoGoals', e.target.value)}
                        rows={3}
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="documentTypes">Jenis Dokumen yang Ingin Di-Demo</Label>
                        <Input
                          id="documentTypes"
                          placeholder="Invoice, Contract, KTP, dsb."
                          value={formData.documentTypes}
                          onChange={(e) => handleInputChange('documentTypes', e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="attendees">Jumlah Peserta Demo</Label>
                        <Input
                          id="attendees"
                          placeholder="1-5 orang"
                          value={formData.attendees}
                          onChange={(e) => handleInputChange('attendees', e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="timeframe">Timeline Implementasi</Label>
                      <Select value={formData.timeframe} onValueChange={(value) => handleInputChange('timeframe', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Kapan Anda berencana implementasi?" />
                        </SelectTrigger>
                        <SelectContent>
                          {timeframes.map((timeframe) => (
                            <SelectItem key={timeframe.value} value={timeframe.value}>
                              {timeframe.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                {/* Scheduling Preferences */}
                <div className="border-t pt-8">
                  <h3 className="text-lg font-semibold mb-4 flex items-center">
                    <Clock className="w-5 h-5 mr-2" />
                    Preferensi Jadwal
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="preferredDate">Tanggal Preferensi</Label>
                      <Input
                        id="preferredDate"
                        type="date"
                        value={formData.preferredDate}
                        onChange={(e) => handleInputChange('preferredDate', e.target.value)}
                        min={new Date().toISOString().split('T')[0]}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="preferredTime">Waktu Preferensi *</Label>
                      <Select value={formData.preferredTime} onValueChange={(value) => handleInputChange('preferredTime', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Pilih waktu yang diinginkan" />
                        </SelectTrigger>
                        <SelectContent>
                          {preferredTimes.map((time) => (
                            <SelectItem key={time.value} value={time.value}>
                              {time.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="timezone">Timezone</Label>
                      <Select value={formData.timezone} onValueChange={(value) => handleInputChange('timezone', value)}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {timezones.map((tz) => (
                            <SelectItem key={tz.value} value={tz.value}>
                              {tz.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                {/* Additional Questions */}
                <div className="border-t pt-8">
                  <div className="space-y-2">
                    <Label htmlFor="specificQuestions">Pertanyaan Spesifik (Opsional)</Label>
                    <Textarea
                      id="specificQuestions"
                      placeholder="Ada pertanyaan spesifik yang ingin didiskusikan selama demo?"
                      value={formData.specificQuestions}
                      onChange={(e) => handleInputChange('specificQuestions', e.target.value)}
                      rows={3}
                    />
                  </div>
                </div>

                {/* Terms Agreement */}
                <div className="border-t pt-8">
                  <div className="flex items-start space-x-2">
                    <Checkbox
                      id="terms"
                      checked={formData.agreedToTerms}
                      onCheckedChange={(checked) => handleInputChange('agreedToTerms', checked as boolean)}
                    />
                    <Label htmlFor="terms" className="text-sm">
                      Saya setuju dengan{' '}
                      <a href="#" className="text-primary hover:underline">kebijakan privasi</a>{' '}
                      dan memberikan persetujuan untuk dihubungi oleh tim rangkum.ai untuk keperluan demo. *
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
                          Request Demo Sekarang
                          <ArrowRight className="w-5 h-5 ml-2" />
                        </>
                      )}
                    </Button>
                    <p className="text-sm text-muted-foreground">
                      Tim kami akan menghubungi Anda dalam 24 jam untuk konfirmasi jadwal demo.
                    </p>
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