import { Box } from '@chakra-ui/react';
const Layout = ({ children }) => {
  return (
    <Box minH="100vh" bgGradient="linear(to-r, gray.500, gray.300)" m={{ base: 0, md: 0 }}>
      {children}
    </Box>
  );
};

export default Layout;
