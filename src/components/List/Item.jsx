import { Link } from 'react-router-dom';
import { Flex, Box, Image, Badge, useColorModeValue, Text, Icon } from '@chakra-ui/react';
import { BsFillArrowDownRightSquareFill } from 'react-icons/bs';

const Item = ({ item, onAdd }) => {
  const { id, title, price, previusPrice, description, pictureUrl } = item;

  return (
    <Box
      bg={useColorModeValue('white', 'gray.800')}
      m={2}
      borderWidth="1px"
      rounded="lg"
      shadow="lg"
      position="relative"
    >
      <Image src={pictureUrl} alt={`Picture of ${pictureUrl}`} roundedTop="lg" />

      <Box p="6">
        <Box d="flex" alignItems="baseline">
          <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="red">
            Oferta
          </Badge>
        </Box>
        <Flex mt="1" justifyContent="space-between" alignContent="center">
          <Box fontSize="2xl" fontWeight="semibold" as="h4" lineHeight="tight">
            {title}
          </Box>
        </Flex>
        <Flex mt="1" justifyContent="space-between" alignContent="center">
          <Box fontSize="sm" fontWeight="normal" lineHeight="tight">
            {description}
          </Box>
        </Flex>

        <Flex justifyContent="space-between" alignContent="center">
          {/* <Rating rating={data.rating} numReviews={data.numReviews} /> */}

          <Box fontSize="2xl" color={useColorModeValue('gray.800', 'white')}>
            <Box as="span" color={'gray.600'} fontSize="sm" m={2}>
              <Text as="s">$ {previusPrice}</Text>
            </Box>

            <Box as="span" color={'pink.500'} fontSize="3xl" fontWeight={'bold'}>
              ${price}
            </Box>

            <Box d="flex" alignItems="center">
              <Box as="span" ml="4" color="gray.600" fontSize="sm">
                <Link to={'/item/' + id} display={'flex'}>
                  Ver detalle del Producto
                  <Icon
                    as={BsFillArrowDownRightSquareFill}
                    h={3}
                    w={3}
                    ml={2}
                    alignSelf={'center'}
                    color="pink.500"
                  />
                </Link>
              </Box>
            </Box>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Item;
