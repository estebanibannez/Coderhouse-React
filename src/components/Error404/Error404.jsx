import { Link } from 'react-router-dom';
import { Box, Heading, Text, Button, Image } from '@chakra-ui/react';

export default function Error404() {
  return (
    <Box textAlign="center" py={5} px={9}>
      <Heading
        display="inline-block"
        as="h2"
        size="2xl"
        bgGradient="linear(to-r, pink.400, purple.600)"
        backgroundClip="text"
        p={4}
      >
        <Image
          rounded={'lg'}
          boxSize="sm"
          objectFit="cover"
          w="full"
          h="auto"
          src={window.location.origin + '/notfound.gif'}
        />
        Ups ! Pagina no encontrada
      </Heading>
      <Text color={'purple.500'} mb={6}>
        La pagina que intentas acceder no existe.
      </Text>
      <Link to={'/'} display={'flex'}>
        <Button
          colorScheme="teal"
          bgGradient="linear(to-r, pink.400, pink.500, purple.600)"
          color="white"
          variant="solid"
        >
          Volver al Home
        </Button>
      </Link>
    </Box>
  );
}
