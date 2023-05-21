export default function Todolist(){
    return(
        <>
        <h1>Hedy Lamarr's Todos</h1>
        <img src="https://i.imgur.com/yXOvdOSs.jpg" alt="Hedy Lamarr" className="photo"/>
        <ul style={{
            backgroundColor: 'black',
            color: 'pink'
        }}>
            <li>Invent new traffic lights</li>
            <li>Reharse a movie scene</li>
            <li>Improve the spectrum technology</li>
        </ul>
        </>
    )
}