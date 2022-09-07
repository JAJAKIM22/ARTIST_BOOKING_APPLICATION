import React from "react";
import Card from 'react-bootstrap/Card';

function Venue({pName, pCity, pImage_link}) {

  return (
    <div class="row">
      <div class="col-sm-10">
        <div class="card" style={{ width: '25rem' }}>
          <div class="card-body">
            <h5 class="card-name">{pName}</h5>
            <h5 class="card-city">{pCity}</h5>
            <Card.Img variant="top" src= {pImage_link}/>
          </div>
        </div>
      </div>
      </div>
  );
}

export default Venue;