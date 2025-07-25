import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from '@/components/ui/sidebar';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import {
  navigationConfig,
  brandConfig,
  type MenuItem,
} from '@/config/navigation';

interface SidebarItemProps {
  item: MenuItem;
  isCollapsed: boolean;
}

const SidebarItem = ({ item, isCollapsed }: SidebarItemProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const location = useLocation();
  const isActive = location.pathname === item.url;
  const hasActiveChild = item.submenu?.some(
    (child) => location.pathname === child.url
  );

  useEffect(() => {
    if (hasActiveChild) {
      setIsExpanded(true);
    }
  }, [hasActiveChild]);

  const handleToggle = () => {
    if (!isCollapsed && item.submenu) {
      setIsExpanded(!isExpanded);
    }
  };

  const getNavClassName = ({ isActive }: { isActive: boolean }) =>
    cn(
      'w-full transition-colors duration-200',
      isActive
        ? 'bg-sidebar-accent text-sidebar-primary font-medium'
        : 'hover:bg-sidebar-accent/50 text-sidebar-foreground hover:text-sidebar-accent-foreground'
    );

  if (item.submenu && !isCollapsed) {
    return (
      <SidebarMenuItem>
        <SidebarMenuButton
          onClick={handleToggle}
          className={cn(
            'w-full justify-between transition-colors duration-200',
            isActive || hasActiveChild
              ? 'bg-sidebar-accent text-sidebar-primary font-medium'
              : 'hover:bg-sidebar-accent/50 text-sidebar-foreground hover:text-sidebar-accent-foreground'
          )}
        >
          <div className="flex items-center gap-3">
            <item.icon
              className={cn(
                'h-5 w-5 shrink-0 transition duration-300',
                isCollapsed && 'mx-auto'
              )}
            />
            <span className="truncate">{item.displayName}</span>
            {item.metadata?.badge && (
              <Badge variant="secondary" className="ml-auto h-5 px-1.5 text-xs">
                {item.metadata.badge}
              </Badge>
            )}
          </div>
          {isExpanded ? (
            <ChevronDown className="h-4 w-4 shrink-0" />
          ) : (
            <ChevronRight className="h-4 w-4 shrink-0" />
          )}
        </SidebarMenuButton>

        {isExpanded && (
          <SidebarGroupContent className="ml-4 mt-1 border-l border-sidebar-border pl-4">
            <SidebarMenu>
              {item.submenu.map((subItem) => (
                <SidebarMenuItem key={subItem.id}>
                  <SidebarMenuButton asChild>
                    <NavLink to={subItem.url} className={getNavClassName}>
                      <subItem.icon className="h-4 w-4 shrink-0" />
                      <span className="truncate">{subItem.displayName}</span>
                      {subItem.metadata?.isNew && (
                        <Badge
                          variant="default"
                          className="ml-auto h-5 px-1.5 text-xs bg-primary"
                        >
                          New
                        </Badge>
                      )}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        )}
      </SidebarMenuItem>
    );
  }

  return (
    <SidebarMenuItem>
      <SidebarMenuButton asChild>
        <NavLink
          to={item.url}
          className={getNavClassName}
          title={item.displayName}
        >
          <item.icon
            className={cn(
              'h-5 w-5 shrink-0 transition duration-300',
              isCollapsed && 'mx-auto'
            )}
          />
          {!isCollapsed && (
            <>
              <span className="truncate">{item.displayName}</span>
              {item.metadata?.badge && (
                <Badge
                  variant="secondary"
                  className="ml-auto h-5 px-1.5 text-xs"
                >
                  {item.metadata.badge}
                </Badge>
              )}
              {item.metadata?.isNew && (
                <Badge
                  variant="default"
                  className="ml-auto h-5 px-1.5 text-xs bg-primary"
                >
                  New
                </Badge>
              )}
            </>
          )}
        </NavLink>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
};

export function AppSidebar() {
  const { state } = useSidebar();
  const isCollapsed = state === 'collapsed';

  return (
    <Sidebar
      className={cn(
        'border-r border-sidebar-border bg-sidebar layout-transition',
        isCollapsed ? 'w-16' : 'w-64'
      )}
      collapsible="icon"
    >
      {/* Brand Section */}
      <div
        className={cn(
          'flex items-center gap-3 p-4 border-b border-sidebar-border',
          isCollapsed && 'justify-center'
        )}
      >
        {brandConfig.showLogo && (
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-sm">
            {brandConfig.name.charAt(0)}
          </div>
        )}
        {!isCollapsed && brandConfig.showName && (
          <div className="flex flex-col">
            <span className="font-semibold text-sidebar-foreground text-sm">
              {brandConfig.name}
            </span>
            <span className="text-xs text-sidebar-muted">
              {brandConfig.fullName}
            </span>
          </div>
        )}
      </div>

      <ScrollArea className="flex-1 custom-scrollbar">
        <SidebarContent className="py-2">
          {navigationConfig.map((section) => (
            <SidebarGroup key={section.id}>
              {!isCollapsed && (
                <SidebarGroupLabel className="text-sidebar-muted text-xs font-medium px-3 py-2">
                  {section.title}
                </SidebarGroupLabel>
              )}
              <SidebarGroupContent>
                <SidebarMenu className="space-y-1 px-2">
                  {section.items.map((item) => (
                    <SidebarItem
                      key={item.id}
                      item={item}
                      isCollapsed={isCollapsed}
                    />
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          ))}
        </SidebarContent>
      </ScrollArea>
    </Sidebar>
  );
}
