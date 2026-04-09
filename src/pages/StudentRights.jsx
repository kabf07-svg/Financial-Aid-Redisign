import React from 'react';
import { 
  ShieldCheck, 
  Scale, 
  FileWarning, 
  HelpCircle, 
  Info, 
  UserCheck,
  ExternalLink,
  BookOpen
} from 'lucide-react';

const StudentRights = () => {
  const sections = [
    {
      title: "Your Rights as a Student",
      icon: <Scale className="text-[#FDB927]" size={28} />,
      items: [
        "Knowledge of the cost of attendance and the university's refund policy.",
        "An explanation of the various programs in your student aid package.",
        "Information on how the university determines financial need.",
        "Disclosure of the interest rate, total amount to be repaid, and when repayment begins for any loan.",
        "A request for a review of your financial aid package if circumstances change (Professional Judgment).",
        "Knowledge of how Satisfactory Academic Progress (SAP) is determined."
      ]
    },
    {
      title: "Your Responsibilities",
      icon: <ShieldCheck className="text-[#FDB927]" size={28} />,
      items: [
        "Completing all applications accurately and submitting them on time.",
        "Providing all requested documentation, corrections, or new information (Verification).",
        "Reading and understanding all forms you are asked to sign.",
        "Performing the work agreed upon in a Federal Work-Study assignment.",
        "Reporting any outside scholarships or resources to the Office of Financial Aid.",
        "Notifying the university of any changes in name, address, or enrollment status."
      ]
    }
  ];

  return (
    <div className="w-full bg-white font-sans pb-20 animate-in fade-in duration-700">
      
      {/* INSTITUTIONAL HERO BANNER */}
      <header className="relative bg-[#004684] py-20 px-10 overflow-hidden rounded-sm mb-12">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#FDB927]/10 -skew-x-12 transform translate-x-20" />
        <div className="relative z-10 max-w-4xl">
          <h4 className="nav-link-text text-[#FDB927] text-[10px] mb-4 uppercase tracking-[0.4em] font-black">
            Consumer Information
          </h4>
          <h1 className="text-white text-6xl font-serif font-black leading-tight mb-6">
            Student Rights & <br /> <span className="text-[#FDB927]">Responsibilities</span>
          </h1>
          <div className="w-24 h-1.5 bg-[#FDB927] mb-8" />
          <p className="text-white/80 text-lg max-w-2xl font-medium leading-relaxed">
            Federal regulations require that the Office of Financial Aid notifies all students of their 
            rights and responsibilities regarding the receipt of Title IV federal funding.
          </p>
        </div>
      </header>

      {/* NASFAA COMPLIANCE STATEMENT */}
      <section className="mx-4 md:mx-10 mb-16 bg-slate-50 border-l-8 border-[#004684] p-8 flex items-start gap-6 shadow-sm">
        <div className="p-3 bg-[#004684] text-[#FDB927] rounded-full">
          <ShieldCheck size={24} />
        </div>
        <div>
          <h5 className="nav-link-text text-[11px] text-[#004684] mb-2 uppercase font-black">Statement of Ethical Principles</h5>
          <p className="text-sm text-slate-600 leading-relaxed max-w-4xl">
            In accordance with NASFAA standards, North Carolina A&T State University is committed to 
            providing fair and equitable financial aid administration. Students have the right to 
            unbiased counseling and transparent communication regarding their financial options.
          </p>
        </div>
      </section>

      {/* RIGHTS & RESPONSIBILITIES GRID */}
      <section className="px-4 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
        {sections.map((section, idx) => (
          <div key={idx} className="bg-white border border-slate-200 p-10 rounded-sm relative">
            <div className="absolute -top-6 left-10 p-4 bg-[#004684] rounded-sm shadow-xl">
              {section.icon}
            </div>
            <h3 className="text-3xl font-serif font-black text-[#004684] mt-4 mb-8">
              {section.title}
            </h3>
            <ul className="space-y-6">
              {section.items.map((item, i) => (
                <li key={i} className="flex gap-4 items-start group">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#FDB927] shrink-0" />
                  <p className="text-slate-600 text-sm leading-relaxed group-hover:text-[#004684] transition-colors">
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* FEDERAL DISCLOSURE LINKS */}
      <section className="mx-4 md:mx-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-8 border border-slate-100 bg-slate-50/50 rounded-sm hover:shadow-md transition-all">
          <BookOpen className="text-[#004684] mb-4" size={24} />
          <h4 className="font-serif font-bold text-[#004684] mb-2">FERPA Privacy</h4>
          <p className="text-xs text-slate-500 mb-4 leading-relaxed">
            Understand how your educational and financial records are protected under federal law.
          </p>
          <button className="text-[10px] font-black uppercase text-[#004684] tracking-widest hover:text-[#FDB927]">
            View FERPA Rights →
          </button>
        </div>

        <div className="p-8 border border-slate-100 bg-slate-50/50 rounded-sm hover:shadow-md transition-all">
          <FileWarning className="text-[#004684] mb-4" size={24} />
          <h4 className="font-serif font-bold text-[#004684] mb-2">Loan Counseling</h4>
          <p className="text-xs text-slate-500 mb-4 leading-relaxed">
            Borrowers have the right to receive entrance and exit counseling as part of the Direct Loan program.
          </p>
          <a href="https://studentaid.gov" className="text-[10px] font-black uppercase text-[#004684] tracking-widest hover:text-[#FDB927]">
            Go to StudentAid.gov →
          </a>
        </div>

        <div className="p-8 border border-slate-100 bg-slate-50/50 rounded-sm hover:shadow-md transition-all">
          <HelpCircle className="text-[#004684] mb-4" size={24} />
          <h4 className="font-serif font-bold text-[#004684] mb-2">Contact Counselor</h4>
          <p className="text-xs text-slate-500 mb-4 leading-relaxed">
            Still have questions about your rights? Reach out to your assigned Aggie Financial Aid Counselor.
          </p>
          <button className="text-[10px] font-black uppercase text-[#004684] tracking-widest hover:text-[#FDB927]">
            Find My Counselor →
          </button>
        </div>
      </section>

    </div>
  );
};

export default StudentRights;