import React from "react";

const navItems = [
  { label: "Dashboard", icon: "🏠" },
  { label: "Personas", icon: "👤" },
  { label: "Goals", icon: "🎯" },
  { label: "Conversations", icon: "💬" },
  { label: "Annotations", icon: "📝" },
  { label: "Evaluators", icon: "🤖" },
  { label: "Results", icon: "📊" },
];

const Navbar: React.FC = () => (
  <nav className="h-screen w-64 bg-white border-r flex flex-col justify-between fixed left-0 top-0">
    <div>
      <div className="px-6 py-6 text-2xl font-bold text-blue-700">
        GenAI Eval
      </div>
      <ul className="mt-4">
        {navItems.map((item) => (
          <li key={item.label}>
            <a
              href="#"
              className="flex items-center px-6 py-3 text-slate-700 hover:bg-slate-100 transition-colors font-medium"
            >
              <span className="mr-3 text-lg">{item.icon}</span>
              {item.label}
            </a>
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

export default Navbar;