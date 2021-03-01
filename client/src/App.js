import {useState} from 'react'
import axios from 'axios'
import './App.css'

const App = () => {
  const [usernameReg, setUsernameReg]=useState('');
  const [passwordReg, setPasswordReg]=useState('');

  const [username, setUsername]=useState('');
  const [password, setPassword]=useState('');

  const [loginStatus,setLoginStatus]=useState("")

  const register=()=>{
    setUsernameReg("")
      axios.post('http://localhost:4000/register',
      {username:usernameReg,
      password:passwordReg,
      }).then((response)=>{
          console.log(response)
      })
      
  }
  const login=()=>{
    axios.post('http://localhost:4000/login',
    {username:username,
    password:password,
    }).then((response)=>{
        if(response.data.message){
        setLoginStatus(response.data.message)
        }else{
            console.log(response)
            setLoginStatus(response.data[0].username)
        }
    })
}

    return (
        <div className="app">
            <div className="registration">
                <h1>Registration</h1>
                <label htmlFor="">Username</label>
                <input type="text" 
                onChange={(e)=>setUsernameReg(e.target.value)}
                />
                <label htmlFor="">Password</label>
                <input type="text"
                onChange={(e)=>setPasswordReg(e.target.value)}
                />
                <button
                onClick={register}
                >Register</button>
            </div>
            <div className="login">
                <h1>Login</h1>
                <input type="text" placeholder="Username..."
                onChange={(e)=>setUsername(e.target.value)}
                />
                <input type="passwod" placeholder="Password..."
                onChange={(e)=>setPassword(e.target.value)}
                />
                <button
                onClick={login}
                >Login</button>
            </div>
            <h1>{loginStatus}</h1>
        </div>
    )
}

export default App
