import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';
import { DollarSign, CheckSquare, Plus, Trash2, Plane, Hotel, Coffee, Camera, Sun, Briefcase, ArrowRight, Layout } from 'lucide-react';

// --- 1. Mock Data ---
const DESTINATIONS = [
  {
    id: 1,
    name: "Bali, Indonesia",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=600&q=80",
    desc: "Tropical paradise with beaches and temples.",
    price: "₹45,000",
    days: 5
  },
  {
    id: 2,
    name: "Paris, France",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=600&q=80",
    desc: "The city of love, art, and fashion.",
    price: "₹85,000",
    days: 4
  },
  {
    id: 3,
    name: "Kyoto, Japan",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=600&q=80",
    desc: "Ancient temples and cherry blossoms.",
    price: "₹90,000",
    days: 6
  }
];

// --- 2. Shared Navigation ---
const Navbar = () => (
  <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100">
    <div className="container mx-auto px-6 py-4 flex justify-between items-center">
      <Link to="/" className="flex items-center gap-2 text-rose-500">
        <Plane size={28} className="rotate-[-45deg]" />
        <span className="text-2xl font-black tracking-tighter">WanderLust</span>
      </Link>
      <div className="hidden md:flex gap-8 font-medium text-gray-600">
        <Link to="/" className="hover:text-rose-500">Explore</Link>
        <Link to="/trips" className="hover:text-rose-500">My Trips</Link>
      </div>
      <div className="w-10 h-10 bg-gray-200 rounded-full overflow-hidden">
        <img src="https://ui-avatars.com/api/?name=Mahesh+S&background=random" alt="user profile" />
      </div>
    </div>
  </nav>
);

