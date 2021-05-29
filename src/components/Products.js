import React, { useEffect } from "react";
import Product from "../components/Product";
// Redux
import { useSelector, useDispatch } from "react-redux";
import { getProductAction } from "../actions/productActions";

const Products = () => {
  const dispatch = useDispatch();
  // get state
  const products = useSelector((state) => state.products.products);
  const error = useSelector((state) => state.products.error);
  const loading = useSelector((state) => state.products.loading);

  useEffect(() => {
    // consult the api
    loadProducts();
  }, []);

  const loadProducts = () => dispatch(getProductAction());

  return (
    <>
      <h2 className="text-center my-5">Product List</h2>
      {error ? (
        <p className="font-weight-bold alert alert-danger text-center mt-4">
          There was an error
        </p>
      ) : null}
      {loading ? <p className="text-center">Loading...</p> : null}
      <table className="table table-striped">
        <thead className="bg-primary table-dark">
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.length === 0
            ? "There are no products"
            : products.map((product) => (
                <Product key={product.id} product={product} />
              ))}
        </tbody>
      </table>
    </>
  );
};

export default Products;
