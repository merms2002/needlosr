import { LayoutDashboard, Clock, CheckSquare, Settings, Files } from 'lucide-react';
import { MenuItem } from '../types';

export const menuItems: MenuItem[] = [
  { id: 'overview', label: 'Overview', icon: LayoutDashboard },
  { id: 'timeline', label: 'Timeline', icon: Clock },
  { id: 'tasks', label: 'Tasks', icon: CheckSquare },
  { id: 'settings', label: 'Settings', icon: Settings },
  { id: 'files', label: 'Files', icon: Files },
];
