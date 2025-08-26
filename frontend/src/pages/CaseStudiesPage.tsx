import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Input } from '../ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { useTranslation } from '../TranslationContext';
import { useRouter } from '../Router';
import { 
  FileText,
  TrendingUp,
  Clock,
  DollarSign,
  Users,
  Search,
  Filter,
  Download,
  ArrowRight,
  Building2,
  Heart,
  CreditCard,
  Factory,
  Truck,
  GraduationCap,
  CheckCircle,
  BarChart3,
  Target,
  Zap
} from 'lucide-react';

export function CaseStudiesPage() {
  const { t } = useTranslation();
  const { navigateTo } = useRouter();
  
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState('all');
  const [selectedUseCase, setSelectedUseCase] = useState('all');

  const caseStudies = [
    {
      id: 1,
      title: 'Bank Mandiri: Transformasi Digital Customer Onboarding',
      industry: 'Banking',
      industryIcon: <Building2 className="w-5 h-5" />,
      company: 'PT Bank Mandiri (Persero) Tbk',
      challenge: 'Proses onboarding nasabah baru memakan waktu 3-5 hari dengan tingkat error manual tinggi',
      solution: 'Implementasi rangkum.ai untuk otomatisasi verifikasi dokumen KYC dan validasi data',
      results: {
        timeReduction: '85%',
        accuracyImprovement: '99.2%',
        costSaving: 'Rp 2.4M/bulan',
        volumeIncrease: '300%'
      },
      tags: ['KYC', 'Customer Onboarding', 'Document Verification'],
      downloadLink: '#',
      readTime: '8 min',
      publishDate: 'Dec 2024',
      featured: true
    },
    {
      id: 2,
      title: 'Asuransi Prudential: Otomatisasi Claims Processing',
      industry: 'Insurance',
      industryIcon: <CreditCard className="w-5 h-5" />,
      company: 'PT Prudential Life Assurance',
      challenge: 'Pemrosesan klaim asuransi manual dengan waktu settlement 14-21 hari',
      solution: 'Deployment rangkum.ai untuk ekstraksi data klaim dan validasi dokumen medis',
      results: {
        timeReduction: '78%',
        accuracyImprovement: '97.8%',
        costSaving: 'Rp 1.8M/bulan',
        volumeIncrease: '250%'
      },
      tags: ['Claims Processing', 'Medical Documents', 'Fraud Detection'],
      downloadLink: '#',
      readTime: '6 min',
      publishDate: 'Nov 2024',
      featured: true
    },
    {
      id: 3,
      title: 'RS Siloam: Digitalisasi Medical Records Management',
      industry: 'Healthcare',
      industryIcon: <Heart className="w-5 h-5" />,
      company: 'Siloam Hospitals Group',
      challenge: 'Pengelolaan rekam medis fisik tidak efisien dan rawan hilang',
      solution: 'Integrasi rangkum.ai dengan HIS untuk digitalisasi dan indexing otomatis',
      results: {
        timeReduction: '70%',
        accuracyImprovement: '96.5%',
        costSaving: 'Rp 890K/bulan',
        volumeIncrease: '200%'
      },
      tags: ['Medical Records', 'Healthcare', 'Digital Transformation'],
      downloadLink: '#',
      readTime: '7 min',
      publishDate: 'Oct 2024',
      featured: false
    },
    {
      id: 4,
      title: 'Unilever Indonesia: Supply Chain Document Automation',
      industry: 'Manufacturing',
      industryIcon: <Factory className="w-5 h-5" />,
      company: 'PT Unilever Indonesia Tbk',
      challenge: 'Pemrosesan dokumen supply chain manual dengan compliance requirements tinggi',
      solution: 'Implementasi rangkum.ai untuk otomatisasi PO, invoice, dan shipping documents',
      results: {
        timeReduction: '82%',
        accuracyImprovement: '98.1%',
        costSaving: 'Rp 3.2M/bulan',
        volumeIncrease: '400%'
      },
      tags: ['Supply Chain', 'Invoice Processing', 'Compliance'],
      downloadLink: '#',
      readTime: '9 min',
      publishDate: 'Sep 2024',
      featured: true
    },
    {
      id: 5,
      title: 'JNE Express: Logistics Document Processing Revolution',
      industry: 'Logistics',
      industryIcon: <Truck className="w-5 h-5" />,
      company: 'PT Jalur Nugraha Ekakurir (JNE)',
      challenge: 'Volume tinggi dokumen pengiriman dengan proses manual yang lambat',
      solution: 'Deployment rangkum.ai untuk otomatisasi manifest, AWB, dan customs documents',
      results: {
        timeReduction: '75%',
        accuracyImprovement: '97.2%',
        costSaving: 'Rp 1.5M/bulan',
        volumeIncrease: '350%'
      },
      tags: ['Logistics', 'Shipping Documents', 'Customs'],
      downloadLink: '#',
      readTime: '5 min',
      publishDate: 'Aug 2024',
      featured: false
    },
    {
      id: 6,
      title: 'Universitas Indonesia: Academic Records Digitization',
      industry: 'Education',
      industryIcon: <GraduationCap className="w-5 h-5" />,
      company: 'Universitas Indonesia',
      challenge: 'Pengelolaan transkrip dan sertifikat akademik masih manual dan rentan error',
      solution: 'Integrasi rangkum.ai untuk digitalisasi dan verifikasi dokumen akademik',
      results: {
        timeReduction: '68%',
        accuracyImprovement: '95.8%',
        costSaving: 'Rp 650K/bulan',
        volumeIncrease: '180%'
      },
      tags: ['Academic Records', 'Education', 'Verification'],
      downloadLink: '#',
      readTime: '6 min',
      publishDate: 'Jul 2024',
      featured: false
    }
  ];

  const industries = [
    { value: 'all', label: 'Semua Industri' },
    { value: 'Banking', label: 'Banking & Financial Services' },
    { value: 'Insurance', label: 'Insurance' },
    { value: 'Healthcare', label: 'Healthcare' },
    { value: 'Manufacturing', label: 'Manufacturing' },
    { value: 'Logistics', label: 'Logistics' },
    { value: 'Education', label: 'Education' }
  ];

  const useCases = [
    { value: 'all', label: 'Semua Use Case' },
    { value: 'Customer Onboarding', label: 'Customer Onboarding' },
    { value: 'Claims Processing', label: 'Claims Processing' },
    { value: 'Invoice Processing', label: 'Invoice Processing' },
    { value: 'Document Verification', label: 'Document Verification' },
    { value: 'Medical Records', label: 'Medical Records' },
    { value: 'Supply Chain', label: 'Supply Chain' }
  ];

  const filteredCaseStudies = caseStudies.filter(study => {
    const matchesSearch = study.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         study.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         study.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesIndustry = selectedIndustry === 'all' || study.industry === selectedIndustry;
    
    const matchesUseCase = selectedUseCase === 'all' || 
                          study.tags.some(tag => tag.includes(selectedUseCase));
    
    return matchesSearch && matchesIndustry && matchesUseCase;
  });

  const featuredStudies = filteredCaseStudies.filter(study => study.featured);
  const regularStudies = filteredCaseStudies.filter(study => !study.featured);

  const stats = [
    {
      icon: <Building2 className="w-6 h-6" />,
      value: '50+',
      label: 'Enterprise Customers'
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      value: '85%',
      label: 'Avg. Time Reduction'
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      value: 'Rp 2.1M',
      label: 'Avg. Monthly Savings'
    },
    {
      icon: <Target className="w-6 h-6" />,
      value: '97.5%',
      label: 'Avg. Accuracy Rate'
    }
  ];

  const handleDownload = (studyId: number) => {
    // In real app, this would trigger PDF download
    console.log(`Downloading case study ${studyId}`);
  };

  const handleRequestDemo = () => {
    navigateTo('demo');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-accent/10 py-24">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center">
              <FileText className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl font-bold">Customer Success Stories</h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Lihat bagaimana perusahaan terkemuka di Indonesia mentransformasi workflow 
            pemrosesan dokumen mereka dengan rangkum.ai dan mencapai hasil luar biasa.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="card-premium text-center">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mx-auto mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Filters */}
        <Card className="mb-12">
          <CardContent className="pt-6">
            <div className="flex flex-col lg:flex-row gap-4 items-center">
              <div className="flex-1 relative">
                <Search className="w-5 h-5 absolute left-3 top-3 text-muted-foreground" />
                <Input
                  placeholder="Cari case study, perusahaan, atau use case..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex gap-4">
                <Select value={selectedIndustry} onValueChange={setSelectedIndustry}>
                  <SelectTrigger className="w-48">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {industries.map((industry) => (
                      <SelectItem key={industry.value} value={industry.value}>
                        {industry.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select value={selectedUseCase} onValueChange={setSelectedUseCase}>
                  <SelectTrigger className="w-48">
                    <SelectValue />
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
            </div>
          </CardContent>
        </Card>

        {/* Featured Case Studies */}
        {featuredStudies.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-8 flex items-center">
              <Zap className="w-6 h-6 mr-2 text-primary" />
              Featured Success Stories
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredStudies.map((study) => (
                <Card key={study.id} className="card-premium border-2 border-primary/20">
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-primary text-primary-foreground">Featured</Badge>
                  </div>
                  
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                          {study.industryIcon}
                        </div>
                        <div>
                          <Badge variant="outline" className="mb-2">{study.industry}</Badge>
                          <div className="text-sm text-muted-foreground">{study.company}</div>
                        </div>
                      </div>
                      <div className="text-right text-sm text-muted-foreground">
                        <div>{study.readTime} read</div>
                        <div>{study.publishDate}</div>
                      </div>
                    </div>
                    <CardTitle className="text-xl mb-3">{study.title}</CardTitle>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    <div>
                      <h5 className="font-semibold mb-2 text-red-700">Challenge:</h5>
                      <p className="text-sm text-muted-foreground">{study.challenge}</p>
                    </div>

                    <div>
                      <h5 className="font-semibold mb-2 text-blue-700">Solution:</h5>
                      <p className="text-sm text-muted-foreground">{study.solution}</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 p-4 bg-green-50 rounded-xl">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-600 mb-1">{study.results.timeReduction}</div>
                        <div className="text-xs text-green-700">Time Reduction</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-600 mb-1">{study.results.accuracyImprovement}</div>
                        <div className="text-xs text-blue-700">Accuracy</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-purple-600 mb-1">{study.results.costSaving}</div>
                        <div className="text-xs text-purple-700">Monthly Savings</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-orange-600 mb-1">{study.results.volumeIncrease}</div>
                        <div className="text-xs text-orange-700">Volume Increase</div>
                      </div>
                    </div>

                    <div>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {study.tags.map((tag, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <Button 
                        className="flex-1"
                        onClick={() => handleDownload(study.id)}
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Download PDF
                      </Button>
                      <Button variant="outline" className="flex-1">
                        Read Full Story
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Regular Case Studies */}
        {regularStudies.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-8">All Case Studies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularStudies.map((study) => (
                <Card key={study.id} className="card-premium">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                        {study.industryIcon}
                      </div>
                      <div className="flex-1">
                        <Badge variant="outline" className="mb-1">{study.industry}</Badge>
                        <div className="text-xs text-muted-foreground">{study.company}</div>
                      </div>
                      <div className="text-xs text-muted-foreground text-right">
                        <div>{study.readTime}</div>
                        <div>{study.publishDate}</div>
                      </div>
                    </div>
                    <CardTitle className="text-lg">{study.title}</CardTitle>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-3 text-center">
                      <div className="p-3 bg-green-50 rounded-lg">
                        <div className="text-lg font-bold text-green-600">{study.results.timeReduction}</div>
                        <div className="text-xs text-green-700">Time Saved</div>
                      </div>
                      <div className="p-3 bg-blue-50 rounded-lg">
                        <div className="text-lg font-bold text-blue-600">{study.results.costSaving}</div>
                        <div className="text-xs text-blue-700">Monthly Savings</div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1">
                      {study.tags.slice(0, 2).map((tag, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                      {study.tags.length > 2 && (
                        <Badge variant="secondary" className="text-xs">
                          +{study.tags.length - 2} more
                        </Badge>
                      )}
                    </div>

                    <div className="flex gap-2">
                      <Button 
                        size="sm" 
                        className="flex-1"
                        onClick={() => handleDownload(study.id)}
                      >
                        <Download className="w-3 h-3 mr-1" />
                        Download
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1">
                        Read More
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* No Results */}
        {filteredCaseStudies.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-muted/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="w-12 h-12 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Tidak ada case study yang ditemukan</h3>
            <p className="text-muted-foreground mb-6">
              Coba ubah filter atau kata kunci pencarian Anda.
            </p>
            <Button
              variant="outline"
              onClick={() => {
                setSearchTerm('');
                setSelectedIndustry('all');
                setSelectedUseCase('all');
              }}
            >
              Reset Filters
            </Button>
          </div>
        )}

        {/* CTA Section */}
        <div className="text-center bg-white rounded-3xl p-16 shadow-xl">
          <TrendingUp className="w-16 h-16 text-primary mx-auto mb-6" />
          <h3 className="text-3xl font-semibold mb-6">
            Siap Mencapai Hasil Serupa?
          </h3>
          <p className="text-lg text-muted-foreground mb-10 max-w-3xl mx-auto">
            Bergabunglah dengan perusahaan-perusahaan terkemuka yang telah bertransformasi 
            dengan rangkum.ai. Jadwalkan demo untuk melihat bagaimana kami dapat membantu 
            mencapai efisiensi dan penghematan yang serupa.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              size="lg" 
              className="px-10 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={handleRequestDemo}
            >
              Jadwalkan Demo Personal
              <ArrowRight className="w-6 h-6 ml-3" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="px-10 py-4 text-lg border-2 bg-white/80 hover:bg-white transition-all duration-300"
              onClick={() => navigateTo('get-started')}
            >
              Mulai Free Trial
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}