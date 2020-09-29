import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Login from '../components/Login'

describe('Login Component', () => {
  // create handleSetIsLoginMock
  // dont forget to clear all mocks

  it('should render Login form', () => {
    // render Login component
    // get email input
    // get password input
    // get submit btn
    // fireEvent to input  email with value 'azharie@mail.com'
    // fireEvent to input  password with value '12345asdf'
    // expect handleSetIsLoginMock to be called
  })

  it('entering an invalid password shows an error message', () => {
    // create window.alert mock
    // render Login component
    // get email input
    // get password input
    // get submit btn
    // fireEvent to input  email with value 'azharie@mail.com'
    // fireEvent to input  password with value '12345'
    // expect window.alert mock to be called 1 time
    // expect window.alert mock to be called with 'Wrong email or password'
  })
})
