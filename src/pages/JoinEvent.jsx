import { NavLink, useParams } from "react-router-dom";

const JoinEvent = () => {
  const { eventId } = useParams();

  return (
    <div className="min-h-screen bg-slate-50 px-6 py-12">
      <div className="mx-auto max-w-4xl space-y-8">
        <NavLink
          to="/app/search"
          className="text-sm font-semibold text-slate-600"
        >
          ← Back to search
        </NavLink>
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-soft">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                Event #{eventId}
              </p>
              <h1 className="mt-3 text-3xl font-semibold text-slate-900">
                Global Impact Innovation Forum
              </h1>
              <p className="mt-3 text-sm text-slate-600">
                December 4, 2026 • San Francisco, CA • Hosted by EventPro
              </p>
            </div>
            <button
              type="button"
              className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white"
            >
              Join event
            </button>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              { label: "Ticket price", value: "$249" },
              { label: "Capacity", value: "480 seats" },
              { label: "Category", value: "Leadership" }
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
              >
                <p className="text-xs uppercase text-slate-500">{item.label}</p>
                <p className="mt-2 text-lg font-semibold text-slate-900">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <h2 className="text-lg font-semibold">Event overview</h2>
            <p className="mt-3 text-sm text-slate-600">
              Join global leaders, founders, and strategists for a full-day
              immersive experience focused on sustainable innovation, strategic
              partnerships, and market expansion.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinEvent;
