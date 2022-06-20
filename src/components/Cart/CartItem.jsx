import React from 'react';
import {
  HStack,
  Image,
  Text,
  Box,
  Stack,
  useColorModeValue,
  Flex,
  Button,
  CloseButton,
  // Link,
  Input,
} from '@chakra-ui/react';

import { useContext } from 'react';
import CartContext from '../Context/CartContext';

export const CartItem = (props) => {
  const { formatPrice, removeFromCart } = useContext(CartContext);

  const { title, description, quantity, pictureUrl, price, categoryId } = props;

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
          <Input
            name="cant"
            value={quantity}
            // onChange={handleOnChange}
            size={'sm'}
            fontWeight={700}
            textAlign={'center'}
            textColor="white"
            readOnly={true}
          />
        </Stack>
        <HStack spacing="1">
          <Text as="span" fontWeight="medium" color="gray.400" textDecoration={'none'}>
            {formatPrice(price)}
          </Text>
        </HStack>
        <CloseButton
          aria-label={`Delete ${title} from cart`}
          color="white"
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

        <HStack spacing="1">
          <Text as="span" fontWeight="medium" color="gray.400" textDecoration={'none'}>
            {formatPrice(price)}
          </Text>
        </HStack>
      </Flex>
    </Flex>
  );
};
