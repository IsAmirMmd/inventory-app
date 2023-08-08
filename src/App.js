import { useState } from "react";
import "./App.css";
import CategoryForm from "./components/CategoryForm";
import Navbar from "./components/NavBar";
import ProductForm from "./components/ProductForm";
import { Categories } from "./components/category";
import { Products } from "./components/products";
import ProductList from "./components/ProductList";

function App() {
  const [categories, setCategories] = useState(Categories);
  const [products, setProducts] = useState(Products);

  return (
    <div className="">
      <div className="bg-slate-800 min-h-screen">
        <Navbar products={products} />
        <div className="max-w-screen-sm container mx-auto p-2">
          <CategoryForm setCategories={setCategories} categories={categories} />
          <ProductForm
            categories={categories}
            setProducts={setProducts}
            products={products}
          />
        </div>
        <div className="max-w-screen-sm container mx-auto p-4">
          <h2 className="text-xl text-slate-300 font-bold mb-2">
            your products
          </h2>
          <ProductList
            products={products}
            categories={categories}
            setProducts={setProducts}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
