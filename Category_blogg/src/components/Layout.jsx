import { Link } from "react-router-dom";
import {useEffect, useState} from "react"

export default function Layout({children}){
    const [user, setUser] = useState(()=>{
        const saved = localStorage.getItem("username")
        return saved || ""
    })


    const handleClick = ()=>{
        setUser(localStorage.setItem("username", "eriktheman"))
    }
    /*useEffect(()=> {
        setUser(localStorage.getItem("username"))
    },[])*/
    return(
        <>
        <header>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="characters">Characters</Link></li>
                </ul>
              
                {user?.length === 0 ? <button onClick={handleClick}>Bombaclaat</button> : <p>{user}</p>}
                <p>{user}</p>
            </nav>
        </header>
        <main>
        {children}
        </main>
        <footer>Footer</footer>
        </>
    )
}