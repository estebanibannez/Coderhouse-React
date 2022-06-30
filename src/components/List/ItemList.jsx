import Item from '../List/Item';

const ItemList = ({ items }) => {
  return items.map((item) => <Item item={item} key={item.id} />);
};
export default ItemList;
