import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { useTranslation } from '../TranslationContext';
import { useRouter } from '../Router';
import { 
  Heart, 
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
  Stethoscope,
  Activity,
  Pill,
  Brain,
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
  Clipboard,
  FileCheck,
  HeartHandshake
} from 'lucide-react';

export function HealthcarePage() {
  const { t } = useTranslation();
  const { navigateTo } = useRouter();

  const healthcareStats = [
    {
      icon: <Heart className="w-8 h-8" />,
      value: '40+',
      label: 'Healthcare Providers',
      description: 'Hospitals and clinics using our AI'
    },
    {
      icon: <FileText className="w-8 h-8" />,
      value: '2M+',
      label: 'Patient Records/Month',
      description: 'Digitized and processed'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      value: '70%',
      label: 'Efficiency Gain',
      description: 'In administrative tasks'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      value: '99.5%',
      label: 'Accuracy Rate',
      description: 'In medical document processing'
    }
  ];

  const useCases = [
    {
      title: 'Patient Record Digitization',
      icon: <Clipboard className="w-12 h-12" />,
      description: 'Convert paper-based medical records into structured digital format',
      challenge: 'Manual transcription of medical records consuming significant staff time and prone to errors',
      solution: 'AI-powered OCR with medical terminology understanding for accurate digital conversion',
      benefits: [
        'Instant access to complete patient history',
        'Automated medical coding (ICD-10, ICD-11)',
        'Integration with existing SIMRS/HIS systems',
        'Searchable medical records database',
        'Improved patient safety through better information access'
      ],
      metrics: {
        timeReduction: '80%',
        accuracy: '99.5%',
        costSaving: 'Rp 890M/year',
        accessibility: '100%'
      },
      color: 'blue'
    },
    {
      title: 'Medical Claims Processing',
      icon: <FileCheck className="w-12 h-12" />,
      description: 'Automate insurance claims processing and reimbursement workflows',
      challenge: 'Complex medical claims requiring manual review and lengthy approval processes',
      solution: 'Intelligent claims processing with medical coding automation and fraud detection',
      benefits: [
        'Real-time claims processing and approval',
        'Automated medical necessity verification',
        'Integration with BPJS and private insurers',
        'Reduced claim rejection rates',
        'Faster reimbursement for patients'
      ],
      metrics: {
        processingTime: '75%',
        rejectionRate: '-60%',
        reimbursement: '3 days',
        satisfaction: '+50%'
      },
      color: 'green'
    },
    {
      title: 'Clinical Documentation',
      icon: <Stethoscope className="w-12 h-12" />,
      description: 'Streamline clinical documentation and physician workflows',
      challenge: 'Physicians spending excessive time on documentation instead of patient care',
      solution: 'AI-assisted clinical documentation with voice-to-text and smart templates',
      benefits: [
        'Reduce documentation time by 60%',
        'Automated clinical note generation',
        'Smart clinical decision support',
        'Standardized documentation formats',
        'More time for direct patient care'
      ],
      metrics: {
        timeReduction: '60%',
        patientTime: '+40%',
        accuracy: '99%',
        satisfaction: '+35%'
      },
      color: 'purple'
    },
    {
      title: 'Laboratory Results Management',
      icon: <Activity className="w-12 h-12" />,
      description: 'Automate lab results processing and clinical decision support',
      challenge: 'Manual lab results entry and interpretation leading to delays in patient care',
      solution: 'Automated lab results digitization with abnormal value flagging and trend analysis',
      benefits: [
        'Instant lab results digitization',
        'Automated critical value alerts',
        'Trend analysis and pattern recognition',
        'Integration with EMR systems',
        'Clinical decision support recommendations'
      ],
      metrics: {
        processingTime: '90%',
        alerts: '100%',
        accuracy: '99.8%',
        integration: '100%'
      },
      color: 'red'
    }
  ];

  const healthcareSpecialties = [
    {
      specialty: 'Hospitals',
      icon: <Heart className="w-8 h-8" />,
      useCases: ['Patient Registration', 'Medical Records', 'Discharge Summaries', 'Insurance Claims'],
      benefits: ['Streamlined admissions', 'Better patient care', 'Reduced costs']
    },
    {
      specialty: 'Clinics',
      icon: <Stethoscope className="w-8 h-8" />,
      useCases: ['Appointment Scheduling', 'Patient Forms', 'Prescription Management', 'Billing'],
      benefits: ['Efficient operations', 'Digital workflows', 'Improved experience']
    },
    {
      specialty: 'Laboratories',
      icon: <Activity className="w-8 h-8" />,
      useCases: ['Test Results', 'Quality Control', 'Reporting', 'Integration'],
      benefits: ['Faster results', 'Quality assurance', 'System integration']
    },
    {
      specialty: 'Pharmacies',
      icon: <Pill className="w-8 h-8" />,
      useCases: ['Prescription Processing', 'Inventory Management', 'Insurance Verification', 'Compliance'],
      benefits: ['Accurate dispensing', 'Stock optimization', 'Regulatory compliance']
    }
  ];

  const successStory = {
    hospital: 'Leading Hospital Network Indonesia',
    background: 'Multi-location hospital network with 45+ facilities serving 500K+ patients annually',
    challenge: 'Paper-based patient records creating inefficiencies and patient safety risks',
    implementation: 'Comprehensive digitization of patient records across all facilities with AI-powered processing',
    timeline: '12 weeks phased rollout',
    results: [
      'Patient registration time: 30 minutes → 5 minutes (85% reduction)',
      'Medical record retrieval: 2 hours → Instant access',
      'Documentation accuracy: +95% improvement',
      'Administrative costs: -60% reduction',
      'Patient satisfaction: +60% improvement',
      'Staff productivity: +40% increase'
    ],
    quote: 'rangkum.ai transformed our entire patient experience. Doctors now have instant access to complete medical histories, significantly improving care quality and patient safety.',
    executive: 'Chief Medical Information Officer'
  };

  const complianceFrameworks = [
    {
      framework: 'Ministry of Health Regulations',
      description: 'Compliance with Indonesian healthcare data management requirements',
      coverage: ['Patient data protection', 'Medical record standards', 'Digital health guidelines', 'Quality assurance']
    },
    {
      framework: 'Hospital Accreditation (KARS)',
      description: 'Meeting Indonesian hospital accreditation standards',
      coverage: ['Documentation standards', 'Patient safety protocols', 'Quality management', 'Information systems']
    },
    {
      framework: 'International Standards',
      description: 'Adherence to global healthcare information standards',
      coverage: ['HL7 FHIR compatibility', 'ICD-10/ICD-11 coding', 'SNOMED CT integration', 'HIPAA-equivalent privacy']
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
      <section className="bg-gradient-to-br from-green-50 via-white to-blue-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-6 px-4 py-2">
              <Heart className="w-4 h-4 mr-2" />
              Healthcare Solutions
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-8 leading-tight">
              Digitize Healthcare with AI-Powered Document Intelligence
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
              Transform patient care with intelligent document processing. From medical records digitization 
              to claims automation, empower healthcare providers with AI that understands medical terminology and workflows.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-8" onClick={handleDemoClick}>
                Schedule Healthcare Demo
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" size="lg" className="px-8" onClick={handleContactClick}>
                Speak with Healthcare Expert
              </Button>
            </div>
          </div>

          {/* Healthcare Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {healthcareStats.map((stat, index) => (
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

      {/* Healthcare Use Cases */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Healthcare Use Cases</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              AI-powered solutions for every aspect of healthcare documentation and workflows
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

      {/* Healthcare Specialties */}
      <section className="py-24 bg-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Solutions by Healthcare Setting</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Tailored AI solutions for different healthcare environments
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {healthcareSpecialties.map((specialty, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mx-auto mb-4">
                  {specialty.icon}
                </div>
                <h3 className="text-lg font-semibold mb-4">{specialty.specialty}</h3>
                
                <div className="mb-4">
                  <h4 className="font-medium mb-2 text-sm">Use Cases:</h4>
                  <div className="space-y-1">
                    {specialty.useCases.map((useCase, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs mr-1 mb-1">
                        {useCase}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-2 text-sm">Key Benefits:</h4>
                  <ul className="space-y-1">
                    {specialty.benefits.map((benefit, idx) => (
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
              How a major hospital network revolutionized patient care with AI
            </p>
          </div>

          <Card className="overflow-hidden max-w-6xl mx-auto">
            <div className="bg-gradient-to-r from-green-500 to-blue-600 p-8 text-white">
              <div className="flex items-center space-x-4 mb-6">
                <Heart className="w-12 h-12" />
                <div>
                  <h3 className="text-2xl font-semibold">{successStory.hospital}</h3>
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

      {/* Compliance */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Healthcare Compliance</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Built for healthcare with comprehensive regulatory compliance
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {complianceFrameworks.map((framework, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Shield className="w-8 h-8 text-primary" />
                  <h3 className="font-semibold text-lg">{framework.framework}</h3>
                </div>
                <p className="text-muted-foreground mb-4">{framework.description}</p>
                
                <h4 className="font-medium mb-3">Coverage Areas:</h4>
                <ul className="space-y-2">
                  {framework.coverage.map((area, idx) => (
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
      <section className="py-24 bg-gradient-to-r from-green-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Sparkles className="w-16 h-16 mx-auto mb-6 opacity-90" />
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Transform Healthcare with AI
          </h2>
          <p className="text-xl mb-10 opacity-90">
            Join 40+ healthcare providers improving patient care through intelligent document processing. 
            See how AI can streamline your workflows and enhance patient outcomes.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              size="lg" 
              variant="secondary" 
              className="px-10"
              onClick={handleDemoClick}
            >
              Schedule Healthcare Demo
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="px-10 border-white text-white hover:bg-white hover:text-green-600"
              onClick={handleContactClick}
            >
              Speak with Expert
              <HeartHandshake className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}