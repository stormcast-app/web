import { Container } from '@mantine/core';
import BottomNavigation from './BottomNavigation';
import { useRouter } from 'next/router';
import navigation from '@/configs/navigation';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const router = useRouter();
  return (
    <Container
      style={{
        maxWidth: 444,
        margin: '0 auto',
        border: '1px solid #eee',
        minHeight: '100vh',
        height: '100%',
        padding: 0,
      }}
    >
      {children}
      {(router.pathname === '/' ||
        router.pathname === '/report' ||
        router.pathname === '/information') && <BottomNavigation />}
    </Container>
  );
};

export default Layout;
