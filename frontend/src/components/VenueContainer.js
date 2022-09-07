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
  

  const venuesCard = venues.map( (venue)=> (<Venue key={venue.id}  pName={venue.name} pCity={venue.city}  pImage_link={venue.image_link}/>))

  
  return (
    <div className="container-fluid">
     {venuesCard}
    </div>
  );
}

export default VenuesContainer;