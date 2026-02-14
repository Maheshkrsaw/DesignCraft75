import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, useParams } from 'react-router-dom';
import { Search, MapPin, Briefcase, DollarSign, Filter, Bookmark, Upload, LayoutDashboard } from 'lucide-react';

// --- 1. Dummy Data (Job Database) ---
const JOBS = [
  { id: 1, title: "Senior React Developer", company: "Google", location: "Bangalore", type: "Full Time", salary: "25L - 35L", remote: false, posted: "2 days ago", logo: "G", desc: "Expert in React.js and Tailwind CSS." },
  { id: 2, title: "Frontend Engineer", company: "Amazon", location: "Hyderabad", type: "Full Time", salary: "18L - 25L", remote: false, posted: "5 days ago", logo: "A", desc: "Build the next gen shopping experience." },
  { id: 3, title: "Remote UI/UX Designer", company: "Spotify", location: "Remote", type: "Contract", salary: "12L - 18L", remote: true, posted: "1 day ago", logo: "S", desc: "Design interfaces for our music app." },
  { id: 4, title: "Backend Developer (Node)", company: "Swiggy", location: "Bangalore", type: "Full Time", salary: "20L - 30L", remote: false, posted: "Just now", logo: "Sw", desc: "Scale our delivery infrastructure." },
  { id: 5, title: "Product Manager", company: "Cred", location: "Mumbai", type: "Full Time", salary: "30L - 50L", remote: false, posted: "3 days ago", logo: "C", desc: "Lead fintech product vision." },
  { id: 6, title: "React Intern", company: "TechStart", location: "Remote", type: "Internship", salary: "15k/mo", remote: true, posted: "1 week ago", logo: "T", desc: "Learn and grow with our startup." },
];

// --- 2. Components ---

const Navbar = () => (
  <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
    <div className="container mx-auto px-6 py-4 flex justify-between items-center">
      <Link to="/" className="flex items-center gap-2 text-indigo-600">
        <Briefcase size={28} strokeWidth={2.5} />
        <span className="text-2xl font-black tracking-tighter">JobHunt</span>
      </Link>
      <div className="hidden md:flex gap-8 font-medium text-gray-600">
        <Link to="/jobs" className="hover:text-indigo-600">Find Jobs</Link>
        <Link to="/dashboard" className="hover:text-indigo-600">My Dashboard</Link>
        <Link to="/saved" className="hover:text-indigo-600">Saved</Link>
      </div>
      <button className="bg-indigo-600 text-white px-5 py-2 rounded-full font-bold hover:bg-indigo-700">Post a Job</button>
    </div>
  </nav>
);

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-slate-50 min-h-screen text-center">
      <div className="bg-indigo-900 text-white py-24 px-6">
        <h1 className="text-5xl font-black mb-6">Find Your Dream Job</h1>
        <div className="bg-white p-2 rounded-full max-w-2xl mx-auto flex shadow-2xl">
          <div className="flex-1 flex items-center px-6 border-r">
            <Search className="text-gray-400" />
            <input className="w-full p-3 outline-none text-gray-800" placeholder="Job title" />
          </div>
          <button onClick={() => navigate('/jobs')} className="bg-indigo-600 text-white px-8 py-3 rounded-full font-bold">Search</button>
        </div>
      </div>
    </div>
  );
};

