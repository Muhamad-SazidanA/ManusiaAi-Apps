import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { useTranslation } from '../TranslationContext';
import { 
  Users, 
  CheckCircle, 
  ArrowRight,
  Shield,
  Clock,
  Target,
  TrendingUp,
  FileText,
  CreditCard,
  Building2,
  Zap,
  Eye,
  AlertTriangle,
  Database,
  Workflow,
  BarChart3,
  Globe,
  Smartphone
} from 'lucide-react';

export function CustomerOnboardingPage() {
  const { t } = useTranslation();

  const onboardingChallenges = [
    {
      challenge: 'Manual Document Review',
      impact: 'Review manual 2-5 hari per customer',
      solution: 'Automated document extraction dan validation dalam 30 detik',
      icon: <Clock className="w-6 h-6" />
    },
    {
      challenge: 'High Error Rates',
      impact: '15-25% error rate dari manual data entry',
      solution: '99.8% accuracy rate dengan AI-powered extraction',
      icon: <Target className="w-6 h-6" />
    },
    {
      challenge: 'Compliance Risk',
      impact: 'Risk compliance failure dan regulatory fines',
      solution: 'Built-in KYC/AML compliance checks dan audit trails',
      icon: <Shield className="w-6 h-6" />
    },
    {
      challenge: 'Poor Customer Experience',
      impact: 'Customer abandonment rate 30-40%',
      solution: 'Real-time processing dengan instant feedback',
      icon: <Users className="w-6 h-6" />
    }
  ];

  const supportedDocuments = [
    {
      category: 'Identity Documents',
      description: 'Dokumen identitas nasional dan internasional',
      documents: [
        { name: 'KTP Indonesia', accuracy: '99.8%', fields: 'NIK, Name, Address, Birth Date, etc.' },
        { name: 'Passport', accuracy: '99.5%', fields: 'Passport Number, Name, Nationality, etc.' },
        { name: 'SIM/Driver License', accuracy: '99.2%', fields: 'License Number, Name, Address, etc.' },
        { name: 'NPWP', accuracy: '99.9%', fields: 'Tax ID, Name, Address' }
      ]
    },
    {
      category: 'Financial Documents',
      description: 'Dokumen finansial untuk income verification',
      documents: [
        { name: 'Bank Statements', accuracy: '98.9%', fields: 'Account Number, Balance, Transactions' },
        { name: 'Payslips', accuracy: '99.1%', fields: 'Salary, Employer, Tax Deductions' },
        { name: 'Tax Returns', accuracy: '98.7%', fields: 'Income, Tax Paid, Employer Info' },
        { name: 'Credit Reports', accuracy: '99.3%', fields: 'Credit Score, History, Accounts' }
      ]
    },
    {
      category: 'Business Documents',
      description: 'Dokumen untuk business customer onboarding',
      documents: [
        { name: 'Company Registration', accuracy: '99.4%', fields: 'Company Name, Registration Number, Directors' },
        { name: 'Business License', accuracy: '98.8%', fields: 'License Number, Business Type, Validity' },
        { name: 'Financial Statements', accuracy: '98.6%', fields: 'Revenue, Assets, Liabilities' },
        { name: 'Articles of Association', accuracy: '97.9%', fields: 'Shareholders, Capital, Purpose' }
      ]
    }
  ];

  const industryUseCases = [
    {
      industry: 'Banking & Financial Services',
      icon: <Building2 className="w-8 h-8" />,
      description: 'Complete digital onboarding untuk retail dan corporate banking',
      challenges: [
        'Manual KYC process memakan waktu 3-7 hari',
        'High abandonment rate di digital channels',
        'Compliance requirements yang complex',
        'Integration dengan core banking systems'
      ],
      solutions: [
        'Automated document verification dalam 30 detik',
        'Real-time fraud detection dan risk scoring',
        'Complete audit trail untuk regulatory compliance',
        'API integration dengan existing banking infrastructure'
      ],
      results: {
        timeReduction: '85%',
        errorReduction: '92%',
        costSaving: 'Rp 2.8M/customer',
        customerSatisfaction: '+67%'
      },
      caseStudy: {
        client: 'Bank Digital Terkemuka',
        challenge: 'Processing 1000+ applications per day dengan manual review',
        implementation: '3-month phased rollout dengan rangkum.ai integration',
        outcome: 'Same-day account opening untuk 95% applications'
      }
    },
    {
      industry: 'Insurance',
      icon: <Shield className="w-8 h-8" />,
      description: 'Digital underwriting dan policy issuance automation',
      challenges: [
        'Underwriting process 5-14 hari untuk life insurance',
        'Medical records review yang manual dan costly',
        'Risk assessment inconsistency',
        'High operational costs untuk document processing'
      ],
      solutions: [
        'Automated medical records extraction dan analysis',  
        'Risk scoring based on comprehensive document analysis',
        'Integration dengan underwriting workflows',
        'Real-time policy quotation dan issuance'
      ],
      results: {
        timeReduction: '78%',
        errorReduction: '88%',
        costSaving: 'Rp 1.9M/policy',
        customerSatisfaction: '+54%'
      },
      caseStudy: {
        client: 'Asuransi Jiwa Nasional',
        challenge: 'Manual medical underwriting untuk 500+ applications monthly',
        implementation: 'AI-powered medical document analysis implementation',
        outcome: 'Instant quotes untuk 70% standard risk applications'
      }
    },
    {
      industry: 'Fintech & Lending',
      icon: <CreditCard className="w-8 h-8" />,
      description: 'Instant loan approval dengan comprehensive risk assessment',
      challenges: [
        'Manual income verification dari multiple sources',
        'Credit decision time 2-5 hari',
        'High default rates dari inadequate screening',
        'Scale limitations dengan manual processes'
      ],
      solutions: [
        'Multi-source income verification automation',
        'Real-time creditworthiness assessment',
        'Fraud detection dengan document authenticity checks',
        'Scalable processing untuk high-volume applications'
      ],
      results: {
        timeReduction: '91%',
        errorReduction: '89%',
        costSaving: 'Rp 450K/application',
        customerSatisfaction: '+71%'
      },
      caseStudy: {
        client: 'Platform Pinjaman Online',
        challenge: '10,000+ loan applications per month dengan manual verification',
        implementation: 'End-to-end automation dengan rangkum.ai',
        outcome: 'Instant approval untuk 80% qualified applications'
      }
    }
  ];

  const implementationSteps = [
    {
      step: 1,
      title: 'Assessment & Planning',
      duration: '1-2 weeks',
      description: 'Analysis current onboarding process dan design solution architecture',
      activities: [
        'Current state assessment dan pain point identification',
        'Document types mapping dan extraction requirements',
        'Integration points identification dengan existing systems',
        'Compliance requirements review dan validation approach'
      ]
    },
    {
      step: 2,
      title: 'Pilot Implementation',
      duration: '2-3 weeks', 
      description: 'Limited pilot dengan subset of document types dan use cases',
      activities: [
        'Development environment setup dan API integration',
        'Pilot document processing dengan sample data',
        'Accuracy validation dan model fine-tuning',
        'User acceptance testing dengan key stakeholders'
      ]
    },
    {
      step: 3,
      title: 'Full Production Rollout',
      duration: '3-4 weeks',
      description: 'Complete production deployment dengan monitoring dan optimization',
      activities: [
        'Production environment deployment',
        'Full document type coverage dan workflow integration',
        'Staff training dan change management',
        'Performance monitoring dan continuous optimization'
      ]
    },
    {
      step: 4,
      title: 'Optimization & Scaling',
      duration: 'Ongoing',
      description: 'Continuous improvement dan scaling untuk additional use cases',
      activities: [
        'Performance analytics dan optimization recommendations',
        'Additional document types dan use cases expansion',
        'Integration dengan additional downstream systems',
        'Advanced features rollout (ML insights, predictive analytics)'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-blue-100 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-6 px-4 py-2">
              <Users className="w-4 h-4 mr-2" />
              Customer Onboarding Solutions
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-8 leading-tight">
              Customer Onboarding<br />yang Instant & Compliant
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
              Transformasi complete customer onboarding experience dengan AI-powered document 
              processing. Dari KYC verification hingga income assessment, semua automated 
              dengan akurasi tinggi dan compliance yang terjamin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-8">
                Demo Interactive
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" size="lg" className="px-8">
                ROI Calculator
                <BarChart3 className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges & Solutions */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Onboarding Challenges Solved</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Address critical pain points dalam customer onboarding dengan AI automation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {onboardingChallenges.map((item, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center text-red-600 flex-shrink-0">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2">{item.challenge}</h3>
                    <p className="text-red-600 text-sm mb-3">❌ {item.impact}</p>
                    <p className="text-green-600 text-sm">✅ {item.solution}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Supported Documents */}
      <section className="py-24 bg-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Supported Document Types</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive support untuk semua document types yang dibutuhkan dalam onboarding
            </p>
          </div>
          
          <Tabs defaultValue="identity" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="identity">Identity Documents</TabsTrigger>
              <TabsTrigger value="financial">Financial Documents</TabsTrigger>
              <TabsTrigger value="business">Business Documents</TabsTrigger>
            </TabsList>
            
            {supportedDocuments.map((category, index) => (
              <TabsContent key={index} value={category.category.toLowerCase().split(' ')[0]}>
                <Card className="p-8">
                  <div className="mb-8">
                    <h3 className="text-2xl font-semibold mb-3">{category.category}</h3>
                    <p className="text-muted-foreground">{category.description}</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {category.documents.map((doc, idx) => (
                      <div key={idx} className="bg-white rounded-lg p-6 border hover:shadow-lg transition-shadow">
                        <div className="flex items-center justify-between mb-4">
                          <h4 className="font-semibold">{doc.name}</h4>
                          <Badge variant="outline" className="text-green-600">
                            {doc.accuracy}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">
                          <strong>Extracted Fields:</strong> {doc.fields}
                        </p>
                        <div className="flex items-center text-xs text-green-600">
                          <CheckCircle className="w-3 h-3 mr-1" />
                          Production Ready
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Industry Use Cases */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Industry-Specific Solutions</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Tailored onboarding solutions untuk different industries dengan specific requirements
            </p>
          </div>
          
          <div className="space-y-16">
            {industryUseCases.map((industry, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-2xl transition-all duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8">
                  {/* Industry Overview */}
                  <div className="lg:col-span-1 space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                        {industry.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold">{industry.industry}</h3>
                        <p className="text-sm text-muted-foreground">{industry.description}</p>
                      </div>
                    </div>
                    
                    {/* Results Metrics */}
                    <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6">
                      <h4 className="font-semibold mb-4 text-green-700">Achieved Results:</h4>
                      <div className="grid grid-cols-2 gap-4 text-center">
                        <div>
                          <div className="text-2xl font-bold text-green-600">{industry.results.timeReduction}</div>
                          <div className="text-xs text-muted-foreground">Time Reduction</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-blue-600">{industry.results.errorReduction}</div>
                          <div className="text-xs text-muted-foreground">Error Reduction</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-purple-600">{industry.results.costSaving}</div>
                          <div className="text-xs text-muted-foreground">Cost Saving</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-orange-600">{industry.results.customerSatisfaction}</div>
                          <div className="text-xs text-muted-foreground">Satisfaction</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Challenges & Solutions */}
                  <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold mb-4 text-red-600 flex items-center">
                        <AlertTriangle className="w-4 h-4 mr-2" />
                        Key Challenges
                      </h4>
                      <ul className="space-y-3">
                        {industry.challenges.map((challenge, idx) => (
                          <li key={idx} className="text-sm flex items-start">
                            <span className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                            {challenge}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-4 text-green-600 flex items-center">
                        <CheckCircle className="w-4 h-4 mr-2" />
                        Our Solutions
                      </h4>
                      <ul className="space-y-3">
                        {industry.solutions.map((solution, idx) => (
                          <li key={idx} className="text-sm flex items-start">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                            {solution}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                
                {/* Case Study */}
                <div className="bg-accent/30 p-6 border-t">
                  <h4 className="font-semibold mb-3">Case Study: {industry.caseStudy.client}</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <span className="font-medium text-red-600">Challenge:</span>
                      <p className="text-muted-foreground">{industry.caseStudy.challenge}</p>
                    </div>
                    <div>
                      <span className="font-medium text-blue-600">Implementation:</span>
                      <p className="text-muted-foreground">{industry.caseStudy.implementation}</p>
                    </div>
                    <div>
                      <span className="font-medium text-green-600">Outcome:</span>
                      <p className="text-muted-foreground">{industry.caseStudy.outcome}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Roadmap */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Implementation Roadmap</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Structured approach untuk successful onboarding automation implementation
            </p>
          </div>
          
          <div className="space-y-8">
            {implementationSteps.map((step, index) => (
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
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Transform Your Customer Onboarding Today
          </h2>
          <p className="text-xl mb-10 opacity-90">
            Bergabung dengan 200+ perusahaan yang telah mengautomasi onboarding process 
            dan meningkatkan customer experience secara significant.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" variant="secondary" className="px-10">
              Schedule Demo
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="px-10 border-white text-white hover:bg-white hover:text-green-600">
              Calculate ROI
              <BarChart3 className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}