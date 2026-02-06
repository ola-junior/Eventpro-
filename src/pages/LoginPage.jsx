import { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import Loader from "./Loader.jsx";

const LoginPage = () => {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setError("");

    if (!formState.email || !formState.password) {
      setError("Please enter your email and password.");
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      localStorage.setItem("eventpro_auth", "true");
      localStorage.setItem("eventpro_user", formState.email.split("@")[0]);
      const redirectTo = location.state?.from?.pathname || "/app/home";
      navigate(redirectTo, { replace: true });
    }, 700);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 px-4 text-white">
      <div className="w-full max-w-md rounded-3xl bg-white p-8 text-slate-900 shadow-soft">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-white">
            EP
          </span>
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
              Welcome back
            </p>
            <h1 className="text-2xl font-semibold">Login to EventPro</h1>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label className="text-sm font-medium text-slate-700" htmlFor="email">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formState.email}
              onChange={handleChange}
              className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm focus:border-slate-900 focus:outline-none"
              placeholder="you@eventpro.com"
            />
          </div>
          <div>
            <label
              className="text-sm font-medium text-slate-700"
              htmlFor="password"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              value={formState.password}
              onChange={handleChange}
              className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm focus:border-slate-900 focus:outline-none"
              placeholder="Enter your password"
            />
          </div>

          {error ? (
            <div className="rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-600">
              {error}
            </div>
          ) : null}

          <button
            type="submit"
            className="w-full rounded-full bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            Sign in
          </button>
        </form>

        {isLoading ? <Loader label="Signing in" /> : null}

        <p className="mt-6 text-center text-sm text-slate-500">
          New to EventPro?{" "}
          <NavLink to="/signup" className="font-semibold text-slate-900">
            Create an account
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
