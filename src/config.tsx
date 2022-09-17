import React from 'react';
import { Icon } from '@rsuite/icons';
import { VscFolder, VscVm, VscFeedback } from 'react-icons/vsc';
import { MdDashboard } from 'react-icons/md';

// Nav Bar
export const appNavs = [
  {
    eventKey: 'dashboard',
    icon: <Icon as={MdDashboard} />,
    title: 'Dashboard',
    to: '/dashboard/me'
  },
  {
    eventKey: 'machines',
    icon: <Icon as={VscVm} />,
    title: 'Mes machines',
    to: '/dashboard/vm'
  },
  {
    eventKey: 'stockage',
    icon: <Icon as={VscFolder} />,
    title: 'Mon stockage',
    to: '/dashboard/stockage',
  },
  {
    eventKey: 'feedback',
    icon: <Icon as={VscFeedback} />,
    title: 'Feedback',
    to: '/dashboard/feedback',
  }
];
