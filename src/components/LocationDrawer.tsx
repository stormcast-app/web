import locationData from '@/configs/location';
import {
  Drawer as MantineDrawer,
  Input,
  List,
  Flex,
  Badge,
  Group,
} from '@mantine/core';

type LocationDrawerProps = {
  isOpen: boolean;
  toggle: () => void;
  location: {
    label: string;
    value: string;
  };
  setLocation: (location: { label: string; value: string }) => void;
};

export default function LocationDrawer({
  isOpen,
  toggle,
  location,
  setLocation,
}: LocationDrawerProps) {
  const handleChangeLocation = (item: { label: string; value: string }) => {
    setLocation(item);
    toggle();
  };

  return (
    <>
      <MantineDrawer
        opened={isOpen}
        onClose={toggle}
        title={<b>Change your location</b>}
        size="xl"
        padding="lg"
        position="bottom"
        styles={{
          root: {},
          drawer: {
            maxWidth: 444,
            width: '100%',
            margin: '0 auto',
            borderRadius: '24px 24px 0 0',
          },
        }}
      >
        <Input size="md" placeholder="Search your location" radius="md" />

        <List
          sx={{ margin: '16px -16px 0 -16px' }}
          styles={{
            itemWrapper: {
              width: '100%',
              display: 'flex',
            },
            itemIcon: {
              display: 'flex',
              alignItems: 'center',
            },
          }}
        >
          {locationData.map((item, index) => (
            <List.Item
              key={item.value}
              value={item.value}
              onClick={() => handleChangeLocation(item)}
              styles={{
                itemWrapper: {
                  width: '100%',
                  display: 'flex',
                },
                itemIcon: {
                  display: 'flex',
                  alignItems: 'center',
                },
              }}
              sx={{
                listStyleType: 'none',
                padding: '12px 16px',
                cursor: 'pointer',
                fontSize: 14,
                ':hover': {
                  backgroundColor: '#f5f5f5',
                },
                borderBottom:
                  locationData.length !== index + 1 ? '1px solid #eee' : 'none',
              }}
            >
              <Group align="center">
                <Flex align="center" gap={16}>
                  {item.label}
                </Flex>
                <Flex>
                  {item.value === location.value ? (
                    <Badge
                      sx={{ textTransform: 'capitalize', letterSpacing: 0 }}
                    >
                      Selected
                    </Badge>
                  ) : null}
                </Flex>
              </Group>
            </List.Item>
          ))}
        </List>
      </MantineDrawer>
    </>
  );
}
