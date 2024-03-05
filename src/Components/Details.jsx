import React from 'react'
import { useParams } from 'react-router-dom'

const Details = ({cars}) => {
    // console.log(cars)
    const {id}=useParams()
    console.log(id)
    const karhba=cars.find(el=>el.id==id)
  return (
    <div>
        <img src={karhba.pic} alt="" />
    </div>
  )
}

export default Details