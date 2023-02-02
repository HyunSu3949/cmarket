import React from "react";
import useCart from "./../useCart";
import CartProduct from "src/components/Cart/CartProduct/CartProduct";

type Item = {
  cart_item_id: number;
  is_active: boolean;
  my_cart: number;
  product_id: number;
  quantity: number;
};

export default function CartList() {
  const { cartList } = useCart();

  return (
    <ul>
      {cartList?.data.results.map((item: Item) => (
        <CartProduct key={item.product_id} {...item} />
      ))}
    </ul>
  );
}
