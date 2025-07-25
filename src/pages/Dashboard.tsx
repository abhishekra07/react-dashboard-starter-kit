import { 
  Package, 
  RotateCcw, 
  GitBranch, 
  Truck,
  Activity,
  GitCommit,
  Warehouse,
  TrendingUp,
  Users,
  ShoppingCart
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const FeatureCard = ({ 
  icon: Icon, 
  title, 
  description, 
  action,
  badge,
  isNew = false 
}: {
  icon: any;
  title: string;
  description: string;
  action: string;
  badge?: string;
  isNew?: boolean;
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    // Simulate navigation based on action
    const routeMap: { [key: string]: string } = {
      'Place Order': '/orders/place',
      'Process Return': '/orders/returns',
      'View Orchestration': '/orders/orchestration',
      'Track Shipment': '/logistics/tracking',
    };
    
    if (routeMap[action]) {
      navigate(routeMap[action]);
    }
  };

  return (
    <Card className="group hover:shadow-md transition-all duration-300 hover:-translate-y-1 cursor-pointer bg-gradient-card border border-border/50 hover:border-primary/20" onClick={handleClick}>
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
            <Icon className="h-6 w-6 text-primary" />
          </div>
          {badge && (
            <Badge variant="secondary" className="text-xs font-medium">
              {badge}
            </Badge>
          )}
          {isNew && (
            <Badge className="text-xs font-medium bg-success">
              New
            </Badge>
          )}
        </div>
        <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
          {description}
        </p>
        <div className="flex items-center text-primary text-sm font-medium group-hover:gap-2 transition-all">
          <span>{action}</span>
          <div className="w-0 group-hover:w-4 transition-all duration-300 overflow-hidden">
            <span>→</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const StatCard = ({ 
  icon: Icon, 
  title, 
  value, 
  change,
  trend = 'up'
}: {
  icon: any;
  title: string;
  value: string;
  change: string;
  trend?: 'up' | 'down' | 'neutral';
}) => {
  const trendColors = {
    up: 'text-success',
    down: 'text-destructive',
    neutral: 'text-muted-foreground'
  };

  return (
    <Card className="bg-gradient-card border border-border/50">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
              <Icon className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">{title}</p>
              <p className="text-2xl font-bold text-foreground">{value}</p>
            </div>
          </div>
          <div className={`text-sm font-medium ${trendColors[trend]}`}>
            {change}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export const Dashboard = () => {
  const { user } = useAuth();
  const currentHour = new Date().getHours();
  
  const getGreeting = () => {
    if (currentHour < 12) return 'Good morning';
    if (currentHour < 18) return 'Good afternoon';
    return 'Good evening';
  };

  const features = [
    {
      icon: Package,
      title: 'Place Order',
      description: 'Simulate order placement flow with real-time validation and inventory checks.',
      action: 'Simulate order placement flow',
    },
    {
      icon: RotateCcw,
      title: 'Process Return',
      description: 'Handle return management with automated workflows and customer notifications.',
      action: 'Handle return management',
    },
    {
      icon: GitBranch,
      title: 'View Orchestration',
      description: 'Explore how independent services work together to create robust business processes.',
      action: 'Service coordination',
    },
    {
      icon: Truck,
      title: 'Track Shipment',
      description: 'Monitor logistics operations with real-time tracking and delivery updates.',
      action: 'Logistics simulation',
      isNew: true,
    },
  ];

  const bottomFeatures = [
    {
      icon: Activity,
      title: 'Real-time Processing',
      description: 'Experience how our system handles orders, inventory, and logistics in real-time with seamless automation.',
      action: 'Explore real-time features',
    },
    {
      icon: GitCommit,
      title: 'Microservices Architecture',
      description: 'Discover how independent services work together to create a robust and scalable business platform.',
      action: 'Learn about architecture',
    },
    {
      icon: Warehouse,
      title: 'Multi-tenant Support',
      description: 'See how the system manages multiple brands and stores while maintaining data isolation and security.',
      action: 'View tenant management',
    },
  ];

  const stats = [
    {
      icon: ShoppingCart,
      title: 'Orders Today',
      value: '247',
      change: '+12%',
      trend: 'up' as const,
    },
    {
      icon: Users,
      title: 'Active Users',
      value: '1,429',
      change: '+5%',
      trend: 'up' as const,
    },
    {
      icon: Package,
      title: 'Inventory Items',
      value: '8,234',
      change: '-2%',
      trend: 'down' as const,
    },
    {
      icon: TrendingUp,
      title: 'Revenue',
      value: '$94,230',
      change: '+18%',
      trend: 'up' as const,
    },
  ];

  return (
    <div className="p-6 space-y-8 bg-gradient-subtle min-h-full">
      {/* Welcome Header */}
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h1 className="text-3xl font-bold text-foreground">
            {getGreeting()}, {user?.name}! 👋
          </h1>
          <p className="text-lg text-muted-foreground">
            Welcome to Order Management System
          </p>
        </div>
        <div className="hidden sm:flex items-center gap-4">
          <Badge variant="outline" className="text-sm py-1 px-3">
            System Online
          </Badge>
          <div className="flex h-2 w-2 bg-success rounded-full animate-pulse" />
        </div>
      </div>

      {/* Welcome Message */}
      <Card className="bg-gradient-primary text-primary-foreground border-0 shadow-elegant">
        <CardHeader>
          <CardTitle className="text-xl">
            Experience Modern Order Management
          </CardTitle>
          <CardDescription className="text-primary-foreground/80">
            Discover how our microservices architecture orchestrates complex business processes 
            with seamless automation and real-time processing.
          </CardDescription>
        </CardHeader>
      </Card>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      {/* Main Features */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-foreground">Quick Actions</h2>
          <Button variant="outline" size="sm">
            View All Features
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>

      {/* System Features */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-foreground">System Capabilities</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {bottomFeatures.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="pt-8 border-t border-border">
        <div className="text-center text-sm text-muted-foreground">
          <p>
            Built with modern technologies • React • TypeScript • Tailwind CSS
          </p>
          <p className="mt-1">
            Ready for production workloads and enterprise requirements
          </p>
        </div>
      </div>
    </div>
  );
};