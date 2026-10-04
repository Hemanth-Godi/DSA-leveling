import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AppLayout } from './components/layout/AppLayout';
import { AuthLayout } from './components/layout/AuthLayout';
import Landing from './pages/Landing';
import Dashboard from './pages/Dashboard';
import Roadmap from './pages/Roadmap';
import Login from './pages/Login';
import Register from './pages/Register';

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const isLoggedIn = localStorage.getItem('isLoggedIn');
  return isLoggedIn ? <>{children}</> : <Navigate to="/login" replace />;
}

function DungeonPlaceholder() {
  return (
    <div className="landing-page min-h-screen overflow-x-hidden bg-[#07070e] text-zinc-100 selection:bg-violet-500/30">
      <main className="relative z-10 pt-20 pb-12 lg:pt-24 lg:pb-16">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6">
          <div className="text-center py-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-[#160d2b]/80 px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-violet-200 mb-4">
              Dungeon Detail
            </div>
            <h1 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">Dungeon Coming Soon</h1>
            <p className="mt-3 text-base text-zinc-400 sm:text-lg max-w-xl mx-auto">
              This dungeon page will be built next. The routing architecture is ready for dynamic dungeon content.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
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
          <Route path="/dungeons" element={<ProtectedRoute><DungeonPlaceholder /></ProtectedRoute>} />
          <Route path="/dungeons/:topicId" element={<ProtectedRoute><DungeonPlaceholder /></ProtectedRoute>} />
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