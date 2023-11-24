import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev +1);
  const onChange = (event) => setKeyword(event.target.value);
  useEffect(() => {
    console.log("I run only once");
  }, []);
  useEffect(() => {
    if(keyword !== "" && keyword.length > 5) { // 키워드가 비어있을 땐 실행하지 않음
      console.log("I run when 'keyword' changes");
    }
  }, [keyword]); // 키워드가 변화할 때 실행할 것임
  useEffect(() => {
    console.log("I run when 'counter' changes");
  }, [counter]); 
  useEffect(() => {
    console.log("I run when keyword & counter change");
  }, [keyword, counter]);

  return (
    <div>
      <input value={keyword} onChange={onChange} type="text" placeholder="Search here..." />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
