import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import QuizSteps from 'containers/quiz/QuizSteps'

const Routes = () => (
  <Router>
    <Switch>
      <Route path="/" component={QuizSteps} />
    </Switch>
  </Router>
)

export default Routes
