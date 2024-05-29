import React, { useContext, useState } from 'react'
import ButtonComponent from '../ButtonComponent'
import { AuthContext } from '../Authentication'
import { Navigate, useNavigate } from 'react-router-dom'

function Login() {

  let [loginData, setLoginData] = useState({ username: "", password: "" })
  let navigate = useNavigate()

  let { login } = useContext(AuthContext)

  let updateLoginData = ({ target: { value, name } }) => {
    setLoginData({ ...loginData, [name]: value })
  }

  let submitLogin = (e) => {
    e.preventDefault()
    console.log(loginData)
    if (loginData.username === "" || loginData.password === "") {
      alert("Please Fill All The Fields")
      return false
    }

    login(loginData);
    navigate("/")


  }


  return (
    <form onSubmit={submitLogin}>
      <div>
        <input type="text" placeholder='Username' name='username' onChange={updateLoginData} />
      </div>
      <div>
        <input type="password" placeholder='Password' name='password' onChange={updateLoginData} />
      </div>
      <ButtonComponent classname="update-message">Login</ButtonComponent>
    </form>
  )
}

export default Login
