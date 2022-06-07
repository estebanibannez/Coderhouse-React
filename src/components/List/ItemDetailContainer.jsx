import { useEffect, useState } from 'react';
import { getItem } from '../../data';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
  const [useProduct, setProduct] = useState([]);

  useEffect(() => {
    getItem(2).then((response) => {
      debugger;
      setProduct(response);
    });
  }, []);

  return <ItemDetail item={useProduct} />;
};

export default ItemDetailContainer;
