import type { Dungeon, DungeonNavigation, QuestionStatus } from '../types/dungeon';

const dungeonImages = [
  '/src/assets/dungon1.png',
  '/src/assets/dungon2.png',
  '/src/assets/dungon3.png',
  '/src/assets/dungon4.png',
  '/src/assets/dungon5.png',
];

const dungeonDefinitions: Omit<Dungeon, 'easy' | 'medium' | 'hard' | 'boss' | 'totalXP' | 'progress' | 'completedCount' | 'totalQuestions'>[] = [
  {
    id: 'foundations',
    title: 'Foundations',
    description: 'Build the fundamentals required for solving DSA problems. Learn complexity analysis, basic syntax, and problem-solving patterns.',
    image: dungeonImages[0],
  },
  {
    id: 'arrays',
    title: 'Arrays',
    description: 'Master traversal, prefix sums, searching, two-pointer techniques, and core array manipulation patterns.',
    image: dungeonImages[1],
  },
  {
    id: 'strings',
    title: 'Strings',
    description: 'Learn string manipulation, pattern matching, palindromes, anagrams, and efficient string algorithms.',
    image: dungeonImages[2],
  },
  {
    id: 'hashing',
    title: 'Hashing',
    description: 'Master hash maps, sets, frequency counting, and hash-based problem solving techniques.',
    image: dungeonImages[3],
  },
  {
    id: 'linked-list',
    title: 'Linked List',
    description: 'Understand singly/doubly linked lists, fast/slow pointers, cycle detection, and list manipulation.',
    image: dungeonImages[4],
  },
  {
    id: 'two-pointers-sliding-window',
    title: 'Two Pointers & Sliding Window',
    description: 'Master the two-pointer technique and sliding window patterns for optimal subarray/substring problems.',
    image: dungeonImages[0],
  },
  {
    id: 'stack',
    title: 'Stack',
    description: 'Learn stack-based algorithms: parentheses validation, monotonic stack, next greater element, and expression evaluation.',
    image: dungeonImages[1],
  },
  {
    id: 'queue',
    title: 'Queue',
    description: 'Master queues, deques, BFS fundamentals, sliding window maximum, and queue-based problem patterns.',
    image: dungeonImages[2],
  },
  {
    id: 'recursion',
    title: 'Recursion',
    description: 'Master recursive thinking, backtracking, divide and conquer, memoization, and recursive tree/graph traversals.',
    image: dungeonImages[3],
  },
  {
    id: 'tree',
    title: 'Tree',
    description: 'Learn binary tree traversals (DFS/BFS), tree construction, LCA, diameter, and tree DP patterns.',
    image: dungeonImages[4],
  },
  {
    id: 'bst',
    title: 'BST',
    description: 'Master Binary Search Tree operations: insertion, deletion, search, validation, and BST-specific problems.',
    image: dungeonImages[0],
  },
  {
    id: 'heap',
    title: 'Heap',
    description: 'Learn priority queues, heap operations, top-k problems, median finding, and heap-based optimization.',
    image: dungeonImages[1],
  },
  {
    id: 'graph',
    title: 'Graph',
    description: 'Master graph representations, BFS/DFS, shortest paths (Dijkstra), MST, topological sort, and cycle detection.',
    image: dungeonImages[2],
  },
  {
    id: 'dp',
    title: 'Dynamic Programming',
    description: 'Learn DP patterns: 0/1 knapsack, LIS, edit distance, interval DP, tree DP, and state compression.',
    image: dungeonImages[3],
  },
  {
    id: 'tries',
    title: 'Tries',
    description: 'Master prefix trees, autocomplete, XOR problems, and trie-based string/bitwise optimizations.',
    image: dungeonImages[4],
  },
];

