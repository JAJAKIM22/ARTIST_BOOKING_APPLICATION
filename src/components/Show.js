import React from "react";
import Card from 'react-bootstrap/Card';

const showAPI = "http://localhost:9292/shows"
function Show({removeShow, pId, pName, pCity, pImage_link, pDate}) {

  function onDeleteClick(e) {
    e.preventDefault();
    fetch(`${showAPI}/${pId}`, {
      method: "DELETE",
    });
    removeShow(pId);
  }

  return (
    <div class= "scard" >
    <div class="row">
    <div class="col-sm-10">
      <div class="card" style={{ width: '28rem' }}>
        <div class="card-body">
          <h5 class="card-name">NAME: {pName}</h5>
          <h5 class="card-city">CITY: {pCity}</h5> 
         <Card.Img variant="top" src= {pImage_link} style={{height: 200 + 'px', width:400 + 'px'}}/>
         <h5 class="card-date">DATE: {pDate}</h5>
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
      
export default Show;