
import male from './male.svg'

function Homem({counter}){
    const[count, setCount] = counter    

    function handleClick(){
        setCount(count + 1)
    }

    function diminuir(){
        setCount(count - 1)
    }

    return (
        <div className="Grid-menor">
            <object data={male} width="200" height="200" >
            </object>
            <h3>{count}</h3>
            <button className='Mais' onClick={handleClick}>
                +
            </button>
            <button className="Menos" onClick={diminuir}>
                -
            </button>           
        </div>
    )
}

export default Homem