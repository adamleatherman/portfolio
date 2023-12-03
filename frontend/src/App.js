// Import dependencies
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import Components, styles, media
import Navigation from './components/Navigation';
import './App.css';

// Import pages you have completed:
// Home, Topics, Gallery, Contact, and Staff Pages 

import HomePage from './pages/HomePage';
import TopicsPage from './pages/TopicsPage';
import TravelPage from './pages/TravelPage';

// If your schema requires SHORT data input, then use the TABLE design.
import EditTravelPageTable from './pages/EditTravelPageTable';
import AddTravelPageTable from './pages/AddTravelPageTable';

// Define the function that renders the content in Routes, using State.
function App() {

  const [country, setCountryToEdit] = useState([])

  return (
    <>
      <BrowserRouter>

          <header>
            <h1>Adam Leatherman</h1>
            <p>Check out my portfolio project—an efficient Single Page Application &#40;SPA&#41; built using React and Mongoose. See how this application smoothly handles Create, Read, Update, and Delete &#40;CRUD&#41; operations through a RESTful API. With React on the frontend, enjoy a user-friendly interface, while Mongoose manages data on the backend, making it a straightforward and practical demonstration of my web development skills.</p>
          </header>

          <Navigation />

          <main>
            <section>
                <Routes> 
                    {/* Add Routes for Home, Topics, Gallery, Contact, and Staff Pages.  */}
                    <Route path="/" element={<HomePage />} />
                    <Route path="/topics" element={<TopicsPage />} />
                    <Route path="/travel" element={<TravelPage setCountry={setCountryToEdit}/>} />
                    <Route path="/create" element={<AddTravelPageTable />} />   
                    <Route path="/update" element={<EditTravelPageTable countryToEdit={country} />} />
                </Routes>
              </section>
          </main>

          <footer>
            <p>© 2023 Adam Leatherman</p>
          </footer>

      </BrowserRouter>
    </>
  );
}

export default App;