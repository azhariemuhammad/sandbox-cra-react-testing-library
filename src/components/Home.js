import React, { useState } from 'react'
import useCounter from '../hooks/useCounter'
import Login from './Login'
import CreateMagic from './CreateMagic'

const Home = () => {
  const [isLogin, setIsLogin] = useState(false)
  const { count, increment, decrement } = useCounter()
  const handleSetIsLogin = val => {
    setIsLogin(val)
  }
  return (
    <div>
      {isLogin ? (
        <>
          <span>hello there! {count}</span>
          <div>
            <button onClick={() => increment()}>+</button>
            <button onClick={() => decrement()}>-</button>
          </div>
        </>
      ) : (
        <Login handleSetIsLogin={handleSetIsLogin} />
      )}
      <CreateMagic />
    </div>
  )
}

export default Home
