import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { useTranslation } from '../TranslationContext';
import { useRouter } from '../Router';
import { 
  BookOpen, 
  FileText, 
  Video, 
  Download, 
  CheckCircle, 
  ArrowRight,
  Target,
  TrendingUp,
  Star,
  Settings,
  Zap,
  Shield,
  Globe,
  Users,
  Award,
  MessageCircle,
  Code,
  Search,
  Filter,
  Calendar,
  Mail,
  Phone,
  Headphones,
  HelpCircle,
  Lightbulb,
  Sparkles,
  ChevronRight,
  ExternalLink,
  Clock,
  Eye,
  PlayCircle,
  FileDown,
  Bookmark,
  Database,
  Layers,
  GitBranch,
  Bug,
  Megaphone,
  Newspaper,
  GraduationCap,
  BarChart3
} from 'lucide-react';

export function ResourcesOverviewPage() {
  const { t } = useTranslation();
  const { navigateTo } = useRouter();

  const resourceStats = [
    {
      icon: <FileText className="w-8 h-8" />,
      value: '200+',
      label: 'Documentation Pages',
      description: 'Comprehensive technical documentation'
    },
    {
      icon: <Video className="w-8 h-8" />,
      value: '50+',
      label: 'Video Tutorials',
      description: 'Step-by-step implementation guides'
    },
    {
      icon: <Download className="w-8 h-8" />,
      value: '25+',
      label: 'Downloadable Resources',
      description: 'Whitepapers, guides, and templates'
    },
    {
      icon: <Users className="w-8 h-8" />,
      value: '5K+',
      label: 'Community Members',
      description: 'Active developer and user community'
    }
  ];

  const resourceCategories = [
    {
      category: 'Documentation & Guides',
      icon: <BookOpen className="w-12 h-12" />,
      title: t('resources.documentation.title'),
      description: t('resources.documentation.desc'),
      resources: [
        {
          type: 'API Documentation',
          icon: <Code className="w-6 h-6" />,
          title: 'Complete API Reference',
          description: 'Full REST API documentation with examples',
          items: ['Authentication', 'Endpoints', 'Response Formats', 'Error Codes'],
          link: 'api-documentation',
          badge: 'Technical',
          updated: '2024-01-15'
        },
        {
          type: 'Integration Guides',
          icon: <GitBranch className="w-6 h-6" />,
          title: 'Integration Tutorials',
          description: 'Step-by-step guides for popular platforms',
          items: ['SAP Integration', 'Salesforce Connector', 'SharePoint Setup', 'Custom APIs'],
          link: 'integration-guides',
          badge: 'How-to',
          updated: '2024-01-10'
        },
        {
          type: 'Developer Resources',
          icon: <Layers className="w-6 h-6" />,
          title: 'SDKs & Code Samples',
          description: 'Ready-to-use code samples and SDKs',
          items: ['Python SDK', 'JavaScript SDK', 'Java SDK', 'Code Examples'],
          link: 'developer-resources',
          badge: 'Code',
          updated: '2024-01-12'
        },
        {
          type: 'Best Practices',
          icon: <Lightbulb className="w-6 h-6" />,
          title: 'Implementation Best Practices',
          description: 'Proven strategies for successful deployment',
          items: ['Architecture Patterns', 'Security Guidelines', 'Performance Tips', 'Troubleshooting'],
          link: 'best-practices',
          badge: 'Guide',
          updated: '2024-01-08'
        }
      ]
    },
    {
      category: 'Learning Resources',
      icon: <GraduationCap className="w-12 h-12" />,
      title: 'Educational Content',
      description: 'Learn AI document processing concepts and implementation',
      resources: [
        {
          type: 'Video Tutorials',
          icon: <PlayCircle className="w-6 h-6" />,
          title: 'Getting Started Series',
          description: 'Comprehensive video tutorials for beginners',
          items: ['Platform Overview', 'First Integration', 'Advanced Features', 'Troubleshooting'],
          link: 'video-tutorials',
          badge: 'Video',
          duration: '4 hours'
        },
        {
          type: 'Webinar Series',
          icon: <Calendar className="w-6 h-6" />,
          title: 'Expert Webinars',
          description: 'Live sessions with AI and document processing experts',
          items: ['AI Trends', 'Industry Use Cases', 'Technical Deep-dives', 'Q&A Sessions'],
          link: 'webinars',
          badge: 'Live',
          upcoming: '2024-01-25'
        },
        {
          type: 'Certification Program',
          icon: <Award className="w-6 h-6" />,
          title: 'Professional Certification',
          description: 'Become a certified rangkum.ai implementation expert',
          items: ['Foundation Course', 'Advanced Techniques', 'Practical Exam', 'Certificate'],
          link: 'certification',
          badge: 'Cert',
          level: 'Professional'
        },
        {
          type: 'Knowledge Base',
          icon: <Database className="w-6 h-6" />,
          title: 'Searchable Knowledge Base',
          description: 'Comprehensive FAQ and troubleshooting database',
          items: ['Common Issues', 'Platform Updates', 'Feature Explanations', 'Error Solutions'],
          link: 'knowledge-base',
          badge: 'FAQ',
          articles: '500+'
        }
      ]
    },
    {
      category: 'Research & Insights',
      icon: <BarChart3 className="w-12 h-12" />,
      title: t('resources.whitepapers.title'),
      description: t('resources.whitepapers.desc'),
      resources: [
        {
          type: 'Industry Reports',
          icon: <FileText className="w-6 h-6" />,
          title: 'AI Document Processing Market Analysis',
          description: 'Comprehensive market research and trends analysis',
          items: ['Market Size', 'Growth Projections', 'Key Players', 'Technology Trends'],
          link: 'market-analysis',
          badge: 'Report',
          pages: '45 pages'
        },
        {
          type: 'Technical Whitepapers',
          icon: <Layers className="w-6 h-6" />,
          title: 'AI Technology Deep Dives',
          description: 'Technical papers on AI algorithms and methodologies',
          items: ['OCR Technologies', 'NLP Techniques', 'ML Model Training', 'Accuracy Optimization'],
          link: 'technical-papers',
          badge: 'Research',
          papers: '12'
        },
        {
          type: 'Case Studies',
          icon: <Target className="w-6 h-6" />,
          title: 'Customer Success Stories',
          description: 'Detailed analysis of successful implementations',
          items: ['Banking Case Studies', 'Healthcare Implementations', 'Manufacturing Success', 'ROI Analysis'],
          link: 'case-studies',
          badge: 'Success',
          studies: '25+'
        },
        {
          type: 'Blog & Insights',
          icon: <Newspaper className="w-6 h-6" />,
          title: 'Latest Insights & Trends',
          description: 'Regular updates on AI and document processing',
          items: ['Technology Updates', 'Industry Insights', 'Best Practices', 'Future Trends'],
          link: 'blog',
          badge: 'Blog',
          posts: '100+'
        }
      ]
    },
    {
      category: 'Support & Community',
      icon: <Users className="w-12 h-12" />,
      title: 'Community & Support',
      description: 'Get help and connect with other rangkum.ai users',
      resources: [
        {
          type: 'Community Forum',
          icon: <MessageCircle className="w-6 h-6" />,
          title: 'Developer Community',
          description: 'Connect with developers and share knowledge',
          items: ['Technical Discussions', 'Code Sharing', 'Best Practices', 'Q&A'],
          link: 'community-forum',
          badge: 'Community',
          members: '5K+'
        },
        {
          type: 'Technical Support',
          icon: <Headphones className="w-6 h-6" />,
          title: '24/7 Technical Support',
          description: 'Get help from our expert support team',
          items: ['Ticket System', 'Live Chat', 'Phone Support', 'Screen Sharing'],
          link: 'technical-support',
          badge: 'Support',
          sla: '2 hours'
        },
        {
          type: 'Status & Updates',
          icon: <Megaphone className="w-6 h-6" />,
          title: 'Platform Status & Updates',
          description: 'Real-time platform status and announcements',
          items: ['System Status', 'Maintenance Windows', 'Feature Updates', 'Security Alerts'],
          link: 'status-updates',
          badge: 'Status',
          uptime: '99.9%'
        },
        {
          type: 'Office Hours',
          icon: <Calendar className="w-6 h-6" />,
          title: 'Expert Office Hours',
          description: 'Weekly sessions with rangkum.ai experts',
          items: ['Architecture Reviews', 'Implementation Help', 'Performance Optimization', 'Q&A'],
          link: 'office-hours',
          badge: 'Expert',
          schedule: 'Weekly'
        }
      ]
    }
  ];

  const featuredResources = [
    {
      type: 'Whitepaper',
      title: 'The Future of Document Processing: AI-Driven Transformation',
      description: 'Comprehensive analysis of how AI is revolutionizing document workflows across industries.',
      downloadCount: '2.5K+',
      rating: 4.8,
      pages: '32',
      category: 'Research',
      link: 'ai-transformation-whitepaper'
    },
    {
      type: 'Video Series',
      title: 'Master Class: Advanced Integration Techniques',
      description: 'Deep-dive video series on advanced integration patterns and optimization strategies.',
      viewCount: '8.2K+',
      rating: 4.9,
      duration: '3.5 hours',
      category: 'Tutorial',
      link: 'advanced-integration-masterclass'
    },
    {
      type: 'Case Study',
      title: 'Digital Bank Transformation: 85% Faster Customer Onboarding',
      description: 'Detailed case study of how a major digital bank achieved dramatic efficiency improvements.',
      readCount: '5.1K+',
      rating: 4.7,
      pages: '18',
      category: 'Success Story',
      link: 'digital-bank-case-study'
    }
  ];

  const handleResourceClick = (link: string) => {
    navigateTo(link);
  };

  const handleSupportClick = () => {
    navigateTo('support');
  };

  const handleCommunityClick = () => {
    navigateTo('community');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 via-white to-blue-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-6 px-4 py-2">
              <BookOpen className="w-4 h-4 mr-2" />
              Learning Center
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-8 leading-tight">
              {t('resources.title')}
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
              {t('resources.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-8" onClick={() => navigateTo('documentation')}>
                {t('resources.developer.docs')}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" size="lg" className="px-8" onClick={handleCommunityClick}>
                {t('resources.community.forum')}
              </Button>
            </div>
          </div>

          {/* Resource Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {resourceStats.map((stat, index) => (
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

      {/* Featured Resources */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">{t('resources.featured.content')}</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Most popular and highly-rated resources from our community
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredResources.map((resource, index) => (
              <Card 
                key={index} 
                className="hover:shadow-xl transition-all duration-300 cursor-pointer group overflow-hidden"
                onClick={() => handleResourceClick(resource.link)}
              >
                <div className="bg-gradient-to-r from-primary/5 to-primary/10 p-6 group-hover:from-primary/10 group-hover:to-primary/20 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="secondary">{resource.type}</Badge>
                    <Badge variant="outline">{resource.category}</Badge>
                  </div>
                  <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors">
                    {resource.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{resource.description}</p>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <Eye className="w-4 h-4 mr-1" />
                        {resource.downloadCount || resource.viewCount || resource.readCount}
                      </div>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 mr-1 text-yellow-500" />
                        {resource.rating}
                      </div>
                    </div>
                    <div className="text-xs">
                      {resource.pages && `${resource.pages} pages`}
                      {resource.duration && resource.duration}
                    </div>
                  </div>
                  
                  <Button className="w-full group-hover:bg-primary/90">
                    Access Resource
                    <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-24 bg-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Complete Resource Library</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive collection organized by category to help you succeed
            </p>
          </div>

          <div className="space-y-16">
            {resourceCategories.map((category, index) => (
              <div key={index}>
                <div className="flex items-center space-x-4 mb-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold">{category.title}</h3>
                    <p className="text-muted-foreground">{category.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {category.resources.map((resource, resourceIndex) => (
                    <Card 
                      key={resourceIndex} 
                      className="hover:shadow-lg transition-all duration-300 cursor-pointer group"
                      onClick={() => handleResourceClick(resource.link)}
                    >
                      <CardHeader className="pb-4">
                        <div className="flex items-center justify-between mb-3">
                          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                            {resource.icon}
                          </div>
                          <Badge variant="outline" className="text-xs">{resource.badge}</Badge>
                        </div>
                        <CardTitle className="text-lg group-hover:text-primary transition-colors">
                          {resource.title}
                        </CardTitle>
                        <CardDescription className="text-sm">
                          {resource.description}
                        </CardDescription>
                      </CardHeader>
                      
                      <CardContent className="pt-0">
                        <ul className="space-y-1 mb-4">
                          {resource.items.slice(0, 3).map((item, idx) => (
                            <li key={idx} className="text-xs text-muted-foreground flex items-center">
                              <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                        
                        {(resource.updated || resource.duration || resource.upcoming || resource.level || 
                          resource.articles || resource.pages || resource.papers || resource.studies || 
                          resource.posts || resource.members || resource.sla || resource.uptime || 
                          resource.schedule) && (
                          <div className="text-xs text-muted-foreground mb-3">
                            {resource.updated && `Updated: ${resource.updated}`}
                            {resource.duration && `Duration: ${resource.duration}`}
                            {resource.upcoming && `Next: ${resource.upcoming}`}
                            {resource.level && `Level: ${resource.level}`}
                            {resource.articles && `${resource.articles} articles`}
                            {resource.pages && `${resource.pages}`}
                            {resource.papers && `${resource.papers} papers`}
                            {resource.studies && `${resource.studies} studies`}
                            {resource.posts && `${resource.posts} posts`}
                            {resource.members && `${resource.members} members`}
                            {resource.sla && `SLA: ${resource.sla}`}
                            {resource.uptime && `Uptime: ${resource.uptime}`}
                            {resource.schedule && `${resource.schedule}`}
                          </div>
                        )}
                        
                        <Button variant="outline" size="sm" className="w-full text-xs group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                          Access {resource.type}
                          <ExternalLink className="w-3 h-3 ml-2" />
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Access Tools */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Quick Access Tools</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Fast access to the most commonly used resources and tools
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover:shadow-lg transition-shadow duration-300 cursor-pointer group text-center p-8">
              <Search className="w-12 h-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-lg font-semibold mb-2">Search Documentation</h3>
              <p className="text-sm text-muted-foreground mb-4">Find exactly what you need</p>
              <Button variant="outline" size="sm" className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                Search Now
              </Button>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300 cursor-pointer group text-center p-8">
              <Download className="w-12 h-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-lg font-semibold mb-2">{t('resources.download.resources')}</h3>
              <p className="text-sm text-muted-foreground mb-4">Access all downloadable content</p>
              <Button variant="outline" size="sm" className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                Browse Downloads
              </Button>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300 cursor-pointer group text-center p-8">
              <HelpCircle className="w-12 h-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-lg font-semibold mb-2">Get Help</h3>
              <p className="text-sm text-muted-foreground mb-4">Contact our support team</p>
              <Button variant="outline" size="sm" className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                Contact Support
              </Button>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300 cursor-pointer group text-center p-8">
              <Bookmark className="w-12 h-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-lg font-semibold mb-2">{t('resources.latest.updates')}</h3>
              <p className="text-sm text-muted-foreground mb-4">Stay updated with new content</p>
              <Button variant="outline" size="sm" className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                View Updates
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            {t('resources.support.title')}
          </h2>
          <p className="text-xl text-muted-foreground mb-10">
            {t('resources.support.subtitle')}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            <div className="flex flex-col items-center">
              <Headphones className="w-12 h-12 text-primary mb-4" />
              <h4 className="font-semibold mb-2">24/7 Support</h4>
              <p className="text-sm text-muted-foreground text-center">
                Round-the-clock technical support via chat, email, and phone
              </p>
            </div>
            
            <div className="flex flex-col items-center">
              <Users className="w-12 h-12 text-primary mb-4" />
              <h4 className="font-semibold mb-2">Expert Community</h4>
              <p className="text-sm text-muted-foreground text-center">
                Connect with thousands of developers and implementation experts
              </p>
            </div>
            
            <div className="flex flex-col items-center">
              <Calendar className="w-12 h-12 text-primary mb-4" />
              <h4 className="font-semibold mb-2">Office Hours</h4>
              <p className="text-sm text-muted-foreground text-center">
                Weekly sessions with rangkum.ai engineers and solution architects
              </p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8" onClick={handleSupportClick}>
              {t('common.contact')} Support
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button variant="outline" size="lg" className="px-8" onClick={handleCommunityClick}>
              Join Community
              <Users className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-green-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Sparkles className="w-16 h-16 mx-auto mb-6 opacity-90" />
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Start Building with rangkum.ai Today
          </h2>
          <p className="text-xl mb-10 opacity-90">
            Everything you need to succeed is at your fingertips. Start exploring our comprehensive 
            resource library and join thousands of developers already building with rangkum.ai.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              size="lg" 
              variant="secondary" 
              className="px-10"
              onClick={() => navigateTo('get-started')}
            >
              {t('common.getstarted')}
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="px-10 border-white text-white hover:bg-white hover:text-green-600"
              onClick={() => navigateTo('documentation')}
            >
              Browse Documentation
              <BookOpen className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}