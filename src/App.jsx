import './App.css'
import React, { lazy, Suspense } from "react";
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
import ErrorBoundaryPage from "./pages/ErrorBoundaryPage";
import PortalsPage from "./pages/PortalsPage";
import ForwardRefPage from './pages/ForwardRefPage';
import UseRefPage from './pages/UseRefPage';
import UseReducerPage from './pages/UseReducerPage';
import UseImperativeHandlePage from './pages/UseImperativeHandlePage';
import UsersListPage from './pages/UsersListPage';
import ProfilerPage from './pages/ProfilerPage';
import VirtualizedGrid from './pages/VariableSizeGrid';
import InfiniteScrollingList from './pages/InfiniteScrollingList';
import ReduxCounter from './pages/ReduxCounter';
// import LazyLoadingPage from "./pages/LazyLoadingPage";

const LazyLoadingPage = lazy(() => import("./pages/LazyLoadingPage"));
const MemoizationPage = lazy(() => import("./pages/MemoizationPage"));
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
        <Route path="/error-boundary" element={<ErrorBoundaryPage />} />
        <Route path="/lazy-loading" element={<LazyLoadingPage />} />
        <Route path="/memoization" element={<MemoizationPage />} />
        <Route path="/portals" element={<PortalsPage />} />
        <Route path="/use-ref" element={<UseRefPage />} />
        <Route path="/forward-ref" element={<ForwardRefPage />} />
        <Route path="/use-reducer" element={<UseReducerPage />} />
        <Route path="/use-imperative" element={<UseImperativeHandlePage />} />
        <Route path="/custom-hook" element={<UsersListPage />} />
        <Route path="/profiler" element={<ProfilerPage />} />
        <Route path="/infinite-scrolling" element={<InfiniteScrollingList />} />
        <Route path="/virtualized-grid" element={<VirtualizedGrid />} />
        <Route path="/redux-counter" element={<ReduxCounter />} />
        <Route path="*" element={<NotFoundPage />} /> {/* Handles invalid routes */}
      </Routes>
    </Router>
  )
}

export default App
