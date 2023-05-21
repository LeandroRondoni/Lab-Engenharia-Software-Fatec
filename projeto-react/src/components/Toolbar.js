function Button({ onClick, children}){
    return(
        <button onClick={e => {
            e.stopPropagation()
            onClick()
        }}>
            {children}
        </button>
    )
}

// function PlayButton({ movieName }){
//     function handlePlayClick(){
//         alert(`Playing ${movieName}`)
//     }

//     return (
//         <Button onClick={handlePlayClick}>
//             Play "{movieName}"
//         </Button>
//     )
// }

// function UploadButton(){
//     return (
//         <Button onClick={() => alert('Uploading!')}>
//             Upload Image
//         </Button>
//     )
// }

// function AlertButton({ message, children }){
//     return (
//         <button onClick={() => alert(message)}>
//             {children}
//         </button>
//     )
// }

export default function Toolbar(){
    return (
        <div className="Tollbar" onClick={() => {
            alert('You clicked on the tollbar!')
        }}>
            <Button onClick={() => alert('Playing!')}>
                Play Movie
            </Button>
            <Button onClick={() => alert('Uploading!')}>
                Upload Image
            </Button>
    
        </div>
    )
}