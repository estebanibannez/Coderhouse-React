import {
  Button,
  Input,
  Flex,
  useToast,
  Divider,
  Center,
  Tag,
  TagLeftIcon,
  TagLabel,
  Stack,
} from '@chakra-ui/react';
import { FiShoppingCart } from 'react-icons/fi';
import { BsPinAngle } from 'react-icons/bs';
import { useEffect, useRef } from 'react';

const ItemCount = ({ stock, initial, onAdd, cant, setCant }) => {
  // const [count, setCount] = useState(initial);
  const toast = useToast();
  const toastIdRef = useRef();

  useEffect(() => {
    evaluateStock();
  }, [cant]);

  const addToProduct = () => {
    if (evaluateStock()) {
      onAdd();
    }
  };

  const handleOnChange = (e) => {
    setCant(parseInt(e.target.value, 10));
  };

  const handleIncrement = () => {
    if (cant <= stock) setCant((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    if (cant > 0) setCant((prevCount) => prevCount - 1);
  };

  const evaluateStock = () => {
    if (cant > stock) {
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
      return true;
    }
  };

  return (
    <>
      <Flex>
        <Tag size="sm" key="sm" variant="solid" colorScheme="cyan">
          <TagLeftIcon boxSize="12px" as={BsPinAngle} />
          <TagLabel>{stock} Disponibles</TagLabel>
        </Tag>
      </Flex>
      <Center height="50px">
        <Stack direction="row" w="100%">
          <Button
            leftIcon={<FiShoppingCart />}
            onClick={addToProduct}
            colorScheme="pink"
            variant="solid"
            size={'sm'}
          >
            Agregar al carro
          </Button>
        </Stack>
        <Divider orientation="vertical" m={4} />
        <Stack direction="row" w="100%">
          <Button colorScheme="pink" size={'sm'} onClick={handleDecrement}>
            -
          </Button>
          <Input
            name="cant"
            value={cant}
            onChange={handleOnChange}
            size={'sm'}
            fontWeight={700}
            textAlign={'center'}
            textColor="black"
          />

          <Button colorScheme="pink" size={'sm'} onClick={handleIncrement}>
            +
          </Button>
        </Stack>
      </Center>
    </>
  );
};

export default ItemCount;
