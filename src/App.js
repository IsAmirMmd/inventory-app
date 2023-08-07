import "./App.css";
import CategoryForm from "./components/CategoryForm";
import Navbar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <div className="bg-slate-800 min-h-full">
        <Navbar />
        <div className="max-w-screen-sm container mx-auto p-2">
          <CategoryForm />
        </div>
      </div>
    </div>
  );
}

export default App;
