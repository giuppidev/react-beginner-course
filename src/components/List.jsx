import Pokemon from "./pokemon";

const pokemon = [
  {
    name: "Bulbasaur",
    type: "Grass/Poison",
  },
  {
    name: "Ivysaur",
    type: "Grass/Poison",
  },
  {
    name: "Venusaur",
    type: "Grass/Poison",
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
