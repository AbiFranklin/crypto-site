import RouletteWheel from './RouletteWheel'
import PreviousRolls from './PreviousRolls'
import PlaceBets from './PlaceBets'

const Roulette = () => {
  return (
    <div className='w-full md:w-2/3 my-0 mx-auto'>
      <PreviousRolls />
      <RouletteWheel />
      <PlaceBets />
    </div>
  )
}

export default Roulette
