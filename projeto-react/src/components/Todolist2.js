// const today = new Date()

// function formatDate(date){
//     return new Intl.DateTimeFormat(
//         'en-US',
//         {weekday: 'long'}
//     ).format(date)
// }

const person = {
    name: 'Gregorio Y. Zara',
    theme: {
        backgroundColor: 'black',
        color: 'pink',
        padding: 5,
    }
    
}

export default function Todolist2() {
    // const name = 'Gregorio Y. Zara'
    return (
        // <h1>{name}'s To Do List</h1>
        // <h1>To Do list for {formatDate(today)}</h1>
        <div style={person.theme}>
            <h1>{person.name}'s Todos</h1>
            <br/>            
            <img 
            src="https://i.imgur.com/7vQD0fPs.jpg"
            className="avatar"
            alt="Gregorio Y. Zara"/>
            
            <ul>
                <li>Improve the videophone</li>
                <li>Prepare aeronautics lectures</li>
                <li>Work on the alcohol-fuelled engine</li>
            </ul>

        </div>

    );
  }