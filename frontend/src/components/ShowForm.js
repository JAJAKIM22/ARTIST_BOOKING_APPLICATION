import React, {useState} from "react";


function NewShowForm() {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [image_link, setImage_link] = useState("");
  
  
  function handleSubmit(event) {
    const formData = {
      name: name,
      city: city,
      image_link: image_link,
    };
    console.log(formData);
    event.preventDefault();
    fetch('http://localhost:9292/shows', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });}

    
 return (
  <div class= "form" >
    <form onSubmit={handleSubmit}  class="mb-3" className="show-form"> 
     <input value={name}
  onChange={(e) => setName(e.target.value)} placeholder="NAME" />
     <input value={city}
  onChange={(e) => setCity(e.target.value)} placeholder="CITY" />
     <input value={image_link}
  onChange={(e) => setImage_link(e.target.value)} placeholder="IMAGE_LINK" />
      <input type="submit" value="POST SHOWS" />
</form>
</div>
);
}

export default NewShowForm;