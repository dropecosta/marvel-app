import React from 'react'
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'
import CharactersList from '../pages/charactersList'
import CharacterDetail from '../pages/characterDetail'
const AdaptativeRoutes = props => (
  <HashRouter>
    <Routes>
    <Route path="/" element={<Navigate replace to="/marvel-app" />}/>
    <Route path="/marvel-app/" element={<CharactersList />}/>
    <Route path="/character/" element={<CharacterDetail />}/>
    </Routes>
  </HashRouter>
)

export default AdaptativeRoutes