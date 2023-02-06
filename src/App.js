import QuestionsList from './QuestionList';
import useQuiz from './useQuiz';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './Navbar';
import Intro from './Intro';

const App = () => {

  const {questions, score, showScore, onSubmit, handleAnswerClick, isLoading} = useQuiz()
  
  if (isLoading){
    return <h1> Loading ... </h1>
  } else {
    return (
      <Router>
        <Navbar/>
          <Routes>
            <Route path='/' element={<Intro/>} />
            <Route path='/quiz' element={
              <>
                <QuestionsList questions={questions} onClick={handleAnswerClick}/>
                <button type='submit' onClick={onSubmit}>Submit</button>
                <h2>{showScore ? 'Score: ' + score + ' / ' + questions.length : ''}</h2>
              </>
            }/>
          </Routes>
      </Router>
    )
  }
}

export default App;
