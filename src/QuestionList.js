import React from 'react'
import Question from './Question'

const QuestionsList = ({ questions, onClick }) => {
    return (
      <div>
        {questions.map(question => {
            return <Question question={question} key={question.id} onClick={onClick}/>
        })}
      </div>
    )
}

export default QuestionsList

