# C-MARKET :: 캠퍼들의 오픈마켓

## <span id='1'>1. 서비스 소개</span>

***C-MARKET***는 유저들이 물건을 사고 파는 `온라인 마켓`입니다.  

🔗 *배포 URL*: https://c-market.vercel.app/<br>
🏕  *체험계정*:     
구매자 계정 ID `cmarket1` /  PW`cmarket1`  
판매자 계정 ID `cmarket2` /  PW`cmarket2`  
               
## <span id='3'>2. 개발 기간</span>
`23/01/29 -`

## <span id='4'>3. 프로젝트 목표</span>

### 1. ***typescript*** 사용으로 버그를 사전에 제거 하여 생산성 증대.  

  사소한 타입 문제로 오랜 시간 버그를 수정하는데 시간 들였던 경험이 있습니다. 타입을 사전에 지정하면 이러한 에러를 미리 방지하여 생산성을 높일 수 있을것 같다는 생각에 타입스크립트를 사용하기로 했습니다.  
  
### 2. ***React-Query*** 로 비동기 통신 처리하기  

  프로젝트를 진행하며 클라이언트와 서버의 상태 값을 일치시키는 로직을 처리하는것이 까다로웠습니다. 리액트 쿼리를 사용하여 이 문제를 해결하여 간단하고 직관적인 로직을 만들어 보고자 했습니다.  
  
### 3. ***view*** 와 ***business logic*** 분리하여 코드 작성하기  

  Custom Hook Pattern 을 사용하여  view 와 business logic 분리하고자 했습니다. hook에서는 비지지스 로직을 처리하며 view 컴포넌트에서는 data를 보여주는 패턴을 적용시키려 했습니다.
  
## <span id='7'>4. 개발 환경</span>

<img src='https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black'> <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badg&logo=TypeScript&logoColor=white"> <img src='https://img.shields.io/badge/styled-components-DB7093?style=for-the-badge&logo=styled-components&logoColor=black'>

- 개발: 
    * FE: React / Typescript / Styled Components / React-Query
    * BE: 제공된 API 사용
  
- 디자인: 제공된 디자인 사용

- 배포: Vercel

## <span id='12'>5. 프로젝트를 진행하며</span>  
### TypeScript 도입
이번 프로젝트에서는 TypeScript 의 여러 기능중 타입 선언만 사용했습니다. 변수, 함수의 return 값, 컴포넌트의 Props 의 타입을 생각하며 코드를 작성하니 사소한 에러로 인한 시간낭비를 줄일 수 있었습니다. 또한 그간 자연스럽게 사용하던 JavaSciprt 내장 method, React 내장 Hook 등에 type을 확인하며 적절한 사용 방법에 대한 고민을 하게 되었습니다.
### React query 사용  
이전 프로젝트에서는 비동기 통신 요청 후 then 메서드를 통해 클라이언트 데이터를 갱신하는 과정을 거쳐야 했습니다. 리액트 쿼리 도입 후 서버측에서 변경된 상태를 클라이언트측에 곧바로 보이는 과정을 간단히 처리할 수 있었습니다. 또한 prefetch, useIsFetching 와 같은 유용한 기능들이 내장되어 있어 UX 향상에 용이하게 사용할 수 있었습니다.다만 리액트 쿼리가 갖는 유용한 기능들이 어떤 과정에 의해 일어나는지 추가 학습이 필요해 보입니다.

### localstorage에 저장된 토큰 보안 문제  
localstorage에 토큰을 저장해 놓고 사용하게 되면 XSS(Cross Site Scripting) 공격에 취약하다는 것을 알게 되었습니다. 해결 방법으로는 refresh token을 httpOnly 쿠키로 설정하고 url이 새로고침 될 때마다 refresh token을 request에 담아 새로운 token을 발급 받습니다. 이렇게 발급 받은 token을 private variable에 저장하는 방식입니다. 다만 제공된 api 명세서에 refresh token 이 없어서 다음 프로젝트를 진행시 jwt 인증 방식을 사용한다면 백엔드 개발자와 소통하여 이러한 방법을 사용해볼 생각입니다.





