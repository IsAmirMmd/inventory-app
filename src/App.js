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
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [filteredProduct, setFilteredProduct] = useState([]);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("1");
  const [category, setCategory] = useState("0");

  useEffect(() => {
    let result = products;
    result = filterSearchTitle(result);
    result = filterCategoryType(result);
    result = sortDate(result);
    setFilteredProduct(result);
  }, [products, sort, search, category]);

  const searchHandler = ({ target }) => {
    setSearch(target.value.trim().toLowerCase());
  };

  const sortHandler = ({ target }) => {
    setSort(target.value);
  };

  const categoryHandler = ({ target }) => {
    setCategory(target.value);
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

  const filterCategoryType = (array) => {
    if (parseInt(category) === 0) return array;
    return array.filter((item) => item.Category === category);
  };

  useEffect(() => {
    const savedCategories =
      JSON.parse(localStorage.getItem("categories")) || [];
    const savedProducts = JSON.parse(localStorage.getItem("products")) || [];
    setCategories(savedCategories);
    setProducts(savedProducts);
  }, []);

  useEffect(() => {
    if (categories.length)
      localStorage.setItem("categories", JSON.stringify(categories));
  }, [categories]);
  useEffect(() => {
    if (products.length)
      localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  return (
    <div className="">
      <div className="bg-slate-800 min-h-screen">
        <Navbar products={products} />
        <div className="container mx-auto p-4 md:flex-row flex-col flex md:justify-between lg:max-w-screen-xl md:gap-x-12">
          <div className="max-w-screen-sm container mx-auto p-2">
            <CategoryForm
              setCategories={setCategories}
              categories={categories}
            />
            <ProductForm
              categories={categories}
              setProducts={setProducts}
              products={products}
            />
          </div>
          <div className="max-w-screen-sm container mx-auto p-4 overflow-x-auto">
            <FilterProduct
              sort={sort}
              search={search}
              searchHandler={searchHandler}
              sortHandler={sortHandler}
              categories={categories}
              category={category}
              categoryHandler={categoryHandler}
            />
            <h2 className="text-xl text-slate-300 font-bold mb-4 mt-2">
              your products
            </h2>
            <ProductList
              products={filteredProduct}
              categories={categories}
              setProducts={setProducts}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
