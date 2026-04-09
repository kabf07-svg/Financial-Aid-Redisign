import React from 'react';
import { 
  CheckCircle2, 
  Circle, 
  ArrowRight, 
  FileText, 
  CreditCard, 
  UserCheck, 
  ClipboardList,
  ExternalLink
} from 'lucide-react';

const Checklist = () => {
  const steps = [
    {
      id: "01",
      title: "Complete Admissions Process",
      status: "complete",
      desc: "You must be formally admitted to the University before any financial aid package can be generated.",
      action: "Admissions Portal",
      link: "https://www.ncat.edu/admissions/index.php"
    },
    {
      id: "02",
      title: "Create FSA ID & Submit FAFSA",
      status: "current",
      desc: "Use NC A&T School Code: 002905. Ensure you use the 2024 tax information as required for the 2026-27 cycle.",
      action: "Submit FAFSA",
      link: "https://studentaid.gov"
    },
    {
      id: "03",
      title: "Review Results via Aggie Access",
      status: "upcoming",
      desc: "Check your Student Aid Report (SAR) and monitor the 'Requirements' tab in Aggie Access for missing documents.",
      action: "Aggie Access",
      link: "#"
    },
    {
      id: "04",
      title: "Register for New Student Orientation",
      status: "upcoming",
      desc: "Attendance at orientation is mandatory for aid disbursement and final enrollment verification.",
      action: "Orientation Info",
      link: "#"
    },
    {
      id: "05",
      title: "Review & Satisfy Your Bill",
      status: "upcoming",
      desc: "View your E-Bill. Grants and scholarships are automatically accepted; loans must be manually accepted or declined.",
      action: "View E-Bill",
      link: "#"
    },
    {
      id: "06",
      title: "Finalize Gap Funding",
      status: "upcoming",
      desc: "If aid is less than charges, consider a Payment Plan, Parent PLUS Loan, or Alternative Loans.",
      action: "Payment Options",
      link: "#"
    }
  ];

  return (
    <div className="w-full bg-white font-sans pb-20">
      
      {/* INSTITUTIONAL HERO SECTION */}
      <header className="bg-[#004684] py-20 px-10 mb-12 rounded-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-full bg-[#FDB927] opacity-10 -skew-x-12 translate-x-20" />
        <div className="relative z-10 max-w-4xl">
          <h4 className="nav-link-text text-[#FDB927] text-[10px] mb-4 tracking-[0.3em] font-black uppercase">
            Enrollment Management
          </h4>
          <h1 className="text-white text-6xl font-serif font-black leading-tight mb-6">
            Financial Aid <br /> <span className="text-[#FDB927]">Checklist</span>
          </h1>
          <div className="w-24 h-1.5 bg-[#FDB927] mb-8" />
          <p className="text-white/80 text-lg font-medium max-w-2xl leading-relaxed">
            A satisfied student bill is a satisfied enrollment. Follow these six essential steps to ensure 
            your funding is secured for the upcoming academic year.
          </p>
        </div>
      </header>

      {/* THE PATHWAY CONTAINER */}
      <div className="max-w-5xl mx-auto px-6 relative">
        
        {/* VERTICAL DASHED LINE (University Design Element) */}
        <div className="absolute left-[47px] top-0 bottom-0 w-0 border-l-2 border-dashed border-slate-200 z-0" />

        <div className="space-y-16 relative z-10">
          {steps.map((step, idx) => (
            <div key={idx} className="flex gap-10 items-start group">
              
              {/* STEP INDICATOR */}
              <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center border-4 bg-white transition-all shadow-sm ${
                step.status === 'complete' ? 'border-green-500 text-green-500' : 
                step.status === 'current' ? 'border-[#004684] text-[#004684] scale-110 shadow-lg' : 
                'border-slate-200 text-slate-300'
              }`}>
                {step.status === 'complete' ? <CheckCircle2 size={24} /> : <span className="text-xs font-black">{step.id}</span>}
              </div>

              {/* STEP CONTENT */}
              <div className={`flex-grow p-8 rounded-sm border transition-all ${
                step.status === 'current' ? 'bg-slate-50 border-[#004684]/20 shadow-md' : 'bg-white border-slate-100'
              }`}>
                <div className="flex justify-between items-start mb-4">
                  <h3 className={`text-2xl font-serif font-black ${
                    step.status === 'upcoming' ? 'text-slate-400' : 'text-[#004684]'
                  }`}>
                    {step.title}
                  </h3>
                  {step.status === 'current' && (
                    <span className="bg-[#FDB927] text-[#004684] text-[9px] font-black px-3 py-1 rounded-full uppercase tracking-tighter">
                      Action Required
                    </span>
                  )}
                </div>

                <p className="text-slate-600 text-sm leading-relaxed mb-8 max-w-2xl">
                  {step.desc}
                </p>

                {step.status !== 'upcoming' && (
                  <a 
                    href={step.link}
                    className="inline-flex items-center gap-2 text-[#004684] font-black text-[10px] uppercase tracking-widest hover:text-[#FDB927] transition-colors"
                  >
                    {step.action} <ArrowRight size={14} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* INSTITUTIONAL REMINDER BANNER */}
      <section className="max-w-5xl mx-auto px-6 mt-20">
        <div className="bg-[#004684] p-12 rounded-sm text-white flex flex-col md:flex-row gap-12 items-center">
          <div className="shrink-0 p-6 bg-white/10 rounded-full border border-white/20">
            <ClipboardList size={48} className="text-[#FDB927]" />
          </div>
          <div>
            <h2 className="text-3xl font-serif font-black mb-4 italic text-[#FDB927]">Grants & Scholarships</h2>
            <p className="text-white/70 text-sm leading-relaxed max-w-xl">
              Remember: Grants and Scholarships are <span className="text-white font-bold underline decoration-[#FDB927] decoration-2">automatically accepted</span> on your behalf. 
              No further action is required for these awards to appear on your e-bill once the semester begins.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Checklist;