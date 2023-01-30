import * as S from "./ProductStyle";

type props = {
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
export default function Product({
  product_id,
  product_name,
  image,
  price,
}: props) {
  return (
    <S.Wrapper>
      <S.Img src={image} alt="상품이미지" />
      <S.ProductName>{product_name}</S.ProductName>
    </S.Wrapper>
  );
}
