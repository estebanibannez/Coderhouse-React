import { Container } from '@chakra-ui/react';
const Layout = ({ children }) => {
  return (
    <Container
      minH="100vh"
      maxW="container.3xl"
      pb={10}
      p={0}
      fit="cover"
      bgImage="linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)) , url('../background.jpg')"
      // bgGradient="linear(to-l,#28313B,#28313B)"
    >
      {children}
    </Container>
  );
};

export default Layout;
