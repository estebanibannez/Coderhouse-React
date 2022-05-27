import { Center } from "@chakra-ui/react";
import ItemList from "./ItemList";
const listProducts = [
  {
    name: "item 1",
    previusPrice: 200,
    price: 100,
    image:
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80",
  },
  {
    name: "item 2",
    previusPrice: 500,
    price: 200,
    image:
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80",
  },
  {
    name: "item 3",
    previusPrice: 600,
    price: 300,
    image:
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80",
  },
  {
    name: "item 4",
    previusPrice: 800,
    price: 400,
    image:
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80",
  },
];

export default function ItemListContainer() {
  return (
    <Center py={12}>
      <ItemList listProducts={listProducts}></ItemList>
    </Center>
  );
}
