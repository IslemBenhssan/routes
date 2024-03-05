import React from 'react'
import CarCard from '../CarCard'

const CarList = ({cars}) => {
  return (
    <div className='list'>
        {
            React.Children.toArray(
                cars.map(el=><CarCard car={el} />)
            )
        }
    </div>
  )
}

export default CarList