// --- 3. Home View ---
const Home = () => (
  <div className="min-h-screen bg-gray-50 pb-20 text-left">
    <div className="relative h-[50vh] bg-gray-900 flex items-center justify-center text-center px-4">
      <img src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1" className="absolute inset-0 w-full h-full object-cover opacity-50" alt="hero background" />
      <div className="relative z-10 text-white">
        <h1 className="text-5xl md:text-7xl font-black mb-4">Plan Your Adventure</h1>
        <p className="text-xl opacity-90 mb-8">Build itineraries and track budgets with ease.</p>
        <Link to="/trips" className="bg-rose-500 text-white px-8 py-3 rounded-full font-bold hover:bg-rose-600 transition shadow-lg">Start Planning</Link>
      </div>
    </div>

    <div className="container mx-auto px-6 -mt-20 relative z-20">
      <h2 className="text-3xl font-bold text-white mb-6 drop-shadow-md">Trending Destinations</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {DESTINATIONS.map(dest => (
          <Link to={`/planner/${dest.id}`} key={dest.id} className="bg-white rounded-2xl overflow-hidden shadow-xl hover:-translate-y-2 transition duration-300 group">
            <div className="h-64 overflow-hidden"><img src={dest.image} className="w-full h-full object-cover group-hover:scale-110 transition duration-700" alt={dest.name} /></div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-2xl font-bold text-gray-800">{dest.name}</h3>
                <span className="bg-rose-100 text-rose-600 px-3 py-1 rounded-full text-xs font-bold">{dest.days} Days</span>
              </div>
              <p className="text-gray-500 mb-4">{dest.desc}</p>
              <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                <span className="text-lg font-bold text-gray-900">{dest.price}</span>
                <span className="flex items-center gap-1 text-sm font-bold text-rose-500">Plan Trip <ArrowRight size={16} /></span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </div>
);

// --- 4. Planner View ---
const Planner = () => {
  const { id } = useParams();
  const dest = DESTINATIONS.find(d => d.id === parseInt(id)) || DESTINATIONS[0];
  const [day, setDay] = useState(1);
  const [activities, setActivities] = useState([
    { id: 1, day: 1, time: "10:00 AM", title: "Visit Beach", type: "Relax" },
    { id: 2, day: 1, time: "01:00 PM", title: "Local Lunch", type: "Food" },
  ]);
  const [newActivity, setNewActivity] = useState("");

  const addActivity = () => {
    if (newActivity) {
      setActivities([...activities, { id: Date.now(), day, time: "TBD", title: newActivity, type: "Custom" }]);
      setNewActivity("");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20 text-left">
      <div className="bg-white border-b shadow-sm">
        <div className="container mx-auto px-6 py-6 flex justify-between items-end">
          <div><p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Trip to</p><h1 className="text-4xl font-black text-gray-900">{dest.name}</h1></div>
          <div className="flex gap-4">
            <Link to={`/budget/${id}`} className="flex items-center gap-1 text-gray-600 hover:text-rose-500 font-bold transition"><DollarSign size={18}/> Budget</Link>
            <Link to={`/packing/${id}`} className="flex items-center gap-1 text-gray-600 hover:text-rose-500 font-bold transition"><Briefcase size={18}/> Packing</Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8 flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-64 space-y-2">
          {Array.from({ length: dest.days }).map((_, i) => (
            <button key={i} onClick={() => setDay(i + 1)} className={`w-full text-left px-6 py-4 rounded-xl font-bold transition ${day === i + 1 ? 'bg-rose-500 text-white shadow-lg' : 'bg-white text-gray-600 hover:bg-gray-100'}`}>
              Day {i + 1}
            </button>
          ))}
        </div>

        <div className="flex-1 bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><Sun className="text-yellow-500"/> Schedule</h2>
          <div className="space-y-6 relative before:absolute before:left-4 before:top-2 before:bottom-0 before:w-0.5 before:bg-gray-100">
            {activities.filter(a => a.day === day).map(act => (
              <div key={act.id} className="relative pl-10 group flex justify-between items-center bg-gray-50 p-4 rounded-xl border border-gray-100">
                <div className="absolute left-0 top-1 w-8 h-8 bg-rose-100 rounded-full border-4 border-white flex items-center justify-center text-rose-500">
                  {act.type === 'Food' ? <Coffee size={14}/> : <Camera size={14}/>}
                </div>
                <div><p className="text-xs text-gray-400 font-bold">{act.time}</p><h3 className="font-bold text-gray-800">{act.title}</h3></div>
                <button onClick={() => setActivities(activities.filter(a => a.id !== act.id))} className="text-gray-300 hover:text-red-500 transition"><Trash2 size={18}/></button>
              </div>
            ))}
          </div>
          <div className="mt-8 flex gap-4">
            <input value={newActivity} onChange={(e) => setNewActivity(e.target.value)} placeholder="Add activity..." className="flex-1 bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-rose-500" />
            <button onClick={addActivity} className="bg-black text-white px-6 rounded-xl font-bold hover:bg-gray-800 transition"><Plus size={20}/></button>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- 5. Budget View ---
const Budget = () => {
  const categories = [
    { name: "Flights", limit: 30000, spent: 28000, icon: <Plane size={18}/> },
    { name: "Hotels", limit: 20000, spent: 15000, icon: <Hotel size={18}/> },
    { name: "Food", limit: 10000, spent: 4500, icon: <Coffee size={18}/> }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8 pt-24 text-left">
      <div className="container mx-auto max-w-2xl">
        <h1 className="text-3xl font-bold mb-8 flex items-center gap-2"><DollarSign /> Budget Tracker</h1>
        {categories.map((cat, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl border border-gray-200 mb-4 shadow-sm">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-gray-100 rounded-lg text-gray-600">{cat.icon}</div>
              <div className="flex-1"><h3 className="font-bold text-gray-800">{cat.name}</h3><p className="text-xs text-gray-400 font-bold uppercase">₹{cat.spent} of ₹{cat.limit}</p></div>
            </div>
            <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full bg-rose-500 transition-all duration-1000" style={{ width: `${(cat.spent/cat.limit)*100}%` }}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// --- 6. Packing View ---
const Packing = () => {
  const [items, setItems] = useState([{ id: 1, text: "Passport", checked: true }, { id: 2, text: "Charger", checked: false }]);
  const [newItem, setNewItem] = useState("");

  const addItem = () => {
    if (newItem) {
      setItems([...items, { id: Date.now(), text: newItem, checked: false }]);
      setNewItem("");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8 pt-24 text-left">
      <div className="container mx-auto max-w-xl bg-white p-8 rounded-3xl shadow-sm border border-gray-200">
        <h1 className="text-3xl font-bold mb-8 flex items-center gap-2"><CheckSquare /> Trip Checklist</h1>
        <div className="space-y-3 mb-6">
          {items.map(i => (
            <div key={i.id} onClick={() => setItems(items.map(item => item.id === i.id ? {...item, checked: !item.checked} : item))} className="flex items-center gap-3 p-4 hover:bg-gray-50 cursor-pointer rounded-xl border border-transparent hover:border-gray-100 transition">
              <div className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-colors ${i.checked ? 'bg-green-500 border-green-500' : 'border-gray-200'}`}>
                {i.checked && <CheckSquare size={14} className="text-white" />}
              </div>
              <span className={`text-lg ${i.checked ? 'line-through text-gray-400' : 'font-bold text-gray-700'}`}>{i.text}</span>
            </div>
          ))}
        </div>
        <div className="flex gap-2 p-2 bg-gray-50 rounded-2xl border border-gray-100">
          <input value={newItem} onChange={e => setNewItem(e.target.value)} className="flex-1 bg-transparent px-4 py-2 outline-none" placeholder="Add essential item..." />
          <button onClick={addItem} className="bg-black text-white px-6 py-3 rounded-xl font-bold hover:bg-gray-800 transition">Add</button>
        </div>
      </div>
    </div>
  );
};

// --- 7. Trips Dashboard ---
const MyTrips = () => (
    <div className="min-h-screen bg-gray-50 p-8 pt-24 text-left">
        <div className="container mx-auto max-w-4xl">
            <h1 className="text-3xl font-bold mb-8 flex items-center gap-2"><Layout /> My Adventures</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {DESTINATIONS.slice(0, 2).map((dest, i) => (
                    <div key={dest.id} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 flex gap-6 hover:shadow-md transition">
                        <img src={dest.image} className="w-24 h-24 rounded-xl object-cover shadow-sm" alt="trip thumb"/>
                        <div className="flex flex-col justify-center">
                            <span className={`text-[10px] font-bold px-2 py-1 rounded w-fit mb-2 uppercase tracking-tighter ${i === 0 ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'}`}>{i === 0 ? 'Upcoming' : 'Past'}</span>
                            <h3 className="text-xl font-bold text-gray-800">{dest.name}</h3>
                            <Link to={`/planner/${dest.id}`} className="text-rose-500 font-bold text-sm block mt-2 hover:underline">View Itinerary</Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

// --- 8. Main App Logic ---
export default function App() {
  return (
    <Router>
      <div className="font-sans text-gray-900 bg-gray-50 min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/planner/:id" element={<Planner />} />
          <Route path="/budget/:id" element={<Budget />} />
          <Route path="/packing/:id" element={<Packing />} />
          <Route path="/trips" element={<MyTrips />} />
        </Routes>
      </div>
    </Router>
  );
}