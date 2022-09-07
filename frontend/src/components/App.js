import React from "react";
import ArtistContainer from "./ArtistContainer"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'



function App() {
  
  return (
    <div className="app">
      <Router>
       <Routes>
       <Route exact path="/artist" element={<ArtistContainer/>}></Route>
       <Route exact path="/venue" element={<ArtistContainer/>}></Route>
       <Route exact path="/show" element={<ArtistContainer/>}></Route>
       </Routes>
      </Router>  
    </div>
    
  );
  }

export default App;