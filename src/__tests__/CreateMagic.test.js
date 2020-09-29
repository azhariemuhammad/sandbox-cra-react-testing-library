import React from 'react'
import { render, fireEvent, wait } from '@testing-library/react'
import { loadSpells as mockLoadSpells } from '../services/api'
import CreateMagic from '../components/CreateMagic'

jest.mock('../services/api')

describe('test async component', () => {
  it('should get spells data', async () => {
    const testSpells = 'Expecto Patronum'
    mockLoadSpells.mockResolvedValueOnce({ data: { spells: testSpells } })
    const { getByLabelText, findByText } = render(<CreateMagic />)
    const loadButton = await findByText('Load Magic')

    fireEvent.click(loadButton)
    expect(mockLoadSpells).toHaveBeenCalledTimes(1)

    await wait(() => {
      expect(getByLabelText(/magic/i)).toHaveTextContent(testSpells)
    })
  })
})
