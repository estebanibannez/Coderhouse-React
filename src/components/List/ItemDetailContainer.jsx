import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getItem } from '../../data';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [useProductById, setProductById] = useState([]);

  useEffect(() => {
    // getItem(parseInt(id))
    //   .then((response) => {
    //     setProductById(response);
    //   })
    //   .catch((error) => {
    //     console.log('Ocurrio un error: ' + error);
    //   });
    
    (async () => {
      const data = await getItem(id);
      setProductById(data);
    })();
  }, [id]);

  return <ItemDetail item={useProductById} />;
};

export default ItemDetailContainer;
