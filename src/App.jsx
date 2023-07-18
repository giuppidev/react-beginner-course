import { useState } from "react";
import "./App.css";
import List from "./components/List";

const STUDENT = {
  name: "Pippo",
  vote: 0,
};

function App() {
  const [count, setCount] = useState(0);
  function add() {
    setCount((prev) => prev + 1);
    if (true) {
      setCount((prev) => prev + 1);
    }
  }

  return (
    <>
      <List />
      <CounterView count={count} />
      <Counter add={add} />
    </>
  );
}

export default App;

function Counter({ add }) {
  return (
    <div>
      <button onClick={add}>Add 1 to counter</button>
    </div>
  );
}

function CounterView({ count }) {
  return <div>{count}</div>;
}

function Student({ parentStudent }) {
  const [student, setStudent] = useState(parentStudent);

  function add() {
    setStudent({
      ...student,
      vote: student.vote + 1,
    });
  }

  return (
    <div>
      <div>Name: {student.name}</div>
      <div>Vote: {student.vote}</div>
      <button onClick={add}>INCREMENT VOTE</button>
    </div>
  );
}
