import { FolderOpen, Files, Framer } from 'lucide-react';
import { FolderItem, FileItem } from '../types';

export const folders: FolderItem[] = [
  { id: 'f1', name: 'Documents', count: '14 files', color: '#8B5CF6', icon: FolderOpen },
  { id: 'f2', name: 'Calculations', count: '45 files', color: '#3B82F6', icon: FolderOpen },
  { id: 'f3', name: 'Estimates', count: '24 files', color: '#22C55E', icon: FolderOpen },
  { id: 'f4', name: 'Briefs', count: '45 files', color: '#F97316', icon: FolderOpen },
];

export const recentFiles: FileItem[] = [
  { id: 'rf1', name: 'briefs.doc', size: '5Mb', icon: Files, color: '#8C8C8C' },
  { id: 'rf2', name: 'website.fig', size: '17Mb', icon: Framer, color: '#F97316' },
  { id: 'rf3', name: 'mobile.fig', size: '22Mb', icon: Framer, color: '#3B82F6' },
  { id: 'rf4', name: 'calculations.xls', size: '9Mb', icon: Files, color: '#22C55E' },
  { id: 'rf5', name: 'mobile.fig', size: '22Mb', icon: Framer, color: '#3B82F6' },
  { id: 'rf6', name: 'calculations.xls', size: '8Mb', icon: Files, color: '#22C55E' },
];

export const storageData = [
  { name: 'Photos', value: 45, color: '#3B82F6' },
  { name: 'Documents', value: 25, color: '#F97316' },
  { name: 'Sheets', value: 30, color: '#22C55E' },
];
