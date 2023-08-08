const Navbar = ({ products }) => {
  return (
    <div className="h-12 bg-slate-600 flex items-center justify-center gap-x-4 mb-4">
      <h1 className="text-xl font-bold text-slate-300 text-center">
        inventory app with tailwind.css & ReactJS
      </h1>
      <span
        id="counter"
        className="text-xs flex justify-center items-center h-5 w-5 bg-slate-400 text-slate-700 rounded-full border-2 border-slate-700"
      >
        {products.length}
      </span>
    </div>
  );
};

export default Navbar;
