import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

function Login() {

    //const [email, setEmail] = useState("")
    //const [password, setPassword] = useState("")

    const navigate = useNavigate();
    const location = useLocation();
    const[logindata,setFormdata] = useState({
        username:"",
        password:""
    })

    function handleChange(e){
        e.preventDefault();
        setFormdata({
            ...logindata,
            [e.target.name]:e.target.value
        })
    }

    const handlesubmit = (event) => {
        event.preventDefault()
        const registerdata = location.state
        console.log("login data",logindata)
        console.log("register data",registerdata)
        if(logindata.username == registerdata.name && logindata.password == registerdata.password){
            navigate("./dashboard",{
                state:logindata
            })
        }else{
            console.log("Invalid Credentials")

        }
    }

    return (
        <div>
            <h1>Login Page</h1><br></br>

            <form onSubmit={handlesubmit}>
                <input type="text" placeholder="Enter username" name="username" onChange={handleChange}/>
                <br /><br />
                <input type="password" placeholder="Enter password" name="password" onChange={handleChange} />
                <br /><br />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login