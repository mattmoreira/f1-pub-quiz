import React from 'react'
import { Route } from 'react-router'

import QuizTeamStep from './QuizTeamStep'
import QuizStartStep from './QuizStartStep'

const QuizSteps = () => (
  <>
    <Route path="/team" component={QuizTeamStep} />
    <Route exact path="/" component={QuizStartStep} />
  </>
)

export default QuizSteps
