import React from "react";
import { axiosInstanceMultiForm } from "src/lib/axiosInstance";
import { useMutation } from "react-query";

type UploadInfo = {
  product_name: string;
  image: string;
  price: number;
  shipping_method: string;
  shipping_fee: number;
  stock: number;
  products_info: string;
  token: string;
};

async function uploadProduct(uploadInfo: UploadInfo) {
  return axiosInstanceMultiForm.post("/products/", uploadInfo);
}

export default function useUploadForm() {
  const { mutate: uploadMutate } = useMutation((uploadInfo: UploadInfo) =>
    uploadProduct(uploadInfo)
  );

  const onSubmit = async (values: UploadInfo) => {
    console.log(values);
    uploadMutate(values);
  };
  return {
    onSubmit,
  };
}
