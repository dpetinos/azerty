import React from 'react'
import { Switch, Route } from 'react-router-dom'
import TableComponent from './TableComponent'
import Card from './Card'

// The Main component renders one of the three provided
// Routes (provided that one matches). The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={TableComponent} />
      <Route path='/card/:index' component={Card} />
    </Switch>
  </main>
)

export default Main