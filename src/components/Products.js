import React, { useEffect } from 'react';
// Redux
import { useSelector, useDispatch } from 'react-redux'
import { getProductAction } from '../actions/productActions'

const Products = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    // consult the api
    loadProducts()
  }, [])

  const loadProducts = () => dispatch( getProductAction() );

  return (  
    <>
      <h2 className='text-center my-5'>Product List</h2>

      <table className='table table-striped'>
        <thead className='bg-primary table-dark'>
          <tr>
            <th scope='col'>Name</th>
            <th scope='col'>Price</th>
            <th scope='col'>Actions</th>
          </tr>
        </thead>
        <tbody>
          
        </tbody>
      </table>
    </>
  );
}
 
export default Products;