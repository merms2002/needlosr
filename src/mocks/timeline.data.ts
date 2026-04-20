import { TimelineTask } from '../types';
import { CheckSquare } from 'lucide-react';

export const timelineTasks: TimelineTask[] = [
  { id: '1', label: 'Profile', progress: 42, color: '#8B5CF6', start: 4, duration: 4 },
  { id: '2', label: 'Menu', progress: 54, color: '#22C55E', start: 7, duration: 3, icon: CheckSquare },
  { id: '3', label: 'Settings', progress: 20, color: '#3B82F6', start: 12, duration: 4 },
  { id: '4', label: 'Login', progress: 44, color: '#22C55E', start: 0, duration: 3 },
  { id: '5', label: 'Services', progress: 61, color: '#F97316', start: 9, duration: 3 },
  { id: '6', label: 'Testimonials', progress: 45, color: '#8B5CF6', start: 5, duration: 6 },
  { id: '7', label: 'Contact', progress: 41, color: '#F97316', start: 4, duration: 4 },
  { id: '8', label: 'Homepage', progress: 95, color: '#10B981', start: 11, duration: 5 },
  { id: '9', label: 'Our Portfolio', progress: 43, color: '#3B82F6', start: 2, duration: 6 },
];

export const calendarDays = Array.from({ length: 15 }, (_, i) => (i + 5).toString().padStart(2, '0'));
