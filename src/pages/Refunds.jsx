import React from 'react';
import { 
  AlertTriangle, 
  HelpCircle, 
  ArrowRight, 
  Building2, 
  Globe, 
  Calculator, 
  ShieldCheck, 
  Undo2,
  Receipt
} from 'lucide-react';

const Withdrawals = () => {
  const steps = [
    {
      id: "01",
      title: "Consult Your Advisor",
      desc: "Before withdrawing, meet with your academic advisor. A withdrawal can impact your 'Pace of Progression' for Satisfactory Academic Progress (SAP).",
      tag: "Academic Impact"
    },
    {
      id: "02",
      title: "The 60% Rule (R2T4)",
      desc: "If you withdraw before completing 60% of the semester, you may be required to return a portion of your federal financial aid to the university.",
      tag: "Federal Requirement"
    },
    {
      id: "03",
      title: "Check Your Balance",
      desc: "Withdrawals often create a balance on your account. Review your 'Aggie Access' account immediately after the process is finalized.",
      tag: "Financial Impact"
    }
  ];

  return (
    <div className="w-full min-h-screen bg-white font-sans pb-20">
      
      {/* 1. HERO SECTION */}
      <header className="relative bg-[#004684] py-20 px-10 mb-8 overflow-hidden rounded-sm">
        <div className="relative z-10 max-w-4xl">
          <h4 className="nav-link-text text-[#FDB927] text-[10px] mb-4 uppercase tracking-[0.3em]">Withdrawals & R2T4</h4>
          <h1 className="text-white text-6xl font-serif font-black leading-tight mb-6">
            Course <span className="text-[#FDB927]">Withdrawals</span>
          </h1>
          <div className="w-24 h-1.5 bg-[#FDB927] mb-8" />
          <p className="text-white/80 text-lg font-serif italic max-w-xl">
            Important information regarding your financial aid eligibility when leaving a course or the university.
          </p>
        </div>
      </header>

      {/* 2. MANDATORY TOP DISCLOSURE (NASFAA COMPLIANCE) */}
      <div className="mx-4 md:mx-10 mb-12 bg-[#FDB927]/10 border-l-8 border-[#FDB927] p-8 flex gap-8 items-start rounded-sm shadow-sm">
        <AlertTriangle className="text-[#004684] shrink-0" size={32} />
        <div>
          <h5 className="nav-link-text text-[11px] text-[#004684] mb-2 uppercase font-black">Mandatory R2T4 Disclosure</h5>
          <p className="text-sm text-slate-600 leading-relaxed max-w-3xl font-medium">
            Withdrawing from the University **will affect your financial aid.** If you received federal funds and withdraw before the 60% point of the term, you may owe a repayment to the U.S. Department of Education and/or North Carolina A&T.
          </p>
        </div>
      </div>

      {/* 3. TREASURER'S OFFICE REDIRECT (Primary Action) */}
      <section className="mx-4 md:mx-10 mb-16 grid md:grid-cols-2 gap-6">
        <div className="bg-[#004684] text-white p-8 rounded-sm shadow-xl flex flex-col justify-between border-b-8 border-[#FDB927]">
          <div>
            <div className="flex items-center gap-3 mb-4 text-[#FDB927]">
              <Receipt size={28} />
              <h3 className="nav-link-text text-xs tracking-widest">Refund Processing</h3>
            </div>
            <h2 className="text-2xl font-serif font-black mb-4 italic">Expecting a Refund?</h2>
            <p className="text-white/70 text-sm mb-8 leading-relaxed">
              The Office of Financial Aid determines **eligibility**, but the **Treasurer's Office** handles the actual distribution of funds. For questions about check status or direct deposit, you must contact them directly.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <a href="https://www.ncat.edu/tgc/treasurer/index.php" target="_blank" rel="noreferrer" className="bg-[#FDB927] text-[#004684] py-4 rounded-sm font-black text-[10px] uppercase tracking-widest text-center hover:brightness-110 transition-all flex items-center justify-center gap-2">
              Visit Treasurer's Website <Globe size={14} />
            </a>
            <div className="flex items-center gap-2 text-[10px] opacity-60 uppercase font-black justify-center mt-2">
              <Building2 size={12} /> Dowdy Administration Building, Suite 112
            </div>
          </div>
        </div>

        <div className="bg-slate-50 border border-slate-200 p-8 rounded-sm flex flex-col justify-center">
            <h4 className="text-[#004684] font-serif font-black text-xl mb-4">Refund Methods</h4>
            <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-white border border-slate-100 rounded-sm">
                    <Undo2 className="text-[#004684] mt-1" size={20} />
                    <p className="text-xs text-slate-600"><strong>Direct Deposit:</strong> The fastest way to receive your refund. Set this up via Aggie Access.</p>
                </div>
                <div className="flex items-start gap-4 p-4 bg-white border border-slate-100 rounded-sm">
                    <Calculator className="text-[#004684] mt-1" size={20} />
                    <p className="text-xs text-slate-600"><strong>Balance Calculation:</strong> Tuition is pro-rated only during the first week. After that, 100% of tuition is usually charged.</p>
                </div>
            </div>
        </div>
      </section>

      {/* 4. THE WITHDRAWAL PATHWAY (Timeline) */}
      <div className="relative px-4 md:px-10 mb-20">
        <div className="absolute left-[47px] top-0 bottom-0 w-0 border-l-2 border-dashed border-slate-200 z-0" />
        
        <div className="relative z-10 space-y-24">
          {steps.map((step, i) => (
            <div key={i} className="flex gap-12 items-start group">
              <div className="relative flex items-center justify-center min-w-[16px] mt-2">
                <div className="w-4 h-4 rounded-full bg-white border-4 border-[#004684] z-10 shadow-sm" />
              </div>
              
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-2">
                  <span className="nav-link-text text-[10px] text-slate-400">{step.id}</span>
                  <span className="bg-[#004684]/10 text-[#004684] px-3 py-1 text-[9px] font-black uppercase rounded-full tracking-widest">{step.tag}</span>
                </div>
                <h3 className="text-3xl font-serif font-black text-[#004684] mb-4">{step.title}</h3>
                <p className="text-slate-600 text-lg leading-relaxed mb-6 max-w-2xl">{step.desc}</p>
                <div className="flex items-center gap-2 text-[#004684] font-black text-[10px] uppercase tracking-widest border-b-2 border-[#FDB927] w-fit pb-1 cursor-pointer hover:text-[#FDB927] transition-all">
                    View Policy Details <ArrowRight size={14} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 5. FOOTER COMPLIANCE */}
      <footer className="mt-20 mx-4 md:mx-10 p-10 bg-slate-50 border border-slate-200 rounded-sm flex flex-col md:flex-row gap-8 items-center">
        <ShieldCheck className="text-[#004684] shrink-0" size={32} />
        <div>
          <h5 className="nav-link-text text-[10px] text-[#004684] mb-2 uppercase tracking-widest">Regulatory Authority</h5>
          <p className="text-[11px] text-slate-500 leading-relaxed italic">
            Course withdrawals are governed by Federal Regulation **34 CFR 668.22**. NC A&T is required to determine the amount of federal aid "earned" by the student based on the period of enrollment.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Withdrawals;