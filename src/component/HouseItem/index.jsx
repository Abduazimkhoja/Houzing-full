import React from 'react'
import { useParams } from 'react-router-dom'

const HouseItem = () => {
   const params = useParams()
   console.log(params);
  return (
    <div>HouseItem</div>
  )
}

export default HouseItem