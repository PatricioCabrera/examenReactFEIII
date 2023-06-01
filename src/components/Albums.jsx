import React from "react";

export function Albums(props) {
  const albums = [
    {
      name: "Nemesis (Special Edition)",
      image: "https://th.bing.com/th/id/R.c9fcbb0d9297d7b4e8515ac54952e8fb?rik=O4oEITdwLsb8LA&pid=ImgRaw&r=0",
    },
    {
      name: "Polaris (Bonus Track Version)",
      image: "https://bing.com/images/search?q=polaris+stratovarius",
    },
    // add more albums here
  ];

  return (
    <div className="albums">
      {albums.map((album) => (
        <div className="album" key={album.name}>
          <img src={album.image} alt={album.name} width={200}/>
          <p>{album.name}</p>
        </div>
      ))}
    </div>
  );
}
