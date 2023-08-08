import "./App.css";
import CategoryForm from "./components/CategoryForm";
import Navbar from "./components/NavBar";
import ProductForm from "./components/ProductForm";

function App() {
  return (
    <div className="">
      <div className="bg-slate-800 min-h-screen">
        <Navbar />
        <div className="max-w-screen-sm container mx-auto p-2">
          <CategoryForm />
          <ProductForm />
        </div>
      </div>
    </div>
  );
}

export default App;
