import { NavLink } from "react-router-dom";

const VerifyEmail = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4">
      <div className="w-full max-w-lg rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-soft">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
          ✓
        </div>
        <h1 className="mt-6 text-2xl font-semibold text-slate-900">
          Verify your email address
        </h1>
        <p className="mt-4 text-sm text-slate-600">
          We sent a verification link to your inbox. Click the link to activate
          your EventPro account and unlock your dashboard.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3">
          <NavLink
            to="/app/home"
            className="w-full rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white"
          >
            Continue to dashboard
          </NavLink>
          <NavLink
            to="/login"
            className="w-full rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-700"
          >
            Back to login
          </NavLink>
        </div>
        <p className="mt-6 text-xs text-slate-400">
          Didn’t receive an email? Check spam or request a new verification.
        </p>
      </div>
    </div>
  );
};

export default VerifyEmail;
