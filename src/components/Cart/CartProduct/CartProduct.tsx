import useCart from "components/Cart/hooks/useCart";
import useModals from "components/modal/hooks/useModals";
import { modals } from "components/modal/Modals";
import { Link } from "react-router-dom";
import * as S from "./CartProduct.style";
import { toLocaleString } from "components/Form/utils/toLocaleString";

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
    price,
    product_id,
    shipping_fee,
  };
  const method = shipping_method === "PARCEL" ? "택배배송" : "소포";
  const fee = shipping_fee === 0 ? "무료배송" : shipping_fee + "원";
  return (
    <li>
      <S.Wrapper>
        <S.Img src={image} alt="상품이미지" />
        <S.ProductInfoContainer>
          <S.StoreName>{store_name}</S.StoreName>
          <S.ProductName>{product_name}</S.ProductName>
          <S.ProductPrice>{toLocaleString(price)}원</S.ProductPrice>
          <S.Method_Fee>
            {method} / {fee}
          </S.Method_Fee>
        </S.ProductInfoContainer>
        <S.QuantityBtn onClick={openEditModal}>
          <button>
            <S.MinusIcon />
          </button>
          <span> {quantity}</span>
          <button>
            <S.PlusIcon />
          </button>
        </S.QuantityBtn>
        <S.TotalWrapper>
          <span>{toLocaleString(price * quantity)}원</span>
          <Link to={"/payment"} state={orderState}>
            주문하기
          </Link>
        </S.TotalWrapper>
        <S.DeleteBtn
          onClick={() => {
            deleteMutate(cart_item_id);
          }}
        >
          <S.DeleteIcon />
        </S.DeleteBtn>
      </S.Wrapper>
    </li>
  );
}
