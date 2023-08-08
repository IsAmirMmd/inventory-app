import { useEffect, useState } from "react";
import "./App.css";
import CategoryForm from "./components/CategoryForm";
import Navbar from "./components/NavBar";
import ProductForm from "./components/ProductForm";
import { Categories } from "./components/category";
import { Products } from "./components/products";
import ProductList from "./components/ProductList";
import FilterProduct from "./components/FilterProduct";

function App() {
  const [categories, setCategories] = useState(Categories);
  const [products, setProducts] = useState(Products);
  const [filteredProduct, setFilteredProduct] = useState(Products);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");

  useEffect(() => {
    setFilteredProduct(products);
  }, [products]);

  const searchHandler = ({ target }) => {
    setSearch(target.value);
    const filteredWord = target.value.toLowerCase();
    setFilteredProduct(
      products.filter((product) =>
        product.title.toLowerCase().includes(filteredWord)
      )
    );
  };

  const sortHandler = ({ target }) => {
    setSort(target.value);
    const sortedProducts = [...filteredProduct].sort((a, b) => {
      if (target.value === "1") {
        return new Date(a.date) > new Date(b.date) ? -1 : 1;
      } else if (target.value === "2") {
        return new Date(a.date) > new Date(b.date) ? 1 : -1;
      }
    });
    setFilteredProduct(sortedProducts);
  };

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
          <FilterProduct
            sort={sort}
            search={search}
            searchHandler={searchHandler}
            sortHandler={sortHandler}
          />
          <ProductList
            products={filteredProduct}
            categories={categories}
            setProducts={setProducts}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
