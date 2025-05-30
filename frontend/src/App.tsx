import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/landing";
import PersonasList from "./pages/personas/personas-list";
import PersonaCreate from "./pages/personas/personas-create";
import PersonaEdit from "./pages/personas/personas-edit";
import PersonasView from "./pages/personas/personas-view";

function App() {
  return (
    <Router>
      <div className="flex">
        <Navbar />
        <div className="flex-1 ml-64">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/personas" element={<PersonasList />} />
            <Route path="/personas/create" element={<PersonaCreate />}/>
            <Route path="/personas/edit/:id" element={<PersonaEdit />}/>
            <Route path="personas/view/:id" element={<PersonasView />}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
