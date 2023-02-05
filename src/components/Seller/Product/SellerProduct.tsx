import React from "react";
import { Link } from "react-router-dom";
import useSeller from "src/components/Seller/hooks/useSeller";

type Props = {
  product_id: number;
  product_name: string;
  seller: number;
  seller_store: string;
  image: string;
  price: number;
  shipping_method: string; //"PARCEL" or "DELIVERY"
  shipping_fee: number;
  stock: number;
  products_info: string;
};

export default function SellerProduct(props: Props) {
  const { product_id, product_name, stock, image, price } = props;
  const { deleteProductMutate } = useSeller();
  return (
    <li>
      <img src={image} alt="" />
      <div>
        <span>{product_name}</span>
        <span>재고:{stock} 개</span>
      </div>
      <span>{price}원</span>
      <Link to={"/editproduct"}>수정</Link>
      <button onClick={() => deleteProductMutate(product_id)}>삭제</button>
    </li>
  );
}
