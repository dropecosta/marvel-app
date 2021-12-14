import React from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import CharactersList from '../pages/charactersList'
import CharacterDetail from '../pages/characterDetail'
const AdaptativeRoutes = props => (
  <HashRouter>
    <Routes>
    <Route path="/" element={<CharactersList />}/>
    <Route path="/character/" element={<CharacterDetail />}/>
    </Routes>
  </HashRouter>
)

export default AdaptativeRoutes