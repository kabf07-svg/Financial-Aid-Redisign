import React from 'react';
import { Scale, Info, Plus, Minus, Equal, AlertCircle, BookOpen, Wallet, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const TheFormulaPage = () => {
  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      {/* 1. HERO SECTION */}
      <div className="bg-[#004684] pt-24 pb-40 px-6 text-center text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#FDB927] rounded-full blur-3xl" />
        </div>
        
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="relative z-10">
          <h1 className="text-5xl font-black mb-6 uppercase tracking-tight">The Need Formula</h1>
          <p className="text-blue-100 max-w-2xl mx-auto text-lg font-medium leading-relaxed">
            How North Carolina A&T calculates your eligibility for the 2026-2027 academic year.
          </p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 -mt-24 relative z-20">
        
        {/* 2. THE INTERACTIVE EQUATION CARD */}
        <div className="bg-white rounded-[3.5rem] shadow-2xl p-10 md:p-16 mb-16 border border-white">
          <div className="grid grid-cols-1 md:grid-cols-5 items-center gap-6 text-center">
            <div className="space-y-2">
              <div className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Step 1: Budget</div>
              <div className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100">
                <h3 className="text-[#004684] font-black text-4xl">COA</h3>
                <p className="text-[10px] text-slate-500 font-bold mt-2 uppercase">Cost of Attendance</p>
              </div>
            </div>
            
            <Minus className="mx-auto text-slate-300 hidden md:block" size={40} strokeWidth={3} />
            
            <div className="space-y-2">
              <div className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Step 2: FAFSA Data</div>
              <div className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100">
                <h3 className="text-[#004684] font-black text-4xl">SAI</h3>
                <p className="text-[10px] text-slate-500 font-bold mt-2 uppercase">Student Aid Index</p>
              </div>
            </div>

            <Equal className="mx-auto text-slate-300 hidden md:block" size={40} strokeWidth={3} />

            <div className="space-y-2">
              <div className="text-[10px] font-black text-[#004684] uppercase tracking-[0.2em]">Your Eligibility</div>
              <div className="p-10 bg-[#FDB927] rounded-[2.5rem] shadow-xl shadow-yellow-500/20">
                <h3 className="text-[#004684] font-black text-5xl italic font-serif">NEED</h3>
                <p className="text-[10px] text-[#004684] font-black mt-2 uppercase tracking-widest">Financial Need</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* 3. LEFT COLUMN: DEEP DIVE INTO COA */}
          <div className="lg:col-span-2 space-y-8">
            <section className="bg-white p-10 rounded-[3rem] shadow-sm border border-slate-100">
              <h2 className="text-2xl font-black text-[#004684] mb-6 flex items-center gap-3">
                <Wallet className="text-[#FDB927]" /> Breaking Down the COA
              </h2>
              <p className="text-slate-600 mb-8 leading-relaxed">
                The **Cost of Attendance** isn't just your bill—it's an estimate of the total cost to be a student at A&T. It is divided into two categories:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 bg-blue-50/50 rounded-2xl">
                  <h4 className="font-black text-[#004684] text-xs uppercase mb-4 tracking-widest">Direct Costs (Billed)</h4>
                  <ul className="space-y-2 text-sm text-slate-700 font-medium">
                    <li className="flex justify-between"><span>Tuition & Fees</span> <span className="text-[#004684]">✓</span></li>
                    <li className="flex justify-between"><span>On-Campus Housing</span> <span className="text-[#004684]">✓</span></li>
                    <li className="flex justify-between"><span>Meal Plans</span> <span className="text-[#004684]">✓</span></li>
                  </ul>
                </div>
                <div className="p-6 bg-amber-50/50 rounded-2xl">
                  <h4 className="font-black text-amber-700 text-xs uppercase mb-4 tracking-widest">Indirect Costs (Estimated)</h4>
                  <ul className="space-y-2 text-sm text-slate-700 font-medium">
                    <li>Books & Supplies</li>
                    <li>Transportation (Travel to/from home)</li>
                    <li>Personal Expenses</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="bg-white p-10 rounded-[3rem] shadow-sm border border-slate-100">
              <h2 className="text-2xl font-black text-[#004684] mb-6 flex items-center gap-3">
                <Scale className="text-[#FDB927]" /> The "Need" Limit Rule
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Per federal law, your total "Need-Based" aid package cannot exceed your calculated Financial Need.
              </p>
              <div className="grid sm:grid-cols-3 gap-4 text-center">
                {['Federal Pell Grants', 'Subsidized Loans', 'Federal Work-Study'].map(aid => (
                  <div key={aid} className="p-4 bg-slate-50 rounded-2xl border border-slate-100 text-[10px] font-black text-slate-500 uppercase tracking-tighter">
                    {aid}
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* 4. RIGHT COLUMN: SIDEBARS & QUICK INFO */}
          <div className="space-y-8">
            <div className="bg-[#004684] p-8 rounded-[3rem] text-white shadow-xl relative overflow-hidden">
              <div className="absolute -right-8 -top-8 w-24 h-24 bg-white/10 rounded-full blur-xl" />
              <h3 className="text-[#FDB927] font-black uppercase text-xs tracking-[0.2em] mb-4">Did You Know?</h3>
              <p className="text-sm leading-relaxed opacity-90 italic">
                If your family's financial situation has changed significantly since you filed your taxes, you can request a **Professional Judgment** review.
              </p>
            </div>

            <div className="bg-white p-8 rounded-[3rem] border-2 border-slate-100">
              <h3 className="text-[#004684] font-black uppercase text-xs tracking-widest mb-6">Loan Logic</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center text-green-600 flex-shrink-0">
                    <Zap size={18} />
                  </div>
                  <div>
                    <h5 className="font-black text-xs text-slate-800 uppercase">Subsidized</h5>
                    <p className="text-[10px] text-slate-500 mt-1">Based on Need. Government pays interest while in school.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center text-red-600 flex-shrink-0">
                    <AlertCircle size={18} />
                  </div>
                  <div>
                    <h5 className="font-black text-xs text-slate-800 uppercase">Unsubsidized</h5>
                    <p className="text-[10px] text-slate-500 mt-1">Not based on Need. Interest starts immediately.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default TheFormulaPage;