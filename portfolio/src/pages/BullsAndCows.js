import React, { useState } from 'react';

const BullsAndCows = () => {
  const [target, setTarget] = useState(generateTarget());
  const [attempts, setAttempts] = useState([]);
  const [input, setInput] = useState('');

  function generateTarget() {
    return Array.from({ length: 4 }, () => Math.floor(Math.random() * 10)).join('');
  }

  function calculateResult(guess) {
    let bulls = 0, cows = 0;
    for (let i = 0; i < 4; i++) {
      if (guess[i] === target[i]) bulls++;
      else if (target.includes(guess[i])) cows++;
    }
    return { bulls, cows };
  }

  const handleGuess = () => {
    if (input.length !== 4) {
      alert('Insira um número de 4 dígitos!');
      return;
    }
    const result = calculateResult(input);
    setAttempts([{ guess: input, ...result }, ...attempts]);
    setInput('');
  };

  return (
    <div className="bulls-and-cows">
      <h1>Jogo Senha (Bulls and Cows)</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        maxLength="4"
        placeholder="Digite um número de 4 dígitos"
      />
      <button onClick={handleGuess}>Enviar</button>
      <button onClick={() => alert(`A senha é: ${target}`)}>Revelar Senha</button>
      <ul>
        {attempts.map((attempt, index) => (
          <li key={index}>
            {attempt.guess} - {attempt.bulls} Bulls, {attempt.cows} Cows
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BullsAndCows;
