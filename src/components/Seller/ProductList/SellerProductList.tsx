import useSeller from "../hooks/useSeller";
import SellerProduct from "src/components/Seller/Product/SellerProduct";

export default function SellerProductList() {
  const { productList } = useSeller();

  return (
    <>
      {productList.map((item: any) => (
        <SellerProduct key={item.product_id} {...item} />
      ))}
    </>
  );
}
