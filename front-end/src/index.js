import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Event from './pages/event';
import News from './pages/news';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/event" element={<Event />} />
        <Route path="/news" element={<News />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
