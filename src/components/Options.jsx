export default function Options({question,dispatch, newAnswer}){

    const correctAnswer =  question.correctAnswer;

    const hasAnswer = newAnswer !== null

    return <div>
        {question.options.map((option)=> <div key={option}><button className={`btn btn-option ${hasAnswer ?  (correctAnswer === option ? 'correct':
         newAnswer === option ? 'wrong': '' ): '' }`}
        onClick={()=> dispatch({type:'newAnswer', payload:option})} >{option}</button>
        </div>)}
    </div>
}