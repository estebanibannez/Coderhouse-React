import { Box, Heading, Text, Stack, Image } from "@chakra-ui/react";
const ListItem = ({ listProducts }) => {
  return listProducts.map((item) => (
    <Box
      role={"group"}
      p={10}
      m={3}
      maxW={"330px"}
      w={"full"}
      bg={"white"}
      boxShadow={"2xl"}
      rounded={"lg"}
      pos={"relative"}
      zIndex={1}
    >
      <Box
        rounded={"lg"}
        mt={-12}
        pos={"relative"}
        height={"230px"}
        _after={{
          transition: "all .3s ease",
          content: '""',
          w: "full",
          h: "full",
          pos: "absolute",
          top: 5,
          left: 0,
          backgroundImage: `url(${item.image})`,
          filter: "blur(15px)",
          zIndex: -1,
        }}
        _groupHover={{
          _after: {
            filter: "blur(20px)",
          },
        }}
      >
        <Image
          rounded={"lg"}
          height={230}
          width={282}
          objectFit={"cover"}
          src={item.image}
        />
      </Box>
      <Stack pt={10} align={"center"}>
        <Text color={"gray.500"} fontSize={"sm"} textTransform={"uppercase"}>
          {item.name}
        </Text>
        <Heading
          color={"gray.500"}
          fontSize={"2xl"}
          fontFamily={"body"}
          fontWeight={500}
        >
          {item.name}
        </Heading>
        <Stack direction={"row"} align={"center"}>
          <Text fontWeight={800} color={"gray.300"} fontSize={"xl"}>
            $ {item.previusPrice}
          </Text>
          <Text textDecoration={"line-through"} color={"red.400"}>
            $ {item.price}
          </Text>
        </Stack>
      </Stack>
    </Box>
  ));
};

export default ListItem;
