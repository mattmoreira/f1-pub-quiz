import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import QuizRoutes from 'containers/quiz/QuizRoutes'

const Routes = () => (
  <Router>
    <Switch>
      <Route path="/" component={QuizRoutes} />
    </Switch>
  </Router>
)

export default Routes
