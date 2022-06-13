import React from 'react';
import { Alert, AlertIcon, AlertTitle, AlertDescription } from '@chakra-ui/react';

const Error404 = () => {
  return (
    <div>
      <Alert status="error">
        <AlertIcon />
        <AlertTitle>Ups ! Pagina no encontrada</AlertTitle>
        <AlertDescription>La pagina que intentas acceder no existe.</AlertDescription>
      </Alert>
    </div>
  );
};

export default Error404;
