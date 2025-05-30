import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import BookDetail from './BookDetail'
import BookDelete from './BookDelete'

function App() {
  return (
      <Router>
      <Routes>
        <Route path="/books" element={<BookDetail />} />
        <Route path="/books/delete" element={<BookDelete />} />
      </Routes>
    </Router>
  )
}

export default App


