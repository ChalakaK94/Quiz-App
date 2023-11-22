export default function Progress({questionsCount, index, points,maxPoints}){
    return <div>
        <progress max={questionsCount} value={index+1} style={{width:'100%'}}/>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <strong> Question :{index+1}/{questionsCount}</strong>
            <strong> Points : :{points}/ {maxPoints}</strong>

        </div>
    </div>
}