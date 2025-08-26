import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { useTranslation } from './TranslationContext';
import { useRouter } from './Router';
import { 
  Users, 
  Receipt, 
  FileText, 
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Clock,
  Target,
  DollarSign,
  Zap,
  Shield,
  Building2,
  Heart,
  CreditCard,
  GraduationCap,
  Factory,
  Truck,
  BarChart3
} from 'lucide-react';

export function SolutionsSection() {
  const { t } = useTranslation();
  const { navigateTo } = useRouter();

  const mainUseCases = [
    {
      icon: <Users className="w-12 h-12" />,
      title: t('solutions.onboarding.title'),
      description: t('solutions.onboarding.desc'),
      features: [
        'Verifikasi KTP, NPWP, SIM otomatis',
        'Validasi surat izin usaha dan dokumen legal',
        'Deteksi fraud dan dokumen palsu',
        'Compliance KYC/AML real-time'
      ],
      metrics: {
        timeReduction: '85%',
        accuracy: '99.5%',
        costSaving: 'Rp 2.4M/tahun'
      },
      industries: ['Perbankan', 'Fintech', 'Asuransi', 'Telekomunikasi']
    },
    {
      icon: <Receipt className="w-12 h-12" />,
      title: t('solutions.ap.title'),
      description: t('solutions.ap.desc'),
      features: [
        'Ekstraksi data invoice multi-format',
        '3-way matching otomatis (PO, Receipt, Invoice)',
        'Workflow approval cerdas',
        'Integrasi real-time ke sistem ERP'
      ],
      metrics: {
        timeReduction: '90%',
        accuracy: '99.8%',
        costSaving: 'Rp 1.8M/tahun'
      },
      industries: ['Manufaktur', 'Retail', 'Distribusi', 'Healthcare']
    },
    {
      icon: <FileText className="w-12 h-12" />,
      title: t('solutions.po.title'),
      description: t('solutions.po.desc'),
      features: [
        'Pemrosesan PO fisik dan digital',
        'Validasi data supplier otomatis',
        'Tracking status real-time',
        'Audit trail lengkap dan compliance'
      ],
      metrics: {
        timeReduction: '75%',
        accuracy: '99.2%',
        costSaving: 'Rp 890K/tahun'
      },
      industries: ['Konstruksi', 'Manufaktur', 'Pendidikan', 'Pemerintahan']
    }
  ];

  const industries = [
    {
      name: 'Banking',
      icon: <Building2 className="w-6 h-6" />,
      description: 'Pemrosesan kredit, KYC, dan compliance',
      useCases: ['Loan Origination', 'KYC/AML', 'Financial Statements'],
      savings: 'Hemat 20-35%/tahun',
      page: 'banking'
    },
    {
      name: 'Insurance',
      icon: <CreditCard className="w-6 h-6" />,
      description: 'Claims processing dan underwriting',
      useCases: ['Claims Processing', 'Policy Management', 'Fraud Detection'],
      savings: 'Hemat 25-40%/tahun',
      page: 'insurance'
    },
    {
      name: 'Healthcare',
      icon: <Heart className="w-6 h-6" />,
      description: 'Medical records dan patient onboarding',
      useCases: ['Patient Records', 'Insurance Claims', 'Lab Results'],
      savings: 'Hemat 15-30%/tahun',
      page: 'healthcare'
    },
    {
      name: 'Manufacturing',
      icon: <Factory className="w-6 h-6" />,
      description: 'Quality control dan supply chain',
      useCases: ['Quality Reports', 'Supplier Docs', 'Compliance'],
      savings: 'Hemat 20-30%/tahun',
      page: 'manufacturing'
    },
    {
      name: 'Logistics',
      icon: <Truck className="w-6 h-6" />,
      description: 'Shipping documents dan tracking',
      useCases: ['Shipping Docs', 'Customs Forms', 'Manifest'],
      savings: 'Hemat 18-28%/tahun',
      page: 'logistics'
    },
    {
      name: 'Education',
      icon: <GraduationCap className="w-6 h-6" />,
      description: 'Academic records dan admissions',
      useCases: ['Student Records', 'Transcripts', 'Applications'],
      savings: 'Hemat 10-25%/tahun',
      page: 'education'
    }
  ];

  const handleIndustryClick = (industry: any) => {
    if (industry.page) {
      navigateTo(industry.page);
    }
  };

  return (
    <section 
      id="solutions" 
      className="section-padding bg-gradient-to-br from-accent/5 to-background"
      aria-labelledby="solutions-title"
    >
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-in-up">
          <Badge variant="secondary" className="mb-6 px-4 py-2">
            <Target className="w-4 h-4 mr-2" />
            Solusi Enterprise
          </Badge>
          <h2 
            id="solutions-title"
            className="text-4xl sm:text-5xl font-bold text-foreground mb-8 leading-tight"
          >
            {t('solutions.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            {t('solutions.subtitle')}
          </p>
        </div>

        {/* Horizontal Use Cases */}
        <div className="mb-24">
          <h3 className="text-3xl font-semibold text-center mb-16 animate-fade-in-up">
            Use Case Utama yang Proven
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {mainUseCases.map((useCase, index) => (
              <Card key={index} className="card-premium group border-2 hover:border-primary/30 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary to-primary/70"></div>
                
                <CardHeader className="pt-8 pb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300 mb-6 mx-auto">
                    {useCase.icon}
                  </div>
                  
                  <CardTitle className="text-xl text-center group-hover:text-primary transition-colors mb-4">
                    {useCase.title}
                  </CardTitle>
                  <CardDescription className="text-base text-center leading-relaxed">
                    {useCase.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Features */}
                  <div>
                    <h5 className="font-semibold mb-3 text-sm">Fitur Utama:</h5>
                    <ul className="space-y-2">
                      {useCase.features.map((feature, idx) => (
                        <li key={idx} className="text-sm flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Metrics */}
                  <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-4">
                    <h5 className="font-semibold mb-3 text-sm text-green-700">Impact Metrics:</h5>
                    <div className="grid grid-cols-3 gap-2 text-center">
                      <div>
                        <div className="text-lg font-bold text-green-600">{useCase.metrics.timeReduction}</div>
                        <div className="text-xs text-muted-foreground">Time Saved</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-blue-600">{useCase.metrics.accuracy}</div>
                        <div className="text-xs text-muted-foreground">Accuracy</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-purple-600">{useCase.metrics.costSaving}</div>
                        <div className="text-xs text-muted-foreground">Savings</div>
                      </div>
                    </div>
                  </div>

                  {/* Industries */}
                  <div>
                    <h5 className="font-semibold mb-3 text-sm">Industri Utama:</h5>
                    <div className="flex flex-wrap gap-2">
                      {useCase.industries.map((industry, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {industry}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Button 
                    className="w-full group-hover:bg-primary/90 transition-colors"
                    onClick={() => navigateTo('customer-onboarding')}
                    aria-label={`Pelajari detail lebih lanjut tentang ${useCase.title}`}
                  >
                    {t('common.learn_more')}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Industry Solutions Grid */}
        <div className="mb-24">
          <h3 className="text-3xl font-semibold text-center mb-16 animate-fade-in-up">
            Solusi per Industri
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <Card 
                key={index} 
                className="card-premium cursor-pointer group border-2 hover:border-primary/20"
                onClick={() => handleIndustryClick(industry)}
              >
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                      {industry.icon}
                    </div>
                    <div>
                      <CardTitle className="text-lg group-hover:text-primary transition-colors">
                        {industry.name}
                      </CardTitle>
                    </div>
                  </div>
                  <CardDescription className="text-base">
                    {industry.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div>
                    <h5 className="font-semibold mb-3 text-sm">Use Cases:</h5>
                    <div className="space-y-2">
                      {industry.useCases.map((useCase, idx) => (
                        <div key={idx} className="flex items-center text-sm">
                          <Zap className="w-3 h-3 text-blue-500 mr-2" />
                          {useCase}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-lg p-3 text-center">
                    <div className="text-lg font-bold text-green-600">{industry.savings}</div>
                    <div className="text-xs text-green-700">Biaya Operasional</div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-2">
                    <span className="text-sm text-primary group-hover:underline">Lihat Detail →</span>
                    <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* ROI Calculator Section */}
        <div className="card-premium bg-white rounded-3xl p-12 shadow-xl border border-border/20 mb-16">
          <div className="text-center mb-12">
            <DollarSign className="w-16 h-16 text-green-600 mx-auto mb-6" />
            <h3 className="text-3xl font-semibold mb-6">
              ROI Calculator: Hitung Penghematan Anda
            </h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Lihat berapa banyak yang bisa Anda hemat dengan mengautomasi workflow pemrosesan dokumen. 
              Pelanggan kami rata-rata melihat ROI dalam 3-6 bulan.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl">
              <BarChart3 className="w-8 h-8 text-green-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-green-600 mb-2">85%</div>
              <div className="text-sm text-muted-foreground">Rata-rata Penghematan Waktu</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl">
              <DollarSign className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-blue-600 mb-2">20-35%</div>
              <div className="text-sm text-muted-foreground">Rata-rata Penghematan Operasional</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl">
              <TrendingUp className="w-8 h-8 text-purple-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-purple-600 mb-2">4.2x</div>
              <div className="text-sm text-muted-foreground">Rata-rata ROI Multiplier</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl">
              <Clock className="w-8 h-8 text-orange-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-orange-600 mb-2">4.5</div>
              <div className="text-sm text-muted-foreground">Bulan Payback Period</div>
            </div>
          </div>
          
          <div className="text-center">
            <Button 
              size="lg" 
              className="px-10 py-4 text-lg bg-green-600 hover:bg-green-700 shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => navigateTo('roi-calculator')}
              aria-label="Akses ROI calculator untuk menghitung penghematan potensial"
            >
              {t('solutions.roi.calculate_now')}
              <ArrowRight className="w-6 h-6 ml-3" />
            </Button>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-primary/5 to-accent/20 rounded-3xl p-16">
          <Target className="w-16 h-16 text-primary mx-auto mb-6" />
          <h3 className="text-3xl font-semibold mb-6">
            Siap Melihat Use Case Anda Beraksi?
          </h3>
          <p className="text-lg text-muted-foreground mb-10 max-w-3xl mx-auto">
            Jadwalkan demo personal di mana kami akan menunjukkan persis bagaimana rangkum.ai 
            dapat mengubah tantangan pemrosesan dokumen spesifik Anda menjadi keunggulan kompetitif.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              size="lg" 
              className="px-10 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => navigateTo('demo')}
            >
              {t('platform.cta.demo')}
              <ArrowRight className="w-6 h-6 ml-3" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="px-10 py-4 text-lg border-2 bg-white/80 hover:bg-white transition-all duration-300"
              onClick={() => navigateTo('case-studies')}
            >
              {t('customers.case_studies.all')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}