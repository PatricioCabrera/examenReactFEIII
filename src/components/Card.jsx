import React from "react";

export function Card(props) {
  // destructure props
  const { email, password, albumName } = props;

  return (
    <div className="card">
      <h1>Stratovarius Album</h1>
      <p>Email: {email}</p>
      <p>Password: {password}</p>
      <p>Album: {albumName}</p>
      <img src={`https://bing.com/images/search?q=${albumName}+stratovarius`} alt={albumName} />
    </div>
  );
}