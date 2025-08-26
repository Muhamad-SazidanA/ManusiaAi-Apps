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
  Users,
  Building2,
  Mail,
  Phone,
  MapPin,
  Briefcase,
  Target,
  CheckCircle,
  ArrowRight,
  Handshake
} from 'lucide-react';

export function PartnerRegistrationForm() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    website: '',
    country: '',
    city: '',
    industry: '',
    partnershipType: '',
    companySize: '',
    experience: '',
    interests: [] as string[],
    message: '',
    agreedToTerms: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const partnershipTypes = [
    { value: 'technology', label: 'Technology Partner' },
    { value: 'solution', label: 'Solution Partner' },
    { value: 'channel', label: 'Channel Partner' },
    { value: 'integration', label: 'Integration Partner' },
    { value: 'consulting', label: 'Consulting Partner' }
  ];

  const companySizes = [
    { value: 'startup', label: '1-10 karyawan' },
    { value: 'small', label: '11-50 karyawan' },
    { value: 'medium', label: '51-200 karyawan' },
    { value: 'large', label: '201-1000 karyawan' },
    { value: 'enterprise', label: '1000+ karyawan' }
  ];

  const industries = [
    { value: 'technology', label: 'Technology & Software' },
    { value: 'consulting', label: 'Consulting Services' },
    { value: 'finance', label: 'Financial Services' },
    { value: 'healthcare', label: 'Healthcare' },
    { value: 'manufacturing', label: 'Manufacturing' },
    { value: 'logistics', label: 'Logistics & Supply Chain' },
    { value: 'education', label: 'Education' },
    { value: 'government', label: 'Government' },
    { value: 'other', label: 'Lainnya' }
  ];

  const interestOptions = [
    { id: 'api', label: 'API Integration' },
    { id: 'reseller', label: 'Reseller Program' },
    { id: 'whitepaper', label: 'White-label Solution' },
    { id: 'consulting', label: 'Implementation Consulting' },
    { id: 'training', label: 'Training & Certification' },
    { id: 'marketing', label: 'Co-marketing Opportunities' }
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleInterestChange = (interestId: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      interests: checked 
        ? [...prev.interests, interestId]
        : prev.interests.filter(id => id !== interestId)
    }));
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
              <h3 className="text-xl font-semibold mb-2">Aplikasi Partnership Berhasil Dikirim!</h3>
              <p className="text-muted-foreground mb-6">
                Terima kasih atas minat Anda untuk bermitra dengan rangkum.ai. 
                Tim kami akan menghubungi Anda dalam 2-3 hari kerja untuk mendiskusikan peluang kemitraan.
              </p>
              <div className="bg-white rounded-lg p-4 mb-6">
                <h4 className="font-medium mb-2">Langkah Selanjutnya:</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Evaluasi aplikasi partnership (1-2 hari)</li>
                  <li>• Penjadwalan meeting discovery call</li>
                  <li>• Pembahasan detail program kemitraan</li>
                  <li>• Penandatanganan agreement partnership</li>
                </ul>
              </div>
              <Button
                onClick={() => setIsSubmitted(false)}
                variant="outline"
                className="mr-3"
              >
                Kirim Aplikasi Lain
              </Button>
              <Button onClick={() => window.location.href = '/'}>
                Kembali ke Beranda
              </Button>
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
            <Handshake className="w-6 h-6 text-primary" />
          </div>
          <h2 className="text-3xl font-bold">Partner Registration</h2>
        </div>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Bergabunglah dengan ekosistem partner rangkum.ai dan bangun masa depan 
          document processing bersama kami.
        </p>
      </div>

      <Card className="shadow-lg">
        <CardHeader className="pb-6">
          <CardTitle className="flex items-center space-x-2">
            <Building2 className="w-5 h-5" />
            <span>Informasi Perusahaan</span>
          </CardTitle>
          <CardDescription>
            Berikan informasi lengkap tentang perusahaan dan jenis kemitraan yang diinginkan
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Company Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="companyName">Nama Perusahaan *</Label>
                <Input
                  id="companyName"
                  placeholder="PT. Contoh Teknologi Indonesia"
                  value={formData.companyName}
                  onChange={(e) => handleInputChange('companyName', e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="contactPerson">Nama Kontak Person *</Label>
                <Input
                  id="contactPerson"
                  placeholder="John Doe"
                  value={formData.contactPerson}
                  onChange={(e) => handleInputChange('contactPerson', e.target.value)}
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
                <Label htmlFor="website">Website Perusahaan</Label>
                <Input
                  id="website"
                  placeholder="https://company.com"
                  value={formData.website}
                  onChange={(e) => handleInputChange('website', e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="city">Kota *</Label>
                <Input
                  id="city"
                  placeholder="Jakarta"
                  value={formData.city}
                  onChange={(e) => handleInputChange('city', e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Business Information */}
            <div className="border-t pt-8">
              <h3 className="text-lg font-semibold mb-4 flex items-center space-x-2">
                <Briefcase className="w-5 h-5" />
                <span>Informasi Bisnis</span>
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

                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="partnershipType">Jenis Kemitraan yang Diminati *</Label>
                  <Select value={formData.partnershipType} onValueChange={(value) => handleInputChange('partnershipType', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Pilih jenis kemitraan" />
                    </SelectTrigger>
                    <SelectContent>
                      {partnershipTypes.map((type) => (
                        <SelectItem key={type.value} value={type.value}>
                          {type.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Partnership Interests */}
            <div className="border-t pt-8">
              <h3 className="text-lg font-semibold mb-4 flex items-center space-x-2">
                <Target className="w-5 h-5" />
                <span>Area Kemitraan yang Diminati</span>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {interestOptions.map((option) => (
                  <div key={option.id} className="flex items-center space-x-2">
                    <Checkbox
                      id={option.id}
                      checked={formData.interests.includes(option.id)}
                      onCheckedChange={(checked) => handleInterestChange(option.id, checked as boolean)}
                    />
                    <Label htmlFor={option.id} className="text-sm font-normal">
                      {option.label}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience & Message */}
            <div className="border-t pt-8">
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="experience">Pengalaman Relevan</Label>
                  <Textarea
                    id="experience"
                    placeholder="Ceritakan pengalaman perusahaan Anda di bidang teknologi, AI, atau document processing..."
                    value={formData.experience}
                    onChange={(e) => handleInputChange('experience', e.target.value)}
                    rows={3}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Pesan Tambahan</Label>
                  <Textarea
                    id="message"
                    placeholder="Apa yang membuat perusahaan Anda tertarik bermitra dengan rangkum.ai? Bagaimana Anda melihat potensi kolaborasi ini?"
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    rows={4}
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
                  onCheckedChange={(checked) => setFormData(prev => ({ ...prev, agreedToTerms: checked as boolean }))}
                />
                <Label htmlFor="terms" className="text-sm">
                  Saya setuju dengan{' '}
                  <a href="#" className="text-primary hover:underline">syarat dan ketentuan</a>{' '}
                  program kemitraan rangkum.ai dan{' '}
                  <a href="#" className="text-primary hover:underline">kebijakan privasi</a>.
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
                      Mengirim Aplikasi...
                    </>
                  ) : (
                    <>
                      Kirim Aplikasi Partnership
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </>
                  )}
                </Button>
                <p className="text-sm text-muted-foreground py-3">
                  Tim kami akan menghubungi Anda dalam 2-3 hari kerja setelah aplikasi diterima.
                </p>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}