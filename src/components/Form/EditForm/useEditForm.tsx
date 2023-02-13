import { axiosInstanceMultiForm } from "lib/axiosInstance";
import { useMutation } from "react-query";
import { queryClient } from "lib/react-query/queryClient";

type UploadInfo = {
  product_id: number;
  product_name: string;
  price: number;
  shipping_method: string;
  shipping_fee: number;
  stock: number;
  products_info: string;
};

async function editProduct(values: any) {
  const { formData, product_id } = values;

  return axiosInstanceMultiForm.put(`/products/${product_id}/`, formData);
}

export default function useEditForm() {
  const { mutate: editMutate } = useMutation(
    (values: UploadInfo) => editProduct(values),
    {
      onSuccess: () => queryClient.invalidateQueries(["sellerProducts"]),
    }
  );

  const onSubmit = async (values: UploadInfo) => {
    editMutate(values);
  };
  return {
    onSubmit,
  };
}
