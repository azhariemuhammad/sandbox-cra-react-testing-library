import React, { useState } from 'react'
import './styles.css'

const fakeUser = {
  name: 'azharie',
  email: 'azharie@mail.com',
  password: '12345asdf'
}
const Login = ({ handleSetIsLogin }) => {
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const handleSetEmail = event => {
    const { value } = event.target || {}
    setEmail(value)
  }

  const handleSetPass = event => {
    const { value } = event.target || {}
    setPass(value)
  }

  const handleSubmit = e => {
    e.preventDefault()

    if (email === fakeUser.email && pass === fakeUser.password) {
      return handleSetIsLogin(true)
    }
    alert('Wrong email or password')
  }

  return (
    <form onSubmit={handleSubmit} className="loginForm">
      <label htmlFor="input-email">Email</label>
      <input
        type="email"
        id="input-email"
        value={email}
        onChange={handleSetEmail}
      />
      <label htmlFor="input-password">Password</label>
      <input
        type="password"
        id="input-password"
        value={pass}
        onChange={handleSetPass}
      />
      <input type="submit" value="Login" />
    </form>
  )
}

export default Login
