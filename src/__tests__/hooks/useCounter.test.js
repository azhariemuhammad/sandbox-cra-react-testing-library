import React from 'react'
import useCounter from '../../hooks/useCounter'
import { render, act } from '@testing-library/react'

describe('render hooks', () => {
  it('should render custom hooks useCounter', () => {
    let result
    function TestComponent() {
      result = useCounter()
      return <></>
    }

    render(<TestComponent />)
    expect(result.count).toBe(0)
    act(() => result.increment())
    expect(result.count).toBe(1)
    act(() => result.decrement())
    expect(result.count).toBe(0)
  })
})
