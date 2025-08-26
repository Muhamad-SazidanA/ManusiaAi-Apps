import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { useTranslation } from '../TranslationContext';
import { useRouter } from '../Router';
import { 
  Building2, 
  CheckCircle, 
  ArrowRight,
  Target,
  TrendingUp,
  Shield,
  Zap,
  Users,
  Award,
  BarChart3,
  DollarSign,
  Clock,
  FileText,
  AlertTriangle,
  CreditCard,
  Banknote,
  UserCheck,
  Database,
  Lock,
  Smartphone,
  Globe,
  Sparkles,
  Star,
  Quote,
  Calendar,
  ChevronRight
} from 'lucide-react';

export function BankingPage() {
  const { t } = useTranslation();
  const { navigateTo } = useRouter();

  const bankingStats = [
    {
      icon: <Building2 className="w-8 h-8" />,
      value: '50+',
      label: 'Bank Customers',
      description: 'Leading banks across Indonesia'
    },
    {
      icon: <FileText className="w-8 h-8" />,
      value: '10M+',
      label: 'Documents/Month',
      description: 'Processed for banking sector'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      value: '85%',
      label: 'Time Reduction',
      description: 'Average processing time saved'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      value: '99.8%',
      label: 'Accuracy Rate',
      description: 'In document processing'
    }
  ];

  const useCases = [
    {
      title: 'Digital Customer Onboarding & KYC',
      icon: <UserCheck className="w-12 h-12" />,
      description: 'Automate customer verification and compliance processes',
      challenge: 'Manual KYC processes taking 3-5 days with high error rates and compliance risks',
      solution: 'AI-powered identity verification, document authentication, and automated compliance checks',
      benefits: [
        'Reduce onboarding time from 5 days to 2 hours',
        '99.5% accuracy in identity verification',
        'Automatic fraud detection and prevention',
        'Full regulatory compliance (OJK, BI)',
        'Enhanced customer experience'
      ],
      metrics: {
        timeReduction: '92%',
        costSaving: 'Rp 2.4B/year',
        accuracy: '99.5%',
        compliance: '100%'
      },
      color: 'blue'
    },
    {
      title: 'Credit Application Processing',
      icon: <CreditCard className="w-12 h-12" />,
      description: 'Streamline loan origination and credit assessment workflows',
      challenge: 'Complex credit applications requiring manual review of multiple documents and lengthy approval cycles',
      solution: 'Automated document extraction, risk scoring, and intelligent workflow routing',
      benefits: [
        'Accelerate credit decisions from 14 days to 2 days',
        'Automated risk assessment and scoring',
        'Real-time document verification',
        'Intelligent approval workflows',
        'Comprehensive audit trails'
      ],
      metrics: {
        timeReduction: '85%',
        accuracy: '99.2%',
        throughput: '300%',
        satisfaction: '+45%'
      },
      color: 'green'
    },
    {
      title: 'Trade Finance Documentation',
      icon: <Globe className="w-12 h-12" />,
      description: 'Digitize complex trade finance and international banking documents',
      challenge: 'Manual processing of trade documents leading to delays and errors in international transactions',
      solution: 'Intelligent extraction of LC, Invoice, and shipping documents with validation',
      benefits: [
        'Process trade documents in real-time',
        'Automatic compliance checking',
        'Integration with SWIFT and banking systems',
        'Reduced operational risk',
        'Faster settlement times'
      ],
      metrics: {
        timeReduction: '75%',
        errorReduction: '95%',
        compliance: '100%',
        throughput: '+200%'
      },
      color: 'purple'
    },
    {
      title: 'Anti-Money Laundering (AML)',
      icon: <Lock className="w-12 h-12" />,
      description: 'Enhanced AML compliance and suspicious activity detection',
      challenge: 'Manual transaction monitoring and document review for AML compliance',
      solution: 'AI-powered transaction analysis and automated suspicious activity reporting',
      benefits: [
        'Real-time transaction monitoring',
        'Automated SAR generation',
        'Enhanced due diligence processes',
        'Regulatory reporting automation',
        'Reduced false positives by 80%'
      ],
      metrics: {
        falsePositives: '-80%',
        detectionRate: '+65%',
        compliance: '100%',
        efficiency: '+90%'
      },
      color: 'red'
    }
  ];

  const bankingChallenges = [
    {
      challenge: 'Regulatory Compliance',
      description: 'Keeping up with evolving OJK and Bank Indonesia regulations',
      solution: 'Automated compliance monitoring and reporting with real-time updates',
      icon: <Shield className="w-6 h-6" />
    },
    {
      challenge: 'Digital Transformation',
      description: 'Modernizing legacy systems while maintaining security',
      solution: 'API-first integration with existing core banking systems',
      icon: <Smartphone className="w-6 h-6" />
    },
    {
      challenge: 'Customer Experience',
      description: 'Meeting digital-first customer expectations',
      solution: 'Instant document processing for faster service delivery',
      icon: <Users className="w-6 h-6" />
    },
    {
      challenge: 'Operational Efficiency',
      description: 'Reducing manual work and operational costs',
      solution: 'End-to-end automation of document-heavy processes',
      icon: <Zap className="w-6 h-6" />
    }
  ];

  const successStory = {
    bank: 'Major Indonesian Digital Bank',
    background: 'Leading digital bank processing 50K+ customer applications monthly',
    challenge: 'Manual KYC and credit application processing created bottlenecks and compliance risks',
    implementation: 'Deployed rangkum.ai across customer onboarding and loan origination workflows',
    timeline: '6 weeks implementation',
    results: [
      'Customer onboarding time: 3 days → 2 hours (92% reduction)',
      'Credit application processing: 14 days → 2 days (85% reduction)',
      'Operational cost reduction: Rp 2.4B annually',
      'Customer satisfaction increase: +45%',
      'Compliance score: 100% (OJK audit)',
      'Processing capacity: +300% without hiring'
    ],
    quote: 'rangkum.ai transformed our entire customer journey. We now process 10x more applications with the same team while maintaining perfect compliance.',
    executive: 'Chief Digital Officer'
  };

  const technicalSpecs = [
    {
      category: 'Document Types',
      items: ['KTP/ID Cards', 'NPWP', 'Bank Statements', 'Salary Slips', 'Business Licenses', 'Financial Statements']
    },
    {
      category: 'Integration',
      items: ['Core Banking Systems', 'CRM Platforms', 'Risk Management Tools', 'Compliance Systems', 'SWIFT Network']
    },
    {
      category: 'Compliance',
      items: ['OJK Regulations', 'Bank Indonesia Guidelines', 'AML/CFT Requirements', 'Data Protection Laws', 'International Standards']
    },
    {
      category: 'Security',
      items: ['End-to-end Encryption', 'ISO 27001 Certified', 'PCI DSS Compliant', 'Multi-factor Authentication', 'Audit Trails']
    }
  ];

  const handleDemoClick = () => {
    navigateTo('demo');
  };

  const handleContactClick = () => {
    navigateTo('contact');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-6 px-4 py-2">
              <Building2 className="w-4 h-4 mr-2" />
              Banking Solutions
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-8 leading-tight">
              Transform Banking Operations with AI Document Processing
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
              Automate KYC, credit processing, and compliance workflows with industry-leading AI technology. 
              Trusted by 50+ banks across Indonesia to accelerate digital transformation while ensuring regulatory compliance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-8" onClick={handleDemoClick}>
                Schedule Banking Demo
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" size="lg" className="px-8" onClick={handleContactClick}>
                Speak with Banking Expert
              </Button>
            </div>
          </div>

          {/* Banking Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {bankingStats.map((stat, index) => (
              <div 
                key={index} 
                className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-border/30 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="font-medium mb-2">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Banking Use Cases */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Key Banking Use Cases</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive AI solutions for every aspect of modern banking operations
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 overflow-hidden border-2 hover:border-primary/20">
                <div className={`w-full h-2 bg-gradient-to-r ${
                  useCase.color === 'blue' ? 'from-blue-500 to-blue-600' :
                  useCase.color === 'green' ? 'from-green-500 to-green-600' :
                  useCase.color === 'purple' ? 'from-purple-500 to-purple-600' :
                  'from-red-500 to-red-600'
                }`}></div>
                
                <CardHeader className="pb-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className={`w-20 h-20 rounded-3xl flex items-center justify-center ${
                      useCase.color === 'blue' ? 'bg-blue-100 text-blue-600' :
                      useCase.color === 'green' ? 'bg-green-100 text-green-600' :
                      useCase.color === 'purple' ? 'bg-purple-100 text-purple-600' :
                      'bg-red-100 text-red-600'
                    }`}>
                      {useCase.icon}
                    </div>
                    <div>
                      <CardTitle className="text-xl">{useCase.title}</CardTitle>
                    </div>
                  </div>
                  <CardDescription className="text-base">
                    {useCase.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                  <div>
                    <h5 className="font-semibold mb-2 text-red-600">Challenge:</h5>
                    <p className="text-sm text-muted-foreground">{useCase.challenge}</p>
                  </div>

                  <div>
                    <h5 className="font-semibold mb-2 text-blue-600">Solution:</h5>
                    <p className="text-sm text-muted-foreground">{useCase.solution}</p>
                  </div>

                  <div>
                    <h5 className="font-semibold mb-3 text-green-600">Key Benefits:</h5>
                    <ul className="space-y-2">
                      {useCase.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start text-sm">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className={`rounded-lg p-4 ${
                    useCase.color === 'blue' ? 'bg-blue-50 border border-blue-200' :
                    useCase.color === 'green' ? 'bg-green-50 border border-green-200' :
                    useCase.color === 'purple' ? 'bg-purple-50 border border-purple-200' :
                    'bg-red-50 border border-red-200'
                  }`}>
                    <h5 className="font-semibold mb-3">Typical Results:</h5>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      {Object.entries(useCase.metrics).map(([key, value], idx) => (
                        <div key={idx} className="text-center">
                          <div className="font-bold text-lg">{value}</div>
                          <div className="text-muted-foreground capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Banking Challenges */}
      <section className="py-24 bg-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Banking Industry Challenges We Solve</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Addressing the most critical challenges facing modern banking institutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {bankingChallenges.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{item.challenge}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{item.description}</p>
                    <div className="bg-green-50 p-3 rounded-lg">
                      <span className="text-green-700 font-medium text-sm">Our Solution: </span>
                      <span className="text-green-800 text-sm">{item.solution}</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Story */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Customer Success Story</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              How a leading digital bank transformed their operations with rangkum.ai
            </p>
          </div>

          <Card className="overflow-hidden max-w-6xl mx-auto">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-8 text-white">
              <div className="flex items-center space-x-4 mb-6">
                <Building2 className="w-12 h-12" />
                <div>
                  <h3 className="text-2xl font-semibold">{successStory.bank}</h3>
                  <p className="opacity-90">{successStory.background}</p>
                </div>
              </div>
              
              <div className="bg-white/10 rounded-lg p-6 mb-6">
                <Quote className="w-8 h-8 mb-4 opacity-80" />
                <p className="text-lg italic mb-4">"{successStory.quote}"</p>
                <p className="text-sm opacity-80">- {successStory.executive}</p>
              </div>
            </div>

            <CardContent className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold mb-4 text-red-600">Challenge:</h4>
                  <p className="text-muted-foreground mb-6">{successStory.challenge}</p>
                  
                  <h4 className="font-semibold mb-4 text-blue-600">Implementation:</h4>
                  <p className="text-muted-foreground mb-4">{successStory.implementation}</p>
                  
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4 mr-2" />
                    Timeline: {successStory.timeline}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-4 text-green-600">Measurable Results:</h4>
                  <ul className="space-y-3">
                    {successStory.results.map((result, idx) => (
                      <li key={idx} className="flex items-start">
                        <BarChart3 className="w-4 h-4 text-green-500 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-sm font-medium">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Technical Capabilities</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Enterprise-grade technology built for banking requirements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technicalSpecs.map((spec, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 p-6">
                <h3 className="font-semibold mb-4 text-primary">{spec.category}</h3>
                <ul className="space-y-2">
                  {spec.items.map((item, idx) => (
                    <li key={idx} className="flex items-start text-sm">
                      <CheckCircle className="w-3 h-3 text-green-500 mr-2 mt-1 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Sparkles className="w-16 h-16 mx-auto mb-6 opacity-90" />
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Transform Your Banking Operations?
          </h2>
          <p className="text-xl mb-10 opacity-90">
            Join 50+ leading banks that have already transformed their document processing workflows. 
            Schedule a personalized demo to see how rangkum.ai can accelerate your digital transformation.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              size="lg" 
              variant="secondary" 
              className="px-10"
              onClick={handleDemoClick}
            >
              Schedule Banking Demo
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="px-10 border-white text-white hover:bg-white hover:text-blue-600"
              onClick={handleContactClick}
            >
              Speak with Expert
              <Users className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}