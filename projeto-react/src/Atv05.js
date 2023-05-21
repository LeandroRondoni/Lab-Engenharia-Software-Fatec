import Accordion from "./components/Accordion";
import FormQuiz from "./components/FormQuiz";
import FormTicket from "./components/FormTicket";
import Messenger from "./components/Messenger";

export default function Atv05(){
    return(
        <div className="content">
            <h1>Atividade 5</h1>
            <br/>
            <FormQuiz/>
            <FormTicket/>
            <br/>
            <Accordion/>
            <br/>
            <Messenger/>
            <br/>            
        </div>
    )
}