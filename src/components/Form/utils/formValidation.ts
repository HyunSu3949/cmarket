export function signUpValidate(name: string, value: string) {
  const validates: any = {
    username: (value: string) => {
      if (!value) {
        return "필수 정보입니다.";
      }
      if (!/^[a-zA-Z0-9]{1,20}$/.test(value)) {
        return "ID는 20자 이내의 영어 소문자, 대문자, 숫자만 가능합니다.";
      }

      return "";
    },

    password: (value: string) => {
      if (!value) {
        return "필수 정보입니다.";
      }
      if (!/^(?=.*[a-z])(?=.*\d)[a-z\d]{8,}$/.test(value)) {
        return "비밀번호는 8자 이상이며 영소문자와 숫자를 포함해야합니다.";
      }
      return "";
    },

    password2: (value: string) => {
      if (!value) {
        return "필수 정보입니다.";
      }
      //비밀번호 일치 검사는 ConfirmPassword컴포넌트에서 합니다
      return "";
    },

    phone_number: (value: string) => {
      if (!value) {
        return "필수 정보입니다.";
      }
      if (!/^01\d{8,9}$/.test(value)) {
        return "핸드폰번호는 01*으로 시작해야 하는 10~11자리 숫자여야 합니다.";
      }

      return "";
    },

    name: (value: string) => {
      if (!value) {
        return "필수 정보입니다.";
      }
      return "";
    },
  };

  return validates[name](value);
}

export function loginValidate(name: string, value: string): string {
  const validates: any = {
    username: (value: string) => {
      if (!value) {
        return "아이디를 입력하세요";
      }
      return true;
    },
    password: (value: string) => {
      if (!value) {
        return "비밀번호를 입력하세요";
      }
      return true;
    },
  };

  return validates[name](value);
}
