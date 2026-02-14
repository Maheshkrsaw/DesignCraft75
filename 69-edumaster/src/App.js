import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';
import { BookOpen, PlayCircle, Award, MessageSquare, Search, Layout, User, Lock, Clock, FileText } from 'lucide-react';

// --- 1. Mock Data ---
const COURSES = [
  {
    id: 1,
    title: "Full Stack Web Development",
    instructor: "Mahesh Singh",
    duration: "40 Hours",
    progress: 65,
    totalLessons: 20,
    completedLessons: 13,
    img: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&w=600&q=80",
    modules: [
      { id: 101, title: "Intro to React", duration: "10:00", type: "video", locked: false },
      { id: 102, title: "JSX & Props", duration: "15:30", type: "video", locked: false },
      { id: 103, title: "State Management", duration: "20:00", type: "video", locked: true },
      { id: 104, title: "React Quiz", duration: "5:00", type: "quiz", locked: true }
    ]
  },
  {
    id: 2,
    title: "UI/UX Design Masterclass",
    instructor: "Sarah Design",
    duration: "25 Hours",
    progress: 10,
    totalLessons: 15,
    completedLessons: 2,
    img: "https://images.unsplash.com/photo-1586717791821-3f44a5638d48?auto=format&fit=crop&w=600&q=80",
    modules: []
  },
  {
    id: 3,
    title: "Python for Data Science",
    instructor: "Amit Py",
    duration: "50 Hours",
    progress: 0,
    totalLessons: 30,
    completedLessons: 0,
    img: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&w=600&q=80",
    modules: []
  }
];

// --- 2. Components ---

const Sidebar = () => (
  <div className="hidden md:flex flex-col w-64 h-screen bg-slate-900 text-slate-300 p-4 border-r border-slate-800 fixed">
    <div className="flex items-center gap-3 mb-10 text-white px-2">
      <div className="bg-indigo-600 p-2 rounded-lg"><BookOpen size={24}/></div>
      <span className="text-xl font-bold">EduMaster</span>
    </div>
    
    <div className="space-y-2">
      <Link to="/" className="flex items-center gap-3 px-4 py-3 hover:bg-slate-800 rounded-xl transition text-sm font-medium"><Layout size={18}/> Dashboard</Link>
      <Link to="/courses" className="flex items-center gap-3 px-4 py-3 hover:bg-slate-800 rounded-xl transition text-sm font-medium"><Search size={18}/> Browse Courses</Link>
      <Link to="/community" className="flex items-center gap-3 px-4 py-3 hover:bg-slate-800 rounded-xl transition text-sm font-medium"><MessageSquare size={18}/> Community</Link>
      <Link to="/certificates" className="flex items-center gap-3 px-4 py-3 hover:bg-slate-800 rounded-xl transition text-sm font-medium"><Award size={18}/> Certificates</Link>
      <Link to="/profile" className="flex items-center gap-3 px-4 py-3 hover:bg-slate-800 rounded-xl transition text-sm font-medium"><User size={18}/> Profile</Link>
    </div>

    <div className="mt-auto bg-slate-800 p-4 rounded-xl">
      <p className="text-xs text-slate-400 mb-2">Storage Used</p>
      <div className="w-full bg-slate-700 h-2 rounded-full mb-2">
        <div className="bg-indigo-500 h-2 rounded-full w-[75%]"></div>
      </div>
      <p className="text-xs font-bold text-white">7.5 GB / 10 GB</p>
    </div>
  </div>
);

const Dashboard = () => (
  <div className="p-8 text-left">
    <h1 className="text-2xl font-bold text-slate-800 mb-2">Welcome back, Mahesh! 👋</h1>
    <p className="text-slate-500 mb-8">You have 2 assignments pending this week.</p>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div className="bg-indigo-600 text-white p-6 rounded-2xl shadow-lg">
        <div className="flex justify-between items-start mb-4">
          <BookOpen className="opacity-80"/>
          <span className="bg-white/20 text-xs px-2 py-1 rounded">In Progress</span>
        </div>
        <h3 className="text-3xl font-bold">4</h3>
        <p className="text-indigo-200 text-sm">Active Courses</p>
      </div>
      <div className="bg-white p-6 rounded-2xl border shadow-sm">
        <Clock className="text-orange-500 mb-4"/>
        <h3 className="text-3xl font-bold text-slate-800">12h</h3>
        <p className="text-slate-500 text-sm">Learning Time</p>
      </div>
      <div className="bg-white p-6 rounded-2xl border shadow-sm">
        <Award className="text-green-500 mb-4"/>
        <h3 className="text-3xl font-bold text-slate-800">2</h3>
        <p className="text-slate-500 text-sm">Certificates Earned</p>
      </div>
    </div>

    <h2 className="text-xl font-bold text-slate-800 mb-6">Continue Learning</h2>
    <div className="space-y-4">
      {COURSES.slice(0, 2).map(course => (
        <div key={course.id} className="bg-white p-4 rounded-xl border flex gap-4 items-center">
          <img src={course.img} className="w-20 h-20 rounded-lg object-cover" alt="course"/>
          <div className="flex-1">
            <h3 className="font-bold text-slate-800">{course.title}</h3>
            <div className="w-full bg-slate-100 h-2 rounded-full my-2">
               <div className="bg-indigo-600 h-2 rounded-full" style={{width: `${course.progress}%`}}></div>
            </div>
            <p className="text-xs text-slate-500">{course.progress}% Complete</p>
          </div>
          <Link to={`/classroom/${course.id}`} className="bg-slate-900 text-white p-3 rounded-lg"><PlayCircle size={20}/></Link>
        </div>
      ))}
    </div>
  </div>
);

