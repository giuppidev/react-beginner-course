function Pokemon({ poke }) {
  return (
    <li>
      {poke.name} - {poke.type}
    </li>
  );
}

export default Pokemon;
