import { useState } from "react";
import "../css/Header.Search.css"
import { useNavigate } from "react-router";

export default function Search(){
    const navigate = useNavigate()
    const [searchParams, setSearchParams] = useState('')

    const search = () =>{
        navigate(`/search?data=${searchParams}`)
        setSearchParams('')
    }

    return(
        <div className="d-flex flex-row ">
            <input type="text" className="header-search-input" value={searchParams}
                onChange={e => setSearchParams(e.target.value)}
                onKeyUp={e => e.key === 'Enter' ?
                    search() :
                    setSearchParams(e.target.value)
            }/>
            <button className="btn btn-primary my-1 px-3 py-3 search-btn position-relative" onClick={search}>
                <img src={require("../assets/icons/header-search.png")} alt="Поиск" className="img-search position-absolute top-50 start-50 translate-middle" />
            </button>
        </div>
    )
}
