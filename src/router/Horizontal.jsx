import { NavLink } from "react-router-dom";

const Horizontal = () => {
  return (
    <header className="sticky top-0 z-30 bg-white/90 backdrop-blur-lg shadow-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <NavLink to="/" className="flex items-center gap-2 text-xl font-semibold">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-900 text-white">
            EP
          </span>
          EventPro
        </NavLink>
        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
          <NavLink to="/" className="transition hover:text-slate-900">
            Home
          </NavLink>
          <NavLink to="/app/search" className="transition hover:text-slate-900">
            Explore Events
          </NavLink>
          <NavLink to="/app/transactions" className="transition hover:text-slate-900">
            Pricing
          </NavLink>
          <NavLink to="/verify-email" className="transition hover:text-slate-900">
            Verify Email
          </NavLink>
        </nav>
        <div className="flex items-center gap-3">
          <NavLink
            to="/login"
            className="rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:text-slate-900"
          >
            Login
          </NavLink>
          <NavLink
            to="/signup"
            className="rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-slate-800"
          >
            Get Started
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Horizontal;
