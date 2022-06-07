import React from 'react';
import {
  Box,
  Heading,
  Text,
  Stack,
  Image,
  useColorModeValue,
  HStack,
  Button,
} from '@chakra-ui/react';
import ItemCount from '../ItemCount/ItemCount';
const Item = ({ item, onAdd }) => {
  const { title, price, previusPrice, description, pictureUrl } = item;
  return (
    <Box
      p={2}
      mt={5}
      ml={10}
      mr={10}
      rounded={'lg'}
      pos={'relative'}
      zIndex={1}
      borderWidth="1px"
      boxShadow={'base'}
      bg={useColorModeValue('white', 'gray.300')}
    >
      <Heading fontSize="xl"></Heading>
      <Stack pt={4} align={'center'}>
        <Box pos={'relative'} height={'130px'} rounded="xl" shadow="xl">
          <Image rounded={'lg'} boxSize="130px" objectFit="cover" src={pictureUrl} />
        </Box>
        <Text color={'gray.500'} fontSize={'xs'} textTransform={'uppercase'}>
          {description}
        </Text>
        <Heading fontSize={'1xl'} fontFamily={'body'} fontWeight={500}>
          {title}
        </Heading>
        <HStack>
          <Button colorScheme="gray" size="xs" variant="outline">
            <p>Ver Detalle del producto</p>
          </Button>
        </HStack>
        <Stack direction={'row'} align={'center'}>
          <Text fontWeight={800} fontSize={'xl'} color={'red.500'}>
            $ {price}
          </Text>
          <Text textDecoration={'line-through'} color={'gray.600'}>
            $ {previusPrice}
          </Text>
        </Stack>
        <ItemCount stock={5} initial={1} onAdd={onAdd} />
      </Stack>
    </Box>
  );
};

export default Item;
