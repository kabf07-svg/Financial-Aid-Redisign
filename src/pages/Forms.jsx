import React, { useState } from 'react';
import { FileText, Lock, Download, ShieldAlert, ExternalLink, Info } from 'lucide-react';
import { Link } from 'react-router-dom';

const Forms = () => {
  const [activeYear, setActiveYear] = useState('2026-2027');

  // NC A&T Categorized Forms Data
  const formCategories = [
    {
      group: "Verification Documents",
      description: "Required for students selected for federal review.",
      forms: [
        { name: "V1 Standard Verification Worksheet", type: "PDF", year: "Both" },
        { name: "V4 Identity & Statement of Educational Purpose", type: "PDF", year: "2026-2027" },
        { name: "Household Size Verification", type: "Online", year: "Both" }
      ]
    },
    {
      group: "Loan & Debt Management",
      description: "Authorization and adjustment forms for Federal Loans.",
      forms: [
        { name: "Annual Loan Adjustment Request", type: "PDF", year: "Both" },
        { name: "Parent PLUS Authorization", type: "Online", year: "2026-2027" }
      ]
    },
    {
      group: "Special Circumstances",
      description: "Appeals for income reduction or dependency overrides.",
      forms: [
        { name: "Professional Judgment Appeal", type: "PDF", year: "2026-2027" },
        { name: "Dependency Status Appeal", type: "PDF", year: "Both" }
      ]
    }
  ];

  return (
    <div className="w-full min-h-screen bg-white font-sans">
      
      {/* 1. BRANDED HERO SECTION */}
      <header className="relative bg-[#004684] py-20 px-10 mb-8 overflow-hidden rounded-sm">
        <div className="relative z-10 max-w-4xl">
          <h4 className="nav-link-text text-[#FDB927] text-[10px] mb-4 uppercase tracking-[0.3em]">Admissions & Financial Aid</h4>
          <h1 className="text-white text-6xl font-serif font-black leading-tight mb-8">
            Forms & <span className="text-[#FDB927]">Publications</span>
          </h1>
          
          {/* NASFAA COMPLIANCE: Academic Year Toggle */}
          <div className="flex p-1 bg-white/10 rounded-sm w-fit border border-white/20">
            {['2025-2026', '2026-2027'].map((year) => (
              <button
                key={year}
                onClick={() => setActiveYear(year)}
                className={`px-6 py-2 text-[10px] font-black uppercase tracking-widest transition-all ${
                  activeYear === year ? 'bg-[#FDB927] text-[#004684]' : 'text-white hover:bg-white/10'
                }`}
              >
                {year}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* 2. SECURITY ALERT: Higher Education Act Compliance */}
      <div className="mx-4 md:mx-10 mb-12 bg-slate-50 border-2 border-dashed border-[#004684] p-8 flex gap-6 items-center rounded-sm">
        <div className="bg-[#004684] p-4 rounded-xl text-white">
          <Lock size={28} />
        </div>
        <div>
          <h5 className="nav-link-text text-[11px] text-[#004684] mb-1">Secure Document Handling Required</h5>
          <p className="text-xs text-slate-600 leading-relaxed italic">
            Per the **Higher Education Act**, sensitive documents must be submitted via the 
            [Secure Upload Portal](http://localhost:5173/#/verification). We cannot accept forms containing SSNs via email.
          </p>
        </div>
      </div>

      {/* 3. FORMS LIST WITH INSTITUTIONAL TIMELINE */}
      <div className="relative px-4 md:px-10 mb-20">
        {/* Continuous Dashed Line synced with Sidebar */}
        <div className="absolute left-[47px] top-0 bottom-0 w-0 border-l-2 border-dashed border-slate-200 z-0" />
        
        <div className="relative z-10 space-y-20">
          {formCategories.map((cat, idx) => (
            <section key={idx} className="flex gap-12 items-start">
              <div className="relative flex items-center justify-center min-w-[16px] mt-2">
                <div className="w-4 h-4 rounded-full bg-white border-4 border-[#004684] z-10 shadow-sm" />
              </div>

              <div className="flex-1">
                <h3 className="text-3xl font-serif font-black text-[#004684] mb-2">{cat.group}</h3>
                <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest mb-6">{cat.description}</p>
                
                <div className="grid gap-3">
                  {cat.forms.filter(f => f.year === activeYear || f.year === 'Both').map((form, fIdx) => (
                    <div key={fIdx} className="flex items-center justify-between p-6 bg-white border border-slate-100 rounded-sm hover:border-[#FDB927] hover:shadow-md transition-all group">
                      <div className="flex items-center gap-5">
                        <div className="p-3 bg-slate-50 rounded-lg group-hover:bg-[#FDB927]/10 transition-colors">
                          <FileText size={20} className="text-[#004684]" />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-slate-700">{form.name}</p>
                          <span className="text-[9px] text-slate-400 uppercase font-black tracking-widest">{form.type} • {activeYear}</span>
                        </div>
                      </div>
                      <button className="flex items-center gap-2 text-[#004684] hover:text-[#FDB927] transition-all">
                        <span className="nav-link-text text-[10px]">Download</span>
                        <Download size={16} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>

      {/* 4. UNIVERSITY CONTACT FOOTER */}
      <footer className="mt-20 bg-[#FDB927] p-16 rounded-sm mx-4 md:mx-10 mb-20 shadow-2xl flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="text-center md:text-left">
          <h3 className="nav-link-text text-[#004684] text-sm mb-4">Contact Us</h3>
          <p className="text-[#004684] text-xs font-bold opacity-80 uppercase tracking-widest leading-loose">
            (336) 334-7973 | finaid@ncat.edu <br />
            1601 E. Market Street | Dowdy Admin, Suite 100
          </p>
        </div>
        <Link to="/NetpriceCalculator" className="bg-[#004684] text-white px-10 py-5 rounded-sm text-[11px] font-black uppercase tracking-widest hover:bg-[#002d5a] transition-all shadow-lg">
          Net Price Calculator ➔
        </Link>
      </footer>
    </div>
  );
};

export default Forms;