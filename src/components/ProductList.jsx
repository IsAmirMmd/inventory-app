const ProductList = ({ products, categories, setProducts }) => {
  let categoryName = "";
  const categoryNameFinder = (categoryID) => {
    categories.forEach((c) => {
      if (c.id === parseInt(categoryID)) {
        categoryName = c.title;
      }
    });
    return categoryName;
  };

  const deleteProduct = (product) => {
    console.log(product);
    setProducts(products.filter((p) => p.id !== product.id));
  };

  return products.map((product) => (
    <div key={product.id} className="flex justify-between items-center mb-2">
      <span>{product.title}</span>
      <div className="flex items-center gap-x-2">
        <span className="text-slate-400">
          {new Date(product.date).toLocaleDateString("EN-us")}
        </span>
        <span className="text-slate-400">
          {categoryNameFinder(product.Category)}
        </span>
        <span className="font-sizeClassName flex justify-center items-center h-5 w-5 bg-slate-400 text-slate-800 rounded-full border-2 border-slate-700">
          {product.quantity}
        </span>
        <button
          className="text-red-500 deleted"
          data-id="{product.id}"
          onClick={() => deleteProduct(product)}
        >
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
