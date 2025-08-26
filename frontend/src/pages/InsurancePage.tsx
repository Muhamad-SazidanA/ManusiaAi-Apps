import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { useTranslation } from '../TranslationContext';
import { useRouter } from '../Router';
import { 
  CreditCard, 
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
  Heart,
  Car,
  Home,
  Briefcase,
  UserCheck,
  Database,
  Lock,
  Smartphone,
  Globe,
  Sparkles,
  Star,
  Quote,
  Calendar,
  ChevronRight,
  Search,
  Calculator,
  FileCheck
} from 'lucide-react';

export function InsurancePage() {
  const { t } = useTranslation();
  const { navigateTo } = useRouter();

  const insuranceStats = [
    {
      icon: <CreditCard className="w-8 h-8" />,
      value: '30+',
      label: 'Insurance Companies',
      description: 'Leading insurers across Indonesia'
    },
    {
      icon: <FileText className="w-8 h-8" />,
      value: '5M+',
      label: 'Claims/Month',
      description: 'Processed with AI automation'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      value: '78%',
      label: 'Faster Claims',
      description: 'Average processing acceleration'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      value: '99.7%',
      label: 'Accuracy Rate',
      description: 'In claims assessment'
    }
  ];

  const useCases = [
    {
      title: 'Claims Processing Automation',
      icon: <FileCheck className="w-12 h-12" />,
      description: 'Automate end-to-end claims workflows from submission to settlement',
      challenge: 'Manual claims processing taking 2-4 weeks with high error rates and customer dissatisfaction',
      solution: 'AI-powered document extraction, damage assessment, and automated workflow routing',
      benefits: [
        'Reduce claims processing time from 3 weeks to 3 days',
        'Automated damage assessment from photos/videos',
        'Real-time fraud detection and prevention',
        'Seamless integration with existing systems',
        'Enhanced customer satisfaction and NPS'
      ],
      metrics: {
        timeReduction: '78%',
        costSaving: 'Rp 1.8B/year',
        accuracy: '99.7%',
        satisfaction: '+40%'
      },
      color: 'blue'
    },
    {
      title: 'Policy Underwriting Intelligence',
      icon: <Calculator className="w-12 h-12" />,
      description: 'Intelligent risk assessment and automated policy underwriting',
      challenge: 'Complex underwriting requiring manual review of multiple documents and risk factors',
      solution: 'AI-driven risk analysis, automated premium calculation, and intelligent policy recommendations',
      benefits: [
        'Accelerate underwriting decisions from 7 days to 24 hours',
        'Automated risk scoring and premium calculation',
        'Comprehensive applicant background verification',
        'Dynamic pricing based on risk profiles',
        'Improved underwriting accuracy and profitability'
      ],
      metrics: {
        timeReduction: '85%',
        accuracy: '+35%',
        profitability: '+25%',
        capacity: '+200%'
      },
      color: 'green'
    },
    {
      title: 'Medical Claims Review',
      icon: <Heart className="w-12 h-12" />,
      description: 'Automated medical claims processing and healthcare document analysis',
      challenge: 'Complex medical claims requiring specialized knowledge and lengthy review processes',
      solution: 'Medical AI that understands healthcare terminology and automates clinical document review',
      benefits: [
        'Process medical claims in real-time',
        'Automated medical coding and billing',
        'Clinical decision support integration',
        'Regulatory compliance (BPJS, Ministry of Health)',
        'Reduced medical review costs by 60%'
      ],
      metrics: {
        timeReduction: '70%',
        costReduction: '60%',
        accuracy: '99.5%',
        compliance: '100%'
      },
      color: 'purple'
    },
    {
      title: 'Fraud Detection & Prevention',
      icon: <Search className="w-12 h-12" />,
      description: 'Advanced AI-powered fraud detection across all insurance lines',
      challenge: 'Increasing insurance fraud leading to significant financial losses and investigation costs',
      solution: 'Machine learning models that detect patterns and anomalies indicating potential fraud',
      benefits: [
        'Real-time fraud scoring and alerts',
        'Automated investigation workflow',
        'Pattern recognition across claims history',
        'Integration with external fraud databases',
        'Reduce fraud losses by 65%'
      ],
      metrics: {
        fraudDetection: '+65%',
        falsePositives: '-50%',
        investigations: '+90%',
        savings: 'Rp 2.2B/year'
      },
      color: 'red'
    }
  ];

  const insuranceLines = [
    {
      line: 'Life Insurance',
      icon: <Heart className="w-8 h-8" />,
      useCases: ['Policy Applications', 'Medical Underwriting', 'Claims Processing', 'Beneficiary Verification'],
      benefits: ['Faster policy issuance', 'Improved risk assessment', 'Streamlined claims']
    },
    {
      line: 'Motor Insurance',
      icon: <Car className="w-8 h-8" />,
      useCases: ['Instant Policy Quotes', 'Damage Assessment', 'Claims Automation', 'Vehicle Verification'],
      benefits: ['Real-time quotes', 'Photo-based damage assessment', 'Faster settlements']
    },
    {
      line: 'Property Insurance',
      icon: <Home className="w-8 h-8" />,
      useCases: ['Property Valuation', 'Risk Assessment', 'Claims Investigation', 'Repair Estimates'],
      benefits: ['Accurate valuations', 'Risk-based pricing', 'Automated settlements']
    },
    {
      line: 'Health Insurance',
      icon: <UserCheck className="w-8 h-8" />,
      useCases: ['Medical Claims', 'Provider Networks', 'Pre-authorization', 'Case Management'],
      benefits: ['Faster reimbursements', 'Cost control', 'Better outcomes']
    }
  ];

  const successStory = {
    company: 'Major Indonesian Insurance Company',
    background: 'Leading insurer processing 100K+ claims annually across multiple product lines',
    challenge: 'Manual claims processing creating customer dissatisfaction and operational inefficiencies',
    implementation: 'Deployed rangkum.ai across motor, property, and health insurance claims workflows',
    timeline: '8 weeks phased implementation',
    results: [
      'Claims processing time: 3 weeks → 3 days (78% reduction)',
      'Customer satisfaction: +40% improvement in NPS scores',
      'Operational cost reduction: Rp 1.8B annually',
      'Fraud detection rate: +65% improvement',
      'Processing capacity: +200% without additional staff',
      'First-call resolution: +55% improvement'
    ],
    quote: 'rangkum.ai revolutionized our claims operation. We now provide customers with lightning-fast service while maintaining the highest levels of accuracy and fraud protection.',
    executive: 'Chief Claims Officer'
  };

  const regulatoryCompliance = [
    {
      regulation: 'OJK Insurance Regulations',
      description: 'Full compliance with Indonesian financial services authority requirements',
      coverage: ['Solvency requirements', 'Consumer protection', 'Risk management', 'Reporting standards']
    },
    {
      regulation: 'Data Protection Laws',
      description: 'Comprehensive data privacy and security compliance',
      coverage: ['Personal data protection', 'Consent management', 'Data retention', 'Cross-border transfers']
    },
    {
      regulation: 'Anti-Money Laundering',
      description: 'AML/CFT compliance for insurance transactions',
      coverage: ['Customer due diligence', 'Transaction monitoring', 'Suspicious activity reporting', 'Record keeping']
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
      <section className="bg-gradient-to-br from-purple-50 via-white to-blue-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-6 px-4 py-2">
              <CreditCard className="w-4 h-4 mr-2" />
              Insurance Solutions
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-8 leading-tight">
              Revolutionize Insurance Operations with AI-Powered Automation
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
              Transform claims processing, underwriting, and fraud detection with cutting-edge AI technology. 
              Trusted by 30+ insurance companies to deliver faster, more accurate, and cost-effective operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-8" onClick={handleDemoClick}>
                Schedule Insurance Demo
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" size="lg" className="px-8" onClick={handleContactClick}>
                Speak with Insurance Expert
              </Button>
            </div>
          </div>

          {/* Insurance Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {insuranceStats.map((stat, index) => (
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

      {/* Insurance Use Cases */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Core Insurance Use Cases</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive AI solutions for every aspect of insurance operations
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

      {/* Insurance Lines */}
      <section className="py-24 bg-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Solutions by Insurance Line</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Tailored AI solutions for every type of insurance product
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {insuranceLines.map((line, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mx-auto mb-4">
                  {line.icon}
                </div>
                <h3 className="text-lg font-semibold mb-4">{line.line}</h3>
                
                <div className="mb-4">
                  <h4 className="font-medium mb-2 text-sm">Use Cases:</h4>
                  <div className="space-y-1">
                    {line.useCases.map((useCase, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs mr-1 mb-1">
                        {useCase}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-2 text-sm">Key Benefits:</h4>
                  <ul className="space-y-1">
                    {line.benefits.map((benefit, idx) => (
                      <li key={idx} className="text-xs text-muted-foreground">
                        • {benefit}
                      </li>
                    ))}
                  </ul>
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
              How a leading insurer transformed their operations with rangkum.ai
            </p>
          </div>

          <Card className="overflow-hidden max-w-6xl mx-auto">
            <div className="bg-gradient-to-r from-purple-500 to-blue-600 p-8 text-white">
              <div className="flex items-center space-x-4 mb-6">
                <CreditCard className="w-12 h-12" />
                <div>
                  <h3 className="text-2xl font-semibold">{successStory.company}</h3>
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

      {/* Regulatory Compliance */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Regulatory Compliance</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Built-in compliance with Indonesian and international insurance regulations
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {regulatoryCompliance.map((compliance, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Shield className="w-8 h-8 text-primary" />
                  <h3 className="font-semibold text-lg">{compliance.regulation}</h3>
                </div>
                <p className="text-muted-foreground mb-4">{compliance.description}</p>
                
                <h4 className="font-medium mb-3">Coverage Areas:</h4>
                <ul className="space-y-2">
                  {compliance.coverage.map((area, idx) => (
                    <li key={idx} className="flex items-start text-sm">
                      <CheckCircle className="w-3 h-3 text-green-500 mr-2 mt-1 flex-shrink-0" />
                      {area}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-purple-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Sparkles className="w-16 h-16 mx-auto mb-6 opacity-90" />
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Transform Your Insurance Operations Today
          </h2>
          <p className="text-xl mb-10 opacity-90">
            Join 30+ leading insurance companies that have revolutionized their operations with rangkum.ai. 
            See how AI can accelerate your claims, underwriting, and fraud detection processes.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              size="lg" 
              variant="secondary" 
              className="px-10"
              onClick={handleDemoClick}
            >
              Schedule Insurance Demo
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="px-10 border-white text-white hover:bg-white hover:text-purple-600"
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