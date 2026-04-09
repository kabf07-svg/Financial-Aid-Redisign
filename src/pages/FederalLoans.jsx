import React, { useState } from 'react';
import { Landmark, AlertCircle, ShieldCheck, ExternalLink, HelpCircle, ArrowRight, FileText, Calculator } from 'lucide-react';

const Loans = () => {
  // Calculator State
  const [loanAmount, setLoanAmount] = useState(5500);
  const [interestRate, setInterestRate] = useState(6.53); 
  const [term, setTerm] = useState(10); 

  const calculateMonthly = () => {
    const principal = parseFloat(loanAmount);
    const calculatedInterest = parseFloat(interestRate) / 100 / 12;
    const calculatedPayments = parseFloat(term) * 12;
    const x = Math.pow(1 + calculatedInterest, calculatedPayments);
    const monthly = (principal * x * calculatedInterest) / (x - 1);
    return isFinite(monthly) ? monthly.toFixed(2) : "0.00";
  };

  const loanTypes = [
    {
      id: "01",
      title: "Federal Direct Subsidized",
      desc: "Available to undergraduate students with financial need. The U.S. Department of Education pays the interest while you are in school at least half-time.",
      tip: "Best Option: No interest accumulation during enrollment.",
      tag: "Need-Based",
      link: "https://studentaid.gov/understand-aid/types/loans/subsidized-unsubsidized"
    },
    {
      id: "02",
      title: "Federal Direct Unsubsidized",
      desc: "Available to both undergraduate and graduate students; there is no requirement to demonstrate financial need. Interest begins accruing immediately.",
      tip: "Pro-Tip: Pay the interest while in school to avoid 'Capitalization'.",
      tag: "Non-Need-Based",
      link: "https://studentaid.gov/understand-aid/types/loans/subsidized-unsubsidized"
    },
    {
      id: "03",
      title: "Federal Direct PLUS Loan",
      desc: "Credit-based loans available to parents of dependent undergraduate students and professional students.",
      tip: "Requires a separate application and credit check at studentaid.gov.",
      tag: "Credit-Based",
      link: "https://studentaid.gov/plus-app/"
    }
  ];

  return (
    <div className="w-full min-h-screen bg-white font-sans pb-20">
      
      {/* 1. HERO SECTION */}
      <header className="relative bg-[#004684] py-20 px-10 mb-8 overflow-hidden rounded-sm">
        <div className="relative z-10 max-w-4xl">
          <h4 className="nav-link-text text-[#FDB927] text-[10px] mb-4 uppercase tracking-[0.3em]">Self-Help Aid</h4>
          <h1 className="text-white text-6xl font-serif font-black leading-tight mb-6">
            Federal <span className="text-[#FDB927]">Loans</span>
          </h1>
          <div className="w-24 h-1.5 bg-[#FDB927] mb-8" />
        </div>
      </header>

      {/* 2. COMPLIANCE ALERT: Mandatory Disclosure (NASFAA Required Placement) */}
      <div className="mx-4 md:mx-10 mb-16 bg-[#FDB927]/10 border-l-8 border-[#FDB927] p-8 flex gap-8 items-start rounded-sm shadow-sm">
        <AlertCircle className="text-[#004684] shrink-0" size={32} />
        <div>
          <h5 className="nav-link-text text-[11px] text-[#004684] mb-2 uppercase font-black">Mandatory Loan Disclosure</h5>
          <p className="text-sm text-slate-600 leading-relaxed max-w-3xl font-medium">
            Loans are **legal obligations** that must be repaid with interest. [North Carolina A&T](https://www.ncat.edu/admissions/financial-aid/loans.php) encourages students to borrow only what is necessary for educational expenses. Aid cannot disburse until Entrance Counseling and a Master Promissory Note (MPN) are completed.
          </p>
        </div>
      </div>

      {/* 3. LOAN OPTIONS WITH ACTION BUTTONS */}
      <div className="relative px-4 md:px-10 mb-20">
        <div className="absolute left-[47px] top-0 bottom-0 w-0 border-l-2 border-dashed border-slate-200 z-0" />
        
        <div className="relative z-10 space-y-24">
          {loanTypes.map((loan, i) => (
            <div key={i} className="flex gap-12 items-start">
              <div className="relative flex items-center justify-center min-w-[16px] mt-2">
                <div className="w-4 h-4 rounded-full bg-white border-4 border-[#004684] z-10 shadow-sm" />
              </div>
              
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-2">
                  <span className="nav-link-text text-[10px] text-slate-400">{loan.id}</span>
                  <span className="bg-[#004684]/10 text-[#004684] px-3 py-1 text-[9px] font-black uppercase rounded-full">{loan.tag}</span>
                </div>
                <h3 className="text-3xl font-serif font-black text-[#004684] mb-4">{loan.title}</h3>
                <p className="text-slate-600 text-lg leading-relaxed mb-6 max-w-2xl">{loan.desc}</p>
                
                <div className="flex flex-wrap gap-4 mb-6">
                  <a href={loan.link} target="_blank" rel="noreferrer" className="bg-[#004684] text-white px-6 py-3 text-[10px] font-black uppercase tracking-[0.2em] flex items-center gap-2 hover:bg-[#FDB927] hover:text-[#004684] transition-all rounded-sm shadow-md">
                    Apply Now <ExternalLink size={14} />
                  </a>
                  <button className="border-2 border-[#004684] text-[#004684] px-6 py-3 text-[10px] font-black uppercase tracking-[0.2em] hover:bg-slate-50 transition-all rounded-sm">
                    View Details
                  </button>
                </div>

                <div className="bg-slate-50 p-4 border-l-4 border-[#FDB927] max-w-2xl italic text-sm text-slate-600">
                  "{loan.tip}"
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4. REPAYMENT CALCULATOR SECTION */}
      <section className="mx-4 md:mx-10 mb-20">
        <div className="bg-[#004684] rounded-sm shadow-2xl overflow-hidden border-b-8 border-[#FDB927]">
          <div className="p-10 md:p-16 flex flex-col lg:flex-row gap-16 items-center">
            <div className="flex-1 text-white">
              <div className="flex items-center gap-3 mb-4">
                <Calculator className="text-[#FDB927]" size={32} />
                <h2 className="nav-link-text text-sm tracking-widest">Financial Literacy Tool</h2>
              </div>
              <h3 className="text-4xl font-serif font-black mb-6 italic">Repayment <span className="text-[#FDB927]">Estimator</span></h3>
              <p className="text-white/60 text-sm leading-relaxed mb-8">
                Borrowing affects your future. Use this slider to estimate your monthly payments after graduation.
              </p>
              
              <div className="space-y-6">
                <label className="block text-[10px] font-black uppercase tracking-widest mb-3 opacity-70 text-[#FDB927]">Total Borrowed Amount ($)</label>
                <input 
                  type="range" min="1000" max="50000" step="500" value={loanAmount}
                  onChange={(e) => setLoanAmount(e.target.value)}
                  className="w-full h-1.5 bg-white/20 rounded-lg appearance-none cursor-pointer accent-[#FDB927]"
                />
                <div className="flex justify-between mt-2 font-mono text-xs text-[#FDB927]">
                  <span>$1,000</span>
                  <span className="text-lg font-black">${parseInt(loanAmount).toLocaleString()}</span>
                  <span>$50,000</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-10 rounded-sm w-full lg:w-96 shadow-xl text-center">
               <h4 className="text-[#004684] text-[10px] font-black uppercase tracking-widest mb-2">Estimated Monthly Payment</h4>
               <div className="text-5xl font-serif font-black text-[#004684] mb-4">${calculateMonthly()}</div>
               <p className="text-slate-400 text-[9px] uppercase font-bold tracking-tighter mb-8 leading-relaxed">
                 Fixed Interest Rate: 6.53% <br/> Standard 10-Year Repayment
               </p>
               <button className="w-full bg-[#FDB927] text-[#004684] py-4 text-[10px] font-black uppercase tracking-widest hover:brightness-105 transition-all">
                 Review Loan History
               </button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FOOTER COMPLIANCE */}
      <footer className="mt-20 mx-4 md:mx-10 p-10 bg-slate-50 border border-slate-200 rounded-sm flex flex-col md:flex-row gap-8 items-center">
        <ShieldCheck className="text-[#004684] shrink-0" size={32} />
        <p className="text-[11px] text-slate-500 leading-relaxed italic">
          [North Carolina A&T] notifies all borrowers that loan information is submitted to the National Student Loan Data System (NSLDS).
        </p>
      </footer>
    </div>
  );
};

export default Loans;