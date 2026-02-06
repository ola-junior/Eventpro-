import { Route, Routes } from "react-router-dom";
import LandingPage from "./router/LandingPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import SignupPage from "./pages/SignupPage.jsx";
import VerifyEmail from "./pages/VerifyEmail.jsx";
import JoinEvent from "./pages/JoinEvent.jsx";
import PostEventPage from "./pages/PostEventPage.jsx";
import ManageEventsPage from "./pages/ManageEventsPage.jsx";
import ManageRegistrationsPage from "./pages/ManageRegistrationsPage.jsx";
import SearchPage from "./pages/SearchPage.jsx";
import TransactionsPage from "./pages/TransactionsPage.jsx";
import ProtectRouter from "./routes/protectRouter.jsx";
import Vertical from "./router/Vertical.jsx";

const App = () => {
  return (
    <div className="app-shell bg-slate-50 text-slate-900">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/verify-email" element={<VerifyEmail />} />
        <Route path="/events/:eventId" element={<JoinEvent />} />
        <Route element={<ProtectRouter />}>
          <Route element={<Vertical />}>
            <Route path="/app/home" element={<HomePage />} />
            <Route path="/app/post-event" element={<PostEventPage />} />
            <Route path="/app/manage-events" element={<ManageEventsPage />} />
            <Route
              path="/app/manage-registrations"
              element={<ManageRegistrationsPage />}
            />
            <Route path="/app/search" element={<SearchPage />} />
            <Route path="/app/transactions" element={<TransactionsPage />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
