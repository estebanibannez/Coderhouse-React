import { Box, Heading, Text, Stack, Image, useColorModeValue, HStack } from '@chakra-ui/react';
const ItemDetail = ({ item }) => {
  debugger;
  const {
    title,
    price,
    previusPrice,
    description,
    pictureUrl,
    pictureUrl1,
    pictureUrl2,
    pictureUrl3,
  } = item;

  return (
    <>
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
        <Heading fontSize="xl" align={'center'} color="gray">
          Detalle del producto
        </Heading>
        <Stack pt={4} align={'center'}>
          <HStack direction={'row'} align={'center'}>
            <Box pos={'relative'} height={'130px'} rounded="xl" shadow="xl">
              <Image rounded={'lg'} boxSize="130px" objectFit="cover" src={pictureUrl} />
            </Box>
            <Box pos={'relative'}>
              <Heading fontSize={'2xl'} color="cyan.500" fontFamily={'body'} fontWeight={600}>
                {title}
              </Heading>
              <Text color={'gray.500'} fontSize={'xs'} textTransform={'uppercase'}>
                {description}
              </Text>
              <Text textDecoration={'line-through'} color={'gray.600'}>
                Antes : $ {previusPrice}
              </Text>

              <Text fontWeight={800} fontSize={'xl'} color={'red.500'}>
                $ {price}
              </Text>

              <Text as="i" color={'gray.500'} fontSize={'md'}>
                Precio Oferta
              </Text>
            </Box>
          </HStack>

          <HStack>
            <Box pos={'relative'} height={'130px'} rounded="xl" shadow="xl">
              <Image rounded={'sm'} boxSize="130px" objectFit="cover" src={pictureUrl1} />
            </Box>
            <Box pos={'relative'} height={'130px'} rounded="xl" shadow="xl">
              <Image rounded={'sm'} boxSize="130px" objectFit="cover" src={pictureUrl2} />
            </Box>
            <Box pos={'relative'} height={'130px'} rounded="xl" shadow="xl">
              <Image rounded={'sm'} boxSize="130px" objectFit="cover" src={pictureUrl3} />
            </Box>
          </HStack>
        </Stack>
      </Box>
    </>
  );
};

export default ItemDetail;
