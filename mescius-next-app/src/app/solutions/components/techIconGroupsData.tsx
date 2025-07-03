import React from 'react';
import { FaReact, FaAngular, FaVuejs, FaJs, FaMicrosoft, FaCode, FaDesktop, FaMobileAlt } from 'react-icons/fa';
import { SiDotnet, SiBlazor } from 'react-icons/si';

// Type definitions
export interface TechIconItem {
  icon: React.ReactNode;
  name: string;
  filterGroupId: string;
}
export interface TechIconGroup {
  title: string;
  icons: TechIconItem[];
}

// Text-based .NET icon
export const DotNetTextIcon = ({ className }: { className?: string }) => (
  <span className={className}>.NET</span>
);

// Icon groups data
const techIconGroups: TechIconGroup[] = [
  {
    title: 'Web & Mobile',
    icons: [
      { icon: <FaJs />, name: 'JavaScript', filterGroupId: 'web' },
      { icon: <FaReact />, name: 'React', filterGroupId: 'web' },
      { icon: <FaAngular />, name: 'Angular', filterGroupId: 'web' },
      { icon: <FaVuejs />, name: 'Vue', filterGroupId: 'web' },
    ]
  },
  {
    title: '.NET',
    icons: [
      { icon: <DotNetTextIcon className="textIcon" />, name: '.NET', filterGroupId: 'net' },
      { icon: <SiBlazor />, name: 'Blazor', filterGroupId: 'net' },
      { icon: <FaMobileAlt />, name: 'MAUI', filterGroupId: 'net' },
      { icon: <FaMicrosoft />, name: 'WinForms', filterGroupId: 'net' },
      { icon: <FaDesktop />, name: 'WPF', filterGroupId: 'net' },
    ]
  },
  {
    title: '',
    icons: [
      { icon: <FaCode />, name: 'All Solutions', filterGroupId: 'all' },
    ]
  }
];

export default techIconGroups;