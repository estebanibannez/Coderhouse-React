import { Box, Heading, Text, Stack, Image, Center, useColorModeValue } from '@chakra-ui/react';
const ItemList = ({ greetings }) => {
  const { title, price, previusPrice, description, image } = greetings;

  return (
    <Center py={2}>
      <Box
        role={'group'}
        p={2}
        w={'full'}
        bg={useColorModeValue('white', 'gray.300')}
        boxShadow={'base'}
        rounded={'lg'}
        pos={'relative'}
        zIndex={1}
      >
        <Box pos={'relative'} height={'130px'} rounded="xl" shadow="lg">
          <Image rounded={'lg'} boxSize="130px" objectFit="cover" src={image} />
        </Box>
        <Stack pt={4} align={'center'}>
          <Text color={'gray.500'} fontSize={'xs'} textTransform={'uppercase'}>
            {description}
          </Text>
          <Heading fontSize={'1xl'} fontFamily={'body'} fontWeight={500}>
            {title}
          </Heading>
          <Stack direction={'row'} align={'center'}>
            <Text fontWeight={800} fontSize={'xl'} color={'red.500'}>
              $ {price}
            </Text>
            <Text textDecoration={'line-through'} color={'gray.600'}>
              $ {previusPrice}
            </Text>
          </Stack>
        </Stack>
      </Box>
    </Center>
  );
};

export default ItemList;
