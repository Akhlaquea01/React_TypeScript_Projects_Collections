import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import UseStatePage from "./pages/UseStatePage";
import UseEffectPage from "./pages/UseEffectPage";
import ContextPage from "./pages/ContextPage";
import NotFoundPage from "./pages/NotFoundPage";
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/use-state" element={<UseStatePage />} />
        <Route path="/use-effect" element={<UseEffectPage />} />
        <Route path="/context-api" element={<ContextPage />} />
        <Route path="*" element={<NotFoundPage />} /> {/* Handles invalid routes */}
      </Routes>
    </Router>
  )
}

export default App
