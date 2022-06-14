import { SimpleGrid, Box, Flex } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import ItemList from './ItemList';
import { getProducts, getProductsBycategoryId } from '../../data';
import { useParams } from 'react-router-dom';
import { Skeleton } from '@chakra-ui/react';

export default function ItemListContainer() {
  const { id } = useParams();

  const [useData, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const onAdd = () => {
    console.log('padre');
  };

  useEffect(() => {
    //se ejecuta solo si no tiene una categoria seleccionada
    if (!id) {
      getProducts.then((response) => {
        setData(response);
        setLoading(false);
      });
    }
  }, [useData]);

  useEffect(() => {
    //se ejecuta cuando tiene una categoria seleccionada
    getProductsBycategoryId(id).then((response) => {
      setData(response);
      setLoading(false);
    });
  }, [id]);

  return (
    <>
      <Box ml={10} mr={10}>
        <SimpleGrid columns={[1, 2, 3, 4]}>
          <ItemList items={useData} onAdd={onAdd} />
        </SimpleGrid>

        {loading && (
          <SimpleGrid columns={[1, 2, 3, 4]}>
            {Array(10)
              .fill('')
              .map((_, i) => {
                return (
                  <Skeleton m={4} minH="xl" key={i}>
                    <Flex p={4} w="full" alignItems="center" justifyContent="center">
                      <Box
                        maxW="sm"
                        borderWidth="1px"
                        rounded="lg"
                        shadow="lg"
                        position="relative"
                      ></Box>
                    </Flex>
                  </Skeleton>
                );
              })}
          </SimpleGrid>
        )}
      </Box>
    </>
  );
}
