import { SimpleGrid, Box } from '@chakra-ui/react';
import ItemList from './ItemList';
import { data } from '../../data';

export default function ItemListContainer() {
  return (
    <>
      <Box ml={4} mr={4} color="black">
        <SimpleGrid
          minChildWidth="130px"
          spacing="1em"
          minH="full"
          initial="initial"
          animate="animate"
        >
          {data.map((product, i) => (
            <ItemList greetings={product} key={product.id} />
          ))}
        </SimpleGrid>
      </Box>
    </>
  );
}
