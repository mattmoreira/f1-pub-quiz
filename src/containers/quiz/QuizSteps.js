import React from 'react'
import { Route } from 'react-router'

import QuizTeamStep from './QuizTeamStep'
import QuizStartStep from './QuizStartStep'
import QuizQuestionStep from './QuizQuestionStep'

const QuizSteps = () => (
  <>
    <Route path="/question/:id" component={QuizQuestionStep} />
    <Route path="/team" component={QuizTeamStep} />
    <Route exact path="/" component={QuizStartStep} />
  </>
)

export default QuizSteps
