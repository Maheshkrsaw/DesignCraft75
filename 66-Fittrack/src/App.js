import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import { Activity, Dumbbell, Calendar, Timer, CheckCircle, Flame, ChevronRight, BarChart2, ArrowLeft } from 'lucide-react';

// --- 1. Data (Workouts) ---
const WORKOUTS = [
  {
    id: 1,
    title: "Full Body Crush",
    duration: "45 min",
    kcal: 320,
    level: "Intermediate",
    img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=80",
    exercises: [
      { name: "Push Ups", sets: 3, reps: 15 },
      { name: "Squats", sets: 3, reps: 20 },
      { name: "Plank", sets: 3, reps: "60s" },
      { name: "Burpees", sets: 3, reps: 10 }
    ]
  },
  {
    id: 2,
    title: "HIIT Cardio",
    duration: "30 min",
    kcal: 400,
    level: "Beginner",
    img: "https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?auto=format&fit=crop&w=800&q=80",
    exercises: [
      { name: "Jumping Jacks", sets: 4, reps: "45s" },
      { name: "High Knees", sets: 4, reps: "45s" },
      { name: "Mountain Climbers", sets: 4, reps: "45s" }
    ]
  },
  {
    id: 3,
    title: "Leg Day Destroyer",
    duration: "60 min",
    kcal: 450,
    level: "Advanced",
    img: "https://images.unsplash.com/photo-1434608519344-49d77a699ded?auto=format&fit=crop&w=800&q=80",
    exercises: [
      { name: "Barbell Squats", sets: 4, reps: 12 },
      { name: "Lunges", sets: 3, reps: 15 },
      { name: "Leg Press", sets: 4, reps: 10 }
    ]
  }
];

// --- 2. Components ---

const Sidebar = () => (
  <div className="hidden md:flex flex-col w-64 h-screen bg-black text-white p-6 border-r border-gray-800 fixed">
    <div className="flex items-center gap-2 mb-10 text-lime-400">
      <Activity size={32} />
      <span className="text-2xl font-black italic tracking-tighter">FITTRACK</span>
    </div>
    <div className="space-y-4">
      <Link to="/" className="flex items-center gap-4 hover:text-lime-400 transition p-2"><BarChart2 /> Dashboard</Link>
      <Link to="/explore" className="flex items-center gap-4 hover:text-lime-400 transition p-2"><Dumbbell /> Workouts</Link>
      <Link to="/history" className="flex items-center gap-4 hover:text-lime-400 transition p-2"><Calendar /> History</Link>
      <Link to="/bmi" className="flex items-center gap-4 hover:text-lime-400 transition p-2"><Activity /> BMI Calc</Link>
    </div>
  </div>
);

const Dashboard = () => (
  <div className="p-8 text-white text-left">
    <h1 className="text-3xl font-bold mb-2">Welcome Back, Mahesh</h1>
    <p className="text-gray-400 mb-8">Let's crush your goals today!</p>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800">
        <div className="flex justify-between items-start mb-4">
          <div className="p-3 bg-lime-400/20 text-lime-400 rounded-xl"><Flame /></div>
          <span className="text-green-500 font-bold">+12%</span>
        </div>
        <h3 className="text-3xl font-black">2,450</h3>
        <p className="text-gray-400 text-sm">Calories Burned</p>
      </div>
      <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800">
        <div className="p-3 bg-blue-500/20 text-blue-400 rounded-xl w-fit mb-4"><Timer /></div>
        <h3 className="text-3xl font-black">450 min</h3>
        <p className="text-gray-400 text-sm">Training Time</p>
      </div>
      <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800">
        <div className="p-3 bg-purple-500/20 text-purple-400 rounded-xl w-fit mb-4"><Dumbbell /></div>
        <h3 className="text-3xl font-black">12</h3>
        <p className="text-gray-400 text-sm">Workouts Completed</p>
      </div>
    </div>

    <h2 className="text-xl font-bold mb-4">Recommended for You</h2>
    <div className="bg-gradient-to-r from-lime-600 to-green-600 rounded-2xl p-8 flex justify-between items-center shadow-lg relative overflow-hidden">
      <div className="relative z-10">
        <h3 className="text-2xl font-black mb-2">Full Body Crush</h3>
        <p className="mb-6 opacity-90">45 Min • Intermediate • 320 Kcal</p>
        <Link to="/active/1" className="bg-white text-black px-6 py-3 rounded-full font-bold hover:bg-gray-200 transition">Start Now</Link>
      </div>
      <Dumbbell size={120} className="absolute right-0 opacity-20 rotate-45" />
    </div>
  </div>
);

