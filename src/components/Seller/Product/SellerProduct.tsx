import useSeller from "components/Seller/hooks/useSeller";
import { toLocaleString } from "components/Form/utils/toLocaleString";
import * as S from "./SellerProduct.style";

type Props = {
  product_id: number;
  product_name: string;
  seller: number;
  seller_store: string;
  image: string;
  price: number;
  shipping_method: string;
  shipping_fee: number;
  stock: number;
  products_info: string;
};

export default function SellerProduct(props: Props) {
  const { product_id, product_name, stock, image, price } = props;
  const { deleteProductMutate } = useSeller();
  return (
    <S.Wrapper>
      <li>
        <img src={image} alt="상품이미지" />
        <div>
          <span>{product_name}</span>
          <span>재고:{stock} 개</span>
        </div>
        <S.Price>{toLocaleString(price)}원</S.Price>
        <S.StyledLink to="/editproduct">수정</S.StyledLink>
        <S.Button onClick={() => deleteProductMutate(product_id)}>
          삭제
        </S.Button>
      </li>
    </S.Wrapper>
  );
}
