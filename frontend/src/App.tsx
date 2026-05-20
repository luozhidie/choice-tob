import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Route } from 'react-router-dom';
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AnimatedRoutes } from "@/components/AnimatedRoutes";
import { PageTransition } from "@/components/PageTransition";

// 用户端页面
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// 管理端页面
import AdminLogin from "./pages/admin/Login";
import AdminDashboard from "./pages/admin/Dashboard";

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
            {/* 用户端路由 */}
            <Route path="/" element={<PageTransition transition="slide-up"><Index /></PageTransition>} />
            
            {/* 管理端路由 */}
            <Route path="/admin/login" element={<PageTransition transition="fade"><AdminLogin /></PageTransition>} />
            <Route path="/admin/dashboard" element={<PageTransition transition="slide-up"><AdminDashboard /></PageTransition>} />
            
            {/* 404 */}
            <Route path="*" element={<PageTransition transition="fade"><NotFound /></PageTransition>} />
          </AnimatedRoutes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App
