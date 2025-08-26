import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { useTranslation } from './TranslationContext';
import { useRouter } from './Router';
import { CheckCircle, ArrowRight, Zap, Shield, Globe, Clock, Target, TrendingUp, Sparkles } from 'lucide-react';

export function HeroSection() {
  const { t } = useTranslation();
  const { navigateTo } = useRouter();

  const handleGetStartedClick = () => {
    navigateTo('free-trial');
  };

  const handleDemoClick = () => {
    navigateTo('demo');
  };

  return (
    <section className="relative bg-gradient-to-br from-background via-background to-accent/20 pt-20 pb-32 sm:pt-32 sm:pb-40 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.primary/10),transparent)] opacity-20"></div>
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-primary/10 ring-1 ring-primary/5 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Announcement Badge */}
          <Badge variant="secondary" className="mb-8 px-6 py-3 text-sm hover:bg-secondary/80 transition-colors duration-200 cursor-pointer">
            <Sparkles className="w-4 h-4 mr-2" />
            Teknologi AI Terdepan untuk Pemrosesan Dokumen Tanpa Template
          </Badge>

          {/* Main Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-8 leading-tight">
            {t('hero.title').split(' ').map((word, index, words) => {
              if (word === 'Data' && words[index + 1] === 'Terstruktur') {
                return (
                  <span key={index} className="relative inline-block">
                    <span className="bg-gradient-to-r from-primary via-primary to-primary/80 bg-clip-text text-transparent">
                      {word} {words[index + 1]}
                    </span>
                    <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary/30 to-transparent rounded-full"></div>
                  </span>
                );
              }
              if (words[index - 1] === 'Data') return null; // Skip "Terstruktur" as it's handled above
              return <span key={index}>{word} </span>;
            })}
          </h1>

          {/* Enhanced Subheadline */}
          <p className="text-xl sm:text-2xl text-muted-foreground max-w-4xl mx-auto mb-12 leading-relaxed">
            {t('hero.subtitle')}
          </p>

          {/* Enhanced Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 max-w-4xl mx-auto">
            <div className="flex flex-col items-center p-6 bg-white/70 backdrop-blur-sm rounded-2xl border border-border/50 hover:shadow-lg transition-all duration-300 group">
              <Target className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform duration-200" />
              <span className="font-bold text-2xl">99.8%</span>
              <span className="text-sm text-muted-foreground">{t('hero.accuracy')}</span>
            </div>
            <div className="flex flex-col items-center p-6 bg-white/70 backdrop-blur-sm rounded-2xl border border-border/50 hover:shadow-lg transition-all duration-300 group">
              <Clock className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform duration-200" />
              <span className="font-bold text-2xl">&lt; 30s</span>
              <span className="text-sm text-muted-foreground">{t('hero.processtime')}</span>
            </div>
            <div className="flex flex-col items-center p-6 bg-white/70 backdrop-blur-sm rounded-2xl border border-border/50 hover:shadow-lg transition-all duration-300 group">
              <TrendingUp className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform duration-200" />
              <span className="font-bold text-2xl">85%</span>
              <span className="text-sm text-muted-foreground">{t('hero.costreduction')}</span>
            </div>
            <div className="flex flex-col items-center p-6 bg-white/70 backdrop-blur-sm rounded-2xl border border-border/50 hover:shadow-lg transition-all duration-300 group">
              <Shield className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform duration-200" />
              <span className="font-bold text-2xl">ISO 27001</span>
              <span className="text-sm text-muted-foreground">{t('hero.certification')}</span>
            </div>
          </div>

          {/* Enhanced Feature Pills */}
          <div className="flex flex-wrap justify-center items-center gap-4 mb-12 text-sm">
            <div className="flex items-center bg-green-50 text-green-700 px-5 py-3 rounded-full border border-green-200 hover:bg-green-100 transition-colors duration-200">
              <CheckCircle className="w-4 h-4 mr-2" />
              {t('hero.notemplate')}
            </div>
            <div className="flex items-center bg-blue-50 text-blue-700 px-5 py-3 rounded-full border border-blue-200 hover:bg-blue-100 transition-colors duration-200">
              <CheckCircle className="w-4 h-4 mr-2" />
              {t('hero.selflearning')}
            </div>
            <div className="flex items-center bg-purple-50 text-purple-700 px-5 py-3 rounded-full border border-purple-200 hover:bg-purple-100 transition-colors duration-200">
              <CheckCircle className="w-4 h-4 mr-2" />
              {t('hero.smarttable')}
            </div>
            <div className="flex items-center bg-orange-50 text-orange-700 px-5 py-3 rounded-full border border-orange-200 hover:bg-orange-100 transition-colors duration-200">
              <CheckCircle className="w-4 h-4 mr-2" />
              {t('hero.jsonready')}
            </div>
          </div>

          {/* Enhanced CTA Buttons with Navigation */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button 
              size="lg" 
              className="px-10 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
              onClick={handleGetStartedClick}
            >
              {t('hero.startfreetrial')}
              <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-200" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="px-10 py-4 text-lg bg-white/80 backdrop-blur-sm hover:bg-white transition-all duration-300 group border-2"
              onClick={handleDemoClick}
            >
              {t('hero.scheduledemo')}
            </Button>
          </div>

          {/* Enhanced Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-muted-foreground mb-8">
            <div className="flex items-center bg-white/60 backdrop-blur-sm px-4 py-3 rounded-lg border border-border/30 hover:bg-white/80 transition-colors duration-200">
              <Shield className="w-5 h-5 mr-2 text-green-600" />
              {t('hero.iso27001')}
            </div>
            <div className="flex items-center bg-white/60 backdrop-blur-sm px-4 py-3 rounded-lg border border-border/30 hover:bg-white/80 transition-colors duration-200">
              <Globe className="w-5 h-5 mr-2 text-blue-600" />
              {t('hero.gdprcompliant')}
            </div>
            <div className="flex items-center bg-white/60 backdrop-blur-sm px-4 py-3 rounded-lg border border-border/30 hover:bg-white/80 transition-colors duration-200">
              <CheckCircle className="w-5 h-5 mr-2 text-purple-600" />
              {t('hero.uptimesla')}
            </div>
          </div>

          {/* Social Proof */}
          <p className="text-sm text-muted-foreground mb-8">
            {t('hero.trusted')}
          </p>
        </div>

        {/* Enhanced Product Demo/Preview - Fixed Overlapping Issue */}
        <div className="mt-24 relative">
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-border/20 p-8 sm:p-12 mx-auto max-w-6xl hover:shadow-3xl transition-all duration-500">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-semibold mb-4">{t('hero.howworks')}</h3>
              <p className="text-muted-foreground">{t('hero.howworks.subtitle')}</p>
            </div>
            
            <div className="bg-gradient-to-br from-accent/30 to-accent/60 rounded-2xl p-8 sm:p-10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 items-center">
                {/* Input */}
                <div className="text-center space-y-6 group">
                  <div className="w-24 h-24 bg-gradient-to-br from-red-100 to-red-200 rounded-3xl flex items-center justify-center mx-auto shadow-lg group-hover:scale-105 transition-transform duration-300">
                    <span className="text-red-700 font-bold text-xl">PDF</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">{t('hero.upload.title')}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {t('hero.upload.desc')}
                    </p>
                  </div>
                  <div className="bg-white/60 rounded-lg p-4 text-xs text-muted-foreground">
                    ✓ Support multi-halaman<br/>
                    ✓ Pengenalan tulisan tangan<br/>
                    ✓ Deteksi tabel otomatis
                  </div>
                </div>
                
                {/* Processing - Fixed Circle Overlap */}
                <div className="flex flex-col items-center space-y-6">
                  <div className="relative flex items-center justify-center">
                    <ArrowRight className="w-12 h-12 text-primary animate-pulse z-10" />
                    {/* Fixed the circle positioning to prevent overlap */}
                    <div className="absolute inset-0 w-20 h-20 -top-4 -left-4 border-2 border-dashed border-primary/30 rounded-full animate-spin" 
                         style={{animationDuration: '3s'}}></div>
                  </div>
                  <div className="text-center">
                    <h4 className="font-semibold text-primary mb-2">{t('hero.processing.title')}</h4>
                    <p className="text-xs text-muted-foreground">
                      {t('hero.processing.desc')}
                    </p>
                  </div>
                </div>
                
                {/* Output */}
                <div className="text-center space-y-6 group">
                  <div className="w-24 h-24 bg-gradient-to-br from-green-100 to-green-200 rounded-3xl flex items-center justify-center mx-auto shadow-lg group-hover:scale-105 transition-transform duration-300">
                    <span className="text-green-700 font-bold text-xl">JSON</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">{t('hero.output.title')}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {t('hero.output.desc')}
                    </p>
                  </div>
                  <div className="bg-white/60 rounded-lg p-4 text-xs text-muted-foreground">
                    ✓ Format siap API<br/>
                    ✓ Skor kepercayaan<br/>
                    ✓ Validasi field otomatis
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}