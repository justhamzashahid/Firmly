import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import AmaliaCorner from "./pages/AmaliaCorner";
import AccountSettings from "./pages/AccountSettings";
import Onboarding from "./pages/Onboarding";
import NormalChat from "./pages/NormalChat";
import SafeSpaceChat from "./pages/SafeSpaceChat";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Onboarding />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/amalia-corner" element={<AmaliaCorner />} />
        <Route
          path="/dashboard/account-settings"
          element={<AccountSettings />}
        />
        <Route path="/dashboard/normal-chat" element={<NormalChat />} />
        <Route path="/dashboard/safe-space-chat" element={<SafeSpaceChat />} />
      </Routes>
    </Router>
  );
}
export default App;
