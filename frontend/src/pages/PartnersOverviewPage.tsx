import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { useTranslation } from '../TranslationContext';
import { useRouter } from '../Router';
import { 
  Handshake, 
  Building2, 
  CheckCircle, 
  ArrowRight,
  Target,
  TrendingUp,
  Star,
  Settings,
  Zap,
  Shield,
  Globe,
  Users,
  Award,
  Briefcase,
  DollarSign,
  Network,
  Code,
  Layers,
  Database,
  Workflow,
  MessageCircle,
  Mail,
  Phone,
  Calendar,
  Sparkles,
  ChevronRight,
  Building,
  Cpu,
  Plug
} from 'lucide-react';

export function PartnersOverviewPage() {
  const { t } = useTranslation();
  const { navigateTo } = useRouter();

  const partnerStats = [
    {
      icon: <Network className="w-8 h-8" />,
      value: '150+',
      label: 'Active Partners',
      description: 'Mitra aktif di seluruh Asia-Pacific'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      value: '25+',
      label: 'Countries',
      description: 'Jangkauan global partner network'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      value: '300%',
      label: 'Partner Growth',
      description: 'Pertumbuhan partner ecosystem YoY'
    },
    {
      icon: <Award className="w-8 h-8" />,
      value: '95%',
      label: 'Partner Satisfaction',
      description: 'Tingkat kepuasan partner program'
    }
  ];

  const partnerTypes = [
    {
      type: 'Technology Partners',
      icon: <Cpu className="w-12 h-12" />,
      title: t('partners.technology.title'),
      description: t('partners.technology.desc'),
      benefits: [
        'Deep API integration and technical collaboration',
        'Joint product development opportunities',
        'Co-marketing and go-to-market support',
        'Priority technical support and resources'
      ],
      examples: [
        'Cloud Infrastructure Providers',
        'ERP & CRM System Vendors',
        'Document Management Systems',
        'RPA Platform Providers'
      ],
      commitment: 'Technical integration and joint development',
      revenue: 'Revenue sharing on joint solutions',
      color: 'blue'
    },
    {
      type: 'Solution Partners',
      icon: <Building className="w-12 h-12" />,
      title: t('partners.solution.title'),
      description: t('partners.solution.desc'),
      benefits: [
        'Access to rangkum.ai platform and training',
        'Joint customer engagement opportunities',
        'Co-branded marketing materials',
        'Dedicated partner success manager'
      ],
      examples: [
        'System Integrators',
        'Digital Transformation Consultants',
        'Industry-specific Solution Providers',
        'Enterprise Software Vendors'
      ],
      commitment: 'Joint solution development and delivery',
      revenue: '15-25% margin on joint projects',
      color: 'green'
    },
    {
      type: 'Channel Partners',
      icon: <Briefcase className="w-12 h-12" />,
      title: t('partners.channel.title'),
      description: t('partners.channel.desc'),
      benefits: [
        'Attractive margin structure (20-30%)',
        'Sales training and certification program',
        'Marketing development funds (MDF)',
        'Lead registration and protection'
      ],
      examples: [
        'Authorized Resellers',
        'Value-Added Resellers (VARs)',
        'Regional Distributors',
        'Technology Consultants'
      ],
      commitment: 'Sales target achievement and customer support',
      revenue: '20-30% reseller margin',
      color: 'purple'
    },
    {
      type: 'Integration Partners',
      icon: <Plug className="w-12 h-12" />,
      title: t('partners.integration.title'),
      description: t('partners.integration.desc'),
      benefits: [
        'Technical certification program',
        'Implementation methodology training',
        'Customer success best practices',
        'Ongoing technical support'
      ],
      examples: [
        'Implementation Specialists',
        'Custom Integration Developers',
        'Industry Solution Integrators',
        'Managed Service Providers'
      ],
      commitment: 'Customer implementation excellence',
      revenue: 'Project-based implementation fees',
      color: 'orange'
    }
  ];

  const partnerBenefits = [
    {
      category: 'Business Benefits',
      icon: <TrendingUp className="w-8 h-8" />,
      benefits: [
        'Access to high-growth AI document processing market',
        'Differentiate your offerings with cutting-edge technology',
        'Expand customer base and revenue opportunities',
        'Leverage rangkum.ai brand recognition and credibility'
      ]
    },
    {
      category: 'Technical Support',
      icon: <Code className="w-8 h-8" />,
      benefits: [
        'Comprehensive API documentation and SDKs',
        'Dedicated technical support and integration assistance',
        'Sandbox environment for development and testing',
        'Regular training sessions and knowledge sharing'
      ]
    },
    {
      category: 'Marketing Support',
      icon: <MessageCircle className="w-8 h-8" />,
      benefits: [
        'Co-branded marketing materials and case studies',
        'Joint webinars, events, and thought leadership',
        'Marketing development funds and campaign support',
        'Access to customer success stories and testimonials'
      ]
    },
    {
      category: 'Sales Enablement',
      icon: <Target className="w-8 h-8" />,
      benefits: [
        'Sales training and certification programs',
        'Lead sharing and opportunity collaboration',
        'Demo environments and proof-of-concept support',
        'Competitive positioning and battlecards'
      ]
    }
  ];

  const successStories = [
    {
      partner: 'Leading System Integrator',
      type: 'Solution Partner',
      industry: 'Financial Services',
      challenge: 'Client needed automated KYC processing for digital banking platform',
      solution: 'Integrated rangkum.ai with client\'s banking systems for seamless document processing',
      results: [
        'Deployed solution in 8 weeks across 50+ bank branches',
        '85% reduction in customer onboarding time',
        'Generated $2.5M in project revenue for partner',
        'Established long-term managed services contract'
      ],
      quote: 'rangkum.ai partnership enabled us to deliver cutting-edge AI capabilities to our banking clients.',
      revenue: '$2.5M project value',
      timeline: '8 weeks implementation'
    },
    {
      partner: 'Regional Technology Distributor',
      type: 'Channel Partner',
      industry: 'Multi-Industry',
      challenge: 'Needed innovative AI solution to differentiate in competitive market',
      solution: 'Became exclusive rangkum.ai distributor for Southeast Asia region',
      results: [
        'Built network of 25+ certified resellers',
        'Achieved 250% of annual sales target',
        'Expanded into 8 new market segments',
        'Won "Partner of the Year" award'
      ],
      quote: 'rangkum.ai has been our fastest-growing product line with exceptional customer demand.',
      revenue: '$8M annual recurring revenue',
      timeline: '18 months to market leadership'
    },
    {
      partner: 'Enterprise Software Vendor',
      type: 'Technology Partner',
      industry: 'Healthcare',
      challenge: 'Healthcare clients needed automated patient record processing',
      solution: 'Deep integration between partner\'s EMR system and rangkum.ai platform',
      results: [
        'Joint solution deployed at 15+ hospital networks',
        '70% improvement in patient data accuracy',
        'Created new revenue stream worth $1.8M annually',
        'Strengthened competitive position in healthcare'
      ],
      quote: 'The technical integration was seamless, and joint customers see immediate value.',
      revenue: '$1.8M new revenue stream',
      timeline: '12 weeks integration'
    }
  ];

  const partnershipProcess = [
    {
      step: 1,
      title: 'Initial Discussion',
      duration: '1 week',
      description: 'Explore partnership opportunities and mutual fit',
      activities: [
        'Partnership inquiry and qualification',
        'Business model alignment discussion',
        'Market opportunity assessment',
        'Partnership type identification'
      ]
    },
    {
      step: 2,
      title: 'Partnership Proposal',
      duration: '2-3 weeks',
      description: 'Develop formal partnership agreement and terms',
      activities: [
        'Partnership agreement drafting',
        'Commercial terms negotiation',
        'Technical integration planning',
        'Legal review and approval'
      ]
    },
    {
      step: 3,
      title: 'Onboarding & Training',
      duration: '3-4 weeks',
      description: 'Complete partner onboarding and capability building',
      activities: [
        'Partner portal access setup',
        'Technical training and certification',
        'Sales enablement and marketing materials',
        'First joint opportunity identification'
      ]
    },
    {
      step: 4,
      title: 'Go-to-Market',
      duration: 'Ongoing',
      description: 'Launch partnership and drive mutual success',
      activities: [
        'Joint marketing campaign launch',
        'Customer engagement and opportunity pursuit',
        'Performance monitoring and optimization',
        'Quarterly business reviews'
      ]
    }
  ];

  const handleApplyPartnership = () => {
    navigateTo('partnership-application');
  };

  const handleContactPartner = () => {
    navigateTo('partner-contact');
  };

  const handleDemoClick = () => {
    navigateTo('demo');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 via-white to-blue-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-6 px-4 py-2">
              <Handshake className="w-4 h-4 mr-2" />
              Partner Ecosystem
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-8 leading-tight">
              {t('partners.title')}
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
              {t('partners.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-8" onClick={handleApplyPartnership}>
                {t('partners.become.partner')}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" size="lg" className="px-8" onClick={handleContactPartner}>
                Contact Partner Team
              </Button>
            </div>
          </div>

          {/* Partner Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {partnerStats.map((stat, index) => (
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

      {/* Partnership Types */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">{t('partners.types.title')}</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Multiple partnership models to match your business objectives and capabilities
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {partnerTypes.map((type, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 overflow-hidden border-2 hover:border-primary/20">
                <div className={`w-full h-2 bg-gradient-to-r ${
                  type.color === 'blue' ? 'from-blue-500 to-blue-600' :
                  type.color === 'green' ? 'from-green-500 to-green-600' :
                  type.color === 'purple' ? 'from-purple-500 to-purple-600' :
                  'from-orange-500 to-orange-600'
                }`}></div>
                
                <CardHeader className="pb-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className={`w-20 h-20 rounded-3xl flex items-center justify-center ${
                      type.color === 'blue' ? 'bg-blue-100 text-blue-600' :
                      type.color === 'green' ? 'bg-green-100 text-green-600' :
                      type.color === 'purple' ? 'bg-purple-100 text-purple-600' :
                      'bg-orange-100 text-orange-600'
                    }`}>
                      {type.icon}
                    </div>
                    <div>
                      <CardTitle className="text-xl">{type.title}</CardTitle>
                      <Badge variant="outline" className="mt-1">{type.type}</Badge>
                    </div>
                  </div>
                  <CardDescription className="text-base">
                    {type.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Benefits */}
                  <div>
                    <h5 className="font-semibold mb-3">{t('partners.benefits.title')}:</h5>
                    <ul className="space-y-2">
                      {type.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start text-sm">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Examples */}
                  <div>
                    <h5 className="font-semibold mb-3">Examples:</h5>
                    <div className="flex flex-wrap gap-2">
                      {type.examples.map((example, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {example}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Commercial Terms */}
                  <div className={`rounded-lg p-4 ${
                    type.color === 'blue' ? 'bg-blue-50 border border-blue-200' :
                    type.color === 'green' ? 'bg-green-50 border border-green-200' :
                    type.color === 'purple' ? 'bg-purple-50 border border-purple-200' :
                    'bg-orange-50 border border-orange-200'
                  }`}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="font-medium">Commitment:</span>
                        <p className="text-muted-foreground">{type.commitment}</p>
                      </div>
                      <div>
                        <span className="font-medium">Revenue Model:</span>
                        <p className="text-muted-foreground">{type.revenue}</p>
                      </div>
                    </div>
                  </div>

                  <Button className="w-full">
                    Learn More About {type.type}
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Benefits */}
      <section className="py-24 bg-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">{t('partners.benefits.title')}</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive support and resources to ensure your success as a rangkum.ai partner
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {partnerBenefits.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{category.category}</h3>
                </div>
                <ul className="space-y-3">
                  {category.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Partner Success Stories</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real examples of how our partners are building successful businesses with rangkum.ai
            </p>
          </div>

          <div className="space-y-12">
            {successStories.map((story, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <div className="p-8 lg:p-12">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 space-y-6">
                      <div>
                        <div className="flex items-center space-x-4 mb-4">
                          <Badge variant="outline">{story.type}</Badge>
                          <Badge variant="secondary">{story.industry}</Badge>
                        </div>
                        <h3 className="text-2xl font-semibold mb-2">{story.partner}</h3>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2 text-red-600">Challenge:</h4>
                        <p className="text-muted-foreground">{story.challenge}</p>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2 text-blue-600">Solution:</h4>
                        <p className="text-muted-foreground">{story.solution}</p>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3 text-green-600">Results:</h4>
                        <ul className="space-y-2">
                          {story.results.map((result, idx) => (
                            <li key={idx} className="flex items-start text-sm">
                              <CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                              {result}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-accent/30 rounded-lg p-4">
                        <MessageCircle className="w-5 h-5 text-primary mb-2" />
                        <p className="text-sm italic mb-2">"{story.quote}"</p>
                        <p className="text-xs text-muted-foreground">- {story.partner} Leadership</p>
                      </div>
                    </div>

                    <div className="lg:col-span-1">
                      <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8 h-full">
                        <h4 className="font-semibold mb-6 text-green-700">Impact Summary</h4>
                        
                        <div className="space-y-6">
                          <div className="text-center">
                            <DollarSign className="w-8 h-8 text-green-600 mx-auto mb-2" />
                            <div className="text-2xl font-bold text-green-600 mb-1">{story.revenue}</div>
                            <div className="text-sm text-green-700">Revenue Impact</div>
                          </div>
                          
                          <div className="text-center">
                            <Calendar className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                            <div className="text-2xl font-bold text-blue-600 mb-1">{story.timeline}</div>
                            <div className="text-sm text-green-700">Implementation</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Process */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Partnership Process</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our structured approach ensures successful partnership development from initial discussion to go-to-market
            </p>
          </div>

          <div className="space-y-8">
            {partnershipProcess.map((step, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow p-8">
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-primary-foreground font-bold text-xl flex-shrink-0">
                    {step.step}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-semibold">{step.title}</h3>
                      <Badge variant="outline">{step.duration}</Badge>
                    </div>
                    <p className="text-muted-foreground mb-6">{step.description}</p>
                    
                    <div>
                      <h4 className="font-semibold mb-3">Key Activities:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {step.activities.map((activity, idx) => (
                          <div key={idx} className="flex items-start text-sm">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                            {activity}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
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
            {t('partners.cta.title')}
          </h2>
          <p className="text-xl mb-10 opacity-90">
            {t('partners.cta.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              size="lg" 
              variant="secondary" 
              className="px-10"
              onClick={handleApplyPartnership}
            >
              {t('partners.apply.title')}
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="px-10 border-white text-white hover:bg-white hover:text-purple-600"
              onClick={handleContactPartner}
            >
              Contact Partner Team
              <Mail className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}