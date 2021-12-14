import React from 'react'
import { HashRouter, Switch, Routes, Route, Redirect } from 'react-router-dom'
import CharactersList from '../pages/charactersList'
import CharacterDetail from '../pages/characterDetail'
const AdaptativeRoutes = props => {
  return (
    <HashRouter>
      {/* <Switch> */}
      <Routes>
      <Route path="/" element={<CharactersList />}/>
      <Route path="/character/" element={<CharacterDetail />}/>
      {/* <Redirect from="*" to="/"/></Switch>       */}
      </Routes>
    </HashRouter>
  )
}

export default AdaptativeRoutes