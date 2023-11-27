import { useState } from "react";

const arrayOfLetters: string[] = [];
for (let i = 97; i <= 122; i++) {
    arrayOfLetters.push(String.fromCharCode(i))
}
// const letters: Array<string> = []

const Heroes = () => {
  const [selectedLetter, setSelectedLetter] = useState<string>("a");
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
    </section>
  );
};

export default Heroes;
