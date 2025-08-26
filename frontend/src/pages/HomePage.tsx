import { HeroSection } from '../HeroSection';
import { PlatformSection } from '../PlatformSection';
import { SolutionsSection } from '../SolutionsSection';
import { CustomersSection } from '../CustomersSection';
import { PartnersSection } from '../PartnersSection';
import { ResourcesSection } from '../ResourcesSection';
import { CompanySection } from '../CompanySection';

export const HomePage = () => {
    return (
        <div className="min-h-screen">
            <HeroSection />
            <PlatformSection />
            <SolutionsSection />
            <CustomersSection />
            <PartnersSection />
            <ResourcesSection />
            <CompanySection />
        </div>
    );
};
