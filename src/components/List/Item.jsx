import { Link } from 'react-router-dom';
import { Box, Image, Badge, useColorModeValue, Text, Icon } from '@chakra-ui/react';
import { BsEyeFill } from 'react-icons/bs';
import CartContext from './../Context/CartContext';
import { useContext } from 'react';

const Item = ({ item }) => {
  const { id, title, price, previusPrice, description, pictureUrl } = item;
  const { formatPrice } = useContext(CartContext);

  return (
    <Box
      display={{ md: 'flex' }}
      bg={useColorModeValue('white', 'gray.200')}
      m={2}
      borderWidth="1px"
      rounded="lg"
      shadow="lg"
    >
      {/* <Box flexShrink={0}></Box> */}
      <Box mt={{ base: 0, md: 0 }} ml={{ md: 0 }}>
        <Link to={'/item/' + id} display={'flex'}>
          <Image
            src={pictureUrl}
            alt={`Picture of ${pictureUrl}`}
            minWidth={'100%'}
            objectFit="cover"
            boxSize="auto"
            // width={{ md: 60 }}
            position="relative"
            borderRadius="lg"
          />
        </Link>
        <Badge
          rounded="full"
          px="2"
          ml={4}
          borderRadius="full"
          fontSize={{ base: 'sm' }}
          colorScheme="purple"
        >
          Oferta
        </Badge>

        <Box m={{ base: 4, md: 4 }}>
          <Text
            fontWeight="bold"
            textTransform="uppercase"
            fontSize={{ base: 'sm', md: 'sm', xl: 'xl' }}
            letterSpacing="wider"
            color="gray.900"
          >
            {title}
          </Text>

          <Text as="s" color={'gray.600'} fontSize={{ base: 'sm', md: 'sm', xl: 'md' }}>
            {formatPrice(previusPrice)}
          </Text>
          <Text color={'pink.500'} fontWeight={'bold'} fontSize={{ base: 'xl', xl: '2xl' }}>
            {formatPrice(price)}
          </Text>
          <Text
            mt={1}
            display="block"
            fontSize={{ base: 'sm', md: 'sm', xl: 'md' }}
            lineHeight="normal"
            fontWeight="normal"
            letterSpacing="wider"
          >
            {description}
          </Text>

          <Link to={'/item/' + id} fontSize={{ base: 'sm', md: 'sm' }} color="gray.500">
            <Text textAlign={['center', 'bottom']} letterSpacing="wide" mt={4} fontWeight="light">
              Detalle del Producto
              <Icon as={BsEyeFill} h={3} w={3} ml={2} alignSelf={'bottom'} color="pink.500" />
            </Text>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Item;