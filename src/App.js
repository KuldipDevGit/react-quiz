import { useEffect } from "react";
import Header from "./Header";
import Main from "./Main";
export default function App() {
  useEffect(function () {
    fetch("http://localhost:9000/questions")
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  }, []);
  return (
    <div className="App">
      <Header />
      <Main>
        <p>Hey There !</p>
      </Main>
    </div>
  );
}
