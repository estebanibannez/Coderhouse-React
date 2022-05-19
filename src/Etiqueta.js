import React from "react";
import { VStack, Box, Heading } from "@chakra-ui/react";

const Etiqueta = () => {
  return (
    <VStack bg="teal" h="calc(100vh)">
      <VStack spacing={4} align="stretch" m={10}>
        <Box
          maxW="xl"
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          rounded="xl"
          pos="relative"
          boxShadow="lg"
          w="100%"
          p={{ base: 4, lg: 6 }}
        >
          <Heading color="white" as="u">
            H O L A - M U N D O
          </Heading>
        </Box>
      </VStack>
    </VStack>
  );
};

export default Etiqueta;
