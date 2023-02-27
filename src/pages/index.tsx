import {
  ActionIcon,
  Box,
  Button,
  Card,
  Divider,
  Flex,
  Group,
  Stack,
  Text,
  Title,
  useMantineTheme,
} from '@mantine/core';
import {
  IconAddressBook,
  IconAlertCircleFilled,
  IconMapPinFilled,
  IconRefresh,
} from '@tabler/icons-react';
import { useState } from 'react';
import { useToggle } from '@mantine/hooks';
import locationData from '@/configs/location';
import LocationDrawer from '@/components/LocationDrawer';

export default function Home() {
  const theme = useMantineTheme();
  const [location, setLocation] = useState(locationData[0]);
  const [isDrawerOpen, toggleDrawer] = useToggle();

  return (
    <>
      <LocationDrawer
        isOpen={isDrawerOpen}
        toggle={toggleDrawer}
        location={location}
        setLocation={setLocation}
      />
      <Box p={16}>
        <Flex justify="space-between" align="center">
          <Flex align="center" gap={12} sx={{ width: '100%' }}>
            <Text size={14} weight={700}>
              Location
            </Text>
            <Group spacing={6}>
              <IconMapPinFilled
                size={16}
                style={{ color: theme.colors.brand[5] }}
              />
              <Text>{location.label}</Text>
            </Group>
          </Flex>
          <Button variant="subtle" size="xs" onClick={() => toggleDrawer()}>
            Change
          </Button>
        </Flex>
      </Box>

      <Divider size={16} color="#f5f5f5" />

      <Box p={16}>
        <Card
          withBorder
          radius="md"
          sx={{
            color: '#fff',
            transition: 'all 0.2s ease',
            borderWidth: 2,
            borderColor: theme.colors.red[7],
            cursor: 'pointer',
            background: theme.colors.red[7],
            ':hover': {
              borderColor: theme.colors.red[8],
              backgroundColor: theme.colors.red[8],
            },
          }}
        >
          <Group spacing={12}>
            <IconAlertCircleFilled />
            <Text size={24} weight={700}>
              Possible Flood Detected
            </Text>
          </Group>

          <Group my={12}>
            <Stack spacing={0}>
              <Text size={12}>Precipitation</Text>
              <Text size={18} weight={700}>
                0.15 inch (83%)
              </Text>
            </Stack>
            <Stack spacing={0}>
              <Text size={12}>Humidity</Text>
              <Text size={18} weight={700}>
                87%
              </Text>
            </Stack>
            <Stack spacing={0}>
              <Text size={12}>Temperature</Text>
              <Text size={18} weight={700}>
                29°C
              </Text>
            </Stack>
          </Group>

          <Flex align="center" justify="space-between" gap={16}>
            <ActionIcon color="red">
              <IconRefresh color="#fff" />
            </ActionIcon>

            <Text size={12}>
              Last update : January 27, 2611 10:13:53.505 AM
            </Text>
          </Flex>
        </Card>
      </Box>

      {/* <Divider size={16} color="#f5f5f5" /> */}

      <Box p={16}>
        <Card
          withBorder
          radius="md"
          sx={{
            transition: 'all 0.2s ease',
            borderWidth: 2,
            borderColor: '#F3F4F6',
            cursor: 'pointer',
            ':hover': {
              borderColor: '#E5E7EB',
              backgroundColor: '#F3F4F6',
            },
          }}
        >
          <Group align="center" spacing={16}>
            <Flex
              align="center"
              justify="center"
              w={48}
              h={48}
              bg={theme.colors.brand[5]}
              sx={{ borderRadius: 64 }}
            >
              <IconAddressBook color="#fff" />
            </Flex>
            <Stack spacing={0} sx={{ flexGrow: 1 }}>
              <Text weight={700} size={14}>
                Emergency Contacs
              </Text>
              <Text size={12}>List of important contacts related to flood</Text>
            </Stack>
          </Group>
        </Card>
      </Box>

      <Divider size={16} color="#f5f5f5" />

      <Box p={16}>
        <Text weight={700}>Latest Information</Text>
      </Box>
    </>
  );
}
