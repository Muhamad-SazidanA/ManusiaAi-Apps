import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { useTranslation } from '../TranslationContext';
import { useRouter } from '../Router';
import { 
  Zap, 
  CheckCircle, 
  ArrowRight,
  Target,
  TrendingUp,
  Brain,
  Sparkles,
  Users,
  Award,
  BarChart3,
  FileText,
  Clock,
  Lightbulb,
  Layers,
  Database,
  Settings,
  Globe,
  Star,
  Quote,
  Calendar,
  ChevronRight,
  Cpu,
  Workflow,
  Eye,
  MessageCircle,
  Code,
  Puzzle
} from 'lucide-react';

export function NoTemplatePage() {
  const { t } = useTranslation();
  const { navigateTo } = useRouter();

  const noTemplateStats = [
    {
      icon: <Brain className="w-8 h-8" />,
      value: '0',
      label: 'Templates Required',
      description: 'Works with any document format'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      value: '95%',
      label: 'Faster Setup',
      description: 'Compared to template-based solutions'
    },
    {
      icon: <Target className="w-8 h-8" />,
      value: '99.3%',
      label: 'Accuracy Rate',
      description: 'Without pre-configured templates'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      value: '<2 min',
      label: 'Processing Time',
      description: 'Per document, any format'
    }
  ];

  const keyAdvantages = [
    {
      title: 'Universal Document Understanding',
      icon: <Eye className="w-12 h-12" />,
      description: 'AI that comprehends document structure and context without predefined templates',
      benefits: [
        'Works with any document format out-of-the-box',
        'Automatically adapts to new document types',
        'Handles variations in layout and design',
        'Processes multi-language documents seamlessly',
        'Understands context and relationships between data points'
      ],
      comparison: {
        traditional: 'Requires manual template creation for each document type',
        rangkum: 'Instantly processes any document without setup'
      }
    },
    {
      title: 'Intelligent Field Recognition',
      icon: <Brain className="w-12 h-12" />,
      description: 'Advanced AI models that identify and extract relevant information intelligently',
      benefits: [
        'Recognizes fields by semantic meaning, not position',
        'Handles complex nested data structures',
        'Extracts both structured and unstructured content',
        'Maintains data relationships and hierarchy',
        'Continuous learning from processing patterns'
      ],
      comparison: {
        traditional: 'Fixed field mapping based on document coordinates',
        rangkum: 'Dynamic field recognition based on content understanding'
      }
    },
    {
      title: 'Zero Configuration Deployment',
      icon: <Zap className="w-12 h-12" />,
      description: 'Start processing documents immediately without any setup or configuration',
      benefits: [
        'No template creation or training required',
        'Instant deployment and go-live',
        'Immediate ROI without lengthy implementation',
        'Automatic handling of document variations',
        'Seamless scaling to new document types'
      ],
      comparison: {
        traditional: 'Weeks of template creation and testing',
        rangkum: 'Minutes to start processing documents'
      }
    },
    {
      title: 'Self-Learning & Adaptation',
      icon: <Cpu className="w-12 h-12" />,
      description: 'AI that continuously improves and adapts to your specific use cases',
      benefits: [
        'Learns from your document patterns over time',
        'Improves accuracy with usage',
        'Adapts to organizational terminology',
        'Handles edge cases automatically',
        'Updates without manual intervention'
      ],
      comparison: {
        traditional: 'Manual updates and template modifications required',
        rangkum: 'Automatic improvement and adaptation'
      }
    }
  ];

  const technicalArchitecture = [
    {
      component: 'Computer Vision Engine',
      description: 'Advanced OCR with layout understanding',
      capabilities: ['Multi-format document parsing', 'Table and form recognition', 'Handwriting detection', 'Image quality enhancement']
    },
    {
      component: 'Natural Language Processing',
      description: 'Contextual understanding of document content',
      capabilities: ['Named entity recognition', 'Relationship extraction', 'Semantic field mapping', 'Multi-language support']
    },
    {
      component: 'Machine Learning Models',
      description: 'Proprietary AI models trained on millions of documents',
      capabilities: ['Document classification', 'Field prediction', 'Content validation', 'Anomaly detection']
    },
    {
      component: 'Adaptive Learning System',
      description: 'Continuous improvement through usage patterns',
      capabilities: ['Performance optimization', 'Accuracy enhancement', 'Pattern recognition', 'User feedback integration']
    }
  ];

  const useCaseExamples = [
    {
      industry: 'Banking',
      scenario: 'Processing loan applications with varying formats from different partners',
      challenge: 'Each partner uses different application formats, making template-based solutions impractical',
      solution: 'No-template AI automatically extracts applicant information regardless of document format',
      result: '100% of partner documents processed without custom templates'
    },
    {
      industry: 'Insurance',
      scenario: 'Claims documents from multiple sources and formats',
      challenge: 'Claims come in various formats - emails, PDFs, images, handwritten forms',
      solution: 'Universal document understanding processes all formats uniformly',
      result: '85% reduction in manual claims processing time'
    },
    {
      industry: 'Healthcare',
      scenario: 'Medical records from different healthcare systems',
      challenge: 'Patient records vary significantly between hospitals and clinics',
      solution: 'AI understands medical terminology and structures across different formats',
      result: '99.5% accuracy in patient data extraction across all sources'
    }
  ];

  const competitiveAdvantage = {
    title: 'Why No-Template Approach Wins',
    comparisons: [
      {
        aspect: 'Implementation Time',
        traditional: '6-12 weeks (template creation)',
        rangkum: '1-2 days (immediate deployment)',
        advantage: '95% faster time-to-value'
      },
      {
        aspect: 'Maintenance Overhead',
        traditional: 'High (continuous template updates)',
        rangkum: 'Zero (self-adapting AI)',
        advantage: '90% reduction in maintenance costs'
      },
      {
        aspect: 'Scalability',
        traditional: 'Limited (new templates for each type)',
        rangkum: 'Unlimited (handles any document)',
        advantage: 'Infinite scalability potential'
      },
      {
        aspect: 'Accuracy with Variations',
        traditional: 'Breaks with format changes',
        rangkum: 'Maintains accuracy across variations',
        advantage: '99%+ accuracy regardless of format'
      }
    ]
  };

  const handleDemoClick = () => {
    navigateTo('demo');
  };

  const handleContactClick = () => {
    navigateTo('contact');
  };

  const handleLearnMoreClick = () => {
    navigateTo('ai-processing');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-white to-accent/20 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-6 px-4 py-2">
              <Zap className="w-4 h-4 mr-2" />
              No-Template Technology
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-8 leading-tight">
              Revolutionary No-Template Document Processing
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
              Break free from template limitations. Our advanced AI understands and processes any document format 
              without pre-configuration, delivering instant results with unmatched accuracy and adaptability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-8" onClick={handleDemoClick}>
                See No-Template in Action
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" size="lg" className="px-8" onClick={handleLearnMoreClick}>
                Learn More About AI Processing
              </Button>
            </div>
          </div>

          {/* No-Template Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {noTemplateStats.map((stat, index) => (
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

      {/* Key Advantages */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Revolutionary Advantages</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              How no-template technology transforms document processing from complex to effortless
            </p>
          </div>

          <div className="space-y-12">
            {keyAdvantages.map((advantage, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="p-8 lg:p-12">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                      <div className="flex items-center space-x-6 mb-6">
                        <div className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center text-primary">
                          {advantage.icon}
                        </div>
                        <div>
                          <h3 className="text-2xl font-semibold mb-2">{advantage.title}</h3>
                          <p className="text-muted-foreground text-lg">{advantage.description}</p>
                        </div>
                      </div>

                      <div className="mb-6">
                        <h4 className="font-semibold mb-4">Key Benefits:</h4>
                        <ul className="space-y-3">
                          {advantage.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-start">
                              <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                              <span className="text-sm">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="lg:col-span-1">
                      <div className="bg-gradient-to-br from-accent/30 to-accent/50 rounded-2xl p-6 h-full">
                        <h4 className="font-semibold mb-6">Traditional vs rangkum.ai</h4>
                        
                        <div className="space-y-6">
                          <div>
                            <div className="flex items-center mb-2">
                              <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                              <span className="text-sm font-medium">Traditional Approach</span>
                            </div>
                            <p className="text-sm text-muted-foreground ml-5">{advantage.comparison.traditional}</p>
                          </div>
                          
                          <div>
                            <div className="flex items-center mb-2">
                              <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                              <span className="text-sm font-medium">rangkum.ai</span>
                            </div>
                            <p className="text-sm text-muted-foreground ml-5">{advantage.comparison.rangkum}</p>
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

      {/* Technical Architecture */}
      <section className="py-24 bg-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Technical Architecture</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Advanced AI components that power no-template document understanding
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {technicalArchitecture.map((component, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Settings className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{component.component}</h3>
                    <p className="text-muted-foreground text-sm">{component.description}</p>
                  </div>
                </div>
                
                <h4 className="font-medium mb-3">Key Capabilities:</h4>
                <ul className="space-y-2">
                  {component.capabilities.map((capability, idx) => (
                    <li key={idx} className="flex items-start text-sm">
                      <Cpu className="w-3 h-3 text-primary mr-2 mt-1 flex-shrink-0" />
                      {capability}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Use Case Examples */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Real-World Applications</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              How no-template technology solves complex document processing challenges across industries
            </p>
          </div>

          <div className="space-y-8">
            {useCaseExamples.map((example, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                <div className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                    <div className="lg:col-span-1">
                      <Badge variant="secondary" className="mb-3">{example.industry}</Badge>
                      <h3 className="font-semibold text-lg mb-2">{example.scenario}</h3>
                    </div>
                    
                    <div className="lg:col-span-3">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                          <h4 className="font-medium mb-2 text-red-600">Challenge</h4>
                          <p className="text-sm text-muted-foreground">{example.challenge}</p>
                        </div>
                        <div>
                          <h4 className="font-medium mb-2 text-blue-600">Solution</h4>
                          <p className="text-sm text-muted-foreground">{example.solution}</p>
                        </div>
                        <div>
                          <h4 className="font-medium mb-2 text-green-600">Result</h4>
                          <p className="text-sm font-medium text-green-800 bg-green-50 p-3 rounded-lg">{example.result}</p>
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

      {/* Competitive Advantage */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">{competitiveAdvantage.title}</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Quantified advantages of no-template technology over traditional approaches
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-2xl shadow-lg overflow-hidden">
              <thead className="bg-primary text-primary-foreground">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Comparison Aspect</th>
                  <th className="px-6 py-4 text-left font-semibold">Traditional Template-Based</th>
                  <th className="px-6 py-4 text-left font-semibold">rangkum.ai No-Template</th>
                  <th className="px-6 py-4 text-left font-semibold">Advantage</th>
                </tr>
              </thead>
              <tbody>
                {competitiveAdvantage.comparisons.map((comparison, index) => (
                  <tr key={index} className="border-b border-border hover:bg-accent/20 transition-colors">
                    <td className="px-6 py-4 font-medium">{comparison.aspect}</td>
                    <td className="px-6 py-4 text-muted-foreground">{comparison.traditional}</td>
                    <td className="px-6 py-4 text-green-700 font-medium">{comparison.rangkum}</td>
                    <td className="px-6 py-4">
                      <Badge variant="secondary" className="bg-green-100 text-green-800">
                        {comparison.advantage}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Sparkles className="w-16 h-16 mx-auto mb-6 opacity-90" />
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Experience the Future of Document Processing
          </h2>
          <p className="text-xl mb-10 opacity-90">
            Stop being limited by templates. See how our revolutionary no-template AI can process 
            any document format instantly, with no setup required and unmatched accuracy.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              size="lg" 
              variant="secondary" 
              className="px-10"
              onClick={handleDemoClick}
            >
              See No-Template Demo
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="px-10 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              onClick={handleContactClick}
            >
              Discuss Your Use Case
              <MessageCircle className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}