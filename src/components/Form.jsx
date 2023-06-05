import React, { useState } from "react";
import { Card } from "./Card";

export function Form() {
  // state variables for email and password inputs
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  // state variable for album name input
  const [albumName, setAlbumName] = useState("")

  // state variable for error message
  const [error, setError] = useState("")

  // state variable for card component
  const [card, setCard] = useState(null)

  let selectedAlbum = {}

  const validAlbums = [
    {
      name: "Nemesis (Special Edition)",
      image: "https://th.bing.com/th/id/R.c9fcbb0d9297d7b4e8515ac54952e8fb?rik=O4oEITdwLsb8LA&pid=ImgRaw&r=0",
    },
    {
      name: "Polaris",
      image: "https://img.discogs.com/uWxlBdpavnu0hAtoOZzo4WCRRy4=/fit-in/464x464/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-10360858-1495983286-3784.jpeg.jpg",
    }
  ];

  function handleSubmit(e) {
    e.preventDefault();

    if (!email.toLowerCase().match(/^ ( [a-z0-9_\\.-]+)@ ( [\\da-z\\.-]+)\\. ( [a-z\\.] {2,6})$/)) {
      setError("Please check your email")
      return;
    }

    if (password.length < 6) {
      setError("Please check your password");
      return;
    }

    // validate album name input
    if (!validAlbums.map(album => album.name.toLowerCase()).includes(albumName.toLowerCase())) {
      setError("Por favor ingresa un nombre de album válido");
      return;
    }
    // save album object if it's a valid Album
    else selectedAlbum = validAlbums.indexOf(validAlbums.find(album => album.name.toLowerCase() === albumName.toLowerCase()));
    

    // clear error message
    setError("");

    // create card component with email, password and album name props
    const newCard = <Card email={email} password={password} selectedAlbum={validAlbums[selectedAlbum]} />;

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