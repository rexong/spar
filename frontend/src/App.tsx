import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Dashboard from "./pages/landing";
import { PersonasList, PersonasCreate, PersonasEdit, PersonasView } from "./pages/personas";
import { GoalsList, GoalsCreate, GoalsEdit, GoalsView } from "./pages/goals";
import { MetricsList, MetricsCreate, MetricsEdit, MetricsView } from "./pages/metrics";
import { EvaluatorsList, EvaluatorsCreate, EvaluatorsEdit, EvaluatorsView } from "./pages/evaluators";
import { ConversationsList, ConversationsDetails, ConversationsGenerate, ConversationsUpload } from "./pages/conversations";
import { AnnotationsList, AnnotationsCreate, AnnotationsStart  } from "./pages/annotations";

function App() {
  return (
    <Router>
      <div className="flex">
        <Navbar />
        <div className="flex-1 ml-64">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/personas" element={<PersonasList />} />
            <Route path="/personas/create" element={<PersonasCreate />}/>
            <Route path="/personas/edit/:id" element={<PersonasEdit />}/>
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
            <Route path="/conversations" element={<ConversationsList />} />
            <Route path="/conversations/generate" element={<ConversationsGenerate />} />
            <Route path="/conversations/upload" element={<ConversationsUpload />} />
            <Route path="/conversations/:id" element={<ConversationsDetails />} />
            <Route path="/annotations" element={<AnnotationsList />} />
            <Route path="/annotations/start" element={<AnnotationsStart />} />
            <Route path="/annotations/create" element={<AnnotationsCreate />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
