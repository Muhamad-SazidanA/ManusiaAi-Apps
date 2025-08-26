import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { useTranslation } from '../TranslationContext';
import { useRouter } from '../Router';
import { 
  Users, 
  Receipt, 
  FileText, 
  CheckCircle, 
  ArrowRight,
  Target,
  TrendingUp,
  Clock,
  DollarSign,
  Zap,
  Shield,
  Building2,
  CreditCard,
  Heart,
  GraduationCap,
  Factory,
  Truck,
  BarChart3,
  Workflow,
  Database,
  Eye,
  Settings,
  Globe
} from 'lucide-react';

export function SolutionsOverviewPage() {
  const { t } = useTranslation();
  const { navigateTo } = useRouter();

  const mainSolutions = [
    {
      id: 'customer-onboarding',
      icon: <Users className="w-12 h-12" />,
      title: t('solutions.onboarding.title'),
      description: t('solutions.onboarding.desc'),
      keyBenefits: [
        'Reduce onboarding time by 85%',
        'Eliminate manual data entry errors',
        'Ensure regulatory compliance',
        'Improve customer experience'
      ],
      metrics: {
        timeReduction: '85%',
        accuracy: '99.5%',
        costSaving: 'Rp 2.8M/customer'
      },
      industries: ['Banking', 'Insurance', 'Fintech', 'Telecommunications'],
      useCases: [
        'KYC Document Processing',
        'Identity Verification',
        'Income Assessment',
        'Risk Evaluation'
      ]
    },
    {
      id: 'accounts-payable',
      icon: <Receipt className="w-12 h-12" />,
      title: t('solutions.ap.title'),
      description: t('solutions.ap.desc'),
      keyBenefits: [
        'Automate invoice processing end-to-end',
        '3-way matching automation',
        'Real-time approval workflows',
        'Direct ERP integration'
      ],
      metrics: {
        timeReduction: '90%',
        accuracy: '99.8%',
        costSaving: 'Rp 26M/year'
      },
      industries: ['Manufacturing', 'Retail', 'Distribution', 'Healthcare'],
      useCases: [
        'Invoice Data Extraction',
        'Purchase Order Matching',
        'Vendor Management',
        'Payment Processing'
      ]
    },
    {
      id: 'purchase-orders',
      icon: <FileText className="w-12 h-12" />,
      title: t('solutions.po.title'),
      description: t('solutions.po.desc'),
      keyBenefits: [
        'Process physical and digital POs',
        'Automated supplier validation',
        'Real-time status tracking',
        'Complete audit trail'
      ],
      metrics: {
        timeReduction: '75%',
        accuracy: '99.2%',
        costSaving: 'Rp 17M/year'
      },
      industries: ['Construction', 'Manufacturing', 'Education', 'Government'],
      useCases: [
        'PO Data Extraction',
        'Supplier Verification',
        'Procurement Automation',
        'Compliance Tracking'
      ]
    }
  ];

  const industrySpecificSolutions = [
    {
      name: 'Banking & Financial Services',
      icon: <Building2 className="w-8 h-8" />,
      description: 'Complete digital transformation untuk banking operations',
      keyFeatures: [
        'KYC & AML Compliance Automation',
        'Loan Application Processing',
        'Credit Assessment Documentation',
        'Regulatory Reporting Automation'
      ],
      benefits: {
        timeReduction: '85%',
        costSaving: 'Rp 61M/year',
        complianceScore: '98%'
      },
      documents: ['KTP', 'Passport', 'Bank Statements', 'Salary Slips', 'Tax Returns'],
      link: 'banking'
    },
    {
      name: 'Insurance',
      icon: <CreditCard className="w-8 h-8" />,
      description: 'Streamline claims processing dan underwriting workflows',
      keyFeatures: [
        'Claims Document Processing',
        'Medical Records Analysis',
        'Policy Application Automation',
        'Fraud Detection & Prevention'
      ],
      benefits: {
        timeReduction: '78%',
        costSaving: 'Rp 54M/year',
        complianceScore: '95%'
      },
      documents: ['Medical Records', 'Claim Forms', 'Police Reports', 'Damage Assessments'],
      link: 'insurance'
    },
    {
      name: 'Healthcare',
      icon: <Heart className="w-8 h-8" />,
      description: 'Digitalisasi medical records dan patient management',
      keyFeatures: [
        'Patient Record Digitization',
        'Insurance Claims Processing',
        'Lab Results Automation',
        'Prescription Management'
      ],
      benefits: {
        timeReduction: '70%',
        costSaving: 'Rp 45M/year',
        complianceScore: '97%'
      },
      documents: ['Lab Reports', 'Prescriptions', 'Patient Forms', 'Insurance Claims'],
      link: 'healthcare'
    },
    {
      name: 'Manufacturing',
      icon: <Factory className="w-8 h-8" />,
      description: 'Quality control dan supply chain documentation',
      keyFeatures: [
        'Quality Control Reports',
        'Supplier Documentation',
        'Compliance Certificates',
        'Inventory Management'
      ],
      benefits: {
        timeReduction: '60%',
        costSaving: 'Rp 41M/year',
        complianceScore: '96%'
      },
      documents: ['QC Reports', 'Supplier Docs', 'Certificates', 'Inspection Forms'],
      link: 'manufacturing'
    },
    {
      name: 'Logistics & Transportation',
      icon: <Truck className="w-8 h-8" />,
      description: 'Automated shipping dan customs documentation',
      keyFeatures: [
        'Shipping Document Processing',
        'Customs Form Automation',
        'Manifest Generation',
        'Tracking Integration'
      ],
      benefits: {
        timeReduction: '65%',
        costSaving: 'Rp 38M/year',
        complianceScore: '94%'
      },
      documents: ['Bills of Lading', 'Customs Forms', 'Manifests', 'Delivery Notes'],
      link: 'logistics'
    },
    {
      name: 'Education',
      icon: <GraduationCap className="w-8 h-8" />,
      description: 'Academic records dan student administration',
      keyFeatures: [
        'Student Record Management',
        'Transcript Processing',
        'Application Automation',
        'Certification Management'
      ],
      benefits: {
        timeReduction: '55%',
        costSaving: 'Rp 12M/year',
        complianceScore: '93%'
      },
      documents: ['Transcripts', 'Applications', 'Certificates', 'Student Records'],
      link: 'education'
    }
  ];

  const implementationProcess = [
    {
      step: 1,
      title: 'Discovery & Assessment',
      duration: '1-2 weeks',
      description: 'Comprehensive analysis of current processes and requirements',
      activities: [
        'Current state documentation review',
        'Process workflow mapping',
        'Pain point identification',
        'Success criteria definition'
      ]
    },
    {
      step: 2,
      title: 'Solution Design',
      duration: '1-2 weeks',
      description: 'Custom solution architecture and integration planning',
      activities: [
        'Solution architecture design',
        'Integration point mapping',
        'Security & compliance review',
        'Performance requirements analysis'
      ]
    },
    {
      step: 3,
      title: 'Pilot Implementation',
      duration: '2-4 weeks',
      description: 'Controlled deployment with limited scope for validation',
      activities: [
        'Development environment setup',
        'Pilot data processing',
        'Accuracy validation & tuning',
        'User acceptance testing'
      ]
    },
    {
      step: 4,
      title: 'Full Production Rollout',
      duration: '2-6 weeks',
      description: 'Complete deployment with training and support',
      activities: [
        'Production environment deployment',
        'Full integration testing',
        'User training & change management',
        'Go-live support & monitoring'
      ]
    }
  ];

  const handleSolutionClick = (solutionId: string) => {
    navigateTo(solutionId);
  };

  const handleIndustryClick = (industryLink: string) => {
    navigateTo(industryLink);
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
      <section className="bg-gradient-to-br from-green-50 to-blue-100 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-6 px-4 py-2">
              <Target className="w-4 h-4 mr-2" />
              {t('nav.solutions')} Overview
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-8 leading-tight">
              {t('solutions.title')}
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
              {t('solutions.subtitle')}
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

          {/* Quick ROI Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-border/30">
              <TrendingUp className="w-8 h-8 text-green-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-green-600 mb-2">85%</div>
              <div className="text-sm text-muted-foreground">{t('solutions.avg.time.reduction')}</div>
            </div>
            <div className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-border/30">
              <DollarSign className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-blue-600 mb-2">Rp 34M</div>
              <div className="text-sm text-muted-foreground">{t('solutions.avg.savings')}</div>
            </div>
            <div className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-border/30">
              <BarChart3 className="w-8 h-8 text-purple-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-purple-600 mb-2">4.2x</div>
              <div className="text-sm text-muted-foreground">{t('solutions.avg.roi')}</div>
            </div>
            <div className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-border/30">
              <Clock className="w-8 h-8 text-orange-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-orange-600 mb-2">4.5</div>
              <div className="text-sm text-muted-foreground">{t('solutions.payback.period')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Solutions */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">{t('solutions.proven.usecases')}</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Tiga use case utama yang telah terbukti memberikan ROI exceptional untuk enterprise
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {mainSolutions.map((solution, index) => (
              <Card 
                key={solution.id} 
                className="hover:shadow-2xl transition-all duration-300 cursor-pointer group border-2 hover:border-primary/30 overflow-hidden"
                onClick={() => handleSolutionClick(solution.id)}
              >
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary to-primary/70"></div>
                
                <CardHeader className="pt-8 pb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300 mb-6 mx-auto">
                    {solution.icon}
                  </div>
                  
                  <CardTitle className="text-xl text-center group-hover:text-primary transition-colors mb-4">
                    {solution.title}
                  </CardTitle>
                  <CardDescription className="text-base text-center leading-relaxed">
                    {solution.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Key Benefits */}
                  <div>
                    <h5 className="font-semibold mb-3 text-sm">{t('common.benefits')}:</h5>
                    <ul className="space-y-2">
                      {solution.keyBenefits.map((benefit, idx) => (
                        <li key={idx} className="text-sm flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Impact Metrics */}
                  <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-4">
                    <h5 className="font-semibold mb-3 text-sm text-green-700">{t('solutions.impact.metrics')}:</h5>
                    <div className="grid grid-cols-3 gap-2 text-center">
                      <div>
                        <div className="text-lg font-bold text-green-600">{solution.metrics.timeReduction}</div>
                        <div className="text-xs text-muted-foreground">{t('solutions.time.saved')}</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-blue-600">{solution.metrics.accuracy}</div>
                        <div className="text-xs text-muted-foreground">{t('solutions.accuracy')}</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-purple-600">{solution.metrics.costSaving}</div>
                        <div className="text-xs text-muted-foreground">{t('solutions.savings')}</div>
                      </div>
                    </div>
                  </div>

                  {/* Industries */}
                  <div>
                    <h5 className="font-semibold mb-3 text-sm">{t('solutions.main.industries')}:</h5>
                    <div className="flex flex-wrap gap-2">
                      {solution.industries.map((industry, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {industry}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Use Cases */}
                  <div>
                    <h5 className="font-semibold mb-3 text-sm">{t('common.usecases')}:</h5>
                    <div className="space-y-1">
                      {solution.useCases.slice(0, 3).map((useCase, idx) => (
                        <div key={idx} className="text-xs text-muted-foreground flex items-center">
                          <Zap className="w-3 h-3 text-blue-500 mr-2" />
                          {useCase}
                        </div>
                      ))}
                    </div>
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
      </section>

      {/* Industry-Specific Solutions */}
      <section className="py-24 bg-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">{t('solutions.industry.title')}</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Solusi yang disesuaikan dengan kebutuhan spesifik setiap industri
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industrySpecificSolutions.map((industry, index) => (
              <Card 
                key={index} 
                className="hover:shadow-xl transition-all duration-300 cursor-pointer group border-2 hover:border-primary/20"
                onClick={() => handleIndustryClick(industry.link)}
              >
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                      {industry.icon}
                    </div>
                    <div>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">
                        {industry.name}
                      </CardTitle>
                    </div>
                  </div>
                  <CardDescription className="text-base">
                    {industry.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  {/* Key Features */}
                  <div>
                    <h5 className="font-semibold mb-3 text-sm">{t('common.features')}:</h5>
                    <ul className="space-y-2">
                      {industry.keyFeatures.map((feature, idx) => (
                        <li key={idx} className="text-sm flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Benefits Metrics */}
                  <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-lg p-4">
                    <h5 className="font-semibold mb-3 text-sm text-green-700">Proven Results:</h5>
                    <div className="grid grid-cols-3 gap-3 text-center">
                      <div>
                        <div className="text-lg font-bold text-green-600">{industry.benefits.timeReduction}</div>
                        <div className="text-xs text-green-700">Time Reduction</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-blue-600">{industry.benefits.costSaving}</div>
                        <div className="text-xs text-green-700">Annual Savings</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-purple-600">{industry.benefits.complianceScore}</div>
                        <div className="text-xs text-green-700">Compliance</div>
                      </div>
                    </div>
                  </div>

                  {/* Document Types */}
                  <div>
                    <h5 className="font-semibold mb-3 text-sm">Document Types:</h5>
                    <div className="flex flex-wrap gap-2">
                      {industry.documents.map((doc, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {doc}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-2">
                    <span className="text-sm text-primary group-hover:underline">
                      {t('common.learnmore')} →
                    </span>
                    <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Implementation Process</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Structured approach untuk successful solution deployment dengan minimal disruption
            </p>
          </div>
          
          <div className="space-y-8">
            {implementationProcess.map((step, index) => (
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
      <section className="py-24 bg-gradient-to-r from-green-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Target className="w-16 h-16 mx-auto mb-6 opacity-90" />
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            {t('solutions.cta.title')}
          </h2>
          <p className="text-xl mb-10 opacity-90">
            {t('solutions.cta.subtitle')}
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
              className="px-10 border-white text-white hover:bg-white hover:text-green-600"
              onClick={() => navigateTo('roi-calculator')}
            >
              {t('solutions.calculate.roi')}
              <BarChart3 className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}