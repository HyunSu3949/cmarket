import InputField from "components/Form/FormCommon/InputField";
import ValidationMessage from "components/Form/FormCommon/ValidationMessage";
import SubmitBtn from "components/Form/FormCommon/SubmitBtn";
import SelectShippingMethod from "components/Form/UploadForm/SelectShippingMethod";
import useUploadForm from "components/Form/UploadForm/useUploadForm";
import InputFileField from "components/Form/UploadForm/InputFileField";
import * as S from "./UploadForm.style";
import MultiPartForm from "components/Form/UploadForm/MultiPartForm";

export default function UploadForm() {
  const { onSubmit } = useUploadForm();

  return (
    <MultiPartForm onSubmit={onSubmit}>
      <S.InfoWrapper>
        <S.ImgContainer>
          <span>상품 이미지</span>
          <InputFileField name={"image"} />
        </S.ImgContainer>
        <S.InputWrapper>
          <div>
            <span>상품명</span>
            <InputField name={"product_name"} type={"text"} />
            <ValidationMessage name={"product_name"} />
          </div>
          <div>
            <span>판매가</span>
            <InputField name={"price"} type={"text"} />
            <ValidationMessage name={"price"} />
          </div>
          <div>
            <span>배송방법</span>
            <SelectShippingMethod />
          </div>
          <div>
            <span>기본 배송비</span>
            <InputField name={"shipping_fee"} type={"text"} />
            <ValidationMessage name={"shipping_fee"} />
          </div>
          <div>
            <span>재고</span>
            <InputField name={"stock"} type={"text"} />
            <ValidationMessage name={"stock"} />
          </div>
        </S.InputWrapper>
      </S.InfoWrapper>
      <S.DefWrapper>
        <span>상품 정보</span>
        <InputField name={"product_info"} type={"text"} />
        <ValidationMessage name={"product_info"} />
      </S.DefWrapper>
      <SubmitBtn BtnText="상품 등록" className="uploadForm" />
    </MultiPartForm>
  );
}
