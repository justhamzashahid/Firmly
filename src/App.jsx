import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import AmaliaCorner from "./pages/AmaliaCorner";
import AccountSettings from "./pages/AccountSettings";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/amalia-corner" element={<AmaliaCorner />} />
        <Route path="/dashboard/account-settings" element={<AccountSettings />} />
      </Routes>
    </Router>
  );
}

export default App;
