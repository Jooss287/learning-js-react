import './App.css';
import Container from './Container';
import Counter from './Counter';
import MyHeader from './MyHeader'
// import MyFooter from './MyFooter'

function App() {
  const style ={
    inline_style: {
      color: "blue",
    },
  };

  const func = () => {
    return 'func'
  };
  const number = 5;

  const counterProps ={
    a: 1,
    b: 2,
    c: 3,
    initialValue: 5,
  };

  return (
    //최상위 태그가 항상 필요
    <div className="App"> 
      <Container>
      <MyHeader />
        {/*중괄호에는 문자, 숫자가 들어 갈 수 있음 */}
        <h2>Hello react {func()}</h2>
        <b id="bold_text">React.js</b>
        <b style={style.inline_style} id="inline">React.js</b>
        <b id="bold_text">{number}는 : {number % 2 === 0 ? "짝수" : "홀수"}</b>

        <Counter {...counterProps}/>
        </Container>
    </div>
  );
}

export default App;
