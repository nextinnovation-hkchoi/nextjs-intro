# NextJS Introduction

- 프레임워크 : 나의 코드를 불러와서 모든 걸 동작하게 함. 따라서 특정한 규칙에 따라서 특정한 걸 해야 한다. 프레임워크는 추상화를 시켜서 깊은 곳에서 작동하는 코드에는 사용자가 접근할 수 없다. 내가 코드를 어떤 곳에 넣으면 framework가 그 코드를 호출하는 형태이다. 주체는 프레임워크이며, 나의 코드를 올바른 위치에 두면, 프레임워크가 코드를 불러서 사용해주는 것이다.

- 라이브러리 : 개발자로서 라이브러를 불러와서 내가 원하는대로 코드를 작성할 수 있고, 폴더명을 바꾸는 등의 자유도가 높다. 모든 게 나에게 달려있다. 따라서 React.js는 내가 원할 때 부르고 사용하는 라이브러리다.

- component를 export하고 있는 파일을 pages 폴더 안에 두면 된다. 그러면 next.js가 파일의 이름(컴포넌트명x)을 가져다가 url이름으로 알아서 사용해준다. 이로 인해 시간이 절약된다. 이때 반드시 export default를 해줘야 한다.

- 앱의 홈은 index.js로 나온 것이다. 그리고 jsx를 쓸 때, useState나 useEffect 같은 react method를 사용할 때를 제외하고는 react를 import할 필요는 없다.

- next.js는 앱에 있는 페이지들이 미리 렌더링된다. 이것들이 정적으로 생성된다.

- create react app은 client side render를 하는 앱을 만든다. 즉, '브라우저'가 사용자가 보는 UI를 만드는 모든 일을 처리한다. 사용자에게 보이는 모든 것은 react.js로 렌더링된 것이다. 이건 사용자가 보는 html 소스코드 안에는 들어있지 않다. 브라우저가 html을 가져올 때는 비어있는 div로 가져온다. 그 후, 브라우저가 모든 자바스크립트를 요청해서 브라우저가 자바스크립트와 react.js를 실행시키고, 그 후에서야 앱이 유저에게 보이게 되서 ui가 만들어지는 것이다. react.js 코드가 전달되기 전까지는 흰바탕 밖에 보이지가 않는다.

- next.js는 html 소스코드에 실제 div 코드를 가지고 있다. 따라서 유저가 매우 느린 연결을 하고 있거나, JS가 비활성화 되어 있어도 유저가 적어도 HTML을 볼 수 있다. 다만, api로부터 가져오는 데이터가 로딩되는데 오랜 시간이 걸릴 수 있다.

  - useState : 컴포넌트에서 보여줘야 하는 내용이 사용자 인터렉션에 따라 바뀌어야 할 때, 리액트 16.8에서 Hooks라는 기능이 도입되면서 함수형 컴포넌트에서도 상태를 관리할 수 있게 되었다. 따라서 Hooks 중에서 useState라는 함수도 있는 것이다. 컴포넌트에서 동적인 값을 state라고 부른다.

```javascript
// 괄호 안에는 초기값을 전달한다.
const [number, setNumber] = useState(0);
```

- 먼저 HTML이 전달되고(pre-rendering), react.js가 클라이언트로 전송되었을 때(hydration), 비로소 react.js 앱이 된다. 사용자는 웹 사이트를 들어갔을 때, 초기 상태의 component로 미리 생성된 html 페이지를 보게되고 상호작용이 일어나면 react.js는 그걸 받아서 아주 잘 동작하게 된다. 따라서 자바스크립트를 비활성화시켜도 기본적인 html이 생성하는 화면은 볼 수 있다. 이는 seo에 매우 효과적이고 검색엔진과 사용자에게 둘 다 좋다.

  - hydration : 서버 사이드 렌더링을 제공하는 프레임워크나 라이브러리에서 필수적으로 제공하는 솔루션이다. 컴포넌트를 렌더링하고 이벤트 핸들러를 연결하는 프로세스를 hydration이라고 한다. 인터랙션 기능 및 이벤트 핸들러를 이용해 말라 있는 html(pre-rendering)에 물을 주는 것과 같다. 즉, 서버 사이드 단에서 렌더링된 정적 페이지와 번들링된 js파일을 클라이언트에게 보낸 뒤, 클라이언트 단에서 html코드와 js 코드를 서로 매칭시키는 과정을 말한다.

- next.js 와 react.js에서는 anchor 태그를 사용하지 않고 Link 태그를 사용한다. Link는 오직 href를 위한 것이다. 따라서 class나 style 속성을 전달하고 싶다면, Link와 더불어 a 태그를 같이 써야 한다.

  - href : hypertext reference, 하이퍼텍스트는 한 문서에서 다른 문서로 즉시 접근할 수 있는 텍스트를 의미한다. 그리고 레퍼런스는 해당 정보의 출처가 유용하다는 뜻이다. 따라서 href는 신뢰도 높은 문서 간의 연결의 의미한다. 신뢰도 있는 문서에 빠르게 접근해서 정보를 습득하게 해줌.

- useRouter : 라우터와 연결할 수 있게 해주는 Hook

- css modeul : 일반 css를 적용할 때, 클래스 이름을 텍스트로 추가하지 않고, js 오브젝트의 프로퍼티 형식으로 적는다. 클래스명이 겹칠 필요 없이 next.js가 실제 사용되는 클래스 이름을 무작위로 변경해줘서 충돌을 방지해준다. ${}이나 [].join을 써서 여러 속성을 한번에 적용할 수도 있다. 하지만 각각의 클래스명을 기억해야 하고, 수정될 때도 일일이 바꿔주어야 한다는 단점이 있다.

```javascript
import styles from "./NavBar.module.css";

<nav className={styles.nav}>
```

    - join : 자바스크립트 배열에서 모든 요소를 연결해 하나의 문자열로 만든다. 매개변수로 각 요소를 구분할 구분자를 전달할 수도 있다.

- styled JSX : 따로 임포트 할 필요없이 해당 컴포넌트에 바로 입력시키며, 해당 컴포넌트 별로 독립적으로 적용된다.

```javascript
<style jsx>{`
  a {
    color: blue;
  }
`}</style>
```

### 외부참조 링크

- [노마드 코더 - Next.js](https://nomadcoders.co/nextjs-fundamentals/lectures/3439)
- [useState 를 통해 컴포넌트에서 바뀌는 값 관리하기](https://react.vlpt.us/basic/07-useState.html?q=)
- [react hydration 1](https://itchallenger.tistory.com/655)
- [react hydration 2](https://helloinyong.tistory.com/315)
- [href 의미](https://dasima.xyz/href-abbreviation/)
