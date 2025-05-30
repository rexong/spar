import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Dashboard from "./pages/landing";
import PersonasList from "./pages/personas/personas-list";
import PersonaCreate from "./pages/personas/personas-create";
import PersonaEdit from "./pages/personas/personas-edit";
import PersonasView from "./pages/personas/personas-view";
import GoalsList from "./pages/goals/goals-list";
import GoalsCreate from "./pages/goals/goals-create";
import GoalsEdit from "./pages/goals/goals-edit";
import GoalsView from "./pages/goals/goals-view";
import MetricsList from "./pages/metrics/metrics-list";
import MetricsCreate from "./pages/metrics/metrics-create";
import MetricsEdit from "./pages/metrics/metrics-edit";
import MetricsView from "./pages/metrics/metrics-view";
import EvaluatorsList from "./pages/evaluators/evaluators-list";
import EvaluatorsCreate from "./pages/evaluators/evaluators-create";
import EvaluatorsEdit from "./pages/evaluators/evaluators-edit";
import EvaluatorsView from "./pages/evaluators/evaluators-view";

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
            <Route path="/metrics" element={<MetricsList/>} />
            <Route path="/metrics/create" element={<MetricsCreate />} />
            <Route path="/metrics/edit/:id" element={<MetricsEdit />} />
            <Route path="/metrics/:id" element={<MetricsView />} />
            <Route path="/evaluators" element={<EvaluatorsList />} />
            <Route path="/evaluators/create" element={<EvaluatorsCreate />} />
            <Route path="/evaluators/edit/:id" element={<EvaluatorsEdit />} />
            <Route path="/evaluators/:id" element={<EvaluatorsView />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
