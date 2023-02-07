import * as S from "./ProductStyle";
import { useNavigate } from "react-router-dom";

type props = {
  product_id: number;
  product_name: string;
  seller: number;
  store_name: string;
  image: string;
  price: number;
  shipping_method: string;
  shipping_fee: number;
  stock: number;
  products_info: string;
};

export default function Product({
  product_id,
  store_name,
  product_name,
  image,
  price,
}: props) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`product/${product_id}`);
  };
  return (
    <S.Wrapper onClick={handleClick}>
      <S.Img src={image} alt="상품이미지" />
      <S.StoreName>{store_name}</S.StoreName>
      <S.ProductName>{product_name}</S.ProductName>
      <S.ProductPrice>
        {price.toLocaleString("ko-KR")}
        <span>원</span>
      </S.ProductPrice>
    </S.Wrapper>
  );
}
