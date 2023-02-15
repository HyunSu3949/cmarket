import InputField from "components/Form/FormCommon/InputField/InputField";
import ValidationMessage from "components/Form/FormCommon/ValidationMessage/ValidationMessage";
import SubmitBtn from "components/Form/FormCommon/SubmitBtn/SubmitBtn";
import SelectShippingMethod from "components/Form/EditForm/SelectShippingMethod/SelectShippingMethod";
import useEditForm from "components/Form/EditForm/hooks/useEditForm";
import InputFileField from "components/Form/EditForm/EditInputFileField/InputFileField";
import * as S from "./EditForm.style";
import MultiPartForm from "components/Form/EditForm/EditMultipartForm/MultiPartForm";

export default function EditForm() {
  const { onSubmit } = useEditForm();

  return (
    <MultiPartForm onSubmit={onSubmit} className="editForm">
      <S.InfoWrapper>
        <S.ImgContainer>
          <span>상품 이미지</span>
          <InputFileField name={"image"} />
        </S.ImgContainer>
        <S.InputWrapper>
          <div>
            <span>상품명</span>
            <InputField
              name={"product_name"}
              type={"text"}
              className={"editForm product_name"}
              placeholder={"20자 이내의 상품명을 입력하세요"}
            />
            <ValidationMessage name={"product_name"} />
          </div>
          <div>
            <span>판매가</span>
            <InputField
              name={"price"}
              type={"text"}
              placeholder={"숫자만 입력하세요"}
            />
            <ValidationMessage name={"price"} />
          </div>
          <div>
            <span>배송방법</span>
            <SelectShippingMethod />
          </div>
          <div>
            <span>기본 배송비</span>
            <InputField
              name={"shipping_fee"}
              type={"text"}
              placeholder={"숫자만 입력하세요"}
            />
            <ValidationMessage name={"shipping_fee"} />
          </div>
          <div>
            <span>재고</span>
            <InputField
              name={"stock"}
              type={"text"}
              placeholder={"숫자만 입력하세요"}
            />
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
