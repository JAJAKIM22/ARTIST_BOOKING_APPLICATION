import React, {useEffect, useState} from "react";
import Venue from "./Venue";


function VenuesContainer() {
  const [venues, setVenueList] = useState([]);
    useEffect(() => {
    fetch('http://localhost:9292/venues')
    .then(res => res.json())
    .then(venuesData => {
      setVenueList(venuesData)
      });
  }, []);

  function removeVenue(removevenue){
    setVenueList(venues.filter(venue=>venue.id !==removevenue))
    }

  const venuesCard = venues.map( (venue)=> (<Venue key={venue.id} pId={venue.id}  pName={venue.name} pCity={venue.city}  pImage_link={venue.image_link} removeVenue={removeVenue}/>))

  
  return (
    <div className="container-fluid">
     {venuesCard}
    </div>
  );
}

export default VenuesContainer;