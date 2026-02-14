import React, { useState } from 'react';
import { User, Book, Briefcase, Star, Download, Trash2, Plus, FileText } from 'lucide-react';

// --- 1. Components (Steps) ---

// Navbar & Stepper
const Header = ({ step }) => (
  <div className="bg-slate-900 text-white p-6 sticky top-0 z-50 shadow-lg">
    <div className="container mx-auto flex justify-between items-center">
      <div className="flex items-center gap-2 font-bold text-2xl">
        <FileText className="text-blue-400" /> CareerCraft
      </div>
      <div className="hidden md:flex gap-2">
        {[1, 2, 3, 4, 5].map(num => (
          <div key={num} className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold border-2 ${step >= num ? 'bg-blue-500 border-blue-500' : 'border-gray-600 text-gray-400'}`}>
            {num}
          </div>
        ))}
      </div>
    </div>
  </div>
);

// Step 1: Personal Info
const PersonalInfo = ({ data, update, next }) => {
  const handleChange = (e) => update({ ...data, [e.target.name]: e.target.value });
  
  return (
    <div className="max-w-2xl mx-auto mt-10 p-8 bg-white rounded-2xl shadow-xl animate-in fade-in slide-in-from-bottom-4">
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-left"><User className="text-blue-600"/> Personal Details</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <input name="fullName" value={data.fullName} onChange={handleChange} placeholder="Full Name" className="p-4 border rounded-xl bg-gray-50 focus:ring-2 ring-blue-500 outline-none" />
        <input name="role" value={data.role} onChange={handleChange} placeholder="Job Title" className="p-4 border rounded-xl bg-gray-50 focus:ring-2 ring-blue-500 outline-none" />
        <input name="email" value={data.email} onChange={handleChange} placeholder="Email" className="p-4 border rounded-xl bg-gray-50 focus:ring-2 ring-blue-500 outline-none" />
        <input name="phone" value={data.phone} onChange={handleChange} placeholder="Phone" className="p-4 border rounded-xl bg-gray-50 focus:ring-2 ring-blue-500 outline-none" />
        <textarea name="summary" value={data.summary} onChange={handleChange} placeholder="Professional Summary" className="md:col-span-2 p-4 border rounded-xl bg-gray-50 focus:ring-2 ring-blue-500 outline-none h-32" />
      </div>
      <button onClick={next} className="w-full mt-8 bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-700 transition">Next: Education</button>
    </div>
  );
};

// Step 2: Education
const Education = ({ data, update, next, back }) => {
  const handleChange = (e) => update({ ...data, education: { ...data.education, [e.target.name]: e.target.value } });

  return (
    <div className="max-w-2xl mx-auto mt-10 p-8 bg-white rounded-2xl shadow-xl">
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-left"><Book className="text-blue-600"/> Education</h2>
      <div className="space-y-6">
        <input name="degree" value={data.education.degree} onChange={handleChange} placeholder="Degree (e.g. BCA)" className="w-full p-4 border rounded-xl bg-gray-50" />
        <input name="college" value={data.education.college} onChange={handleChange} placeholder="College / University" className="w-full p-4 border rounded-xl bg-gray-50" />
        <div className="grid grid-cols-2 gap-6">
          <input name="year" value={data.education.year} onChange={handleChange} placeholder="Year" className="p-4 border rounded-xl bg-gray-50" />
          <input name="grade" value={data.education.grade} onChange={handleChange} placeholder="CGPA" className="p-4 border rounded-xl bg-gray-50" />
        </div>
      </div>
      <div className="flex gap-4 mt-8">
        <button onClick={back} className="flex-1 bg-gray-200 py-4 rounded-xl font-bold">Back</button>
        <button onClick={next} className="flex-1 bg-blue-600 text-white py-4 rounded-xl font-bold">Next: Experience</button>
      </div>
    </div>
  );
};

// Step 3: Experience
const Experience = ({ data, update, next, back }) => {
  const [job, setJob] = useState({ title: "", company: "", year: "" });

  const addJob = () => {
    if (job.title && job.company) {
      update({ ...data, experience: [...data.experience, job] });
      setJob({ title: "", company: "", year: "" });
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-8 bg-white rounded-2xl shadow-xl">
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-left"><Briefcase className="text-blue-600"/> Experience</h2>
      <div className="mb-6 space-y-3">
        {data.experience.map((exp, i) => (
          <div key={i} className="flex justify-between items-center p-4 bg-blue-50 border rounded-xl text-left">
            <div>
              <p className="font-bold">{exp.title}</p>
              <p className="text-sm text-gray-600">{exp.company} • {exp.year}</p>
            </div>
            <button onClick={() => update({...data, experience: data.experience.filter((_, idx) => idx !== i)})} className="text-red-500"><Trash2 size={18}/></button>
          </div>
        ))}
      </div>
      <div className="bg-gray-50 p-6 rounded-xl border border-dashed border-gray-300">
        <div className="grid grid-cols-2 gap-4 mb-4">
          <input value={job.title} onChange={e => setJob({...job, title: e.target.value})} placeholder="Job Title" className="p-3 border rounded-lg" />
          <input value={job.company} onChange={e => setJob({...job, company: e.target.value})} placeholder="Company" className="p-3 border rounded-lg" />
          <input value={job.year} onChange={e => setJob({...job, year: e.target.value})} placeholder="Years" className="col-span-2 p-3 border rounded-lg" />
        </div>
        <button onClick={addJob} className="w-full bg-black text-white py-3 rounded-lg flex items-center justify-center gap-2 font-bold"><Plus size={18}/> Add Position</button>
      </div>
      <div className="flex gap-4 mt-8">
        <button onClick={back} className="flex-1 bg-gray-200 py-4 rounded-xl font-bold">Back</button>
        <button onClick={next} className="flex-1 bg-blue-600 text-white py-4 rounded-xl font-bold">Next: Skills</button>
      </div>
    </div>
  );
};

// Step 4: Skills
const Skills = ({ data, update, next, back }) => {
  const [skill, setSkill] = useState("");

  const addSkill = (e) => {
    if (e.key === 'Enter' && skill) {
      update({ ...data, skills: [...data.skills, skill] });
      setSkill("");
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-8 bg-white rounded-2xl shadow-xl">
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-left"><Star className="text-blue-600"/> Skills</h2>
      <input 
        value={skill} 
        onChange={e => setSkill(e.target.value)} 
        onKeyPress={addSkill}
        placeholder="Type skill & press Enter" 
        className="w-full p-4 border rounded-xl bg-gray-50 mb-6 focus:ring-2 ring-blue-500 outline-none" 
      />
      <div className="flex flex-wrap gap-3 mb-8">
        {data.skills.map((s, i) => (
          <span key={i} className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-bold flex items-center gap-2">
            {s} <button onClick={() => update({...data, skills: data.skills.filter((_, idx) => idx !== i)})}>×</button>
          </span>
        ))}
      </div>
      <div className="flex gap-4 mt-8">
        <button onClick={back} className="flex-1 bg-gray-200 py-4 rounded-xl font-bold">Back</button>
        <button onClick={next} className="flex-1 bg-blue-600 text-white py-4 rounded-xl font-bold">Preview Resume</button>
      </div>
    </div>
  );
};

// Step 5: Final Preview
const FinalResume = ({ data, back }) => (
  <div className="min-h-screen bg-gray-500 py-10 flex flex-col items-center">
    <div className="mb-6 flex gap-4 print:hidden">
      <button onClick={back} className="bg-white px-6 py-3 rounded-xl font-bold shadow-lg">Edit</button>
      <button onClick={() => window.print()} className="bg-blue-600 text-white px-8 py-3 rounded-xl font-bold shadow-lg flex items-center gap-2">
        <Download size={20}/> Print / PDF
      </button>
    </div>
    <div className="bg-white w-[210mm] min-h-[297mm] shadow-2xl p-12 text-left print:shadow-none print:w-full">
      <div className="border-b-2 border-gray-800 pb-8 mb-8">
        <h1 className="text-5xl font-black text-gray-900 uppercase">{data.fullName}</h1>
        <p className="text-xl text-blue-600 font-bold mt-2">{data.role}</p>
        <p className="text-gray-600 mt-2">{data.email} | {data.phone}</p>
      </div>
      <div className="mb-8">
        <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Profile</h3>
        <p className="text-gray-700 leading-relaxed">{data.summary}</p>
      </div>
      <div className="mb-8">
        <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Experience</h3>
        {data.experience.map((exp, i) => (
          <div key={i} className="mb-4">
            <h4 className="font-bold text-lg">{exp.title}</h4>
            <p className="text-blue-600">{exp.company} | {exp.year}</p>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-12">
        <div>
          <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Education</h3>
          <h4 className="font-bold">{data.education.degree}</h4>
          <p>{data.education.college} ({data.education.year})</p>
        </div>
        <div>
          <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Skills</h3>
          <div className="flex flex-wrap gap-2">
            {data.skills.map((s, i) => <span key={i} className="bg-gray-100 px-3 py-1 rounded text-sm font-bold">{s}</span>)}
          </div>
        </div>
      </div>
    </div>
  </div>
);

// --- Main App ---
export default function App() {
  const [step, setStep] = useState(1);
  const [resumeData, setResumeData] = useState({
    fullName: "", role: "", email: "", phone: "", summary: "",
    education: { degree: "", college: "", year: "", grade: "" },
    experience: [],
    skills: []
  });

  return (
    <div className="min-h-screen bg-gray-100 font-sans text-center">
      {step < 5 && <Header step={step} />}
      {step === 1 && <PersonalInfo data={resumeData} update={setResumeData} next={() => setStep(2)} />}
      {step === 2 && <Education data={resumeData} update={setResumeData} next={() => setStep(3)} back={() => setStep(1)} />}
      {step === 3 && <Experience data={resumeData} update={setResumeData} next={() => setStep(4)} back={() => setStep(2)} />}
      {step === 4 && <Skills data={resumeData} update={setResumeData} next={() => setStep(5)} back={() => setStep(3)} />}
      {step === 5 && <FinalResume data={resumeData} back={() => setStep(4)} />}
    </div>
  );
}