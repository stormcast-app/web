import navigationData from '@/configs/navigation';
import { Flex, Group, Text } from '@mantine/core';
import { useRouter } from 'next/router';

const BottomNavigation = () => {
  const router = useRouter();

  return (
    <Group
      grow
      spacing={0}
      sx={{
        padding: '  12px',
        maxWidth: 444,
        margin: '0 auto',
        background: '#fff',
        borderLeft: '1px solid #eee',
        borderRight: '1px solid #eee',
        position: 'absolute',
        bottom: 0,
        right: 0,
        left: 0,
      }}
    >
      {navigationData.map((item) => (
        <Flex
          key={item.id}
          align="center"
          justify="center"
          direction="column"
          gap={6}
          sx={(theme) => ({
            transition: 'all 0.2s ease',
            cursor: 'pointer',
            padding: '8px 12px',
            color:
              router.pathname === item.path ? theme.colors.brand[5] : '#d8d8d8',
            ':hover': {
              borderRadius: 12,
              color:
                router.pathname === item.path
                  ? theme.colors.brand[5]
                  : theme.colors.gray[5],
              backgroundColor: theme.colors.gray[0],
            },
          })}
        >
          {item.icon}
          <Text size={12}>{item.title}</Text>
        </Flex>
      ))}
    </Group>
  );
};

export default BottomNavigation;
