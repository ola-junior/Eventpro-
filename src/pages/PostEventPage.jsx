import { useState } from "react";
import Loader from "./Loader.jsx";

const PostEventPage = () => {
  const [formState, setFormState] = useState({
    title: "",
    description: "",
    date: "",
    location: "",
    price: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => setIsSubmitting(false), 900);
  };

  return (
    <div className="space-y-6">
      <header>
        <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
          Create event
        </p>
        <h1 className="mt-3 text-2xl font-semibold text-slate-900">
          Post a new event
        </h1>
        <p className="mt-2 text-sm text-slate-600">
          Share the details so attendees can discover and join your experience.
        </p>
      </header>

      <form
        onSubmit={handleSubmit}
        className="grid gap-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-soft"
      >
        <div>
          <label className="text-sm font-medium text-slate-700" htmlFor="title">
            Event title
          </label>
          <input
            id="title"
            name="title"
            type="text"
            value={formState.title}
            onChange={handleChange}
            className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm focus:border-slate-900 focus:outline-none"
            placeholder="Women in Tech Summit"
          />
        </div>
        <div>
          <label
            className="text-sm font-medium text-slate-700"
            htmlFor="description"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            rows="4"
            value={formState.description}
            onChange={handleChange}
            className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm focus:border-slate-900 focus:outline-none"
            placeholder="Share the story, agenda, and key takeaways."
          />
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label className="text-sm font-medium text-slate-700" htmlFor="date">
              Date
            </label>
            <input
              id="date"
              name="date"
              type="date"
              value={formState.date}
              onChange={handleChange}
              className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm focus:border-slate-900 focus:outline-none"
            />
          </div>
          <div>
            <label
              className="text-sm font-medium text-slate-700"
              htmlFor="location"
            >
              Location
            </label>
            <input
              id="location"
              name="location"
              type="text"
              value={formState.location}
              onChange={handleChange}
              className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm focus:border-slate-900 focus:outline-none"
              placeholder="San Diego, CA"
            />
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label className="text-sm font-medium text-slate-700" htmlFor="price">
              Ticket price
            </label>
            <input
              id="price"
              name="price"
              type="number"
              value={formState.price}
              onChange={handleChange}
              className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm focus:border-slate-900 focus:outline-none"
              placeholder="199"
            />
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600">
            <p className="font-semibold text-slate-800">Tip</p>
            <p className="mt-2">
              Add a clear agenda and highlight speakers to boost registrations.
            </p>
          </div>
        </div>
        <button
          type="submit"
          className="w-full rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
        >
          Publish event
        </button>
        {isSubmitting ? <Loader label="Publishing" /> : null}
      </form>
    </div>
  );
};

export default PostEventPage;
