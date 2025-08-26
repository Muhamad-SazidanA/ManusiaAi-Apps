import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { useTranslation } from './TranslationContext';
import { useRouter } from './Router';
import { 
  Brain, 
  CheckCircle, 
  ArrowRight,
  Cpu,
  Zap,
  Target,
  BarChart3,
  FileText,
  Image,
  Code,
  Settings,
  Shield,
  Clock,
  TrendingUp,
  Eye,
  Layers,
  Database,
  Workflow,
  FileJson,
  Scan,
  Cloud,
  Server,
  Building2
} from 'lucide-react';

export function PlatformSection() {
  const { t } = useTranslation();
  const { navigateTo } = useRouter();

  const platformFeatures = [
    {
      id: 'ai-processing',
      icon: <Brain className="w-10 h-10" />,
      title: t('platform.ai.title'),
      description: t('platform.ai.desc'),
      features: [
        'Pengenalan struktur dokumen otomatis tanpa template',
        'Model AI yang terus belajar dan beradaptasi',
        'Support dokumen semi-struktur dan tidak terstruktur',
        'Akurasi tinggi untuk berbagai jenis dokumen'
      ],
      capabilities: [
        { name: 'Document Types', value: '100+' },
        { name: 'Languages Supported', value: '40+' },
        { name: 'Accuracy Rate', value: '99.8%' },
        { name: 'Processing Speed', value: '<30s' }
      ]
    },
    {
      id: 'json-output',
      icon: <FileJson className="w-10 h-10" />,
      title: t('platform.json.title'),
      description: t('platform.json.desc'),
      features: [
        'Output JSON terstandarisasi dan konsisten',
        'Integrasi langsung ke ERP, CRM, dan RPA',
        'RESTful API dengan dokumentasi lengkap',
        'Real-time processing dan response'
      ],
      capabilities: [
        { name: 'API Endpoints', value: '15+' },
        { name: 'Response Time', value: '<2s' },
        { name: 'Uptime SLA', value: '99.9%' },
        { name: 'Integrations', value: '50+' }
      ]
    },
    {
      id: 'no-template',
      icon: <Zap className="w-10 h-10" />,
      title: t('platform.notemplate.title'),
      description: t('platform.notemplate.desc'),
      features: [
        'Zero setup untuk dokumen baru',
        'Tidak perlu training data atau konfigurasi manual',
        'Adaptasi otomatis terhadap format dokumen baru',
        'Penghematan waktu setup hingga 95%'
      ],
      capabilities: [
        { name: 'Setup Time', value: '0 min' },
        { name: 'Training Required', value: 'None' },
        { name: 'Format Adaptation', value: 'Auto' },
        { name: 'Time Savings', value: '95%' }
      ]
    },
    {
      id: 'deployment',
      icon: <Cloud className="w-10 h-10" />,
      title: t('platform.deployment.title'),
      description: t('platform.deployment.desc'),
      features: [
        'SaaS (Cloud) - Fully managed dengan auto-scaling',
        'On-Premise - Kontrol penuh dan security maksimum', 
        'Private Cloud - Dedicated infrastructure',
        'Hybrid deployment untuk fleksibilitas maksimal'
      ],
      capabilities: [
        { name: 'Deployment Options', value: '4' },
        { name: 'Security Standards', value: 'ISO 27001' },
        { name: 'Compliance', value: 'Multi-region' },
        { name: 'Scalability', value: 'Auto' }
      ]
    }
  ];

  const deploymentOptions = [
    {
      title: t('platform.saas.title'),
      subtitle: t('platform.saas.subtitle'),
      icon: <Cloud className="w-8 h-8" />,
      description: t('platform.saas.desc'),
      features: [
        'Setup dalam 5 menit',
        'Auto-scaling berdasarkan volume',
        'Global CDN untuk performa optimal',
        'Monitoring 24/7 dan support'
      ],
      bestFor: 'Startup hingga enterprise yang ingin deployment cepat',
      pricing: 'Pay per document',
      highlight: 'Most Popular'
    },
    {
      title: t('platform.onpremise.title'),
      subtitle: t('platform.onpremise.subtitle'),
      icon: <Server className="w-8 h-8" />,
      description: t('platform.onpremise.desc'),
      features: [
        'Data tetap di internal infrastructure',
        'Kustomisasi mendalam sesuai kebutuhan',
        'Air-gapped deployment untuk security maksimum',
        'Integration dengan existing security systems'
      ],
      bestFor: 'Enterprise dengan requirement keamanan tinggi',
      pricing: 'Annual license',
      highlight: 'Maximum Security'
    },
    {
      title: t('platform.privatecloud.title'),
      subtitle: t('platform.privatecloud.subtitle'),
      icon: <Shield className="w-8 h-8" />,
      description: t('platform.privatecloud.desc'),
      features: [
        'Dedicated compute dan storage resources',
        'Custom compliance dan data residency',
        'Enhanced security controls',
        'SLA khusus dan prioritas support'
      ],
      bestFor: 'Regulated industries dan large enterprises',
      pricing: 'Monthly subscription',
      highlight: 'Enterprise Grade'
    }
  ];

  const integrations = [
    {
      category: t('platform.integration.enterprise'),
      systems: ['SAP S/4HANA', 'Oracle ERP', 'Microsoft Dynamics', 'Workday'],
      icon: <Building2 className="w-5 h-5" />
    },
    {
      category: t('platform.integration.document'),
      systems: ['SharePoint', 'Box', 'Dropbox', 'Google Drive'],
      icon: <Database className="w-5 h-5" />
    },
    {
      category: t('platform.integration.rpa'),
      systems: ['UiPath', 'Automation Anywhere', 'Blue Prism', 'Power Automate'],
      icon: <Workflow className="w-5 h-5" />
    },
    {
      category: t('platform.integration.bi'),
      systems: ['Power BI', 'Tableau', 'Qlik', 'Looker'],
      icon: <Target className="w-5 h-5" />
    }
  ];

  const handleDemoClick = () => {
    navigateTo('demo');
  };

  const handleTrialClick = () => {
    navigateTo('get-started');
  };

  return (
    <section id="platform" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <Badge variant="secondary" className="mb-6 px-4 py-2">
            <Cpu className="w-4 h-4 mr-2" />
            AI Platform Terdepan
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-8 leading-tight">
            {t('platform.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            {t('platform.subtitle')}
          </p>
        </div>

        {/* Platform Features Tabs */}
        <div className="mb-24">
          <Tabs defaultValue="ai-processing" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-12">
              {platformFeatures.map((feature) => (
                <TabsTrigger 
                  key={feature.id} 
                  value={feature.id}
                  className="flex flex-col items-center space-y-1 text-xs p-3"
                >
                  <div className="w-8 h-8 text-primary">{feature.icon}</div>
                  <span className="text-center font-medium">{feature.title}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {platformFeatures.map((feature) => (
              <TabsContent key={feature.id} value={feature.id}>
                <Card className="p-8 border-2 hover:border-primary/20 transition-colors duration-300">
                  <div className="grid grid-cols-1 xl:grid-cols-3 gap-12">
                    {/* Feature Overview */}
                    <div className="xl:col-span-2 space-y-8">
                      <div>
                        <div className="flex items-center space-x-4 mb-6">
                          <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                            {feature.icon}
                          </div>
                          <div>
                            <h3 className="text-2xl font-semibold">{feature.title}</h3>
                            <p className="text-muted-foreground">{feature.description}</p>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-4">{t('common.features')}:</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {feature.features.map((item, idx) => (
                            <div key={idx} className="flex items-start space-x-3">
                              <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                              <span className="text-sm">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Capabilities Sidebar */}
                    <div className="xl:col-span-1">
                      <div className="bg-gradient-to-br from-accent/50 to-accent/80 rounded-2xl p-8">
                        <h4 className="font-semibold mb-6">Key Metrics:</h4>
                        <div className="space-y-6">
                          {feature.capabilities.map((cap, idx) => (
                            <div key={idx} className="text-center">
                              <div className="text-2xl font-bold text-primary mb-1">{cap.value}</div>
                              <div className="text-sm text-muted-foreground">{cap.name}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        {/* Deployment Options */}
        <div className="mb-24">
          <h3 className="text-3xl font-semibold text-center mb-16">
            {t('platform.deployments.flexible')}
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {deploymentOptions.map((option, index) => (
              <Card key={index} className="relative hover:shadow-2xl transition-all duration-500 border-2 hover:border-primary/20 overflow-hidden group">
                {option.highlight && (
                  <div className="absolute top-0 left-0 right-0">
                    <div className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground text-center py-2 text-sm font-medium">
                      {option.highlight}
                    </div>
                  </div>
                )}
                
                <CardHeader className={`${option.highlight ? 'pt-16' : 'pt-8'} pb-6`}>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                      {option.icon}
                    </div>
                    <Badge variant="outline" className="text-xs">{option.pricing}</Badge>
                  </div>
                  
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {option.title}
                  </CardTitle>
                  <CardDescription className="text-primary font-medium">
                    {option.subtitle}
                  </CardDescription>
                  <CardDescription className="text-base mt-3">
                    {option.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {option.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="pt-4 border-t border-border">
                    <p className="text-sm font-medium text-muted-foreground mb-2">Cocok untuk:</p>
                    <p className="text-sm text-muted-foreground">{option.bestFor}</p>
                  </div>
                  
                  <Button className="w-full group-hover:bg-primary/90 transition-colors">
                    {t('common.learnmore')}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Integration Ecosystem */}
        <div className="mb-20">
          <h3 className="text-3xl font-semibold text-center mb-16">
            {t('platform.integration.ecosystem')}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {integrations.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                      {category.icon}
                    </div>
                    <CardTitle className="text-lg">{category.category}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {category.systems.map((system, systemIndex) => (
                      <div key={systemIndex} className="flex items-center p-3 bg-accent/30 rounded-lg">
                        <div className="w-8 h-8 bg-primary/10 rounded flex items-center justify-center mr-3">
                          <Settings className="w-4 h-4 text-primary" />
                        </div>
                        <span className="text-sm font-medium">{system}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section with Navigation */}
        <div className="text-center bg-gradient-to-r from-primary/5 to-accent/20 rounded-3xl p-16">
          <Scan className="w-16 h-16 text-primary mx-auto mb-6" />
          <h3 className="text-3xl font-semibold mb-6">
            {t('platform.cta.title')}
          </h3>
          <p className="text-lg text-muted-foreground mb-10 max-w-3xl mx-auto">
            {t('platform.cta.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              size="lg" 
              className="px-10 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={handleDemoClick}
            >
              {t('platform.cta.demo')}
              <ArrowRight className="w-6 h-6 ml-3" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="px-10 py-4 text-lg border-2 bg-white/80 hover:bg-white transition-all duration-300"
              onClick={handleTrialClick}
            >
              {t('platform.cta.trial')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}