import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { useTranslation } from '../TranslationContext';
import { useRouter } from '../Router';
import { 
  Truck, 
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
  Package,
  Plane,
  Ship,
  MapPin,
  Globe,
  Sparkles,
  Star,
  Quote,
  Calendar,
  ChevronRight,
  Box,
  Route,
  Container
} from 'lucide-react';

export function LogisticsPage() {
  const { t } = useTranslation();
  const { navigateTo } = useRouter();

  const logisticsStats = [
    {
      icon: <Truck className="w-8 h-8" />,
      value: '25+',
      label: 'Logistics Partners',
      description: 'Leading logistics companies'
    },
    {
      icon: <Package className="w-8 h-8" />,
      value: '1M+',
      label: 'Shipments/Month',
      description: 'Processed with AI automation'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      value: '65%',
      label: 'Processing Speed',
      description: 'Faster document handling'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      value: '100%',
      label: 'Customs Compliance',
      description: 'Automated compliance checks'
    }
  ];

  const useCases = [
    {
      title: 'Shipping Documentation Automation',
      icon: <Ship className="w-12 h-12" />,
      description: 'Automate bill of lading, commercial invoices, and shipping manifests',
      challenge: 'Manual processing of shipping documents causing delays and errors in international trade',
      solution: 'AI-powered extraction and validation of shipping documents with real-time tracking integration',
      benefits: [
        'Process shipping documents in real-time',
        'Automated customs documentation',
        'Real-time shipment tracking updates',
        'Integration with carrier systems',
        'Reduced shipping delays by 80%'
      ],
      metrics: {
        timeReduction: '80%',
        accuracy: '99.5%',
        compliance: '100%',
        costSaving: 'Rp 38M/year'
      },
      color: 'blue'
    },
    {
      title: 'Customs Clearance Automation',
      icon: <Globe className="w-12 h-12" />,
      description: 'Streamline customs documentation and clearance processes',
      challenge: 'Complex customs requirements and manual document preparation causing border delays',
      solution: 'Intelligent customs document generation with automated compliance verification',
      benefits: [
        'Automated customs forms generation',
        'Real-time duty and tax calculations',
        'Compliance with international trade regulations',
        'Integration with customs authorities',
        'Faster border clearance times'
      ],
      metrics: {
        clearanceTime: '75%',
        compliance: '100%',
        errors: '-90%',
        efficiency: '+200%'
      },
      color: 'green'
    },
    {
      title: 'Vendor Management & Onboarding',
      icon: <Users className="w-12 h-12" />,
      description: 'Digitize vendor registration and compliance documentation',
      challenge: 'Manual vendor onboarding taking weeks with extensive document verification',
      solution: 'Automated vendor document processing and compliance verification workflows',
      benefits: [
        'Accelerate vendor onboarding from weeks to days',
        'Automated compliance and certification tracking',
        'Digital vendor portal with document management',
        'Risk assessment and scoring automation',
        'Continuous compliance monitoring'
      ],
      metrics: {
        onboardingTime: '85%',
        compliance: '100%',
        riskReduction: '70%',
        efficiency: '+150%'
      },
      color: 'purple'
    },
    {
      title: 'Supply Chain Visibility',
      icon: <Route className="w-12 h-12" />,
      description: 'End-to-end supply chain documentation and tracking',
      challenge: 'Limited visibility across complex supply chains with multiple stakeholders',
      solution: 'Unified document processing platform providing real-time supply chain insights',
      benefits: [
        'Real-time supply chain visibility',
        'Automated milestone tracking',
        'Exception management and alerts',
        'Supplier performance analytics',
        'Inventory optimization insights'
      ],
      metrics: {
        visibility: '100%',
        efficiency: '+65%',
        costs: '-45%',
        satisfaction: '+50%'
      },
      color: 'red'
    }
  ];

  const successStory = {
    company: 'Major Indonesian Logistics Company',
    background: 'Leading logistics provider handling 500K+ shipments monthly across 15 countries',
    challenge: 'Manual documentation processes causing shipping delays and customs issues',
    implementation: 'Comprehensive automation of shipping and customs documentation workflows',
    timeline: '10 weeks regional implementation',
    results: [
      'Document processing time: 2 days → 4 hours (80% reduction)',
      'Customs clearance: 2 days → 6 hours average',
      'Shipping delays: -75% reduction in documentation-related delays',
      'Operational efficiency: +65% improvement',
      'Customer satisfaction: +50% improvement',
      'Cross-border compliance: 100% accuracy'
    ],
    quote: 'rangkum.ai transformed our entire documentation workflow. We now handle 3x more shipments with the same team while maintaining perfect compliance across all markets.',
    executive: 'Chief Operations Officer'
  };

  const handleDemoClick = () => {
    navigateTo('demo');
  };

  const handleContactClick = () => {
    navigateTo('contact');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 via-white to-blue-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-6 px-4 py-2">
              <Truck className="w-4 h-4 mr-2" />
              Logistics Solutions
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-8 leading-tight">
              Accelerate Global Trade with AI-Powered Document Processing
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
              Streamline shipping documentation, customs clearance, and supply chain workflows with intelligent automation. 
              Trusted by 25+ logistics companies to deliver faster, error-free international trade operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-8" onClick={handleDemoClick}>
                Schedule Logistics Demo
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" size="lg" className="px-8" onClick={handleContactClick}>
                Speak with Logistics Expert
              </Button>
            </div>
          </div>

          {/* Logistics Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {logisticsStats.map((stat, index) => (
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

      {/* Use Cases */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Logistics Use Cases</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive AI solutions for modern logistics and supply chain operations
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

      {/* Success Story */}
      <section className="py-24 bg-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Customer Success Story</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              How a major logistics company revolutionized their operations with AI
            </p>
          </div>

          <Card className="overflow-hidden max-w-6xl mx-auto">
            <div className="bg-gradient-to-r from-orange-500 to-blue-600 p-8 text-white">
              <div className="flex items-center space-x-4 mb-6">
                <Truck className="w-12 h-12" />
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

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-orange-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Sparkles className="w-16 h-16 mx-auto mb-6 opacity-90" />
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Accelerate Your Global Supply Chain
          </h2>
          <p className="text-xl mb-10 opacity-90">
            Join 25+ logistics leaders optimizing their operations with intelligent document processing. 
            See how AI can streamline your shipping, customs, and supply chain workflows.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              size="lg" 
              variant="secondary" 
              className="px-10"
              onClick={handleDemoClick}
            >
              Schedule Logistics Demo
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="px-10 border-white text-white hover:bg-white hover:text-orange-600"
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