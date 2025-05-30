import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/landing";
import Personas from "./pages/personas";

function App() {
  return (
    <Router>
      <div className="flex">
        <Navbar />
        <div className="flex-1 ml-64">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/personas" element={<Personas />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
