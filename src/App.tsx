import { Toaster } from '@/components/ui/toaster';
import { Toaster as Sonner } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { MainLayout } from '@/components/layout/MainLayout';
import { Dashboard } from '@/pages/Dashboard';
import { Profile } from '@/pages/Profile';
import { Welcome } from '@/pages/Welcome';
import { AskQuestions } from '@/pages/AskQuestions';
import { Tables } from '@/pages/Tables';
import { ButtonsDemo } from '@/pages/ButtonsDemo';
import { Login } from '@/pages/auth/Login';
import { Register } from '@/pages/auth/Register';
import { ForgotPassword } from '@/pages/auth/ForgotPassword';
import NotFound from './pages/NotFound';
import { useAuth } from '@/hooks/useAuth';

const queryClient = new QueryClient();

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? (
    <>{children}</>
  ) : (
    <Navigate to="/auth/login" replace />
  );
};

const PublicRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated } = useAuth();
  return !isAuthenticated ? <>{children}</> : <Navigate to="/" replace />;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner richColors />
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route
            path="/auth/login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path="/auth/register"
            element={
              <PublicRoute>
                <Register />
              </PublicRoute>
            }
          />
          <Route
            path="/auth/forgot-password"
            element={
              <PublicRoute>
                <ForgotPassword />
              </PublicRoute>
            }
          />

          {/* Protected Routes */}
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <MainLayout>
                  <Dashboard />
                </MainLayout>
              </ProtectedRoute>
            }
          />

          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <MainLayout>
                  <Profile />
                </MainLayout>
              </ProtectedRoute>
            }
          />

          <Route
            path="/welcome"
            element={
              <ProtectedRoute>
                <MainLayout>
                  <Welcome />
                </MainLayout>
              </ProtectedRoute>
            }
          />

          <Route
            path="/ask-questions"
            element={
              <ProtectedRoute>
                <MainLayout>
                  <AskQuestions />
                </MainLayout>
              </ProtectedRoute>
            }
          />

          <Route
            path="/tables"
            element={
              <ProtectedRoute>
                <MainLayout>
                  <Tables />
                </MainLayout>
              </ProtectedRoute>
            }
          />

          <Route
            path="/buttons"
            element={
              <ProtectedRoute>
                <MainLayout>
                  <ButtonsDemo />
                </MainLayout>
              </ProtectedRoute>
            }
          />

          {/* Placeholder routes for navigation items */}
          <Route
            path="/analytics"
            element={
              <ProtectedRoute>
                <MainLayout>
                  <div className="p-6">
                    <h1 className="text-2xl font-bold">Analytics</h1>
                    <p>Analytics page coming soon...</p>
                  </div>
                </MainLayout>
              </ProtectedRoute>
            }
          />

          <Route
            path="/orders/*"
            element={
              <ProtectedRoute>
                <MainLayout>
                  <div className="p-6">
                    <h1 className="text-2xl font-bold">Orders</h1>
                    <p>Order management pages coming soon...</p>
                  </div>
                </MainLayout>
              </ProtectedRoute>
            }
          />

          <Route
            path="/capacity/*"
            element={
              <ProtectedRoute>
                <MainLayout>
                  <div className="p-6">
                    <h1 className="text-2xl font-bold">Capacity</h1>
                    <p>Capacity management pages coming soon...</p>
                  </div>
                </MainLayout>
              </ProtectedRoute>
            }
          />

          <Route
            path="/logistics/*"
            element={
              <ProtectedRoute>
                <MainLayout>
                  <div className="p-6">
                    <h1 className="text-2xl font-bold">Logistics</h1>
                    <p>Logistics pages coming soon...</p>
                  </div>
                </MainLayout>
              </ProtectedRoute>
            }
          />

          <Route
            path="/users/*"
            element={
              <ProtectedRoute>
                <MainLayout>
                  <div className="p-6">
                    <h1 className="text-2xl font-bold">Users</h1>
                    <p>User management pages coming soon...</p>
                  </div>
                </MainLayout>
              </ProtectedRoute>
            }
          />

          <Route
            path="/reports"
            element={
              <ProtectedRoute>
                <MainLayout>
                  <div className="p-6">
                    <h1 className="text-2xl font-bold">Reports</h1>
                    <p>Reports page coming soon...</p>
                  </div>
                </MainLayout>
              </ProtectedRoute>
            }
          />

          <Route
            path="/settings/*"
            element={
              <ProtectedRoute>
                <MainLayout>
                  <div className="p-6">
                    <h1 className="text-2xl font-bold">Settings</h1>
                    <p>Settings pages coming soon...</p>
                  </div>
                </MainLayout>
              </ProtectedRoute>
            }
          />

          <Route
            path="/help"
            element={
              <ProtectedRoute>
                <MainLayout>
                  <div className="p-6">
                    <h1 className="text-2xl font-bold">Help & Support</h1>
                    <p>Help page coming soon...</p>
                  </div>
                </MainLayout>
              </ProtectedRoute>
            }
          />

          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
