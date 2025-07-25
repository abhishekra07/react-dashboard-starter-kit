import { 
  Mouse, 
  Download, 
  Heart, 
  Star, 
  Plus, 
  Edit, 
  Trash2, 
  Save,
  Send,
  Upload,
  RefreshCw,
  Search,
  Settings,
  PlayCircle,
  StopCircle,
  AlertTriangle,
  Check,
  X,
  ArrowRight,
  ExternalLink,
  Copy
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/hooks/use-toast';

const ButtonGroup = ({ 
  title, 
  description, 
  children 
}: { 
  title: string; 
  description: string; 
  children: React.ReactNode; 
}) => (
  <Card className="card-gradient">
    <CardHeader>
      <CardTitle className="text-lg">{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardHeader>
    <CardContent>
      <div className="flex flex-wrap gap-3">
        {children}
      </div>
    </CardContent>
  </Card>
);

const ButtonExample = ({ 
  title, 
  code, 
  children 
}: { 
  title: string; 
  code: string; 
  children: React.ReactNode; 
}) => (
  <div className="space-y-3">
    <div className="flex items-center justify-between">
      <h4 className="font-medium text-sm">{title}</h4>
      <Badge variant="outline" className="text-xs font-mono">
        {code}
      </Badge>
    </div>
    <div className="flex flex-wrap gap-2">
      {children}
    </div>
  </div>
);

export const ButtonsDemo = () => {
  const { toast } = useToast();

  const showToast = (message: string) => {
    toast({
      title: "Button Clicked",
      description: message,
    });
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="flex justify-center">
          <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-elegant">
            <Mouse className="h-8 w-8 text-white" />
          </div>
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-2">Button Components</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore different button variants, sizes, and states. All buttons are accessible and responsive.
          </p>
        </div>
      </div>

      {/* Primary Variants */}
      <ButtonGroup
        title="Button Variants"
        description="Different visual styles for various use cases and importance levels."
      >
        <ButtonExample title="Primary Buttons" code="variant='default'">
          <Button onClick={() => showToast("Primary button clicked")}>
            Default
          </Button>
          <Button className="bg-gradient-primary hover:opacity-90">
            Gradient
          </Button>
          <Button variant="default" size="sm">
            Small
          </Button>
          <Button variant="default" size="lg">
            Large
          </Button>
        </ButtonExample>

        <Separator />

        <ButtonExample title="Secondary Buttons" code="variant='secondary'">
          <Button variant="secondary">
            Secondary
          </Button>
          <Button variant="secondary" size="sm">
            Small
          </Button>
          <Button variant="secondary" size="lg">
            Large
          </Button>
        </ButtonExample>

        <Separator />

        <ButtonExample title="Outline Buttons" code="variant='outline'">
          <Button variant="outline">
            Outline
          </Button>
          <Button variant="outline" size="sm">
            Small
          </Button>
          <Button variant="outline" size="lg">
            Large
          </Button>
        </ButtonExample>

        <Separator />

        <ButtonExample title="Ghost Buttons" code="variant='ghost'">
          <Button variant="ghost">
            Ghost
          </Button>
          <Button variant="ghost" size="sm">
            Small
          </Button>
          <Button variant="ghost" size="lg">
            Large
          </Button>
        </ButtonExample>
      </ButtonGroup>

      {/* Special States */}
      <ButtonGroup
        title="Button States"
        description="Different states and special button variations for specific actions."
      >
        <ButtonExample title="Destructive Actions" code="variant='destructive'">
          <Button variant="destructive">
            Delete Item
          </Button>
          <Button variant="destructive" size="sm">
            <Trash2 className="h-4 w-4 mr-2" />
            Remove
          </Button>
          <Button variant="outline" className="text-destructive border-destructive hover:bg-destructive hover:text-destructive-foreground">
            Cancel Order
          </Button>
        </ButtonExample>

        <Separator />

        <ButtonExample title="Disabled States" code="disabled">
          <Button disabled>
            Disabled Default
          </Button>
          <Button variant="secondary" disabled>
            Disabled Secondary
          </Button>
          <Button variant="outline" disabled>
            Disabled Outline
          </Button>
        </ButtonExample>

        <Separator />

        <ButtonExample title="Loading States" code="loading">
          <Button disabled>
            <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
            Loading...
          </Button>
          <Button variant="secondary" disabled>
            <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
            Processing
          </Button>
        </ButtonExample>
      </ButtonGroup>

      {/* Buttons with Icons */}
      <ButtonGroup
        title="Buttons with Icons"
        description="Combine icons with text for clearer actions and better user experience."
      >
        <ButtonExample title="Leading Icons" code="icon + text">
          <Button>
            <Download className="h-4 w-4 mr-2" />
            Download
          </Button>
          <Button variant="secondary">
            <Plus className="h-4 w-4 mr-2" />
            Add Item
          </Button>
          <Button variant="outline">
            <Edit className="h-4 w-4 mr-2" />
            Edit
          </Button>
          <Button variant="ghost">
            <Search className="h-4 w-4 mr-2" />
            Search
          </Button>
        </ButtonExample>

        <Separator />

        <ButtonExample title="Trailing Icons" code="text + icon">
          <Button>
            Continue
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
          <Button variant="outline">
            Open Link
            <ExternalLink className="h-4 w-4 ml-2" />
          </Button>
          <Button variant="secondary">
            Copy Text
            <Copy className="h-4 w-4 ml-2" />
          </Button>
        </ButtonExample>

        <Separator />

        <ButtonExample title="Icon Only" code="icon only">
          <Button size="sm" className="w-9 h-9 p-0">
            <Heart className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="sm" className="w-9 h-9 p-0">
            <Star className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="sm" className="w-9 h-9 p-0">
            <Settings className="h-4 w-4" />
          </Button>
          <Button variant="destructive" size="sm" className="w-9 h-9 p-0">
            <Trash2 className="h-4 w-4" />
          </Button>
        </ButtonExample>
      </ButtonGroup>

      {/* Action-Specific Buttons */}
      <ButtonGroup
        title="Action-Specific Buttons"
        description="Buttons designed for specific actions with appropriate colors and icons."
      >
        <ButtonExample title="Form Actions" code="form buttons">
          <Button>
            <Save className="h-4 w-4 mr-2" />
            Save Changes
          </Button>
          <Button variant="outline">
            Cancel
          </Button>
          <Button>
            <Send className="h-4 w-4 mr-2" />
            Submit
          </Button>
        </ButtonExample>

        <Separator />

        <ButtonExample title="Media Controls" code="media buttons">
          <Button variant="outline">
            <PlayCircle className="h-4 w-4 mr-2" />
            Play
          </Button>
          <Button variant="outline">
            <StopCircle className="h-4 w-4 mr-2" />
            Stop
          </Button>
          <Button variant="secondary">
            <Upload className="h-4 w-4 mr-2" />
            Upload
          </Button>
        </ButtonExample>

        <Separator />

        <ButtonExample title="Status Actions" code="status buttons">
          <Button className="bg-success hover:bg-success/90">
            <Check className="h-4 w-4 mr-2" />
            Approve
          </Button>
          <Button variant="destructive">
            <X className="h-4 w-4 mr-2" />
            Reject
          </Button>
          <Button className="bg-warning text-warning-foreground hover:bg-warning/90">
            <AlertTriangle className="h-4 w-4 mr-2" />
            Warning
          </Button>
        </ButtonExample>
      </ButtonGroup>

      {/* Size Variations */}
      <ButtonGroup
        title="Size Variations"
        description="Different button sizes for various UI contexts and hierarchy."
      >
        <ButtonExample title="All Sizes" code="size prop">
          <Button size="sm">
            Small Button
          </Button>
          <Button>
            Default Button
          </Button>
          <Button size="lg">
            Large Button
          </Button>
        </ButtonExample>

        <Separator />

        <ButtonExample title="Full Width" code="w-full">
          <Button className="w-full">
            <Download className="h-4 w-4 mr-2" />
            Full Width Button
          </Button>
        </ButtonExample>
      </ButtonGroup>

      {/* Interactive Demo */}
      <Card className="card-gradient">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <PlayCircle className="h-5 w-5 text-primary" />
            Interactive Demo
          </CardTitle>
          <CardDescription>
            Click any button to see toast notifications in action.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button onClick={() => showToast("Success action completed!")}>
              <Check className="h-4 w-4 mr-2" />
              Success
            </Button>
            <Button 
              variant="destructive" 
              onClick={() => showToast("Destructive action performed!")}
            >
              <AlertTriangle className="h-4 w-4 mr-2" />
              Danger
            </Button>
            <Button 
              variant="outline" 
              onClick={() => showToast("Secondary action triggered!")}
            >
              <Star className="h-4 w-4 mr-2" />
              Secondary
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => showToast("Ghost button clicked!")}
            >
              <Heart className="h-4 w-4 mr-2" />
              Ghost
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};