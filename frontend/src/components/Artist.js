import React, {useEffect, useState} from "react";



function ArtistsContainer() {
  const [artists, setArtistList] = useState([]);
    useEffect(() => {
    fetch('http://http://localhost:9292/artists')
    .then(res => res.json())
    .then(artistsData => {
      setGoalList(artistsData)
      });
  }, []);
  

  const artistsCard = artists.map( (artist)=> (<Artist key={artist.id}  pName={artist.name} pCity={artist.city}  pImage_link={artist.image_link} pGenres={artist.genres}/>))

  
  return (
    <div class="container-fluid" className="artists-container">
     {artistsCard}
    </div>
  );
}

export default ArtistsContainer;