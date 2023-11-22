import { useEffect, useReducer } from 'react';
import './App.css';
import Main from './components/Main';
import Header from './components/header';
import Loader from './components/Loader';
import Error from './components/Error';
import StartScreen from './components/StartScreen';
import Question from './components/Question';
import NextButton from './components/NextButton';

const initalState = {
  questions:[],
  status:'loading',
  index:0,
  newAnswer: null
}

function reducer(state,action){
  switch (action.type) {
    case 'dataReceived':
      return {...state, questions: action.payload, status:'ready'}
      
    case 'dataFailed':
      return {...state, status:'error'}
    
    case 'start':
      return { ...state, status: 'active' };
    
    case 'newAnswer':
      return {...state, newAnswer: action.payload}

    case 'next':
      return { ...state, index: state.index+1, newAnswer:null}
    
  }
}
function App() {

   const [{status, questions, index, newAnswer}, dispatch ] = useReducer(reducer, initalState)

   const questionsCount = questions.length

  useEffect(() => {
    fetch('http://localhost:9000/questions')
    .then(res => res.json())
    .then(data=>dispatch({type:'dataReceived', payload:data }))
    .catch(err=> dispatch({type:'dataFailed'}))
  }, []);

  return (
    <div className="App">
      <div className='container'>
          <Header/> 
          <Main> 
            {status === 'loading' && <Loader/>}
            {status === 'error' && <Error/>}
            {status === 'ready' && <StartScreen questionsCount={questionsCount} dispatch={dispatch}/>}
            {status === 'active' && 
             <> <Question question={questions[index]} dispatch={dispatch} newAnswer={newAnswer}/> 
                <NextButton newAnswer={newAnswer} dispatch={dispatch}/>
             </>}
          </Main>
      </div>
    </div>
  );
}

export default App;
