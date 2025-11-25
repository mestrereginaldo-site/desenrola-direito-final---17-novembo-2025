import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import Article from "./pages/Article";
import CategoryArticles from "./pages/CategoryArticles";
import AllArticles from "./pages/AllArticles";
import Search from "./pages/Search";
import NotFound from "./pages/not-found";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import About from "./pages/About";
import Calculators from "./pages/Calculators";
import Contact from "./pages/Contact";
import LegalConsultation from "./pages/LegalConsultation";
import DocumentModels from "./pages/DocumentModels";
import SupportCommunity from "./pages/SupportCommunity";
import { Toaster } from "@/components/ui/toaster";
import ScrollToTop from "./components/ui/ScrollToTop";

// Componente temporário para testar se as cores funcionam
function TestColors() {
  return (
    <div className="min-h-screen bg-background text-foreground p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-primary mb-4">
          Teste de Cores - Desenrola Direito
        </h1>
        <p className="text-lg text-muted-foreground mb-6">
          Se você está vendo cores, o tema está funcionando!
        </p>
        
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-card p-6 rounded-lg border">
            <h2 className="text-2xl font-semibold text-card-foreground mb-2">
              Cartão Primário
            </h2>
            <p className="text-muted-foreground">
              Este é um cartão de teste com cores do tema.
            </p>
            <button className="mt-4 bg-primary text-primary-foreground px-4 py-2 rounded">
              Botão Primário
            </button>
          </div>

          <div className="bg-secondary p-6 rounded-lg border">
            <h2 className="text-2xl font-semibold text-secondary-foreground mb-2">
              Cartão Secundário
            </h2>
            <p className="text-muted-foreground">
              Este é um cartão secundário.
            </p>
            <button className="mt-4 bg-accent text-accent-foreground px-4 py-2 rounded">
              Botão de Destaque
            </button>
          </div>

          <div className="bg-destructive p-6 rounded-lg border">
            <h2 className="text-2xl font-semibold text-destructive-foreground mb-2">
              Cartão Destrutivo
            </h2>
            <p className="text-muted-foreground">
              Este é um cartão destrutivo.
            </p>
            <button className="mt-4 bg-destructive text-destructive-foreground px-4 py-2 rounded">
              Botão Destrutivo
            </button>
          </div>
        </div>

        <div className="mt-8 p-6 bg-muted rounded-lg">
          <h2 className="text-2xl font-semibold text-muted-foreground">
            Área de Texto Secundário
          </h2>
          <p className="text-foreground">
            Esta é uma área com fundo secundário.
          </p>
        </div>
      </div>
    </div>
  );
}

function Router() {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow">
        <Switch>
          <Route path="/" component={TestColors} />
          <Route path="/teste-cores" component={TestColors} />
          <Route path="/artigos" component={AllArticles} />
          <Route path="/artigos/:slug" component={Article} />
          <Route path="/categorias/:slug" component={CategoryArticles} />
          <Route path="/busca" component={Search} />
          <Route path="/privacidade" component={Privacy} />
          <Route path="/termos" component={Terms} />
          <Route path="/sobre" component={About} />
          <Route path="/calculadoras" component={Calculators} />
          <Route path="/contato" component={Contact} />
          <Route path="/consulta-juridica" component={LegalConsultation} />
          <Route path="/modelos-documentos" component={DocumentModels} />
          <Route path="/comunidade" component={SupportCommunity} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
    </QueryClientProvider>
  );
}

export default App;
