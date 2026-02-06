import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Loader from "./Loader.jsx";

const SignupPage = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    password: ""
  });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setError("");

    if (!formState.name || !formState.email || !formState.password) {
      setError("Please fill in all required fields.");
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      localStorage.setItem("eventpro_auth", "true");
      localStorage.setItem("eventpro_user", formState.name);
      navigate("/verify-email", { replace: true });
    }, 800);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4">
      <div className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-8 shadow-soft">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-white">
            EP
          </span>
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
              Get started
            </p>
            <h1 className="text-2xl font-semibold">Create your account</h1>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label className="text-sm font-medium text-slate-700" htmlFor="name">
              Full name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={formState.name}
              onChange={handleChange}
              className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm focus:border-slate-900 focus:outline-none"
              placeholder="Alex Morgan"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-slate-700" htmlFor="email">
              Work email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formState.email}
              onChange={handleChange}
              className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm focus:border-slate-900 focus:outline-none"
              placeholder="alex@eventpro.com"
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
              placeholder="Create a secure password"
            />
          </div>

          {error ? (
            <div className="rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-700">
              {error}
            </div>
          ) : null}

          <button
            type="submit"
            className="w-full rounded-full bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            Create account
          </button>
        </form>

        {isLoading ? <Loader label="Creating account" /> : null}

        <p className="mt-6 text-center text-sm text-slate-500">
          Already have an account?{" "}
          <NavLink to="/login" className="font-semibold text-slate-900">
            Sign in
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
