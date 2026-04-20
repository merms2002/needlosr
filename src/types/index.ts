export interface MenuItem {
  id: string;
  label: string;
  icon: any;
}

export interface TimelineTask {
  id: string;
  label: string;
  progress: number;
  color: string;
  icon?: any;
  start: number; // day index
  duration: number; // span of days
}

export interface KanbanTask {
  id: string;
  title: string;
  date: string;
  image?: string;
  team: string[];
  comments?: number;
  attachments?: number;
  category?: string;
}

export interface FileItem {
  id: string;
  name: string;
  size: string;
  icon: any;
  color: string;
}

export interface FolderItem {
  id: string;
  name: string;
  count: string;
  color: string;
  icon: any;
}
