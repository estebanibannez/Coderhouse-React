import React from 'react';
import {
  Heading,
  HStack,
  VStack,
  Image,
  AspectRatio,
  Text,
  Icon,
  Box,
  Stack,
  useColorModeValue as mode,
  Flex,
  Button,
  Spacer,
  CloseButton,
  // Link,
  Input,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import { BsTrash } from 'react-icons/bs';

import { useContext, useState, useEffect } from 'react';
import CartContext from '../Context/CartContext';

export const CartItem = (props) => {
  const {
    state: { cart },
    formatPrice,
    addToCart,
    removeFromCart,
  } = useContext(CartContext);

  const { title, description, quantity, pictureUrl, price, categoryId, stock } = props;

  const [useCant, setCant] = useState(quantity);

  useEffect(() => {
    addToCart(props, useCant);
  }, [setCant]);

  const handleOnChange = (e) => {
    debugger;
    setCant(parseInt(e.target.value, 10));
  };

  const handleIncrement = () => {
    debugger;
    if (useCant <= stock) {
      setCant((prevCount) => prevCount + 1);
    }
  };

  const handleDecrement = () => {
    if (useCant > 0) setCant((prevCount) => prevCount - 1);
  };

  return (
    <Flex
      direction={{
        base: 'column',
        md: 'row',
      }}
      justify="space-between"
      align="center"
    >
      <Stack direction="row" spacing="5" width="full">
        <Image
          rounded="lg"
          width="120px"
          height="120px"
          fit="cover"
          src={pictureUrl}
          alt={title}
          draggable="false"
          loading="lazy"
        />
        <Box pt="4">
          <Stack spacing="0.5">
            <Text fontWeight="medium" color="gray.300">
              {title}
            </Text>
            <Text color="white" fontSize="sm">
              {description}
            </Text>
            <Text color="white" fontSize="sm" as="u">
              {categoryId.toUpperCase()}
            </Text>
          </Stack>
        </Box>
      </Stack>

      {/* Desktop */}
      <Flex
        width="full"
        justify="space-between"
        display={{
          base: 'none',
          md: 'flex',
        }}
      >
        <Stack direction="row" w="30%">
          <Button
            colorScheme="pink"
            size={'sm'}
            // onChange={(e) => {
            //   onChangeQuantity?.(+e.currentTarget.value);
            // }}
            value={quantity}
            onClick={(e) => {
              debugger;
              handleDecrement?.(-e.currentTarget.value);
            }}
            // onClick={handleDecrement}
          >
            -
          </Button>
          <Input
            name="cant"
            value={quantity}
            onChange={handleOnChange}
            size={'sm'}
            fontWeight={700}
            textAlign={'center'}
            textColor="white"
          />

          <Button
            colorScheme="pink"
            size={'sm'}
            onClick={(e) => {
              handleIncrement?.(+e.currentTarget.value);
            }}
            // onClick={(e) => {
            //   handleIncrement(+e.currentTarget.value);
            // }}
          >
            +
          </Button>
        </Stack>
        <HStack spacing="1">
          <Text as="span" fontWeight="medium" color="gray.400" textDecoration={'none'}>
            {formatPrice(price)}
          </Text>
        </HStack>
        <CloseButton
          aria-label={`Delete ${title} from cart`}
          color="white"
          // onClick={onClickDelete}
          onClick={() => removeFromCart(props)}
        />
      </Flex>

      {/* Mobile */}
      <Flex
        mt="4"
        align="center"
        width="full"
        justify="space-between"
        display={{
          base: 'flex',
          md: 'none',
        }}
      >
        <Button
          fontSize="sm"
          color={'gray'}
          textDecor="underline"
          onClick={() => removeFromCart(props)}
        >
          Eliminar
        </Button>
        {/* <QuantitySelect
          value={quantity}
          onChange={(e) => {
            onChangeQuantity?.(+e.currentTarget.value);
          }}
        /> */}
        {/* <PriceTag price={price} currency={currency} /> */}
        <HStack spacing="1">
          <Text as="span" fontWeight="medium" color="gray.400" textDecoration={'none'}>
            {formatPrice(price)}
          </Text>
        </HStack>
      </Flex>
    </Flex>
  );
};
