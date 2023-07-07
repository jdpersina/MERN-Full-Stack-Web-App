// importing dependencies
import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

// importing products data
import products from './data/products.js';

// importing components and pages
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import Nav from './components/Nav';
import GalleryPage from './pages/GalleryPage.js';
import StaffPage from './pages/StaffPage.js';
import OrderPage from './pages/OrderPage.js';
import LogPage from './pages/LogPage.js';
import TopicsPage from './pages/TopicsPage.js';


// importing styles and images
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <header className="App-header">
          <h1>Dan Persina
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
          </h1>
        </header>

        <Nav />

        <main>
          <section className="App-Nav">
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/contact" element={<ContactPage />} /> 
                <Route path="/gallery" element={<GalleryPage />} />
                <Route path="/staff" element={<StaffPage />} />
                <Route path="/order" element={<OrderPage products={products} />} />
                <Route path="/topics" element={<TopicsPage />} />
                <Route path="/log" element={<LogPage />} />

            </Routes>
          </section>
        </main>
        
        <footer>
          <p><cite>&copy; 2023 Dan Persina, Junior at Oregon State.</cite></p>
          <p><cite> This web app is a project for CS 290. </cite></p>
        </footer>
        
        </BrowserRouter>
      </div>
    );
  }

export default App;
