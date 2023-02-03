import React, { useEffect } from "react";
import useProductDetail from "src/components/hooks/useProductDetailPage";
import useCart from "src/components/Cart/useCart";
import useModals from "src/components/modal/hooks/useModals";
import { modals } from "src/components/modal/Modals";
import { Link } from "react-router-dom";

type Item = {
  cart_item_id: number;
  is_active?: boolean;
  my_cart?: number;
  product_id: number;
  quantity: number;
  image: string;
  store_name: string;
  product_name: string;
  price: number;
  shipping_fee: number;
  shipping_method: string;
};
type EditInfo = {
  product_id: number;
  quantity: number;
  is_active: boolean; // 장바구니 내 상품 활성화 버튼, 같이 보내지 않으면 False
};

export default function CartProduct(props: Item) {
  const { deleteMutate, editCartMutate } = useCart();

  const {
    cart_item_id,
    quantity,
    product_id,
    image,
    store_name,
    product_name,
    price,
    shipping_fee,
    shipping_method,
  } = props;

  const { openModal } = useModals();
  const openEditModal = () => {
    openModal(modals.quantityEditModal, {
      onEdit: (editInfo: EditInfo) => {
        editCartMutate({ cart_item_id, editInfo });
      },
      prevQuantity: quantity,
      product_id,
      is_active: true,
    });
  };

  const total_price = price * quantity + shipping_fee;
  const orderState = {
    order_kind: "cart_one_order",
    quantity,
    total_price,
    product_id,
  };
  return (
    <li>
      <div style={{ display: "flex" }}>
        <img
          src={image}
          alt="상품이미지"
          style={{ width: "100px", height: "100px" }}
        />
        <div>
          <p>{store_name}</p>
          <p>{product_name}</p>
          <p>{price}</p>
          <p>
            {shipping_method}/{shipping_fee}
          </p>
        </div>
        <div onClick={openEditModal}>
          <button>| - |</button>
          <span> {quantity}</span>
          <button>| + |</button>
        </div>
        <div>
          {total_price} 원
          <Link to={"/payment"} state={orderState}>
            주문하기
          </Link>
        </div>
        <button
          onClick={() => {
            deleteMutate(cart_item_id);
          }}
        >
          x
        </button>
      </div>
    </li>
  );
}
