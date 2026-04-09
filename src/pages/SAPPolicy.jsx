import React, { useState } from 'react';
import { 
  ShieldCheck, 
  BarChart3, 
  Clock, 
  TrendingUp, 
  Scale, 
  FileWarning, 
  ExternalLink, 
  Lightbulb, 
  BookOpen, 
  AlertTriangle 
} from 'lucide-react';

const SAP = () => {
  // 1. STATE FOR CALCULATOR
  const [gpa, setGpa] = useState('');
  const [attempted, setAttempted] = useState('');
  const [passed, setPassed] = useState('');
  const [result, setResult] = useState(null);

  // 2. CALCULATION & SOLUTION LOGIC
  const calculateSAP = () => {
    const attemptedNum = parseFloat(attempted);
    const passedNum = parseFloat(passed);
    const gpaNum = parseFloat(gpa);

    if (isNaN(attemptedNum) || isNaN(passedNum) || isNaN(gpaNum) || attemptedNum === 0) {
      alert("Please enter valid numbers for all fields.");
      return;
    }

    const pace = ((passedNum / attemptedNum) * 100).toFixed(1);
    const pacePass = pace >= 67;
    const gpaPass = gpaNum >= 2.0;

    // Prescriptive Solutions based on NASFAA & NCAT Standards
    let solution = "";
    if (pacePass && gpaPass) {
      solution = "You are currently meeting standards! To stay eligible, continue to complete every course you start and keep your GPA above 2.0.";
    } else if (!gpaPass && pacePass) {
      solution = "Priority: Raise GPA. Visit the Center for Academic Excellence (CAE) for tutoring. Consider 'Grade Replacement' by repeating a course where you earned a D or F.";
    } else if (gpaPass && !pacePass) {
      solution = "Priority: Increase Pace. Every 'W' or 'F' grade lowers your completion rate. You must finish more classes than you withdraw from to fix this ratio.";
    } else {
      solution = "Action Required: Both GPA and Pace are below standard. Contact your Academic Advisor to discuss an 'Academic Plan'—this is required for a successful SAP Appeal.";
    }

    setResult({
      pace,
      pacePass,
      gpaPass,
      status: pacePass && gpaPass ? 'MEETING' : 'NOT MEETING',
      recommendation: solution
    });
  };

  const pillars = [
    {
      id: "01",
      title: "GPA (Qualitative)",
      requirement: "2.0 Cumulative GPA",
      desc: "Undergraduate students must maintain a minimum cumulative Grade Point Average of 2.0. Graduate students must maintain a 3.0.",
      icon: <TrendingUp className="text-[#FDB927]" size={24} />
    },
    {
      id: "02",
      title: "Pace of Progression",
      requirement: "67% Completion Rate",
      desc: "You must earn credit for at least 67% of all credit hours attempted. Attempted hours include all W, F, I, and repeated grades.",
      icon: <BarChart3 className="text-[#FDB927]" size={24} />
    },
    {
      id: "03",
      title: "Maximum Timeframe",
      requirement: "150% of Program Length",
      desc: "Financial aid covers up to 150% of the published length of your program (e.g., 180 credit hours for a 120-hour degree).",
      icon: <Clock className="text-[#FDB927]" size={24} />
    }
  ];

  return (
    <div className="w-full min-h-screen bg-white font-sans pb-20">
      
      {/* SECTION 1: BRANDED HERO */}
      <header className="relative bg-[#004684] py-20 px-10 mb-8 overflow-hidden rounded-sm">
        <div className="relative z-10 max-w-4xl">
          <h4 className="nav-link-text text-[#FDB927] text-[10px] mb-4 uppercase tracking-[0.3em]">Academic Eligibility</h4>
          <h1 className="text-white text-6xl font-serif font-black leading-tight mb-6">
            Satisfactory <span className="text-[#FDB927]">Progress</span>
          </h1>
          <div className="w-24 h-1.5 bg-[#FDB927] mb-8" />
          <p className="text-white/80 text-lg font-serif italic max-w-xl">
            Maintaining your financial aid eligibility depends on meeting these three federal academic standards.
          </p>
        </div>
      </header>

      {/* SECTION 2: MANDATORY TOP DISCLOSURE */}
      <div className="mx-4 md:mx-10 mb-12 bg-[#FDB927]/10 border-l-8 border-[#FDB927] p-8 flex gap-8 items-start rounded-sm shadow-sm">
        <Scale className="text-[#004684] shrink-0" size={32} />
        <div>
          <h5 className="nav-link-text text-[11px] text-[#004684] mb-2 uppercase font-black">Official SAP Disclosure</h5>
          <p className="text-sm text-slate-600 leading-relaxed max-w-3xl font-medium">
            Federal regulations require NC A&T to monitor academic progress. Evaluations occur at the end of **every semester**. Failure to meet standards results in Financial Aid Warning or Suspension.
          </p>
        </div>
      </div>

      {/* SECTION 3: INTERACTIVE CALCULATOR & SOLUTIONS */}
      <div className="mx-4 md:mx-10 mb-20">
        <section className="bg-white rounded-sm overflow-hidden shadow-2xl border border-slate-200">
          <div className="bg-[#004684] p-8 text-center text-white">
            <h2 className="nav-link-text text-sm tracking-widest text-[#FDB927]">Aggie Progress Tool</h2>
            <h3 className="text-3xl font-serif font-black italic">SAP Recovery Calculator</h3>
          </div>
          
          <div className="p-10 grid md:grid-cols-2 gap-12">
            {/* INPUT FORM */}
            <div className="space-y-6">
              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest mb-2 text-slate-400">Cumulative GPA</label>
                <input 
                  type="number" step="0.01" value={gpa} 
                  onChange={(e) => setGpa(e.target.value)} 
                  className="w-full p-4 bg-slate-50 border border-slate-200 rounded-sm focus:border-[#FDB927] outline-none transition-all font-bold" 
                  placeholder="e.g. 1.85" 
                />
              </div>
              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest mb-2 text-slate-400">Total Attempted Hours</label>
                <input 
                  type="number" value={attempted} 
                  onChange={(e) => setAttempted(e.target.value)} 
                  className="w-full p-4 bg-slate-50 border border-slate-200 rounded-sm focus:border-[#FDB927] outline-none transition-all font-bold" 
                  placeholder="Include F, W, and I grades" 
                />
              </div>
              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest mb-2 text-slate-400">Total Earned Hours</label>
                <input 
                  type="number" value={passed} 
                  onChange={(e) => setPassed(e.target.value)} 
                  className="w-full p-4 bg-slate-50 border border-slate-200 rounded-sm focus:border-[#FDB927] outline-none transition-all font-bold" 
                  placeholder="Only D- or higher" 
                />
              </div>
              <button 
                onClick={calculateSAP} 
                className="w-full bg-[#004684] text-[#FDB927] py-5 rounded-sm font-black text-[10px] uppercase tracking-widest hover:bg-[#003566] transition-all shadow-lg"
              >
                Calculate & View Solutions
              </button>
            </div>

            {/* DYNAMIC RESULTS BOX */}
            <div className="bg-slate-50 p-8 rounded-sm flex flex-col items-center text-center justify-center border border-slate-100">
              {!result ? (
                <div className="opacity-40 flex flex-col items-center">
                    <Lightbulb size={48} className="mb-4 text-[#004684]" />
                    <p className="text-sm font-bold uppercase tracking-widest text-slate-500">Awaiting Your Data...</p>
                </div>
              ) : (
                <div className="w-full space-y-6 animate-in fade-in duration-500">
                  <div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Estimated Completion Pace</p>
                    <p className={`text-6xl font-serif font-black ${result.pacePass ? 'text-[#004684]' : 'text-red-600'}`}>
                        {result.pace}%
                    </p>
                  </div>

                  {/* PRESCRIPTIVE SOLUTION */}
                  <div className={`p-6 rounded-sm border-t-4 shadow-sm text-left ${result.status === 'MEETING' ? 'bg-green-50 border-green-500' : 'bg-red-50 border-red-500'}`}>
                    <div className="flex items-center gap-2 mb-3">
                        <BookOpen size={18} className={result.status === 'MEETING' ? 'text-green-600' : 'text-red-600'} />
                        <span className="font-black text-[10px] uppercase tracking-widest">Action Plan</span>
                    </div>
                    <p className="text-sm text-slate-700 leading-relaxed font-medium">
                        "{result.recommendation}"
                    </p>
                  </div>

                  <div className="flex gap-2 justify-center">
                    <span className={`px-4 py-2 rounded-full text-[9px] font-black uppercase ${result.gpaPass ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                        GPA: {result.gpaPass ? 'PASS' : 'FAIL'}
                    </span>
                    <span className={`px-4 py-2 rounded-full text-[9px] font-black uppercase ${result.pacePass ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                        PACE: {result.pacePass ? 'PASS' : 'FAIL'}
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>

      {/* SECTION 4: THE THREE PILLARS (Dashed Line Design) */}
      <div className="relative px-4 md:px-10 mb-20">
        <div className="absolute left-[47px] top-0 bottom-0 w-0 border-l-2 border-dashed border-slate-200 z-0" />
        
        <div className="relative z-10 space-y-20">
          {pillars.map((pillar, i) => (
            <div key={i} className="flex gap-12 items-start">
              <div className="relative flex items-center justify-center min-w-[16px] mt-2">
                <div className="w-4 h-4 rounded-full bg-white border-4 border-[#004684] z-10 shadow-sm" />
              </div>
              
              <div className="flex-1 bg-slate-50 p-8 rounded-sm border border-slate-100 group hover:border-[#FDB927] transition-all">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-white rounded-lg shadow-sm">{pillar.icon}</div>
                  <span className="bg-[#004684] text-white px-3 py-1 text-[10px] font-black rounded-sm uppercase tracking-widest">
                    Standard {pillar.id}
                  </span>
                </div>
                <h3 className="text-2xl font-serif font-black text-[#004684] mb-2">{pillar.title}</h3>
                <p className="text-[#004684] font-black text-xs uppercase tracking-widest mb-4">{pillar.requirement}</p>
                <p className="text-slate-600 text-sm leading-relaxed max-w-2xl">{pillar.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 5: THE APPEAL PATH */}
      <section className="mx-4 md:mx-10 mb-20 bg-[#004684] text-white p-12 rounded-sm relative overflow-hidden shadow-2xl">
        <div className="relative z-10 md:flex items-center gap-16">
          <div className="flex-1">
            <h2 className="text-4xl font-serif font-black mb-4 italic">Denied Aid? <span className="text-[#FDB927]">The Appeal Path</span></h2>
            <p className="text-white/70 mb-8 max-w-2xl text-lg">
              If extenuating circumstances (injury, illness, or family emergency) prevented you from meeting SAP standards, you may submit a formal SAP Appeal.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="https://www.ncat.edu/admissions/financial-aid/sap.php" target="_blank" rel="noreferrer" className="bg-[#FDB927] text-[#004684] px-8 py-4 rounded-sm font-black text-[10px] uppercase tracking-widest hover:brightness-110 transition-all flex items-center gap-2">
                Download Appeal Form <ExternalLink size={14} />
              </a>
              <button className="border-2 border-white/20 text-white px-8 py-4 rounded-sm font-black text-[10px] uppercase tracking-widest hover:bg-white/10 transition-all">
                Check Appeal Deadlines
              </button>
            </div>
          </div>
          <div className="hidden lg:block bg-white/10 p-10 rounded-full">
            <FileWarning size={80} className="text-[#FDB927]" />
          </div>
        </div>
      </section>

      {/* SECTION 6: COMPLIANCE FOOTER */}
      <footer className="mt-20 mx-4 md:mx-10 p-10 bg-slate-50 border border-slate-200 rounded-sm flex flex-col md:flex-row gap-8 items-center">
        <ShieldCheck className="text-[#004684] shrink-0" size={32} />
        <div>
          <h5 className="nav-link-text text-[10px] text-[#004684] mb-2 uppercase tracking-widest">Regulatory Authority</h5>
          <p className="text-[11px] text-slate-500 leading-relaxed italic">
            Satisfactory Academic Progress is governed by Federal Regulation **34 CFR 668.34**. NC A&T reserves the right to amend this policy to comply with federal and state mandates. Decisions made by the SAP Appeals Committee are final.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default SAP;