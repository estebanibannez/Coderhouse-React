import { Box } from '@chakra-ui/react';
const Layout = ({ children }) => {
  return (
    <Box minH="100vh" bgGradient="linear(to-r, teal.500, green.500)">
      <Box p={10}>{children}</Box>
    </Box>
  );
};

export default Layout;
