export default function NextButton({newAnswer,dispatch}){
    if(!newAnswer) return null
    return <div style={{marginTop: '10px', textAlign: 'end'}}>
        <button className="btn start-btn" onClick={()=> dispatch({type:'next'})}>Next</button>
    </div>
}