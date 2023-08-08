const ProductList = ({ products, categories }) => {
  let categoryName = "";
  const categoryNameFinder = (categoryID) => {
    categories.forEach((c) => {
      if (c.id === categoryID) {
        categoryName = c.title;
      }
    });
  };

  return products.map((product) => (
    <div className="flex justify-between items-center mb-2">
      <span>{product.title}</span>
      <div className="flex items-center gap-x-2">
        <span className="text-slate-400">
          {new Date(product.date).toLocaleDateString("EN-us")}
        </span>
        <span className="text-slate-400">{categoryNameFinder(product.id)}</span>
        <span className="font-sizeClassName flex justify-center items-center h-5 w-5 bg-slate-400 text-slate-800 rounded-full border-2 border-slate-700">
          {product.quantity}
        </span>
        <button className="text-red-500 deleted" data-id="{product.id}">
          delete
        </button>
        <button className="text-slate-500 edited" data-id="{product.id}">
          edit
        </button>
      </div>
    </div>
  ));
};

export default ProductList;
