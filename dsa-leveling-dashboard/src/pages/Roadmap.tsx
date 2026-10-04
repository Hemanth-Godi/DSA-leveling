import { useEffect, useState, useMemo } from 'react';
import { RoadmapHeader, RoadmapTimeline } from '../components/roadmap';
import { roadmapData } from '../data/roadmapData';
import type { RoadmapStageStatus } from '../types/roadmap';

export default function Roadmap() {
  const [mounted, setMounted] = useState(false);
  const [filter, setFilter] = useState<'all' | 'current' | 'completed' | 'locked'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    setMounted(true);
    const loggedIn = localStorage.getItem('isLoggedIn');
    if (!loggedIn) {
      window.location.href = '/login';
    }
  }, []);

  const { overallProgress, stages } = roadmapData;
  const completedCount = stages.filter((s) => s.status === 'completed').length;

  // Filtered stages based on tab and search
  const filteredStages = useMemo(() => {
    return stages.filter((stage) => {
      // Status filter
      if (filter !== 'all' && stage.status !== filter) {
        return false;
      }
      // Search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesTitle = stage.title.toLowerCase().includes(query);
        const matchesDesc = stage.description.toLowerCase().includes(query);
        const matchesTopics = stage.topics?.some((t) => t.toLowerCase().includes(query));
        const matchesRank = stage.rank?.toLowerCase().includes(query);
        return matchesTitle || matchesDesc || matchesTopics || matchesRank;
      }
      return true;
    });
  }, [stages, filter, searchQuery]);

  if (!mounted) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="flex items-center gap-2.5 text-violet-400 font-medium">
          <span className="h-2 w-2 rounded-full bg-violet-400 animate-ping" />
          <span>Loading Hunter Roadmap...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      {/* Roadmap Header with integrated progress & filters */}
      <RoadmapHeader
        currentStage={overallProgress.currentStage}
        completedCount={completedCount}
        totalCount={overallProgress.total}
        activeFilter={filter}
        onFilterChange={setFilter}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      {/* Roadmap Timeline - Symmetrical Map View */}
      <RoadmapTimeline stages={filteredStages} />
    </div>
  );
}