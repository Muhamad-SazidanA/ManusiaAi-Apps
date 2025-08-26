import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { useTranslation } from '../TranslationContext';
import { useRouter } from '../Router';
import { 
  Building2, 
  Users, 
  CheckCircle, 
  ArrowRight,
  Target,
  Eye,
  Heart,
  Globe,
  Award,
  TrendingUp,
  Lightbulb,
  Shield,
  Zap,
  Calendar,
  MapPin,
  Mail,
  Phone,
  Linkedin,
  Twitter,
  MessageCircle,
  Briefcase,
  GraduationCap,
  Code,
  Sparkles,
  ChevronRight,
  Star,
  Quote,
  Rocket,
  Clock,
  DollarSign,
  FileText,
  Newspaper,
  Camera,
  Handshake,
  Network
} from 'lucide-react';

export function CompanyOverviewPage() {
  const { t } = useTranslation();
  const { navigateTo } = useRouter();

  const companyStats = [
    {
      icon: <Calendar className="w-8 h-8" />,
      value: '2019',
      label: 'Founded',
      description: 'Memulai perjalanan AI innovation'
    },
    {
      icon: <Users className="w-8 h-8" />,
      value: '150+',
      label: 'Team Members',
      description: 'AI experts, engineers, dan specialists'
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      value: '500+',
      label: 'Enterprise Customers',
      description: 'Perusahaan dari berbagai industri'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      value: '15+',
      label: 'Countries Served',
      description: 'Jangkauan di Asia-Pacific'
    }
  ];

  const companyValues = [
    {
      icon: <Lightbulb className="w-12 h-12" />,
      title: 'Innovation Excellence',
      description: 'Kami berkomitmen untuk terus berinovasi dan menciptakan solusi AI terdepan yang mendefinisi masa depan document processing.',
      examples: [
        'Investasi 40% R&D budget untuk penelitian AI',
        'Tim research dengan PhD dari universitas terkemuka',
        'Patent-pending AI algorithms',
        'Publikasi di konferensi AI internasional'
      ]
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: 'Customer Success',
      description: 'Kesuksesan pelanggan adalah prioritas utama kami. Setiap keputusan dan inovasi berfokus pada memberikan nilai maksimal.',
      examples: [
        '98.5% customer satisfaction rate',
        'Dedicated customer success managers',
        '24/7 technical support',
        'Proactive monitoring dan optimization'
      ]
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: 'Trust & Security',
      description: 'Kepercayaan pelanggan adalah aset terberharga. Kami menerapkan standar keamanan tertinggi untuk melindungi data.',
      examples: [
        'ISO 27001 certified security',
        'SOC 2 Type II compliance',
        'End-to-end encryption',
        'Regular security audits'
      ]
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: 'Global Impact',
      description: 'Misi kami adalah mentransformasi cara organisasi di seluruh dunia menangani dokumen dengan teknologi AI.',
      examples: [
        'Mengurangi 50M+ jam kerja manual',
        'Menghemat Rp 2.5T+ biaya operasional',
        'Meningkatkan accuracy 10x lipat',
        'Carbon footprint reduction 60%'
      ]
    }
  ];

  const leadership = [
    {
      name: 'Budi Santoso',
      position: 'Chief Executive Officer',
      background: 'Former VP Engineering at Gojek, 15+ years in AI/ML',
      education: 'PhD Computer Science - Stanford University',
      expertise: ['AI Strategy', 'Product Vision', 'Enterprise Scaling'],
      quote: 'Our mission is to democratize AI-powered document processing for every organization.',
      linkedin: '#',
      achievements: [
        'Led AI initiatives serving 200M+ users',
        'Published 25+ research papers',
        'Named "AI Pioneer" by Tech Asia 2023'
      ]
    },
    {
      name: 'Sarah Chen',
      position: 'Chief Technology Officer',
      background: 'Former Principal Scientist at Microsoft Research Asia',
      education: 'PhD Machine Learning - MIT',
      expertise: ['Deep Learning', 'Computer Vision', 'NLP'],
      quote: 'We are building the most advanced document intelligence platform in the world.',
      linkedin: '#',
      achievements: [
        '40+ patents in AI/ML technologies',
        'IEEE Fellow recognition',
        'Winner "Women in AI Award" 2023'
      ]
    },
    {
      name: 'Michael Kumar',
      position: 'Chief Revenue Officer',
      background: 'Former VP Sales APAC at Salesforce',
      education: 'MBA - Wharton School',
      expertise: ['Enterprise Sales', 'Market Expansion', 'Customer Success'],
      quote: 'Every customer success story motivates us to reach even greater heights.',
      linkedin: '#',
      achievements: [
        'Scaled revenue from $1M to $100M ARR',
        '500+ enterprise deals closed',
        'Built teams across 12 countries'
      ]
    },
    {
      name: 'Dr. Lisa Wang',
      position: 'Chief AI Officer',
      background: 'Former Research Director at Google AI',
      education: 'PhD Artificial Intelligence - Cambridge',
      expertise: ['AI Research', 'Model Architecture', 'Ethics in AI'],
      quote: 'Responsible AI development is not optional - it is fundamental to our mission.',
      linkedin: '#',
      achievements: [
        '100+ citations research publications',
        'Advisory board member UN AI Ethics',
        'Pioneer in Explainable AI'
      ]
    }
  ];

  const milestones = [
    {
      year: '2019',
      quarter: 'Q1',
      title: 'Company Foundation',
      description: 'rangkum.ai didirikan dengan visi mentransformasi document processing dengan AI',
      highlights: [
        'Initial funding $2M seed round',
        'Core team 8 AI researchers',
        'First AI model prototype'
      ]
    },
    {
      year: '2020',
      quarter: 'Q2',
      title: 'Product MVP Launch',
      description: 'Peluncuran minimum viable product dengan 10 early adopter customers',
      highlights: [
        'First commercial deployment',
        '99.2% accuracy achievement',
        'Series A funding $15M'
      ]
    },
    {
      year: '2021',
      quarter: 'Q3',
      title: 'Enterprise Expansion',
      description: 'Ekspansi ke pasar enterprise dengan fokus financial services dan healthcare',
      highlights: [
        '50+ enterprise customers',
        'ISO 27001 certification',
        'Regional expansion to Malaysia, Singapore'
      ]
    },
    {
      year: '2022',
      quarter: 'Q1',
      title: 'AI Innovation Breakthrough',
      description: 'Breakthrough dalam no-template processing dan multilingual support',
      highlights: [
        'Patent filing for core AI algorithms',
        '150+ customers milestone',
        'Series B funding $40M'
      ]
    },
    {
      year: '2023',
      quarter: 'Q2',
      title: 'Global Recognition',
      description: 'Pengakuan global sebagai leader dalam AI document processing',
      highlights: [
        'Gartner Cool Vendor recognition',
        '500+ customers worldwide',
        'Expansion to 15 countries'
      ]
    },
    {
      year: '2024',
      quarter: 'Q1',
      title: 'Future Innovation',
      description: 'Continued innovation dengan advanced AI capabilities dan global expansion',
      highlights: [
        'Next-gen AI platform launch',
        'Strategic partnerships expansion',
        'IPO preparation initiation'
      ]
    }
  ];

  const awards = [
    {
      year: '2024',
      award: 'Gartner Cool Vendor',
      category: 'Document Processing & Content Analytics',
      description: 'Recognized for innovative AI-driven document processing capabilities'
    },
    {
      year: '2023',
      award: 'Frost & Sullivan Technology Innovation Award',
      category: 'Intelligent Document Processing',
      description: 'Outstanding achievement in AI technology advancement'
    },
    {
      year: '2023',
      award: 'TechCrunch Disruptor Award',
      category: 'Enterprise AI',
      description: 'Revolutionary impact on enterprise document workflows'
    },
    {
      year: '2022',
      award: 'IDC MarketScape Leader',
      category: 'Document Capture and Processing',
      description: 'Market leader position in document intelligence solutions'
    }
  ];

  const officeLocations = [
    {
      city: 'Jakarta',
      country: 'Indonesia',
      type: 'Headquarters',
      address: 'Cideng, Jakarta Pusat 10150',
      employees: '80+',
      functions: ['Engineering', 'Product', 'Sales', 'Support'],
      established: '2019'
    },
    {
      city: 'Singapore',
      country: 'Singapore',
      type: 'Regional Hub',
      address: 'Marina Bay Financial Centre',
      employees: '35+',
      functions: ['Sales', 'Customer Success', 'Partnerships'],
      established: '2021'
    },
    {
      city: 'Kuala Lumpur',
      country: 'Malaysia',
      type: 'Development Center',
      address: 'KLCC, Kuala Lumpur',
      employees: '25+',
      functions: ['Engineering', 'QA', 'DevOps'],
      established: '2022'
    },
    {
      city: 'Manila',
      country: 'Philippines',
      type: 'Support Center',
      address: 'BGC, Taguig City',
      employees: '15+',
      functions: ['Customer Support', 'Technical Services'],
      established: '2023'
    }
  ];

  const handleCareersClick = () => {
    navigateTo('careers');
  };

  const handleContactClick = () => {
    navigateTo('contact');
  };

  const handleNewsroomClick = () => {
    navigateTo('newsroom');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-white to-accent/20 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-6 px-4 py-2">
              <Building2 className="w-4 h-4 mr-2" />
              About rangkum.ai
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-8 leading-tight">
              {t('company.title')}
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
              {t('company.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-8" onClick={handleCareersClick}>
                Join Our Team
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" size="lg" className="px-8" onClick={handleContactClick}>
                {t('company.contact.title')}
              </Button>
            </div>
          </div>

          {/* Company Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {companyStats.map((stat, index) => (
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

      {/* Mission, Vision, Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">{t('company.our.story')}</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Dari visi sederhana hingga menjadi leader dalam AI document processing
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <Card className="text-center p-8 hover:shadow-xl transition-shadow duration-300">
              <Target className="w-16 h-16 text-primary mx-auto mb-6" />
              <h3 className="text-2xl font-semibold mb-4">{t('company.mission')}</h3>
              <p className="text-muted-foreground leading-relaxed">
                Memberdayakan setiap organisasi dengan teknologi AI document processing yang intelligent, 
                accessible, dan secure untuk mentransformasi cara mereka menangani informasi.
              </p>
            </Card>

            <Card className="text-center p-8 hover:shadow-xl transition-shadow duration-300 border-2 border-primary/20">
              <Eye className="w-16 h-16 text-primary mx-auto mb-6" />
              <h3 className="text-2xl font-semibold mb-4">{t('company.vision')}</h3>
              <p className="text-muted-foreground leading-relaxed">
                Menjadi platform AI document processing terdepan di dunia yang memungkinkan 
                organisasi untuk mengubah dokumen menjadi actionable intelligence secara instan.
              </p>
            </Card>

            <Card className="text-center p-8 hover:shadow-xl transition-shadow duration-300">
              <Heart className="w-16 h-16 text-primary mx-auto mb-6" />
              <h3 className="text-2xl font-semibold mb-4">{t('company.values')}</h3>
              <p className="text-muted-foreground leading-relaxed">
                Innovation, Customer Success, Trust & Security, dan Global Impact adalah 
                nilai-nilai fundamental yang memandu setiap langkah perjalanan kami.
              </p>
            </Card>
          </div>

          {/* Detailed Company Values */}
          <div className="space-y-12">
            {companyValues.map((value, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <div className="p-8 lg:p-12">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                      <div className="flex items-center space-x-6 mb-6">
                        <div className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center text-primary">
                          {value.icon}
                        </div>
                        <div>
                          <h3 className="text-2xl font-semibold mb-2">{value.title}</h3>
                          <p className="text-muted-foreground text-lg">{value.description}</p>
                        </div>
                      </div>
                    </div>

                    <div className="lg:col-span-1">
                      <div className="bg-gradient-to-br from-accent/30 to-accent/50 rounded-2xl p-6">
                        <h4 className="font-semibold mb-4">Examples in Action:</h4>
                        <ul className="space-y-2">
                          {value.examples.map((example, idx) => (
                            <li key={idx} className="flex items-start text-sm">
                              <CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                              {example}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-24 bg-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">{t('company.leadership.team')}</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Visionary leaders dengan track record exceptional dalam AI, technology, dan business scaling
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {leadership.map((leader, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <CardHeader className="pb-4">
                  <div className="flex items-start space-x-6">
                    <div className="w-24 h-24 bg-gradient-to-br from-primary/20 to-primary/10 rounded-3xl flex items-center justify-center">
                      <Users className="w-12 h-12 text-primary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-1">{leader.name}</CardTitle>
                      <CardDescription className="text-primary font-medium mb-2">
                        {leader.position}
                      </CardDescription>
                      <div className="space-y-1">
                        <p className="text-sm text-muted-foreground">{leader.background}</p>
                        <p className="text-sm text-muted-foreground">{leader.education}</p>
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div>
                    <h5 className="font-semibold mb-2">Expertise:</h5>
                    <div className="flex flex-wrap gap-2">
                      {leader.expertise.map((skill, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="bg-accent/30 rounded-lg p-4">
                    <Quote className="w-5 h-5 text-primary mb-2" />
                    <p className="text-sm italic">{leader.quote}</p>
                  </div>

                  <div>
                    <h5 className="font-semibold mb-2">Key Achievements:</h5>
                    <ul className="space-y-1">
                      {leader.achievements.map((achievement, idx) => (
                        <li key={idx} className="text-xs flex items-start">
                          <Star className="w-3 h-3 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <Button variant="outline" size="sm" className="text-xs">
                      <Linkedin className="w-3 h-3 mr-2" />
                      LinkedIn
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Milestones */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Journey</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Milestone perjalanan dari startup hingga menjadi leader dalam AI document processing
            </p>
          </div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                <div className="flex">
                  <div className="w-24 bg-primary text-primary-foreground flex flex-col items-center justify-center p-4">
                    <div className="text-2xl font-bold">{milestone.year}</div>
                    <div className="text-sm opacity-80">{milestone.quarter}</div>
                  </div>
                  <div className="flex-1 p-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                      <div className="lg:col-span-2">
                        <h3 className="text-xl font-semibold mb-3">{milestone.title}</h3>
                        <p className="text-muted-foreground mb-4">{milestone.description}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3">Key Highlights:</h4>
                        <ul className="space-y-2">
                          {milestone.highlights.map((highlight, idx) => (
                            <li key={idx} className="flex items-start text-sm">
                              <Rocket className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-24 bg-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">{t('company.awards.recognition')}</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Pengakuan industri atas inovasi dan excellence dalam AI document processing
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {awards.map((award, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center">
                    <Award className="w-8 h-8 text-yellow-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold">{award.award}</h3>
                      <Badge variant="outline">{award.year}</Badge>
                    </div>
                    <p className="text-primary font-medium mb-2">{award.category}</p>
                    <p className="text-sm text-muted-foreground">{award.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">{t('company.office.locations')}</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Global presence dengan team di berbagai kota untuk melayani customer worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {officeLocations.map((office, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 text-center p-6">
                <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">{office.city}, {office.country}</h3>
                <Badge variant="secondary" className="mb-4">{office.type}</Badge>
                
                <div className="space-y-3 text-sm text-muted-foreground">
                  <p>{office.address}</p>
                  <div className="flex items-center justify-center space-x-4">
                    <span className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {office.employees}
                    </span>
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {office.established}
                    </span>
                  </div>
                  
                  <div>
                    <h5 className="font-medium mb-2">Functions:</h5>
                    <div className="flex flex-wrap gap-1 justify-center">
                      {office.functions.map((func, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {func}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              {t('company.contact.title')}
            </h2>
            <p className="text-xl text-muted-foreground">
              {t('company.contact.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <Mail className="w-12 h-12 text-primary mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Email</h4>
              <p className="text-sm text-muted-foreground">sales@rangkum.ai</p>
            </div>
            
            <div className="text-center">
              <Phone className="w-12 h-12 text-primary mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Phone</h4>
              <p className="text-sm text-muted-foreground">+62 897 392 3000</p>
            </div>
            
            <div className="text-center">
              <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Address</h4>
              <p className="text-sm text-muted-foreground">Cideng, Jakarta Pusat</p>
            </div>
            
            <div className="text-center">
              <MessageCircle className="w-12 h-12 text-primary mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Social</h4>
              <div className="flex justify-center space-x-3">
                <Linkedin className="w-5 h-5 text-primary cursor-pointer" />
                <Twitter className="w-5 h-5 text-primary cursor-pointer" />
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8" onClick={handleContactClick}>
              {t('company.get.in.touch')}
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button variant="outline" size="lg" className="px-8" onClick={handleNewsroomClick}>
              Visit Newsroom
              <Newspaper className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Sparkles className="w-16 h-16 mx-auto mb-6 opacity-90" />
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Join Our Mission
          </h2>
          <p className="text-xl mb-10 opacity-90">
            Bergabunglah dengan team world-class yang sedang membangun masa depan document intelligence. 
            Mari bersama-sama mentransformasi cara dunia memproses dokumen.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              size="lg" 
              variant="secondary" 
              className="px-10"
              onClick={handleCareersClick}
            >
              Explore Careers
              <Briefcase className="w-5 h-5 ml-2" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="px-10 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              onClick={handleContactClick}
            >
              Partner With Us
              <Handshake className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}