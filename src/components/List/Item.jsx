import { Link as RouteLink } from 'react-router-dom';
import { Box, Image, Badge, useColorModeValue, Text, Icon, Stack, Button } from '@chakra-ui/react';
import { BsEyeFill } from 'react-icons/bs';
import CartContext from './../Context/CartContext';
import { useContext } from 'react';

const Item = ({ item }) => {
  const { id, title, price, previusPrice, description, pictureUrl } = item;
  const { formatPrice } = useContext(CartContext);

  return (
    <Box
      display={{ md: 'flex' }}
      bg={useColorModeValue('gray.900', 'gray.50')}
      color={useColorModeValue('white', 'gray.900')}
      m={2}
      p={0.5}
      // borderWidth="0.1em"
      rounded="md"
      boxShadow="xs"
    >
      {/* <Box flexShrink={0}></Box> */}
      <Box mt={{ base: 0, md: 0 }}>
        <RouteLink to={'/item/' + id} display={'flex'}>
          <Image
            src={pictureUrl}
            alt={`Picture of ${pictureUrl}`}
            minWidth={'100%'}
            objectFit="cover"
            boxSize="auto"
            minH={{ sm: 'sm', md: 'sm', xl: 'sm' }}
            maxH={{ base: 'sm', sm: 'xl', md: 'sm', xl: 'xl' }}
            position="relative"
            borderRadius="lg"
          />
        </RouteLink>
        <Badge
          rounded="full"
          ml={2}
          borderRadius="full"
          fontSize={{ base: '0.5em', md: 'sm', xl: 'sm' }}
          colorScheme="purple"
        >
          Oferta
        </Badge>

        <Box m={{ base: 2, md: 2 }} minH={{ sm: '12em', md: '12em' }} maxH={{ sm: 'sm', md: 'md' }}>
          <Text
            fontWeight="bold"
            textTransform="uppercase"
            fontSize={{ base: '0.8em', md: 'sm', xl: 'xl' }}
            letterSpacing="wider"
            color="gray.300"
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
            fontSize={{ base: '0.8em', md: 'sm', xl: 'md' }}
            lineHeight="normal"
            fontWeight="light"
            letterSpacing="wider"
          >
            {description}
          </Text>
        </Box>

        <Stack direction={'column'} spacing={0} fontSize={'sm'}>
          <RouteLink to={'/item/' + id}>
            <Button
              fontSize={{ base: 'sm', md: 'sm' }}
              color="gray.500"
              w={'full'}
              position="sticky"
              bg={useColorModeValue('#151f21', 'gray.900')}
              rounded={'md'}
              _hover={{
                transform: 'translateY(-2px)',
                boxShadow: 'lg',
              }}
            >
              <Icon as={BsEyeFill} w={8} pr={2} color="pink.500" />
              Ver detalle
            </Button>
          </RouteLink>
          {/* <Text color={'gray.500'}>Feb 08, 2021 · 6min read</Text> */}
        </Stack>
      </Box>
    </Box>
  );
};

export default Item;
