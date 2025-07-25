import { useAuth } from '@/hooks/useAuth';
import { SidebarProvider } from '@/components/ui/sidebar';
import { AppSidebar } from './AppSidebar';
import { TopNavigation } from './TopNavigation';
import { Navigate } from 'react-router-dom';

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/auth/login" replace />;
  }

  return (
    <SidebarProvider 
      defaultOpen={typeof window !== 'undefined' ? window.innerWidth >= 1024 : true}
    >
      <div className="min-h-screen flex w-full main-background">
        <AppSidebar />
        <div className="flex-1 flex flex-col gap-2 lg:gap-4 p-2 lg:p-4">
          <TopNavigation />
          <main className="flex-1 overflow-auto bg-background rounded-lg shadow-sm border border-border custom-scrollbar">
            <div className="p-4 lg:p-6">
              {children}
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};