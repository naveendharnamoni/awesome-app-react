import { useEffect, useState } from "react";
import type { Product } from "../models/Product";
import { useSelector } from "react-redux";
import type { AppState } from "../redux/store";
import axios from "axios";

export function useProducts(url: string) {
  const [products, setProducts] = useState<Product[]>([]);
  const authState = useSelector((state: AppState) => state.auth);

  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    try {
      const headers = { Authorization: `Bearer ${authState.accessToken}` };
      let response = await axios.get<Product[]>(url, { headers: headers });
      setProducts(response.data);
      console.log(products);
    } catch (error) {
      console.log(error);
    }
  }

  return{products, setProducts};
}
