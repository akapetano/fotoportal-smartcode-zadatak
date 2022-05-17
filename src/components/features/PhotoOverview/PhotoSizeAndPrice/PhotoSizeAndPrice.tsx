import { Box, Divider, Flex, Text, Radio, RadioGroup } from '@chakra-ui/react';

export const PhotoSizeAndPrice = () => {
  return (
    <Box border="1px solid lightgray" w="80%" rounded="lg">
      <Flex alignItems="center" p="1rem">
        <Text>IMAGE 001</Text>
      </Flex>
      <Divider />
      <RadioGroup defaultValue="1">
        <Flex justifyContent="space-between" p="1rem" fontSize="sm">
          <Box>
            <Radio colorScheme="orange" value="1">
              LARGE
            </Radio>
            <Text fontSize="xs" pl="1.5rem" opacity="0.7">
              Print (2667x4000)
            </Text>
          </Box>
          <Text>170.00KN</Text>
        </Flex>
        <Divider />
        <Flex
          alignItems="center"
          justifyContent="space-between"
          p="1rem"
          fontSize="sm"
        >
          <Box>
            <Radio colorScheme="orange" value="2">
              SMALL
            </Radio>
            <Text fontSize="xs" pl="1.5rem" opacity="0.7">
              Web (1072x1600)
            </Text>
          </Box>
          <Text>130.00KN</Text>
        </Flex>
      </RadioGroup>
    </Box>
  );
};
