import { useState } from "react";
import { Categories } from "./category";

const CategoryForm = () => {
  const [isShow, setIsShow] = useState(false);
  const [categoryData, setCategoryData] = useState({
    title: "",
    description: "",
  });

  const changeHandler = ({ target }) => {
    setCategoryData({ ...categoryData, [target.name]: target.value });
  };

  const addToCategory = (e) => {
    e.preventDefault();
    Categories.push({ ...categoryData, date: new Date().toISOString() });
    console.log(Categories);
    setCategoryData({
      title: "",
      description: "",
    });
    setIsShow(false);
  };

  return (
    <>
      <div className={`mb-4 ${isShow ? "" : "hidden"}`} id="category-container">
        <h2 className="text-xl text-slate-300 font-bold mb-2">
          Add new category
        </h2>
        <form className="bg-slate-700 rounded-xl flex flex-col gap-y-4 p-4">
          <div>
            <label htmlFor="title" className="block text-slate-400">
              category title
            </label>
            <input
              className="bg-transparent rounded-md p-1 border border-slate-500 outline-0 text-slate-300"
              type="text"
              id="title"
              name="title"
              value={categoryData.title}
              onChange={changeHandler}
            />
          </div>
          <div>
            <label className="block text-slate-400" htmlFor="description">
              description
            </label>
            <textarea
              className="bg-transparent rounded-md p-1 border border-slate-500 outline-0 text-slate-300 w-full"
              type="text"
              id="description"
              name="description"
              value={categoryData.description}
              onChange={changeHandler}
            ></textarea>
          </div>
          <div className="flex justify-between flex-grow gap-x-2">
            <button
              className="py-2 border border-slate-500 rounded-lg flex-grow text-slate-400"
              id="cancelFromAdd"
              type="reset"
              onClick={(e) => {
                e.preventDefault();
                setIsShow(!isShow);
              }}
            >
              cancel
            </button>
            <button
              onClick={(e) => addToCategory(e)}
              id="addToCategory"
              className="rounded-lg py-2 flex-grow bg-slate-500 text-slate-200"
            >
              add
            </button>
          </div>
        </form>
      </div>
      <button
        id="toggle-category"
        className={`outline-none border-0 text-slate-400 ${isShow && "hidden"}`}
        onClick={() => setIsShow(!isShow)}
      >
        Add new category
      </button>
    </>
  );
};

export default CategoryForm;
