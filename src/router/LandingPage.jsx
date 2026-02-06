import { NavLink } from "react-router-dom";
import Horizontal from "./Horizontal.jsx";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Horizontal />
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 opacity-90" />
        <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
              Event Management Platform
            </p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
              Launch unforgettable events with end-to-end control.
            </h1>
            <p className="mt-6 text-lg text-slate-300">
              EventPro powers modern organizers with streamlined registration,
              curated experiences, and automated transactions in one unified hub.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <NavLink
                to="/signup"
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-200"
              >
                Start for Free
              </NavLink>
              <NavLink
                to="/app/home"
                className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold transition hover:border-white"
              >
                View Dashboard
              </NavLink>
            </div>
            <div className="mt-10 flex items-center gap-6 text-xs text-slate-400">
              <div>
                <p className="text-2xl font-semibold text-white">120+</p>
                <p>Active events</p>
              </div>
              <div>
                <p className="text-2xl font-semibold text-white">48k</p>
                <p>Registrations processed</p>
              </div>
              <div>
                <p className="text-2xl font-semibold text-white">99.9%</p>
                <p>Uptime SLA</p>
              </div>
            </div>
          </div>
          <div className="grid gap-6">
            {["Realtime analytics", "Smart ticketing", "Team workflows"].map(
              (item) => (
                <div
                  key={item}
                  className="glass-card rounded-2xl border border-white/10 bg-white/10 p-6 shadow-xl"
                >
                  <p className="text-sm text-slate-300">Feature highlight</p>
                  <h3 className="mt-3 text-xl font-semibold text-white">
                    {item}
                  </h3>
                  <p className="mt-3 text-sm text-slate-300">
                    Deliver premium attendee experiences with automated updates,
                    branded check-ins, and built-in payment tracking.
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 text-slate-900">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Plan",
                description:
                  "Draft timelines, assign teams, and keep stakeholders aligned in real time."
              },
              {
                title: "Launch",
                description:
                  "Publish events, promote tickets, and manage capacity with ease."
              },
              {
                title: "Optimize",
                description:
                  "Track performance, revenue, and attendee engagement from one dashboard."
              }
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft"
              >
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm text-slate-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
