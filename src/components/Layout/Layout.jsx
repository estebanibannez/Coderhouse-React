import { Container } from '@chakra-ui/react';
const Layout = ({ children }) => {
  return (
    <Container
      minH="100vh"
      maxW="container.3xl"
      pb={10}
      p={0}
      bgGradient="linear(to-l,#28313B,#28313B)"
    >
      {children}
    </Container>
  );
};

export default Layout;
