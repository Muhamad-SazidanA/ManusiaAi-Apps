import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Checkbox } from './ui/checkbox';
import { useTranslation } from './TranslationContext';
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
  Briefcase
} from 'lucide-react';

export function ConsultationForm() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    position: '',
    phone: '',
    industry: '',
    companySize: '',
    currentChallenges: '',
    consultationGoals: '',
    timeframe: '',
    preferredDate: '',
    preferredTime: '',
    timezone: '',
    consultationType: '',
    hasUsedSimilar: false,
    currentSolution: '',
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

  const consultationTypes = [
    { value: 'discovery', label: 'Discovery Call - Eksplorasi kebutuhan (30 menit)' },
    { value: 'technical', label: 'Technical Demo - Live demo platform (45 menit)' },
    { value: 'business', label: 'Business Case Discussion - ROI & implementation (60 menit)' },
    { value: 'custom', label: 'Custom Consultation - Sesuai kebutuhan spesifik' }
  ];

  const timeframes = [
    { value: 'immediate', label: 'Segera (dalam 1 bulan)' },
    { value: 'quarter', label: 'Q1-Q2 tahun ini' },
    { value: 'later', label: 'Q3-Q4 tahun ini' },
    { value: 'next-year', label: 'Tahun depan' },
    { value: 'exploring', label: 'Masih eksplorasi' }
  ];

  const preferredTimes = [
    { value: 'morning', label: '09:00 - 12:00' },
    { value: 'afternoon', label: '13:00 - 17:00' },
    { value: 'flexible', label: 'Fleksibel' }
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

  if (isSubmitted) {
    return (
      <div className="max-w-2xl mx-auto">
        <Card className="border-green-200 bg-green-50/50">
          <CardContent className="pt-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Konsultasi Berhasil Dijadwalkan!</h3>
              <p className="text-muted-foreground mb-6">
                Terima kasih telah menjadwalkan konsultasi dengan tim kami. 
                Anda akan menerima email konfirmasi dengan link meeting dalam 30 menit.
              </p>
              
              <div className="bg-white rounded-lg p-6 mb-6">
                <h4 className="font-medium mb-4">Detail Konsultasi Anda:</h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">Jenis Konsultasi:</span>
                    <div className="font-medium">
                      {consultationTypes.find(t => t.value === formData.consultationType)?.label}
                    </div>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Tanggal Preferensi:</span>
                    <div className="font-medium">{formData.preferredDate || 'Akan dikonfirmasi'}</div>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Waktu Preferensi:</span>
                    <div className="font-medium">
                      {preferredTimes.find(t => t.value === formData.preferredTime)?.label}
                    </div>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Consultant:</span>
                    <div className="font-medium">Solution Architect</div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-4 mb-6">
                <h4 className="font-medium mb-2 text-blue-900">Persiapan Konsultasi:</h4>
                <ul className="text-sm text-blue-800 space-y-1 text-left">
                  <li>• Siapkan contoh dokumen yang ingin diproses</li>
                  <li>• Identifikasi pain points dalam workflow saat ini</li>
                  <li>• Tentukan stakeholder yang perlu terlibat</li>
                  <li>• Siapkan pertanyaan tentang integrasi sistem</li>
                </ul>
              </div>

              <div className="flex gap-3 justify-center">
                <Button
                  onClick={() => setIsSubmitted(false)}
                  variant="outline"
                >
                  Jadwalkan Lagi
                </Button>
                <Button onClick={() => window.location.href = '/'}>
                  Kembali ke Beranda
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <div className="flex items-center justify-center space-x-3 mb-6">
          <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
            <Calendar className="w-6 h-6 text-primary" />
          </div>
          <h2 className="text-3xl font-bold">Jadwalkan Konsultasi</h2>
        </div>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Dapatkan konsultasi personal dengan solution architect kami untuk membahas 
          kebutuhan spesifik document processing di perusahaan Anda.
        </p>
      </div>

      <Card className="shadow-lg">
        <CardHeader className="pb-6">
          <CardTitle className="flex items-center space-x-2">
            <User className="w-5 h-5" />
            <span>Informasi Kontak & Perusahaan</span>
          </CardTitle>
          <CardDescription>
            Berikan informasi untuk mempersiapkan konsultasi yang sesuai dengan kebutuhan Anda
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Nama Lengkap *</Label>
                <Input
                  id="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
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
                <Label htmlFor="company">Nama Perusahaan *</Label>
                <Input
                  id="company"
                  placeholder="PT. Contoh Teknologi Indonesia"
                  value={formData.company}
                  onChange={(e) => handleInputChange('company', e.target.value)}
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

              <div className="space-y-2 md:col-span-2">
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

            {/* Business Context */}
            <div className="border-t pt-8">
              <h3 className="text-lg font-semibold mb-4 flex items-center space-x-2">
                <Briefcase className="w-5 h-5" />
                <span>Konteks Bisnis</span>
              </h3>

              <div className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="currentChallenges">Tantangan Saat Ini *</Label>
                  <Textarea
                    id="currentChallenges"
                    placeholder="Ceritakan tantangan dalam pemrosesan dokumen saat ini: volume dokumen, waktu processing, akurasi, integrasi sistem, dll."
                    value={formData.currentChallenges}
                    onChange={(e) => handleInputChange('currentChallenges', e.target.value)}
                    rows={3}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="consultationGoals">Tujuan Konsultasi *</Label>
                  <Textarea
                    id="consultationGoals"
                    placeholder="Apa yang ingin Anda capai dari konsultasi ini? (eksplorasi solusi, evaluasi platform, diskusi implementasi, dll.)"
                    value={formData.consultationGoals}
                    onChange={(e) => handleInputChange('consultationGoals', e.target.value)}
                    rows={3}
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="hasUsedSimilar"
                        checked={formData.hasUsedSimilar}
                        onCheckedChange={(checked) => handleInputChange('hasUsedSimilar', checked as boolean)}
                      />
                      <Label htmlFor="hasUsedSimilar" className="text-sm">
                        Pernah menggunakan solusi document processing sebelumnya
                      </Label>
                    </div>
                  </div>
                </div>

                {formData.hasUsedSimilar && (
                  <div className="space-y-2">
                    <Label htmlFor="currentSolution">Solusi yang Pernah/Sedang Digunakan</Label>
                    <Input
                      id="currentSolution"
                      placeholder="Nama vendor/platform yang pernah digunakan"
                      value={formData.currentSolution}
                      onChange={(e) => handleInputChange('currentSolution', e.target.value)}
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Consultation Details */}
            <div className="border-t pt-8">
              <h3 className="text-lg font-semibold mb-4 flex items-center space-x-2">
                <Calendar className="w-5 h-5" />
                <span>Detail Konsultasi</span>
              </h3>

              <div className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="consultationType">Jenis Konsultasi *</Label>
                  <Select value={formData.consultationType} onValueChange={(value) => handleInputChange('consultationType', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Pilih jenis konsultasi yang Anda butuhkan" />
                    </SelectTrigger>
                    <SelectContent>
                      {consultationTypes.map((type) => (
                        <SelectItem key={type.value} value={type.value}>
                          {type.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                    <Label htmlFor="preferredTime">Waktu Preferensi</Label>
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
                </div>

                <div className="space-y-2">
                  <Label htmlFor="specificQuestions">Pertanyaan Spesifik (Opsional)</Label>
                  <Textarea
                    id="specificQuestions"
                    placeholder="Ada pertanyaan spesifik yang ingin didiskusikan? (teknis, harga, implementasi, integrasi, dll.)"
                    value={formData.specificQuestions}
                    onChange={(e) => handleInputChange('specificQuestions', e.target.value)}
                    rows={3}
                  />
                </div>
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
                  dan memberikan persetujuan untuk dihubungi oleh tim rangkum.ai untuk keperluan konsultasi.
                </Label>
              </div>
            </div>

            {/* Submit Button */}
            <div className="border-t pt-8">
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  type="submit"
                  disabled={!formData.agreedToTerms || isSubmitting}
                  className="px-8 py-3"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Menjadwalkan...
                    </>
                  ) : (
                    <>
                      Jadwalkan Konsultasi
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </>
                  )}
                </Button>
                <div className="py-3">
                  <p className="text-sm text-muted-foreground">
                    Tim kami akan menghubungi Anda dalam 24 jam untuk konfirmasi jadwal.
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Konsultasi gratis dan tanpa komitmen.
                  </p>
                </div>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}