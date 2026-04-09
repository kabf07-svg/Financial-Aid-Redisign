import React from 'react';
import { Briefcase, Clock, DollarSign, ShieldCheck, ExternalLink, Info, AlertCircle, Search, Landmark, FileCheck } from 'lucide-react';

const WorkStudy = () => {
  const wsSteps = [
    {
      id: "01",
      title: "Confirm Eligibility",
      desc: "Check your 2026-2027 Financial Aid Offer on Aggie Access. If you were not awarded Work-Study, you may submit a 'Work-Study Request Form' to the Office of Financial Aid to be placed on the waitlist.",
      tag: "FAFSA Required"
    },
    {
      id: "02",
      title: "Find a Position",
      desc: "On-campus student positions are posted on Handshake. You must maintain at least half-time enrollment (6 credit hours) to remain eligible for employment throughout the semester.",
      tag: "Handshake Portal"
    },
    {
      id: "03",
      title: "Onboarding & Hiring",
      desc: "Before your first shift, you must complete the I-9 and W-4 tax forms. Federal law requires original, unexpired documents (e.g., Social Security Card, Passport) for identity verification.",
      tag: "HR Compliance"
    },
    {
      id: "04",
      title: "Timesheets & Payment",
      desc: "Students are responsible for submitting electronic timesheets via Aggie Access by the bi-weekly deadline. Late submissions will result in a delay of payment to the next pay cycle.",
      tag: "Payroll Action"
    }
  ];

  return (
    <div className="w-full min-h-screen bg-white font-sans pb-20">
      
      {/* 1. HERO SECTION */}
      <header className="relative bg-[#004684] py-20 px-10 mb-8 overflow-hidden rounded-sm">
        <div className="relative z-10 max-w-4xl">
          <h4 className="nav-link-text text-[#FDB927] text-[10px] mb-4 uppercase tracking-[0.3em]">Student Employment</h4>
          <h1 className="text-white text-6xl font-serif font-black leading-tight mb-6">
            Federal <span className="text-[#FDB927]">Work-Study</span>
          </h1>
          <div className="w-24 h-1.5 bg-[#FDB927] mb-8" />
        </div>
      </header>

      {/* 2. MANDATORY TOP DISCLOSURE (NASFAA COMPLIANCE) */}
      <div className="mx-4 md:mx-10 mb-12 bg-[#FDB927]/10 border-l-8 border-[#FDB927] p-8 flex gap-8 items-start rounded-sm shadow-sm">
        <AlertCircle className="text-[#004684] shrink-0" size={32} />
        <div>
          <h5 className="nav-link-text text-[11px] text-[#004684] mb-2 uppercase font-black">Mandatory Program Disclosure</h5>
          <p className="text-sm text-slate-600 leading-relaxed max-w-3xl font-medium">
            Federal Work-Study (FWS) is **earned aid**. Funds are paid via bi-weekly paycheck directly to the student and are **NOT** credited to the University bill. Unearned FWS funds at the end of the academic year do not carry over and are forfeited.
          </p>
        </div>
      </div>

      {/* 3. PRIMARY ACTION: Handshake Portal */}
      <section className="mx-4 md:mx-10 mb-20 bg-[#004684] rounded-sm p-10 flex flex-col md:flex-row items-center gap-10 shadow-xl border-b-8 border-[#FDB927]">
        <div className="bg-white/10 p-6 rounded-full text-[#FDB927]">
          <Search size={48} />
        </div>
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-white text-3xl font-serif font-black mb-2">Secure Your Position</h2>
          <p className="text-white/70 text-sm mb-6 max-w-xl italic">
            Browse hundreds of on-campus roles ranging from Lab Assistants to Administrative Support.
          </p>
          <a href="https://ncat.joinhandshake.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-[#FDB927] text-[#004684] px-8 py-4 rounded-sm font-black text-[10px] uppercase tracking-widest hover:brightness-110 transition-all shadow-lg">
            Browse Handshake <ExternalLink size={14} />
          </a>
        </div>
      </section>

      {/* 4. THE EMPLOYMENT JOURNEY (Timeline) */}
      <div className="relative px-4 md:px-10 mb-20">
        <div className="absolute left-[47px] top-0 bottom-0 w-0 border-l-2 border-dashed border-slate-200 z-0" />
        
        <div className="relative z-10 space-y-24">
          {wsSteps.map((step, i) => (
            <div key={i} className="flex gap-12 items-start">
              <div className="relative flex items-center justify-center min-w-[16px] mt-2">
                <div className="w-4 h-4 rounded-full bg-white border-4 border-[#004684] z-10 shadow-sm" />
              </div>
              
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-2">
                  <span className="nav-link-text text-[10px] text-slate-400">{step.id}</span>
                  <span className="bg-[#004684]/10 text-[#004684] px-3 py-1 text-[9px] font-black uppercase rounded-full tracking-widest">
                    {step.tag}
                  </span>
                </div>
                <h3 className="text-3xl font-serif font-black text-[#004684] mb-4">{step.title}</h3>
                <p className="text-slate-600 text-lg leading-relaxed mb-6 max-w-2xl">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 5. EXPANDED PROGRAM DETAILS */}
      <div className="mx-4 md:mx-10 grid md:grid-cols-2 gap-8 mb-20">
        <div className="bg-slate-50 p-8 rounded-sm border border-slate-200">
           <div className="flex items-center gap-3 mb-4">
             <Landmark className="text-[#004684]" size={24} />
             <h4 className="font-serif font-black text-[#004684] text-xl">Community Service</h4>
           </div>
           <p className="text-sm text-slate-600 leading-relaxed">
             A portion of FWS funds is dedicated to Community Service. Aggies can work with local non-profits, Greensboro public schools, and literacy programs to satisfy this requirement while earning their award.
           </p>
        </div>
        <div className="bg-slate-50 p-8 rounded-sm border border-slate-200">
           <div className="flex items-center gap-3 mb-4">
             <DollarSign className="text-[#004684]" size={24} />
             <h4 className="font-serif font-black text-[#004684] text-xl">Pay Rates & Hours</h4>
           </div>
           <p className="text-sm text-slate-600 leading-relaxed">
             Pay rates start at the federal minimum but vary by department and skill level. Students are limited to **20 hours per week** during academic terms and 40 hours during official break periods.
           </p>
        </div>
      </div>

      {/* 6. COMPLIANCE FOOTER */}
      <footer className="mt-20 mx-4 md:mx-10 p-10 bg-slate-50 border border-slate-200 rounded-sm flex flex-col md:flex-row gap-8 items-center">
        <ShieldCheck className="text-[#004684] shrink-0" size={32} />
        <p className="text-[11px] text-slate-500 leading-relaxed italic">
          NC A&T Student Employment is governed by the Higher Education Act. Awards are subject to funding availability. All students must remain in Satisfactory Academic Progress (SAP) to stay employed.
        </p>
      </footer>
    </div>
  );
};

export default WorkStudy;
