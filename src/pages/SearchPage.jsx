import { NavLink } from "react-router-dom";

const events = [
  {
    title: "Climate Impact Summit",
    date: "Sep 14, 2026",
    location: "Denver, CO",
    category: "Sustainability"
  },
  {
    title: "AI Product Conference",
    date: "Sep 22, 2026",
    location: "Boston, MA",
    category: "Technology"
  },
  {
    title: "Women in Leadership",
    date: "Oct 02, 2026",
    location: "Atlanta, GA",
    category: "Leadership"
  },
  {
    title: "Creator Economy Lab",
    date: "Oct 16, 2026",
    location: "Los Angeles, CA",
    category: "Marketing"
  }
];

const SearchPage = () => {
  return (
    <div className="space-y-6">
      <header>
        <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
          Search events
        </p>
        <h1 className="mt-3 text-2xl font-semibold text-slate-900">
          Discover and join upcoming experiences
        </h1>
      </header>

      <div className="grid gap-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-soft md:grid-cols-3">
        <input
          type="text"
          placeholder="Search by event name"
          className="rounded-2xl border border-slate-200 px-4 py-3 text-sm focus:border-slate-900 focus:outline-none"
        />
        <select className="rounded-2xl border border-slate-200 px-4 py-3 text-sm focus:border-slate-900 focus:outline-none">
          <option>All categories</option>
          <option>Technology</option>
          <option>Leadership</option>
          <option>Sustainability</option>
          <option>Marketing</option>
        </select>
        <button
          type="button"
          className="rounded-2xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white"
        >
          Apply filters
        </button>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {events.map((event, index) => (
          <div
            key={event.title}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft"
          >
            <p className="text-xs uppercase text-slate-400">{event.category}</p>
            <h3 className="mt-3 text-lg font-semibold text-slate-900">
              {event.title}
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              {event.date} • {event.location}
            </p>
            <NavLink
              to={`/events/${index + 1}`}
              className="mt-4 inline-flex text-sm font-semibold text-slate-900"
            >
              View details →
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
