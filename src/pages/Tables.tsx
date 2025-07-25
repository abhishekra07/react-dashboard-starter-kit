import { useState } from 'react';
import { 
  Table2, 
  Eye, 
  Edit, 
  Trash2, 
  MoreHorizontal,
  ChevronLeft,
  ChevronRight,
  Search,
  Filter,
  Download
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

// Sample data
const sampleUsers = [
  {
    id: 1,
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    role: "Admin",
    status: "Active",
    lastLogin: "2024-01-15",
    avatar: ""
  },
  {
    id: 2,
    name: "Bob Smith",
    email: "bob.smith@example.com",
    role: "Manager",
    status: "Active",
    lastLogin: "2024-01-14",
    avatar: ""
  },
  {
    id: 3,
    name: "Carol Davis",
    email: "carol.davis@example.com",
    role: "User",
    status: "Inactive",
    lastLogin: "2024-01-10",
    avatar: ""
  },
  {
    id: 4,
    name: "David Wilson",
    email: "david.wilson@example.com",
    role: "User",
    status: "Active",
    lastLogin: "2024-01-15",
    avatar: ""
  },
  {
    id: 5,
    name: "Eva Martinez",
    email: "eva.martinez@example.com",
    role: "Manager",
    status: "Pending",
    lastLogin: "2024-01-12",
    avatar: ""
  }
];

const sampleOrders = [
  {
    id: "ORD-001",
    customer: "Tech Corp Ltd",
    amount: 2580.00,
    status: "Completed",
    date: "2024-01-15",
    items: 5
  },
  {
    id: "ORD-002",
    customer: "Global Solutions",
    amount: 1420.50,
    status: "Processing",
    date: "2024-01-14",
    items: 3
  },
  {
    id: "ORD-003",
    customer: "Innovate Inc",
    amount: 3750.25,
    status: "Shipped",
    date: "2024-01-13",
    items: 8
  },
  {
    id: "ORD-004",
    customer: "Future Dynamics",
    amount: 890.75,
    status: "Cancelled",
    date: "2024-01-12",
    items: 2
  }
];

const StatusBadge = ({ status }: { status: string }) => {
  const getVariant = (status: string) => {
    switch (status.toLowerCase()) {
      case 'active':
      case 'completed':
      case 'shipped':
        return 'default';
      case 'inactive':
      case 'cancelled':
        return 'destructive';
      case 'pending':
      case 'processing':
        return 'secondary';
      default:
        return 'outline';
    }
  };

  return (
    <Badge variant={getVariant(status)} className="text-xs">
      {status}
    </Badge>
  );
};

const ActionsDropdown = ({ id }: { id: string | number }) => (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
        <MoreHorizontal className="h-4 w-4" />
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end" className="w-40">
      <DropdownMenuItem className="gap-2">
        <Eye className="h-4 w-4" />
        View
      </DropdownMenuItem>
      <DropdownMenuItem className="gap-2">
        <Edit className="h-4 w-4" />
        Edit
      </DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem className="gap-2 text-destructive focus:text-destructive">
        <Trash2 className="h-4 w-4" />
        Delete
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
);

const TableControls = ({ 
  searchTerm, 
  onSearchChange 
}: { 
  searchTerm: string; 
  onSearchChange: (value: string) => void; 
}) => (
  <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
    <div className="relative flex-1 max-w-sm">
      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
      <Input
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className="pl-9"
      />
    </div>
    <div className="flex gap-2">
      <Button variant="outline" size="sm" className="gap-2">
        <Filter className="h-4 w-4" />
        Filter
      </Button>
      <Button variant="outline" size="sm" className="gap-2">
        <Download className="h-4 w-4" />
        Export
      </Button>
    </div>
  </div>
);

const TablePagination = () => (
  <div className="flex items-center justify-between">
    <p className="text-sm text-muted-foreground">
      Showing 1 to 5 of 5 entries
    </p>
    <div className="flex items-center gap-2">
      <Button variant="outline" size="sm" disabled className="gap-1">
        <ChevronLeft className="h-4 w-4" />
        Previous
      </Button>
      <Button variant="outline" size="sm" disabled className="gap-1">
        Next
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  </div>
);

export const Tables = () => {
  const [userSearchTerm, setUserSearchTerm] = useState('');
  const [orderSearchTerm, setOrderSearchTerm] = useState('');

  const filteredUsers = sampleUsers.filter(user =>
    user.name.toLowerCase().includes(userSearchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(userSearchTerm.toLowerCase()) ||
    user.role.toLowerCase().includes(userSearchTerm.toLowerCase())
  );

  const filteredOrders = sampleOrders.filter(order =>
    order.id.toLowerCase().includes(orderSearchTerm.toLowerCase()) ||
    order.customer.toLowerCase().includes(orderSearchTerm.toLowerCase()) ||
    order.status.toLowerCase().includes(orderSearchTerm.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="flex justify-center">
          <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-elegant">
            <Table2 className="h-8 w-8 text-white" />
          </div>
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-2">Data Tables</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Modern, responsive data tables with search, filtering, and actions. Perfect for managing large datasets.
          </p>
        </div>
      </div>

      {/* Users Table */}
      <Card className="card-gradient">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Table2 className="h-5 w-5 text-primary" />
            Users Management
          </CardTitle>
          <CardDescription>
            Manage users with roles, status tracking, and quick actions.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <TableControls 
            searchTerm={userSearchTerm} 
            onSearchChange={setUserSearchTerm} 
          />
          
          <div className="border rounded-lg overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/50">
                  <TableHead className="w-12"></TableHead>
                  <TableHead>User</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Last Login</TableHead>
                  <TableHead className="w-12"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredUsers.map((user) => (
                  <TableRow 
                    key={user.id} 
                    className="hover:bg-muted/30 layout-transition"
                  >
                    <TableCell>
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={user.avatar} alt={user.name} />
                        <AvatarFallback className="text-xs bg-primary/10">
                          {user.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                    </TableCell>
                    <TableCell>
                      <div>
                        <div className="font-medium">{user.name}</div>
                        <div className="text-sm text-muted-foreground">{user.email}</div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline" className="text-xs">
                        {user.role}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <StatusBadge status={user.status} />
                    </TableCell>
                    <TableCell className="text-sm text-muted-foreground">
                      {user.lastLogin}
                    </TableCell>
                    <TableCell>
                      <ActionsDropdown id={user.id} />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          
          <TablePagination />
        </CardContent>
      </Card>

      {/* Orders Table */}
      <Card className="card-gradient">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Table2 className="h-5 w-5 text-primary" />
            Recent Orders
          </CardTitle>
          <CardDescription>
            Track orders with status updates, customer information, and amounts.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <TableControls 
            searchTerm={orderSearchTerm} 
            onSearchChange={setOrderSearchTerm} 
          />
          
          <div className="border rounded-lg overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/50">
                  <TableHead>Order ID</TableHead>
                  <TableHead>Customer</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Items</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead className="w-12"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredOrders.map((order) => (
                  <TableRow 
                    key={order.id} 
                    className="hover:bg-muted/30 layout-transition"
                  >
                    <TableCell className="font-mono text-sm">
                      {order.id}
                    </TableCell>
                    <TableCell className="font-medium">
                      {order.customer}
                    </TableCell>
                    <TableCell className="font-mono">
                      ${order.amount.toLocaleString()}
                    </TableCell>
                    <TableCell>
                      <Badge variant="secondary" className="text-xs">
                        {order.items} items
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <StatusBadge status={order.status} />
                    </TableCell>
                    <TableCell className="text-sm text-muted-foreground">
                      {order.date}
                    </TableCell>
                    <TableCell>
                      <ActionsDropdown id={order.id} />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          
          <TablePagination />
        </CardContent>
      </Card>
    </div>
  );
};