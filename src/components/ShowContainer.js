import React, {useEffect, useState} from "react";
import Show from "./Show";


function ShowsContainer() {
  const [shows, setShowList] = useState([]);
    useEffect(() => {
    fetch('http://localhost:9292/shows')
    .then(res => res.json())
    .then(showsData => {
      setShowList(showsData)
      });
  }, []);
  
  function removeShow(removeshow){
    setShowList(shows.filter(show=>show.id !==removeshow))
    }

  const showsCard = shows.map( (show)=> (<Show key={show.id} pId={show.id} pName={show.name} pCity={show.city}  pImage_link={show.image_link}  pDate={show.date} removeShow={removeShow}/>))

  
  return (
    <div className="container-fluid">
     {showsCard}
    </div>
  );
}

export default ShowsContainer;