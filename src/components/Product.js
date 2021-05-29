import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({product}) => {
  const { name, price, id } = product;
  return (  
    <tr>
      <td>{name}</td>
      <td><span className='font-weigth-bold'>$ {price}</span></td>
      <td className='acciones'>
        <Link to={`/products/edit/${id}`} className='btn btn-primary mr-2'>Edit</Link>
        <button type='button' className='btn btn-danger'>Delete</button>
      </td>
    </tr>
  );
}

export default Product;