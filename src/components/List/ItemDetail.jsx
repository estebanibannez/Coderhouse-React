import {
  Box,
  Text,
  Image,
  useColorModeValue,
  Container,
  Flex,
  Badge,
  Icon,
  Circle,
  Stack,
  Button,
} from '@chakra-ui/react';
import { useState, useEffect, useContext } from 'react';
import { Skeleton, SkeletonText } from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';
import { BsFillArrowDownLeftCircleFill } from 'react-icons/bs';
import { FiCheck } from 'react-icons/fi';
import ItemCount from '../ItemCount/ItemCount';
import CartContext from '../Context/CartContext';

const ItemDetail = ({ item }) => {
  const [loading, setLoading] = useState(true);
  const [cant, setCant] = useState(0);
  const { addToCart, isInCart, formatPrice } = useContext(CartContext);

  const {
    title,
    price,
    stock,
    previusPrice,
    description,
    pictureUrl,
    pictureUrl1,
    pictureUrl2,
    pictureUrl3,
  } = item;

  const onAdd = () => {
    // isInCart(item.id);
    addToCart(item, cant);
  };

  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [item]);

  return (
    <>
      <Container maxW={'container.md'} pt={2}>
        <Stack
          bg={useColorModeValue('white', 'gray.800')}
          borderWidth="1px"
          rounded="lg"
          shadow="lg"
          maxW="100%"
          position="relative"
        >
          <Stack direction="row" m={1}>
            <Skeleton isLoaded={!loading} boxSize="200px">
              <Image
                rounded={'sm'}
                boxSize="200px"
                objectFit="cover"
                objectPosition={'top'}
                src={pictureUrl1}
              />
            </Skeleton>
            <Skeleton isLoaded={!loading} boxSize="200px">
              <Image
                rounded={'sm'}
                boxSize="200px"
                objectFit="cover"
                objectPosition={'top'}
                src={pictureUrl2}
              />
            </Skeleton>
            <Skeleton isLoaded={!loading} boxSize="200px">
              <Image
                rounded={'sm'}
                boxSize="200px"
                objectFit="cover"
                objectPosition={'top'}
                src={pictureUrl3}
              />
            </Skeleton>
          </Stack>

          <Box direction="row" m={1}>
            <Circle
              size="10px"
              position="absolute"
              top={2}
              right={2}
              bg="red.300"
              color="white"
            ></Circle>

            <Skeleton isLoaded={!loading} p={2}>
              <Image
                rounded={'lg'}
                boxSize="sm"
                objectFit="cover"
                // w="full"
                h="auto"
                src={pictureUrl}
              />
            </Skeleton>

            <SkeletonText isLoaded={!loading} mt="4" noOfLines={4} spacing="4" />
            {!loading && (
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

                {/* <Box d="flex" justifyContent="space-between" alignContent="center"> */}
                <Box fontSize="2xl" color={'white'}>
                  <Box as="span" color={'gray.600'} fontSize="sm" m={2}>
                    <Text as="s">{formatPrice(previusPrice)}</Text>
                  </Box>

                  <Box as="span" color={'pink.500'} fontSize="3xl" fontWeight={'bold'}>
                    {formatPrice(price)}
                  </Box>

                  <Box d="flex" alignItems="center">
                    {/* {cart.length <= 0 && ( */}
                    <ItemCount
                      label="Add to cart"
                      stock={stock}
                      initial={1}
                      onAdd={onAdd}
                      cant={cant}
                      setCant={setCant}
                    />
                    {/* )} */}
                    <Stack direction="row" mt={2}>
                      <Button
                        rightIcon={<FiCheck />}
                        w="100%"
                        colorScheme="blue"
                        variant="outline"
                        onClick={() => navigate('/cart')}
                      >
                        Finalizar compra
                      </Button>
                    </Stack>
                    <Box as="span" ml="4" color="gray.600" fontSize="sm">
                      <Link to={'/'} display={'flex'}>
                        Volver al home
                        <Icon
                          as={BsFillArrowDownLeftCircleFill}
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
              </Box>
            )}
          </Box>
        </Stack>
      </Container>
    </>
  );
};

export default ItemDetail;
