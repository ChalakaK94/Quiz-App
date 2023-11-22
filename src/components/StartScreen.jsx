export default function StartScreen({questionsCount}){
    return <div className="welcome-page">
        <h2>Welcome to The Page </h2>
        <h3>Total Questions : {questionsCount}</h3>
        <div>
            <button className="btn start-btn">Let's Start</button>
        </div>
    </div>
}