import Options from "./Options";


export default function Question({question}){
    return <div>
        <h2>{question.question}</h2>
        <Options options={question.options}/>
    </div>
}