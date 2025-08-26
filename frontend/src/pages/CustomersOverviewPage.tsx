import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { useTranslation } from '../TranslationContext';
import { useRouter } from '../Router';
import { 
  Users, 
  Building2, 
  CheckCircle, 
  ArrowRight,
  Target,
  TrendingUp,
  Star,
  Quote,
  Award,
  Globe,
  Zap,
  Shield,
  BarChart3,
  Clock,
  Heart,
  CreditCard,
  GraduationCap,
  Factory,
  Truck,
  Briefcase,
  DollarSign,
  Eye,
  MessageCircle,
  ChevronRight,
  Sparkles
} from 'lucide-react';

export function CustomersOverviewPage() {
  const { t } = useTranslation();
  const { navigateTo } = useRouter();

  const customerStats = [
    {
      icon: <Users className="w-8 h-8" />,
      value: '500+',
      label: 'Active Customers',
      description: 'Perusahaan aktif menggunakan platform kami'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      value: '15+',
      label: 'Countries Served',
      description: 'Negara di Asia-Pacific yang dilayani'
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      value: '50M+',
      label: 'Documents Processed',
      description: 'Dokumen telah diproses per bulan'
    },
    {
      icon: <Award className="w-8 h-8" />,
      value: '98.5%',
      label: 'Customer Satisfaction',
      description: 'Tingkat kepuasan customer'
    }
  ];

  const industryLeaders = [
    {
      industry: 'Banking & Financial Services',
      icon: <Building2 className="w-8 h-8" />,
      companies: ['Bank Mandiri', 'BCA', 'BNI', 'CIMB Niaga'],
      description: 'Leading financial institutions trust our platform for KYC and loan processing',
      impact: {
        timeReduction: '85%',
        costSavings: 'Rp 61M/year',
        documentsProcessed: '2.5M+/month'
      },
      useCases: [
        'Customer Onboarding & KYC',
        'Loan Application Processing',
        'Credit Risk Assessment',
        'Regulatory Compliance'
      ],
      testimonial: {
        quote: 'rangkum.ai has transformed our customer onboarding process, reducing processing time from 3 days to 2 hours.',
        author: 'Head of Digital Transformation',
        company: 'Major Indonesian Bank'
      }
    },
    {
      industry: 'Insurance',
      icon: <CreditCard className="w-8 h-8" />,
      companies: ['Allianz Indonesia', 'AXA Mandiri', 'Prudential', 'Great Eastern'],
      description: 'Insurance leaders automate claims processing and underwriting workflows',
      impact: {
        timeReduction: '78%',
        costSavings: 'Rp 54M/year',
        documentsProcessed: '1.8M+/month'
      },
      useCases: [
        'Claims Document Processing',
        'Policy Application Automation',
        'Medical Records Analysis',
        'Fraud Detection Support'
      ],
      testimonial: {
        quote: 'Our claims processing accuracy improved to 99.8% while reducing manual work by 80%.',
        author: 'Claims Operations Director',
        company: 'Leading Insurance Company'
      }
    },
    {
      industry: 'Healthcare',
      icon: <Heart className="w-8 h-8" />,
      companies: ['Siloam Hospitals', 'Mayapada Healthcare', 'Eka Hospital', 'RSUP Fatmawati'],
      description: 'Healthcare institutions digitize patient records and streamline operations',
      impact: {
        timeReduction: '70%',
        costSavings: 'Rp 45M/year',
        documentsProcessed: '1.2M+/month'
      },
      useCases: [
        'Patient Record Digitization',
        'Lab Results Processing',
        'Insurance Claims Automation',
        'Prescription Management'
      ],
      testimonial: {
        quote: 'Patient data accuracy and accessibility has dramatically improved our care delivery.',
        author: 'Chief Medical Officer',
        company: 'Major Hospital Network'
      }
    },
    {
      industry: 'Manufacturing',
      icon: <Factory className="w-8 h-8" />,
      companies: ['Astra International', 'Indofood', 'Unilever Indonesia', 'Telkom Indonesia'],
      description: 'Manufacturing giants optimize supply chain and quality control documentation',
      impact: {
        timeReduction: '60%',
        costSavings: 'Rp 41M/year',
        documentsProcessed: '900K+/month'
      },
      useCases: [
        'Quality Control Reports',
        'Supplier Documentation',
        'Compliance Certificates',
        'Invoice Processing'
      ],
      testimonial: {
        quote: 'Supply chain visibility and compliance tracking has never been easier.',
        author: 'Supply Chain Director',
        company: 'Multinational Manufacturer'
      }
    },
    {
      industry: 'Logistics & Transportation',
      icon: <Truck className="w-8 h-8" />,
      companies: ['J&T Express', 'Tiki', 'SiCepat', 'Lion Parcel'],
      description: 'Logistics leaders automate shipping and customs documentation',
      impact: {
        timeReduction: '65%',
        costSavings: 'Rp 38M/year',
        documentsProcessed: '750K+/month'
      },
      useCases: [
        'Shipping Document Processing',
        'Customs Forms Automation',
        'Manifest Generation',
        'Delivery Confirmations'
      ],
      testimonial: {
        quote: 'Cross-border shipping documentation is now completely automated and error-free.',
        author: 'Operations Manager',
        company: 'Major Logistics Company'
      }
    },
    {
      industry: 'Education',
      icon: <GraduationCap className="w-8 h-8" />,
      companies: ['Universitas Indonesia', 'ITB', 'Binus University', 'Telkom University'],
      description: 'Educational institutions modernize student administration and records',
      impact: {
        timeReduction: '55%',
        costSavings: 'Rp 12M/year',
        documentsProcessed: '400K+/month'
      },
      useCases: [
        'Student Record Management',
        'Transcript Processing',
        'Application Automation',
        'Certificate Management'
      ],
      testimonial: {
        quote: 'Student services efficiency has improved dramatically with automated document processing.',
        author: 'VP of Student Affairs',
        company: 'Leading University'
      }
    }
  ];

  const successMetrics = [
    {
      metric: 'Average Implementation Time',
      value: '4-6 weeks',
      icon: <Clock className="w-6 h-6" />,
      description: 'From pilot to full production deployment'
    },
    {
      metric: 'Average ROI Achievement',
      value: '4.2x',
      icon: <TrendingUp className="w-6 h-6" />,
      description: 'Return on investment within 6 months'
    },
    {
      metric: 'Customer Retention Rate',
      value: '96%',
      icon: <Star className="w-6 h-6" />,
      description: 'Customers renew and expand usage'
    },
    {
      metric: 'Net Promoter Score',
      value: '72',
      icon: <MessageCircle className="w-6 h-6" />,
      description: 'Industry-leading customer advocacy'
    }
  ];

  const transformationStories = [
    {
      title: 'Digital Bank Transformation',
      company: 'Leading Digital Bank',
      industry: 'Financial Services',
      challenge: 'Manual KYC process taking 3-5 days per customer with 15% error rate',
      solution: 'Automated document verification and data extraction for customer onboarding',
      results: [
        '92% reduction in processing time (3 days → 2 hours)',
        '98% reduction in manual errors',
        'Rp 2.4B annual cost savings',
        '45% increase in customer satisfaction'
      ],
      quote: 'rangkum.ai enabled us to scale customer acquisition 10x while maintaining compliance.',
      author: 'Chief Technology Officer'
    },
    {
      title: 'Insurance Claims Revolution',
      company: 'Major Insurance Provider',
      industry: 'Insurance',
      challenge: 'Complex claims processing with 30-day average settlement time',
      solution: 'End-to-end claims document automation with fraud detection',
      results: [
        '75% faster claims settlement',
        '99.8% document accuracy',
        'Rp 1.8B operational savings',
        '40% improvement in customer NPS'
      ],
      quote: 'Our claims operation is now a competitive advantage thanks to automation.',
      author: 'Head of Claims Operations'
    },
    {
      title: 'Healthcare Digitization',
      company: 'Hospital Network',
      industry: 'Healthcare',
      challenge: 'Paper-based patient records causing delays and errors',
      solution: 'Complete patient record digitization and automated processing',
      results: [
        '80% reduction in record retrieval time',
        '95% improvement in data accuracy',
        'Rp 890M annual savings',
        '60% faster patient admissions'
      ],
      quote: 'Patient care quality improved significantly with instant access to accurate records.',
      author: 'Chief Medical Information Officer'
    }
  ];

  const handleIndustryClick = (industry: string) => {
    navigateTo(industry.toLowerCase().replace(/\s+/g, '-').replace('&', ''));
  };

  const handleDemoClick = () => {
    navigateTo('demo');
  };

  const handleCaseStudiesClick = () => {
    navigateTo('case-studies');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-6 px-4 py-2">
              <Users className="w-4 h-4 mr-2" />
              {t('customers.title')}
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-8 leading-tight">
              {t('customers.title')}
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
              {t('customers.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-8" onClick={() => navigateTo('get-started')}>
                {t('hero.startfreetrial')}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" size="lg" className="px-8" onClick={handleCaseStudiesClick}>
                {t('customers.case.studies')}
              </Button>
            </div>
          </div>

          {/* Customer Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {customerStats.map((stat, index) => (
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

      {/* Industry Leaders */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">{t('customers.industry.leaders')}</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Leading companies across industries trust rangkum.ai to transform their document workflows
            </p>
          </div>

          <div className="space-y-12">
            {industryLeaders.map((leader, index) => (
              <Card 
                key={index} 
                className="hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer group border-2 hover:border-primary/20"
                onClick={() => handleIndustryClick(leader.industry)}
              >
                <div className="p-8 lg:p-12">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Industry Overview */}
                    <div className="lg:col-span-2">
                      <div className="flex items-center space-x-4 mb-6">
                        <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                          {leader.icon}
                        </div>
                        <div>
                          <h3 className="text-2xl font-semibold group-hover:text-primary transition-colors">
                            {leader.industry}
                          </h3>
                          <p className="text-muted-foreground">{leader.description}</p>
                        </div>
                      </div>

                      {/* Companies */}
                      <div className="mb-6">
                        <h4 className="font-semibold mb-3">Leading Companies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {leader.companies.map((company, idx) => (
                            <Badge key={idx} variant="secondary" className="px-3 py-1">
                              {company}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Use Cases */}
                      <div className="mb-6">
                        <h4 className="font-semibold mb-3">Common Use Cases:</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {leader.useCases.map((useCase, idx) => (
                            <div key={idx} className="flex items-center text-sm">
                              <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                              {useCase}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Testimonial */}
                      <div className="bg-gradient-to-r from-accent/30 to-accent/50 rounded-2xl p-6">
                        <Quote className="w-8 h-8 text-primary mb-4" />
                        <p className="text-foreground mb-4 italic">"{leader.testimonial.quote}"</p>
                        <div className="text-sm">
                          <span className="font-medium">{leader.testimonial.author}</span>
                          <span className="text-muted-foreground"> - {leader.testimonial.company}</span>
                        </div>
                      </div>
                    </div>

                    {/* Impact Metrics */}
                    <div className="lg:col-span-1">
                      <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8 h-full">
                        <h4 className="font-semibold mb-6 text-green-700">{t('customers.proven.results')}</h4>
                        
                        <div className="space-y-6">
                          <div className="text-center">
                            <div className="text-3xl font-bold text-green-600 mb-2">{leader.impact.timeReduction}</div>
                            <div className="text-sm text-green-700">Time Reduction</div>
                          </div>
                          
                          <div className="text-center">
                            <div className="text-3xl font-bold text-blue-600 mb-2">{leader.impact.costSavings}</div>
                            <div className="text-sm text-green-700">Annual Savings</div>
                          </div>
                          
                          <div className="text-center">
                            <div className="text-3xl font-bold text-purple-600 mb-2">{leader.impact.documentsProcessed}</div>
                            <div className="text-sm text-green-700">Documents Processed</div>
                          </div>
                        </div>

                        <div className="mt-8 pt-6 border-t border-green-200">
                          <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                            {t('common.learnmore')}
                            <ChevronRight className="w-4 h-4 ml-2" />
                          </Button>
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

      {/* Success Metrics */}
      <section className="py-24 bg-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Customer Success Metrics</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Consistent results across all implementations demonstrate our platform's reliability
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {successMetrics.map((metric, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300 p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mx-auto mb-6">
                  {metric.icon}
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{metric.value}</div>
                <div className="font-semibold mb-3">{metric.metric}</div>
                <div className="text-sm text-muted-foreground">{metric.description}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Transformation Stories */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">{t('customers.transformation.stories')}</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real stories of digital transformation and business impact from our customers
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {transformationStories.map((story, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow duration-300 h-full">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="outline">{story.industry}</Badge>
                    <Briefcase className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{story.title}</CardTitle>
                  <CardDescription className="text-base">{story.company}</CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <div>
                    <h5 className="font-semibold mb-2 text-red-600">Challenge:</h5>
                    <p className="text-sm text-muted-foreground">{story.challenge}</p>
                  </div>
                  
                  <div>
                    <h5 className="font-semibold mb-2 text-blue-600">Solution:</h5>
                    <p className="text-sm text-muted-foreground">{story.solution}</p>
                  </div>
                  
                  <div>
                    <h5 className="font-semibold mb-3 text-green-600">Results:</h5>
                    <ul className="space-y-2">
                      {story.results.map((result, idx) => (
                        <li key={idx} className="flex items-start text-sm">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-accent/30 rounded-lg p-4 mt-6">
                    <Quote className="w-5 h-5 text-primary mb-2" />
                    <p className="text-sm italic mb-2">"{story.quote}"</p>
                    <p className="text-xs text-muted-foreground">- {story.author}</p>
                  </div>
                </CardContent>
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
            Bergabung dengan Pemimpin Industri
          </h2>
          <p className="text-xl mb-10 opacity-90">
            Jadilah bagian dari transformasi digital yang mengubah cara perusahaan memproses dokumen. 
            Mulai perjalanan Anda hari ini dan rasakan perbedaannya.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              size="lg" 
              variant="secondary" 
              className="px-10"
              onClick={handleDemoClick}
            >
              {t('solutions.schedule.demo')}
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="px-10 border-white text-white hover:bg-white hover:text-blue-600"
              onClick={handleCaseStudiesClick}
            >
              {t('solutions.view.casestudies')}
              <Eye className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}