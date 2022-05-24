import { VStack, Box, Heading } from "@chakra-ui/react";
const Layout = ({ children }) => {
  return (
    <VStack bgGradient="linear(to-r, teal.500, green.500)" h="calc(100vh)">
      <VStack spacing={2} align="stretch" m={4}>
        <Box>
          <Heading color="white" as="u">
            {children}
          </Heading>
        </Box>
      </VStack>
    </VStack>
  );
};

export default Layout;
