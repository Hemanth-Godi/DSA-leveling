import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AppLayout } from './components/layout/AppLayout';
import { AuthLayout } from './components/layout/AuthLayout';
import Landing from './pages/Landing';
import Dashboard from './pages/Dashboard';
import Roadmap from './pages/Roadmap';
import Dungeon from './pages/Dungeon';
import Login from './pages/Login';
import Register from './pages/Register';

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const isLoggedIn = localStorage.getItem('isLoggedIn');
  return isLoggedIn ? <>{children}</> : <Navigate to="/login" replace />;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public routes with shared navbar */}
        <Route element={<AppLayout />}>
          <Route path="/" element={<Landing />} />
          <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          <Route path="/roadmap" element={<ProtectedRoute><Roadmap /></ProtectedRoute>} />
          <Route path="/dungeons" element={<ProtectedRoute><Navigate to="/dungeons/foundations" replace /></ProtectedRoute>} />
          <Route path="/dungeons/:topicId" element={<ProtectedRoute><Dungeon /></ProtectedRoute>} />
          <Route path="/rewards" element={<ProtectedRoute><div className="p-8 text-center text-zinc-400">Rewards - Coming Soon</div></ProtectedRoute>} />
          <Route path="/leaderboard" element={<ProtectedRoute><div className="p-8 text-center text-zinc-400">Leaderboard - Coming Soon</div></ProtectedRoute>} />
        </Route>

        {/* Auth routes without navbar */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        {/* Redirect unknown routes */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}