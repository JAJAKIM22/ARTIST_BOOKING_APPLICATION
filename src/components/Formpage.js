import React from "react";
import NewArtistForm from "./ArtistForm";
import NewVenueForm from "./VenueForm";
import NewShowForm from "./ShowForm";
function NewForm() {

    
 return (
    <div class="form">
      <NewArtistForm/>
     <NewVenueForm/>
     <NewShowForm/>
    </div>
    
);

 }

export default NewForm;