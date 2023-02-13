import { useContext, ReactNode } from "react";
import { FormContext } from "components/Form/FormCommon/FormProvider";
import styled from "styled-components";

type Values = {
  product_name: string;
  image: File;
  price: string;
  shipping_method: string;
  shipping_fee: string;
  stock: string;
  product_info: string;
  product_id: string;
};

type Object = {
  canSubmit: () => boolean;
  values: Values;
};

type OnSubmitProps = {
  formData: FormData;
  product_id: number;
};
type FormProps = {
  onSubmit: (values: OnSubmitProps) => Promise<void>;
  children: ReactNode;
  className: string;
};

export default function MultiPartForm({
  onSubmit,
  children,
  className,
}: FormProps) {
  const { canSubmit, values }: Object = useContext(FormContext);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData();

    Object.entries(values).forEach((value) =>
      formData.append(value[0], value[1])
    );

    if (canSubmit()) {
      return;
    } else {
      const { product_id: id } = values;
      const product_id = +id;
      onSubmit({ formData, product_id });
    }
  };

  return (
    <Form
      onSubmit={handleSubmit}
      encType="multipart/form-data"
      className={className}
    >
      {children}
    </Form>
  );
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  font-size: 16px;
  line-height: 20px;
  width: fit-content;
  button {
    margin-left: auto;
  }
  margin: 0 auto;
`;
