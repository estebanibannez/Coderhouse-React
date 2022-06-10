import { Box } from '@chakra-ui/react';
const Layout = ({ children }) => {
  return (
    <Box minH="100vh" pb={10} bgGradient="linear(to-l,#28313B,#28313B)" m={{ base: 0, md: 0 }}>
      {children}
    </Box>
  );
};

export default Layout;
