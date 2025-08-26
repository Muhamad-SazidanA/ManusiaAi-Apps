import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { useTranslation } from '../TranslationContext';
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
  Workflow
} from 'lucide-react';

export function AIProcessingPage() {
  const { t } = useTranslation();

  const capabilities = [
    {
      title: 'Document Understanding',
      description: 'Kemampuan memahami konteks dan struktur dokumen secara mendalam',
      icon: <Eye className="w-8 h-8" />,
      features: [
        'Layout analysis untuk semua jenis dokumen',
        'Context-aware field extraction',
        'Relationship detection antar data fields',
        'Semantic understanding dokumen bisnis'
      ]
    },
    {
      title: 'Multi-Modal Processing',
      description: 'Pemrosesan berbagai format dan jenis dokumen dalam satu workflow',
      icon: <Layers className="w-8 h-8" />,
      features: [
        'PDF, DOCX, Excel, PPT, dan 50+ format lainnya',
        'Gambar scan dengan resolusi tinggi dan rendah',
        'Dokumen tulisan tangan dan semi-terstruktur',
        'Video frames dan multimedia documents'
      ]
    },
    {
      title: 'Adaptive Learning',
      description: 'Model AI yang terus belajar dan mengoptimalkan performa',
      icon: <Brain className="w-8 h-8" />,
      features: [
        'Continuous learning dari feedback user',
        'Domain-specific model fine-tuning',
        'Error pattern recognition dan correction',
        'Performance optimization otomatis'
      ]
    },
    {
      title: 'Enterprise Integration',
      description: 'Integrasi seamless dengan sistem enterprise existing',
      icon: <Database className="w-8 h-8" />,
      features: [
        'RESTful API dengan comprehensive documentation',
        'Webhook support untuk real-time notifications',
        'Batch processing untuk volume tinggi',
        'SDK untuk Python, Java, .NET, dan Node.js'
      ]
    }
  ];

  const technicalSpecs = [
    {
      category: 'Performance Metrics',
      specs: [
        { name: 'Accuracy Rate', value: '99.8%', description: 'Pada dokumen terstruktur dan semi-terstruktur' },
        { name: 'Processing Speed', value: '< 30 detik', description: 'Rata-rata untuk dokumen 10 halaman' },
        { name: 'Throughput', value: '10,000 docs/jam', description: 'Peak processing capacity per instance' },
        { name: 'Uptime SLA', value: '99.9%', description: 'Guaranteed availability dengan monitoring 24/7' }
      ]
    },
    {
      category: 'Supported Formats',
      specs: [
        { name: 'Document Types', value: '100+', description: 'PDF, DOCX, XLS, PPT, TXT, RTF, dan lainnya' },
        { name: 'Image Formats', value: '15+', description: 'JPEG, PNG, TIFF, BMP, WebP, HEIC' },
        { name: 'Languages', value: '40+', description: 'Termasuk Bahasa Indonesia dan regional languages' },
        { name: 'OCR Quality', value: '300-4800 DPI', description: 'Optimized untuk berbagai kualitas scan' }
      ]
    },
    {
      category: 'Security & Compliance',
      specs: [
        { name: 'Data Encryption', value: 'AES-256', description: 'End-to-end encryption untuk semua data' },
        { name: 'Compliance', value: 'ISO 27001, GDPR', description: 'Sertifikasi keamanan internasional' },
        { name: 'Data Residency', value: 'Configurable', description: 'Data dapat disimpan di region tertentu' },
        { name: 'Access Control', value: 'RBAC + MFA', description: 'Role-based access dengan multi-factor auth' }
      ]
    }
  ];

  const useCaseExamples = [
    {
      industry: 'Financial Services',
      useCase: 'Loan Application Processing',
      challenge: 'Manual review 2-3 hari per aplikasi dengan error rate 12%',
      solution: 'Otomatisasi ekstraksi data dari slip gaji, rekening koran, dan dokumen pendukung',
      results: [
        'Processing time: 3 hari → 2 jam',
        'Error rate: 12% → 0.8%',
        'Cost per application: Rp 450K → Rp 67K',
        'Customer satisfaction: +67%'
      ]
    },
    {
      industry: 'Healthcare',
      useCase: 'Medical Records Digitization',
      challenge: 'Paper-based records di 45 klinik dengan pencarian manual',
      solution: 'Digitalisasi dan ekstraksi data dari lab results, prescription, patient forms',
      results: [
        'Records digitized: 2.3M dokumen',
        'Search time: 15 menit → 3 detik',
        'Storage cost: -75%',
        'Compliance score: 98%'
      ]
    },
    {
      industry: 'Manufacturing',
      useCase: 'Quality Control Documentation',
      challenge: 'Manual input quality reports dari 25 production lines',
      solution: 'Automated extraction dari QC forms, inspection reports, certificates',
      results: [
        'Data entry time: -89%',
        'Quality incidents: -43%',
        'Compliance reporting: Automated',
        'Audit preparation: 2 weeks → 1 day'
      ]
    }
  ];

  const integrationOptions = [
    {
      type: 'RESTful API',
      description: 'Standard HTTP API untuk easy integration',
      features: [
        'OpenAPI 3.0 specification',
        'Rate limiting dan throttling',
        'Comprehensive error handling',
        'Real-time status updates'
      ],
      sampleCode: `POST /api/v1/documents/process
{
  "document_url": "https://...",
  "extraction_type": "structured",
  "callback_url": "https://..."
}`
    },
    {
      type: 'Webhook Integration',
      description: 'Real-time notifications untuk asynchronous processing',
      features: [
        'Configurable event triggers',
        'Retry mechanism untuk failed deliveries',
        'Secure payload signing',
        'Custom headers support'
      ],
      sampleCode: `{
  "event": "document.processed",
  "document_id": "doc_12345",
  "status": "completed",
  "extracted_data": {...}
}`
    },
    {
      type: 'SDK Integration',
      description: 'Native libraries untuk popular programming languages',
      features: [
        'Python, Java, .NET, Node.js SDKs',
        'Built-in retry dan error handling',
        'Type-safe interfaces',
        'Comprehensive examples'
      ],
      sampleCode: `from rangkum import DocumentProcessor

processor = DocumentProcessor(api_key="...")
result = processor.process_document(
    file_path="./invoice.pdf",
    extraction_type="invoice"
)`
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-accent/20 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-6 px-4 py-2">
              <Brain className="w-4 h-4 mr-2" />
              AI Document Processing
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-8 leading-tight">
              Pemrosesan Dokumen AI<br />Tanpa Template
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
              Teknologi AI terdepan yang memahami dan memproses dokumen apapun tanpa perlu 
              setup manual atau template. Dari invoice kompleks hingga formulir tulisan tangan, 
              sistem kami mengekstrak data dengan akurasi tinggi dalam hitungan detik.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-8">
                Coba Demo Interaktif
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" size="lg" className="px-8">
                Download Technical Specs
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Core Capabilities</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Kemampuan AI processing yang comprehensive untuk semua kebutuhan document extraction
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {capabilities.map((capability, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 p-8">
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary flex-shrink-0">
                    {capability.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-3">{capability.title}</h3>
                    <p className="text-muted-foreground mb-4">{capability.description}</p>
                    <ul className="space-y-2">
                      {capability.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start text-sm">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-24 bg-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Technical Specifications</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Spesifikasi teknis lengkap untuk enterprise planning dan implementation
            </p>
          </div>
          
          <div className="space-y-12">
            {technicalSpecs.map((section, index) => (
              <Card key={index} className="p-8">
                <h3 className="text-2xl font-semibold mb-6">{section.category}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {section.specs.map((spec, idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-3xl font-bold text-primary mb-2">{spec.value}</div>
                      <div className="font-semibold mb-2">{spec.name}</div>
                      <div className="text-sm text-muted-foreground">{spec.description}</div>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Use Case Examples */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Real-World Use Cases</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Contoh implementasi nyata di berbagai industri dengan hasil yang terukur
            </p>
          </div>
          
          <div className="space-y-8">
            {useCaseExamples.map((example, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8">
                  <div className="lg:col-span-2 space-y-6">
                    <div>
                      <Badge variant="outline" className="mb-3">{example.industry}</Badge>
                      <h3 className="text-xl font-semibold mb-3">{example.useCase}</h3>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-red-600 mb-2">Challenge:</h4>
                          <p className="text-muted-foreground">{example.challenge}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-blue-600 mb-2">Solution:</h4>
                          <p className="text-muted-foreground">{example.solution}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="lg:col-span-1 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6">
                    <h4 className="font-semibold text-green-700 mb-4 flex items-center">
                      <TrendingUp className="w-5 h-5 mr-2" />
                      Results Achieved
                    </h4>
                    <ul className="space-y-3">
                      {example.results.map((result, idx) => (
                        <li key={idx} className="text-sm flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Options */}
      <section className="py-24 bg-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Integration Options</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Flexible integration methods untuk berbagai arsitektur dan kebutuhan teknis
            </p>
          </div>
          
          <Tabs defaultValue="api" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="api">RESTful API</TabsTrigger>
              <TabsTrigger value="webhook">Webhooks</TabsTrigger>
              <TabsTrigger value="sdk">SDKs</TabsTrigger>
            </TabsList>
            
            {integrationOptions.map((option, index) => (
              <TabsContent key={index} value={option.type.toLowerCase().split(' ')[0]}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-semibold mb-4">{option.type}</h3>
                      <p className="text-muted-foreground text-lg mb-6">{option.description}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-4">Key Features:</h4>
                      <ul className="space-y-3">
                        {option.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Button className="mt-6">
                      View Documentation
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                  
                  <div className="bg-gray-900 rounded-lg p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-gray-300 text-sm">Sample Code</span>
                      <Code className="w-4 h-4 text-gray-400" />
                    </div>
                    <pre className="text-green-400 text-sm overflow-x-auto">
                      <code>{option.sampleCode}</code>
                    </pre>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Experience AI Document Processing?
          </h2>
          <p className="text-xl mb-10 opacity-90">
            Lihat sendiri bagaimana teknologi AI kami dapat mentransformasi 
            workflow pemrosesan dokumen di organisasi Anda.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" variant="secondary" className="px-10">
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="px-10 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Schedule Technical Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}