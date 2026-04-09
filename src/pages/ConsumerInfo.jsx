import React from 'react';
import { 
  ShieldCheck, 
  BookOpen, 
  Users, 
  Activity, 
  Scale, 
  Building2, 
  GraduationCap, 
  HeartPulse,
  ExternalLink,
  Lock
} from 'lucide-react';

const ConsumerInfo = () => {
  const disclosureGroups = [
    {
      category: "Financial Aid Disclosures",
      icon: <ShieldCheck className="text-[#FDB927]" size={24} />,
      links: [
        { name: "Student Rights & Responsibilities", path: "/student-rights" },
        { name: "Net Price Calculator", path: "/calculator" },
        { name: "Refund Policy & Requirements for Withdrawal", path: "/refunds" },
        { name: "Terms of Federal Loans", path: "/loans" },
        { name: "Entrance & Exit Counseling", url: "https://studentaid.gov" }
      ]
    },
    {
      category: "Academic & Institutional",
      icon: <Building2 className="text-[#FDB927]" size={24} />,
      links: [
        { name: "Accreditation Information", url: "https://www.ncat.edu/provost/accreditation/index.php" },
        { name: "Educational Programs & Faculty", url: "#" },
        { name: "Facilities & Services for Students with Disabilities", url: "#" },
        { name: "Transfer of Credit Policies", url: "#" },
        { name: "Teacher Preparation Report", url: "#" }
      ]
    },
    {
      category: "Student Outcomes",
      icon: <GraduationCap className="text-[#FDB927]" size={24} />,
      links: [
        { name: "Graduation & Retention Rates (IPEDS)", url: "#" },
        { name: "Job Placement Rates for Graduates", url: "#" },
        { name: "Graduate & Professional Education Placement", url: "#" },
        { name: "Equity in Athletics (EADA) Report", url: "#" }
      ]
    },
    {
      category: "Health & Safety",
      icon: <HeartPulse className="text-[#FDB927]" size={24} />,
      links: [
        { name: "Annual Security & Fire Safety Report (Clery Act)", url: "#" },
        { name: "Drug & Alcohol Abuse Prevention Program", url: "#" },
        { name: "Vaccination Policies", url: "#" },
        { name: "Title IX Sexual Misconduct Resources", url: "#" }
      ]
    }
  ];

  return (
    <div className="w-full bg-white font-sans pb-20 animate-in fade-in duration-700">
      
      {/* ACADEMIC HERO BANNER */}
      <header className="relative bg-[#004684] py-20 px-10 overflow-hidden rounded-sm mb-12">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#FDB927]/10 -skew-x-12 transform translate-x-20" />
        <div className="relative z-10 max-w-4xl">
          <h4 className="nav-link-text text-[#FDB927] text-[10px] mb-4 uppercase tracking-[0.4em] font-black">
            HEOA Compliance Hub
          </h4>
          <h1 className="text-white text-6xl font-serif font-black leading-tight mb-6">
            Consumer <br /> <span className="text-[#FDB927]">Information</span>
          </h1>
          <div className="w-24 h-1.5 bg-[#FDB927] mb-8" />
          <p className="text-white/80 text-lg max-w-2xl font-medium leading-relaxed">
            North Carolina A&T State University provides the following information in accordance 
            with federal reporting requirements. This hub serves as a central resource for students, 
            families, and the public.
          </p>
        </div>
      </header>

      {/* NASFAA ETHICAL TRANSPARENCY BLOCK */}
      <section className="mx-4 md:mx-10 mb-16 bg-slate-50 border-l-8 border-[#004684] p-8 flex items-start gap-6 shadow-sm">
        <div className="p-3 bg-[#004684] text-[#FDB927] rounded-full">
          <Lock size={24} />
        </div>
        <div>
          <h5 className="nav-link-text text-[11px] text-[#004684] mb-2 uppercase font-black">Data Privacy & FERPA</h5>
          <p className="text-sm text-slate-600 leading-relaxed max-w-4xl">
            In compliance with the **Family Educational Rights and Privacy Act (FERPA)**, the University 
            protects the privacy of student education records. This hub provides links to academic, 
            financial, and safety disclosures required by the Department of Education.
          </p>
        </div>
      </section>

      {/* DISCLOSURE GRID */}
      <section className="px-4 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {disclosureGroups.map((group, idx) => (
          <div key={idx} className="bg-white border border-slate-200 rounded-sm hover:shadow-lg transition-all duration-300">
            {/* Group Header */}
            <div className="bg-slate-50 p-6 border-b border-slate-200 flex items-center gap-4">
              <div className="p-2 bg-white rounded shadow-sm">
                {group.icon}
              </div>
              <h3 className="text-xl font-serif font-black text-[#004684] uppercase tracking-tight">
                {group.category}
              </h3>
            </div>

            {/* Link List */}
            <div className="p-6">
              <ul className="space-y-4">
                {group.links.map((link, i) => (
                  <li key={i} className="flex items-center justify-between group">
                    <a 
                      href={link.url || link.path}
                      className="text-sm font-bold text-slate-600 group-hover:text-[#004684] transition-colors flex items-center gap-2"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-[#FDB927]" />
                      {link.name}
                    </a>
                    {link.url && (
                      <ExternalLink size={14} className="text-slate-300 group-hover:text-[#FDB927]" />
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>

      {/* REQUEST FOR INFORMATION */}
      <section className="mx-4 md:mx-10 mt-16 p-10 bg-[#004684] rounded-sm text-white text-center">
        <h3 className="text-2xl font-serif font-black mb-4 italic">Paper Copies & Assistance</h3>
        <p className="text-white/70 text-sm max-w-2xl mx-auto leading-relaxed mb-8">
          Federal law entitles you to a paper copy of any of these disclosures upon request. 
          Please contact the Office of Institutional Research or the Office of Financial Aid for 
          further assistance.
        </p>
        <button className="bg-[#FDB927] text-[#004684] font-black uppercase text-[10px] tracking-widest px-8 py-4 rounded-sm hover:bg-white transition-all">
          Request Printed Documentation
        </button>
      </section>

    </div>
  );
};

export default ConsumerInfo;