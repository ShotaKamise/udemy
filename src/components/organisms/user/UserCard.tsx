import { Box, Stack, Image, Text } from "@chakra-ui/react";
import React from "react";
import { memo, VFC } from "react";

type Props = {
  id: number;
  imageUrl: string;
  name: string;
  fullName: string;
  onClick: (id: number) => void;
};

export const UserCard: VFC<Props> = memo((props) => {
  const { imageUrl, name, fullName, onClick, id } = props;
  return (
    <Box
      w="260px"
      h="260px"
      borderRadius="10px"
      bg="white"
      shadow="md"
      p={4}
      _hover={{ cursor: "pointer", opacity: "0.8" }}
      onClick={() => onClick(id)}
    >
      <Stack textAlign="center">
        <Image
          borderRadius="full"
          boxSize="160px"
          src={imageUrl}
          alt={name}
          m="auto"
        />
        <Text fontSize="lg" fontWeight="bold">
          {name}
        </Text>
        <Text fontSize="sm" color="gray">
          {fullName}
        </Text>
      </Stack>
    </Box>
  );
});
