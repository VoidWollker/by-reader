import { useState, useEffect } from 'react'
import "../css/Loading.css"


export const Loading = () =>{
    const [loadString, setLoadString] = useState('Загрузка.')

    useEffect(() =>{
        setTimeout(() =>{
            if (loadString === 'Загрузка' || loadString.match(/\./g).length < 3){
                setLoadString(loadString => loadString + '.')
            } else {
                setLoadString('Загрузка')
            }
        }, 500)
    }, [loadString])

    return(
        <div className='d-flex flex-row align-self-center py-5 loading'>
                    <img src={require("../assets/icons/loading.png")} alt="" className="foto-loading me-2" />
                    <p>{loadString}</p>
        </div>

    )
}