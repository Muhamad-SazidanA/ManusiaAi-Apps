import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { useTranslation } from './TranslationContext';
import { useRouter } from './Router';
import { 
  Quote, 
  TrendingUp, 
  Users, 
  Building2, 
  ArrowRight,
  Star,
  Award,
  Globe,
  BarChart3,
  CheckCircle,
  Target,
  Clock,
  Heart,
  CreditCard,
  GraduationCap,
  Factory,
  Truck
} from 'lucide-react';

export function CustomersSection() {
  const { t } = useTranslation();
  const { navigateTo } = useRouter();
  const featuredTestimonials = [
    {
      quote: "rangkum.ai mengubah seluruh proses originasi kredit kami. Yang dulu membutuhkan 14 hari, sekarang selesai dalam 2 hari dengan akurasi 99.8%. ROI terlihat jelas dalam kuartal pertama, dan nasabah kami menyukai layanan yang lebih cepat.",
      author: "Sarah Wijaya",
      title: "Chief Digital Officer",
      company: "Bank Nasional Indonesia",
      industry: "Perbankan",
      avatar: "SW",
      companySize: "Aset Rp 180 Triliun",
      implementation: "6 minggu",
      metrics: {
        timeReduction: "85%",
        costSaving: "Rp 61M per tahun",
        accuracy: "99.8%",
        volumeIncrease: "300%"
      }
    },
    {
      quote: "Kemampuan platform menangani formulir medis kompleks sambil mempertahankan compliance HIPAA telah merevolusi proses intake pasien kami. Kami mengurangi overhead administratif 60% sambil meningkatkan skor kepuasan pasien secara signifikan.",
      author: "Dr. Michael Santoso",
      title: "Chief Medical Officer",
      company: "RS Siloam Hospitals",
      industry: "Kesehatan",
      avatar: "MS",
      companySize: "50+ lokasi",
      implementation: "8 minggu",
      metrics: {
        timeReduction: "70%",
        costSaving: "Rp 45M per tahun",
        accuracy: "99.5%",
        satisfaction: "+40%"
      }
    },
    {
      quote: "Implementasi sangat mudah, dan AI pembelajaran mandiri terus meningkatkan akurasi pemrosesan dokumen kami. Visibilitas supply chain kami meningkat drastis, dan kami mencapai 100% compliance di seluruh operasi global.",
      author: "Jennifer Kusuma",
      title: "VP Operations",
      company: "PT Astra International",
      industry: "Manufaktur",
      avatar: "JK",
      companySize: "20 negara",
      implementation: "4 minggu",
      metrics: {
        timeReduction: "90%",
        costSaving: "Rp 41M per tahun",
        accuracy: "99.9%",
        compliance: "100%"
      }
    }
  ];

  const industryPages = [
    {
      id: "perbankan",
      name: "Perbankan",
      icon: <Building2 className="w-8 h-8" />,
      description: "Solusi pemrosesan dokumen untuk transformasi digital perbankan",
      realUseCases: [
        {
          title: "Originasi Kredit Digital",
          problem: "Proses manual aplikasi kredit memakan waktu 2 minggu dengan tingkat error tinggi",
          solution: "Automasi end-to-end verifikasi dokumen, scoring risiko, dan approval workflow",
          result: "Waktu pemrosesan turun 85%, dari 14 hari ke 2 hari dengan akurasi 99.8%"
        },
        {
          title: "KYC/AML Compliance",
          problem: "Review manual dokumen identitas rentan error dan memakan waktu lama",
          solution: "Verifikasi identitas otomatis dengan deteksi fraud terintegrasi",
          result: "100% compliance rate dengan pengurangan waktu verifikasi 90%"
        }
      ],
      mainBenefits: [
        "Percepatan time-to-market produk finansial baru",
        "Pengurangan risiko operasional dan compliance",
        "Peningkatan customer experience dan retention",
        "Optimasi biaya operasional hingga 60%"
      ],
      implementationCase: {
        client: "Bank Regional Terbesar",
        challenge: "Manual processing 50K+ aplikasi kredit per bulan",
        timeframe: "6 minggu implementasi",
        results: [
          "Processing time: 14 hari → 2 hari",
          "Kapasitas processing meningkat 300%",
          "Customer satisfaction +45%",
          "ROI 420% dalam 12 bulan"
        ]
      }
    },
    {
      id: "asuransi",
      name: "Asuransi",
      icon: <CreditCard className="w-8 h-8" />,
      description: "Transformasi digital untuk industri asuransi dan risk management",
      realUseCases: [
        {
          title: "Pemrosesan Klaim Otomatis",
          problem: "Pemrosesan klaim manual memakan waktu 2 minggu dengan bottleneck di berbagai tahap",
          solution: "Automasi intake klaim, assessment dokumen, dan workflow approval",
          result: "Waktu pemrosesan klaim turun 70%, dari 14 hari ke 4 hari"
        },
        {
          title: "Underwriting Intelligence",
          problem: "Analisis dokumen underwriting manual rentan inkonsistensi dan lambat",
          solution: "AI-powered risk assessment dengan analisis dokumen otomatis",
          result: "Akurasi underwriting meningkat 35% dengan waktu proses 80% lebih cepat"
        }
      ],
      mainBenefits: [
        "Percepatan settlement klaim untuk meningkatkan loyalitas",
        "Peningkatan akurasi fraud detection hingga 94%",
        "Optimasi portfolio risk management",
        "Pengurangan biaya operasional claims processing 50%"
      ],
      implementationCase: {
        client: "Perusahaan Asuransi Umum Terkemuka",
        challenge: "Proses klaim manual untuk 25K+ klaim per bulan",
        timeframe: "8 minggu implementasi",
        results: [
          "Claim processing: 14 hari → 4 hari",
          "Fraud detection accuracy +40%",
          "Customer satisfaction +35%",
          "Operational cost reduction 50%"
        ]
      }
    },
    {
      id: "kesehatan",
      name: "Kesehatan",
      icon: <Heart className="w-8 h-8" />,
      description: "Digitalisasi healthcare untuk meningkatkan kualitas pelayanan pasien",
      realUseCases: [
        {
          title: "Digital Patient Onboarding",
          problem: "Proses registrasi pasien manual memakan waktu lama dan rentan error",
          solution: "Digitalisasi formulir intake dengan verifikasi asuransi otomatis",
          result: "Waktu registrasi turun 75% dengan akurasi data 99.5%"
        },
        {
          title: "Medical Records Digitization",
          problem: "Rekam medis paper-based sulit diakses dan berisiko hilang",
          solution: "Konversi otomatis rekam medis fisik ke format digital terstruktur",
          result: "100% digitalisasi dengan searchable medical history"
        }
      ],
      mainBenefits: [
        "Peningkatan kualitas dan aksesibilitas layanan pasien",
        "Compliance penuh dengan regulasi kesehatan nasional",
        "Efisiensi operasional dan pengurangan beban administratif",
        "Integrasi seamless dengan sistem SIMRS existing"
      ],
      implementationCase: {
        client: "Rumah Sakit Jaringan Nasional",
        challenge: "Digitalisasi 50+ lokasi dengan 100K+ rekam medis",
        timeframe: "12 minggu implementasi bertahap",
        results: [
          "Patient registration: 30 menit → 5 menit",
          "Medical records accessibility 100%",
          "Administrative cost reduction 60%",
          "Staff productivity +40%"
        ]
      }
    },
    {
      id: "logistik",
      name: "Logistik",
      icon: <Truck className="w-8 h-8" />,
      description: "Optimasi supply chain dan dokumentasi logistik end-to-end",
      realUseCases: [
        {
          title: "Supply Chain Documentation",
          problem: "Dokumentasi manual shipping dan customs menimbulkan delay dan error",
          solution: "Automasi pemrosesan bill of lading, customs documents, dan tracking",
          result: "Pengurangan processing time 80% dengan 100% accuracy"
        },
        {
          title: "Vendor Onboarding Automation",
          problem: "Onboarding vendor baru memakan waktu 4-6 minggu dengan review manual",
          solution: "Digitalisasi dan verifikasi otomatis dokumen legal dan sertifikasi vendor",
          result: "Vendor onboarding dipercepat menjadi 3-5 hari"
        }
      ],
      mainBenefits: [
        "Real-time visibility across entire supply chain",
        "Compliance automation untuk regulasi ekspor-impor",
        "Optimasi inventory management dan demand forecasting",
        "Pengurangan operational costs hingga 45%"
      ],
      implementationCase: {
        client: "Perusahaan Logistik Multinasional",
        challenge: "Standardisasi dokumentasi di 15 negara Asia",
        timeframe: "10 minggu implementasi regional",
        results: [
          "Document processing: 2 hari → 4 jam",
          "Cross-border compliance 100%",
          "Operational efficiency +65%",
          "Customer satisfaction +50%"
        ]
      }
    },
    {
      id: "pendidikan",
      name: "Pendidikan",
      icon: <GraduationCap className="w-8 h-8" />,
      description: "Modernisasi administrasi pendidikan dan manajemen akademik",
      realUseCases: [
        {
          title: "Student Application Processing",
          problem: "Pemrosesan manual 50K+ aplikasi mahasiswa baru memakan waktu 2 bulan",
          solution: "Automasi verifikasi dokumen akademik, scoring, dan workflow penerimaan",
          result: "Waktu pemrosesan aplikasi turun 70%, dari 8 minggu ke 2 minggu"
        },
        {
          title: "Academic Records Management",
          problem: "Manajemen transkrip dan sertifikat manual rentan fraud dan slow retrieval",
          solution: "Digitalisasi dengan blockchain verification dan instant access",
          result: "Akses real-time dengan 100% authenticity verification"
        }
      ],
      mainBenefits: [
        "Peningkatan efisiensi administrasi akademik",
        "Transparansi dan aksesibilitas informasi mahasiswa",
        "Compliance dengan regulasi pendidikan nasional",
        "User experience yang lebih baik untuk mahasiswa dan staff"
      ],
      implementationCase: {
        client: "Universitas Negeri Terkemuka",
        challenge: "Digitalisasi administrasi 45K+ mahasiswa",
        timeframe: "16 minggu implementasi kampus-wide",
        results: [
          "Application processing: 8 minggu → 2 minggu",
          "Document retrieval: 2 hari → instant",
          "Administrative workload -50%",
          "Student satisfaction +60%"
        ]
      }
    },
    {
      id: "manufaktur",
      name: "Manufaktur",
      icon: <Factory className="w-8 h-8" />,
      description: "Digitalisasi quality control dan supply chain manufacturing",
      realUseCases: [
        {
          title: "Quality Control Documentation",
          problem: "Manual QC reporting di multiple facilities memakan waktu dan rentan error",
          solution: "Automasi capture dan analysis QC data dengan real-time reporting",
          result: "QC reporting time turun 85% dengan 99% accuracy"
        },
        {
          title: "Supplier Compliance Management",
          problem: "Tracking compliance certificates dari 500+ suppliers secara manual",
          solution: "Automated compliance monitoring dengan alert system untuk expiry",
          result: "100% supplier compliance dengan zero manual tracking"
        }
      ],
      mainBenefits: [
        "Real-time quality insights dan predictive analytics",
        "Compliance automation untuk standar internasional",
        "Optimasi supply chain dengan transparent tracking",
        "Pengurangan manufacturing costs hingga 35%"
      ],
      implementationCase: {
        client: "Manufacturer Automotive Terbesar",
        challenge: "Quality standardization di 8 plants",
        timeframe: "12 minggu implementasi multi-site",
        results: [
          "QC processing: 4 jam → 20 menit",
          "Supplier compliance: manual → 100% automated",
          "Quality incidents -75%",
          "Manufacturing efficiency +40%"
        ]
      }
    }
  ];

  const successMetrics = [
    {
      metric: "500+",
      label: "Perusahaan Indonesia",
      description: "Dipercaya organisasi di seluruh nusantara",
      icon: <Users className="w-6 h-6" />
    },
    {
      metric: "50M+",
      label: "Dokumen per Bulan",
      description: "Volume pemrosesan bulanan",
      icon: <BarChart3 className="w-6 h-6" />
    },
    {
      metric: "99.8%",
      label: "Rata-rata Akurasi",
      description: "Across semua jenis dokumen",
      icon: <Target className="w-6 h-6" />
    },
    {
      metric: "Rp 340M",
      label: "Total Penghematan Pelanggan",
      description: "Penghematan operasional kumulatif",
      icon: <TrendingUp className="w-6 h-6" />
    }
  ];

  return (
    <section 
      id="customers" 
      className="section-padding bg-white"
      aria-labelledby="customers-title"
    >
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-20">
          <Badge variant="secondary" className="mb-6 px-4 py-2">
            <Award className="w-4 h-4 mr-2" />
            Kisah Sukses Pelanggan
          </Badge>
          <h2 
            id="customers-title"
            className="text-4xl sm:text-5xl font-bold text-foreground mb-8 leading-tight"
          >
            {t('customers.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            {t('customers.subtitle')}
          </p>
        </div>

        {/* Success Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24" role="region" aria-label="Metrics kesuksesan perusahaan">
          {successMetrics.map((metric, index) => (
            <div 
              key={index} 
              className="text-center p-8 bg-gradient-to-br from-accent/30 to-accent/60 rounded-2xl border border-border/20 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mx-auto mb-4">
                {metric.icon}
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">{metric.metric}</div>
              <div className="font-semibold text-foreground mb-1">{metric.label}</div>
              <div className="text-sm text-muted-foreground">{metric.description}</div>
            </div>
          ))}
        </div>

        {/* Featured Testimonials */}
        <div className="mb-24">
          <h3 className="text-3xl font-semibold text-center mb-16">
            {t('customers.testimonials.title')}
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredTestimonials.map((testimonial, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-2 hover:border-primary/20 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary/70"></div>
                
                <CardHeader className="pb-6">
                  <div className="flex items-start justify-between mb-6">
                    <Quote className="w-12 h-12 text-primary/20" />
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <CardDescription className="text-base italic leading-relaxed text-foreground">
                    "{testimonial.quote}"
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  {/* Author Info */}
                  <div className="flex items-center space-x-4">
                    <Avatar className="w-12 h-12">
                      <AvatarFallback className="bg-primary text-primary-foreground font-semibold">
                        {testimonial.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                      <p className="text-sm font-medium text-primary">{testimonial.company}</p>
                    </div>
                  </div>

                  {/* Key Metrics */}
                  <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6">
                    <h5 className="font-semibold mb-4 text-sm text-green-700">Hasil Utama:</h5>
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-lg font-bold text-green-600">{testimonial.metrics.timeReduction}</div>
                        <div className="text-xs text-muted-foreground">Waktu Terhemat</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-blue-600">{testimonial.metrics.accuracy}</div>
                        <div className="text-xs text-muted-foreground">Akurasi</div>
                      </div>
                    </div>
                  </div>

                  {/* Implementation */}
                  <div className="text-sm text-muted-foreground">
                    <Clock className="w-4 h-4 inline mr-2" />
                    Implementasi: {testimonial.implementation}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Industry Pages */}
        <div className="mb-20">
          <h3 className="text-3xl font-semibold text-center mb-16">
            Solusi per Industri
          </h3>
          
          <Tabs defaultValue="perbankan" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mb-12">
              {industryPages.map((industry) => (
                <TabsTrigger 
                  key={industry.id} 
                  value={industry.id}
                  className="flex flex-col items-center space-y-1 text-xs p-3"
                >
                  {industry.icon}
                  <span className="text-center">
                    {industry.name}
                  </span>
                </TabsTrigger>
              ))}
            </TabsList>

            {industryPages.map((industry) => (
              <TabsContent key={industry.id} value={industry.id}>
                <Card className="p-10">
                  <div className="space-y-12">
                    {/* Industry Header */}
                    <div className="text-center">
                      <div className="flex items-center justify-center space-x-4 mb-6">
                        <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                          {industry.icon}
                        </div>
                        <div>
                          <h4 className="text-3xl font-semibold">{industry.name}</h4>
                          <p className="text-muted-foreground text-lg">{industry.description}</p>
                        </div>
                      </div>
                    </div>

                    {/* Real Use Cases */}
                    <div>
                      <h5 className="text-2xl font-semibold mb-8 text-center">Use Case Nyata</h5>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {industry.realUseCases.map((useCase, idx) => (
                          <Card key={idx} className="p-6 hover:shadow-lg transition-shadow">
                            <h6 className="font-semibold text-lg mb-4 text-primary">{useCase.title}</h6>
                            <div className="space-y-4">
                              <div>
                                <span className="font-medium text-red-600">Tantangan: </span>
                                <span className="text-sm text-muted-foreground">{useCase.problem}</span>
                              </div>
                              <div>
                                <span className="font-medium text-blue-600">Solusi: </span>
                                <span className="text-sm text-muted-foreground">{useCase.solution}</span>
                              </div>
                              <div className="bg-green-50 p-3 rounded-lg">
                                <span className="font-medium text-green-700">Hasil: </span>
                                <span className="text-sm text-green-800">{useCase.result}</span>
                              </div>
                            </div>
                          </Card>
                        ))}
                      </div>
                    </div>

                    {/* Main Benefits */}
                    <div>
                      <h5 className="text-2xl font-semibold mb-8 text-center">Manfaat Utama untuk {industry.name}</h5>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {industry.mainBenefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-start p-4 bg-accent/30 rounded-xl">
                            <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                            <span className="font-medium">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Implementation Case Study */}
                    <div className="bg-gradient-to-br from-primary/5 to-accent/10 rounded-2xl p-8">
                      <h5 className="text-2xl font-semibold mb-6 text-center">Studi Kasus Implementasi</h5>
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div>
                          <h6 className="font-semibold text-lg mb-4">Profil Klien</h6>
                          <p className="text-muted-foreground mb-4">{industry.implementationCase.client}</p>
                          <p className="text-sm text-muted-foreground mb-4">
                            <strong>Tantangan:</strong> {industry.implementationCase.challenge}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            <strong>Waktu Implementasi:</strong> {industry.implementationCase.timeframe}
                          </p>
                        </div>
                        <div>
                          <h6 className="font-semibold text-lg mb-4">Hasil Terukur</h6>
                          <ul className="space-y-3">
                            {industry.implementationCase.results.map((result, idx) => (
                              <li key={idx} className="flex items-start">
                                <BarChart3 className="w-4 h-4 text-green-500 mr-3 mt-1 flex-shrink-0" />
                                <span className="text-sm font-medium">{result}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-primary/5 to-accent/20 rounded-3xl p-16">
          <Globe className="w-16 h-16 text-primary mx-auto mb-6" />
          <h3 className="text-3xl font-semibold mb-6">
            Bergabung dengan 500+ Perusahaan yang Mentransformasi Operasi Mereka
          </h3>
          <p className="text-lg text-muted-foreground mb-10 max-w-3xl mx-auto">
            Lihat bagaimana organisasi Anda dapat mencapai hasil serupa dengan platform pemrosesan 
            dokumen berbasis AI kami. Jadwalkan demo personal untuk mengeksplorasi use case spesifik Anda.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              size="lg" 
              className="px-10 py-4 text-lg shadow-lg"
              onClick={() => navigateTo('demo')}
            >
              {t('platform.cta.demo')}
              <ArrowRight className="w-6 h-6 ml-3" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="px-10 py-4 text-lg border-2 bg-white/80 hover:bg-white"
              onClick={() => navigateTo('customers')}
            >
              {t('customers.success.stories')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}