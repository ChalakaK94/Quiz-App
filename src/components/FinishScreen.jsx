export default function FinishScreen({maxPoints, points,dispatch}){
    return <>
    <div className="finish">Scored {points} out of {maxPoints}</div>
        <div style={{marginTop: '10px', textAlign:'end'}}>
            <button className="btn start-btn" onClick={()=> dispatch({type:'restart'})}>Restart Quiz</button>
        </div>
    </>
}