function generateQuestions(dungeonId: string, baseXP: number): { easy: any[]; medium: any[]; hard: any[]; boss: any[] } {
  const difficulties = ['easy', 'medium', 'hard'] as const;
  const xpValues = { easy: 10, medium: 20, hard: 30, boss: 50 };
  const questionTitles: Record<string, Record<string, string[]>> = {
    foundations: {
      easy: ['Hello World', 'Variables & Types', 'Basic Operators', 'Conditionals', 'Loops', 'Functions', 'Arrays Basics', 'Objects Basics', 'Debugging', 'First Algorithm'],
      medium: ['Time Complexity', 'Space Complexity', 'Big O Notation', 'Recursion Basics', 'Two Pointers Intro', 'Sliding Window Intro', 'Prefix Sums', 'Hash Maps', 'Stacks Intro', 'Queues Intro'],
      hard: ['Complexity Proofs', 'Optimization Patterns', 'Algorithm Design', 'Trade-off Analysis', 'Advanced Patterns', 'Problem Decomposition', 'Edge Case Handling', 'Test Case Design', 'Performance Tuning', 'Code Quality'],
      boss: ['Foundations Mastery', 'Complete Algorithm', 'Optimal Solution', 'Edge Cases', 'Production Ready']
    },
    arrays: {
      easy: ['Find Maximum Element', 'Find Minimum Element', 'Reverse an Array', 'Check if Array is Sorted', 'Find Second Largest', 'Remove Duplicates', 'Linear Search', 'Move Zeroes', 'Count Even Numbers', 'Find Missing Number'],
      medium: ['Two Sum', 'Maximum Subarray', 'Rotate Array', 'Product Except Self', 'Majority Element', 'Subarray Sum Equals K', 'Merge Intervals', 'Sort Colors', 'Longest Consecutive Sequence', 'Container With Most Water'],
      hard: ['Trapping Rain Water', 'Median of Two Sorted Arrays', 'Max Chunks To Make Sorted', 'Maximum XOR Subarray', 'Range Sum Query', 'Sparse Table', 'Mo\'s Algorithm', 'Segment Tree', 'Fenwick Tree', 'Wavelet Matrix'],
      boss: ['Array Overlord', 'Ultimate Subarray', 'Array Convergence', 'Final Array Trial', 'The Array Master']
    },
    strings: {
      easy: ['Reverse String', 'Palindrome Check', 'Anagram Check', 'Count Vowels', 'First Unique Char', 'String Concatenation', 'Substring Check', 'Case Conversion', 'Trim Whitespace', 'Character Frequency'],
      medium: ['Valid Parentheses', 'Longest Substring', 'Group Anagrams', 'String Compression', 'Rabin-Karp Search', 'KMP Algorithm', 'Longest Palindrome', 'Edit Distance', 'Word Break', 'Pattern Matching'],
      hard: ['Suffix Array', 'Suffix Automaton', 'Aho-Corasick', 'Manacher Algorithm', 'Z Algorithm', 'Palindromic Tree', 'Minimal Rotation', 'String Hashing', 'Rolling Hash', 'Trie Construction'],
      boss: ['String Overlord', 'Ultimate Pattern', 'String Convergence', 'Final String Trial', 'The String Master']
    },
    hashing: {
      easy: ['First Unique', 'Find Duplicates', 'Count Frequency', 'Intersection', 'Union', 'Difference', 'Subset Check', 'Pair Sum', 'Triplet Sum', 'Subarray Sum'],
      medium: ['Two Sum Variants', 'Four Sum', 'Subarray Sum K', 'Longest Subarray', 'Prefix Sum Hash', 'Rolling Hash', 'Consistent Hashing', 'Bloom Filter', 'LRU Cache', 'LFU Cache'],
      hard: ['Cuckoo Hashing', 'Perfect Hashing', 'Minimal Perfect Hash', 'Distributed Hashing', 'Consistent Hashing', 'Bloom Filter Variants', 'Count-Min Sketch', 'HyperLogLog', 'MinHash', 'LSH'],
      boss: ['Hash Overlord', 'Ultimate Hash', 'Hash Convergence', 'Final Hash Trial', 'The Hash Master']
    },
    'linked-list': {
      easy: ['Create List', 'Insert Head', 'Insert Tail', 'Delete Node', 'Search List', 'Length', 'Reverse', 'Middle Node', 'Cycle Detection', 'Merge Lists'],
      medium: ['Reverse K Group', 'Swap Pairs', 'Remove Nth End', 'Partition List', 'Add Two Numbers', 'Intersection', 'Palindrome List', 'Cycle Start', 'Flatten List', 'Copy Random'],
      hard: ['LRU Cache', 'LFU Cache', 'Design Linked List', 'Skip List', 'Concurrent List', 'Lock-free List', 'Persistent List', 'XOR List', 'Unrolled List', 'Cache-oblivious'],
      boss: ['List Overlord', 'Ultimate List', 'List Convergence', 'Final List Trial', 'The List Master']
    },
    'two-pointers-sliding-window': {
      easy: ['Two Sum Sorted', 'Remove Duplicates', 'Move Zeroes', 'Container Water', 'Trapping Water', 'Max Area', 'Min Subarray', 'Longest Substring', 'Fruit Into Baskets', 'Replace Substring'],
      medium: ['3Sum', '4Sum', 'Subarray Sum K', 'Min Window', 'Longest Repeating', 'Permutation In String', 'Min Window Substring', 'Max Consecutive Ones', 'Binary Subarrays', 'Subarrays Product'],
      hard: ['Sliding Window Median', 'Max of Min', 'Min of Max', 'Number of Subarrays', 'Shortest Subarray', 'Constrained Subsequence', 'Monotonic Queue', 'Two Pointers DP', 'Divide Conquer', 'Geometry'],
      boss: ['Window Overlord', 'Ultimate Window', 'Window Convergence', 'Final Window Trial', 'The Window Master']
    },
    stack: {
      easy: ['Valid Parentheses', 'Min Stack', 'Daily Temperatures', 'Next Greater', 'Previous Smaller', 'Stock Span', 'Evaluate RPN', 'Basic Calculator', 'Remove Duplicates', 'Decode String'],
      medium: ['Largest Rectangle', 'Trapping Water', 'Max Rectangle', 'Score Parentheses', 'Remove K Digits', 'Next Greater II', '132 Pattern', 'Max Width Ramp', 'Valid Stack', 'Asteroid Collision'],
      hard: ['Largest Rectangle 2D', 'Max Submatrix', 'Cartesian Tree', 'Monotonic Stack', 'Stack Permutation', 'Railway Shunting', 'Expression Tree', 'Dijkstra Stack', 'Parallel Stack', 'Concurrent Stack'],
      boss: ['Stack Overlord', 'Ultimate Stack', 'Stack Convergence', 'Final Stack Trial', 'The Stack Master']
    },
    queue: {
      easy: ['Implement Queue', 'Circular Queue', 'Deque', 'Queue Stack', 'Stack Queue', 'BFS Tree', 'Level Order', 'Right View', 'Left View', 'Max Width'],
      medium: ['Sliding Window Max', 'Shortest Path', 'Rotting Oranges', 'Walls Gates', 'Perfect Squares', 'Coin Change', 'Jump Game', 'Snakes Ladders', 'Minimum Moves', 'Escape Maze'],
      hard: ['Double Ended BFS', '0-1 BFS', 'Multi-source BFS', 'BFS Layers', 'Bidirectional', 'A* Search', 'Dijkstra', 'SPFA', 'Topological', 'Kahn Algorithm'],
      boss: ['Queue Overlord', 'Ultimate Queue', 'Queue Convergence', 'Final Queue Trial', 'The Queue Master']
    },
    recursion: {
      easy: ['Factorial', 'Fibonacci', 'Power', 'GCD', 'Reverse String', 'Sum Array', 'Max Array', 'Binary Search', 'Tower Hanoi', 'Subsets'],
      medium: ['Permutations', 'Combinations', 'Subsets II', 'Palindrome Partition', 'Letter Combinations', 'Generate Parentheses', 'Word Search', 'N-Queens', 'Sudoku Solver', 'Expression Add Operators'],
      hard: ['Memoization', 'DP on Trees', 'DP on DAG', 'Divide Conquer', 'Master Theorem', 'Recurrence Solve', 'Catalan Numbers', 'Stirling Numbers', 'Bell Numbers', 'Partition Numbers'],
      boss: ['Recursion Overlord', 'Ultimate Recursion', 'Recursion Convergence', 'Final Recursion Trial', 'The Recursion Master']
    },
    tree: {
      easy: ['Inorder', 'Preorder', 'Postorder', 'Level Order', 'Max Depth', 'Min Depth', 'Symmetric', 'Same Tree', 'Invert Tree', 'Merge Trees'],
      medium: ['Path Sum', 'Path Sum II', 'Path Sum III', 'Diameter', 'LCA', 'Serialize', 'Deserialize', 'BST from Preorder', 'Validate BST', 'Kth Smallest'],
      hard: ['Tree DP', 'Rerooting', 'Centroid', 'Heavy Light', 'Link Cut', 'Euler Tour', 'Virtual Tree', 'Tree Isomorphism', 'Tree Hashing', 'Dynamic Tree'],
      boss: ['Tree Overlord', 'Ultimate Tree', 'Tree Convergence', 'Final Tree Trial', 'The Tree Master']
    },
    bst: {
      easy: ['Search BST', 'Insert BST', 'Delete BST', 'Min Value', 'Max Value', 'Validate BST', 'Range Sum', 'Closest Value', 'Kth Smallest', 'Kth Largest'],
      medium: ['LCA BST', 'Floor Ceil', 'Inorder Successor', 'Inorder Predecessor', 'Split BST', 'Merge BST', 'Balance BST', 'Recover BST', 'BST Iterator', 'BST Sequences'],
      hard: ['Treap', 'Splay Tree', 'Red-Black', 'AVL Tree', 'B-Tree', 'Segment Tree', 'Fenwick Tree', 'Order Statistic', 'Range Tree', 'Interval Tree'],
      boss: ['BST Overlord', 'Ultimate BST', 'BST Convergence', 'Final BST Trial', 'The BST Master']
    },
    heap: {
      easy: ['Min Heap', 'Max Heap', 'Heapify', 'Kth Largest', 'Kth Smallest', 'Top K Frequent', 'Merge K Lists', 'Median Stream', 'Last Stone', 'Min Cost Connect'],
      medium: ['Heap Sort', 'K Closest', 'Skyline', 'Meeting Rooms', 'Course Schedule', 'Task Scheduler', 'Reorganize String', 'Rearrange Distance', 'Min Intervals', 'Max Performance'],
      hard: ['D-ary Heap', 'Fibonacci Heap', 'Pairing Heap', 'Leftist Heap', 'Skew Heap', 'Binomial Heap', 'Brodal Queue', 'Strict Fibonacci', 'Priority Queue', 'Double-ended'],
      boss: ['Heap Overlord', 'Ultimate Heap', 'Heap Convergence', 'Final Heap Trial', 'The Heap Master']
    },
    graph: {
      easy: ['DFS', 'BFS', 'Number Islands', 'Clone Graph', 'Course Schedule', 'Pacific Atlantic', 'Keys Rooms', 'Evaluate Division', 'Redundant Connection', 'Graph Valid Tree'],
      medium: ['Dijkstra', 'Bellman-Ford', 'Floyd-Warshall', 'Topological Sort', 'Alien Dictionary', 'Course Schedule II', 'Minimum Height', 'Critical Connections', 'Network Delay', 'Cheapest Flights'],
      hard: ['MST Prim', 'MST Kruskal', 'Max Flow', 'Min Cut', 'Bipartite Match', 'Hungarian', 'Edmonds-Karp', 'Dinic', 'Push-Relabel', 'Gomory-Hu'],
      boss: ['Graph Overlord', 'Ultimate Graph', 'Graph Convergence', 'Final Graph Trial', 'The Graph Master']
    },
    dp: {
      easy: ['Climbing Stairs', 'House Robber', 'Coin Change', 'Min Cost Climbing', 'Max Subarray', 'Best Time Stock', 'Decode Ways', 'Unique Paths', 'Min Path Sum', 'Longest Increasing'],
      medium: ['Edit Distance', 'Longest Common', 'Coin Change 2', 'Partition Equal', 'Target Sum', 'Word Break', 'Interleaving', 'Distinct Subseq', 'Max Square', 'Burst Balloons'],
      hard: ['Regex Match', 'Palindrome Partition', 'Scramble String', 'Remove Boxes', 'Strange Printer', 'Cherry Pickup', 'Video Stitching', 'Merge Stones', 'Stone Game', 'Optimal BST'],
      boss: ['DP Overlord', 'Ultimate DP', 'DP Convergence', 'Final DP Trial', 'The DP Master']
    },
    tries: {
      easy: ['Implement Trie', 'Insert Search', 'Starts With', 'Word Dictionary', 'Add Search', 'Map Sum', 'Replace Words', 'Prefix Score', 'Auto Complete', 'Longest Word'],
      medium: ['Maximum XOR', 'Bitwise Trie', 'XOR Queries', 'Max Gen XOR', 'Subarray XOR', 'Min XOR', 'Trie DP', 'Suffix Trie', 'Compressed Trie', 'Persistent Trie'],
      hard: ['Aho-Corasick', 'Suffix Automaton', 'Palindromic Tree', 'Eertree', 'Minimal DFA', 'DAWG', 'AC Automaton', 'Trie Merge', 'Trie Split', 'Trie Intersection'],
      boss: ['Trie Overlord', 'Ultimate Trie', 'Trie Convergence', 'Final Trie Trial', 'The Trie Master']
    },
  };

  const titles = questionTitles[dungeonId] || questionTitles.arrays;
  
  const createQuestions = (difficulty: 'easy' | 'medium' | 'hard', count: number) => 
    Array.from({ length: count }, (_, i) => ({
      id: `${dungeonId}-${difficulty}-${i + 1}`,
      number: i + 1,
      title: titles[difficulty][i] || `${difficulty.charAt(0).toUpperCase() + difficulty.slice(1)} Problem ${i + 1}`,
      difficulty,
      xp: xpValues[difficulty],
      status: (i === 0 && difficulty === 'easy') ? 'current' : difficulty === 'easy' ? 'available' : 'locked' as QuestionStatus,
    }));

  return {
    easy: createQuestions('easy', 10),
    medium: createQuestions('medium', 10),
    hard: createQuestions('hard', 10),
    boss: Array.from({ length: 5 }, (_, i) => ({
      id: `${dungeonId}-boss-${i + 1}`,
      number: i + 1,
      title: titles.boss[i] || `Boss Challenge ${i + 1}`,
      difficulty: 'boss',
      xp: xpValues.boss + i * 25,
      status: 'locked' as QuestionStatus,
    })),
  };
}

