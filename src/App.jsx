import { useContext, useState } from "react";
import "./App.css";
import NameContext from "./NameContext";
import { useName } from "./useName";
import Shop from "./components/Shop";

export default function App() {
  const name = useName("pluto");
  return (
    <Name hookName={name}>
      <Shop />
    </Name>
  );
}

function Name({ children, hookName }) {
  const [name, setName] = useState(hookName);
  function addXtoName() {
    setName(name + "x");
  }
  return (
    <NameContext.Provider
      value={{
        name: name,
        addXtoName: addXtoName,
      }}
    >
      {children}
    </NameContext.Provider>
  );
}

function Section() {
  return (
    <div>
      <Element />
    </div>
  );
}

function Element() {
  const { name, addXtoName } = useContext(NameContext);
  return (
    <div>
      <button onClick={addXtoName}>ADD X!</button>
    </div>
  );
}

function Bellebbuono() {
  const { name } = useContext(NameContext);

  return <div>IL NOME È {name}</div>;
}
