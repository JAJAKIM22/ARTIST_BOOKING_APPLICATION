import React  from "react";
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
const artistAPI = "http://localhost:9292/artists"

function Artist({removeArtist, pId, pName, pCity, pImage_link, pGenres}) {

  function onDeleteClick(e) {
    e.preventDefault();
    fetch(`${artistAPI}/${pId}`, {
      method: "DELETE",
    });
    removeArtist(pId);
  }

  return (
    <div class= "scard" >
    <div class="col">
      <div class="col-sm-10">
        <div class="card" style={{ width: '28rem' }}>
          <div class="card-body">
            <h5 class="card-name">ARTIST: {pName}</h5>
            <h5 class="card-city">CITY: {pCity}</h5>
            <Card.Img variant="top" src= {pImage_link} style={{height: 200 + 'px', width:400 + 'px'}}/>
            <h5 class="card-genres">GENRE: {pGenres}</h5>
            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
           <button onClick = {onDeleteClick} class="btn btn-primary" type="button">DELETE</button>
           <button class="btn btn-outline-success me-5" type="button"> <Link className="nav-link" to="/editartistforms">EDITPAGE</Link></button>
           </div>
          </div>
        </div>
      </div>
     
      </div>
      </div>
);

}

export default Artist;