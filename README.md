배포 사이트 : https://gjeon03.github.io/covid19_chart

# 설명

리액트의 특징중 하나인 SPA를 살려 간단한 웹앱을 만들어보고싶었는데, 계속 지속되고 있는 코로나 관련 정보를 나타낼 수 있을까 하다가 국내의 코로나 확진 정보 api가 있는것을 발견하고 이를 활용하여 만들게 되었습니다.

# 사용한 기술

## typescript

전부터 react와 typescript는 궁합이 잘맞고 jsvascript의 불친절함을 보완해준다는 글을 많이 봐와서 사용해보았습니다.

## styled-components

styled-components를 처음 경험했을때 편리함에 감탄했습니다.

클래스 네임을 따로 줄 필요도 없고 CSS 커스텀 컴포넌트를 만들어 사용하기에 유지보수의 간편함을 경험했습니다.

## react-helmet-async

header의 title을 바꾸기 위해 사용

## recoil

상태 변환 라이브러리로 Styled-components의 ThemeProvider 와 같이 사용하여 Dark & White 모드를 구현하였습니다.

## apexcharts

코로나 확진자 차트를 나타낼때 사용한 라이브러리 입니다.

## gh-pages

github 저장소에 올린 프로젝트를 무료로 호스팅할 수 있어 사용하였습니다.

# 어려웠던 점

- apexcharts로 차트 구현
  - apexcharts 홈페이지에서 document를 보면서 사용하였는데 옵션을 사용할때 나와있는 사항들이 불친절한게 있어 다양한 예시를 참고하고 여러 값을 넣어보면서 만들었습니다.
- typescript사용
  - 익숙하지 않은 언어이다 보니 일일이 타입을 정해줘야 되는 특성때문에 매개변수로 넘길때 오류의 원인을 찾는데 오래 걸렸습니다.

# 보완할 점

- 비동기 요청을 Axios로 바꾸기
  - 비동기 요청의 경우 fetch를 사용하였는데 JavaScript의 내장 라이브러리이고 쓰기에 친숙하여 사용하였는데, React를 사용할 때 Axios를 더 선호하는 편이라고 한다.
  - 이유는 fetch는 axios에 비해 브라우저 호환성이 상대적으로 떨어지고 기능이 부족하기 때문이다.
