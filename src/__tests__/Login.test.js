import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Login from '../components/Login'

describe('Login Component', () => {
  const handleSetIsLoginMock = jest.fn()
  afterEach(() => {
    jest.clearAllMocks()
  })
  it('should render Login form', async () => {
    const { container, getByLabelText, findByText } = render(
      <Login handleSetIsLogin={handleSetIsLoginMock} />
    )

    expect(container).toBeInTheDocument()
    const email = getByLabelText(/Email/i)
    const password = getByLabelText(/Password/i)
    const submitBtn = await findByText('Login')
    expect(email).toBeInTheDocument()
    expect(password).toBeInTheDocument()

    fireEvent.change(email, { target: { value: 'azharie@mail.com' } })
    fireEvent.change(password, { target: { value: '12345asdf' } })
    fireEvent.click(submitBtn)
    expect(handleSetIsLoginMock).toHaveBeenCalled()
  })

  it('entering an invalid password shows an error message', async () => {
    window.alert = jest.fn()
    const { container, getByLabelText, findByText, debug } = render(
      <Login handleSetIsLogin={handleSetIsLoginMock} />
    )
    const email = getByLabelText(/Email/i)
    const password = getByLabelText(/Password/i)
    const submitBtn = await findByText('Login')
    expect(email).toBeInTheDocument()
    expect(password).toBeInTheDocument()

    fireEvent.change(email, { target: { value: 'azharie@mail.com' } })
    fireEvent.change(password, { target: { value: '12345' } })
    fireEvent.click(submitBtn)
    expect(window.alert).toHaveBeenCalledTimes(1)
    debug()
    expect(window.alert).toHaveBeenCalledWith('Wrong email or password')
  })
})
