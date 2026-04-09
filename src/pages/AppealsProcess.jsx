import React from 'react';
import { 
  Scale, 
  FileText, 
  UserPlus, 
  TrendingDown, 
  AlertCircle, 
  CheckCircle2, 
  ExternalLink, 
  ShieldCheck,
  ClipboardCheck
} from 'lucide-react';

const Appeals = () => {
  const appealTypes = [
    {
      id: "01",
      title: "Special Circumstances (Financial)",
      desc: "For families who have experienced a significant change in financial status (job loss, high medical bills, or death of a provider) not reflected on the FAFSA.",
      docs: "Tax transcripts, W-2s, and termination letters.",
      tag: "Professional Judgment"
    },
    {
      id: "02",
      title: "Unusual Circumstances (Dependency)",
      desc: "For students who cannot provide parental information due to human trafficking, refugee/asylee status, or parental abandonment/estrangement.",
      docs: "Third-party statements (Social Worker, Lawyer, Clergy).",
      tag: "Dependency Appeal"
    },
    {
      id: "03",
      title: "SAP Appeal (Academic)",
      desc: "For students who have lost financial aid eligibility due to not meeting GPA or completion pace standards after a warning period.",
      docs: "Academic plan signed by advisor and personal statement.",
      tag: "Academic Progress"
    }
  ];

  return (
    <div className="w-full min-h-screen bg-white font-sans pb-20">
      
      {/* 1. BRANDED HERO SECTION */}
      <header className="relative bg-[#004684] py-20 px-10 mb-8 overflow-hidden rounded-sm">
        <div className="relative z-10 max-w-4xl">
          <h4 className="nav-link-text text-[#FDB927] text-[10px] mb-4 uppercase tracking-[0.3em]">Review & Re-evaluation</h4>
          <h1 className="text-white text-6xl font-serif font-black leading-tight mb-6">
            The <span className="text-[#FDB927]">Appeals</span> Process
          </h1>
          <div className="w-24 h-1.5 bg-[#FDB927] mb-8" />
          <p className="text-white/80 text-lg font-serif italic max-w-xl">
            We understand that life happens. Our office provides a process to review your specific situation fairly and legally.
          </p>
        </div>
      </header>

      {/* 2. MANDATORY TOP DISCLOSURE (NASFAA COMPLIANCE) */}
      <div className="mx-4 md:mx-10 mb-12 bg-[#FDB927]/10 border-l-8 border-[#FDB927] p-8 flex gap-8 items-start rounded-sm shadow-sm">
        <Scale className="text-[#004684] shrink-0" size={32} />
        <div>
          <h5 className="nav-link-text text-[11px] text-[#004684] mb-2 uppercase font-black">Professional Judgment Disclosure</h5>
          <p className="text-sm text-slate-600 leading-relaxed max-w-3xl font-medium">
            Federal law grants Financial Aid Administrators the authority to adjust data on a FAFSA based on documented **Professional Judgment.** Appeals are reviewed on a case-by-case basis. Submitting an appeal does **not** guarantee a change in your financial aid offer.
          </p>
        </div>
      </div>

      {/* 3. APPEAL TYPES (Timeline Layout) */}
      <div className="relative px-4 md:px-10 mb-20">
        <div className="absolute left-[47px] top-0 bottom-0 w-0 border-l-2 border-dashed border-slate-200 z-0" />
        
        <div className="relative z-10 space-y-20">
          {appealTypes.map((type, i) => (
            <div key={i} className="flex gap-12 items-start group">
              <div className="relative flex items-center justify-center min-w-[16px] mt-2">
                <div className="w-4 h-4 rounded-full bg-white border-4 border-[#004684] z-10 shadow-sm" />
              </div>
              
              <div className="flex-1 bg-slate-50 p-8 rounded-sm border border-slate-100 hover:border-[#FDB927] transition-all">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-2 bg-white rounded-lg shadow-sm text-[#004684]">
                    {i === 0 ? <TrendingDown size={24} /> : i === 1 ? <UserPlus size={24} /> : <ClipboardCheck size={24} />}
                  </div>
                  <span className="bg-[#004684] text-white px-3 py-1 text-[10px] font-black rounded-sm uppercase tracking-widest">
                    {type.tag}
                  </span>
                </div>
                <h3 className="text-2xl font-serif font-black text-[#004684] mb-4">{type.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 max-w-2xl">{type.desc}</p>
                
                <div className="bg-white p-4 rounded-sm border-l-4 border-[#FDB927] flex items-center justify-between">
                  <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                    Primary Documentation: <span className="text-[#004684]">{type.docs}</span>
                  </div>
                  <button className="flex items-center gap-2 text-[#004684] font-black text-[10px] uppercase tracking-widest hover:text-[#FDB927] transition-colors">
                    Start Form <ExternalLink size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4. THE DECISION TIMELINE (Process Info) */}
      <section className="mx-4 md:mx-10 mb-20 bg-[#004684] text-white p-12 rounded-sm relative overflow-hidden shadow-2xl">
        <div className="relative z-10">
          <h2 className="text-4xl font-serif font-black mb-10 italic">Processing <span className="text-[#FDB927]">Timeline</span></h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="border-t border-white/20 pt-6">
              <h4 className="text-[#FDB927] font-black text-[10px] uppercase mb-2">Step 1: Submission</h4>
              <p className="text-xs opacity-70">Submit all required forms and third-party documents via the secure portal.</p>
            </div>
            <div className="border-t border-white/20 pt-6">
              <h4 className="text-[#FDB927] font-black text-[10px] uppercase mb-2">Step 2: Review</h4>
              <p className="text-xs opacity-70">The Appeals Committee reviews cases in the order received (typically 10-14 business days).</p>
            </div>
            <div className="border-t border-white/20 pt-6">
              <h4 className="text-[#FDB927] font-black text-[10px] uppercase mb-2">Step 3: Notification</h4>
              <p className="text-xs opacity-70">Decisions are sent via NCAT student email. All committee decisions are final.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FOOTER COMPLIANCE */}
      <footer className="mt-20 mx-4 md:mx-10 p-10 bg-slate-50 border border-slate-200 rounded-sm flex flex-col md:flex-row gap-8 items-center">
        <ShieldCheck className="text-[#004684] shrink-0" size={32} />
        <div>
          <h5 className="nav-link-text text-[10px] text-[#004684] mb-2 uppercase tracking-widest">Regulatory Authority</h5>
          <p className="text-[11px] text-slate-500 leading-relaxed italic">
            Professional Judgment is governed by **Section 479A of the Higher Education Act**. Information provided in appeals is subject to the same verification and auditing standards as the initial FAFSA.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Appeals;