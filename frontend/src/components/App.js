import React from "react";
import ArtistContainer from "./ArtistContainer"
import VenueContainer from "./VenueContainer"
import ShowContainer from "./ShowContainer"
import NewArtistForm from "./Formpage"
import Navbar from "./Navbar";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'



function App() {
  
  return (
    <div className="app">
      <Router>
      <div>
        <Navbar/>
       </div>
       <Routes>
       <Route exact path="/artists" element={<ArtistContainer/>}></Route>
       <Route exact path="/venues" element={<VenueContainer/>}></Route>
       <Route exact path="/shows" element={<ShowContainer/>}></Route>
       <Route exact path="/forms" element={<NewArtistForm/>}></Route>
       
       </Routes>
      </Router>  
    </div>
    
  );
  }

export default App;