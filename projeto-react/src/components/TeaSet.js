function Cup({guest}){
    return <h2>Tea cup for guest #{guest}</h2>
}

// export default function TeaSet(){
//     return (
//         <>
//             <Cup guest={1}/>
//             <Cup guest={2}/>
//             <Cup guest={3}/>            
//         </>
//     )
// }

export default function TeaGathering(){
    let cups = []
    for (let i = 1; i <= 5; i++){
        cups.push(<Cup key={1} guest={i}/>)
    }
    return cups
}