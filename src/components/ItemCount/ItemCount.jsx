import {
  HStack,
  Stack,
  Button,
  Input,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Box,
  Flex,
  chakra,
  Tooltip,
  Icon,
  Container,
  useToast,
  Divider,
  Center,
} from '@chakra-ui/react';
import { FiShoppingCart } from 'react-icons/fi';
import { useState, useEffect, useRef } from 'react';

const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);
  const [isntStock, setntStock] = useState(false);

  const toast = useToast();
  const toastIdRef = useRef();

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
      // setntStock(true);
      toastIdRef.current = toast({
        title: 'Sin Stock',
        description: 'No tenemos Stock suficiente para esa cantidad',
        status: 'warning',
        position: 'top-center',
        duration: 2000,
        isClosable: true,
      });
      return false;
    } else {
      // setntStock(false);
      return true;
    }
  };

  return (
    <>
      <Center height="50px">
        <Box pr={10}>
          <Tooltip
            label="Añadir al carro"
            bg="white"
            placement={'right'}
            color={'gray.800'}
            fontSize={'1.2em'}
            pr={10}
          >
            <chakra.a onClick={addToProduct} display={'flex'}>
              <Icon as={FiShoppingCart} h={7} w={7} alignSelf={'center'} color="pink.500" />
            </chakra.a>
          </Tooltip>
        </Box>

        <Divider orientation="vertical" pr={2} />
        <Button colorScheme="gray" size={'sm'} onClick={handleDecrement}>
          -
        </Button>
        <Input
          name="cant"
          value={count}
          onChange={handleOnChange}
          size={'sm'}
          fontWeight={800}
          textAlign={'center'}
        />

        <Button colorScheme="gray" size={'sm'} onClick={handleIncrement}>
          +
        </Button>
      </Center>
      <Flex justify="center"></Flex>
      {/* <Divider /> */}
      {/* <Stack pt={4} align={'center'}>
        <Container maxW="sm">
          <Stack direction={'row'} align={'center'}></Stack>
        </Container>
        {isntStock && (
          <Stack>
            <Alert status="warning" size={'sm'} fontSize={'sm'}>
              <AlertIcon />
              No tenemos Stock suficiente para esa cantidad
            </Alert>
          </Stack>
        )}
      </Stack> */}
    </>
  );
};

export default ItemCount;
