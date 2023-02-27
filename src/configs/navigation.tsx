import { IconHome2, IconInfoCircle, IconReport } from '@tabler/icons-react';

const navigationData = [
  {
    id: 'home',
    title: 'Home',
    icon: <IconHome2 />,
    path: '/',
  },
  {
    id: 'report',
    title: 'Report',
    icon: <IconReport />,
    path: '/report',
  },
  {
    id: 'information',
    title: 'Information',
    icon: <IconInfoCircle />,
    path: '/information',
  },
];

export default navigationData;
