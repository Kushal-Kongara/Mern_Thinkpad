import React from 'react'
import { Route, Routes } from 'react-router'

import HomePage from "./pages/HomePage.jsx"
import CreatePage from "./pages/CreatePage.jsx"
import NoteDetilPage from "./pages/NoteDetailPage.jsx"
import toast from 'react-hot-toast'

const App = () => {
  return (
    <div data-theme="garden">
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/create' element={<CreatePage/>}/>
        <Route path='/note/:id' element={<NoteDetilPage/>}/>
      </Routes>
    </div>
  )
}

export default App