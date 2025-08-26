import { RouterProvider, PageRouter } from './Router';
import { TranslationProvider } from './TranslationContext';
import { Header } from './Header';
import { Footer } from './Footer';


function App() {
    return (
        <TranslationProvider>
            <RouterProvider>
                <div className="min-h-screen bg-background text-foreground">
                    <Header />
                    <main className="flex-1">
                        <PageRouter />
                    </main>
                    <Footer />
                </div>
            </RouterProvider>
        </TranslationProvider>
    );
}

export default App;
