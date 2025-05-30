import React from "react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { label: "Dashboard", icon: "🏠", path: "/" },
  { label: "Personas", icon: "👤", path: "/personas" },
  { label: "Goals", icon: "🎯", path: "/goals" },
  { label: "Conversations", icon: "💬", path: "/conversations" },
  { label: "Metrics", icon: "📈", path: "/metrics" },
  { label: "Annotations", icon: "📝", path: "/annotations" },
  { label: "Evaluators", icon: "🤖", path: "/evaluators" },
  { label: "Results", icon: "📊", path: "#" },
];

const Navbar: React.FC = () => {
  const location = useLocation();
  return (
    <nav className="h-screen w-64 bg-white border-r flex flex-col justify-between fixed left-0 top-0">
      <div>
        <div className="px-6 py-6 text-2xl font-bold text-blue-700">
          SPAR 
        </div>
        <ul className="mt-4">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link
                to={item.path}
                className={`flex items-center px-6 py-3 text-slate-700 hover:bg-slate-100 transition-colors font-medium ${
                  location.pathname === item.path ? "bg-slate-100 font-bold" : ""
                }`}
              >
                <span className="mr-3 text-lg">{item.icon}</span>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="px-6 py-4 border-t text-sm text-slate-500">
        <div>GenAI Engineer</div>
        <div className="text-xs">Role: Engineer</div>
      </div>
    </nav>
  );
};

export default Navbar;