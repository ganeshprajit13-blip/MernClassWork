import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login";
// import Task from "./pages/task";
// import Project from "./pages/project";
import Calendar from "./pages/calendar";
import Clients from "./pages/clients";
import Dashboard from "./pages/dashboard";
import Settings from "./pages/settings";
import Team from "./pages/teams";
import Register from "./pages/register";
// import Admin from "./pages/Admin/adminlayout";
// import Details from "./pages/Admin/userdetails";
// import AdminDashboard from "./pages/Admin/admindashboard";
// import UserSettings from "./pages/Admin/settings";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        {/* <Route path="/task" element={<Task />} /> */}
        {/* <Route path="/project" element={<Project />} /> */}
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/team" element={<Team />} />
        <Route path="/register" element={<Register />} />

        {/* Uncomment once you create the Admin folder and files
        <Route path="/admin" element={<Admin />}>
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="settings" element={<UserSettings />} />
          <Route path="details" element={<Details />} />
        </Route> 
        */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;