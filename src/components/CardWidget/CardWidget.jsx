import { BsCart3 } from "react-icons/bs";
import { Badge, Text, Box, Flex } from "@chakra-ui/react";

const CardWidget = ({ cartAmount }) => {
  return (
    <>
      <Flex>
        <BsCart3 size={40} />
        <Box ml="3">
          <Text fontWeight="bold">
            <Badge ml="1" colorScheme="green">
              {cartAmount}
            </Badge>
          </Text>
        </Box>
      </Flex>
    </>
  );
};

export default CardWidget;
