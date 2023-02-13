# C-MARKET :: 캠퍼들의 오픈마켓

## <span id='1'>1. 서비스 소개</span>

***C-MARKET***는 캠핑 용품을 사고 파는 `온라인 마켓`입니다.

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

## <span id='12'>5. 트러블슈팅</span>

