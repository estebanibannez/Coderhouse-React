import { BsCart3 } from "react-icons/bs";
import { Badge, Text, Box, Flex } from "@chakra-ui/react";

const CardWidget = ({ cartAmount }) => {
  return (
    <>
      <Flex mr="10">
        <BsCart3 size={40} />
        <Box>
          <Text fontWeight="bold">
            <Badge ml="1" fontSize="1.3em" colorScheme="twitter" m={2}>
              {cartAmount}
            </Badge>
          </Text>
        </Box>
      </Flex>
    </>
  );
};

export default CardWidget;
