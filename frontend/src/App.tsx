import Navbar from "./components/Navbar";
import Dashboard from "./pages/landing";

function App() {
  return (
    <div className="flex">
      <Navbar />
      <div className="flex-1 ml-64">
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
