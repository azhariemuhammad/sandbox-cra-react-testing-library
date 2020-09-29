import React, { useState } from 'react'
import { loadSpells } from '../services/api'

function CreateMagic() {
  const [magic, setMagic] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  async function loadMagicForInput(e) {
    e.preventDefault()
    setIsLoading(true)
    const { data } = await loadSpells()
    setMagic(data.spells)
    setIsLoading(false)
  }
  return (
    <form onSubmit={loadMagicForInput}>
      <div>
        <button type="submit">
          {!isLoading ? 'Load Magic' : 'loading...'}
        </button>
      </div>
      <div aria-label="magic">{magic}</div>
    </form>
  )
}

export default CreateMagic
