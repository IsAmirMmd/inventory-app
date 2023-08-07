const CategoryForm = () => {
  return (
    <>
      <div className="mb-4 hidden" id="category-container">
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
            ></textarea>
          </div>
          <div className="flex justify-between flex-grow gap-x-2">
            <button
              className="py-2 border border-slate-500 rounded-lg flex-grow text-slate-400"
              id="cancelFromAdd"
              type="reset"
            >
              cancel
            </button>
            <button
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
        className="outline-none border-0 text-slate-400"
      >
        Add new category
      </button>
    </>
  );
};

export default CategoryForm;
