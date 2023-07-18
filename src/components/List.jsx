import Pokemon from "./Pokemon";

const pokemon = [
  {
    name: "Bulbasaur",
    type: "Grass/Poison",
    level: 0,
  },
  {
    name: "Ivysaur",
    type: "Grass/Poison",
    level: 0,
  },
  {
    name: "Venusaur",
    type: "Grass/Poison",
    level: 0,
  },
];

function List() {
  return (
    <ul>
      {pokemon.map(function (pok, k) {
        return <Pokemon poke={pok} key={pok.name} />;
      })}
    </ul>
  );
}

export default List;
