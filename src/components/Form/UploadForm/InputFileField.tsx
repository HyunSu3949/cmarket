import { useContext, useState } from "react";
import { FormContext } from "src/components/Form/FormProvider";
import emptyImg from "src/assets/images/product_empty_img.png";
export default function InputFileField(props: any) {
  const { inputFieldProps, setValues }: any = useContext(FormContext);
  const { onBlur } = inputFieldProps(props.name);
  const [currentImg, setCurrentImg] = useState("");

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    const file = e.target.files && e.target.files[0];
    setValues((prev: any) => ({ ...prev, image: file }));
    if (file) {
      setCurrentImg(URL.createObjectURL(file));
    }
  };
  return (
    <>
      <input
        type="file"
        name={props.name}
        onBlur={onBlur}
        onChange={handleUpload}
        accept="image/*,audio/*,video/mp4,video/x-m4v,application/pdf,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-powerpoint,application/vnd.openxmlformats-officedocument.presentationml.presentation,.csv"
      />
      <img
        src={currentImg || emptyImg}
        alt=""
        style={{
          width: "100px",
          height: "100px",
        }}
      />
    </>
  );
}
