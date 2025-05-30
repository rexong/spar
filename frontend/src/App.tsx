import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import Navbar from "./components/navbar";
import { appRoutes } from "./routes";

function AppRoutes() {
  return useRoutes(appRoutes);
}

function App() {
  return (
    <Router>
      <div className="flex">
        <Navbar />
        <div className="flex-1 ml-64">
          <AppRoutes />
        </div>
      </div>
    </Router>
  );
}

export default App;
