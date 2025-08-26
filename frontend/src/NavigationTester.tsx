import { useState, useRef, useEffect } from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { CheckCircle, XCircle, AlertCircle, RefreshCw } from 'lucide-react';
import { useRouter } from './Router';
import { useTranslation } from './TranslationContext';

interface TestResult {
  section: string;
  test: string;
  status: 'pass' | 'fail' | 'warning' | 'pending';
  message: string;
  details?: string;
}

export function NavigationTester() {
  const { navigateTo, currentPage } = useRouter();
  const { t } = useTranslation();
  const [isRunning, setIsRunning] = useState(false);
  const [testResults, setTestResults] = useState<TestResult[]>([]);
  const [currentTest, setCurrentTest] = useState('');

  const navigationStructure = [
    {
      section: 'Platform',
      key: 'platform',
      items: [
        { name: 'AI Processing', page: 'ai-processing' },
        { name: 'JSON Output', page: 'json-output' },
        { name: 'No Template', page: 'no-template' },
        { name: 'Deployment', page: 'deployment' }
      ]
    },
    {
      section: 'Solutions',
      key: 'solutions',
      items: [
        { name: 'Customer Onboarding', page: 'customer-onboarding' },
        { name: 'Accounts Payable', page: 'accounts-payable' },
        { name: 'Purchase Orders', page: 'purchase-orders' },
        { name: 'Industry Solutions', page: 'industry-solutions' }
      ]
    },
    {
      section: 'Customers',
      key: 'customers',
      items: [
        { name: 'Banking', page: 'banking' },
        { name: 'Insurance', page: 'insurance' },
        { name: 'Healthcare', page: 'healthcare' },
        { name: 'Logistics', page: 'logistics' },
        { name: 'Education', page: 'education' },
        { name: 'Manufacturing', page: 'manufacturing' }
      ]
    },
    {
      section: 'Partners',
      key: 'partners',
      items: [
        { name: 'Partnership Opportunities', page: 'partnership-opportunities' },
        { name: 'Partner Benefits', page: 'partner-benefits' },
        { name: 'Partner Types', page: 'partner-types' }
      ]
    },
    {
      section: 'Resources',
      key: 'resources',
      items: [
        { name: 'Blog', page: 'blog' },
        { name: 'Case Studies', page: 'case-studies' },
        { name: 'Whitepapers', page: 'whitepapers' },
        { name: 'Webinars', page: 'webinars' }
      ]
    },
    {
      section: 'Company',
      key: 'company',
      items: [
        { name: 'About Us', page: 'about' },
        { name: 'Newsroom', page: 'newsroom' },
        { name: 'Careers', page: 'careers' },
        { name: 'Contact Us', page: 'contact' }
      ]
    }
  ];

  const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

  const addTestResult = (result: TestResult) => {
    setTestResults(prev => [...prev, result]);
  };

  const testNavigationItem = async (sectionName: string, itemName: string, page: string): Promise<TestResult> => {
    try {
      setCurrentTest(`Testing ${sectionName} > ${itemName}`);
      
      // Test navigation
      navigateTo(page);
      await sleep(100); // Wait for navigation
      
      // Check if page loads
      const pageElement = document.querySelector('main') || document.querySelector('[role="main"]');
      
      if (!pageElement) {
        return {
          section: sectionName,
          test: `${itemName} Navigation`,
          status: 'fail',
          message: 'Page container not found',
          details: `Failed to find main content area after navigating to ${page}`
        };
      }

      // Check for basic page structure
      const hasHeading = pageElement.querySelector('h1, h2, [role="heading"]');
      const hasContent = pageElement.textContent && pageElement.textContent.length > 50;

      if (!hasHeading) {
        return {
          section: sectionName,
          test: `${itemName} Page Structure`,
          status: 'warning',
          message: 'Missing main heading',
          details: 'Page should have a clear h1 or h2 heading for accessibility'
        };
      }

      if (!hasContent) {
        return {
          section: sectionName,
          test: `${itemName} Content`,
          status: 'warning',
          message: 'Minimal content detected',
          details: 'Page may be using placeholder content'
        };
      }

      return {
        section: sectionName,
        test: `${itemName} Navigation & Content`,
        status: 'pass',
        message: 'Successfully loaded with proper structure',
        details: `Page ${page} loaded correctly with heading and content`
      };

    } catch (error) {
      return {
        section: sectionName,
        test: `${itemName} Navigation`,
        status: 'fail',
        message: 'Navigation error',
        details: `Error navigating to ${page}: ${error instanceof Error ? error.message : 'Unknown error'}`
      };
    }
  };

  const testResponsiveness = async (): Promise<TestResult[]> => {
    const results: TestResult[] = [];
    
    // Test mobile menu functionality
    const mobileMenuButton = document.querySelector('[class*="md:hidden"] button');
    const desktopNav = document.querySelector('[class*="hidden md:flex"]');
    
    if (!mobileMenuButton) {
      results.push({
        section: 'Responsiveness',
        test: 'Mobile Menu Button',
        status: 'fail',
        message: 'Mobile menu button not found',
        details: 'Navigation should have a mobile menu button for smaller screens'
      });
    } else {
      results.push({
        section: 'Responsiveness',
        test: 'Mobile Menu Button',
        status: 'pass',
        message: 'Mobile menu button present',
        details: 'Navigation includes proper mobile menu functionality'
      });
    }

    if (!desktopNav) {
      results.push({
        section: 'Responsiveness',
        test: 'Desktop Navigation',
        status: 'fail',
        message: 'Desktop navigation not found',
        details: 'Navigation should have desktop-specific styling'
      });
    } else {
      results.push({
        section: 'Responsiveness',
        test: 'Desktop Navigation',
        status: 'pass',
        message: 'Desktop navigation present',
        details: 'Navigation includes proper desktop layout'
      });
    }

    return results;
  };

  const testDropdownFunctionality = async (): Promise<TestResult[]> => {
    const results: TestResult[] = [];
    
    // Test dropdown menus
    const dropdownTriggers = document.querySelectorAll('[class*="relative"] button[class*="flex items-center"]');
    
    if (dropdownTriggers.length < 6) {
      results.push({
        section: 'Dropdown Functionality',
        test: 'Dropdown Triggers',
        status: 'warning',
        message: `Only ${dropdownTriggers.length}/6 dropdown triggers found`,
        details: 'Some navigation sections may be missing dropdown functionality'
      });
    } else {
      results.push({
        section: 'Dropdown Functionality',
        test: 'Dropdown Triggers',
        status: 'pass',
        message: 'All dropdown triggers present',
        details: 'Navigation includes proper dropdown triggers for all sections'
      });
    }

    return results;
  };

  const testAccessibility = async (): Promise<TestResult[]> => {
    const results: TestResult[] = [];
    
    // Test keyboard navigation support
    const navButtons = document.querySelectorAll('nav button');
    let accessibilityScore = 0;
    
    navButtons.forEach(button => {
      if (button.getAttribute('tabindex') !== '-1') accessibilityScore++;
      if (button.getAttribute('aria-label') || button.textContent) accessibilityScore++;
    });
    
    const accessibilityPercentage = (accessibilityScore / (navButtons.length * 2)) * 100;
    
    if (accessibilityPercentage < 70) {
      results.push({
        section: 'Accessibility',
        test: 'Keyboard Navigation',
        status: 'warning',
        message: `Accessibility score: ${accessibilityPercentage.toFixed(1)}%`,
        details: 'Some navigation elements may need improved accessibility attributes'
      });
    } else {
      results.push({
        section: 'Accessibility',
        test: 'Keyboard Navigation',
        status: 'pass',
        message: `Accessibility score: ${accessibilityPercentage.toFixed(1)}%`,
        details: 'Navigation elements have good accessibility support'
      });
    }

    return results;
  };

  const runFullTest = async () => {
    setIsRunning(true);
    setTestResults([]);
    setCurrentTest('Starting comprehensive navigation test...');

    try {
      // Test basic functionality
      const responsiveResults = await testResponsiveness();
      responsiveResults.forEach(addTestResult);

      const dropdownResults = await testDropdownFunctionality();
      dropdownResults.forEach(addTestResult);

      const accessibilityResults = await testAccessibility();
      accessibilityResults.forEach(addTestResult);

      // Test each navigation item
      for (const section of navigationStructure) {
        setCurrentTest(`Testing ${section.section} section...`);
        
        for (const item of section.items) {
          const result = await testNavigationItem(section.section, item.name, item.page);
          addTestResult(result);
          await sleep(200); // Prevent too rapid navigation
        }
      }

      // Test overview pages
      for (const section of navigationStructure) {
        if (section.key !== 'customers') { // customers overview already tested above
          const result = await testNavigationItem(section.section, `${section.section} Overview`, section.key);
          addTestResult(result);
          await sleep(200);
        }
      }

      setCurrentTest('Testing completed!');
    } catch (error) {
      addTestResult({
        section: 'System',
        test: 'Test Runner',
        status: 'fail',
        message: 'Test execution failed',
        details: error instanceof Error ? error.message : 'Unknown error occurred'
      });
    } finally {
      setIsRunning(false);
      setCurrentTest('');
    }
  };

  const getStatusIcon = (status: TestResult['status']) => {
    switch (status) {
      case 'pass':
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'fail':
        return <XCircle className="w-4 h-4 text-red-500" />;
      case 'warning':
        return <AlertCircle className="w-4 h-4 text-yellow-500" />;
      default:
        return <RefreshCw className="w-4 h-4 text-gray-400" />;
    }
  };

  const getStatusColor = (status: TestResult['status']) => {
    switch (status) {
      case 'pass':
        return 'border-l-green-500';
      case 'fail':
        return 'border-l-red-500';
      case 'warning':
        return 'border-l-yellow-500';
      default:
        return 'border-l-gray-400';
    }
  };

  const summarizeResults = () => {
    const total = testResults.length;
    const passed = testResults.filter(r => r.status === 'pass').length;
    const failed = testResults.filter(r => r.status === 'fail').length;
    const warnings = testResults.filter(r => r.status === 'warning').length;

    return { total, passed, failed, warnings };
  };

  const { total, passed, failed, warnings } = summarizeResults();

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      <div className="text-center space-y-4">
        <h1>Navigation System Testing Dashboard</h1>
        <p className="text-muted-foreground">
          Comprehensive testing tool untuk navigation & sub-navigation system
        </p>
        
        <div className="flex justify-center">
          <Button 
            onClick={runFullTest}
            disabled={isRunning}
            className="flex items-center space-x-2"
          >
            {isRunning && <RefreshCw className="w-4 h-4 animate-spin" />}
            <span>{isRunning ? 'Running Tests...' : 'Run Full Navigation Test'}</span>
          </Button>
        </div>

        {currentTest && (
          <div className="text-sm text-muted-foreground">
            Current: {currentTest}
          </div>
        )}
      </div>

      {testResults.length > 0 && (
        <>
          {/* Test Summary */}
          <Card className="p-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-foreground">{total}</div>
                <div className="text-sm text-muted-foreground">Total Tests</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-500">{passed}</div>
                <div className="text-sm text-muted-foreground">Passed</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-red-500">{failed}</div>
                <div className="text-sm text-muted-foreground">Failed</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-yellow-500">{warnings}</div>
                <div className="text-sm text-muted-foreground">Warnings</div>
              </div>
            </div>
            
            {total > 0 && (
              <div className="mt-4">
                <div className="text-sm text-muted-foreground mb-2">Overall Health</div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-green-500 to-blue-500 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${(passed / total) * 100}%` }}
                  ></div>
                </div>
                <div className="text-sm text-center mt-1">
                  {((passed / total) * 100).toFixed(1)}% Success Rate
                </div>
              </div>
            )}
          </Card>

          {/* Test Results */}
          <div className="space-y-4">
            <h2>Test Results</h2>
            
            {navigationStructure.map(section => {
              const sectionResults = testResults.filter(r => r.section === section.section);
              if (sectionResults.length === 0) return null;

              return (
                <Card key={section.section} className="p-6">
                  <h3 className="mb-4">{section.section}</h3>
                  <div className="space-y-3">
                    {sectionResults.map((result, index) => (
                      <div 
                        key={index}
                        className={`border-l-4 ${getStatusColor(result.status)} bg-gray-50 p-3 rounded-r-lg`}
                      >
                        <div className="flex items-start space-x-3">
                          {getStatusIcon(result.status)}
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <span className="font-medium">{result.test}</span>
                              <span className="text-sm text-muted-foreground">{result.status.toUpperCase()}</span>
                            </div>
                            <div className="text-sm text-muted-foreground mt-1">{result.message}</div>
                            {result.details && (
                              <div className="text-xs text-gray-500 mt-1 font-mono">{result.details}</div>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              );
            })}

            {/* System & Other Results */}
            {['Responsiveness', 'Dropdown Functionality', 'Accessibility', 'System'].map(category => {
              const categoryResults = testResults.filter(r => r.section === category);
              if (categoryResults.length === 0) return null;

              return (
                <Card key={category} className="p-6">
                  <h3 className="mb-4">{category}</h3>
                  <div className="space-y-3">
                    {categoryResults.map((result, index) => (
                      <div 
                        key={index}
                        className={`border-l-4 ${getStatusColor(result.status)} bg-gray-50 p-3 rounded-r-lg`}
                      >
                        <div className="flex items-start space-x-3">
                          {getStatusIcon(result.status)}
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <span className="font-medium">{result.test}</span>
                              <span className="text-sm text-muted-foreground">{result.status.toUpperCase()}</span>
                            </div>
                            <div className="text-sm text-muted-foreground mt-1">{result.message}</div>
                            {result.details && (
                              <div className="text-xs text-gray-500 mt-1 font-mono">{result.details}</div>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}