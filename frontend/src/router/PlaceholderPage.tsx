interface PlaceholderPageProps {
  title: string;
  description: string;
}

export const PlaceholderPage = ({ title, description }: PlaceholderPageProps) => (
  <div className="min-h-screen bg-background py-24">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div className="mb-8">
        <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
            <div className="w-6 h-6 bg-primary/40 rounded-full"></div>
          </div>
        </div>
      </div>
      
      <h1 className="text-4xl font-bold mb-6">{title}</h1>
      <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
        {description}
      </p>
      
      <div className="bg-accent/30 border border-border rounded-2xl p-8 mb-8">
        <p className="text-muted-foreground">
          This page is under development and will be available soon.
        </p>
      </div>
      
      <div className="text-sm text-muted-foreground">
        <p>In the meantime, you can:</p>
        <div className="flex flex-wrap justify-center gap-4 mt-4">
          <button 
            onClick={() => window.history.back()} 
            className="text-primary hover:underline"
          >
            ← Go Back
          </button>
          <span className="text-border">|</span>
          <a href="#" className="text-primary hover:underline">
            Visit Home Page
          </a>
          <span className="text-border">|</span>
          <a href="#contact" className="text-primary hover:underline">
            Contact Support
          </a>
        </div>
      </div>
    </div>
  </div>
);