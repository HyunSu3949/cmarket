import useProductDetail from "src/components/hooks/useProductDetailPage";
import { useParams } from "react-router-dom";
import AddCartButton from "src/components/ProductDetail/Button/AddCartButton/AddCartButton";
import { useNavigate } from "react-router-dom";
export default function ProductDetailPage() {
  const navigate = useNavigate();
  const { product_id = 0 } = useParams();
  const id = +product_id;
  const order_kind = "direct_order";
  const {
    data = { data: {} },
    isLoading,
    quantity,
    setQuantity,
  } = useProductDetail({ product_id: id });

  if (isLoading) {
    return <p>...</p>;
  }

  const { image, price, product_name, store_name }: any = data.data;

  const handlePurchase = () => {
    navigate(`/payment`, {
      state: {
        ...data?.data,
        order_kind,
        quantity,
      },
    });
  };

  return (
    <div>
      <div>
        <img
          src={image}
          style={{ width: "300px", height: "300px" }}
          alt="상품 이미지"
        />
      </div>
      <div>
        <span>{store_name}</span>
        <span>{price}</span>
        <span>{product_name}</span>
        <div>
          <button
            onClick={() => setQuantity((prev) => prev - 1)}
            disabled={quantity <= 1}
          >
            -
          </button>
          <span>{quantity}</span>
          <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
        </div>
        <div>
          <span>총 상품금액</span>
          <span>17500원</span>
        </div>
        <div>
          <button onClick={handlePurchase}>바로구매</button>
          <AddCartButton product_id={id} quantity={quantity}>
            장바구니
          </AddCartButton>
        </div>
      </div>
    </div>
  );
}
