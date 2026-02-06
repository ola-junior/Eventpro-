import "../styles/ModernLoader.css";

const Loader = ({ label = "Loading" }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-3 py-6">
      <div className="modern-loader" />
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
        {label}
      </p>
    </div>
  );
};

export default Loader;
