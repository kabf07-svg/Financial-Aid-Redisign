import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Users, 
  EyeOff, 
  ExternalLink, 
  CheckCircle2, 
  ClipboardList,
  Lock,
  ArrowLeft
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PrivacyPolicy = () => {
  const [acknowledged, setAcknowledged] = useState(false);
  const navigate = useNavigate();

  const ferpaRights = [
    {
      title: "Right to Inspect",
      desc: "Students have the right to inspect and review their educational records within 45 days of the day the University receives a request for access."
    },
    {
      title: "Right to Amend",
      desc: "Students have the right to request an amendment of records they believe are inaccurate, misleading, or otherwise in violation of their privacy rights."
    },
    {
      title: "Right to Consent",
      desc: "Students have the right to provide written consent before the University discloses personally identifiable information (PII), except where FERPA authorizes disclosure without consent."
    },
    {
      title: "Right to File a Complaint",
      desc: "Students have the right to file a complaint with the U.S. Department of Education concerning alleged failures by the University to comply with FERPA requirements."
    }
  ];

  return (
    <div className="w-full bg-white font-sans pb-20 animate-in fade-in duration-700">
      
      {/* 1. INSTITUTIONAL HERO BANNER */}
      <header className="relative bg-[#004684] py-20 px-10 overflow-hidden rounded-sm mb-12">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#FDB927]/10 -skew-x-12 transform translate-x-20" />
        <div className="relative z-10 max-w-4xl">
          <h4 className="nav-link-text text-[#FDB927] text-[10px] mb-4 uppercase tracking-[0.4em] font-black">
            Data Protection & Compliance
          </h4>
          <h1 className="text-white text-6xl font-serif font-black leading-tight mb-6">
            Privacy Policy <br /> <span className="text-[#FDB927]">& FERPA</span>
          </h1>
          <div className="w-24 h-1.5 bg-[#FDB927] mb-8" />
          <p className="text-white/80 text-lg max-w-2xl font-medium leading-relaxed">
            North Carolina A&T State University is committed to protecting the privacy of our 
            students' educational and financial records in accordance with federal law.
          </p>
        </div>
      </header>

      {/* 2. NASFAA COMPLIANCE BLOCK */}
      <section className="mx-4 md:mx-10 mb-16 bg-slate-50 border-l-8 border-[#004684] p-8 flex items-start gap-6 shadow-sm">
        <div className="p-3 bg-[#004684] text-[#FDB927] rounded-full">
          {/* FIXED ICON: ShieldCheck instead of FileShield */}
          <ShieldCheck size={24} />
        </div>
        <div>
          <h5 className="nav-link-text text-[11px] text-[#004684] mb-2 uppercase font-black">Financial Aid Data Security</h5>
          <p className="text-sm text-slate-600 leading-relaxed max-w-4xl">
            In alignment with **NASFAA Standards**, the Office of Financial Aid ensures that all 
            FAFSA data is used solely for the administration of aid and is only shared with authorized 
            university officials.
          </p>
        </div>
      </section>

      {/* 3. FERPA RIGHTS GRID */}
      <section className="px-4 md:px-10 mb-20">
        <h2 className="text-3xl font-serif font-black text-[#004684] mb-10 text-center uppercase tracking-tight">Annual FERPA Notification</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ferpaRights.map((right, idx) => (
            <div key={idx} className="bg-white border border-slate-200 p-8 rounded-sm hover:border-[#FDB927] transition-all group">
              <h3 className="text-xl font-serif font-black text-[#004684] mb-4 flex items-center gap-3">
                <div className="w-2 h-6 bg-[#FDB927] group-hover:h-8 transition-all" />
                {right.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {right.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. DIRECTORY INFO SECTION */}
      <section className="mx-4 md:mx-10 mb-20 bg-[#004684] p-12 rounded-sm text-white">
        <div className="max-w-4xl">
          <div className="flex items-center gap-4 mb-8">
            <Users className="text-[#FDB927]" size={32} />
            <h2 className="text-3xl font-serif font-black uppercase tracking-tight">Directory Information</h2>
          </div>
          <p className="text-white/80 text-sm leading-relaxed mb-8">
            NC A&T may release "Directory Information" without prior consent unless a formal 
            request to withhold it is submitted. This includes:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-[10px] font-black uppercase tracking-widest text-[#FDB927]">
            <span>• Name & Address</span>
            <span>• Email Address</span>
            <span>• Enrollment Status</span>
            <span>• Major Study Field</span>
            <span>• Degrees & Awards</span>
            <span>• Dates of Attendance</span>
          </div>
        </div>
      </section>

      {/* 5. FINAL ACKNOWLEDGMENT SECTION */}
      <section className="mx-4 md:mx-10 mt-16 p-10 border-2 border-dashed border-slate-200 rounded-sm bg-slate-50 transition-all duration-500">
        <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
          <div className={`p-5 rounded-full mb-6 transition-all duration-500 ${
            acknowledged ? 'bg-green-100 text-green-600 scale-110' : 'bg-[#004684]/10 text-[#004684]'
          }`}>
            <ClipboardList size={36} />
          </div>
          
          <h3 className="text-3xl font-serif font-black text-[#004684] mb-4 uppercase tracking-tight">
            Acknowledge Privacy Rights
          </h3>
          <p className="text-sm text-slate-500 mb-10 leading-relaxed max-w-xl">
            By checking the box below, you confirm that you have been notified of your rights 
            under the **FERPA Act of 1974** and understand the University's data protection 
            standards as required by NASFAA.
          </p>

          <label className="flex items-center gap-4 cursor-pointer group mb-4">
            <div className="relative">
              <input 
                type="checkbox" 
                className="sr-only" 
                checked={acknowledged}
                onChange={() => setAcknowledged(!acknowledged)}
              />
              <div className={`w-10 h-10 rounded border-2 flex items-center justify-center transition-all duration-300 ${
                acknowledged ? 'bg-green-500 border-green-500' : 'bg-white border-slate-300 group-hover:border-[#004684]'
              }`}>
                {acknowledged && <CheckCircle2 className="text-white" size={24} />}
              </div>
            </div>
            <span className={`nav-link-text text-xs tracking-[0.2em] font-black transition-colors ${
              acknowledged ? 'text-green-700' : 'text-slate-600 group-hover:text-[#004684]'
            }`}>
              {acknowledged ? "THANK YOU, ACKNOWLEDGED" : "I ACKNOWLEDGE MY PRIVACY RIGHTS"}
            </span>
          </label>

          {/* Conditional Return Button */}
          <div className={`mt-8 transition-all duration-500 transform ${
            acknowledged ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
          }`}>
             <button 
               onClick={() => navigate('/welcome')}
               className="bg-[#004684] text-white px-10 py-4 rounded-sm font-black text-[11px] uppercase tracking-[0.25em] hover:bg-[#FDB927] hover:text-[#004684] transition-all shadow-2xl flex items-center gap-3"
             >
               <ArrowLeft size={16} /> Return to Financial Aid Hub
             </button>
          </div>
        </div>
      </section>

      {/* FINAL COMPLIANCE BADGE */}
      <div className="mt-16 text-center border-t border-slate-100 pt-10">
        <p className="text-[10px] font-black text-slate-300 uppercase tracking-[0.4em]">
          Official University Disclosure • NCAT-FERPA-2026
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;