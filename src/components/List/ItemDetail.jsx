import { useState, useEffect, useContext } from 'react';
import {
  Box,
  Text,
  Image,
  useColorModeValue,
  Container,
  Flex,
  Badge,
  Icon,
  Stack,
  Button,
  Skeleton,
  SkeletonText,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Lorem,
} from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';
import { BsFillArrowDownLeftCircleFill } from 'react-icons/bs';
import { FiCheck } from 'react-icons/fi';
import ItemCount from '../ItemCount/ItemCount';
import CartContext from '../Context/CartContext';

const ItemDetail = ({ item, loading }) => {
  const [cant, setCant] = useState(1);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [image, setImage] = useState('');

  const { addToCart, formatPrice } = useContext(CartContext);

  const handleImageClick = (newSize) => {
    setImage(newSize);
    onOpen();
  };

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
    addToCart(item, cant);
  };

  const navigate = useNavigate();

  return (
    <>
      <Container maxW={'container.md'} pt={6} pb={10}>
        <Box
          p={2}
          display={{ md: 'flex' }}
          bg={useColorModeValue('white', 'gray.800')}
          borderWidth="1px"
          rounded="lg"
          shadow="lg"
          maxW="100%"
          position="relative"
        >
          <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}></Box>
          <Stack direction={{ base: 'row', md: 'column' }}>
            <Skeleton isLoaded={!loading}>
              <Image
                rounded="lg"
                boxSize="sm"
                width={{ md: 40, base: 20 }}
                height={{ md: 40 }}
                m={4}
                src={pictureUrl1}
                onClick={() => handleImageClick(pictureUrl1)}
              />
            </Skeleton>
            <Skeleton isLoaded={!loading}>
              <Image
                rounded="lg"
                boxSize="sm"
                width={{ md: 40, base: 20 }}
                height={{ md: 40 }}
                m={4}
                src={pictureUrl2}
                onClick={() => handleImageClick(pictureUrl2)}
              />
            </Skeleton>
            <Skeleton isLoaded={!loading}>
              <Image
                rounded="lg"
                boxSize="sm"
                width={{ md: 40, base: 20 }}
                height={{ md: 40 }}
                m={4}
                src={pictureUrl3}
                onClick={() => handleImageClick(pictureUrl3)}
              />
            </Skeleton>
          </Stack>

          <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
            <Skeleton isLoaded={!loading}>
              <Image
                rounded="lg"
                boxSize="sm"
                width={{ md: 80, base: 80 }}
                height={{ md: 80 }}
                src={pictureUrl}
              />
            </Skeleton>

            <Text
              mt={2}
              fontWeight="bold"
              textTransform="uppercase"
              fontSize="sm"
              letterSpacing="wide"
              color="teal.600"
            >
              <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="red">
                Oferta
              </Badge>
            </Text>

            <SkeletonText isLoaded={!loading} m={2} />
            {!loading && (
              <Box d="flex">
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

                <Box fontSize="2xl" color={'white'}>
                  <Box as="span" color={'gray.600'} fontSize="sm" m={2}>
                    <Text as="s">{formatPrice(previusPrice)}</Text>
                  </Box>

                  <Box as="span" color={'pink.500'} fontSize="3xl" fontWeight={'bold'}>
                    {formatPrice(price)}
                  </Box>

                  <Box d="flex" alignItems="center">
                    <ItemCount
                      label="Add to cart"
                      stock={stock}
                      initial={1}
                      onAdd={onAdd}
                      cant={cant}
                      setCant={setCant}
                    />
             
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
            <SkeletonText isLoaded={!loading} m={2} />
          </Box>
        </Box>

        <Modal isCentered onClose={onClose} size="xl" isOpen={isOpen}>
          <ModalOverlay />
          <ModalContent>
            <ModalCloseButton />
            <ModalBody p={2}>
              <Image
                rounded="lg"
                boxSize="lg"
                // width={{ md: 40, base: 20 }}
                height={{ base: 'full' }}
                src={image}
              />
            </ModalBody>
          </ModalContent>
        </Modal>
      </Container>
    </>
  );
};

export default ItemDetail;
