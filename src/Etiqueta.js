import React from "react";
import { VStack, Box, Heading } from "@chakra-ui/react";

const Etiqueta = () => {
  return (
    <VStack bgGradient="linear(to-r, teal.500, green.500)" h="calc(100vh)">
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
            E C O M M E R CE
          </Heading>
        </Box>
      </VStack>
    </VStack>
  );
};

export default Etiqueta;
