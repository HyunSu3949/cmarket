import { useState, useContext, MouseEventHandler } from "react";
import axiosInstance from "lib/axiosInstance";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "lib/auth/AuthProvider/AuthProvider";
import useModals from "components/modal/hooks/useModals";
import { modals } from "components/modal/Modals";

async function fetchProduct(product_id: number) {
  const result = await axiosInstance.get(`/products/${product_id}/`);
  return result;
}

type Props = {
  product_id: number;
};

export default function useProductDetailPage({ product_id }: Props) {
  const navigate = useNavigate();
  if (product_id === 0) {
    navigate(-1);
  }

  const [quantity, setQuantity] = useState(1);

  const { data } = useQuery(
    ["product", product_id],
    () => fetchProduct(product_id),
    {
      onError: () => {},
    }
  );

  const productData = !!data && data.data;

  const { loginType, isLogedIn } = useContext(AuthContext);
  const { openModal } = useModals();

  const preventClick: MouseEventHandler<HTMLElement> = (event) => {
    if (!isLogedIn) {
      event.preventDefault();
      openModal(modals.confirmModal, {
        text: "회원만 이용하실 수 있습니다.",
      });
      return;
    }
    if (loginType === "SELLER") {
      event.preventDefault();
      openModal(modals.confirmModal, {
        text: "구매자 회원만 이용하실 수 있습니다.",
      });
      return;
    }
  };

  return {
    productData,
    quantity,
    setQuantity,
    preventClick,
  };
}
