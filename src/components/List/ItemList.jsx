import Item from '../List/Item';

const ItemList = ({ items, onAdd, loading }) => {
  return items.map((item) => <Item item={item} onAdd={onAdd} key={item.id} />);
};
export default ItemList;
