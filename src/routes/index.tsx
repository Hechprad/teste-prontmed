import React from 'react'
import { Switch, Route, RouteProps } from 'react-router-dom'

import Home from 'pages/Home'

const Routes: React.FC<RouteProps> = ({ ...props }) => (
  <Switch {...props}>
    <Route path="/" exact component={Home} />
  </Switch>
)

export default Routes
