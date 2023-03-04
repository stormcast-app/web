import { Button, Flex, Text } from '@mantine/core';
import { useRouter } from 'next/router';

export default function NotFound() {
  const router = useRouter();

  return (
    <>
      <Flex
        justify="center"
        align="center"
        direction="column"
        h="100vh"
        gap={12}
      >
        <Text size={18} weight={700}>
          Page Not Found
        </Text>
        <Button variant="subtle" size="sm" onClick={() => router.back()}>
          Go Back
        </Button>
      </Flex>
    </>
  );
}
