import { useEffect } from "react"
import { useState } from "react"

export default function Relogio(){
    const [time, setTime] = useState(0)

    useEffect(() =>{
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString())
    },500)

    return () => clearInterval(interval)
    }, [time])
    
    return (
            <h2>Agora é {time}</h2>
    )
}