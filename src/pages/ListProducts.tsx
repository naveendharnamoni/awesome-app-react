import axios from "axios";
import { useEffect, useState } from "react";
import type { Product } from "../models/Product";
import "./ListProducts.css";
import { useNavigate } from "react-router-dom";

function ListProductsPage() {
  let url = "http://localhost:9000/products";
  const [products, setProducts] = useState<Product[]>([]);
  let navigate = useNavigate();
  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    try {
      let response = await axios.get<Product[]>(url);
      setProducts(response.data);
      console.log(products);
    } catch (error) {
      console.log(error);
    }
  }

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
      <div style={{ display: "flex", flexFlow: "row wrap" }}>
        {products.map((product) => {
          return (
            <div className="product" key={product.id}>
              <p>Id: {product.id}</p>
              <p>Name: {product.name}</p>
              <p>Description: {product.description}</p>
              <p>Price: {product.price}</p>
              <p>Image: {product.imageUrl}</p>
              <div>
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
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ListProductsPage;
