import { Route, Routes } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import TasksPage from "./pages/TasksPage";
import Settings from "./pages/Settings";

function App() {
  return (
    <Routes>
      <Route path="/" element={<DashboardPage />} />
      <Route path="/tasks" element={<TasksPage />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
}

export default App;
