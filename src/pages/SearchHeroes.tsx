import { useState } from "react";

const SearchHeroes = () => {
  // 1. Remplacer useState (etat controllé) par useRef (etat non controllé)
  // Lors du click du bouton "Search", afficher la liste des heroes correspondant à la recherche

  // 2. Creer un composant (page) Login, input type email et input type password
  // Les deux inputs devront etre controllés par useState
  const [query, setQuery] = useState("");

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  return (
    <section>
      <h1>Search Heroes</h1>
      <input type="text" onChange={onChangeHandler} value={query} />
      <p>Vous avez tapé: {query}</p>
    </section>
  );
};

export default SearchHeroes;
