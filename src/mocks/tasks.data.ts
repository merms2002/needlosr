import { KanbanTask } from '../types';

export const kanbanData: Record<string, KanbanTask[]> = {
  'To Do': [
    { 
      id: 't1', 
      title: '[Company] - Presentation for now clients', 
      date: '17-10 May', 
      team: ['https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=50&h=50&fit=crop', 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50&h=50&fit=crop'],
    },
    { 
      id: 't2', 
      title: '[Jibby] - Redesign of current homepage and service section', 
      date: '19 May', 
      image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400&h=300&fit=crop',
      team: ['https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=50&h=50&fit=crop', 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop'],
    },
    { 
      id: 't3', 
      title: '[Jibby] - Redesign of contact us page', 
      date: '17 May', 
      team: ['https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=50&h=50&fit=crop'],
    },
  ],
  'In Progress': [
    { 
      id: 'ip1', 
      title: '[Company] - Marketing tips for Instagram & Linkdin', 
      date: '17 May', 
      team: ['https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=50&h=50&fit=crop', 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop'],
    },
    { 
      id: 'ip2', 
      title: '[LooLight] - Branding & Ads Design', 
      date: '12-18 May', 
      team: ['https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=50&h=50&fit=crop'],
    },
    { 
      id: 'ip3', 
      title: '[Company] - Youtube series miniatures (light & dark)', 
      date: '18 May', 
      team: ['https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop', 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=50&h=50&fit=crop'],
    },
    { 
      id: 'ip4', 
      title: '[PremiumSpot] - Testimonials & Services section design', 
      date: '10 May', 
      team: ['https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=50&h=50&fit=crop', 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=50&h=50&fit=crop'],
    },
  ],
  'Review': [
    { 
      id: 'r1', 
      title: '[Company] - Marketing tips for Instagram & Linkdin', 
      date: '11-12 May', 
      team: ['https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50&h=50&fit=crop'],
    },
    { 
      id: 'r2', 
      title: '[Company] - Presentation of the annual activity summary', 
      date: '11 May', 
      team: ['https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop', 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop'],
    },
    { 
      id: 'r3', 
      title: '[UniTasty] - Social Media campaign creations', 
      date: '15-16 May', 
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop',
      team: ['https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=50&h=50&fit=crop'],
    },
  ],
  'Done': [
    { 
      id: 'd1', 
      title: '[TuchJar] - New Landing Page design', 
      date: '5-7 May', 
      team: ['https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50&h=50&fit=crop'],
    },
    { 
      id: 'd2', 
      title: '[Company] - New Youtube series Key Visual', 
      date: '5-11 May', 
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=300&fit=crop',
      team: ['https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=50&h=50&fit=crop', 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop'],
    },
    { 
      id: 'd3', 
      title: '[Company] - New YouTube series Key Visual', 
      date: '7-10 May', 
      team: ['https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop'],
    },
    { 
      id: 'd4', 
      title: '[Company] - Marketing tips for Instagram & Linkdin', 
      date: '10-12 May', 
      team: ['https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=50&h=50&fit=crop', 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=50&h=50&fit=crop'],
    },
  ],
};
