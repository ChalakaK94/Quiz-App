import { useEffect, useReducer } from 'react';
import './App.css';
import Main from './components/Main';
import Header from './components/header';
import Loader from './components/Loader';

const initalState = {
  questions:[],
  status:'loading'
}

function reducer(state,action){
  switch (action.type) {
    case 'dataReceived':
      return {...state, questions: action.payload, status:'ready'}
      
    case 'dataFailed':
      return {...state, status:'error'}
  }
}
function App() {

   const [{status, questions}, dispatch ] = useReducer(reducer, initalState)

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
          </Main>
      </div>
    </div>
  );
}

export default App;
