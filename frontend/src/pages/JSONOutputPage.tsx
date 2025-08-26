import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { useTranslation } from '../TranslationContext';
import { 
  FileJson, 
  CheckCircle, 
  ArrowRight,
  Code,
  Database,
  Workflow,
  Settings,
  Zap,
  Shield,
  Globe,
  Clock,
  Target,
  Copy,
  Download,
  ExternalLink,
  GitBranch,
  Layers,
  Network
} from 'lucide-react';

export function JSONOutputPage() {
  const { t } = useTranslation();

  const jsonFeatures = [
    {
      title: 'Standardized Schema',
      description: 'Konsisten JSON structure untuk semua jenis dokumen',
      icon: <Layers className="w-8 h-8" />,
      details: [
        'Predefined schema untuk common document types',
        'Custom schema definition untuk specific use cases',
        'Backwards compatibility untuk schema updates',
        'Validation rules dan error handling'
      ]
    },
    {
      title: 'Confidence Scoring',
      description: 'Skor kepercayaan untuk setiap extracted field',
      icon: <Target className="w-8 h-8" />,
      details: [
        'Field-level confidence scores (0-100%)',
        'Document-level quality assessment',
        'Flagging untuk low-confidence extractions',
        'Quality thresholds yang configurable'
      ]
    },
    {
      title: 'Rich Metadata',
      description: 'Comprehensive metadata untuk tracking dan audit',
      icon: <Database className="w-8 h-8" />,
      details: [
        'Processing timestamps dan duration',
        'Model version dan processing method used',
        'Source document information',
        'Error logs dan debugging information'
      ]
    },
    {
      title: 'Enterprise Integration',
      description: 'Ready untuk enterprise system integration',
      icon: <Network className="w-8 h-8" />,
      details: [
        'RESTful API dengan OpenAPI spec',
        'Webhook notifications untuk async processing',
        'Batch processing untuk high volume',
        'Rate limiting dan throttling controls'
      ]
    }
  ];

  const sampleResponses = {
    invoice: {
      title: 'Invoice Processing Response',
      description: 'Standard response untuk invoice document processing',
      json: `{
  "document_id": "inv_12345",
  "status": "completed",
  "processing_time_ms": 2847,
  "confidence_score": 98.5,
  "extracted_data": {
    "document_type": "invoice",
    "invoice_number": "INV-2024-001",
    "invoice_date": "2024-01-15",
    "due_date": "2024-02-15",
    "vendor": {
      "name": "PT Supplier Indonesia",
      "address": "Jl. Sudirman No. 123, Jakarta",
      "tax_id": "01.234.567.8-901.000",
      "confidence": 99.2
    },
    "customer": {
      "name": "PT Customer Solutions",
      "address": "Jl. Thamrin No. 456, Jakarta", 
      "confidence": 97.8
    },
    "line_items": [
      {
        "description": "Consulting Services",
        "quantity": 1,
        "unit_price": 15000000,
        "total": 15000000,
        "confidence": 98.9
      }
    ],
    "totals": {
      "subtotal": 15000000,
      "tax_amount": 1500000,
      "total_amount": 16500000,
      "confidence": 99.5
    }
  },
  "metadata": {
    "model_version": "v2.1.3",
    "processed_at": "2024-01-15T10:30:45Z",
    "file_type": "pdf",
    "page_count": 1,
    "language_detected": "id"
  }
}`
    },
    kyc: {
      title: 'KYC Document Response',
      description: 'Response untuk Indonesian ID card (KTP) processing',
      json: `{
  "document_id": "kyc_67890",
  "status": "completed", 
  "processing_time_ms": 1523,
  "confidence_score": 99.1,
  "extracted_data": {
    "document_type": "ktp",
    "nik": "3171234567891234",
    "name": "BUDI SANTOSO",
    "birth_place": "JAKARTA",
    "birth_date": "1985-03-15",
    "gender": "LAKI-LAKI",
    "blood_type": "O",
    "address": "JL. MERDEKA NO. 123 RT/RW 001/002",
    "village": "MENTENG",
    "district": "MENTENG", 
    "city": "JAKARTA PUSAT",
    "province": "DKI JAKARTA",
    "religion": "ISLAM",
    "marital_status": "KAWIN",
    "occupation": "KARYAWAN SWASTA",
    "nationality": "WNI",
    "valid_until": "SEUMUR HIDUP",
    "confidence_scores": {
      "nik": 99.8,
      "name": 98.9,
      "address": 97.2,
      "birth_date": 99.5
    }
  },
  "verification": {
    "document_authenticity": 98.7,
    "face_match_score": 96.4,
    "tampering_detected": false
  },
  "metadata": {
    "model_version": "kyc_v1.8.2",
    "processed_at": "2024-01-15T10:32:18Z",
    "ocr_method": "deep_learning",
    "image_quality": "high"
  }
}`
    },
    purchase_order: {
      title: 'Purchase Order Response',
      description: 'Standard response untuk purchase order document',
      json: `{
  "document_id": "po_54321",
  "status": "completed",
  "processing_time_ms": 3241,
  "confidence_score": 97.8,
  "extracted_data": {
    "document_type": "purchase_order",
    "po_number": "PO-2024-0015",
    "po_date": "2024-01-12",
    "delivery_date": "2024-01-25",
    "buyer": {
      "company": "PT Pembeli Utama",
      "contact_person": "John Doe",
      "email": "john.doe@pembeli.com",
      "phone": "+62 21-1234-5678",
      "confidence": 98.3
    },
    "supplier": {
      "company": "PT Supplier Terpercaya",
      "contact_person": "Jane Smith", 
      "email": "jane@supplier.com",
      "confidence": 97.1
    },
    "items": [
      {
        "item_code": "ITM-001",
        "description": "Laptop Dell Inspiron 15",
        "quantity": 10,
        "unit_price": 8500000,
        "total_price": 85000000,
        "confidence": 98.7
      },
      {
        "item_code": "ITM-002", 
        "description": "Mouse Wireless Logitech",
        "quantity": 10,
        "unit_price": 350000,
        "total_price": 3500000,
        "confidence": 99.1
      }
    ],
    "terms": {
      "payment_terms": "NET 30",
      "shipping_terms": "FOB Destination",
      "total_amount": 88500000,
      "confidence": 98.9
    }
  },
  "validation": {
    "required_fields_present": true,
    "pricing_calculation_valid": true,
    "format_compliance": true
  },
  "metadata": {
    "model_version": "po_v1.4.1",
    "processed_at": "2024-01-12T14:20:33Z",
    "processing_method": "hybrid_ai",
    "complexity_score": "medium"
  }
}`
    }
  };

  const integrationExamples = [
    {
      system: 'SAP ERP',
      description: 'Direct integration dengan SAP untuk automated posting',
      steps: [
        'Extract invoice data via rangkum.ai API',
        'Map JSON fields ke SAP document structure',
        'Validate data dengan business rules',
        'Auto-post ke SAP FI module'
      ],
      code: `# SAP Integration Example
import requests
from sap_connector import SAPClient

# Process document
response = requests.post(
    'https://api.rangkum.ai/v1/process',
    headers={'Authorization': 'Bearer YOUR_API_KEY'},
    json={'document_url': invoice_url}
)

# Extract and map data
invoice_data = response.json()['extracted_data']
sap_document = map_to_sap_format(invoice_data)

# Post to SAP
sap_client = SAPClient()
sap_client.create_invoice(sap_document)`
    },
    {
      system: 'Microsoft Dynamics',
      description: 'Integration dengan Dynamics 365 untuk procurement workflow',
      steps: [
        'Process PO documents automatically',
        'Create vendor master data dari extracted info', 
        'Generate purchase requisitions',
        'Trigger approval workflows'
      ],
      code: `// Dynamics 365 Integration
const response = await fetch('https://api.rangkum.ai/v1/process', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({document_url: poUrl})
});

const poData = await response.json();
await dynamics.createPurchaseOrder({
  vendor: poData.extracted_data.supplier,
  items: poData.extracted_data.items,
  terms: poData.extracted_data.terms
});`
    },
    {
      system: 'Custom RPA Workflow',
      description: 'Integration dengan UiPath/Automation Anywhere untuk end-to-end automation',
      steps: [
        'Monitor folder untuk new documents',
        'Send ke rangkum.ai untuk processing',
        'Validate extracted data dengan business logic',
        'Update multiple downstream systems'
      ],
      code: `# RPA Workflow Integration
def process_document_batch(folder_path):
    for file_path in monitor_folder(folder_path):
        # Upload and process
        result = rangkum_client.process_document(file_path)
        
        # Validate business rules
        if validate_business_rules(result.extracted_data):
            # Update ERP
            erp_client.create_record(result.extracted_data)
            # Update CRM  
            crm_client.update_customer(result.extracted_data)
            # Archive document
            archive_document(file_path)
        else:
            queue_for_manual_review(file_path, result)`
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-6 px-4 py-2">
              <FileJson className="w-4 h-4 mr-2" />
              JSON API Output
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-8 leading-tight">
              JSON API Output<br />Siap Integrasi
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
              Structured JSON output yang konsisten dan standardized untuk easy integration 
              ke ERP, CRM, RPA, dan sistem enterprise apapun. Complete dengan confidence scores, 
              metadata, dan validation untuk production-ready automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-8">
                View Live API Demo
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" size="lg" className="px-8">
                Download API Documentation
                <Download className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">JSON Output Features</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Enterprise-grade JSON structure dengan semua information yang dibutuhkan untuk automation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {jsonFeatures.map((feature, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 p-8">
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground mb-4">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start text-sm">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          {detail}
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

      {/* Sample JSON Responses */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Sample JSON Responses</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real examples dari JSON output untuk common document types
            </p>
          </div>
          
          <Tabs defaultValue="invoice" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="invoice">Invoice</TabsTrigger>
              <TabsTrigger value="kyc">KYC Documents</TabsTrigger>
              <TabsTrigger value="purchase_order">Purchase Orders</TabsTrigger>
            </TabsList>
            
            {Object.entries(sampleResponses).map(([key, sample]) => (
              <TabsContent key={key} value={key}>
                <Card className="overflow-hidden">
                  <CardHeader className="bg-gray-900 text-white">
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle>{sample.title}</CardTitle>
                        <CardDescription className="text-gray-300">
                          {sample.description}
                        </CardDescription>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="secondary" size="sm">
                          <Copy className="w-4 h-4 mr-2" />
                          Copy
                        </Button>
                        <Button variant="secondary" size="sm">
                          <Download className="w-4 h-4 mr-2" />
                          Download
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="bg-gray-900 text-green-400 p-6 overflow-x-auto">
                      <pre className="text-sm">
                        <code>{sample.json}</code>
                      </pre>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Integration Examples */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Integration Examples</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real-world examples integrasi JSON output ke popular enterprise systems
            </p>
          </div>
          
          <div className="space-y-12">
            {integrationExamples.map((example, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className="p-8">
                    <h3 className="text-2xl font-semibold mb-4">{example.system}</h3>
                    <p className="text-muted-foreground mb-6">{example.description}</p>
                    
                    <h4 className="font-semibold mb-4">Integration Steps:</h4>
                    <ol className="space-y-3 mb-6">
                      {example.steps.map((step, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm mr-3 mt-0.5">
                            {idx + 1}
                          </span>
                          <span className="text-sm">{step}</span>
                        </li>
                      ))}
                    </ol>
                    
                    <Button variant="outline">
                      View Full Integration Guide
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                  
                  <div className="bg-gray-900 p-6 lg:p-8">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-gray-300 text-sm">Sample Integration Code</span>
                      <Code className="w-4 h-4 text-gray-400" />
                    </div>
                    <pre className="text-green-400 text-sm overflow-x-auto">
                      <code>{example.code}</code>
                    </pre>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* API Performance Metrics */}
      <section className="py-24 bg-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">API Performance & Reliability</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Enterprise-grade performance metrics dan reliability guarantees
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <Clock className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-primary mb-2">&lt; 2s</div>
              <div className="text-sm text-muted-foreground">Average API Response Time</div>
              <div className="text-xs text-muted-foreground mt-2">P95: &lt; 5s, P99: &lt; 10s</div>
            </Card>
            
            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <Shield className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
              <div className="text-sm text-muted-foreground">Uptime SLA</div>
              <div className="text-xs text-muted-foreground mt-2">24/7 monitoring & alerts</div>
            </Card>
            
            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <Zap className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-primary mb-2">10K</div>
              <div className="text-sm text-muted-foreground">Requests per Minute</div>
              <div className="text-xs text-muted-foreground mt-2">Auto-scaling available</div>
            </Card>
            
            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <Globe className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-primary mb-2">5</div>
              <div className="text-sm text-muted-foreground">Global Regions</div>
              <div className="text-xs text-muted-foreground mt-2">Low latency worldwide</div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Integrate JSON API?
          </h2>
          <p className="text-xl mb-10 opacity-90">
            Start building dengan comprehensive API documentation dan interactive examples. 
            Dapatkan API key dan mulai testing dalam 5 menit.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" variant="secondary" className="px-10">
              Get API Key
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="px-10 border-white text-white hover:bg-white hover:text-blue-600">
              View API Documentation
              <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}