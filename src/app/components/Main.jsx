import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import Home from './Home'
import TableComponent from './TableComponent'
import Card from './Card'

// The Main component renders one of the three provided
// Routes (provided that one matches). The / route will only match
// when the pathname is exactly the string "/"

const routes = [
	{
		path: '/',
		exact: true,
		breadcrumb: () => <h2>Home</h2>,
	},
	{
		path: '/list',
		breadcrumb: () => <h2>Robot List</h2>,
	},
	{
		path: '/robot',
		breadcrumb: () => <h2>Robot Details</h2>,
	},
]

const Main = () => (
  <main>

  	<ul>
	  	<li><Link to='/'>Home</Link></li>
	  	<li><Link to='/list'>List</Link></li>
	  	<li><Link to='/robot'>Robot Details</Link></li>
  	</ul>
  	<div style={{flex: 1, padding: '10px'}}>
  		{routes.map((route) => (
  			<Route
  				key={route.path}
  				path={route.path}
  				exact={route.exact}
  				component={route.breadcrumb}
  			/>
  		))}
  	</div>

    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/list' component={TableComponent} />
      <Route path='/robot/:rid' component={Card} />
    </Switch>

  </main>
)

export default Main