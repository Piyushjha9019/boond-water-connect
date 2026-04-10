import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Onboarding from "./pages/Onboarding";
import Dashboard from "./pages/Dashboard";
import CostEstimation from "./pages/CostEstimation";
import MethodSuggestion from "./pages/MethodSuggestion";
import HealthAlerts from "./pages/HealthAlerts";
import DroughtStatus from "./pages/DroughtStatus";
import Contractors from "./pages/Contractors";
import Notifications from "./pages/Notifications";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Onboarding />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/cost" element={<CostEstimation />} />
          <Route path="/method" element={<MethodSuggestion />} />
          <Route path="/health" element={<HealthAlerts />} />
          <Route path="/drought" element={<DroughtStatus />} />
          <Route path="/contractors" element={<Contractors />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
