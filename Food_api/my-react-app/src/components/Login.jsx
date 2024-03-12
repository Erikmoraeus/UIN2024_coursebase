import { useState } from "react"

export default function Login({setLogedIn, users, logedIn}){

    const [user, setUser] = useState({
        username: "",
        password: ""
    })

    const handleSubmit = (event)=> {
        event.preventDefault()
    }

    const handleChange = (e) => {
        const inputName = e.target.name
        const inputValue = e.target.value
        setUser((prev) => ({...prev, [inputName]: inputValue}))
    }
    const handleClick = () => {
        const found = users.find(element => element.username === user.username && element.password === user.password)
        if(found) {
            setLogedIn(true)
            localStorage.setItem("logedIn", true)
        }
    }

    console.log("User:", user)

    return (
    <>
    <h1>Logg inn...</h1>
    <form className="login" onSubmit={handleSubmit}>
        <label htmlFor="username">Brukernavn</label>
        <input type="text" id="username" name="username" onChange={handleChange} placeholder="eriktheman"/>
        <label htmlFor="password">Passord</label>
        <input type="password" id="password" name="password" onChange={handleChange} placeholder="ooo...hemmelig"/>
        <button type="submit" onClick={handleClick}  >Logg inn</button>
    </form>
    </>
    )
}