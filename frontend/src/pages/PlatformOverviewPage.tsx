import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { useTranslation } from '../TranslationContext';
import { useRouter } from '../Router';
import { 
  Brain, 
  CheckCircle, 
  ArrowRight,
  Cpu,
  Zap,
  Target,
  BarChart3,
  FileJson,
  Cloud,
  Server,
  Shield,
  Building2,
  Database,
  Workflow,
  Settings,
  Globe,
  Clock,
  TrendingUp,
  Users,
  Award,
  Layers,
  Eye,
  Lock,
  Sparkles
} from 'lucide-react';

export function PlatformOverviewPage() {
  const { t } = useTranslation();
  const { navigateTo } = useRouter();

  const platformComponents = [
    {
      id: 'ai-processing',
      icon: <Brain className="w-12 h-12" />,
      title: t('platform.ai.title'),
      description: t('platform.ai.desc'),
      keyFeatures: [
        'Template-free document understanding',
        'Multi-format support (PDF, images, scans)',
        'Handwriting recognition',
        'Table detection & extraction',
        'Self-learning AI models'
      ],
      metrics: [
        { label: 'Accuracy Rate', value: '99.8%' },
        { label: 'Processing Speed', value: '<30s' },
        { label: 'Document Types', value: '100+' },
        { label: 'Languages', value: '40+' }
      ],
      link: 'ai-processing'
    },
    {
      id: 'json-output',
      icon: <FileJson className="w-12 h-12" />,
      title: t('platform.json.title'),
      description: t('platform.json.desc'),
      keyFeatures: [
        'Standardized JSON schema',
        'Field-level confidence scores',
        'Rich metadata included',
        'RESTful API integration',
        'Real-time processing'
      ],
      metrics: [
        { label: 'API Response', value: '<2s' },
        { label: 'Uptime SLA', value: '99.9%' },
        { label: 'Integrations', value: '50+' },
        { label: 'Throughput', value: '10K/min' }
      ],
      link: 'json-output'
    },
    {
      id: 'no-template',
      icon: <Zap className="w-12 h-12" />,
      title: t('platform.notemplate.title'),
      description: t('platform.notemplate.desc'),
      keyFeatures: [
        'Zero configuration required',
        'Auto-adaptation to new formats',
        'Intelligent field recognition',
        'Context-aware extraction',
        'Instant deployment'
      ],
      metrics: [
        { label: 'Setup Time', value: '0 min' },
        { label: 'Training Data', value: 'None' },
        { label: 'Time Savings', value: '95%' },
        { label: 'Error Reduction', value: '90%' }
      ],
      link: 'no-template'
    },
    {
      id: 'deployment',
      icon: <Cloud className="w-12 h-12" />,
      title: t('platform.deployment.title'),
      description: t('platform.deployment.desc'),
      keyFeatures: [
        'SaaS cloud deployment',
        'On-premise installation',
        'Private cloud options',
        'Hybrid configurations',
        'Enterprise security'
      ],
      metrics: [
        { label: 'Deployment Options', value: '4' },
        { label: 'Security Certs', value: 'ISO 27001' },
        { label: 'Global Regions', value: '5' },
        { label: 'Compliance', value: 'GDPR' }
      ],
      link: 'deployment'
    }
  ];

  const platformAdvantages = [
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Akurasi Tertinggi di Kelasnya',
      description: 'Tingkat akurasi 99.8% untuk dokumen terstruktur dan semi-terstruktur dengan teknologi AI terdepan',
      stats: '99.8% accuracy'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Pemrosesan Super Cepat',
      description: 'Rata-rata waktu pemrosesan <30 detik per dokumen dengan throughput hingga 10,000 dokumen per jam',
      stats: '<30s processing'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Keamanan Enterprise-Grade',
      description: 'Sertifikasi ISO 27001, enkripsi end-to-end, dan compliance GDPR untuk keamanan data maksimal',
      stats: 'ISO 27001 certified'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Skalabilitas Global',
      description: 'Auto-scaling infrastructure dengan 5 data center global untuk performa optimal di seluruh dunia',
      stats: '5 global regions'
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'AI yang Terus Belajar',
      description: 'Model machine learning yang continuously learning dan improving accuracy berdasarkan feedback',
      stats: 'Self-learning AI'
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: 'Integrasi Mudah',
      description: 'RESTful API, webhooks, dan SDK untuk 50+ sistem enterprise populer dengan dokumentasi lengkap',
      stats: '50+ integrations'
    }
  ];

  const industryApplications = [
    {
      industry: 'Financial Services',
      icon: <Building2 className="w-6 h-6" />,
      description: 'KYC processing, loan applications, financial statements',
      useCases: ['Customer Onboarding', 'Credit Assessment', 'Compliance Documentation'],
      impact: '85% faster processing'
    },
    {
      industry: 'Healthcare',
      icon: <Users className="w-6 h-6" />,
      description: 'Medical records, insurance claims, patient forms',
      useCases: ['Patient Records', 'Insurance Processing', 'Lab Results'],
      impact: '70% cost reduction'
    },
    {
      industry: 'Manufacturing',
      icon: <Settings className="w-6 h-6" />,
      description: 'Quality reports, supplier documents, compliance',
      useCases: ['Quality Control', 'Supplier Management', 'Audit Documentation'],
      impact: '60% error reduction'
    },
    {
      industry: 'Government',
      icon: <Shield className="w-6 h-6" />,
      description: 'Permits, applications, regulatory documents',
      useCases: ['Permit Processing', 'Citizen Services', 'Regulatory Compliance'],
      impact: '90% time savings'
    }
  ];

  const handleComponentClick = (componentId: string) => {
    navigateTo(componentId);
  };

  const handleDemoClick = () => {
    navigateTo('demo');
  };

  const handleTrialClick = () => {
    navigateTo('get-started');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-accent/20 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-6 px-4 py-2">
              <Cpu className="w-4 h-4 mr-2" />
              {t('nav.platform')} Overview
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-8 leading-tight">
              {t('platform.title')}
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
              {t('platform.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-8" onClick={handleTrialClick}>
                {t('hero.startfreetrial')}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" size="lg" className="px-8" onClick={handleDemoClick}>
                {t('hero.scheduledemo')}
              </Button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-border/30">
              <div className="text-3xl font-bold text-primary mb-2">99.8%</div>
              <div className="text-sm text-muted-foreground">{t('hero.accuracy')}</div>
            </div>
            <div className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-border/30">
              <div className="text-3xl font-bold text-primary mb-2">&lt;30s</div>
              <div className="text-sm text-muted-foreground">{t('hero.processtime')}</div>
            </div>
            <div className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-border/30">
              <div className="text-3xl font-bold text-primary mb-2">50M+</div>
              <div className="text-sm text-muted-foreground">Documents/month</div>
            </div>
            <div className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-border/30">
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Companies</div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Components */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Core Platform Components</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Empat komponen utama yang membentuk platform document processing paling canggih
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {platformComponents.map((component, index) => (
              <Card 
                key={component.id} 
                className="hover:shadow-2xl transition-all duration-300 p-8 cursor-pointer group border-2 hover:border-primary/20"
                onClick={() => handleComponentClick(component.link)}
              >
                <div className="flex items-start space-x-6">
                  <div className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    {component.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                      {component.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">{component.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3 text-sm">{t('common.features')}:</h4>
                      <ul className="space-y-2">
                        {component.keyFeatures.slice(0, 3).map((feature, idx) => (
                          <li key={idx} className="flex items-start text-sm">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      {component.metrics.slice(0, 2).map((metric, idx) => (
                        <div key={idx} className="text-center p-3 bg-accent/30 rounded-lg">
                          <div className="text-lg font-bold text-primary">{metric.value}</div>
                          <div className="text-xs text-muted-foreground">{metric.label}</div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-primary group-hover:underline">
                        {t('common.learnmore')} →
                      </span>
                      <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Advantages */}
      <section className="py-24 bg-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Mengapa Memilih rangkum.ai Platform?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Keunggulan kompetitif yang membuat rangkum.ai menjadi pilihan terdepan untuk enterprise
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {platformAdvantages.map((advantage, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                    {advantage.icon}
                  </div>
                  <div>
                    <Badge variant="outline" className="text-xs mb-2">{advantage.stats}</Badge>
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-3">{advantage.title}</h3>
                <p className="text-muted-foreground">{advantage.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Applications */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Industry Applications</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Platform kami telah terbukti memberikan hasil exceptional di berbagai industri
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industryApplications.map((industry, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow duration-300 p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary flex-shrink-0">
                    {industry.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2">{industry.industry}</h3>
                    <p className="text-muted-foreground mb-4">{industry.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold mb-2 text-sm">Common Use Cases:</h4>
                      <div className="flex flex-wrap gap-2">
                        {industry.useCases.map((useCase, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {useCase}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-green-600 font-semibold text-sm">
                        ✓ {industry.impact}
                      </span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture Overview */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Platform Architecture</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Architecture yang scalable, secure, dan enterprise-ready untuk memenuhi kebutuhan bisnis Anda
            </p>
          </div>
          
          <div className="bg-white rounded-3xl p-12 shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="text-center">
                <div className="w-24 h-24 bg-blue-100 rounded-3xl flex items-center justify-center mx-auto mb-6">
                  <Database className="w-12 h-12 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Data Layer</h3>
                <p className="text-muted-foreground text-sm">
                  Secure document storage, metadata management, dan audit trails dengan encryption
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-24 h-24 bg-green-100 rounded-3xl flex items-center justify-center mx-auto mb-6">
                  <Brain className="w-12 h-12 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">AI Processing Engine</h3>
                <p className="text-muted-foreground text-sm">
                  Advanced ML models untuk OCR, NLP, computer vision, dan document understanding
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-24 h-24 bg-purple-100 rounded-3xl flex items-center justify-center mx-auto mb-6">
                  <FileJson className="w-12 h-12 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">API Gateway</h3>
                <p className="text-muted-foreground text-sm">
                  RESTful APIs, webhooks, dan SDK untuk integration seamless ke existing systems
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Sparkles className="w-16 h-16 mx-auto mb-6 opacity-90" />
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Siap Mengalami Platform Terdepan?
          </h2>
          <p className="text-xl mb-10 opacity-90">
            Bergabunglah dengan 500+ perusahaan yang telah mentransformasi workflow dokumen mereka 
            dengan platform rangkum.ai yang powerful dan scalable.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              size="lg" 
              variant="secondary" 
              className="px-10"
              onClick={handleTrialClick}
            >
              {t('platform.cta.trial')}
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="px-10 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              onClick={handleDemoClick}
            >
              {t('platform.cta.demo')}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}