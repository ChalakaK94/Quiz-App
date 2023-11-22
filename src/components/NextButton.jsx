export default function NextButton({newAnswer,dispatch,index, questionsCount}){
    if(!newAnswer) return null;

    if(index + 1 < questionsCount){
        return <div style={{marginTop: '10px', textAlign: 'end'}}>
        <button className="btn start-btn" onClick={()=> dispatch({type:'next'})}>Next</button>
    </div>
    }

    if(index+1 === questionsCount){
        return <div style={{marginTop: '10px', textAlign: 'end'}}>
        <button className="btn start-btn" onClick={()=> dispatch({type:'finish'})}>Finish</button>
    </div>
    }
   
}