const Explore = () => (
  <div className="p-8 text-white text-left">
    <h2 className="text-3xl font-bold mb-8">Explore Workouts</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {WORKOUTS.map(workout => (
        <div key={workout.id} className="bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 hover:border-lime-400 transition group">
          <div className="h-48 overflow-hidden relative">
            <img src={workout.img} alt="cover" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition duration-500" />
            <span className="absolute top-4 right-4 bg-black/80 text-white text-xs font-bold px-3 py-1 rounded-full">{workout.level}</span>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">{workout.title}</h3>
            <div className="flex gap-4 text-sm text-gray-400 mb-6">
              <span className="flex items-center gap-1"><Timer size={14}/> {workout.duration}</span>
              <span className="flex items-center gap-1"><Flame size={14}/> {workout.kcal} Kcal</span>
            </div>
            <Link to={`/active/${workout.id}`} className="block w-full text-center bg-gray-800 text-white py-3 rounded-xl font-bold hover:bg-lime-500 hover:text-black transition">
              View Details
            </Link>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const ActiveSession = ({ onFinish }) => {
  const navigate = useNavigate();
  const workout = WORKOUTS[0]; 
  const [currentEx, setCurrentEx] = useState(0);
  const [isResting, setIsResting] = useState(false);
  const [timer, setTimer] = useState(30);

  useEffect(() => {
    let interval;
    if (isResting && timer > 0) {
      interval = setInterval(() => setTimer(t => t - 1), 1000);
    } else if (timer === 0) {
      setIsResting(false);
      setTimer(30);
    }
    return () => clearInterval(interval);
  }, [isResting, timer]);

  const handleNextExercise = () => {
    if (currentEx < workout.exercises.length - 1) {
      setCurrentEx(currentEx + 1);
      setIsResting(false);
      setTimer(30);
    } else {
      if(window.confirm("Finish Workout?")) {
        onFinish({ ...workout, date: new Date().toLocaleDateString() });
        navigate('/history');
      }
    }
  };

  return (
    <div className="min-h-screen bg-black text-white p-6 md:p-10 flex flex-col items-center">
      <div className="w-full flex justify-between items-center mb-10 max-w-4xl">
        <button onClick={() => navigate(-1)} className="text-gray-400 hover:text-white"><ArrowLeft /></button>
        <h2 className="text-xl font-bold">{workout.title}</h2>
        <div className="w-8"></div>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center text-center max-w-lg w-full">
        {isResting ? (
          <div className="animate-in zoom-in">
            <h1 className="text-6xl font-black text-lime-400 mb-4">{timer}s</h1>
            <p className="text-2xl font-bold text-gray-400">REST TIME</p>
            <p className="mt-8 text-gray-500">Next: {workout.exercises[currentEx].name}</p>
            <button onClick={() => setTimer(0)} className="mt-8 bg-gray-800 px-6 py-2 rounded-full font-bold">Skip Rest</button>
          </div>
        ) : (
          <div className="w-full">
            <p className="text-lime-400 font-bold mb-2">Exercise {currentEx + 1}/{workout.exercises.length}</p>
            <h1 className="text-4xl md:text-5xl font-black mb-6">{workout.exercises[currentEx].name}</h1>
            <div className="grid grid-cols-2 gap-4 mb-10">
              <div className="bg-gray-900 p-6 rounded-2xl">
                <p className="text-gray-400 text-xs font-bold uppercase">Sets</p>
                <p className="text-3xl font-bold">{workout.exercises[currentEx].sets}</p>
              </div>
              <div className="bg-gray-900 p-6 rounded-2xl">
                <p className="text-gray-400 text-xs font-bold uppercase">Reps</p>
                <p className="text-3xl font-bold">{workout.exercises[currentEx].reps}</p>
              </div>
            </div>
            <button onClick={() => setIsResting(true)} className="w-full bg-lime-500 text-black py-5 rounded-2xl font-black text-xl mb-4">LOG SET</button>
            <button onClick={handleNextExercise} className="text-gray-500 font-bold hover:text-white flex items-center gap-2 mx-auto">
              Next Exercise <ChevronRight size={16}/>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

const History = ({ logs }) => (
  <div className="p-8 text-white text-left">
    <h2 className="text-3xl font-bold mb-8">Workout History</h2>
    {logs.length === 0 ? (
      <p className="text-gray-500">No workouts completed yet.</p>
    ) : (
      <div className="space-y-4">
        {logs.map((log, i) => (
          <div key={i} className="bg-gray-900 p-6 rounded-2xl border border-gray-800 flex justify-between items-center">
             <div>
               <h3 className="font-bold text-lg">{log.title}</h3>
               <p className="text-sm text-gray-400">{log.date} • {log.duration}</p>
             </div>
             <div className="text-lime-400 font-bold flex items-center gap-2">
               <CheckCircle size={20} /> Completed
             </div>
          </div>
        ))}
      </div>
    )}
  </div>
);

const BmiCalc = () => {
  const [weight, setWeight] = useState(70);
  const [height, setHeight] = useState(175);
  const bmi = (weight / ((height/100) ** 2)).toFixed(1);

  return (
    <div className="p-8 text-white flex justify-center">
      <div className="bg-gray-900 p-8 rounded-3xl border border-gray-800 w-full max-w-md text-center">
        <h2 className="text-2xl font-bold mb-6">BMI Calculator</h2>
        <div className="mb-6 text-left">
          <label className="block text-gray-400 text-sm font-bold mb-2">Weight: {weight} kg</label>
          <input type="range" min="40" max="150" value={weight} onChange={(e) => setWeight(e.target.value)} className="w-full accent-lime-500"/>
        </div>
        <div className="mb-8 text-left">
          <label className="block text-gray-400 text-sm font-bold mb-2">Height: {height} cm</label>
          <input type="range" min="140" max="220" value={height} onChange={(e) => setHeight(e.target.value)} className="w-full accent-lime-500"/>
        </div>
        <div className="bg-black p-6 rounded-2xl">
          <p className="text-gray-500 text-xs font-bold uppercase">Your BMI</p>
          <h1 className="text-6xl font-black my-2">{bmi}</h1>
          <p className={`text-xl font-bold ${bmi >= 25 ? 'text-red-500' : 'text-green-500'}`}>
            {bmi < 18.5 ? "Underweight" : bmi >= 25 ? "Overweight" : "Normal"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default function App() {
  const [history, setHistory] = useState([]);
  return (
    <Router>
      <div className="flex min-h-screen bg-black font-sans">
        <Sidebar />
        <div className="flex-1 md:ml-64">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/active/:id" element={<ActiveSession onFinish={(log) => setHistory([log, ...history])} />} />
            <Route path="/history" element={<History logs={history} />} />
            <Route path="/bmi" element={<BmiCalc />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}  