const Catalog = () => (
  <div className="p-8 text-left">
    <div className="flex justify-between items-center mb-8">
      <h2 className="text-2xl font-bold text-slate-800">Explore Courses</h2>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {COURSES.map(course => (
        <div key={course.id} className="bg-white rounded-2xl overflow-hidden border shadow-sm hover:shadow-md transition">
          <img src={course.img} className="h-40 w-full object-cover" alt="cover"/>
          <div className="p-5">
            <h3 className="font-bold text-lg text-slate-800">{course.title}</h3>
            <p className="text-sm text-slate-500 mb-4">by {course.instructor}</p>
            <button className="w-full border border-indigo-600 text-indigo-600 py-2 rounded-lg font-bold">View Details</button>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const Classroom = () => {
  const { id } = useParams();
  const course = COURSES.find(c => c.id === parseInt(id));
  const [activeModule, setActiveModule] = useState(course?.modules[0]);

  if (!course) return <div className="p-10">Course not found...</div>;

  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden text-left">
      <div className="flex-1 overflow-y-auto p-6">
        <div className="aspect-video bg-black rounded-2xl mb-6 flex items-center justify-center shadow-lg">
           <PlayCircle size={64} className="text-white opacity-80 cursor-pointer"/>
        </div>
        <h1 className="text-2xl font-bold text-slate-800">{activeModule?.title}</h1>
        <p className="text-slate-500 mb-6">Module {activeModule?.id}</p>
        <div className="bg-white p-6 rounded-2xl border">
           <h3 className="font-bold mb-4">Lesson Notes</h3>
           <p className="text-slate-600 text-sm">Fundamentals of {activeModule?.title} are covered here.</p>
        </div>
      </div>
      <div className="w-80 bg-white border-l flex flex-col">
        <div className="p-6 border-b">
          <h3 className="font-bold">Course Content</h3>
        </div>
        <div className="flex-1 overflow-y-auto">
          {course.modules.map((mod) => (
            <div 
              key={mod.id} 
              onClick={() => !mod.locked && setActiveModule(mod)}
              className={`p-4 border-b cursor-pointer flex items-center gap-3 ${activeModule?.id === mod.id ? 'bg-indigo-50 border-l-4 border-l-indigo-600' : ''} ${mod.locked ? 'opacity-50' : ''}`}
            >
              {mod.locked ? <Lock size={16}/> : mod.type === 'quiz' ? <FileText size={16}/> : <PlayCircle size={16}/>}
              <div>
                <p className="text-sm font-medium">{mod.title}</p>
                <p className="text-xs text-slate-400">{mod.duration}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Certificate = () => (
  <div className="p-8 flex flex-col items-center">
    <div className="bg-white p-12 rounded-xl border-t-8 border-indigo-600 shadow-xl max-w-2xl w-full text-center">
      <Award size={64} className="text-indigo-600 mx-auto mb-4"/>
      <h1 className="text-3xl font-bold mb-8">Certificate of Completion</h1>
      <h2 className="text-2xl font-bold text-indigo-700">Mahesh Singh</h2>
      <p className="mt-4">Successfully completed Full Stack Development</p>
    </div>
  </div>
);

export default function App() {
  return (
    <Router>
      <div className="flex min-h-screen bg-slate-50 font-sans">
        <Sidebar />
        <div className="flex-1 md:ml-64">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/courses" element={<Catalog />} />
            <Route path="/classroom/:id" element={<Classroom />} />
            <Route path="/certificates" element={<Certificate />} />
            <Route path="/community" element={<div className="p-10">Community Forum</div>} />
            <Route path="/profile" element={<div className="p-10">Mahesh's Profile</div>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}