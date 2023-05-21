import BucketList from "./components/BucketList";
import CounterList from "./components/CounterList";
import Galeria from "./components/Sculpute";
import List from "./components/List";
import List2 from "./components/List2";
import List3 from "./components/List3";
import List4 from "./components/List4";
import ShapeEditor from "./components/ShapeEditor";
import Toolbar from "./components/Toolbar"
import Counter from "./components/Counter";
import Form from "./components/Form";
import Form2 from "./components/Form2";
import Form3 from "./components/Form3";


export default function Atv04(){
    return(
        <div className="content">
            <h1>Atividade 4</h1>
                <Toolbar/>
                <br />
                <Galeria/>
                <br />
                <Counter/>
                <br />
                <Form/>
                <br />
                <Form2/>
                <br />
                <Form3 />
                <br />
                <List/>
                <br />
                <List2/>
                <br />
                <ShapeEditor/>
                <br />
                <CounterList/>
                <br />
                <List3/>
                <br />
                <List4/>
                <BucketList/>
                {/*                 MovingDot
                Form2
                Form3 */}
            <br/>
        </div>
    )
}