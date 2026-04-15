import { useEffect, useState, type ChangeEvent, type MouseEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Product } from "../models/Product";
import axios from "axios";

function EditProduct() {
  let params = useParams();
  let url = "http://localhost:9000/products/";
  const id = Number(params.id);
  const [product, setProduct] = useState<Product>(new Product(id));

  useEffect(() =>{
    getProduct(id);
  },[])

  let navigate = useNavigate();

  async function getProduct(id: Number) {
    try {
      let response = await axios.get<Product>(url + id);
      let productCopy = {...response.data}
      setProduct(productCopy);

      console.log(response.data);
    } catch (error) {
      alert("error while getting product");
    }
  }
  async function saveProduct(e: MouseEvent<HTMLButtonElement>){
    try {
        e.preventDefault();
        let response = await axios.put<Product>(url + id, product);
        navigate("/products");
    } catch (error) {
        alert("error while updating");
    }
  }
  function handleNameChange(e: ChangeEvent<HTMLInputElement>){
    product.name = e.target.value;
    let productCopy = {...product}
    setProduct(productCopy);
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>){
    product[e.target.name] = e.target.value;
    console.log(e.target.name);
    let productCopy = {...product}
    setProduct(productCopy);
  }

  function handleCancel(){
    navigate(-1);
  }

  return (
    <div>
      <h3>Edit Product: {id}</h3>
      <form>
        <div className="form-group mb-3">
          <span className="form-group-text">Name</span>
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="name"
            aria-label="name"
            value={product.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <span className="form-group-text">Description</span>
          <input
            type="text"
            name="description"
            className="form-control"
            placeholder="description"
            aria-label="description"
            value={product.description}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <span className="form-group-text">Price</span>
          <input
            type="number"
            name="price"
            className="form-control"
            placeholder="price"
            aria-label="price"
            value={product.price}
            onChange={handleChange}
          />
        </div>
        <br />
        <button type="submit" className="btn btn-success" onClick={saveProduct}>
          Save
        </button>
        <button
                  type="button"
                  className="btn btn-info"
                  onClick={handleCancel}
                >
                  Cancel
                </button>
      </form>
    </div>
  );
}

export default EditProduct;
