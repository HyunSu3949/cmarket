import React from "react";
import useCart from "./../useCart";
import CartProduct from "src/components/Cart/CartProduct/CartProduct";
import { useNavigate, Link } from "react-router-dom";

type Item = {
  cart_item_id: number;
  product_id: number;
  quantity: number;
  image: string;
  store_name: string;
  product_name: string;
  price: number;
  shipping_fee: number;
  shipping_method: string;
  is_active?: boolean;
  my_cart?: number;
};

export default function CartList() {
  const {
    combinedCartInfoList,
    total_price,
    total_shipping_fee,
    total_product_price,
  } = useCart();

  return (
    <>
      <ul>
        {combinedCartInfoList.map((item: Item) => (
          <CartProduct key={item.product_id} {...item} />
        ))}
      </ul>
      <div>
        {total_product_price} + {total_shipping_fee} = {total_price}
      </div>
      <Link
        to={"/payment"}
        state={{
          order_kind: "cart_order",
          // products: products,
        }}
      >
        주문하기
      </Link>
    </>
  );
}
