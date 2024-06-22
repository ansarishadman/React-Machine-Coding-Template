import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import NotFound from './components/NotFound'

const App = () => {
  return (
    <Routes>
      <Route path="/" exact element={<Dashboard />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App