import React from 'react';
import { AIProcessingPage } from '../pages/AIProcessingPage';
import { JSONOutputPage } from '../pages/JSONOutputPage';
import { CustomerOnboardingPage } from '../pages/CustomerOnboardingPage';
import { PlatformOverviewPage } from '../pages/PlatformOverviewPage';
import { SolutionsOverviewPage } from '../pages/SolutionsOverviewPage';
import { CustomersOverviewPage } from '../pages/CustomersOverviewPage';
import { PartnersOverviewPage } from '../pages/PartnersOverviewPage';
import { ResourcesOverviewPage } from '../pages/ResourcesOverviewPage';
import { CompanyOverviewPage } from '../pages/CompanyOverviewPage';
import { BankingPage } from '../pages/BankingPage';
import { InsurancePage } from '../pages/InsurancePage';
import { HealthcarePage } from '../pages/HealthcarePage';
import { LogisticsPage } from '../pages/LogisticsPage';
import { NoTemplatePage } from '../pages/NoTemplatePage';
import { FreeTrialPage } from '../pages/FreeTrialPage';
import { DemoSchedulePage } from '../pages/DemoSchedulePage';
import { CaseStudiesPage } from '../pages/CaseStudiesPage';
import { HomePage } from '../pages/HomePage';
import { PartnerRegistrationForm } from '../PartnerRegistrationForm';
import { ConsultationForm } from '../ConsultationForm';
import { SupportContactForm } from '../SupportContactForm';
import { PlaceholderPage } from './PlaceholderPage';
import { NavigationTestPage } from '../pages/NavigationTestPage';
import { NavigationChecklistPage } from '../pages/NavigationChecklistPage';
import { getRouteConfig } from './routeConfig';

// Component registry for actual page components
export const PAGE_COMPONENTS: Record<string, React.ComponentType> = {
  'HomePage': HomePage,
  'PlatformOverviewPage': PlatformOverviewPage,
  'AIProcessingPage': AIProcessingPage,
  'JSONOutputPage': JSONOutputPage,
  'NoTemplatePage': NoTemplatePage,
  'SolutionsOverviewPage': SolutionsOverviewPage,
  'CustomerOnboardingPage': CustomerOnboardingPage,
  'CustomersOverviewPage': CustomersOverviewPage,
  'BankingPage': BankingPage,
  'InsurancePage': InsurancePage,
  'HealthcarePage': HealthcarePage,
  'LogisticsPage': LogisticsPage,
  'PartnersOverviewPage': PartnersOverviewPage,
  'ResourcesOverviewPage': ResourcesOverviewPage,
  'CompanyOverviewPage': CompanyOverviewPage,
  'FreeTrialPage': FreeTrialPage,
  'DemoSchedulePage': DemoSchedulePage,
  'CaseStudiesPage': CaseStudiesPage,
  'PartnerRegistrationForm': PartnerRegistrationForm,
  'ConsultationForm': ConsultationForm,
  'SupportContactForm': SupportContactForm,
  'NavigationTestPage': NavigationTestPage,
  'NavigationChecklistPage': NavigationChecklistPage,
};

// Function to render the appropriate component for a route
export const renderPageComponent = (routeId: string): React.ReactElement => {
  const routeConfig = getRouteConfig(routeId);

  if (!routeConfig) {
    return <PlaceholderPage title="Page Not Found" description="The requested page could not be found." />;
  }

  if (routeConfig.component && PAGE_COMPONENTS[routeConfig.component]) {
    const Component = PAGE_COMPONENTS[routeConfig.component];
    return <Component />;
  }

  // Return placeholder page for routes without components
  return <PlaceholderPage title={routeConfig.title} description={routeConfig.description} />;
};