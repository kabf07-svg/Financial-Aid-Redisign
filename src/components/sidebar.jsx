import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = ({ student, onLogin }) => {
  const location = useLocation();

  const navGroups = [
    {
      group: "Apply & Track",
      links: [
        { name: "Office of Financial Aid", path: "/welcome" },
        { name: "FAFSA Application", path: "/fafsa" },
        { name: "Financial Aid Checklist", path: "/verification" },
        { name: "Forms & Publications", path: "/forms" },
      ]
    },
    {
      group: "Types of Aid",
      links: [
        { name: "Cost of Attendance", path: "/rates" },
        { name: "Scholarships & Grants", path: "/scholarships" },
        { name: "Debt Management (Loans)", path: "/loans" },
        { name: "Work-Study Options", path: "/work-study" },
        { name: "Grants Overview", path: "/grants" },
      ]
    },
    {
      group: "Rules & Policies",
      links: [
        { name: "Satisfactory Progress (SAP)", path: "/sap-rules" },
        { name: "Withdrawals & Refunds", path: "/refunds" },
        { name: "Appeals (Override)", path: "/appeals" },
        { name: "Terms & Conditions", path: "/terms" },
      ]
    },
    {
    group: "Institutional Disclosures", // NASFAA COMPLIANCE SECTION
    links: [
      { name: "Net Price Calculator", path: "/NetpriceCalculator" },
      { name: "Student Rights", path: "/student-rights" },
      { name: "Consumer Information", path: "/consumer-info" },
      { name: "Privacy Policy (FERPA)", path: "/privacy" },
    
     ]
    }
  ];

  return (
    <aside className="w-[300px] flex-shrink-0 bg-white border-r border-slate-100">
      <div className="py-12 pr-6">
        <nav className="relative">
          {/* Dash line stretches to the bottom of the nav container */}
          <div className="absolute left-[31px] top-0 bottom-0 w-[1px] border-l-2 border-dashed border-slate-200 z-0" />

          <div className="relative z-10">
            {navGroups.map((group, groupIdx) => (
              <div key={groupIdx} className="mb-10">
                <h4 className="px-8 mb-4 text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">
                  {group.group}
                </h4>
                <ul className="list-none p-0 m-0">
                  {group.links.map((item) => {
                    const isActive = location.pathname === item.path;
                    return (
                      <li key={item.path} className="mb-3">
                        <Link to={item.path} className="flex items-start gap-6 px-6 py-2 no-underline group">
                          <div className="mt-1 relative flex items-center justify-center min-w-[14px]">
                            {isActive ? (
                              <div className="active-indicator-bar" style={{ height: '32px' }} />
                            ) : (
                              <div className="w-4 h-4 rounded-full bg-white border-2 border-slate-300 group-hover:border-[#004684] transition-all" />
                            )}
                          </div>
                          <span className={`nav-link-text text-[13px] transition-colors ${
                            isActive ? 'text-[#004684]' : 'text-slate-600 group-hover:text-[#004684]'
                          }`}>
                            {item.name}
                          </span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </nav>
        
        <div className="px-6 mt-8">
          <button 
            onClick={onLogin} 
            className="w-full py-4 bg-[#004684] text-white text-[10px] font-black uppercase tracking-widest rounded-lg shadow-lg hover:bg-[#FDB927] hover:text-[#004684] transition-all"
          >
            {student ? 'My Aggie Dashboard' : 'Aggie Access Login'}
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;