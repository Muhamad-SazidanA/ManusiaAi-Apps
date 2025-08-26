export interface RouteConfig {
  id: string;
  title: string;
  description: string;
  component?: string;
}

export const ROUTE_CONFIG: Record<string, RouteConfig> = {
  // Home Page
  'home': {
    id: 'home',
    title: 'Manusia.AI - Custom AI for Your Business',
    description: 'Transform your document processing with AI-powered automation',
    component: 'HomePage'
  },

  // Platform Pages
  'platform': {
    id: 'platform',
    title: 'Platform Overview',
    description: 'Comprehensive AI-powered document processing platform',
    component: 'PlatformOverviewPage'
  },
  'ai-processing': {
    id: 'ai-processing',
    title: 'AI Document Processing',
    description: 'Advanced document processing without templates or configuration',
    component: 'AIProcessingPage'
  },
  'json-output': {
    id: 'json-output',
    title: 'JSON API Output',
    description: 'Structured JSON output for seamless integration',
    component: 'JSONOutputPage'
  },
  'no-template': {
    id: 'no-template',
    title: 'No-Template Extraction',
    description: 'Advanced document processing without templates or configuration',
    component: 'NoTemplatePage'
  },
  'deployment': {
    id: 'deployment',
    title: 'Deployment Options',
    description: 'Flexible deployment solutions for every infrastructure need',
    component: 'PlaceholderPage'
  },

  // Solutions Pages
  'solutions': {
    id: 'solutions',
    title: 'Solutions Overview',
    description: 'Comprehensive solutions for document processing automation',
    component: 'SolutionsOverviewPage'
  },
  'customer-onboarding': {
    id: 'customer-onboarding',
    title: 'Customer Onboarding',
    description: 'Automate customer onboarding with AI-powered document processing',
    component: 'CustomerOnboardingPage'
  },
  'accounts-payable': {
    id: 'accounts-payable',
    title: 'Accounts Payable Automation',
    description: 'Streamline invoice processing and payment workflows',
    component: 'PlaceholderPage'
  },
  'purchase-orders': {
    id: 'purchase-orders',
    title: 'Purchase Order Processing',
    description: 'Automate PO processing from receipt to payment',
    component: 'PlaceholderPage'
  },
  'industry-solutions': {
    id: 'industry-solutions',
    title: 'Industry Solutions',
    description: 'Specialized solutions for different industries',
    component: 'PlaceholderPage'
  },

  // Customer Pages (Industries)
  'customers': {
    id: 'customers',
    title: 'Our Customers',
    description: 'Trusted by leading companies across Indonesia and Asia',
    component: 'CustomersOverviewPage'
  },
  'banking': {
    id: 'banking',
    title: 'Banking Solutions',
    description: 'KYC, loan processing, and compliance automation for banks',
    component: 'BankingPage'
  },
  'insurance': {
    id: 'insurance',
    title: 'Insurance Solutions',
    description: 'Claims processing and underwriting automation',
    component: 'InsurancePage'
  },
  'healthcare': {
    id: 'healthcare',
    title: 'Healthcare Solutions',
    description: 'Medical records and patient management automation',
    component: 'HealthcarePage'
  },
  'logistics': {
    id: 'logistics',
    title: 'Logistics Solutions',
    description: 'Shipping and customs documentation automation',
    component: 'LogisticsPage'
  },
  'education': {
    id: 'education',
    title: 'Education Solutions',
    description: 'Academic records and student administration',
    component: 'PlaceholderPage'
  },
  'manufacturing': {
    id: 'manufacturing',
    title: 'Manufacturing Solutions',
    description: 'Quality control and supply chain documentation',
    component: 'PlaceholderPage'
  },

  // Partners Pages
  'partners': {
    id: 'partners',
    title: 'Partner Program',
    description: 'Join our ecosystem of technology and solution partners',
    component: 'PartnersOverviewPage'
  },
  'partnership-opportunities': {
    id: 'partnership-opportunities',
    title: 'Partnership Opportunities',
    description: 'Explore different ways to partner with rangkum.ai',
    component: 'PlaceholderPage'
  },
  'partner-benefits': {
    id: 'partner-benefits',
    title: 'Partner Benefits',
    description: 'Benefits and advantages of partnering with us',
    component: 'PlaceholderPage'
  },
  'partner-types': {
    id: 'partner-types',
    title: 'Partnership Types',
    description: 'Different types of partnerships available',
    component: 'PlaceholderPage'
  },

  // Resources Pages
  'resources': {
    id: 'resources',
    title: 'Resources & Learning Center',
    description: 'Documentation, guides, and learning materials',
    component: 'ResourcesOverviewPage'
  },
  'blog': {
    id: 'blog',
    title: 'Blog & Insights',
    description: 'Latest articles on AI and document processing',
    component: 'PlaceholderPage'
  },
  'whitepapers': {
    id: 'whitepapers',
    title: 'Whitepapers',
    description: 'In-depth research and analysis',
    component: 'PlaceholderPage'
  },
  'webinars': {
    id: 'webinars',
    title: 'Webinars & Events',
    description: 'Live sessions and recorded content',
    component: 'PlaceholderPage'
  },

  // Company Pages
  'company': {
    id: 'company',
    title: 'About rangkum.ai',
    description: 'Our mission to transform document processing with AI',
    component: 'CompanyOverviewPage'
  },
  'about': {
    id: 'about',
    title: 'About Us',
    description: 'Learn more about our company and vision',
    component: 'PlaceholderPage'
  },
  'newsroom': {
    id: 'newsroom',
    title: 'Newsroom',
    description: 'Latest news, press releases, and media coverage',
    component: 'PlaceholderPage'
  },
  'careers': {
    id: 'careers',
    title: 'Careers',
    description: 'Join our team building the future of document intelligence',
    component: 'PlaceholderPage'
  },
  'contact': {
    id: 'contact',
    title: 'Contact Us',
    description: 'Get in touch with our sales and support team',
    component: 'PlaceholderPage'
  },

  // Form Pages
  'demo': {
    id: 'demo',
    title: 'Schedule Demo',
    description: 'Book a personalized demo of our platform',
    component: 'DemoSchedulePage'
  },
  'get-started': {
    id: 'get-started',
    title: 'Get Started',
    description: 'Start your free trial today',
    component: 'FreeTrialPage'
  },
  'free-trial': {
    id: 'free-trial',
    title: 'Free Trial',
    description: 'Start your 30-day free trial today',
    component: 'FreeTrialPage'
  },
  'case-studies': {
    id: 'case-studies',
    title: 'Customer Success Stories',
    description: 'Real results from our enterprise customers',
    component: 'CaseStudiesPage'
  },
  'partner-registration': {
    id: 'partner-registration',
    title: 'Partner Registration',
    description: 'Apply to become a rangkum.ai partner',
    component: 'PartnerRegistrationForm'
  },
  'consultation': {
    id: 'consultation',
    title: 'Schedule Consultation',
    description: 'Book a consultation with our solution architects',
    component: 'ConsultationForm'
  },
  'support': {
    id: 'support',
    title: 'Contact Support',
    description: 'Get technical support and assistance',
    component: 'SupportContactForm'
  },
  'roi-calculator': {
    id: 'roi-calculator',
    title: 'ROI Calculator',
    description: 'Calculate your potential savings with rangkum.ai',
    component: 'PlaceholderPage'
  },

  // Development & Testing Pages
  'navigation-test': {
    id: 'navigation-test',
    title: 'Navigation System Testing',
    description: 'Comprehensive testing dashboard for navigation functionality',
    component: 'NavigationTestPage'
  },
  'navigation-checklist': {
    id: 'navigation-checklist',
    title: 'Navigation Testing Checklist',
    description: 'Developer checklist for comprehensive navigation system verification',
    component: 'NavigationChecklistPage'
  }
};

export const getRouteConfig = (routeId: string): RouteConfig | undefined => {
  return ROUTE_CONFIG[routeId];
};