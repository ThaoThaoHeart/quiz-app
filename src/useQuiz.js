import { useState } from 'react'
import { useEffect } from 'react';
import { checkValue } from './helpers';

const useQuiz = (initState = []) => { 
  const [questions, setQuestions] = useState(initState)
  const [isLoading, setIsLoading] = useState(false)
  const [showScore, setShowScore] = useState(false)
  const [answers, setAnswers] = useState([])

  
  useEffect(()=> {
    let url = 'http://localhost:3001/questions'
    setIsLoading(true)
    fetch(url)
      .then(res => res.json())
      .then((result) => {
        setIsLoading(false)
        setQuestions(result)
      })
      .catch(error => {
        setIsLoading(false)
        console.log(error)
      })
  },[])

  const handleAnswerClick = e => {
    const { value, name } = e.target
    for (let i = 1; i <= questions.length; i++){
      if (name === ('question'+i)){
        setAnswers(prevState => {
          let answer = prevState.find(a => a.id === i)
          //add if value doesn't exist
          if (answer === undefined) {
            return [...prevState, {
                      id: i,
                      value: value
                    }]
          } else {
            //change value if value exist
            return prevState.map(answer => {
              if (answer.id === i){
                return {id: i, value: value}
              }
              return answer
            })
          }
        })
      }
    }
    
  }

  const onSubmit = () => {
    setShowScore(true)
  }

  const getScore = () => {
    let score = 0
    answers.forEach(a =>{
      if (checkValue(a.value)) {
        score++
      }
    })
    return score
  }

  return {
    questions,
    score: getScore(),
    showScore,
    onSubmit,
    handleAnswerClick, 
    isLoading
  }
}

export default useQuiz