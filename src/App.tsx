import React, { useEffect, useState } from "react";
import "./App.css";
import Example1 from "./components/Example/example1";
import Example2 from "./components/Example/example2";

function App() {
  const [data, setData] = useState([]);
  const getData = async () =>
    await fetch("https://jsonplaceholder.typicode.com/users");

  useEffect(() => {
    getData()
      .then((data) => data.json())
      .then((res) => setData(res));
  }, []);

  return (
    <div className="App">
      <Example1 data={data} />
      <br />
      <Example2 data={data} />
    </div>
  );
}

export default App;
