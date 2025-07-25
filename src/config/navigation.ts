import {
  Home,
  Users,
  Settings,
  BarChart3,
  FileText,
  Package,
  ShoppingCart,
  TrendingUp,
  Database,
  UserCheck,
  Shield,
  Globe,
  Bell,
  CreditCard,
  HelpCircle,
  Archive,
  MapPin,
  Truck,
  Calendar,
  Activity,
  Sparkles,
  MessageCircleQuestion,
  Table2,
  Mouse,
} from 'lucide-react';

export interface MenuItem {
  id: string;
  label: string;
  displayName: string;
  url: string;
  icon: any;
  submenu?: MenuItem[];
  metadata?: {
    badge?: string;
    description?: string;
    isNew?: boolean;
    requiresAuth?: boolean;
  };
}

export interface MenuSection {
  id: string;
  title: string;
  items: MenuItem[];
}

export const navigationConfig: MenuSection[] = [
  {
    id: 'main',
    title: 'Main',
    items: [
      {
        id: 'dashboard',
        label: 'dashboard',
        displayName: 'Dashboard',
        url: '/',
        icon: Home,
        metadata: {
          description: 'Main dashboard overview',
        },
      },
      {
        id: 'analytics',
        label: 'analytics',
        displayName: 'Analytics',
        url: '/analytics',
        icon: BarChart3,
        metadata: {
          description: 'View analytics and reports',
          badge: 'Pro',
        },
      },
      {
        id: 'welcome',
        label: 'welcome',
        displayName: 'Welcome',
        url: '/welcome',
        icon: Sparkles,
        metadata: {
          description: 'Welcome to the application',
          isNew: true,
        },
      },
    ],
  },
  {
    id: 'pages',
    title: 'Pages & Components',
    items: [
      {
        id: 'ask-questions',
        label: 'ask-questions',
        displayName: 'Ask Questions',
        url: '/ask-questions',
        icon: MessageCircleQuestion,
        metadata: {
          description: 'Ask questions and get help',
        },
      },
      {
        id: 'tables',
        label: 'tables',
        displayName: 'Tables',
        url: '/tables',
        icon: Table2,
        metadata: {
          description: 'Data table examples',
        },
      },
      {
        id: 'buttons',
        label: 'buttons',
        displayName: 'Button Demo',
        url: '/buttons',
        icon: Mouse,
        metadata: {
          description: 'Button variations demo',
        },
      },
    ],
  },
  {
    id: 'order-management',
    title: 'Order Management',
    items: [
      {
        id: 'orders',
        label: 'orders',
        displayName: 'Orders',
        url: '/orders',
        icon: ShoppingCart,
        submenu: [
          {
            id: 'customer-order',
            label: 'customer-order',
            displayName: 'Customer Orders',
            url: '/orders/customer',
            icon: Users,
            metadata: {
              description: 'Manage customer orders',
            },
          },
        ],
        metadata: {
          description: 'Order management system',
          badge: '12',
        },
      },
      {
        id: 'capacity',
        label: 'capacity',
        displayName: 'Capacity',
        url: '/capacity',
        icon: Database,
        submenu: [
          {
            id: 'inventory-check',
            label: 'inventory-check',
            displayName: 'Inventory Check',
            url: '/capacity/inventory',
            icon: Package,
            metadata: {
              description: 'Check inventory levels',
            },
          },
        ],
        metadata: {
          description: 'Capacity planning and management',
        },
      },
      {
        id: 'logistics',
        label: 'logistics',
        displayName: 'Logistics',
        url: '/logistics',
        icon: Truck,
        submenu: [
          {
            id: 'box-configuration',
            label: 'box-configuration',
            displayName: 'Box Configuration',
            url: '/logistics/boxes',
            icon: Package,
            metadata: {
              description: 'Configure shipping boxes',
            },
          },
          {
            id: 'shipping-tracking',
            label: 'shipping-tracking',
            displayName: 'Shipping & Tracking',
            url: '/logistics/tracking',
            icon: MapPin,
            metadata: {
              description: 'Track shipments',
              isNew: true,
            },
          },
        ],
        metadata: {
          description: 'Logistics and shipping management',
        },
      },
    ],
  },
  {
    id: 'user-management',
    title: 'User Management',
    items: [
      {
        id: 'users',
        label: 'users',
        displayName: 'Users',
        url: '/users',
        icon: Users,
        submenu: [
          {
            id: 'all-users',
            label: 'all-users',
            displayName: 'All Users',
            url: '/users',
            icon: Users,
            metadata: {
              description: 'View all users',
            },
          },
          {
            id: 'user-roles',
            label: 'user-roles',
            displayName: 'User Roles',
            url: '/users/roles',
            icon: Shield,
            metadata: {
              description: 'Manage user permissions',
            },
          },
          {
            id: 'user-activity',
            label: 'user-activity',
            displayName: 'User Activity',
            url: '/users/activity',
            icon: Activity,
            metadata: {
              description: 'Monitor user activity',
            },
          },
        ],
        metadata: {
          description: 'User management and permissions',
        },
      },
    ],
  },
  {
    id: 'system',
    title: 'System',
    items: [
      {
        id: 'reports',
        label: 'reports',
        displayName: 'Reports',
        url: '/reports',
        icon: FileText,
        metadata: {
          description: 'Generate and view reports',
          badge: '3',
        },
      },
      {
        id: 'settings',
        label: 'settings',
        displayName: 'Settings',
        url: '/settings',
        icon: Settings,
        submenu: [
          {
            id: 'general-settings',
            label: 'general-settings',
            displayName: 'General',
            url: '/settings/general',
            icon: Settings,
            metadata: {
              description: 'General application settings',
            },
          },
          {
            id: 'notifications',
            label: 'notifications',
            displayName: 'Notifications',
            url: '/settings/notifications',
            icon: Bell,
            metadata: {
              description: 'Notification preferences',
            },
          },
          {
            id: 'billing',
            label: 'billing',
            displayName: 'Billing',
            url: '/settings/billing',
            icon: CreditCard,
            metadata: {
              description: 'Billing and subscription',
              badge: 'Pro',
            },
          },
          {
            id: 'integrations',
            label: 'integrations',
            displayName: 'Integrations',
            url: '/settings/integrations',
            icon: Globe,
            metadata: {
              description: 'Third-party integrations',
            },
          },
        ],
        metadata: {
          description: 'Application settings and configuration',
        },
      },
      {
        id: 'help',
        label: 'help',
        displayName: 'Help & Support',
        url: '/help',
        icon: HelpCircle,
        metadata: {
          description: 'Get help and support',
        },
      },
    ],
  },
];

// Brand configuration
export const brandConfig = {
  name: 'SaaS',
  fullName: 'React Dashboard Starter Kit',
  logo: '/logo.png',
  showLogo: true,
  showName: true,
};
