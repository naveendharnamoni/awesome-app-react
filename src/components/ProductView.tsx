import React from "react";
import type { Product } from "../models/Product";

type ProductViewProps = {
  product: Product;
};

const ProductView: React.FC<ProductViewProps> = React.memo(({ product }) => {
    console.log("rendering product", product.id);
    
  return (
    <div className="product" key={product.id}>
      <p>Id: {product.id}</p>
      <p>Name: {product.name}</p>
      <p>Description: {product.description}</p>
      <p>Price: {product.price}</p>
      <p>Image: {product.imageUrl}</p>
      {/* <div>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => handleDelete(product)}
        >
          delete
        </button>
        <button
          type="button"
          className="btn btn-info"
          onClick={() => navigate("/products/" + product.id)}
        >
          Edit
        </button>
      </div> */}
    </div>
  );
});

export default ProductView;
