import { useEffect, useState } from "react";
import { Hero } from "../types/hero";
import HeroCard from "../components/HeroCard";

const arrayOfLetters: string[] = [];
for (let i = 97; i <= 122; i++) {
  arrayOfLetters.push(String.fromCharCode(i));
}
// const letters: Array<string> = []

const Heroes = () => {
  const [selectedLetter, setSelectedLetter] = useState<string>("a");
  const [heroes, setHeroes] = useState<Hero[]>([])
  useEffect(() => {
    console.log("Premier rendu de Heroes - useEffect");
  }, []);

  useEffect(() => {
    // Ici, je peux executer des fonctions contenant des effets de bord
    console.log(
      `Premier rendu de Heroes, ou mise à jour de selectedLetter ${selectedLetter} - useEffect [selectedLetter]`
    );
    fetch(`http://localhost:4000/heroes?name_like=^${selectedLetter}`)
      .then((response) => response.json())
      .then((data) => {
        setHeroes(data)
      })
      .catch((e) => {
        console.error(e);
      });
  }, [selectedLetter]);
  // Fonction pure
  // Sans effet de bord
  return (
    <section>
      <h1>Heroes List</h1>
      <ul>
        {arrayOfLetters.map((letter) => (
          <li key={letter} onClick={() => setSelectedLetter(letter)}>
            {letter}
          </li>
        ))}
      </ul>
      <p>Vous avez cliqué sur: {selectedLetter}</p>
      <div>
        {heroes.map(hero => <HeroCard key={hero.id} hero={hero} />)}
      </div>
    </section>
  );
};

export default Heroes;
