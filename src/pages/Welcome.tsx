import { 
  Sparkles, 
  Rocket, 
  Heart, 
  Star,
  Zap,
  Users,
  BarChart3,
  Settings,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';

const DoodleCard = ({ 
  icon: Icon, 
  title, 
  description, 
  color = "text-primary",
  bgColor = "bg-primary/10"
}: {
  icon: any;
  title: string;
  description: string;
  color?: string;
  bgColor?: string;
}) => (
  <Card className="card-gradient border-border/50 hover:shadow-md layout-transition group">
    <CardHeader className="text-center pb-4">
      <div className={`w-16 h-16 mx-auto rounded-full ${bgColor} flex items-center justify-center mb-4 group-hover:scale-110 layout-transition`}>
        <Icon className={`h-8 w-8 ${color}`} />
      </div>
      <CardTitle className="text-lg">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <CardDescription className="text-center text-sm leading-relaxed">
        {description}
      </CardDescription>
    </CardContent>
  </Card>
);

const FloatingIcon = ({ 
  icon: Icon, 
  className = "",
  delay = 0
}: {
  icon: any;
  className?: string;
  delay?: number;
}) => (
  <div 
    className={`absolute ${className} animate-bounce-gentle`}
    style={{ animationDelay: `${delay}s` }}
  >
    <Icon className="h-6 w-6 text-primary/30" />
  </div>
);

export const Welcome = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: BarChart3,
      title: "Analytics Dashboard",
      description: "Get powerful insights with beautiful charts and real-time data visualization.",
      color: "text-info",
      bgColor: "bg-info/10"
    },
    {
      icon: Users,
      title: "User Management",
      description: "Manage users, roles, and permissions with an intuitive interface.",
      color: "text-success",
      bgColor: "bg-success/10"
    },
    {
      icon: Settings,
      title: "Easy Configuration",
      description: "Customize your experience with flexible settings and preferences.",
      color: "text-warning",
      bgColor: "bg-warning/10"
    }
  ];

  const quickActions = [
    { label: "Dashboard", path: "/", variant: "default" as const },
    { label: "Analytics", path: "/analytics", variant: "secondary" as const },
    { label: "Ask Questions", path: "/ask-questions", variant: "outline" as const },
  ];

  return (
    <div className="relative min-h-full">
      {/* Floating Background Icons */}
      <FloatingIcon icon={Star} className="top-12 left-12" delay={0} />
      <FloatingIcon icon={Heart} className="top-24 right-20" delay={1} />
      <FloatingIcon icon={Zap} className="bottom-32 left-8" delay={2} />
      <FloatingIcon icon={Sparkles} className="bottom-16 right-16" delay={1.5} />
      <FloatingIcon icon={Rocket} className="top-1/2 right-8" delay={0.5} />

      <div className="max-w-6xl mx-auto space-y-12">
        {/* Hero Section */}
        <div className="text-center space-y-6 pt-8">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="w-24 h-24 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-elegant animate-pulse-glow">
                <Sparkles className="h-12 w-12 text-white" />
              </div>
              <Badge 
                variant="secondary" 
                className="absolute -top-2 -right-2 animate-bounce-gentle"
              >
                New!
              </Badge>
            </div>
          </div>
          
          <div className="space-y-4">
            <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Welcome to OMS
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Your powerful Order Management System is ready to streamline your business operations. 
              Let's get started on your journey to efficiency!
            </p>
          </div>

          <div className="flex flex-wrap gap-3 justify-center pt-4">
            {quickActions.map((action) => (
              <Button
                key={action.path}
                variant={action.variant}
                onClick={() => navigate(action.path)}
                className="gap-2 layout-transition hover:scale-105"
              >
                {action.label}
                <ArrowRight className="h-4 w-4" />
              </Button>
            ))}
          </div>
        </div>

        {/* Features Grid */}
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">What You Can Do</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore the powerful features designed to make your work easier and more efficient.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <DoodleCard {...feature} />
              </div>
            ))}
          </div>
        </div>

        {/* Getting Started Section */}
        <Card className="card-gradient border-border/50">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl flex items-center justify-center gap-2">
              <Rocket className="h-6 w-6 text-primary" />
              Ready to Get Started?
            </CardTitle>
            <CardDescription className="text-base">
              Dive into your dashboard and start managing your orders like a pro!
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <div className="flex flex-wrap gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={() => navigate('/')}
                className="gap-2 bg-gradient-primary hover:opacity-90 layout-transition"
              >
                <BarChart3 className="h-5 w-5" />
                Go to Dashboard
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => navigate('/help')}
                className="gap-2"
              >
                <Heart className="h-5 w-5" />
                Need Help?
              </Button>
            </div>
            
            <div className="pt-4 text-sm text-muted-foreground">
              <p>💡 <strong>Pro Tip:</strong> Use the search bar in the header to quickly find what you're looking for!</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};