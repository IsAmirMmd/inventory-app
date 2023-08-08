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
  const [sort, setSort] = useState("1");

  useEffect(() => {
    let result = products;
    result = filterSearchTitle(result);
    result = sortDate(result);
    setFilteredProduct(result);
  }, [products, sort, search]);

  const searchHandler = ({ target }) => {
    setSearch(target.value.trim().toLowerCase());
  };

  const sortHandler = ({ target }) => {
    setSort(target.value);
  };

  const filterSearchTitle = (array) => {
    return array.filter((product) =>
      product.title.toLowerCase().includes(search)
    );
  };

  const sortDate = (array) => {
    return [...array].sort((a, b) => {
      if (sort === "1") {
        return new Date(a.date) > new Date(b.date) ? -1 : 1;
      } else if (sort === "2") {
        return new Date(a.date) > new Date(b.date) ? 1 : -1;
      }
    });
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
