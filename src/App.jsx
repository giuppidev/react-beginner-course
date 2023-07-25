import { useState } from "react";
import "./App.css";
import List from "./components/List";
import Effect from "./components/Effect";

const STUDENT = {
  name: "Pippo",
  vote: 0,
};

export default function App() {
  const [count, setCount] = useState(0);
  function add() {
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
  }

  return (
    <>
      <Effect />
    </>
  );
}

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
