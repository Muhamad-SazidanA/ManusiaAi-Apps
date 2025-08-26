import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { 
  Handshake, 
  TrendingUp, 
  Users, 
  ArrowRight,
  CheckCircle,
  Network,
  Settings,
  Building2,
  Code,
  Award,
  Globe,
  Zap,
  Target,
  DollarSign,
  Star
} from 'lucide-react';
import { useTranslation } from './TranslationContext';
import { useRouter } from './Router';

export function PartnersSection() {
  const { t } = useTranslation();
  const { navigateTo } = useRouter();
  const partnershipOpportunities = [
    {
      title: "Technology Integration Partners",
      description: "Integrasikan solusi Anda dengan platform rangkum.ai untuk memberikan nilai tambah kepada pelanggan bersama.",
      icon: <Code className="w-8 h-8" />,
      opportunities: [
        "Pre-built connectors untuk ERP/CRM systems",
        "White-label document processing capabilities", 
        "Embedded AI processing dalam platform Anda",
        "Co-development untuk industry-specific solutions"
      ],
      benefits: [
        "Akses early ke new features dan APIs",
        "Technical support dan documentation prioritas",
        "Co-marketing opportunities dan joint case studies",
        "Revenue sharing dari customer referrals"
      ],
      ideal: "Software vendors, system integrators, consultants"
    },
    {
      title: "Reseller & Distribution Partners",
      description: "Perluas portfolio solusi Anda dengan menjadi reseller rangkum.ai di wilayah atau vertikal industri tertentu.",
      icon: <Building2 className="w-8 h-8" />,
      opportunities: [
        "Exclusive territory atau industry vertical rights",
        "White-label branding options",
        "Custom pricing dan packaging models",
        "Local language dan compliance support"
      ],
      benefits: [
        "Margin yang kompetitif dengan volume scaling",
        "Sales training dan certification programs",
        "Marketing development funds (MDF)",
        "Dedicated channel manager support"
      ],
      ideal: "VAR, distributors, consultants, regional players"
    },
    {
      title: "Strategic Alliance Partners",
      description: "Bentuk aliansi strategis untuk go-to-market bersama dan pengembangan solusi terintegrasi.",
      icon: <Handshake className="w-8 h-8" />,
      opportunities: [
        "Joint solution development dan packaging",
        "Co-innovation untuk emerging technologies",
        "Shared customer success programs",
        "Cross-training sales dan technical teams"
      ],
      benefits: [
        "Access ke customer base dan ecosystem",
        "Joint marketing campaigns dan events",
        "Preferred partner status dan visibility",
        "Strategic roadmap alignment"
      ],
      ideal: "Enterprise software companies, cloud providers, consultancies"
    }
  ];

  const partnerBenefits = [
    {
      category: "Business Growth",
      benefits: [
        {
          title: "Revenue Opportunities",
          description: "Multiple revenue streams melalui direct sales, referrals, dan value-added services",
          icon: <DollarSign className="w-6 h-6" />
        },
        {
          title: "Market Expansion", 
          description: "Akses ke new markets dan customer segments melalui AI document processing",
          icon: <Globe className="w-6 h-6" />
        },
        {
          title: "Competitive Advantage",
          description: "Differentiate solusi Anda dengan advanced AI capabilities",
          icon: <Target className="w-6 h-6" />
        }
      ]
    },
    {
      category: "Technical Support",
      benefits: [
        {
          title: "Comprehensive APIs",
          description: "RESTful APIs dengan documentation lengkap dan SDKs untuk major languages",
          icon: <Code className="w-6 h-6" />
        },
        {
          title: "Integration Support",
          description: "Dedicated technical team untuk membantu integration dan troubleshooting",
          icon: <Settings className="w-6 h-6" />
        },
        {
          title: "Training & Certification",
          description: "Technical training programs dan partner certification paths",
          icon: <Award className="w-6 h-6" />
        }
      ]
    },
    {
      category: "Marketing & Sales",
      benefits: [
        {
          title: "Co-Marketing Programs",
          description: "Joint marketing campaigns, events, dan content collaboration",
          icon: <Network className="w-6 h-6" />
        },
        {
          title: "Sales Enablement",
          description: "Sales tools, training materials, dan demo environments",
          icon: <Users className="w-6 h-6" />
        },
        {
          title: "Lead Generation",
          description: "Qualified leads sharing dan referral programs",
          icon: <TrendingUp className="w-6 h-6" />
        }
      ]
    }
  ];

  const partnerTypes = [
    {
      type: "Technology Partners",
      description: "Software companies yang mengintegrasikan rangkum.ai ke dalam platform mereka",
      requirements: [
        "Existing software platform atau SaaS solution",
        "Technical team untuk integration development", 
        "Customer base yang membutuhkan document processing",
        "Commitment untuk long-term partnership"
      ],
      benefits: [
        "Access ke advanced AI document processing",
        "Increase platform value proposition",
        "New revenue streams dari enhanced features",
        "Technical support untuk integration"
      ],
      examples: ["ERP vendors", "CRM platforms", "Workflow automation tools", "Industry-specific software"],
      applicationProcess: [
        "Submit partnership application form",
        "Technical compatibility assessment",
        "Business case review dan approval",
        "Integration development dan testing",
        "Go-to-market planning dan launch"
      ]
    },
    {
      type: "Reseller Partners",
      description: "Perusahaan yang menjual rangkum.ai sebagai bagian dari portfolio solusi mereka",
      requirements: [
        "Established sales team dan customer relationships",
        "Experience dengan enterprise software sales",
        "Understanding document processing market",
        "Commitment untuk sales targets"
      ],
      benefits: [
        "Competitive margins dengan volume scaling",
        "Exclusive territory opportunities",
        "Sales training dan certification",
        "Marketing development funds"
      ],
      examples: ["System integrators", "Consulting firms", "Regional VARs", "Industry specialists"],
      applicationProcess: [
        "Partner application submission",
        "Sales capability assessment",
        "Reference checks dan background verification",
        "Contract negotiation dan signing", 
        "Sales training dan onboarding"
      ]
    },
    {
      type: "System Integrators",
      description: "Professional services firms yang mengimplementasikan rangkum.ai untuk enterprise customers",
      requirements: [
        "Proven track record dalam enterprise implementations",
        "Technical team dengan integration expertise",
        "Industry knowledge dan customer relationships",
        "Capability untuk provide ongoing support"
      ],
      benefits: [
        "Certified implementation methodology",
        "Technical training dan support",
        "Customer success programs",
        "Preferred partner recognition"
      ],
      examples: ["Digital transformation consultants", "Enterprise architects", "Industry specialists", "Big 4 consulting"],
      applicationProcess: [
        "SI partnership application",
        "Capability dan experience review",
        "Technical certification process",
        "Customer success case development",
        "Ongoing partnership management"
      ]
    }
  ];

  return (
    <section 
      id="partners" 
      className="section-padding bg-accent/10"
      aria-labelledby="partners-title"
    >
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-20">
          <Badge variant="secondary" className="mb-6 px-4 py-2">
            <Network className="w-4 h-4 mr-2" />
            Ekosistem Partner
          </Badge>
          <h2 
            id="partners-title"
            className="text-4xl sm:text-5xl font-bold text-foreground mb-8 leading-tight"
          >
            {t('partners.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            {t('partners.subtitle')}
          </p>
        </div>

        {/* Partnership Opportunities */}
        <div className="mb-24" id="partnership-opportunities">
          <h3 className="text-3xl font-semibold text-center mb-16">
            {t('partners.opportunities.title')}
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {partnershipOpportunities.map((opportunity, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6">
                    {opportunity.icon}
                  </div>
                  <CardTitle className="text-xl">{opportunity.title}</CardTitle>
                  <CardDescription className="text-base">
                    {opportunity.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h5 className="font-semibold mb-3">Peluang Kolaborasi:</h5>
                    <ul className="space-y-2">
                      {opportunity.opportunities.map((item, idx) => (
                        <li key={idx} className="text-sm flex items-start">
                          <Zap className="w-4 h-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="font-semibold mb-3">Manfaat Partner:</h5>
                    <ul className="space-y-2">
                      {opportunity.benefits.map((benefit, idx) => (
                        <li key={idx} className="text-sm flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="pt-4 border-t">
                    <p className="text-sm text-muted-foreground">
                      <strong>Ideal untuk:</strong> {opportunity.ideal}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Partner Benefits */}
        <div className="mb-24" id="partner-benefits">
          <h3 className="text-3xl font-semibold text-center mb-16">
            Manfaat Menjadi Mitra
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {partnerBenefits.map((category, index) => (
              <div key={index}>
                <h4 className="text-xl font-semibold mb-8 text-center">{category.category}</h4>
                <div className="space-y-6">
                  {category.benefits.map((benefit, idx) => (
                    <Card key={idx} className="p-6 hover:shadow-lg transition-shadow">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                          {benefit.icon}
                        </div>
                        <div>
                          <h5 className="font-semibold mb-2">{benefit.title}</h5>
                          <p className="text-sm text-muted-foreground">{benefit.description}</p>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Partner Types */}
        <div className="mb-20" id="partner-types">
          <h3 className="text-3xl font-semibold text-center mb-16">
            Jenis Mitra
          </h3>
          
          <Tabs defaultValue="technology" className="w-full">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 mb-12">
              <TabsTrigger value="technology">Technology Partners</TabsTrigger>
              <TabsTrigger value="reseller">Reseller Partners</TabsTrigger>
              <TabsTrigger value="integrator">System Integrators</TabsTrigger>
            </TabsList>

            {partnerTypes.map((partner, index) => (
              <TabsContent key={index} value={partner.type.toLowerCase().split(' ')[0]}>
                <Card className="p-10">
                  <div className="grid grid-cols-1 xl:grid-cols-2 gap-12">
                    {/* Left Column */}
                    <div className="space-y-8">
                      <div>
                        <h4 className="text-2xl font-semibold mb-4">{partner.type}</h4>
                        <p className="text-lg text-muted-foreground">{partner.description}</p>
                      </div>

                      <div>
                        <h5 className="font-semibold mb-4 flex items-center">
                          <Target className="w-5 h-5 mr-2 text-primary" />
                          Requirements
                        </h5>
                        <ul className="space-y-3">
                          {partner.requirements.map((req, idx) => (
                            <li key={idx} className="flex items-start">
                              <CheckCircle className="w-4 h-4 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                              <span className="text-sm">{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h5 className="font-semibold mb-4 flex items-center">
                          <Star className="w-5 h-5 mr-2 text-green-500" />
                          Key Benefits
                        </h5>
                        <ul className="space-y-3">
                          {partner.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-start">
                              <TrendingUp className="w-4 h-4 text-green-500 mr-3 mt-1 flex-shrink-0" />
                              <span className="text-sm">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-8">
                      <div>
                        <h5 className="font-semibold mb-4">Contoh Partner:</h5>
                        <div className="grid grid-cols-2 gap-3">
                          {partner.examples.map((example, idx) => (
                            <div key={idx} className="p-3 bg-accent/30 rounded-lg text-center">
                              <span className="text-sm font-medium">{example}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="bg-gradient-to-br from-primary/5 to-accent/10 rounded-xl p-6">
                        <h5 className="font-semibold mb-4">Application Process:</h5>
                        <div className="space-y-4">
                          {partner.applicationProcess.map((step, idx) => (
                            <div key={idx} className="flex items-start">
                              <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs mr-3 mt-0.5">
                                {idx + 1}
                              </div>
                              <span className="text-sm">{step}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <Button className="w-full" size="lg">
                        Apply as {partner.type}
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-white rounded-3xl p-16 shadow-xl">
          <Handshake className="w-16 h-16 text-primary mx-auto mb-6" />
          <h3 className="text-3xl font-semibold mb-6">
            Siap Membangun Masa Depan Bersama?
          </h3>
          <p className="text-lg text-muted-foreground mb-10 max-w-3xl mx-auto">
            Bergabunglah dengan ecosystem partner rangkum.ai dan bangun solusi AI document processing 
            terdepan untuk customer di seluruh Indonesia dan Asia.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              size="lg" 
              className="px-10 py-4 text-lg shadow-lg"
              onClick={() => navigateTo('partner-registration')}
            >
              {t('partners.cta.register')}
              <ArrowRight className="w-6 h-6 ml-3" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="px-10 py-4 text-lg border-2"
              onClick={() => navigateTo('partner-kit')}
            >
              {t('partners.cta.download_kit')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}