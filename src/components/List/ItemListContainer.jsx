import { SimpleGrid } from '@chakra-ui/react';
import ItemList from './ItemList';
import { data } from '../../data';

export default function ItemListContainer() {
  return (
    <>
      <SimpleGrid columns={[1, 2, 3, 4, 5]} spacing={1}>
        {data.map((product, i) => (
          <ItemList greetings={product} key={product.id} />
        ))}
      </SimpleGrid>
    </>
  );
}
