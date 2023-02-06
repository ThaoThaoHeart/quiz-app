const Question = ({ question, onClick }) => {

  return (
    <div>
        <h2>Question {question.id}</h2>
        <h3>{question.question}</h3>
        <div className='answerWrapper'>
        {question.choices.map(choice => {
          return ( //another component?
            <label key={choice.answerText}>
              <input 
              type='radio' 
              value={choice.isCorrect} 
              name={'question' + question.id}
              onChange={onClick} />
              {choice.answerText}
            </label>
            )
        })}
        </div>
    </div>
  )
}

export default Question
