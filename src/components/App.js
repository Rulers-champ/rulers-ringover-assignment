import React from  'react';
import { BrowserRouter as Router,Routes,Route }from 'react-router-dom';
import Header from './Header';
import Contact from './Contacts';
import Journey from './Journey';
import Home from './Home';
import Store from './Store';
import Team from './Team';

function App()
{
    return (

        <Router>
            <Header />
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/journey" element={<Journey />} />
              <Route path="/contacts" element={<Contact />} />
              <Route path="/store" element={<Store />} />
              <Route path="/team" element={<Team />} />
            </Routes>
            
        </Router>

    );
}

export default App;