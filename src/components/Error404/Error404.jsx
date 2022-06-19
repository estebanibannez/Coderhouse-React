import { Link } from 'react-router-dom';
import { Box, Heading, Text, Button } from '@chakra-ui/react';

export default function Error404() {
  return (
    <Box textAlign="center" py={10} px={6}>
      <Heading
        display="inline-block"
        as="h2"
        size="2xl"
        bgGradient="linear(to-r, teal.400, teal.600)"
        backgroundClip="text"
      >
        404
      </Heading>
      <Text fontSize="18px" mt={3} color="white" mb={2}>
        Ups ! Pagina no encontrada
      </Text>
      <Text color={'gray.500'} mb={6}>
        La pagina que intentas acceder no existe.
      </Text>
      <Link to={'/'} display={'flex'}>
        <Button
          colorScheme="teal"
          bgGradient="linear(to-r, teal.400, teal.500, teal.600)"
          color="white"
          variant="solid"
        >
          Volver al Home
        </Button>
      </Link>
    </Box>
  );
}
