import React, { useState } from 'react'; // Added useState
import { 
  ShieldCheck, 
  FileText, 
  Handshake, 
  AlertCircle, 
  CheckCircle2, 
  ExternalLink,
  BellRing,
  Lock,
  Unlock
} from 'lucide-react';

const Terms = () => {
  // 1. SIMULATION STATE
  const [hasRead, setHasRead] = useState(false);
  const [confirmed, setConfirmed] = useState(false);

  const requirements = [
    {
      id: "01",
      title: "Enrollment & Attendance",
      desc: "Aid is awarded based on full-time enrollment (12+ hours). If you drop below 6 hours, most aid (including loans) will not disburse or may be revoked.",
      impact: "Directly affects Pell Grant and Loan eligibility."
    },
    {
      id: "02",
      title: "Reporting Outside Aid",
      desc: "You must notify the Office of Financial Aid of any scholarships, tuition assistance, or waivers received from sources outside of NC A&T.",
      impact: "Required to prevent federal over-awards."
    },
    {
      id: "03",
      title: "Satisfactory Progress (SAP)",
      desc: "By accepting aid, you agree to maintain a 2.0 GPA and 67% completion rate. Evaluation occurs at the end of every semester.",
      impact: "Failure results in loss of all future aid."
    },
    {
      id: "04",
      title: "Loan Cancellation Rights",
      desc: "You have the right to cancel all or a portion of your student loans within 14 days of the disbursement notification date.",
      impact: "Contact the Treasurer’s Office to initiate cancellation."
    }
  ];

  return (
    <div className="w-full min-h-screen bg-white font-sans pb-20">
      
      {/* HERO SECTION */}
      <header className="relative bg-[#004684] py-20 px-10 mb-8 overflow-hidden rounded-sm">
        <div className="relative z-10 max-w-4xl">
          <h4 className="nav-link-text text-[#FDB927] text-[10px] mb-4 uppercase tracking-[0.3em]">Institutional Agreement</h4>
          <h1 className="text-white text-6xl font-serif font-black leading-tight mb-6">
            Terms & <span className="text-[#FDB927]">Conditions</span>
          </h1>
          <div className="w-24 h-1.5 bg-[#FDB927] mb-8" />
        </div>
      </header>

      {/* TOP DISCLOSURE */}
      <div className="mx-4 md:mx-10 mb-12 bg-[#FDB927]/10 border-l-8 border-[#FDB927] p-8 flex gap-8 items-start rounded-sm shadow-sm">
        <BellRing className="text-[#004684] shrink-0" size={32} />
        <div>
          <h5 className="nav-link-text text-[11px] text-[#004684] mb-2 uppercase font-black">Electronic Consent</h5>
          <p className="text-sm text-slate-600 leading-relaxed max-w-3xl font-medium">
            By accepting your financial aid offer, you certify that you have read and agree to these terms.
          </p>
        </div>
      </div>

      {/* THE AGREEMENT PATHWAY */}
      <div className="relative px-4 md:px-10 mb-20">
        <div className="absolute left-[47px] top-0 bottom-0 w-0 border-l-2 border-dashed border-slate-200 z-0" />
        
        <div className="relative z-10 space-y-20">
          {requirements.map((req, i) => (
            <div key={i} className="flex gap-12 items-start group">
              <div className="relative flex items-center justify-center min-w-[16px] mt-2">
                <div className={`w-4 h-4 rounded-full bg-white border-4 z-10 shadow-sm transition-colors ${confirmed ? 'border-green-500' : 'border-[#004684]'}`} />
              </div>
              <div className="flex-1 bg-slate-50 p-8 rounded-sm border border-slate-100 transition-all">
                <h3 className="text-2xl font-serif font-black text-[#004684] mb-2">{req.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 max-w-2xl">{req.desc}</p>
                <div className="bg-white p-4 rounded-sm border-l-4 border-[#FDB927] flex items-center gap-3">
                  <AlertCircle size={16} className="text-[#004684] shrink-0" />
                  <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{req.impact}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4. SIMULATION TOGGLE & ACKNOWLEDGMENT */}
      <section className="mx-4 md:mx-10 mb-20">
        <div className={`transition-all duration-500 rounded-sm p-12 border-2 ${confirmed ? 'bg-green-50 border-green-500' : 'bg-[#004684] border-[#004684]'} text-white shadow-2xl`}>
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
                {confirmed ? <Unlock className="text-green-500" size={48} /> : <Lock className="text-[#FDB927]" size={48} />}
            </div>
            
            <h2 className={`text-4xl font-serif font-black mb-6 ${confirmed ? 'text-green-800' : 'text-white'}`}>
                {confirmed ? "Agreement Confirmed" : "Ready to Accept?"}
            </h2>

            <div className="flex flex-col items-center gap-6">
              {/* THE SIMULATION TOGGLE */}
              <label className="flex items-center gap-4 cursor-pointer group">
                <div className="relative">
                  <input 
                    type="checkbox" 
                    className="sr-only" 
                    checked={confirmed}
                    onChange={() => setConfirmed(!confirmed)}
                  />
                  <div className={`w-14 h-8 rounded-full transition-colors ${confirmed ? 'bg-green-500' : 'bg-white/20'}`} />
                  <div className={`absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition-transform ${confirmed ? 'translate-x-6' : ''}`} />
                </div>
                <span className={`nav-link-text text-xs tracking-widest ${confirmed ? 'text-green-800' : 'text-white/80'}`}>
                  I have read and understand my responsibilities
                </span>
              </label>

              {/* ACTION BUTTONS (Unlocked by Toggle) */}
              <div className="flex flex-wrap justify-center gap-4 mt-4">
                <a 
                  href="https://hub.ncat.edu/" 
                  target="_blank" 
                  rel="noreferrer"
                  className={`px-10 py-5 rounded-sm font-black text-[10px] uppercase tracking-widest transition-all flex items-center gap-2 shadow-xl ${
                    confirmed 
                    ? 'bg-green-600 text-white hover:bg-green-700' 
                    : 'bg-white/10 text-white/40 cursor-not-allowed border border-white/10'
                  }`}
                >
                  Proceed to Aggie Access <ExternalLink size={14} />
                </a>
                
                {confirmed && (
                  <button className="bg-white text-[#004684] px-10 py-5 rounded-sm font-black text-[10px] uppercase tracking-widest hover:bg-slate-100 transition-all animate-in fade-in zoom-in">
                    Download Signed PDF
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="mt-20 mx-4 md:mx-10 p-10 bg-slate-50 border border-slate-200 rounded-sm flex gap-8 items-center">
        <ShieldCheck className="text-[#004684] shrink-0" size={32} />
        <p className="text-[11px] text-slate-500 italic">
            Complies with HEA Section 485: All aid subject to funding availability and continued eligibility.
        </p>
      </footer>
    </div>
  );
};

export default Terms;