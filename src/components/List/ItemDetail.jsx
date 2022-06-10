import {
  Box,
  Text,
  Image,
  useColorModeValue,
  HStack,
  Flex,
  Badge,
  Icon,
  Circle,
} from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { Skeleton, SkeletonText } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { BsFillArrowDownLeftCircleFill } from 'react-icons/bs';
const ItemDetail = ({ item }) => {
  const [loading, setLoading] = useState(true);
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

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [item]);

  return (
    <>
      <Flex p={10} w="full" alignItems="center" justifyContent="center">
        <Box
          bg={useColorModeValue('white', 'gray.800')}
          maxW="md"
          p={4}
          borderWidth="1px"
          rounded="lg"
          shadow="lg"
          position="relative"
        >
          <Circle
            size="10px"
            position="absolute"
            top={2}
            right={2}
            bg="red.300"
            color="white"
          ></Circle>
          <Box position="absolute" ml={2}>
            <Badge right={2}>Stock: {stock}</Badge>
          </Box>
          <Skeleton isLoaded={!loading} p={2}>
            <Image rounded={'lg'} boxSize="20rem" objectFit="cover" src={pictureUrl} />
          </Skeleton>
          <HStack p={2}>
            <Skeleton isLoaded={!loading} height={'130px'}>
              <Box pos={'relative'} height={'130px'} rounded="xl" shadow="xl">
                <Image rounded={'sm'} boxSize="130px" objectFit="cover" src={pictureUrl1} />
              </Box>
            </Skeleton>
            <Skeleton isLoaded={!loading} height={'130px'}>
              <Box pos={'relative'} height={'130px'} rounded="xl" shadow="xl">
                <Image rounded={'sm'} boxSize="130px" objectFit="cover" src={pictureUrl2} />
              </Box>
            </Skeleton>
            <Skeleton isLoaded={!loading} height={'130px'}>
              <Box pos={'relative'} height={'130px'} rounded="xl" shadow="xl">
                <Image rounded={'sm'} boxSize="130px" objectFit="cover" src={pictureUrl3} />
              </Box>
            </Skeleton>
          </HStack>
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

              <Flex justifyContent="space-between" alignContent="center">
                <Box fontSize="2xl" color={'white'}>
                  <Box as="span" color={'gray.600'} fontSize="sm" m={2}>
                    <Text as="s">$ {previusPrice}</Text>
                  </Box>

                  <Box as="span" color={'pink.500'} fontSize="3xl" fontWeight={'bold'}>
                    ${price}
                  </Box>

                  <Box d="flex" alignItems="center">
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
              </Flex>
            </Box>
          )}
        </Box>
      </Flex>
    </>
  );
};

export default ItemDetail;
