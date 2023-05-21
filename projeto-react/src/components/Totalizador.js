import { useState } from "react"
import Contador from "./Contador"
import Homem from "./Homem"

function Totalizador(){  
    const[count1, setCount1] = useState(0)
    const[count2, setCount2] = useState(0)
    
    function Total(){
        return count1 + count2;
    }

    function Reset(){
        setCount1(0)
        setCount2(0)
    }


    return (
        <>       
        <div className="Soma">
            <h4>Total: {Total()}</h4>
            <button onClick={Reset} className="reset">Reset</button>        
        </div>
            <Contador counter={[count1,setCount1]}/>
            <Homem counter={[count2,setCount2]}/>
        </>
    )
}

export default Totalizador