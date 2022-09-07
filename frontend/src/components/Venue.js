import React from "react";
import Card from 'react-bootstrap/Card';

function Venue({pName, pCity, pImage_link}) {

  return (
    <div class= "scard" >
    <div class="row">
      <div class="col-sm-10">
        <div class="card" style={{ width: '28rem' }}>
          <div class="card-body">
            <h5 class="card-name">{pName}</h5>
            <h5 class="card-city">{pCity}</h5>
            <Card.Img variant="top" src= {pImage_link}/>
            <div class="d-grid gap-2 d-md-flex justify-content-md-end" style={{margin: 8 + 'px'}}>
           <button class="btn btn-primary" type="button">DELETE</button>
           </div>
          </div>
        </div>
      </div>
      </div>
      </div>
  );
}

export default Venue;