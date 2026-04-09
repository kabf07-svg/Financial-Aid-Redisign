import React from 'react';
import { Info, ExternalLink, AlertTriangle, FileText, PlayCircle, Calculator, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const FAFSASteps = () => {
  const steps = [
    {
      level: "Step 01",
      title: "The Digital Key (FSA ID)",
      desc: "Each person (student and contributors) must apply for a unique FSA ID. IMPORTANT: If your legal parents live together, both must be listed on the FAFSA regardless of marital status to comply with federal household rules.",
      // NEW: High-Visibility Application Box
      applicationBox: (
        <div className="my-8 p-8 bg-slate-50 border-2 border-dashed border-[#FDB927] rounded-sm flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="text-center md:text-left">
            <p className="nav-link-text text-[10px] text-[#004684] mb-1">Ready to Start?</p>
            <p className="text-sm font-bold text-[#004684] uppercase tracking-tight">Official 2026-2027 FAFSA Application</p>
          </div>
          <a 
            href="https://studentaid.gov/h/apply-for-aid/fafsa" 
            target="_blank" 
            rel="noreferrer"
            className="bg-[#004684] text-white px-8 py-4 rounded-sm font-black text-[10px] uppercase tracking-widest hover:bg-[#FDB927] hover:text-[#004684] transition-all shadow-xl active:scale-95"
          >
            Apply Now <ExternalLink size={14} className="inline ml-2" />
          </a>
        </div>
      ),
      tip: "NCAT REQUIREMENT: Only the owner should create the ID. It serves as a legal signature and should never be shared with school personnel.",
      link: "https://studentaid.gov/fsa-id/create-account/launch",
      // NEW: Visual Learner Link
      videoLink: "https://www.youtube.com/watch?v=gUis5lityCQ"
    },
    {
      level: "Step 02",
      title: "The School Identity",
      desc: "Ensure you are sending your data to the right place. Add North Carolina A&T State University to your application to trigger your Aggie Aid package.",
      tip: "OFFICIAL SCHOOL CODE: 002905",
    },
    {
      level: "Step 03",
      title: "Income & Tax Matching",
      desc: "Financial aid uses 'Prior-Prior' year tax data. Errors here are the #1 cause of verification delays at NC A&T.",
      customContent: (
        <div className="mt-4 overflow-hidden rounded-sm border border-slate-200">
          <table className="w-full text-[10px] text-left">
            <thead className="bg-slate-50 font-black uppercase tracking-widest text-[#004684]">
              <tr>
                <th className="p-3">Attending</th>
                <th className="p-3">FAFSA Needed</th>
                <th className="p-3">Tax Year</th>
              </tr>
            </thead>
            <tbody className="text-slate-600 font-sans">
              <tr className="border-t border-slate-100">
                <td className="p-3 italic">Aug 2025 - July 2026</td>
                <td className="p-3 font-bold">2025-2026</td>
                <td className="p-3">2023</td>
              </tr>
              <tr className="border-t border-slate-100 bg-slate-50/50">
                <td className="p-3 italic">Aug 2026 - July 2027</td>
                <td className="p-3 font-bold">2026-2027</td>
                <td className="p-3">2024</td>
              </tr>
            </tbody>
          </table>
        </div>
      ),
      tip: "Omissions in tax data will delay processing and could affect your aid eligibility.",
    }
  ];

  return (
    <div className="w-full bg-white">
      {/* 1. HERO SECTION */}
      <header className="relative bg-[#004684] py-20 px-10 mb-8 overflow-hidden rounded-sm">
        <div className="relative z-10 max-w-4xl">
          <h4 className="nav-link-text text-[#FDB927] text-[10px] mb-4 uppercase tracking-[0.3em]">Admissions & Financial Aid</h4>
          <h1 className="text-white text-6xl font-serif font-black leading-tight mb-6">
            FAFSA <span className="text-[#FDB927]">Quest</span>
          </h1>
          <div className="w-24 h-1.5 bg-[#FDB927] mb-8" />
          
          <div className="flex flex-wrap gap-4">
            <Link to="/NetpriceCalculator" className="flex items-center gap-2 bg-[#FDB927] px-4 py-2 rounded-sm text-[#004684] text-[10px] font-black uppercase tracking-widest hover:brightness-110 transition-all">
              <Calculator size={14} /> Net Price Calculator
            </Link>
            <a href="https://www.ncat.edu/admissions/financial-aid/fafsa.php" className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-sm text-white text-[10px] font-black uppercase tracking-widest hover:bg-white/20 transition-all">
              <FileText size={14} className="text-[#FDB927]" /> Official Worksheets
            </a>
          </div>
        </div>
      </header>

      {/* 2. UNIVERSITY STANDARD: Decision Day Alert */}
      <div className="mx-4 md:mx-10 mb-12 bg-[#FDB927]/10 border-l-8 border-[#FDB927] p-8 flex gap-6 items-center rounded-sm">
        <div className="bg-[#FDB927] p-3 rounded-full text-[#004684]">
          <AlertTriangle size={24} />
        </div>
        <div>
          <h5 className="nav-link-text text-[11px] text-[#004684] mb-1">Undergraduate Admission Update</h5>
          <p className="text-sm font-bold text-[#004684] uppercase tracking-tight">
            [NC A&T](https://www.ncat.edu/admissions/financial-aid/fafsa.php) has extended "Decision Day" to <span className="underline font-black">May 15</span> for all new students.
          </p>
        </div>
      </div>

      {/* 3. STEPS WITH TIMELINE */}
      <div className="relative px-4 md:px-10">
        <div className="absolute left-[47px] top-0 bottom-0 w-0 border-l-2 border-dashed border-slate-200 z-0" />

        <div className="relative z-10 space-y-24">
          {steps.map((step, index) => (
            <section key={index} className="flex gap-12 items-start">
              <div className="relative flex items-center justify-center min-w-[16px] mt-1">
                <div className="w-4 h-4 rounded-full bg-white border-4 border-[#004684] z-10" />
              </div>

              <div className="flex-1">
                <span className="nav-link-text text-[10px] text-slate-400 mb-2 block">{step.level}</span>
                <h2 className="text-3xl font-serif font-black text-[#004684] mb-4">{step.title}</h2>
                <p className="text-slate-600 text-lg leading-relaxed mb-4 max-w-2xl">{step.desc}</p>
                
                {/* NEW: Conditional Rendering for Application Box */}
                {step.applicationBox && step.applicationBox}

                {step.customContent}

                <div className="mt-8 bg-[#004684] text-white p-8 rounded-sm border-l-4 border-[#FDB927] max-w-2xl shadow-xl">
                  <div className="flex gap-6 items-start">
                    <Info className="text-[#FDB927] shrink-0" size={24} />
                    <div className="w-full">
                      <p className="nav-link-text text-[10px] text-[#FDB927] mb-2 uppercase tracking-widest">Institutional Guidance</p>
                      <p className="text-sm leading-relaxed opacity-90 italic mb-6">"{step.tip}"</p>
                      
                      <div className="flex flex-wrap gap-6 pt-6 border-t border-white/10">
                        {step.link && (
                          <a href={step.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-[#FDB927] font-black text-[10px] uppercase tracking-widest hover:underline">
                            Create FSA ID <ExternalLink size={14} />
                          </a>
                        )}
                        {/* NEW: Conditional Rendering for Video Link */}
                        {step.videoLink && (
                          <a href={step.videoLink} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-white font-black text-[10px] uppercase tracking-widest hover:text-[#FDB927] transition-colors">
                            <PlayCircle size={14} className="text-[#FDB927]" /> Watch Overview Video
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>

      {/* 4. PRIVACY DISCLOSURE (Compliance Requirement) */}
      <section className="mt-24 mx-4 md:mx-10 p-10 bg-slate-50 border border-slate-200 rounded-sm flex flex-col md:flex-row gap-8 items-start">
        <div className="p-4 bg-white shadow-sm rounded-xl text-[#004684]">
          <ShieldCheck size={40} />
        </div>
        <div>
          <h4 className="nav-link-text text-[12px] text-[#004684] mb-4">Privacy & Data Security Disclosure</h4>
          <p className="text-[11px] text-slate-500 leading-relaxed italic max-w-3xl">
            In accordance with the Higher Education Act (HEA), 
            [North Carolina A&T State University](https://www.ncat.edu/admissions/financial-aid/fafsa.php) 
            strictly limits the use of your FAFSA data to the administration of federal, state, and institutional financial aid. 
            Your information is protected under FERPA and **HEA Section 483(a)(3)(E)**.
          </p>
        </div>
      </section>

      {/* 5. OFFICIAL PRIORITY DEADLINE FOOTER */}
      <footer className="mt-20 bg-[#FDB927] p-16 text-center rounded-sm mx-4 md:mx-10 mb-20 shadow-2xl">
        <h3 className="nav-link-text text-[#004684] text-sm mb-4">NCAT Priority Deadline</h3>
        <h2 className="text-[#004684] font-serif font-black text-6xl mb-6 uppercase tracking-tighter">January 31</h2>
        <div className="w-16 h-1 bg-[#004684]/20 mx-auto mb-6" />
        <p className="text-[#004684] text-[11px] font-bold max-w-lg mx-auto uppercase tracking-widest leading-relaxed">
          Submit by this date for maximum consideration of all federal and [Aggie Aid](https://www.ncat.edu/admissions/financial-aid/fafsa.php) funding.
        </p>
      </footer>
    </div>
  );
};

export default FAFSASteps;