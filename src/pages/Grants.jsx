import React from 'react';
import { 
  Gift, 
  MapPin, 
  GraduationCap, 
  Info, 
  CheckCircle2, 
  AlertTriangle 
} from 'lucide-react';

const Grants = () => {
  const grantTypes = [
    {
      title: "Federal Pell Grant",
      source: "Federal Government",
      eligibility: "Undergraduates with exceptional financial need who have not earned a bachelor's degree.",
      amount: "Up to $7,395 (2025-26)",
      action: "Automatic Acceptance"
    },
    {
      title: "Next NC Scholarship",
      source: "State of North Carolina",
      eligibility: "NC residents with an SAI of 15,000 or less attending a UNC System school.",
      amount: "At least $5,000 annually",
      action: "Automatic Acceptance"
    },
    {
      title: "FSEOG Grant",
      source: "Campus-Based Federal Aid",
      eligibility: "Pell Grant recipients with the lowest Student Aid Index (SAI). Limited funding.",
      amount: "$200 - $4,000",
      action: "Priority-Based"
    },
    {
      title: "Aggie Pride Grant",
      source: "Institutional (NC A&T)",
      eligibility: "Need-based grant awarded to students to close the gap on tuition and fees.",
      amount: "Varies based on need",
      action: "Institutional"
    }
  ];

  return (
    <div className="w-full bg-white font-sans animate-in fade-in duration-700">
      
      {/* 1. ACADEMIC HERO BANNER */}
      <header className="relative bg-[#004684] py-24 px-10 overflow-hidden rounded-sm">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#FDB927]/10 skew-x-12 transform translate-x-20" />
        <div className="relative z-10 max-w-4xl">
          <h4 className="nav-link-text text-[#FDB927] text-[10px] mb-4 uppercase tracking-[0.4em] font-black">
            Gift Aid & Entitlements
          </h4>
          <h1 className="text-white text-6xl font-serif font-black leading-tight mb-6">
            Institutional <span className="text-[#FDB927]">&</span> <br /> Federal Grants
          </h1>
          <div className="w-24 h-1.5 bg-[#FDB927] mb-8" />
          <p className="text-white/80 text-lg max-w-2xl font-medium leading-relaxed">
            Grants are a form of financial aid that does not need to be repaid. Most grants are awarded based 
            on your Student Aid Index (SAI) as determined by your FAFSA.
          </p>
        </div>
      </header>

      {/* 2. AGGIE PRIORITY ALERT */}
      <section className="mt-12 bg-slate-50 border-l-8 border-[#004684] p-8 flex items-start gap-6 shadow-sm">
        <div className="p-3 bg-[#004684] rounded-full text-[#FDB927]">
          <Info size={24} />
        </div>
        <div>
          <h5 className="nav-link-text text-[11px] text-[#004684] mb-2 uppercase font-black">Automatic Acceptance Policy</h5>
          <p className="text-sm text-slate-600 leading-relaxed max-w-4xl">
            Unlike loans, <span className="text-[#004684] font-bold">Grants do not require manual acceptance</span> in Aggie Access. 
            Once awarded, they are automatically credited to your student account, provided you maintain 
            Satisfactory Academic Progress (SAP) and meet enrollment requirements.
          </p>
        </div>
      </section>

      {/* 3. GRANTS GRID */}
      <section className="py-20 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {grantTypes.map((grant, idx) => (
          <div key={idx} className="group relative bg-white border border-slate-200 p-8 rounded-sm hover:border-[#FDB927] transition-all hover:shadow-xl">
            <div className="flex justify-between items-start mb-6">
              <div className="p-4 bg-slate-50 rounded-lg group-hover:bg-[#004684] group-hover:text-[#FDB927] transition-colors">
                <Gift size={28} />
              </div>
              <span className="text-[9px] font-black uppercase tracking-widest text-slate-400 border border-slate-200 px-3 py-1 rounded-full">
                {grant.action}
              </span>
            </div>
            
            <h3 className="text-2xl font-serif font-black text-[#004684] mb-3">{grant.title}</h3>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-4 h-0.5 bg-[#FDB927]" />
              <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{grant.source}</span>
            </div>

            <p className="text-slate-600 text-sm leading-relaxed mb-8 min-h-[60px]">
              {grant.eligibility}
            </p>

            <div className="pt-6 border-t border-slate-100 flex justify-between items-center">
              <span className="text-xs font-bold text-slate-400 italic">Estimated Award</span>
              <span className="text-xl font-serif font-black text-[#004684]">{grant.amount}</span>
            </div>
          </div>
        ))}
      </section>

      {/* 4. DISBURSEMENT RULES (The "Aggie Way") */}
      <section className="pb-20">
        <div className="bg-[#004684] p-12 rounded-sm text-white">
          <div className="flex items-center gap-4 mb-8">
            <AlertTriangle className="text-[#FDB927]" size={32} />
            <h2 className="text-3xl font-serif font-black">Disbursement Requirements</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="space-y-4">
              <div className="text-[#FDB927] font-black text-xs uppercase tracking-widest">Enrollment Level</div>
              <p className="text-sm opacity-80 leading-relaxed">
                Most grants require at least 12 credit hours for the full amount. Falling below 6 hours may result in total cancellation.
              </p>
            </div>
            <div className="space-y-4">
              <div className="text-[#FDB927] font-black text-xs uppercase tracking-widest">SAP Compliance</div>
              <p className="text-sm opacity-80 leading-relaxed">
                You must maintain a minimum 2.0 cumulative GPA and complete 67% of all attempted credits to remain eligible for gift aid.
              </p>
            </div>
            <div className="space-y-4">
              <div className="text-[#FDB927] font-black text-xs uppercase tracking-widest">Verification</div>
              <p className="text-sm opacity-80 leading-relaxed">
                If your FAFSA is selected for verification, grants will remain in "Estimated" status and will not disburse until all forms are processed.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Grants;