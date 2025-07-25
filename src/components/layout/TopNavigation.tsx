import { 
  Sun, 
  Moon, 
  Monitor, 
  Menu, 
  User, 
  Settings, 
  LogOut,
  Globe,
  Search
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { useSidebar } from '@/components/ui/sidebar';
import { useTheme } from '@/hooks/useTheme';
import { useLanguage } from '@/hooks/useLanguage';
import { useAuth } from '@/hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  const themeOptions = [
    { value: 'light', label: 'Light', icon: Sun },
    { value: 'dark', label: 'Dark', icon: Moon },
    { value: 'system', label: 'System', icon: Monitor },
  ];

  const currentTheme = themeOptions.find(t => t.value === theme) || themeOptions[2];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="h-9 w-9">
          <currentTheme.icon className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48 bg-popover border border-border">
        <DropdownMenuLabel>Theme</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {themeOptions.map((option) => (
          <DropdownMenuItem
            key={option.value}
            onClick={() => setTheme(option.value as any)}
            className="flex items-center gap-2"
          >
            <option.icon className="h-4 w-4" />
            {option.label}
            {theme === option.value && <Badge variant="secondary" className="ml-auto">Active</Badge>}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

const LanguageToggle = () => {
  const { currentLanguage, languages, setLanguage } = useLanguage();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="h-9 gap-2">
          <Globe className="h-4 w-4" />
          <span className="text-sm">{currentLanguage.flag}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48 bg-popover border border-border">
        <DropdownMenuLabel>Language</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => setLanguage(lang.code)}
            className="flex items-center gap-3"
          >
            <span className="text-lg">{lang.flag}</span>
            <span>{lang.name}</span>
            {currentLanguage.code === lang.code && (
              <Badge variant="secondary" className="ml-auto">Active</Badge>
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

const UserMenu = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/auth/login');
  };

  const handleProfile = () => {
    navigate('/profile');
  };

  if (!user) return null;

  const initials = user.name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-9 gap-2 px-2">
          <Avatar className="h-7 w-7">
            <AvatarImage src={user.avatar} alt={user.name} />
            <AvatarFallback className="text-xs">{initials}</AvatarFallback>
          </Avatar>
          <span className="text-sm font-medium hidden sm:inline-block max-w-32 truncate">
            {user.name}
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56 bg-popover border border-border">
        <DropdownMenuLabel className="pb-2">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">{user.name}</p>
            <p className="text-xs leading-none text-muted-foreground">{user.email}</p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleProfile} className="flex items-center gap-2">
          <User className="h-4 w-4" />
          View Profile
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => navigate('/settings')} className="flex items-center gap-2">
          <Settings className="h-4 w-4" />
          Settings
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem 
          onClick={handleLogout} 
          className="flex items-center gap-2 text-destructive focus:text-destructive"
        >
          <LogOut className="h-4 w-4" />
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

const SearchBar = () => {
  return (
    <div className="relative flex-1 max-w-sm lg:max-w-md">
      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
      <Input
        type="search"
        placeholder="Search here..."
        className="pl-9 h-8 lg:h-9 bg-background border-border focus:ring-2 focus:ring-primary/20 transition-all duration-200"
      />
    </div>
  );
};

export const TopNavigation = () => {
  const { toggleSidebar } = useSidebar();

  return (
    <header className="flex h-12 lg:h-14 items-center gap-2 lg:gap-4 border-b border-border bg-background px-3 lg:px-6 rounded-lg shadow-sm">
      {/* Left Section */}
      <div className="flex items-center gap-2 lg:gap-4 min-w-0 flex-1">
        <Button
          variant="ghost"
          size="sm"
          onClick={toggleSidebar}
          className="h-7 w-7 lg:h-8 lg:w-8 shrink-0"
        >
          <Menu className="h-4 w-4" />
        </Button>
        
        <SearchBar />
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-1 lg:gap-2 shrink-0">
        <div className="hidden sm:block">
          <LanguageToggle />
        </div>
        <ThemeToggle />
        <div className="hidden sm:block h-4 w-px bg-border mx-1" />
        <UserMenu />
      </div>
    </header>
  );
};