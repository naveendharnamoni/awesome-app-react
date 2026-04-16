import axios from "axios";
import { useEffect, useState } from "react";
import type { Product } from "../models/Product";
import "./ListProducts.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import type { AppState } from "../redux/store";
import { useTitle } from "../hooks/useTitle";
import { useProducts } from "../hooks/useProducts";
import ProductView from "../components/ProductView";

function ListProductsPage() {
  let url = "http://localhost:9000/secure_products";
  const [isMessageVisible, setVisible] = useState(true)
  const navigate = useNavigate();
  useTitle("Products");
  const { products, setProducts } = useProducts(url);

  async function handleDelete(product: Product) {
    try {
      const deleteUrl = url + "/" + product.id;
      await axios.delete(deleteUrl);
      const copy = [...products];
      const index = copy.findIndex((p) => p.id == product.id);
      copy.splice(index, 1);
      setProducts(copy);
    } catch (error) {
      console.log(error);
      alert("Failed to delete");
    }
  }

  return (
    <div>
      <h3>List Products</h3>
      {isMessageVisible ? <div className="alert alert-info">Demo for list products</div> : null}
      <br />
      <button className="btn btn-info" onClick={() => setVisible(!isMessageVisible)}>{isMessageVisible ? "Hide" : "Show"}</button>
      <div style={{ display: "flex", flexFlow: "row wrap" }}>
        {products.map((product) => {
          return (
            <ProductView key={product.id} product={product}></ProductView>
            // <div className="product" key={product.id}>
            //   <p>Id: {product.id}</p>
            //   <p>Name: {product.name}</p>
            //   <p>Description: {product.description}</p>
            //   <p>Price: {product.price}</p>
            //   <p>Image: {product.imageUrl}</p>
            //   <div>
            //     <button
            //       type="button"
            //       className="btn btn-danger"
            //       onClick={() => handleDelete(product)}
            //     >
            //       delete
            //     </button>
            //     <button
            //       type="button"
            //       className="btn btn-info"
            //       onClick={() => navigate("/products/" + product.id)}
            //     >
            //       Edit
            //     </button>
            //   </div>
            // </div>
          );
        })}
      </div>
    </div>
  );
}

export default ListProductsPage;
