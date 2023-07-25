import { useState } from "react";

function Pokemon({ poke }) {
  const [pokemon, setPokemon] = useState(poke);

  function levelUp() {
    setPokemon((prev) => ({ ...prev, level: pokemon.level + 1 }));
  }

  return (
    <li>
      {poke.name} - {poke.type} - <Level level={pokemon.level} />
      <button onClick={levelUp}>Level up</button>
    </li>
  );
}

export default Pokemon;

const Level = ({ level }) => {
  return <div>Level: {level}</div>;
};
