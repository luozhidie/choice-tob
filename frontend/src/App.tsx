import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Route } from 'react-router-dom';
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AnimatedRoutes } from "@/components/AnimatedRoutes";
import { PageTransition } from "@/components/PageTransition";

// 用户端
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// 管理端
import AdminLogin from "./pages/admin/Login";
import AdminDashboard from "./pages/admin/Dashboard";
import AdminVip from "./pages/admin/Vip";
import AdminProducts from "./pages/admin/Products";
import AdminSalesAnalysis from "./pages/admin/SalesAnalysis";
import AdminInventory from "./pages/admin/Inventory";
import AdminMembers from "./pages/admin/Members";
import AdminReports from "./pages/admin/Reports";

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
          <AnimatedRoutes>
            {/* 用户端 */}
            <Route path="/" element={<PageTransition transition="slide-up"><Index /></PageTransition>} />

            {/* 管理端 */}
            <Route path="/admin/login" element={<PageTransition transition="fade"><AdminLogin /></PageTransition>} />
            <Route path="/admin/dashboard" element={<PageTransition transition="slide-up"><AdminDashboard /></PageTransition>} />
            <Route path="/admin/vip" element={<PageTransition transition="slide-up"><AdminVip /></PageTransition>} />
            <Route path="/admin/products" element={<PageTransition transition="slide-up"><AdminProducts /></PageTransition>} />
            <Route path="/admin/sales-analysis" element={<PageTransition transition="slide-up"><AdminSalesAnalysis /></PageTransition>} />
            <Route path="/admin/inventory" element={<PageTransition transition="slide-up"><AdminInventory /></PageTransition>} />
            <Route path="/admin/members" element={<PageTransition transition="slide-up"><AdminMembers /></PageTransition>} />
            <Route path="/admin/reports" element={<PageTransition transition="slide-up"><AdminReports /></PageTransition>} />

            {/* 404 */}
            <Route path="*" element={<PageTransition transition="fade"><NotFound /></PageTransition>} />
          </AnimatedRoutes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
