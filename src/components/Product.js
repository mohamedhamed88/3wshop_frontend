import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import Rating from './Rating'

const Product = ({ product }) => {
  console.log(product)
  return (
     <Card className='my-3 p-3 shadow-lg shadow-primary bg-transparent rounded'>
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant='top' />
      </Link>
      <hr className="bg-danger"></hr>
      <Card.Body className='p-1'>
        <Link to={`/product/${product._id}`}>
          <Card.Title as='div' className="text-white">
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as='div' className="text-white">
          <Rating 
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text>

        <Card.Text as='h3' className="text-white">${product.price}</Card.Text>
        <Link to={`/product/${product._id}`}  className="btn-gradient mr-2">
          More details...
      </Link>
      </Card.Body>
    </Card>
  )
}

export default Product
