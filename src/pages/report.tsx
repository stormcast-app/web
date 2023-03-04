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
import AppBar from '@/components/AppBar';

export default function Report() {
  const theme = useMantineTheme();
  const [location, setLocation] = useState(locationData[0]);
  const [isDrawerOpen, toggleDrawer] = useToggle();

  return (
    <>
      <AppBar variant="title" title="Report" />

      <Box p={16}></Box>

      {/* <Divider size={16} color="#f5f5f5" /> */}
    </>
  );
}
