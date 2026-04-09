import React, { useState } from 'react';
import { Scale, Info, CreditCard, ShoppingBag, Truck, BookOpen, Landmark, ExternalLink } from 'lucide-react';
import AdvancedAggieCalculator from '../components/AdvancedAggieCalculator';

const CostOfAttendance = () => {
  const [isResidencyNC, setIsResidencyNC] = useState(true);

  // Data based on official 2026-2027 NC A&T Estimates
  const costs = {
    direct: [
      { 
        item: "Tuition & Mandatory Fees", 
        nc: 7428, 
        non: 20650, 
        icon: <Landmark size={18} />,
        details: "Includes tuition, health service fee, and student activity fees."
      },
      { 
        item: "On-Campus Housing (Avg)", 
        nc: 5622, 
        non: 5622, 
        icon: <CreditCard size={18} />,
        details: "Based on standard double-occupancy room."
      },
      { 
        item: "Meal Plan (Gold Plus)", 
        nc: 4850, 
        non: 4850, 
        icon: <ShoppingBag size={18} />,
        details: "Unlimited meals + $150 flex spending per semester."
      },
    ],
    indirect: [
      { item: "Books & Course Materials", amount: 1200, icon: <BookOpen size={18} /> },
      { item: "Transportation", amount: 950, icon: <Truck size={18} /> },
      { item: "Personal Expenses", amount: 1500, icon: <Info size={18} /> },
    ]
  };

  const calculateTotal = (type) => {
    if (type === 'direct') {
      return costs.direct.reduce((sum, c) => sum + (isResidencyNC ? c.nc : c.non), 0);
    }
    return costs.indirect.reduce((sum, c) => sum + c.amount, 0);
  };

  const totalCOA = calculateTotal('direct') + calculateTotal('indirect');

  return (
    <div className="w-full min-h-screen bg-white font-sans pb-20">
      
      {/* 1. HERO SECTION */}
      <header className="relative bg-[#004684] py-20 px-10 mb-8 overflow-hidden rounded-sm">
        <div className="relative z-10 max-w-4xl">
          <h4 className="nav-link-text text-[#FDB927] text-[10px] mb-4 uppercase tracking-[0.3em]">Institutional Rates</h4>
          <h1 className="text-white text-6xl font-serif font-black leading-tight mb-8">
            Cost of <span className="text-[#FDB927]">Attendance</span>
          </h1>
          
          {/* RESIDENCY TOGGLE - Mandatory for clarity */}
          <div className="flex p-1 bg-white/10 rounded-sm w-fit border border-white/20">
            <button
              onClick={() => setIsResidencyNC(true)}
              className={`px-8 py-3 text-[10px] font-black uppercase tracking-widest transition-all ${
                isResidencyNC ? 'bg-[#FDB927] text-[#004684]' : 'text-white hover:bg-white/10'
              }`}
            >
              NC Resident
            </button>
            <button
              onClick={() => setIsResidencyNC(false)}
              className={`px-8 py-3 text-[10px] font-black uppercase tracking-widest transition-all ${
                !isResidencyNC ? 'bg-[#FDB927] text-[#004684]' : 'text-white hover:bg-white/10'
              }`}
            >
              Out-of-State
            </button>
          </div>
        </div>
      </header>

      {/* 2. COMPLIANCE ALERT */}
      <div className="mx-4 md:mx-10 mb-16 bg-slate-50 border-l-8 border-[#004684] p-8 flex gap-8 items-start rounded-sm">
        <Scale className="text-[#004684] shrink-0" size={40} />
        <div>
          <h5 className="nav-link-text text-[11px] text-[#004684] mb-2 uppercase font-black">NASFAA Disclosure</h5>
          <p className="text-sm text-slate-600 leading-relaxed max-w-3xl">
            COA is an **estimate** of the cost for a student to attend [NC A&T](https://www.ncat.edu/admissions/financial-aid/index.php) for nine months. Direct costs are billed; indirect costs are out-of-pocket estimates.
          </p>
        </div>
      </div>

      {/* 3. COST TABLES */}
      <div className="relative px-4 md:px-10 space-y-20">
        <div className="absolute left-[47px] top-0 bottom-0 w-0 border-l-2 border-dashed border-slate-200 z-0" />
        
        {/* DIRECT COSTS */}
        <section className="relative z-10 flex gap-12 items-start">
          <div className="relative flex items-center justify-center min-w-[16px] mt-2">
            <div className="w-4 h-4 rounded-full bg-[#004684] z-10" />
          </div>
          <div className="flex-1">
            <h3 className="text-3xl font-serif font-black text-[#004684] mb-6">Direct Billed Costs</h3>
            <div className="bg-white border border-slate-100 rounded-sm shadow-sm">
              {costs.direct.map((cost, i) => (
                <div key={i} className="flex justify-between items-center p-6 border-b border-slate-50 hover:bg-slate-50 transition-all group">
                  <div className="flex items-center gap-4">
                    <div className="text-[#004684] group-hover:scale-110 transition-transform">{cost.icon}</div>
                    <div>
                      <p className="text-sm font-bold text-slate-700">{cost.item}</p>
                      <p className="text-[10px] text-slate-400 font-medium italic">{cost.details}</p>
                    </div>
                  </div>
                  <p className="text-lg font-serif font-black text-[#004684]">
                    ${(isResidencyNC ? cost.nc : cost.non).toLocaleString()}
                  </p>
                </div>
              ))}
              <div className="bg-[#004684] p-6 text-[#FDB927] flex justify-between items-center">
                <span className="nav-link-text text-[10px]">Total Direct Charges</span>
                <span className="text-2xl font-serif font-black">${calculateTotal('direct').toLocaleString()}</span>
              </div>
            </div>
          </div>
        </section>

        {/* INDIRECT COSTS */}
        <section className="relative z-10 flex gap-12 items-start">
          <div className="relative flex items-center justify-center min-w-[16px] mt-2">
            <div className="w-4 h-4 rounded-full bg-white border-4 border-[#004684] z-10" />
          </div>
          <div className="flex-1">
            <h3 className="text-3xl font-serif font-black text-[#004684] mb-6">Indirect (Estimated) Expenses</h3>
            <div className="bg-slate-50 border border-slate-200 rounded-sm">
              {costs.indirect.map((cost, i) => (
                <div key={i} className="flex justify-between items-center p-6 border-b border-slate-200">
                  <div className="flex items-center gap-4 text-slate-600 italic">
                    {cost.icon} <span className="text-sm font-bold">{cost.item}</span>
                  </div>
                  <p className="text-lg font-serif font-black text-slate-600">${cost.amount.toLocaleString()}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

<section className="mx-4 md:mx-10 mb-12">
  <div className="bg-slate-50 border-2 border-[#004684] p-10 rounded-sm shadow-inner">
     <h3 className="nav-link-text text-[#004684] text-xs mb-6 text-center">
       Personalized Aid Estimator
     </h3>
     {/* YOUR COMPONENT HERE */}
     <AdvancedAggieCalculator />
  </div>
</section>
 

      {/* 4. TOTAL BUDGET FOOTER */}
      <footer className="mt-20 bg-[#FDB927] p-16 rounded-sm mx-4 md:mx-10 shadow-2xl flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="text-center md:text-left">
          <h3 className="nav-link-text text-[#004684] text-sm mb-4">Official Combined Total COA</h3>
          <h2 className="text-[#004684] font-serif font-black text-7xl">${totalCOA.toLocaleString()}</h2>
          <p className="text-[#004684] text-[10px] font-black uppercase tracking-widest mt-2 opacity-70">
            {isResidencyNC ? "North Carolina Resident" : "Out-of-State Student"} • Undergraduate
          </p>
        </div>
        <a href="https://www.ncat.edu/admissions/financial-aid/index.php" className="bg-[#004684] text-white px-10 py-5 rounded-sm text-[11px] font-black uppercase tracking-widest hover:bg-[#003566] transition-all shadow-lg flex items-center gap-2">
          View Tuition & Fees Portal <ExternalLink size={14} />
        </a>
      </footer>
    </div>
  );
};

export default CostOfAttendance;