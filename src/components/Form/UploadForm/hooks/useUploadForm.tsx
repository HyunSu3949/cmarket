import { axiosInstanceMultiForm } from "lib/axiosInstance";
import { useMutation } from "react-query";

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
  const { mutate: uploadMutate } = useMutation((uploadInfo: UploadInfo) =>
    uploadProduct(uploadInfo)
  );

  const onSubmit = async (values: UploadInfo) => {
    uploadMutate(values);
  };
  return {
    onSubmit,
  };
}