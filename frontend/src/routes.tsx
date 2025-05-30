import type { RouteObject } from "react-router-dom";
import Dashboard from "./pages/landing";
import { PersonasList, PersonasCreate, PersonasEdit, PersonasView } from "./pages/personas";
import { GoalsList, GoalsCreate, GoalsEdit, GoalsView } from "./pages/goals";
import { MetricsList, MetricsCreate, MetricsEdit, MetricsView } from "./pages/metrics";
import { EvaluatorsList, EvaluatorsCreate, EvaluatorsEdit, EvaluatorsView } from "./pages/evaluators";
import { ConversationsList, ConversationsDetails, ConversationsGenerate, ConversationsUpload } from "./pages/conversations";
import { AnnotationsList, AnnotationsCreate, AnnotationsStart  } from "./pages/annotations";

export const appRoutes: RouteObject[] = [
  { path: "/", element: <Dashboard /> },
  { path: "/personas", element: <PersonasList /> },
  { path: "/personas/create", element: <PersonasCreate /> },
  { path: "/personas/edit/:id", element: <PersonasEdit /> },
  { path: "/personas/:id", element: <PersonasView /> },
  { path: "/goals", element: <GoalsList /> },
  { path: "/goals/create", element: <GoalsCreate /> },
  { path: "/goals/edit/:id", element: <GoalsEdit /> },
  { path: "/goals/:id", element: <GoalsView /> },
  { path: "/metrics", element: <MetricsList /> },
  { path: "/metrics/create", element: <MetricsCreate /> },
  { path: "/metrics/edit/:id", element: <MetricsEdit /> },
  { path: "/metrics/:id", element: <MetricsView /> },
  { path: "/evaluators", element: <EvaluatorsList /> },
  { path: "/evaluators/create", element: <EvaluatorsCreate /> },
  { path: "/evaluators/edit/:id", element: <EvaluatorsEdit /> },
  { path: "/evaluators/:id", element: <EvaluatorsView /> },
  { path: "/conversations", element: <ConversationsList /> },
  { path: "/conversations/generate", element: <ConversationsGenerate /> },
  { path: "/conversations/upload", element: <ConversationsUpload /> },
  { path: "/conversations/:id", element: <ConversationsDetails /> },
  { path: "/annotations", element: <AnnotationsList /> },
  { path: "/annotations/start", element: <AnnotationsStart /> },
  { path: "/annotations/create", element: <AnnotationsCreate /> },
];