export const dungeons: Dungeon[] = dungeonDefinitions.map((def, index) => {
  const { easy, medium, hard, boss } = generateQuestions(def.id, 10);
  const allQuestions = [...easy, ...medium, ...hard, ...boss];
  const completedCount = allQuestions.filter(q => q.status === 'completed').length;
  const totalQuestions = allQuestions.length;
  const progress = Math.round((completedCount / totalQuestions) * 100);
  const totalXP = allQuestions.reduce((sum, q) => sum + q.xp, 0);

  return {
    ...def,
    easy,
    medium,
    hard,
    boss: {
      id: `${def.id}-boss`,
      name: `${def.title} Overlord`,
      description: `Only those who master every technique may challenge the ${def.title.toLowerCase()} overlord.`,
      image: def.image,
      xpReward: 500,
      questions: boss,
    },
    totalXP,
    progress,
    completedCount,
    totalQuestions,
  };
});

export const dungeonNavigation: DungeonNavigation[] = dungeons.map((dungeon, index) => ({
  previous: index > 0 ? { id: dungeons[index - 1].id, title: dungeons[index - 1].title } : null,
  current: { id: dungeon.id, title: dungeon.title },
  next: index < dungeons.length - 1 ? { id: dungeons[index + 1].id, title: dungeons[index + 1].title } : null,
}));

export function getDungeonById(id: string): Dungeon | undefined {
  return dungeons.find(d => d.id === id);
}

export function getNavigationById(id: string): DungeonNavigation | undefined {
  return dungeonNavigation.find(n => n.current.id === id);
}