import {
  HStack,
  Stack,
  Button,
  Input,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react';
import { useState, useEffect } from 'react';

const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);
  const [isntStock, setntStock] = useState(false);

  useEffect(() => {
    evaluateStock();
  }, [count]);

  const addToProduct = () => {
    if (evaluateStock()) {
      onAdd();
    }
  };

  const handleOnChange = (e) => {
    setCount(parseInt(e.target.value, 10));
  };

  const handleIncrement = () => {
    if (count <= stock) setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    if (count > 0) setCount((prevCount) => prevCount - 1);
  };

  const evaluateStock = () => {
    if (count > stock) {
      setntStock(true);
      return false;
    } else {
      setntStock(false);
      return true;
    }
  };

  return (
    <>
      <HStack maxW="150px">
        {/* {...inc} */}
        <Button colorScheme="teal" onClick={handleDecrement}>
          -
        </Button>
        <Input name="cant" value={count} onChange={handleOnChange} />

        <Button colorScheme="teal" onClick={handleIncrement}>
          +
        </Button>
      </HStack>
      <HStack>
        <Button colorScheme="orange" variant="solid" onClick={addToProduct}>
          Agregar al carrito
        </Button>
      </HStack>

      {isntStock && (
        <Stack spacing={3}>
          <Alert
            status="error"
            variant="subtle"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
            height="80px"
            size="sm"
          >
            <AlertIcon boxSize="20px" mr={0} />
            <AlertTitle>SIN STOCK</AlertTitle>
            <AlertDescription>Intente con una menor cantidad.</AlertDescription>
          </Alert>
        </Stack>
      )}
    </>
  );
};

export default ItemCount;
