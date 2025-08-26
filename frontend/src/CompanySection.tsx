import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { useRouter } from './Router';
import { useTranslation } from './TranslationContext';
import { 
  Target, 
  Eye, 
  Users, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar,
  ArrowRight,
  Award,
  Briefcase,
  Building2,
  Globe,
  MessageSquare,
  Clock,
  CheckCircle,
  TrendingUp,
  Newspaper,
  Coffee
} from 'lucide-react';

export function CompanySection() {
  const { navigateTo } = useRouter();
  const { t } = useTranslation();
  const values = [
    {
      title: "Inovasi Berkelanjutan",
      description: "Kami mendorong batas-batas kemungkinan dengan teknologi AI dan pemrosesan dokumen terdepan.",
      icon: <Target className="w-6 h-6" />
    },
    {
      title: "Kesuksesan Pelanggan",
      description: "Kesuksesan Anda mendorong inovasi kami. Kami berkomitmen untuk memberikan nilai bisnis yang terukur.",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Keamanan & Kepercayaan",
      description: "Kami menjaga standar keamanan dan privasi tertinggi dalam segala hal yang kami bangun.",
      icon: <Award className="w-6 h-6" />
    },
    {
      title: "Transparansi",
      description: "Kami percaya pada komunikasi yang jelas, hubungan yang jujur, dan praktik bisnis yang transparan.",
      icon: <Eye className="w-6 h-6" />
    }
  ];

  const newsItems = [
    {
      title: "rangkum.ai Raih Pendanaan Series A Sebesar $25 Juta",
      date: "15 Desember 2024",
      category: "Funding",
      excerpt: "Pendanaan ini akan digunakan untuk mempercepat pengembangan produk dan ekspansi global ke pasar Asia Tenggara."
    },
    {
      title: "Kemitraan Strategis dengan Microsoft Azure Indonesia",
      date: "28 November 2024", 
      category: "Partnership",
      excerpt: "Kolaborasi untuk menyediakan solusi AI document processing yang lebih scalable untuk enterprise Indonesia."
    },
    {
      title: "rangkum.ai Terpilih sebagai 'Rising Tech Company of the Year'",
      date: "10 November 2024",
      category: "Award",
      excerpt: "Penghargaan dari Indonesia Tech Awards 2024 atas kontribusi dalam transformasi digital Indonesia."
    },
    {
      title: "Peluncuran Fitur Multi-Language Support untuk 40+ Bahasa",
      date: "22 Oktober 2024",
      category: "Product Update",
      excerpt: "Ekspansi capabilities untuk mendukung document processing dalam bahasa regional Indonesia dan Asia."
    }
  ];

  const careers = [
    {
      title: "Senior Machine Learning Engineer",
      department: "Engineering",
      location: "Jakarta / Remote",
      type: "Full-time",
      experience: "5+ tahun"
    },
    {
      title: "Product Manager - Enterprise Solutions",
      department: "Product",
      location: "Jakarta / Hybrid",
      type: "Full-time", 
      experience: "4+ tahun"
    },
    {
      title: "Solutions Architect",
      department: "Customer Success",
      location: "Jakarta / Remote",
      type: "Full-time",
      experience: "6+ tahun"
    },
    {
      title: "DevOps Engineer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      experience: "3+ tahun"
    },
    {
      title: "Business Development Manager",
      department: "Sales",
      location: "Jakarta",
      type: "Full-time",
      experience: "5+ tahun"
    },
    {
      title: "Customer Success Manager",
      department: "Customer Success", 
      location: "Jakarta / Hybrid",
      type: "Full-time",
      experience: "3+ tahun"
    }
  ];

  const benefits = [
    "Gaji kompetitif dengan equity options",
    "Asuransi kesehatan premium untuk keluarga",
    "Flexible working arrangements (WFH/Hybrid)",
    "Learning & development budget Rp 20 juta/tahun",
    "Mental health support & wellness programs",
    "Unlimited vacation policy",
    "Latest tech equipment & home office setup",
    "Team events & company retreats"
  ];

  return (
    <section 
      id="company" 
      className="section-padding bg-accent/10"
      aria-labelledby="company-title"
    >
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-20">
          <Badge variant="secondary" className="mb-6 px-4 py-2">
            <Building2 className="w-4 h-4 mr-2" />
            Tentang rangkum.ai
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-8 leading-tight">
            Memimpin Masa Depan<br />Document Intelligence
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Kami dalam misi untuk mentransformasi cara organisasi menangani dokumen, 
            membuat pemrosesan berbasis AI dapat diakses, akurat, dan aman untuk 
            bisnis di seluruh Indonesia dan Asia.
          </p>
        </div>

        {/* Tabs for different sections */}
        <Tabs defaultValue="about" className="w-full mb-16">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-12">
            <TabsTrigger value="about">Tentang Kami</TabsTrigger>
            <TabsTrigger value="newsroom">Newsroom</TabsTrigger>
            <TabsTrigger value="careers">Karier</TabsTrigger>
            <TabsTrigger value="contact">Hubungi Kami</TabsTrigger>
          </TabsList>

          {/* About Us Content */}
          <TabsContent value="about" id="about">
            <div className="space-y-16">
              {/* Mission & Vision */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <Card className="p-8 hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
                      <Target className="w-6 h-6" />
                    </div>
                    <CardTitle className="text-2xl">Misi Kami</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      Mendemokratisasi pemrosesan dokumen cerdas dengan membuat teknologi AI canggih 
                      dapat diakses oleh organisasi dari semua ukuran, memungkinkan mereka untuk 
                      membuka nilai yang terjebak dalam dokumen dan mempercepat transformasi digital.
                    </p>
                  </CardContent>
                </Card>

                <Card className="p-8 hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
                      <Eye className="w-6 h-6" />
                    </div>
                    <CardTitle className="text-2xl">Visi Kami</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      Dunia di mana setiap dokumen dipahami secara instan, diproses, dan diintegrasikan 
                      ke dalam workflow bisnis, menghilangkan entry data manual dan memungkinkan 
                      organisasi fokus pada hal yang paling penting - melayani pelanggan dan mengembangkan bisnis.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Company Values */}
              <div>
                <h3 className="text-3xl font-semibold text-center mb-12">Nilai-Nilai Kami</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {values.map((value, index) => (
                    <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                      <CardHeader>
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mx-auto mb-4">
                          {value.icon}
                        </div>
                        <CardTitle className="text-lg">{value.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-base">
                          {value.description}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div className="bg-white rounded-2xl p-12 shadow-lg">
                <h3 className="text-2xl font-semibold text-center mb-12">rangkum.ai dalam Angka</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">500+</div>
                    <div className="text-sm text-muted-foreground">Perusahaan Aktif</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">50M+</div>
                    <div className="text-sm text-muted-foreground">Dokumen Diproses</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">99.8%</div>
                    <div className="text-sm text-muted-foreground">Tingkat Akurasi</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">15+</div>
                    <div className="text-sm text-muted-foreground">Industri Dilayani</div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Newsroom Content */}
          <TabsContent value="newsroom" id="newsroom">
            <div className="space-y-8">
              <div className="text-center mb-12">
                <Newspaper className="w-16 h-16 text-primary mx-auto mb-6" />
                <h3 className="text-3xl font-semibold mb-4">Newsroom</h3>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Berita terbaru, update perusahaan, dan milestone penting dari rangkum.ai
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {newsItems.map((item, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow duration-300 cursor-pointer group">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-3">
                        <Badge variant="outline">{item.category}</Badge>
                        <span className="text-sm text-muted-foreground">{item.date}</span>
                      </div>
                      <CardTitle className="text-lg group-hover:text-primary transition-colors">
                        {item.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base mb-4">
                        {item.excerpt}
                      </CardDescription>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-primary group-hover:underline">Baca selengkapnya</span>
                        <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="text-center pt-8">
                <Button variant="outline" size="lg">
                  Lihat Semua Berita
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </TabsContent>

          {/* Careers Content */}
          <TabsContent value="careers" id="careers">
            <div className="space-y-12">
              <div className="text-center">
                <Coffee className="w-16 h-16 text-primary mx-auto mb-6" />
                <h3 className="text-3xl font-semibold mb-4">Bergabung dengan Tim Kami</h3>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Bangun masa depan AI document processing bersama team yang passionate, 
                  innovative, dan committed untuk memberikan impact positif bagi bisnis di Indonesia.
                </p>
              </div>

              {/* Benefits */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h4 className="text-xl font-semibold mb-6 text-center">Mengapa Bekerja di rangkum.ai?</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Open Positions */}
              <div>
                <h4 className="text-2xl font-semibold mb-8 text-center">Posisi Terbuka</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {careers.map((job, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow duration-300 cursor-pointer group">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div>
                            <CardTitle className="text-lg group-hover:text-primary transition-colors mb-2">
                              {job.title}
                            </CardTitle>
                            <div className="flex items-center space-x-2 mb-3">
                              <Badge variant="outline">{job.department}</Badge>
                              <Badge variant="secondary">{job.type}</Badge>
                            </div>
                          </div>
                          <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2 text-sm text-muted-foreground">
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 mr-2" />
                            {job.location}
                          </div>
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-2" />
                            Experience: {job.experience}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <div className="text-center">
                <Button size="lg" className="px-8">
                  Lihat Semua Posisi
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>
          </TabsContent>

          {/* Contact Content */}
          <TabsContent value="contact" id="contact">
            <div className="bg-white rounded-2xl p-12 shadow-lg">
              <div className="text-center mb-12">
                <MessageSquare className="w-16 h-16 text-primary mx-auto mb-6" />
                <h3 className="text-3xl font-semibold mb-4">Hubungi Kami</h3>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Siap untuk mentransformasi workflow pemrosesan dokumen Anda? Tim kami siap 
                  membantu Anda memulai dan menjawab pertanyaan yang mungkin Anda miliki.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                {/* Email */}
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mx-auto mb-4">
                    <Mail className="w-6 h-6" />
                  </div>
                  <h4 className="font-semibold mb-3">Email Kami</h4>
                  <div className="space-y-2">
                    <p className="text-muted-foreground">
                      <a href="mailto:sales@rangkum.ai" className="hover:text-primary transition-colors">
                        sales@rangkum.ai
                      </a>
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Tim sales & konsultasi
                    </p>
                  </div>
                </div>
                
                {/* Phone */}
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mx-auto mb-4">
                    <Phone className="w-6 h-6" />
                  </div>
                  <h4 className="font-semibold mb-3">Telepon Kami</h4>
                  <div className="space-y-2">
                    <p className="text-muted-foreground">
                      <a href="tel:+6289739230000" className="hover:text-primary transition-colors">
                        +62 897 392 3000
                      </a>
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Senin-Jumat, 09:00-18:00 WIB
                    </p>
                  </div>
                </div>
                
                {/* Address */}
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mx-auto mb-4">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <h4 className="font-semibold mb-3">Kunjungi Kami</h4>
                  <div className="space-y-2">
                    <p className="text-muted-foreground">
                      Cideng, Jakarta Pusat<br />
                      Indonesia
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Kantor pusat & R&D center
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="px-8" onClick={() => navigateTo('demo')}>
                    Jadwalkan Demo
                    <Calendar className="w-5 h-5 ml-2" />
                  </Button>
                  <Button variant="outline" size="lg" className="px-8" onClick={() => navigateTo('free-trial')}>
                    Mulai Sekarang
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}