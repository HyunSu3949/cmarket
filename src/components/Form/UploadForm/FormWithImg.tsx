import { useContext, ReactNode } from "react";
import { FormContext } from "src/components/Form/FormCommon/FormProvider";

type FormProps = {
  onSubmit: (values: any) => Promise<void>;
  children: ReactNode;
};

export default function FormWithImg({ onSubmit, children }: FormProps) {
  const { canSubmit, values }: any = useContext(FormContext);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const {
      product_name,
      image,
      price,
      shipping_method,
      shipping_fee,
      stock,
      product_info,
      token,
    } = values;
    const formData = new FormData();
    formData.append("image", image);
    formData.append("product_name", product_name);
    formData.append("price", price);
    formData.append("shipping_method", shipping_method);
    formData.append("shipping_fee", shipping_fee);
    formData.append("stock", stock);
    formData.append("product_info", product_info);
    formData.append("token", token);
    if (canSubmit()) {
      return;
    } else {
      onSubmit(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit} encType="multipart/form-data">
      {children}
    </form>
  );
}
