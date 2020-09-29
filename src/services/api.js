// this is just a fake module to simulate interacting with a server\

// simulate the network request time...
const sleep = time =>
  new Promise(resolve => {
    setTimeout(resolve, time)
  })

const spells = [
  'Riddikulus',
  'Wingardium Leviosa',
  'Sectumsempra',
  'Avada Kedavra',
  'Expelliarmus',
  'Accio',
  'Expecto Patronum'
]

async function loadSpells() {
  return { data: { spells: `${await fetchRandomSpells()}` } }
}
async function fetchRandomSpells() {
  await sleep(1000)
  return spells[Math.floor(Math.random() * spells.length)]
}

export { sleep, loadSpells, fetchRandomSpells }
