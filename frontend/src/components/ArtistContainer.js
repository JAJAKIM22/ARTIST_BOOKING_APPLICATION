import React, {useEffect, useState} from "react";
import Artist from "./Artist";


function ArtistsContainer() {
  const [artists, setArtistList] = useState([]);
    useEffect(() => {
    fetch('http://localhost:9292/artists')
    .then(res => res.json())
    .then(artistsData => {
      setArtistList(artistsData)
      });
  }, []);
  


  const artistsCard = artists.map( (artist)=> (<Artist key={artist.id}  pName={artist.name} pCity={artist.city}  pImage_link={artist.image_link} pGenres={artist.genres}/>))

  
  return (
    <div className="container-fluid">
     {artistsCard}
    </div>
  );
}

export default ArtistsContainer;