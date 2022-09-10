import React from "react";
import Card from 'react-bootstrap/Card';

const venueAPI = "http://localhost:9292/venues"
function Venue({removeVenue, pId, pName, pCity, pImage_link}) {
 
  function onDeleteClick(e) {
    e.preventDefault();
    fetch(`${venueAPI}/${pId}`, {
      method: "DELETE",
    });
    removeVenue(pId);
  }

  return (
    <div class= "scard" >
    <div class="row">
      <div class="col-sm-10">
        <div class="card" style={{ width: '28rem' }}>
          <div class="card-body">
            <h5 class="card-name">NAME: {pName}</h5>
            <h5 class="card-city">CITY: {pCity}</h5>
            <Card.Img variant="top" src= {pImage_link}/>
            <div class="d-grid gap-2 d-md-flex justify-content-md-end" style={{margin: 8 + 'px'}}>
           <button onClick = {onDeleteClick} class="btn btn-primary" type="button">DELETE</button>
           </div>
          </div>
        </div>
      </div>
      </div>
      </div>
  );
}

export default Venue;