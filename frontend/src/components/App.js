import React from "react";
import ArtistContainer from "./ArtistContainer"
import VenueContainer from "./VenueContainer"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'



function App() {
  
  return (
    <div className="app">
      <Router>
       <Routes>
       <Route exact path="/artist" element={<ArtistContainer/>}></Route>
       <Route exact path="/venue" element={<VenueContainer/>}></Route>

       </Routes>
      </Router>  
    </div>
    
  );
  }

export default App;