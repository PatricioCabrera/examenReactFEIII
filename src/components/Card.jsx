import React from "react";

export function Card(props) {
  // destructure props
  const { selectedAlbum } = props;

  return (
    <div className="card">
      <h2>Album: {selectedAlbum.name}</h2>
      <img src={selectedAlbum.image} alt={selectedAlbum.name} />
    </div>
  );
}