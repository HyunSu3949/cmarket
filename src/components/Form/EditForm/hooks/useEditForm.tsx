import { axiosInstanceMultiForm } from "lib/axiosInstance";
import { useMutation } from "react-query";
import { queryClient } from "lib/react-query/queryClient";

type OnSubmitProps = {
  formData: FormData;
  product_id: number;
};

async function editProduct(values: OnSubmitProps) {
  const { formData, product_id } = values;

  return axiosInstanceMultiForm.put(`/products/${product_id}/`, formData);
}

export default function useEditForm() {
  const { mutate: editMutate } = useMutation(
    (values: OnSubmitProps) => editProduct(values),
    {
      onSuccess: () => queryClient.invalidateQueries(["sellerProducts"]),
    }
  );

  const onSubmit = async (values: OnSubmitProps) => {
    editMutate(values);
  };
  return {
    onSubmit,
  };
}
