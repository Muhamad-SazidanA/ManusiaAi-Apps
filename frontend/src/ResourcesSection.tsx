import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { 
  BookOpen, 
  FileText, 
  Video, 
  Code, 
  HelpCircle, 
  Download,
  Calendar,
  Clock,
  ArrowRight,
  ExternalLink,
  Lightbulb,
  TrendingUp,
  Users,
  Play,
  Eye,
  MessageSquare,
  CheckCircle
} from 'lucide-react';

import { useTranslation } from './TranslationContext';
import { useRouter } from './Router';

export function ResourcesSection() {
  const { t } = useTranslation();
  const { navigateTo } = useRouter();
  const blogPosts = [
    {
      title: "Masa Depan Intelligent Document Processing: Melampaui OCR Tradisional",
      excerpt: "Jelajahi bagaimana AI-powered document processing merevolusi workflow bisnis dan menetapkan standar baru untuk akurasi dan efisiensi di Indonesia.",
      category: "Industry Insights",
      readTime: "8 menit baca",
      date: "15 Des 2024",
      featured: true,
      views: "2.5K",
      comments: 18
    },
    {
      title: "Implementasi Document AI di Perbankan Indonesia: Panduan Lengkap",
      excerpt: "Panduan step-by-step untuk institusi keuangan yang ingin mengautomasi loan processing dan KYC compliance dengan AI.",
      category: "Implementation Guide",
      readTime: "12 menit baca",
      date: "10 Des 2024",
      featured: false,
      views: "1.8K",
      comments: 24
    },
    {
      title: "ROI Calculator: Mengukur Kesuksesan Automasi Document Processing",
      excerpt: "Pelajari cara menghitung dan mendemonstrasikan return on investment dari initiative automasi document processing.",
      category: "Business Case",
      readTime: "6 menit baca",
      date: "5 Des 2024",
      featured: false,
      views: "3.1K",
      comments: 12
    },
    {
      title: "Best Practices Integrasi API untuk Document Processing",
      excerpt: "Panduan teknis covering authentication, error handling, dan strategi optimasi untuk document processing APIs.",
      category: "Technical Guide",
      readTime: "10 menit baca",
      date: "28 Nov 2024",
      featured: false,
      views: "1.2K",
      comments: 8
    },
    {
      title: "Compliance & Security dalam AI Document Processing",
      excerpt: "Deep dive into framework keamanan, compliance requirements, dan best practices untuk handling sensitive documents.",
      category: "Security",
      readTime: "15 menit baca",
      date: "20 Nov 2024",
      featured: false,
      views: "2.8K",
      comments: 31
    }
  ];

  const caseStudies = [
    {
      title: "Bank Mandiri: Transformasi Digital Loan Processing",
      industry: "Perbankan",
      company: "Bank Mandiri",
      challenge: "Pemrosesan aplikasi kredit manual memakan waktu 2 minggu dengan tingkat error tinggi",
      solution: "Implementasi end-to-end automation untuk document verification dan risk assessment",
      results: [
        "Waktu pemrosesan turun 85% (14 hari → 2 hari)",
        "Kapasitas pemrosesan meningkat 300%",
        "Customer satisfaction +45%",
        "ROI 420% dalam 12 bulan"
      ],
      downloadCount: "1.2K",
      category: "Banking Success"
    },
    {
      title: "Astra International: Supply Chain Documentation Automation",
      industry: "Manufaktur",
      company: "PT Astra International",
      challenge: "Manual quality control documentation di 20+ fasilitas global",
      solution: "Standardisasi QC processing dengan automated compliance monitoring",
      results: [
        "QC reporting time -85%",
        "100% supplier compliance automation",
        "Quality incidents -75%",
        "Manufacturing efficiency +40%"
      ],
      downloadCount: "890",
      category: "Manufacturing Excellence"
    },
    {
      title: "RS Siloam: Healthcare Document Digitalization",
      industry: "Kesehatan", 
      company: "Siloam Hospitals Group",
      challenge: "Paper-based medical records di 50+ lokasi rumah sakit",
      solution: "HIPAA-compliant medical records digitization dengan searchable database",
      results: [
        "Patient registration: 30 menit → 5 menit",
        "Medical records accessibility 100%",
        "Administrative cost -60%",
        "Staff productivity +40%"
      ],
      downloadCount: "756",
      category: "Healthcare Innovation"
    }
  ];

  const whitepapers = [
    {
      title: "Panduan Enterprise untuk AI-Powered Document Processing",
      description: "Analisis komprehensif market trends, technology capabilities, dan strategi implementasi untuk enterprise document automation di Indonesia.",
      pages: "32 halaman",
      format: "PDF",
      category: "Strategy Guide",
      downloadCount: "3.2K",
      language: "Bahasa Indonesia"
    },
    {
      title: "Security & Compliance dalam Document AI",
      description: "Deep dive into security frameworks, compliance requirements, dan best practices untuk handling sensitive documents dengan AI di Indonesia.",
      pages: "24 halaman", 
      format: "PDF",
      category: "Security",
      downloadCount: "2.1K",
      language: "Bahasa Indonesia"
    },
    {
      title: "Benchmarking Document Processing Solutions 2024",
      description: "Independent comparison dari leading document processing platforms, featuring performance metrics dan capability analysis untuk market Indonesia.",
      pages: "18 halaman",
      format: "PDF", 
      category: "Market Research",
      downloadCount: "1.8K",
      language: "Bahasa Indonesia & English"
    },
    {
      title: "ROI Framework: Document Processing Automation",
      description: "Framework praktis untuk menghitung, mengukur, dan memaksimalkan ROI dari initiative document processing automation.",
      pages: "16 halaman",
      format: "PDF",
      category: "Business Case",
      downloadCount: "2.7K",
      language: "Bahasa Indonesia"
    }
  ];

  const webinars = [
    {
      title: "AI Document Processing: Transformasi Digital untuk Perbankan Indonesia",
      description: "Webinar khusus untuk industry perbankan tentang implementasi AI document processing untuk loan origination dan KYC compliance.",
      duration: "45 menit",
      date: "18 Januari 2025",
      time: "14:00 WIB",
      speaker: "Dr. Sarah Wijaya, Head of Digital Banking",
      registeredCount: 1250,
      status: "upcoming",
      category: "Industry Focus"
    },
    {
      title: "Best Practices: Implementasi Document AI di Enterprise",
      description: "Session praktis covering planning, implementation, dan optimization strategies untuk large-scale document processing projects.",
      duration: "60 menit", 
      date: "25 Januari 2025",
      time: "10:00 WIB",
      speaker: "Michael Santoso, Solutions Architect",
      registeredCount: 890,
      status: "upcoming",
      category: "Technical Deep Dive"
    },
    {
      title: "Healthcare Digital Transformation dengan AI Document Processing",
      description: "Khusus untuk healthcare professionals: digitalisasi medical records, claims processing, dan compliance automation.",
      duration: "50 menit",
      date: "10 Desember 2024", 
      time: "15:00 WIB",
      speaker: "Dr. Jennifer Kusuma, Healthcare CTO",
      viewCount: 2340,
      status: "recorded",
      category: "Healthcare"
    },
    {
      title: "Manufacturing Excellence: Quality Control Automation",
      description: "Session untuk manufacturing industry tentang automasi quality documentation dan supply chain compliance.",
      duration: "40 menit",
      date: "28 November 2024",
      time: "13:00 WIB", 
      speaker: "Budi Rahardjo, Manufacturing Director",
      viewCount: 1560,
      status: "recorded",
      category: "Manufacturing"
    }
  ];

  const documentation = [
    {
      title: "Getting Started Guide",
      description: "Panduan quick start untuk setup document processing workflow pertama Anda dengan rangkum.ai",
      category: "Basics",
      icon: <BookOpen className="w-5 h-5" />,
      estimatedTime: "15 menit"
    },
    {
      title: "API Reference Documentation",
      description: "Complete API documentation dengan examples dan code samples untuk semua programming languages",
      category: "Technical",
      icon: <Code className="w-5 h-5" />,
      estimatedTime: "30 menit"
    },
    {
      title: "Integration Tutorials",
      description: "Step-by-step tutorials untuk popular integrations dan use cases dengan sistem enterprise",
      category: "Tutorials", 
      icon: <Video className="w-5 h-5" />,
      estimatedTime: "45 menit"
    },
    {
      title: "SDK Documentation",
      description: "Comprehensive guides untuk menggunakan rangkum.ai SDKs dalam Python, Node.js, Java, dan .NET",
      category: "Development",
      icon: <Code className="w-5 h-5" />,
      estimatedTime: "60 menit"
    },
    {
      title: "Best Practices Guide", 
      description: "Optimization tips dan recommended patterns untuk production deployments dan scaling",
      category: "Advanced",
      icon: <Lightbulb className="w-5 h-5" />,
      estimatedTime: "25 menit"
    },
    {
      title: "Troubleshooting Guide",
      description: "Common issues, error codes, dan solutions untuk development dan production environments",
      category: "Support",
      icon: <HelpCircle className="w-5 h-5" />,
      estimatedTime: "20 menit"
    }
  ];

  return (
    <section 
      id="resources" 
      className="section-padding bg-white"
      aria-labelledby="resources-title"
    >
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-20">
          <Badge variant="secondary" className="mb-6 px-4 py-2">
            <BookOpen className="w-4 h-4 mr-2" />
            Knowledge Hub
          </Badge>
          <h2 
            id="resources-title"
            className="text-4xl sm:text-5xl font-bold text-foreground mb-8 leading-tight"
          >
            {t('resources.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            {t('resources.subtitle')}
          </p>
        </div>

        {/* Resource Tabs */}
        <Tabs defaultValue="blog" className="w-full mb-16">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-12">
            <TabsTrigger value="blog" className="flex items-center space-x-2">
              <FileText className="w-4 h-4" />
              <span>Blog</span>
            </TabsTrigger>
            <TabsTrigger value="case-studies" className="flex items-center space-x-2">
              <TrendingUp className="w-4 h-4" />
              <span>Studi Kasus</span>
            </TabsTrigger>
            <TabsTrigger value="whitepapers" className="flex items-center space-x-2">
              <Download className="w-4 h-4" />
              <span>Whitepaper</span>
            </TabsTrigger>
            <TabsTrigger value="webinars" className="flex items-center space-x-2">
              <Video className="w-4 h-4" />
              <span>Webinar</span>
            </TabsTrigger>
          </TabsList>

          {/* Blog Content */}
          <TabsContent value="blog" id="blog">
            <div className="space-y-8">
              {/* Featured Post */}
              <Card className="hover:shadow-lg transition-shadow duration-300 overflow-hidden border-2 border-primary/20">
                <div className="flex flex-col lg:flex-row">
                  <div className="lg:w-1/3 bg-gradient-to-br from-primary/10 to-accent/20 p-8 flex items-center justify-center">
                    <TrendingUp className="w-16 h-16 text-primary" />
                  </div>
                  <div className="lg:w-2/3 p-8">
                    <div className="flex items-center space-x-4 mb-4">
                      <Badge>Featured</Badge>
                      <Badge variant="outline">{blogPosts[0].category}</Badge>
                    </div>
                    <h3 className="text-2xl font-semibold mb-3 hover:text-primary transition-colors cursor-pointer">
                      {blogPosts[0].title}
                    </h3>
                    <p className="text-muted-foreground mb-6">{blogPosts[0].excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                        <span className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {blogPosts[0].date}
                        </span>
                        <span className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {blogPosts[0].readTime}
                        </span>
                        <span className="flex items-center">
                          <Eye className="w-4 h-4 mr-1" />
                          {blogPosts[0].views}
                        </span>
                        <span className="flex items-center">
                          <MessageSquare className="w-4 h-4 mr-1" />
                          {blogPosts[0].comments}
                        </span>
                      </div>
                      <Button variant="ghost" size="sm">
                        Baca Selengkapnya
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Other Posts Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {blogPosts.slice(1).map((post, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow duration-300 cursor-pointer group">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-3">
                        <Badge variant="outline">{post.category}</Badge>
                        <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                          <Eye className="w-3 h-3" />
                          <span>{post.views}</span>
                        </div>
                      </div>
                      <CardTitle className="text-lg group-hover:text-primary transition-colors">
                        {post.title}
                      </CardTitle>
                      <CardDescription>{post.excerpt}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <div className="flex items-center space-x-4">
                          <span className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {post.date}
                          </span>
                          <span className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {post.readTime}
                          </span>
                        </div>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Case Studies Content */}
          <TabsContent value="case-studies" id="case-studies">
            <div className="space-y-8">
              {caseStudies.map((study, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 cursor-pointer group overflow-hidden">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8">
                    {/* Case Study Content */}
                    <div className="lg:col-span-2 space-y-6">
                      <div>
                        <div className="flex items-center space-x-4 mb-4">
                          <Badge variant="outline">{study.industry}</Badge>
                          <Badge variant="secondary">{study.category}</Badge>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Download className="w-4 h-4 mr-1" />
                            {study.downloadCount} downloads
                          </div>
                        </div>
                        <h4 className="text-xl font-semibold group-hover:text-primary transition-colors mb-3">
                          {study.title}
                        </h4>
                        <p className="text-sm text-muted-foreground mb-4">{study.company}</p>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <h5 className="font-semibold text-sm mb-2">Tantangan:</h5>
                          <p className="text-sm text-muted-foreground">{study.challenge}</p>
                        </div>
                        
                        <div>
                          <h5 className="font-semibold text-sm mb-2">Solusi:</h5>
                          <p className="text-sm text-muted-foreground">{study.solution}</p>
                        </div>
                      </div>
                    </div>

                    {/* Results Sidebar */}
                    <div className="lg:col-span-1 bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-6">
                      <h5 className="font-semibold mb-4 flex items-center text-green-700">
                        <TrendingUp className="w-4 h-4 mr-2" />
                        Hasil Terukur
                      </h5>
                      <ul className="space-y-3 mb-6">
                        {study.results.map((result, resultIndex) => (
                          <li key={resultIndex} className="flex items-start text-sm">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                            {result}
                          </li>
                        ))}
                      </ul>
                      <Button className="w-full group-hover:bg-primary/90 transition-colors">
                        Download Studi Kasus
                        <Download className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Whitepapers Content */}
          <TabsContent value="whitepapers" id="whitepapers">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {whitepapers.map((paper, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
                      <Download className="w-6 h-6" />
                    </div>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline">{paper.category}</Badge>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Download className="w-4 h-4 mr-1" />
                        {paper.downloadCount}
                      </div>
                    </div>
                    <CardTitle className="text-lg">{paper.title}</CardTitle>
                    <CardDescription>{paper.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <span>{paper.pages}</span>
                        <span>{paper.format}</span>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        <strong>Bahasa:</strong> {paper.language}
                      </div>
                      <Button className="w-full">
                        Download Gratis
                        <Download className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Webinars Content */}
          <TabsContent value="webinars" id="webinars">
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {webinars.map((webinar, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-4">
                        <Badge variant={webinar.status === 'upcoming' ? 'default' : 'secondary'}>
                          {webinar.status === 'upcoming' ? 'Upcoming' : 'Recorded'}
                        </Badge>
                        <Badge variant="outline">{webinar.category}</Badge>
                      </div>
                      <CardTitle className="text-lg">{webinar.title}</CardTitle>
                      <CardDescription>{webinar.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="text-muted-foreground">Durasi:</span>
                            <p className="font-medium">{webinar.duration}</p>
                          </div>
                          <div>
                            <span className="text-muted-foreground">Speaker:</span>
                            <p className="font-medium">{webinar.speaker}</p>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="text-muted-foreground">Tanggal:</span>
                            <p className="font-medium">{webinar.date}</p>
                          </div>
                          <div>
                            <span className="text-muted-foreground">Waktu:</span>
                            <p className="font-medium">{webinar.time}</p>
                          </div>
                        </div>

                        {webinar.status === 'upcoming' && (
                          <div className="text-sm text-muted-foreground">
                            <Users className="w-4 h-4 inline mr-1" />
                            {webinar.registeredCount} terdaftar
                          </div>
                        )}

                        {webinar.status === 'recorded' && (
                          <div className="text-sm text-muted-foreground">
                            <Eye className="w-4 h-4 inline mr-1" />
                            {webinar.viewCount} views
                          </div>
                        )}

                        <Button className="w-full">
                          {webinar.status === 'upcoming' ? (
                            <>
                              <Calendar className="w-4 h-4 mr-2" />
                              Daftar Sekarang
                            </>
                          ) : (
                            <>
                              <Play className="w-4 h-4 mr-2" />
                              Tonton Recording
                            </>
                          )}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>

        {/* Documentation Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-semibold text-center mb-12">
            Dokumentasi Developer
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {documentation.map((doc, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 cursor-pointer group">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                      {doc.icon}
                    </div>
                    <Badge variant="outline">{doc.category}</Badge>
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {doc.title}
                  </CardTitle>
                  <CardDescription>{doc.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {doc.estimatedTime}
                    </span>
                    <ExternalLink className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-primary/5 to-accent/20 rounded-3xl p-16">
          <h3 className="text-3xl font-semibold mb-6">
            Butuh Support Tambahan?
          </h3>
          <p className="text-lg text-muted-foreground mb-10 max-w-3xl mx-auto">
            Tim technical support dan solution architects kami siap membantu Anda 
            mendapatkan hasil maksimal dari capabilities document processing rangkum.ai.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              size="lg" 
              className="px-10 py-4 text-lg shadow-lg"
              onClick={() => navigateTo('support')}
            >
              {t('resources.cta.contact_support')}
              <ArrowRight className="w-6 h-6 ml-3" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="px-10 py-4 text-lg border-2 bg-white/80 hover:bg-white"
              onClick={() => navigateTo('consultation')}
            >
              {t('resources.cta.schedule_consultation')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}