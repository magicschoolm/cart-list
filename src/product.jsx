import React from 'react'
import "./product.css"

export const Product = ({product}) => {
  return (
    <div className='product'>
    <div className='img'>
        <img src={product.pic} alt={product.name} />
            </div>
            <div className="details">
        <h3>{product.name}</h3>
        <p>prise Rs:{product.amt}</p>
        <button>a\Add to Cart</button>
    </div>
    </div>
  )
}
