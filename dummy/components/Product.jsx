import React from 'react'

export default function Product({name, price}) {
  return (
    <div>
      <h1>Name is : {name}</h1>
      <p>The price is : { price}</p>
    </div>
  )
}
