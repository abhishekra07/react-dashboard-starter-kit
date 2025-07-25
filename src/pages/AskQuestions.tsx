import { useState } from 'react';
import { 
  MessageCircleQuestion, 
  Send, 
  ExternalLink,
  BookOpen,
  FileText,
  Video,
  Users,
  Github,
  Plus
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';

const QuickLink = ({ 
  icon: Icon, 
  title, 
  description, 
  href,
  variant = "secondary" as const
}: {
  icon: any;
  title: string;
  description: string;
  href: string;
  variant?: "default" | "secondary" | "outline";
}) => (
  <div className="group p-4 rounded-lg border border-border hover:border-primary/50 layout-transition cursor-pointer">
    <div className="flex items-start gap-3">
      <div className="p-2 rounded-md bg-primary/10 group-hover:bg-primary/20 layout-transition">
        <Icon className="h-4 w-4 text-primary" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <h4 className="font-medium text-sm group-hover:text-primary layout-transition">
            {title}
          </h4>
          <ExternalLink className="h-3 w-3 text-muted-foreground opacity-0 group-hover:opacity-100 layout-transition" />
        </div>
        <p className="text-xs text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  </div>
);

export const AskQuestions = () => {
  const [question, setQuestion] = useState('');
  const [repositoryName, setRepositoryName] = useState('');
  const [projectName, setProjectName] = useState('');
  const [githubToken, setGithubToken] = useState('');
  const { toast } = useToast();

  const handleQuestionSubmit = () => {
    if (!question.trim()) {
      toast({
        title: "Question Required",
        description: "Please enter your question before submitting.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Question Submitted",
      description: "Your question has been submitted successfully. We'll get back to you soon!",
    });
    setQuestion('');
  };

  const handleProjectCreate = () => {
    if (!repositoryName.trim() || !projectName.trim()) {
      toast({
        title: "Required Fields Missing",
        description: "Please fill in the repository name and project name.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Project Creation Started",
      description: `Creating project "${projectName}" with repository "${repositoryName}"...`,
    });
    
    // Reset form
    setRepositoryName('');
    setProjectName('');
    setGithubToken('');
  };

  const quickLinks = [
    {
      icon: BookOpen,
      title: "Documentation",
      description: "Browse our comprehensive documentation and guides",
      href: "/docs"
    },
    {
      icon: Video,
      title: "Video Tutorials",
      description: "Watch step-by-step video tutorials",
      href: "/tutorials"
    },
    {
      icon: Users,
      title: "Community Forum",
      description: "Connect with other users and get help",
      href: "/community"
    },
    {
      icon: FileText,
      title: "API Reference",
      description: "Detailed API documentation and examples",
      href: "/api-docs"
    },
    {
      icon: Github,
      title: "GitHub Issues",
      description: "Report bugs or request features",
      href: "/github"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="flex justify-center">
          <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-elegant">
            <MessageCircleQuestion className="h-8 w-8 text-white" />
          </div>
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-2">Ask Questions & Get Help</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Need assistance? We're here to help! Ask your questions or explore our resources below.
          </p>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid lg:grid-cols-5 gap-6">
        {/* Ask Questions Card - 3/5 width */}
        <Card className="lg:col-span-3 card-gradient">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageCircleQuestion className="h-5 w-5 text-primary" />
              Ask Questions
            </CardTitle>
            <CardDescription>
              Have a specific question? Send it to our support team and get a personalized response.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="question">Your Question</Label>
              <Textarea
                id="question"
                placeholder="Describe your question or issue in detail..."
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                className="min-h-32 resize-none"
              />
              <p className="text-xs text-muted-foreground">
                Be as specific as possible to get the best help.
              </p>
            </div>
            
            <Button 
              onClick={handleQuestionSubmit}
              className="w-full gap-2"
              disabled={!question.trim()}
            >
              <Send className="h-4 w-4" />
              Submit Question
            </Button>
          </CardContent>
        </Card>

        {/* Quick Links Card - 2/5 width */}
        <Card className="lg:col-span-2 card-gradient">
          <CardHeader>
            <CardTitle className="text-lg">Quick Links</CardTitle>
            <CardDescription>
              Find answers quickly with these helpful resources.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {quickLinks.map((link, index) => (
              <QuickLink key={index} {...link} />
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Project Creation Form */}
      <Card className="card-gradient">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Plus className="h-5 w-5 text-primary" />
            Create New Project
          </CardTitle>
          <CardDescription>
            Set up a new project with GitHub integration. All fields marked with * are required.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-2">
              <Label htmlFor="repository">
                GitHub Repository Name *
              </Label>
              <Input
                id="repository"
                placeholder="my-awesome-project"
                value={repositoryName}
                onChange={(e) => setRepositoryName(e.target.value)}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="project">
                Project Name *
              </Label>
              <Input
                id="project"
                placeholder="My Awesome Project"
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="token">
                GitHub Token
                <Badge variant="secondary" className="ml-2 text-xs">Optional</Badge>
              </Label>
              <Input
                id="token"
                type="password"
                placeholder="ghp_xxxxxxxxxxxx"
                value={githubToken}
                onChange={(e) => setGithubToken(e.target.value)}
              />
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-6">
            <Button 
              onClick={handleProjectCreate}
              className="gap-2 flex-1 sm:flex-none"
              disabled={!repositoryName.trim() || !projectName.trim()}
            >
              <Plus className="h-4 w-4" />
              Create Project
            </Button>
            
            <div className="text-sm text-muted-foreground flex-1 flex items-center">
              <p>💡 <strong>Tip:</strong> GitHub token is optional but recommended for private repositories.</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};