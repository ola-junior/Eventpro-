import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";

const navItems = [
  { label: "Dashboard", path: "/app/home" },
  { label: "Post Event", path: "/app/post-event" },
  { label: "Manage Events", path: "/app/manage-events" },
  { label: "Registrations", path: "/app/manage-registrations" },
  { label: "Search", path: "/app/search" },
  { label: "Transactions", path: "/app/transactions" }
];

const Vertical = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const userName = localStorage.getItem("eventpro_user") || "Event Admin";

  const handleLogout = () => {
    localStorage.removeItem("eventpro_auth");
    localStorage.removeItem("eventpro_user");
    navigate("/login");
  };

  return (
    <div className="flex min-h-screen bg-slate-50">
      <aside
        className={`fixed left-0 top-0 z-40 h-full w-64 transform border-r border-slate-200 bg-white px-6 pb-6 pt-8 shadow-sm transition duration-300 md:static md:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 text-lg font-semibold">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-white">
              EP
            </span>
            EventPro
          </div>
          <button
            type="button"
            className="rounded-lg border border-slate-200 px-2 py-1 text-sm text-slate-500 md:hidden"
            onClick={() => setIsOpen(false)}
          >
            Close
          </button>
        </div>
        <div className="mt-10 space-y-2 text-sm font-medium">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-xl px-4 py-3 transition ${
                  isActive
                    ? "bg-slate-900 text-white shadow"
                    : "text-slate-600 hover:bg-slate-100"
                }`
              }
            >
              <span className="h-2 w-2 rounded-full bg-current" />
              {item.label}
            </NavLink>
          ))}
        </div>
        <div className="mt-auto pt-10">
          <div className="rounded-2xl bg-slate-900 px-4 py-5 text-white shadow-sm">
            <p className="text-xs uppercase text-slate-300">Logged in as</p>
            <p className="mt-2 text-sm font-semibold">{userName}</p>
            <button
              type="button"
              onClick={handleLogout}
              className="mt-4 w-full rounded-full border border-white/30 px-3 py-2 text-xs font-semibold transition hover:bg-white/10"
            >
              Sign Out
            </button>
          </div>
        </div>
      </aside>

      <div className="flex flex-1 flex-col md:ml-0">
        <div className="flex items-center justify-between border-b border-slate-200 bg-white px-6 py-4 shadow-sm md:hidden">
          <button
            type="button"
            className="rounded-lg border border-slate-200 px-3 py-2 text-sm font-medium"
            onClick={() => setIsOpen(true)}
          >
            Menu
          </button>
          <p className="text-sm font-semibold text-slate-700">EventPro Dashboard</p>
          <div className="h-9 w-9 rounded-full bg-slate-900" />
        </div>

        <main className="flex-1 px-6 py-8 md:px-10">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Vertical;
