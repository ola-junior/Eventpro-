import { NavLink } from "react-router-dom";

const highlights = [
  { label: "Upcoming events", value: "18" },
  { label: "Registrations today", value: "1,248" },
  { label: "Revenue (30d)", value: "$84,920" }
];

const events = [
  {
    title: "Future of Fintech Summit",
    date: "Sep 18, 2026",
    location: "New York, NY",
    status: "Selling fast"
  },
  {
    title: "Wellness & Mindfulness Expo",
    date: "Oct 02, 2026",
    location: "Austin, TX",
    status: "Early access"
  },
  {
    title: "Creative Tech Week",
    date: "Nov 12, 2026",
    location: "Seattle, WA",
    status: "Registration open"
  }
];

const HomePage = () => {
  return (
    <div className="space-y-10">
      <section className="rounded-3xl bg-slate-900 px-8 py-10 text-white shadow-soft">
        <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
          Welcome back
        </p>
        <h1 className="mt-3 text-3xl font-semibold">
          Build and manage standout events with EventPro.
        </h1>
        <p className="mt-4 max-w-2xl text-sm text-slate-300">
          Centralize planning, ticketing, and analytics in one dashboard. Keep
          your teams aligned, and stay ahead with real-time insights.
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <NavLink
            to="/app/post-event"
            className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-slate-900"
          >
            Create Event
          </NavLink>
          <NavLink
            to="/app/manage-events"
            className="rounded-full border border-white/30 px-5 py-2 text-sm font-semibold text-white"
          >
            Manage Events
          </NavLink>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {highlights.map((item) => (
          <div
            key={item.label}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
              {item.label}
            </p>
            <p className="mt-3 text-2xl font-semibold text-slate-900">
              {item.value}
            </p>
          </div>
        ))}
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-soft">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Featured events</h2>
          <NavLink
            to="/app/search"
            className="text-sm font-semibold text-slate-600 transition hover:text-slate-900"
          >
            Explore all
          </NavLink>
        </div>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {events.map((event) => (
            <div
              key={event.title}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
            >
              <p className="text-xs uppercase text-slate-500">{event.status}</p>
              <h3 className="mt-2 text-lg font-semibold text-slate-900">
                {event.title}
              </h3>
              <p className="mt-3 text-sm text-slate-600">
                {event.date} • {event.location}
              </p>
              <NavLink
                to="/events/1"
                className="mt-4 inline-flex text-sm font-semibold text-slate-900"
              >
                View details →
              </NavLink>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
