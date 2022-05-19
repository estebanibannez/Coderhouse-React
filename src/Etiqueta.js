import React from "react";
import { VStack, Container } from "@chakra-ui/react";

const Etiqueta = () => {
  return (
    <VStack bg="teal" h="calc(100vh)">
      <Container maxW="container.xl" bg="green.400" color="white">
        <p>Hola Mundo !</p>
      </Container>
    </VStack>
  );
};

export default Etiqueta;
