import { Categories } from "./category";

const ProductForm = () => {
  return (
    <div className="mb-4">
      <h2 className="text-xl text-slate-300 font-bold mb-2">
        Add new products
      </h2>

      <form className="bg-slate-700 rounded-xl flex flex-col gap-y-2 p-4">
        <div>
          <label htmlFor="ptitle" className="block text-slate-400">
            product title
          </label>
          <input
            className="bg-transparent rounded-md p-1 border border-slate-500 outline-0 text-slate-300"
            type="text"
            id="ptitle"
            name="ptitle"
          />
        </div>
        <div>
          <label htmlFor="pquan" className="block text-slate-400">
            product quantity
          </label>
          <input
            className="bg-transparent rounded-md p-1 border border-slate-500 outline-0 text-slate-300"
            type="number"
            name="pquan"
            id="pquan"
          />
        </div>
        <div>
          <label htmlFor="categoryType" className="block text-slate-400">
            category
          </label>
          <select
            className="bg-transparent rounded-md p-1 border w-full border-slate-500 text-slate-300"
            id="categoryType"
          >
            <option value="0" className="text-slate-700 bg-slate-200">
              Select New Category
            </option>
            {Categories.map((Category) => {
              return (
                <option
                  value={Category.id}
                  key={Category.id}
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
          >
            add product
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductForm;
