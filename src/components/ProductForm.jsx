import { useState } from "react";

const ProductForm = ({ categories, products, setProducts }) => {
  const [productData, setProductData] = useState({
    title: "",
    quantity: 0,
    Category: "",
  });

  const changeHandler = ({ target }) => {
    setProductData({ ...productData, [target.name]: target.value });
  };

  let id = 0;

  const maxIdFinder = () => {
    products.map((product) => {
      return (id = product.id);
    });
    id++;
  };

  const addProductHandler = (e) => {
    e.preventDefault();

    maxIdFinder();

    setProducts([
      ...products,
      { id, ...productData, date: new Date().toISOString() },
    ]);

    setProductData({
      title: "",
      quantity: 0,
      Category: "",
    });
  };

  return (
    <div className="mb-4">
      <h2 className="text-xl text-slate-300 font-bold mb-2">
        Add new products
      </h2>

      <form className="bg-slate-700 rounded-xl flex flex-col gap-y-2 p-4">
        <div>
          <label htmlFor="title" className="block text-slate-400">
            product title
          </label>
          <input
            className="bg-transparent rounded-md p-1 border border-slate-500 outline-0 text-slate-300"
            type="text"
            id="title"
            name="title"
            value={productData.title}
            onChange={changeHandler}
          />
        </div>
        <div>
          <label htmlFor="quantity" className="block text-slate-400">
            product quantity
          </label>
          <input
            className="bg-transparent rounded-md p-1 border border-slate-500 outline-0 text-slate-300"
            type="number"
            name="quantity"
            id="quantity"
            value={productData.quantity}
            onChange={changeHandler}
          />
        </div>
        <div>
          <label htmlFor="categoryType" className="block text-slate-400">
            category
          </label>
          <select
            className="bg-transparent rounded-md p-1 border w-full border-slate-500 text-slate-300"
            id="categoryType"
            name="Category"
            onChange={changeHandler}
            value={productData.Category}
          >
            <option value="0" className="text-slate-700 bg-slate-200">
              Select New Category
            </option>
            {categories.map((Category) => {
              return (
                <option
                  key={Category.id}
                  value={Category.id}
                  className="text-slate-700 bg-slate-200"
                >
                  {Category.title}
                </option>
              );
            })}
          </select>
        </div>
        <div className="flex justify-between flex-grow gap-x-2">
          <button
            type="submit"
            id="AddToProducts"
            className="rounded-lg py-2 flex-grow bg-slate-500 text-slate-200"
            onClick={addProductHandler}
          >
            add product
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductForm;
