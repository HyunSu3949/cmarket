import axiosInstance from "src/lib/axiosInstance";
import { useMutation } from "react-query";
import { queryClient } from "src/lib/react-query/queryClient";
import { useContext } from "react";
import { AuthContext } from "src/lib/auth/AuthProvider/AuthProvider";
import useModals from "src/components/modal/hooks/useModals";
import { modals } from "src/components/modal/Modals";

type ProductInfo = {
  product_id: number;
  quantity: number;
  check: Boolean;
};

async function addCart(productInfo: ProductInfo) {
  const result = await axiosInstance.post("/cart/", productInfo);
  return result;
}

export default function AddCartButton({ product_id, quantity }: any) {
  const productInfo = {
    product_id,
    quantity,
    check: true,
  };

  const { mutate } = useMutation((productInfo: any) => addCart(productInfo), {
    onSuccess: (data) => {
      return queryClient.invalidateQueries(["cart"]);
    },
  });

  const { openModal } = useModals();
  const { loginType, isLogedIn } = useContext(AuthContext);

  const handleClick = () => {
    if (!isLogedIn) {
      openModal(modals.confirmModal, {
        text: "장바구니는 회원만 이용하실 수 있습니다.",
      });

      return;
    }
    if (loginType === "SELLER") {
      openModal(modals.confirmModal, {
        text: "장바구니는 구매자만 이용하실 수 있습니다.",
      });
      return;
    } else {
      mutate(productInfo);
      openModal(modals.confirmModal, {
        text: "상품이 장바구니에 담겼습니다.",
      });
    }
  };
  return <button onClick={handleClick}>장바구니</button>;
}
