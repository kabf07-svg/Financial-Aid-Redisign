import React, { useState, useMemo } from 'react';
import { Calculator, Info, ArrowRight, Home, Globe, GraduationCap, User, BookOpen } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const AdvancedAggieCalculator = () => {
  const [level, setLevel] = useState('undergrad'); // undergrad or graduate
  const [residency, setResidency] = useState('inState'); 
  const [housing, setHousing] = useState('onCampus'); 
  const [sai, setSai] = useState('');
  const [showResult, setShowResult] = useState(false);

  // NC A&T 2024-2025 Detailed Cost Data
  const baseData = {
    undergrad: {
      inState: { tuition: 3540, fees: 1968, housing: 9452, indirect: 5582 },
      outOfState: { tuition: 17050, fees: 1968, housing: 9452, indirect: 5582 }
    },
    graduate: {
      inState: { tuition: 4830, fees: 2012, housing: 9452, indirect: 6200 },
      outOfState: { tuition: 20300, fees: 2012, housing: 9452, indirect: 6200 }
    }
  };

  const activeRates = baseData[level][residency];
  
  const currentCOA = useMemo(() => {
    const housingCost = housing === 'onCampus' ? activeRates.housing : 8500; 
    return activeRates.tuition + activeRates.fees + activeRates.indirect + housingCost;
  }, [level, residency, housing]);

  const financialNeed = Math.max(0, currentCOA - (Number(sai) || 0));

  return (
    <div className="w-full max-w-6xl mx-auto my-12 p-1 bg-gradient-to-br from-[#004684] to-[#002d5a] rounded-[2.5rem] shadow-2xl">
      <div className="bg-white rounded-[2.4rem] overflow-hidden">
        <div className="grid lg:grid-cols-2">
          
          {/* LEFT: Inputs */}
          <div className="p-8 lg:p-12 border-r border-slate-100">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-[#FDB927] rounded-2xl shadow-lg">
                <GraduationCap className="text-[#004684]" size={24} />
              </div>
              <h2 className="text-xl font-black text-[#004684] tracking-tight uppercase">Smart Aid Estimator</h2>
            </div>

            <div className="space-y-6">
              {/* Toggle 1: Level (NEW) */}
              <div>
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3 block">Degree Level</label>
                <div className="flex p-1 bg-slate-100 rounded-2xl">
                  <button onClick={() => setLevel('undergrad')} className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold transition-all ${level === 'undergrad' ? 'bg-white text-[#004684] shadow-sm' : 'text-slate-500'}`}>
                    <User size={16} /> Undergraduate
                  </button>
                  <button onClick={() => setLevel('graduate')} className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold transition-all ${level === 'graduate' ? 'bg-white text-[#004684] shadow-sm' : 'text-slate-500'}`}>
                    <BookOpen size={16} /> Graduate
                  </button>
                </div>
              </div>

              {/* Toggle 2: Residency */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3 block">Residency</label>
                  <div className="flex p-1 bg-slate-100 rounded-2xl">
                    <button onClick={() => setResidency('inState')} className={`flex-1 py-3 rounded-xl text-xs font-bold transition-all ${residency === 'inState' ? 'bg-[#004684] text-white shadow-md' : 'text-slate-500'}`}>In-State</button>
                    <button onClick={() => setResidency('outOfState')} className={`flex-1 py-3 rounded-xl text-xs font-bold transition-all ${residency === 'outOfState' ? 'bg-[#004684] text-white shadow-md' : 'text-slate-500'}`}>Out-State</button>
                  </div>
                </div>
                <div>
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3 block">Housing</label>
                  <div className="flex p-1 bg-slate-100 rounded-2xl">
                    <button onClick={() => setHousing('onCampus')} className={`flex-1 py-3 rounded-xl text-xs font-bold transition-all ${housing === 'onCampus' ? 'bg-[#FDB927] text-[#004684]' : 'text-slate-500'}`}>On</button>
                    <button onClick={() => setHousing('offCampus')} className={`flex-1 py-3 rounded-xl text-xs font-bold transition-all ${housing === 'offCampus' ? 'bg-[#FDB927] text-[#004684]' : 'text-slate-500'}`}>Off</button>
                  </div>
                </div>
              </div>

              {/* Input: SAI */}
              <div>
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3 block italic">Student Aid Index (SAI)</label>
                <div className="relative">
                  <span className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 font-bold">$</span>
                  <input
                    type="number"
                    value={sai}
                    onChange={(e) => setSai(e.target.value)}
                    placeholder="-1500 to 999999"
                    className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl pl-10 pr-6 py-4 text-xl font-bold focus:border-[#004684] outline-none transition-all"
                  />
                </div>
              </div>

              <button
                onClick={() => setShowResult(true)}
                className="w-full bg-[#004684] text-white font-black py-5 rounded-2xl flex items-center justify-center gap-3 hover:bg-[#003566] transition-all shadow-xl shadow-blue-900/20 uppercase tracking-widest text-xs"
              >
                Estimate My Aid <ArrowRight size={18} />
              </button>
            </div>
          </div>

          {/* RIGHT: Results View */}
          <div className="bg-slate-50 p-8 lg:p-12 flex flex-col justify-center items-center">
            <AnimatePresence mode="wait">
              {!showResult ? (
                <motion.div key="empty" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center space-y-4">
                  <div className="w-20 h-20 bg-white rounded-[2rem] shadow-sm flex items-center justify-center mx-auto mb-6 border border-slate-100">
                    <Calculator size={32} className="text-[#FDB927]" />
                  </div>
                  <h3 className="text-[#004684] font-black text-sm uppercase tracking-tighter">Ready to estimate?</h3>
                  <p className="text-slate-400 text-xs max-w-[200px] leading-relaxed">Enter your FAFSA details to see your potential eligibility package.</p>
                </motion.div>
              ) : (
                <motion.div key="result" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="w-full space-y-4">
                  <div className="bg-[#004684] rounded-[2.5rem] p-10 text-white shadow-2xl relative overflow-hidden">
                    <div className="relative z-10">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-2 h-2 rounded-full bg-[#FDB927]" />
                        <p className="text-[#FDB927] font-black text-[10px] uppercase tracking-widest">Estimated Need-Based Aid Eligibility</p>
                      </div>
                      <h4 className="text-6xl font-black mb-8 text-white">
              ${financialNeed.toLocaleString()}
            </h4>
                      
                      <div className="space-y-4 pt-6 border-t border-white/10">
                        <div className="flex justify-between items-center text-[11px] font-medium opacity-70">
                          <span className="uppercase tracking-widest">Total COA (Sticker Price)</span>
                          <span className="font-bold font-sans">${currentCOA.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between items-center text-[11px] font-black text-[#FDB927]">
                          <span className="uppercase tracking-widest">Calculated SAI</span>
                          <span className="font-sans">-${(Number(sai) || 0).toLocaleString()}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-white p-4 rounded-2xl border border-slate-200">
                      <p className="text-[9px] font-black text-slate-400 uppercase mb-1">Direct Tuition/Fees</p>
                      <p className="text-lg font-black text-[#004684]">${(activeRates.tuition + activeRates.fees).toLocaleString()}</p>
                    </div>
                    <div className="bg-white p-4 rounded-2xl border border-slate-200">
                      <p className="text-[9px] font-black text-slate-400 uppercase mb-1">Indirect (Books/Travel)</p>
                      <p className="text-lg font-black text-[#004684]">${activeRates.indirect.toLocaleString()}</p>
                    </div>
                  </div>

                  <div className="bg-blue-50/50 rounded-2xl p-4 flex items-start gap-3">
                    <Info size={16} className="text-[#004684] mt-0.5" />
                    <p className="text-[10px] text-slate-600 leading-relaxed italic">
                      Estimates are based on {level === 'undergrad' ? 'full-time undergraduate' : '9-credit graduate'} enrollment. Actual aid depends on your [Aggie Access](https://www.ncat.edu/admissions/financial-aid/index.php) verification.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AdvancedAggieCalculator;