import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Badge } from './ui/badge';
import { useTranslation } from './TranslationContext';
import { 
  HeadphonesIcon,
  MessageCircle,
  Mail,
  Phone,
  Clock,
  CheckCircle,
  ArrowRight,
  AlertCircle,
  HelpCircle,
  Settings,
  Bug,
  Lightbulb
} from 'lucide-react';

export function SupportContactForm() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    priority: '',
    category: '',
    subject: '',
    message: '',
    attachments: null as FileList | null
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const priorities = [
    { value: 'low', label: 'Rendah - Pertanyaan umum', color: 'bg-blue-100 text-blue-800' },
    { value: 'normal', label: 'Normal - Butuh bantuan', color: 'bg-green-100 text-green-800' },
    { value: 'high', label: 'Tinggi - Masalah operasional', color: 'bg-orange-100 text-orange-800' },
    { value: 'urgent', label: 'Mendesak - Sistem down', color: 'bg-red-100 text-red-800' }
  ];

  const categories = [
    { value: 'technical', label: 'Technical Support', icon: <Settings className="w-4 h-4" /> },
    { value: 'billing', label: 'Billing & Account', icon: <Mail className="w-4 h-4" /> },
    { value: 'integration', label: 'API Integration', icon: <MessageCircle className="w-4 h-4" /> },
    { value: 'bug', label: 'Bug Report', icon: <Bug className="w-4 h-4" /> },
    { value: 'feature', label: 'Feature Request', icon: <Lightbulb className="w-4 h-4" /> },
    { value: 'general', label: 'General Inquiry', icon: <HelpCircle className="w-4 h-4" /> }
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, attachments: e.target.files }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const getTicketId = () => {
    return `SUP-${Date.now().toString().slice(-6)}`;
  };

  const getResponseTime = (priority: string) => {
    switch (priority) {
      case 'urgent': return '1 jam';
      case 'high': return '4 jam';
      case 'normal': return '24 jam';
      case 'low': return '48 jam';
      default: return '24 jam';
    }
  };

  if (isSubmitted) {
    const ticketId = getTicketId();
    const responseTime = getResponseTime(formData.priority);

    return (
      <div className="max-w-2xl mx-auto">
        <Card className="border-green-200 bg-green-50/50">
          <CardContent className="pt-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Support Ticket Berhasil Dibuat!</h3>
              
              <div className="bg-white rounded-lg p-6 mb-6">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">Ticket ID:</span>
                    <div className="font-mono font-semibold text-primary">{ticketId}</div>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Estimasi Respon:</span>
                    <div className="font-semibold">{responseTime}</div>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Status:</span>
                    <Badge variant="secondary">Open</Badge>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Prioritas:</span>
                    <Badge className={priorities.find(p => p.value === formData.priority)?.color}>
                      {priorities.find(p => p.value === formData.priority)?.label.split(' - ')[0]}
                    </Badge>
                  </div>
                </div>
              </div>

              <p className="text-muted-foreground mb-6">
                Tim support kami akan menghubungi Anda dalam {responseTime}. 
                Anda akan menerima email konfirmasi dengan detail ticket.
              </p>

              <div className="bg-blue-50 rounded-lg p-4 mb-6">
                <h4 className="font-medium mb-2 text-blue-900">Informasi Kontak Support:</h4>
                <div className="text-sm text-blue-800 space-y-1">
                  <div className="flex items-center justify-center space-x-2">
                    <Mail className="w-4 h-4" />
                    <span>support@rangkum.ai</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Phone className="w-4 h-4" />
                    <span>+62 21 5555 0123</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>24/7 untuk masalah urgent</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-3 justify-center">
                <Button
                  onClick={() => setIsSubmitted(false)}
                  variant="outline"
                >
                  Buat Ticket Baru
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
            <HeadphonesIcon className="w-6 h-6 text-primary" />
          </div>
          <h2 className="text-3xl font-bold">Support Center</h2>
        </div>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Butuh bantuan? Tim support kami siap membantu Anda 24/7. 
          Buat support ticket dan dapatkan solusi cepat.
        </p>
      </div>

      <Card className="shadow-lg">
        <CardHeader className="pb-6">
          <CardTitle className="flex items-center space-x-2">
            <MessageCircle className="w-5 h-5" />
            <span>Buat Support Ticket</span>
          </CardTitle>
          <CardDescription>
            Berikan informasi detail tentang masalah atau pertanyaan Anda untuk mendapatkan bantuan terbaik
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
                <Label htmlFor="email">Email *</Label>
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
                <Label htmlFor="company">Perusahaan</Label>
                <Input
                  id="company"
                  placeholder="PT. Contoh Teknologi"
                  value={formData.company}
                  onChange={(e) => handleInputChange('company', e.target.value)}
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

            {/* Support Details */}
            <div className="border-t pt-8">
              <h3 className="text-lg font-semibold mb-4 flex items-center space-x-2">
                <AlertCircle className="w-5 h-5" />
                <span>Detail Support Request</span>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <Label htmlFor="priority">Prioritas *</Label>
                  <Select value={formData.priority} onValueChange={(value) => handleInputChange('priority', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Pilih tingkat prioritas" />
                    </SelectTrigger>
                    <SelectContent>
                      {priorities.map((priority) => (
                        <SelectItem key={priority.value} value={priority.value}>
                          <div className="flex items-center space-x-2">
                            <span>{priority.label}</span>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {formData.priority && (
                    <p className="text-xs text-muted-foreground">
                      Estimasi waktu respon: {getResponseTime(formData.priority)}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="category">Kategori *</Label>
                  <Select value={formData.category} onValueChange={(value) => handleInputChange('category', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Pilih kategori masalah" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category.value} value={category.value}>
                          <div className="flex items-center space-x-2">
                            {category.icon}
                            <span>{category.label}</span>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2 mb-6">
                <Label htmlFor="subject">Subject/Judul *</Label>
                <Input
                  id="subject"
                  placeholder="Ringkas masalah atau pertanyaan Anda"
                  value={formData.subject}
                  onChange={(e) => handleInputChange('subject', e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2 mb-6">
                <Label htmlFor="message">Deskripsi Detail *</Label>
                <Textarea
                  id="message"
                  placeholder="Jelaskan masalah secara detail:&#10;- Apa yang sedang Anda coba lakukan?&#10;- Apa yang terjadi?&#10;- Apa yang seharusnya terjadi?&#10;- Langkah-langkah untuk mereproduksi masalah&#10;- Screenshot atau error message (jika ada)"
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  rows={8}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="attachments">Attachment (Opsional)</Label>
                <Input
                  id="attachments"
                  type="file"
                  multiple
                  accept=".pdf,.doc,.docx,.txt,.png,.jpg,.jpeg,.gif"
                  onChange={handleFileChange}
                />
                <p className="text-xs text-muted-foreground">
                  Upload screenshot, log file, atau dokumen pendukung (max 10MB per file)
                </p>
              </div>
            </div>

            {/* Priority Guide */}
            <div className="border-t pt-8">
              <h4 className="font-medium mb-4">Panduan Tingkat Prioritas:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {priorities.map((priority) => (
                  <div key={priority.value} className="flex items-center space-x-3 p-3 rounded-lg bg-gray-50">
                    <Badge className={priority.color}>
                      {priority.label.split(' - ')[0]}
                    </Badge>
                    <span className="text-sm">{priority.label.split(' - ')[1]}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <div className="border-t pt-8">
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-3"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Mengirim Ticket...
                    </>
                  ) : (
                    <>
                      Buat Support Ticket
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </>
                  )}
                </Button>
                <div className="py-3">
                  <p className="text-sm text-muted-foreground">
                    Untuk masalah urgent, hubungi langsung:
                  </p>
                  <div className="flex items-center space-x-4 text-sm">
                    <a href="tel:+622155550123" className="text-primary hover:underline flex items-center">
                      <Phone className="w-3 h-3 mr-1" />
                      +62 21 5555 0123
                    </a>
                    <a href="mailto:support@rangkum.ai" className="text-primary hover:underline flex items-center">
                      <Mail className="w-3 h-3 mr-1" />
                      support@rangkum.ai
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}