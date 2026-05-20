import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Route } from 'react-router-dom';
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AnimatedRoutes } from "@/components/AnimatedRoutes";
import { PageTransition } from "@/components/PageTransition";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import VipTest from "./pages/VipTest";
import Products from "./pages/Products";
import SalesAnalysis from "./pages/SalesAnalysis";
import Inventory from "./pages/Inventory";
import Members from "./pages/Members";
import Reports from "./pages/Reports";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
      gcTime: 5 * 60 * 1000,
      retry: 1,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    },
    mutations: { retry: 1 },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <BrowserRouter>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">
              <AnimatedRoutes>
                <Route path="/" element={<PageTransition transition="slide-up"><Index /></PageTransition>} />
                <Route path="/dashboard" element={<PageTransition transition="slide-up"><Dashboard /></PageTransition>} />
                <Route path="/vip" element={<PageTransition transition="slide-up"><VipTest /></PageTransition>} />
                <Route path="/products" element={<PageTransition transition="slide-up"><Products /></PageTransition>} />
                <Route path="/sales-analysis" element={<PageTransition transition="slide-up"><SalesAnalysis /></PageTransition>} />
                <Route path="/inventory" element={<PageTransition transition="slide-up"><Inventory /></PageTransition>} />
                <Route path="/members" element={<PageTransition transition="slide-up"><Members /></PageTransition>} />
                <Route path="/reports" element={<PageTransition transition="slide-up"><Reports /></PageTransition>} />
                <Route path="/login" element={<PageTransition transition="slide-up"><Login /></PageTransition>} />
                <Route path="*" element={<PageTransition transition="fade"><NotFound /></PageTransition>} />
              </AnimatedRoutes>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App
