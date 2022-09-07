import React from "react";
import Card from 'react-bootstrap/Card';

function Artist({pName, pCity, pImage_link, pGenres}) {

  return (
    <div class="row">
      <div class="col-sm-10">
        <div class="card" style={{ width: '25rem' }}>
          <div class="card-body">
            <h5 class="card-name">{pName}</h5>
            <h5 class="card-city">{pCity}</h5>
            <Card.Img variant="top" src= {pImage_link}/>
            <h5 class="card-genres">{pGenres}</h5>
          </div>
        </div>
      </div>
      </div>
  );
}

export default Artist;