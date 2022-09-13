import React, {useState, useEffect} from "react";
import { useNavigate, useParams } from 'react-router-dom';

function ArtistEditForm() {
//   const [name] = useState("");
//   const [city, setCity] = useState("");
//   const [image_link, setImage_link] = useState("");
//   const [genres, setGenres] = useState("");
  const [artistData, setArtistData] = useState ({});
  
  const {id} = useParams();
    useEffect(()=>{
        fetch(`http://localhost:9292/artists/${id}`)
        .then(response=>response.json())
        .then(data=>setArtistData(data))
    },[])
    console.log(artistData)
    let navigate = useNavigate();

  function handleSubmit(event) {
    
    // const formData = {
    //   name: name,
    //   city: city,
    //   image_link: image_link,
    //   genres: genres
    // };
    
    event.preventDefault();
    fetch(`http://localhost:9292/artists/${id}` ,{
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: artistData.name,
        city: artistData.city,
        image_link: artistData.image_link,
        genres: artistData.genres
      }),
    }).then(response=>response.json())
    .then(data=>{ console.log(data)})
    navigate(`/artists`)
    ;}
    const onFormChange = (e) => {
        setArtistData({...artistData,[e.target.name]:e.target.value});
    };
    
 return (
   <div class= "form" >
    <form onSubmit={handleSubmit}  class="newform" className="newform"> 
     <input  name='name' value={artistData.name}
  onChange={onFormChange} placeholder="NAME" type = "text"/>
     <input  name = 'city' value={artistData.city} 
  onChange={onFormChange} placeholder="CITY" type = "text" />
     <input name = 'image_link' value={artistData.image_link}
  onChange={onFormChange} placeholder="IMAGE_LINK" type = "text" />
     <input name = 'genres' value={artistData.genres}
  onChange={onFormChange} placeholder="Genres" type = "text" />
      <input type="submit" value="POST ARTISTS" />
</form>
</div>
);
}

export default ArtistEditForm;