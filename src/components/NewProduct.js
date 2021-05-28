import React, { useState } from "react";
import { createNewProductAction } from "../actions/productActions";
import { useDispatch, useSelector } from "react-redux";

const NewProduct = () => {

  const [ name, setName ] = useState('');
  const [ price, setPrice ] = useState(0);

  // use dispatch to create a function
  const dispatch = useDispatch();
  // call the action from productActions
  const addProduct = (product) => dispatch(createNewProductAction(product));

  const submitNewProduct = (e) => {
    e.preventDefault();

    // validate form
    if(name.trim() === '' || price <= 0) return;
    // check if exist errors

    // crete the new product
    addProduct({
      name,
      price
    });
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <div className="text-center mb-4 font-weight-bold">
              Add new product
            </div>
            <form onSubmit={submitNewProduct}>
              <div className="form-group">
                <label>Product Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Product Name"
                  name="name"
                  value={name}
                  onChange={e => setName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Product Price</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Product Price"
                  name="name"
                  value={price}
                  onChange={e => setPrice( Number(e.target.value) )}
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
              >
                Add Product
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewProduct;
