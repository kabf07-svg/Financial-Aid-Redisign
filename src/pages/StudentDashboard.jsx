import React from 'react';
import { User, GraduationCap, CheckCircle, AlertTriangle, BarChart, ArrowRight } from 'lucide-react';

const StudentDashboard = ({ student }) => {
  if (!student) return <div className="p-20 text-center font-black">PLEASE LOGIN TO VIEW DASHBOARD</div>;

  return (
    <div className="p-10 bg-slate-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <header className="mb-10 flex justify-between items-end">
          <div>
            <h1 className="text-4xl font-black text-[#004684] uppercase">Welcome, {student.name}</h1>
            <p className="text-slate-500 font-bold">Banner ID: {student.id}</p>
          </div>
          <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
            <p className="text-[10px] font-black text-slate-400 uppercase">Current GPA</p>
            <p className="text-2xl font-black text-[#004684]">{student.gpa}</p>
          </div>
        </header>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 bg-[#004684] p-10 rounded-[3rem] text-white shadow-xl relative overflow-hidden">
             <BarChart className="absolute -right-10 -bottom-10 text-white/10" size={200} />
             <h3 className="text-[#FDB927] font-black uppercase text-xs mb-6">Financial Summary</h3>
             <div className="grid grid-cols-2 gap-10">
                <div><p className="text-xs opacity-60">Offered Aid</p><p className="text-3xl font-black">$18,450</p></div>
                <div><p className="text-xs opacity-60">Accepted Aid</p><p className="text-3xl font-black text-[#FDB927]">$12,000</p></div>
             </div>
          </div>

          <div className="bg-white p-8 rounded-[3rem] shadow-lg border border-slate-100">
            <h3 className="text-[#004684] font-black uppercase text-xs mb-6">Required Actions</h3>
            <div className="space-y-4">
              {['Accept Terms & Conditions', 'Complete Entrance Counseling'].map((task, i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-slate-50 rounded-xl">
                  <span className="text-xs font-bold text-slate-600">{task}</span>
                  <ArrowRight size={14} className="text-[#004684]" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;