const JobList = ({ saved, toggleSave }) => {
  const [filterType, setFilterType] = useState("All");
  const filteredJobs = JOBS.filter(job => {
    if (filterType === "All") return true;
    if (filterType === "Remote") return job.remote;
    return job.type === filterType;
  });

  return (
    <div className="container mx-auto px-6 py-10 flex flex-col md:flex-row gap-8 text-left">
      <div className="w-full md:w-1/4">
        <div className="bg-white p-6 rounded-xl border border-gray-200 sticky top-24">
          <h3 className="font-bold mb-4 flex items-center gap-2"><Filter size={18}/> Filters</h3>
          <div className="space-y-3">
            {["All", "Full Time", "Remote", "Internship"].map(t => (
              <label key={t} className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="type" checked={filterType === t} onChange={() => setFilterType(t)} /> {t}
              </label>
            ))}
          </div>
        </div>
      </div>
      <div className="flex-1 space-y-4">
        {filteredJobs.map(job => (
          <div key={job.id} className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg relative">
            <div className="flex gap-4">
              <div className="w-16 h-16 bg-indigo-50 rounded-lg flex items-center justify-center text-indigo-600 font-black">{job.logo}</div>
              <div className="flex-1">
                <Link to={`/job/${job.id}`} className="text-xl font-bold hover:text-indigo-600">{job.title}</Link>
                <p className="text-gray-500">{job.company}</p>
                <div className="flex gap-4 mt-3 text-sm text-gray-500">
                  <span className="flex items-center gap-1"><MapPin size={14}/> {job.location}</span>
                  <span className="flex items-center gap-1"><DollarSign size={14}/> {job.salary}</span>
                </div>
              </div>
            </div>
            <button onClick={() => toggleSave(job.id)} className="absolute top-6 right-6">
              <Bookmark className={saved.includes(job.id) ? "fill-indigo-600 text-indigo-600" : "text-gray-400"} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

const JobDetail = ({ applications }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const job = JOBS.find(j => j.id === parseInt(id));
  const hasApplied = applications.some(app => app.jobId === parseInt(id));

  if (!job) return <div className="p-10 text-center">Job not found</div>;

  return (
    <div className="container mx-auto px-6 py-10 max-w-4xl text-left">
      <div className="bg-white p-8 rounded-2xl shadow-sm border">
        <div className="flex justify-between items-start mb-6">
          <h1 className="text-3xl font-bold">{job.title}</h1>
          {hasApplied ? (
             <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full font-bold">Applied</span>
          ) : (
            <button onClick={() => navigate(`/apply/${job.id}`)} className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-bold">Apply Now</button>
          )}
        </div>
        <p className="text-gray-600">{job.desc}</p>
      </div>
    </div>
  );
};

const ApplyForm = ({ submitApplication }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const job = JOBS.find(j => j.id === parseInt(id));

  const handleSubmit = (e) => {
    e.preventDefault();
    submitApplication(job);
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 flex justify-center text-left">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-lg max-w-lg w-full space-y-4">
        <h2 className="text-2xl font-bold">Apply for {job?.title}</h2>
        <input required className="w-full p-3 border rounded-lg" placeholder="Full Name" />
        <div className="border-2 border-dashed rounded-lg p-6 text-center text-gray-500">
          <Upload className="mx-auto mb-2"/> Upload Resume
        </div>
        <button className="w-full bg-indigo-600 text-white py-4 rounded-xl font-bold">Submit</button>
      </form>
    </div>
  );
};

const Dashboard = ({ applications }) => (
  <div className="container mx-auto px-6 py-10 text-left">
    <h1 className="text-3xl font-bold mb-8 flex items-center gap-2"><LayoutDashboard/> Dashboard</h1>
    <div className="bg-white rounded-2xl border overflow-hidden">
      <table className="w-full">
        <thead className="bg-gray-50 border-b">
          <tr><th className="p-4">Company</th><th className="p-4">Role</th><th className="p-4">Status</th></tr>
        </thead>
        <tbody className="divide-y">
          {applications.map((app, i) => (
            <tr key={i}><td className="p-4 font-bold">{app.company}</td><td className="p-4">{app.title}</td><td className="p-4 text-yellow-600 font-bold">In Review</td></tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

const SavedJobs = ({ saved }) => (
  <div className="container mx-auto px-6 py-10 text-left">
    <h1 className="text-3xl font-bold mb-8 flex items-center gap-2"><Bookmark/> Saved</h1>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {JOBS.filter(j => saved.includes(j.id)).map(job => (
        <div key={job.id} className="bg-white p-6 rounded-xl border">
          <h3 className="font-bold">{job.title}</h3>
          <p className="text-gray-500">{job.company}</p>
          <Link to={`/job/${job.id}`} className="text-indigo-600 font-bold text-sm">View Details</Link>
        </div>
      ))}
    </div>
  </div>
);

export default function App() {
  const [applications, setApplications] = useState([]);
  const [saved, setSaved] = useState([]);

  return (
    <Router>
      <div className="font-sans text-gray-900 bg-gray-50 min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jobs" element={<JobList saved={saved} toggleSave={(id) => setSaved(s => s.includes(id) ? s.filter(x => x !== id) : [...s, id])} />} />
          <Route path="/job/:id" element={<JobDetail applications={applications} />} />
          <Route path="/apply/:id" element={<ApplyForm submitApplication={(job) => setApplications([...applications, { ...job, jobId: job.id }])} />} />
          <Route path="/dashboard" element={<Dashboard applications={applications} />} />
          <Route path="/saved" element={<SavedJobs saved={saved} />} />
        </Routes>
      </div>
    </Router>
  );
}