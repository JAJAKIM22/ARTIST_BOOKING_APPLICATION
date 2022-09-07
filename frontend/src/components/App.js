import React from "react";
import ArtistContainer from "./ArtistContainer"
import VenueContainer from "./VenueContainer"
import ShowContainer from "./ShowContainer"
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
       </Routes>
      </Router>  
    </div>
    
  );
  }

export default App;