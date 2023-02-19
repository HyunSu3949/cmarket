import { axiosInstanceMultiForm } from "lib/axiosInstance";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { queryClient } from "lib/react-query/queryClient";

type UploadInfo = {
  product_name: string;
  image: string;
  price: number;
  shipping_method: string;
  shipping_fee: number;
  stock: number;
  products_info: string;
};

async function uploadProduct(uploadInfo: UploadInfo) {
  const result = axiosInstanceMultiForm.post("/products/", uploadInfo);
  return result;
}

export default function useUploadForm() {
  const { mutate: uploadMutate } = useMutation(
    (uploadInfo: UploadInfo) => uploadProduct(uploadInfo),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["products"]);
      },
    }
  );

  const navigate = useNavigate();
  const onSubmit = async (values: UploadInfo) => {
    uploadMutate(values);
    navigate("/sellerpage");
    toast("상품 등록 완료!");
  };
  return {
    onSubmit,
  };
}
