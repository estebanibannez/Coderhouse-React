import { SimpleGrid } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import ItemList from './ItemList';
import { getProducts } from '../../data';

export default function ItemListContainer() {
  const [useData, setData] = useState([]);
  const onAdd = () => {
    console.log('padre');
  };

  useEffect(() => {
    getProducts.then((response) => {
      console.log('Listado de productos ', response);
      setData(response);
    });
  }, [useData]);

  return (
    <>
      <SimpleGrid columns={[1, 2, 3, 4, 5]} spacing={1}>
        <ItemList items={useData} onAdd={onAdd} />
      </SimpleGrid>
    </>
  );
}
