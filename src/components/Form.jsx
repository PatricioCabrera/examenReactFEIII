import React, { useState } from "react";
import { Card } from "./Card";

export function Form() {
  // state variables for email and password inputs
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // state variable for album name input
  const [albumName, setAlbumName] = useState("");
  // state variable for error message
  const [error, setError] = useState("");
  // state variable for card component
  const [card, setCard] = useState(null);
  // event handler for submit button
  function handleSubmit(e) {
    // prevent default behavior of form submission
    e.preventDefault();
    // validate email input
    if (email.length < 3 || email.startsWith(" ")) {
      setError("Por favor chequea que la información sea correcta");
      return;
    }
    // validate password input
    if (password.length < 6) {
      setError("Por favor chequea que la información sea correcta");
      return;
    }
    // validate album name input
    const albums = [
      "Nemesis (Special Edition)",
      "Polaris (Bonus Track Version)",
      "Stratovarius (Original Version)",
      "Black Diamond",
      "Visions",
      "Episode (Original Version)",
      "Will the Sun Rise? (Live)",
      "Fourth Dimension",
      "Dreamspace (Original Version)",
      "Twilight Time",
      "Fright Night",
      "Darkest Hours",
      "Maniac Dance",
      "A Million Light Years Away",
      "Hunting High and Low",
      "S.O.S.",
      "Father Time"
    ];
    if (!albums.includes(albumName)) {
      setError("Por favor ingresa un nombre de album válido");
      return;
    }
    // clear error message
    setError("");
    // create card component with email, password and album name props
    const newCard = (
      <Card email={email} password={password} albumName={albumName} />
    );
    // update card state variable
    setCard(newCard);
  }

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label htmlFor="albumName">Nombre del album a visualizar:</label>
        <input
          type="text"
          id="albumName"
          value={albumName}
          onChange={(e) => setAlbumName(e.target.value)}
        />
        <button type="submit">Enviar</button>
      </form>
      {error && <p className="error">{error}</p>}
      {card && card} {/* render card component if it exists */}
    </div>
  );
}