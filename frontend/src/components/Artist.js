import React from "react";

function Artist({pName, pCity, pImage_link, pGenres}) {

  return (
    <div  class="container-fluid">
      <h3>{pName}</h3>

      <h3>{pCity}</h3>
      
      <h3>{pImage_link}</h3>

      <h3>{pGenres}</h3>
    </div>
  );
}

export default Artist;