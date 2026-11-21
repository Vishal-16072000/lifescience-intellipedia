
import { MessageSquare, Building2, Database, Activity } from "lucide-react";
import { NavLink } from "react-router-dom";
import logo from '../../../src/assets/logo1.png'

const navigation = [
  { name: "AI Assistant", path: "/", icon: MessageSquare },
  { name: "Suppliers", path: "/suppliers", icon: Building2 },
  { name: "Product Summary", path: "/product-summary", icon: Database },
];

function Sidebar() {
  return (
    <aside className=" w-72 min-h-screen bg-blue-50 text-white flex flex-col p-5">
      <div className="flex items-center gap-3 mb-10">
        <img src={logo} className="w-48"/>
      </div>

      <p className="text-xs uppercase tracking-wider text-slate-500 mb-3">
        Workspace
      </p>

      <nav className="space-y-2">
        {navigation.map(({ name, path, icon: Icon }) => (
          <NavLink
            key={path}
            to={path}
            end={path === "/"}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-lg text-sm transition ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "text-slate-400 hover:bg-slate-800 hover:text-white"
              }`
            }
          >
            <Icon size={19} />
            {name}
          </NavLink>
        ))}
      </nav>

      <div className="mt-auto border-t border-slate-800 pt-5">
        <p className="text-xs text-slate-500">Lifescience Intellipedia</p>
        <p className="text-sm text-slate-300 mt-1">.</p>
      </div>
    </aside>
  );
}

export default Sidebar;
