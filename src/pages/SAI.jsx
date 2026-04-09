import React from 'react';
import { Info, HelpCircle, AlertTriangle, CheckCircle2, ArrowRight, Calculator } from 'lucide-react';
import { motion } from 'framer-motion';

const SaiIndexPage = () => {
  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      {/* HERO HEADER */}
      <div className="bg-[#004684] pt-24 pb-40 px-6 text-center text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-10 right-10 w-64 h-64 bg-[#FDB927] rounded-full blur-3xl" />
        </div>
        
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="relative z-10">
          <h1 className="text-5xl font-black mb-6 uppercase tracking-tight">Student Aid Index</h1>
          <p className="text-blue-100 max-w-2xl mx-auto text-lg font-medium">
            Your "Financial Strength Meter" for the 2026-2027 Academic Year.
          </p>
        </motion.div>
      </div>

      <div className="max-w-6xl mx-auto px-6 -mt-24 relative z-20">
        
        {/* THE SAI EXPLAINER CARD */}
        <div className="bg-white rounded-[3rem] shadow-2xl p-10 md:p-14 mb-12 border border-white">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-black text-[#004684] mb-6 tracking-tight">What is the SAI?</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                The **Student Aid Index (SAI)** is an eligibility index number determined by the FAFSA. It is **not** a reflection of how much cash you have in the bank, nor is it the exact dollar amount you will pay NC A&T.
              </p>
              <div className="space-y-4">
                <div className="flex gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                  <CheckCircle2 className="text-green-500 flex-shrink-0" size={20} />
                  <p className="text-xs font-bold text-slate-600">Lower SAI = Higher Eligibility for Grants & Subsidized Loans.</p>
                </div>
                <div className="flex gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                  <AlertTriangle className="text-[#FDB927] flex-shrink-0" size={20} />
                  <p className="text-xs font-bold text-slate-600">Higher SAI = Eligibility shifts toward Unsubsidized Loans & Private Scholarships.</p>
                </div>
              </div>
            </div>
            <div className="bg-[#004684] rounded-[2.5rem] p-10 text-white relative overflow-hidden">
              <Calculator className="absolute -right-4 -bottom-4 opacity-10" size={120} />
              <h3 className="text-[#FDB927] font-black uppercase text-xs tracking-widest mb-4">The SAI Range</h3>
              <ul className="space-y-6">
                <li className="border-b border-white/10 pb-4">
                  <span className="block font-black text-xl">-1,500 to 0</span>
                  <span className="text-[10px] opacity-70 uppercase font-bold tracking-wider">Maximum Need Eligibility</span>
                </li>
                <li className="border-b border-white/10 pb-4">
                  <span className="block font-black text-xl">1 to 10,000</span>
                  <span className="text-[10px] opacity-70 uppercase font-bold tracking-wider">Moderate Need Eligibility</span>
                </li>
                <li>
                  <span className="block font-black text-xl">10,001+</span>
                  <span className="text-[10px] opacity-70 uppercase font-bold tracking-wider">Low Need / Non-Need Eligibility</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* SECONDARY INFO GRID */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Why it matters */}
          <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100">
            <h4 className="font-black text-[#004684] uppercase text-xs tracking-widest mb-4">Why it matters</h4>
            <p className="text-sm text-slate-500 leading-relaxed italic">
              "Your SAI is the key that unlocks the **[Need Formula](http://localhost:5173/#/welcome)**. Without an SAI from a processed FAFSA, NC A&T cannot award you any federal or state grants."
            </p>
          </div>

          {/* Finding your SAI */}
          <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100 lg:col-span-2">
            <h4 className="font-black text-[#004684] uppercase text-xs tracking-widest mb-4">How to find your SAI</h4>
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <p className="text-sm text-slate-600 leading-relaxed">
                Once your FAFSA is processed, you can find your SAI on your **FAFSA Submission Summary (FSS)** at studentaid.gov. It is usually listed in the top-right corner of the first page.
              </p>
              <a href="https://studentaid.gov" target="_blank" className="whitespace-nowrap bg-[#004684] text-white px-6 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest flex items-center gap-2 hover:bg-[#003566] transition-all">
                Login to FAFSA <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaiIndexPage;