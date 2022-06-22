import { BsCart3 } from 'react-icons/bs';
import { Badge, Text, Box, Flex, Heading } from '@chakra-ui/react';
import { useContext } from 'react';

import CartContext from './../Context/CartContext';
import { Link } from 'react-router-dom';

const CardWidget = ({ cartAmount }) => {
  const { getItemQty } = useContext(CartContext);

  return (
    <>
      <Link to={'/cart'}>
        <Flex mr="10">
          <Box flex="1" p={2}>
            {/* <Badge colorScheme="purple">
              <Heading size="sm">Mi carro</Heading>
            </Badge> */}
          </Box>
          <BsCart3 size={40} color="pink" m={2} />

          <Box>
            <Text fontWeight="bold">
              <Badge ml="1" fontSize="1.3em" colorScheme="pink" m={2}>
                {getItemQty()}
              </Badge>
            </Text>
          </Box>
        </Flex>
      </Link>
    </>
  );
};

export default CardWidget;
