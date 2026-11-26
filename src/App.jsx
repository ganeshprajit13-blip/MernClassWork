import { BrowserRouter, Route, Routes } from "react-router-dom";

import Calendar from "./pages/calendar";
import Dashboard from "./pages/dashboard";
import Clients from "./pages/clients";
import Settings from "./pages/settings";
import Teams from "./pages/teams";
import Login from "./pages/login";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
