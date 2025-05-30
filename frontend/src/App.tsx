import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/landing";
import PersonasList from "./pages/personas/personas-list";
import PersonaCreate from "./pages/personas/personas-create";
import PersonaEdit from "./pages/personas/personas-edit";
import PersonasView from "./pages/personas/personas-view";
import GoalsList from "./pages/goals/goals-list";
import GoalsCreate from "./pages/goals/goals-create";
import GoalsEdit from "./pages/goals/goals-edit";
import GoalsView from "./pages/goals/goals-view";

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
            <Route path="personas/:id" element={<PersonasView />}/>
            <Route path="/goals" element={<GoalsList />} />
            <Route path="/goals/create" element={<GoalsCreate />} />
            <Route path="/goals/edit/:id" element={<GoalsEdit />} />
            <Route path="/goals/:id" element={<GoalsView />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
