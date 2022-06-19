import {
  Button,
  Flex,
  Heading,
  Link,
  Stack,
  Text,
  useColorModeValue as mode,
} from '@chakra-ui/react';
import * as React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { useContext } from 'react';
import CartContext from '../Context/CartContext';

const OrderSummaryItem = (props) => {
  const { label, value, children } = props;

  return (
    <Flex justify="space-between" fontSize="sm">
      <Text fontWeight="medium" color={mode('gray.500', 'gray.400')}>
        {label}
      </Text>
      {value ? <Text fontWeight="medium">{value}</Text> : children}
    </Flex>
  );
};

export const CartOrderSummary = () => {
  const { state, formatPrice } = useContext(CartContext);

  return (
    <Stack
      spacing="8"
      borderWidth="1px"
      rounded="lg"
      padding="8"
      bgColor={'gray.900'}
      width="full"
      color="white"
    >
      <Heading size="md">Detalle de la compra</Heading>

      <Stack spacing="6">
        <OrderSummaryItem label="Subtotal" value={formatPrice(state.total)} />

        <Flex justify="space-between">
          <Text fontSize="lg" fontWeight="semibold">
            Total
          </Text>
          <Text fontSize="xl" fontWeight="extrabold">
            {formatPrice(state.total)}
          </Text>
        </Flex>
      </Stack>
      <Button colorScheme="pink" size="lg" fontSize="md" rightIcon={<FaArrowRight />}>
        Ir a Pagar
      </Button>
    </Stack>
  );
};
