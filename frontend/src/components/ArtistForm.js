import React, {useState} from "react";


function NewArtistForm() {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [image_link, setImage_link] = useState("");
  const [genres, setGenres] = useState("");
  
  function handleSubmit(event) {
    const formData = {
      name: name,
      city: city,
      image_link: image_link,
      genres: genres
    };
    console.log(formData);
    event.preventDefault();
    fetch('http://localhost:9292/artists', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });}

    
 return (
    <form onSubmit={handleSubmit}  class="mb-3" className="new-artist-form"> 
     <input value={name}
  onChange={(e) => setName(e.target.value)} placeholder="NAME" />
     <input value={city}
  onChange={(e) => setCity(e.target.value)} placeholder="CITY" />
     <input value={image_link}
  onChange={(e) => setImage_link(e.target.value)} placeholder="IMAGE_LINK" />
     <input value={genres}
  onChange={(e) => setGenres(e.target.value)} placeholder="Genres" />
      <input type="submit" value="POST ARTISTS" />
</form>

);
}

export default NewArtistForm;