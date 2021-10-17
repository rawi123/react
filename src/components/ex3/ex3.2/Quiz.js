import Q1 from "./Q1"
import Q2 from "./Q2";
import QuiztTitle from "./QuizTitle";

const Quiz=()=>{
    return (
        <div style={{border:'1px solid black' ,display:"inline-block", padding:"1rem"}}>
            <QuiztTitle/>
            <Q1/>
            <Q2/>
        </div>
    )
}


export default Quiz;