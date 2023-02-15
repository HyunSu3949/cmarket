import { useContext, useState, useRef } from "react";
import { FormContext } from "components/Form/FormCommon/FormProvider";
import imgIcon from "assets/images/icon-img.png";
import * as S from "./InputFileField.style";

type InputFileFieldProps = {
  name: string;
};

export default function InputFileField({ name }: InputFileFieldProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const { inputFieldProps, setValues } = useContext(FormContext);
  const { onBlur } = inputFieldProps(name);
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
    <S.Wrapper>
      <S.Label htmlFor="input">
        <S.Img src={imgIcon} alt="" />
        <S.Input
          id="input"
          type="file"
          name={name}
          onBlur={onBlur}
          onChange={handleUpload}
          accept="image/*,video/mp4,video/x-m4v,application/pdf,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-powerpoint,application/vnd.openxmlformats-officedocument.presentationml.presentation,.csv"
          ref={inputRef}
        />
      </S.Label>
      <S.CurrentImg
        src={currentImg}
        alt="파일 업로드를 창을 팝업하는 이미지 "
        onClick={() => {
          if (inputRef && inputRef.current) {
            inputRef.current.click();
          }
        }}
      />
    </S.Wrapper>
  );
}
