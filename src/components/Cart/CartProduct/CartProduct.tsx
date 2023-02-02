import React, { useEffect } from "react";
import useProductDetail from "src/components/ProductDetail/useProductDetail";
import useCart from "src/components/Cart/useCart";
import useModals from "src/components/modal/hooks/useModals";
import { modals } from "src/components/modal/Modals";
import { useNavigate } from "react-router-dom";

type Item = {
  cart_item_id: number;
  is_active: boolean;
  my_cart: number;
  product_id: number;
  quantity: number;
};
type EditInfo = {
  product_id: number;
  quantity: number;
  is_active: boolean; // 장바구니 내 상품 활성화 버튼, 같이 보내지 않으면 False
};

export default function CartProduct(props: Item) {
  const navigate = useNavigate();
  const { product_id, quantity, cart_item_id } = props;
  const order_kind = "cart_one_order";

  const { data: productData, isLoading } = useProductDetail({
    product_id,
    order_kind,
  });
  const { deleteMutate, editCartMutate } = useCart();

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

  if (isLoading) return <div>...</div>;
  const {
    image,
    store_name,
    product_name,
    price,
    shipping_fee,
    shipping_method,
  } = productData?.data;

  const total_price = price * quantity + shipping_fee;

  const handlePurchase = () => {
    navigate("/payment", {
      state: {
        order_kind: "cart_one_order",
        quantity,
        total_price,
        ...productData?.data,
      },
    });
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
          {total_price} 원<button onClick={handlePurchase}>주문하기</button>
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
