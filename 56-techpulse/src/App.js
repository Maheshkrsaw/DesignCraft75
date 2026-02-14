import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Clock, User, Calendar, ArrowRight, BookOpen, Hash, Flame } from 'lucide-react';

// --- 1. Heavy Content Data ---
const ARTICLES = [
  { 
    id: 1, 
    title: "The Future of AI: Beyond ChatGPT", 
    excerpt: "Artificial General Intelligence (AGI) is the next frontier. How close are we to machines that can truly think like humans?", 
    category: "Artificial Intelligence", 
    author: "Sarah Connor", 
    date: "Feb 12, 2026", 
    readTime: "5 min",
    img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 2, 
    title: "Why React 19 is a Game Changer", 
    excerpt: "With the introduction of the new Compiler and Server Components, React is shifting how we build web apps fundamentally.", 
    category: "Web Dev", 
    author: "Dan Abramov Fan", 
    date: "Feb 10, 2026", 
    readTime: "8 min",
    img: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 3, 
    title: "Cybersecurity in 2026", 
    excerpt: "As quantum computing rises, traditional encryption methods are at risk. Here is what experts are saying about safety.", 
    category: "Security", 
    author: "Elliot Alderson", 
    date: "Jan 28, 2026", 
    readTime: "6 min",
    img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 4, 
    title: "The Rise of Rust Programming", 
    excerpt: "Why are companies like Microsoft and Google rewriting their core systems in Rust? Performance meets safety.", 
    category: "Coding", 
    author: "Ferris Crab", 
    date: "Jan 25, 2026", 
    readTime: "10 min",
    img: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 5, 
    title: "Clean Code Principles for Juniors", 
    excerpt: "Writing code that works is easy. Writing code that humans can understand is the real skill. Let's discuss DRY and SOLID.", 
    category: "Web Dev", 
    author: "Uncle Bob", 
    date: "Jan 20, 2026", 
    readTime: "12 min",
    img: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 6, 
    title: "SpaceX Starship: Mars Mission", 
    excerpt: "The latest test flight has proven that interplanetary travel is closer than we think. What are the challenges ahead?", 
    category: "Space Tech", 
    author: "Elon M.", 
    date: "Feb 01, 2026", 
    readTime: "7 min",
    img: "https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&w=800&q=80"
  },
];

// --- Navbar ---
const Navbar = () => (
  <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
    <div className="container mx-auto px-6 py-4 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <div className="bg-indigo-600 p-2 rounded-lg text-white">
          <Flame size={20} />
        </div>
        <span className="text-2xl font-bold text-gray-900 tracking-tight">TechPulse</span>
      </div>
    </div>
  </nav>
);

// --- Blog Page ---
const BlogHome = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...new Set(ARTICLES.map(a => a.category))];

  const filteredArticles =
    selectedCategory === "All"
      ? ARTICLES
      : ARTICLES.filter(article => article.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      
      <div className="bg-indigo-900 text-white py-20 px-6 text-center">
        <h1 className="text-5xl font-extrabold mb-4">Insights for Developers.</h1>
        <p className="text-indigo-200 text-lg max-w-2xl mx-auto">
          Stay ahead with deep dives into AI and Web Development.
        </p>
      </div>

      <div className="container mx-auto px-6 -mt-8">
        <div className="bg-white p-4 rounded-xl shadow-lg border flex flex-wrap gap-3 justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-bold transition ${
                selectedCategory === cat
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-100 text-gray-600"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 mt-12">
        <div className="flex justify-between items-end mb-8 border-b pb-4">
          <h2 className="text-3xl font-bold flex items-center gap-2">
            <BookOpen className="text-indigo-600" />
            {selectedCategory === "All" ? "Latest Stories" : `${selectedCategory} Stories`}
          </h2>
          <span className="text-gray-500 font-medium">
            {filteredArticles.length} Articles Found
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article) => (
            <div key={article.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border flex flex-col group">
              <div className="h-56 overflow-hidden relative">
                <img
                  src={article.img}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />
                <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-sm">
                  <Hash size={12} /> {article.category}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
                  <Calendar size={14} /> {article.date} • <Clock size={14} /> {article.readTime}
                </div>

                <h3 className="text-xl font-bold mb-3 group-hover:text-indigo-600 transition">
                  {article.title}
                </h3>

                <p className="text-gray-600 text-sm mb-6 flex-1">
                  {article.excerpt}
                </p>

                <div className="flex items-center justify-between border-t pt-4 mt-auto">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                      <User size={16} />
                    </div>
                    <span className="text-sm font-semibold">{article.author}</span>
                  </div>
                  <button className="text-indigo-600 font-bold text-sm flex items-center gap-1">
                    Read More <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// --- App ---
export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<BlogHome />} />
      </Routes>
    </Router>
  );
}
