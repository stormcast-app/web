import {
  Box,
  Button,
  Flex,
  Group,
  Text,
  Title,
  useMantineTheme,
} from '@mantine/core';
import { IconMapPinFilled } from '@tabler/icons-react';

type AppBarProps = AppBarDefaultProps & AppBarConditionalProps;

type AppBarDefaultProps = {
  variant: 'location' | 'title';
};

type AppBarConditionalProps =
  | {
      variant: 'location';
      location?: {
        label: string;
        value: string;
      };
      toggle?: () => void;
      title?: never;
    }
  | {
      variant?: 'title';
      title?: string;
      location?: never;
      toggle?: never;
    };

const AppBar = ({ title, variant, location, toggle }: AppBarProps) => {
  const theme = useMantineTheme();

  return variant === 'location' ? (
    <Box
      sx={{
        height: 64,
        padding: 16,
        display: 'flex',
        alignItems: 'center',
        borderBottom: '1px solid #eee',
        background: '#fff',
        width: '100%',
      }}
    >
      <Flex justify="space-between" align="center" sx={{ width: '100%' }}>
        <Flex align="center" gap={12} sx={{ width: '100%' }}>
          <Text size={14} weight={700}>
            Location
          </Text>
          <Group spacing={6}>
            <IconMapPinFilled
              size={16}
              style={{ color: theme.colors.brand[5] }}
            />
            <Text>{location?.label}</Text>
          </Group>
        </Flex>
        <Button variant="outline" size="xs" onClick={toggle}>
          Change
        </Button>
      </Flex>
    </Box>
  ) : (
    <Box
      sx={{
        height: 64,
        padding: 16,
        display: 'flex',
        alignItems: 'center',
        borderBottom: '1px solid #eee',
        background: '#fff',
      }}
    >
      <Title size={16}>{title}</Title>
    </Box>
  );
};

export default AppBar;
