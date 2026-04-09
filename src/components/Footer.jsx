import React from 'react';
import { Phone, Mail, MapPin, FileText, ShieldCheck, Link as LinkIcon } from 'lucide-react';

const Footer = () => {
  return (
    /* STRETCH FIX: 
       We use w-full to ensure the background color (#002d5a) fills the 
       entire width of the right-side column (touching the sidebar).
    */
    <footer className="w-full bg-[#002d5a] text-white pt-16 pb-8 border-t-4 border-[#FDB927]">
      
      {/* CENTERING FIX: 
         We use max-w-[1100px] to ensure the text and links align 
         perfectly with the page content above it.
      */}
      <div className="max-w-[1100px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* 1. CONTACT US */}
          <div className="space-y-6 text-center md:text-left">
            <h4 className="text-[#FDB927] font-black uppercase text-xs tracking-widest">Contact Us</h4>
            <div className="space-y-4">
              <a href="tel:3363347973" className="flex items-center justify-center md:justify-start gap-3 text-sm font-bold hover:text-[#FDB927] transition-colors group">
                <div className="p-2 bg-white/10 rounded-lg group-hover:bg-[#FDB927]/20 transition-all"><Phone size={18} /></div>
                (336) 334-7973
              </a>
              <a href="mailto:finaid@ncat.edu" className="flex items-center justify-center md:justify-start gap-3 text-sm font-bold hover:text-[#FDB927] transition-colors group">
                <div className="p-2 bg-white/10 rounded-lg group-hover:bg-[#FDB927]/20 transition-all"><Mail size={18} /></div>
                finaid@ncat.edu
              </a>
              <div className="flex items-start justify-center md:justify-start gap-3 text-sm font-medium opacity-80 leading-relaxed">
                <div className="p-2 bg-white/10 rounded-lg shrink-0"><MapPin size={18} /></div>
                1601 E. Market Street<br/>Dowdy Admin, Suite 100
              </div>
            </div>
          </div>

          {/* 2. STUDENT RESOURCES */}
          <div className="space-y-6">
            <h4 className="text-[#FDB927] font-black uppercase text-xs tracking-widest text-center md:text-left">Student Resources</h4>
            <ul className="grid grid-cols-1 gap-3">
              {[
                { name: 'Verification Portal', url: '#/verification' },
                { name: 'Financial Aid Forms', url: '#/forms' },
                { name: 'Scholarships', url: '#/scholarships' }, 
                { name: 'Refund Status', url: '#/refunds' },
                { name: 'Appeals Process', url: '#/appeals' },
                { name: 'Withdrawing (R2T4)', url: '#/withdrawal' },
                { name: 'Work-Study Options', url: '#/work-study' },
                { name: 'Grants Overview', url: '#/grants' }
              ].map((link) => (
                <li key={link.name} className="text-center md:text-left">
                  <a href={link.url} className="text-[11px] font-bold opacity-70 hover:opacity-100 hover:text-[#FDB927] flex items-center justify-center md:justify-start gap-2 transition-all">
                    <LinkIcon size={14} className="text-[#FDB927]/50" /> {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. COMPLIANCE */}
          <div className="space-y-6">
            <h4 className="text-[#FDB927] font-black uppercase text-xs tracking-widest text-center md:text-left">Compliance</h4>
            <ul className="grid grid-cols-1 gap-3">
              {[
                { name: 'NSLDS System', url: 'https://nsldsfap.ed.gov/' },
                { name: 'Student Rights', url: '#/terms' },
                { name: 'SAP Policy Rules', url: '#/sap' },
                { name: 'Net Price Calculator', url: '#/tuition' },
                { name: 'Tax Form 1098-T', url: '#/tax' },
                { name: 'Consumer Information', url: '#/consumer' }
              ].map((link) => (
                <li key={link.name} className="text-center md:text-left">
                  <a href={link.url} className="text-[11px] font-bold opacity-70 hover:opacity-100 hover:text-[#FDB927] flex items-center justify-center md:justify-start gap-2 transition-all">
                    <FileText size={14} className="text-[#FDB927]/50" /> {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. BRANDING */}
          <div className="space-y-8 flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="bg-white p-4 rounded-2xl w-fit shadow-xl shadow-blue-900/40">
               <span className="text-[#004684] font-black text-xl tracking-tighter uppercase">AGGIE<span className="text-[#FDB927]">AID</span></span>
            </div>
            
            <div className="space-y-3">
               <h4 className="text-[#FDB927] font-black uppercase text-[10px] tracking-widest">University Links</h4>
               <ul className="text-[11px] font-bold opacity-60 space-y-2">
                  <li><a href="https://www.ncat.edu/admissions/index.php" target="_blank" className="hover:text-[#FDB927] transition-colors">Admissions Office</a></li>
                  <li><a href="https://www.ncat.edu/registrar/index.php" target="_blank" className="hover:text-[#FDB927] transition-colors">Registrar's Office</a></li>
               </ul>
            </div>

            <div className="p-4 bg-white/5 border border-white/10 rounded-2xl flex items-center gap-3">
              <ShieldCheck className="text-green-400 shrink-0" size={20} />
              <p className="text-[9px] font-bold leading-tight opacity-50">
                Authorized Federal Provider for NC A&T State University.
              </p>
            </div>
          </div>
        </div>

        {/* LEGAL BAR */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-black uppercase tracking-widest opacity-30 text-center">
          <p>© 2026 North Carolina A&T State University</p>
          <div className="flex gap-6">
            <a href="#/terms" className="hover:text-white transition-colors underline decoration-[#FDB927]">Privacy Policy</a>
            <a href="#/welcome" className="hover:text-white transition-colors underline decoration-[#FDB927]">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;