import React from 'react';
import { Link } from 'react-router-dom';

const Deadlines = () => {
  const deadlineCards = [
    {
      title: "1. FAFSA Priority Date",
      logic: "Max Funding",
      who: "All Students",
      desc: "Meeting this target date ensures you are considered for the maximum amount of institutional and state grants (like the NC Scholarship).",
      footer: "Priority Date: February 15",
      actionText: "FAFSA Quest Guide",
      path: "/fafsa-steps", // Links to your internal Game-Style page
      isExternal: false
    },
    {
      title: "2. Scholarship Priority",
      logic: "Gift Aid",
      who: "New & Transfers",
      desc: "To be considered for the largest university-wide merit scholarships, your admissions and scholarship applications must be submitted.",
      footer: "Target: Nov 1 - Jan 15",
      actionText: "View Scholarships",
      path: "/scholarships", // Links to your internal Scholarships page
      isExternal: false
    },
    {
      title: "3. Verification Docs",
      logic: "Action Required",
      who: "Selected Students",
      desc: "If selected for verification, all documents must be uploaded to our secure portal to guarantee aid is ready for the Fall bill.",
      footer: "Document Deadline: July 1",
      actionText: "Access Forms",
      path: "/forms", // Links to your internal Forms page
      isExternal: false
    },
    {
      title: "4. Loan Requirements",
      logic: "Borrowing",
      who: "New Borrowers",
      desc: "Federal loans will not disburse until you have completed your Master Promissory Note (MPN) and Entrance Counseling.",
      footer: "Deadline: Before Aug 1",
      actionText: "Loan Information",
      path: "/loans", // Links to your internal Federal Loans page
      isExternal: false
    }
  ];

  return (
    <div style={{ paddingTop: '80px', backgroundColor: '#f9fafb', minHeight: '100vh', width: '100%' }}>
      
      <header style={{ 
        backgroundColor: '#004684', padding: '80px 6%', color: 'white', width: '100%', 
        textAlign: 'center', boxSizing: 'border-box', borderBottom: '6px solid #FDB927'
      }}>
        <h1 style={{ fontSize: '48px', fontWeight: '900', textTransform: 'uppercase', margin: 0 }}>
          Important <span style={{ color: '#FDB927' }}>Deadlines</span>
        </h1>
        <p style={{ fontSize: '20px', color: '#cbd5e1', marginTop: '15px', maxWidth: '800px', margin: '15px auto' }}>
          Stay on track for the 2026-2027 academic year. Ensure all internal requirements are completed on time.
        </p>
      </header>

      {/* NASFAA Disclosure Box */}
      <div style={{ maxWidth: '1400px', margin: '40px auto', padding: '25px', backgroundColor: '#fff7ed', border: '2px solid #ea580c', borderRadius: '16px', display: 'flex', gap: '20px', alignItems: 'center' }}>
        <div style={{ fontSize: '30px' }}>⏳</div>
        <div>
          <h4 style={{ color: '#9a3412', fontWeight: '900', textTransform: 'uppercase', fontSize: '14px' }}>Priority Funding Disclosure</h4>
          <p style={{ color: '#c2410c', fontSize: '14px', lineHeight: '1.5', margin: 0 }}>
            Certain aid types like <strong>SEOG Grants and Work-Study</strong> are limited. Use the guides below to ensure your requirements are met before the priority dates.
          </p>
        </div>
      </div>

      <main style={{ width: '100%', padding: '0 6% 60px', boxSizing: 'border-box' }}>
        <div style={{ 
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', 
          gap: '30px', width: '100%'
        }}>
          {deadlineCards.map((card, i) => (
            <section key={i} style={{ 
              backgroundColor: 'white', padding: '40px', borderRadius: '24px', 
              borderTop: '8px solid #004684', boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
              display: 'flex', flexDirection: 'column'
            }}>
              <span style={{ backgroundColor: '#f1f5f9', color: '#004684', padding: '4px 12px', borderRadius: '99px', fontSize: '11px', fontWeight: '900', width: 'fit-content', marginBottom: '15px' }}>
                {card.logic}
              </span>
              <h2 style={{ color: '#004684', fontWeight: '900', fontSize: '26px', marginBottom: '5px' }}>{card.title}</h2>
              <p style={{ color: '#64748b', fontSize: '14px', fontWeight: '700', marginBottom: '15px' }}>For: {card.who}</p>
              
              <p style={{ color: '#334155', lineHeight: '1.6', marginBottom: '25px', fontSize: '15px', flexGrow: 1 }}>
                {card.desc}
              </p>
              
              <div style={{ padding: '15px', backgroundColor: '#f8fafc', borderRadius: '12px', marginBottom: '20px', borderLeft: '4px solid #FDB927' }}>
                <p style={{ fontSize: '16px', margin: 0, color: '#004684', fontWeight: '900' }}>{card.footer}</p>
              </div>

              <Link 
                to={card.path} 
                style={{ 
                  textAlign: 'center', backgroundColor: '#004684', color: 'white', padding: '14px', 
                  borderRadius: '8px', fontWeight: '800', textDecoration: 'none', fontSize: '12px', textTransform: 'uppercase'
                }}
              >
                {card.actionText} ➔
              </Link>
            </section>
          ))}
        </div>

        {/* Required Signups Checklist (Linking to Official External Sites) */}
        <div style={{ marginTop: '60px', backgroundColor: 'white', padding: '40px', borderRadius: '24px', border: '1px solid #e2e8f0' }}>
          <h3 style={{ color: '#004684', fontWeight: '900', fontSize: '22px', marginBottom: '25px', textAlign: 'center' }}>External Required Accounts</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
            
            <div style={{ padding: '20px', border: '1px solid #f1f5f9', borderRadius: '12px' }}>
              <p style={{ fontWeight: '800', color: '#004684', marginBottom: '5px' }}>FSA ID Account</p>
              <p style={{ fontSize: '13px', color: '#64748b', marginBottom: '15px' }}>Legal signature for FAFSA. Required for students/parents.</p>
              <a href="https://studentaid.gov/fsa-id/create-account/launch" target="_blank" rel="noreferrer" style={{ color: '#ea580c', fontWeight: 'bold', fontSize: '12px' }}>Create FSA ID</a>
            </div>

            <div style={{ padding: '20px', border: '1px solid #f1f5f9', borderRadius: '12px' }}>
              <p style={{ fontWeight: '800', color: '#004684', marginBottom: '5px' }}>Direct Deposit</p>
              <p style={{ fontSize: '13px', color: '#64748b', marginBottom: '15px' }}>Sign up via Aggie Access to receive refunds faster.</p>
              <a href="https://hub.ncat.edu/administration/business-and-finance/comptroller/treasurers-office/disbursements-and-refunds.php" target="_blank" rel="noreferrer" style={{ color: '#ea580c', fontWeight: 'bold', fontSize: '12px' }}>Enroll in Refunds</a>
            </div>

            <div style={{ padding: '20px', border: '1px solid #f1f5f9', borderRadius: '12px' }}>
              <p style={{ fontWeight: '800', color: '#004684', marginBottom: '5px' }}>Student Health Insurance</p>
              <p style={{ fontSize: '13px', color: '#64748b', marginBottom: '15px' }}>Mandatory waiver or enrollment required every semester.</p>
              <a href="https://studentbluenc.com/#/ncat/welcome" target="_blank" rel="noreferrer" style={{ color: '#ea580c', fontWeight: 'bold', fontSize: '12px' }}>Submit Waiver</a>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
};

export default Deadlines;