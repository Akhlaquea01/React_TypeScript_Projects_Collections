import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import UseStatePage from "./pages/UseStatePage";
import UseEffectPage from "./pages/UseEffectPage";
import ContextPage from "./pages/ContextPage";
import NotFoundPage from "./pages/NotFoundPage";
import FormsPage from "./pages/FormsPage";
import ApiPage from "./pages/ApiPage";
import HocPage from "./pages/HocPage";
import RenderPropsPage from "./pages/RenderPropsPage"; 

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/use-state" element={<UseStatePage />} />
        <Route path="/use-effect" element={<UseEffectPage />} />
        <Route path="/context-api" element={<ContextPage />} />
        <Route path="/forms" element={<FormsPage />} />
        <Route path="/api" element={<ApiPage />} />
        <Route path="/hoc" element={<HocPage />} /> 
        <Route path="/render-props" element={<RenderPropsPage />} /> 
        <Route path="*" element={<NotFoundPage />} /> {/* Handles invalid routes */}
      </Routes>
    </Router>
  )
}

export default App
