import React from 'react';

const TaxForm1098T = () => {
  const taxSections = [
    {
      title: "1. What is the 1098-T?",
      logic: "IRS Requirement",
      who: "Eligible Students",
      desc: "The 1098-T is an annual Tuition Statement provided by NC A&T. It reports the amount of 'Qualified Tuition and Related Expenses' (QTRE) paid during the calendar year.",
      footer: "Available by Jan 31st"
    },
    {
      title: "2. Box 1 vs. Box 5",
      logic: "Form Breakdown",
      who: "Tax Calculation",
      desc: "Box 1 shows payments received for qualified expenses. Box 5 shows total scholarships or grants processed. The difference helps determine your tax credit eligibility.",
      footer: "Box 1: Payments | Box 5: Aid"
    },
    {
      title: "3. Accessing Your Form",
      logic: "Aggie Access",
      who: "Electronic Delivery",
      desc: "Save time and paper by consenting to electronic delivery. You can download and print your 1098-T directly from the Aggie Access 'Student Account' portal.",
      footer: "No login? Form sent via Mail"
    },
    {
      title: "4. Why is my Box 1 empty?",
      logic: "Common Issues",
      who: "Non-Credit/Aid-Only",
      desc: "You may not receive a form if your qualified expenses were entirely covered by scholarships, or if you are a non-resident alien (unless requested).",
      footer: "Check 'Account Activity' for details"
    }
  ];

  return (
    <div style={{ paddingTop: '80px', backgroundColor: '#f9fafb', minHeight: '100vh', width: '100%' }}>
      
      {/* 1. Full-Width Header (Standard Aggie Aid Format) */}
      <header style={{ 
        backgroundColor: '#004684', 
        padding: '80px 6%', 
        color: 'white', 
        width: '100%', 
        textAlign: 'center', 
        boxSizing: 'border-box' 
      }}>
        <h1 style={{ fontSize: '48px', fontWeight: '900', textTransform: 'uppercase', margin: 0 }}>
          1098-T <span style={{ color: '#FDB927' }}>Tax Statements</span>
        </h1>
        <p style={{ fontSize: '20px', color: '#cbd5e1', marginTop: '15px', maxWidth: '800px', margin: '15px auto' }}>
          Important tax information regarding your 2025 payments and 2026-2027 eligibility.
        </p>
      </header>

      {/* 2. MANDATORY NASFAA/IRS DISCLAIMER (Red/Orange Warning Box) */}
      <div style={{ 
        maxWidth: '1400px', 
        margin: '40px auto', 
        padding: '25px', 
        backgroundColor: '#fef2f2', 
        border: '2px solid #ef4444', 
        borderRadius: '16px', 
        display: 'flex', 
        gap: '20px', 
        alignItems: 'center' 
      }}>
        <div style={{ fontSize: '30px' }}>⚖️</div>
        <div>
          <h4 style={{ color: '#991b1b', fontWeight: '900', textTransform: 'uppercase', fontSize: '14px' }}>Legal Disclosure & Tax Advice</h4>
          <p style={{ color: '#b91c1c', fontSize: '14px', lineHeight: '1.5', margin: 0 }}>
            NC A&T and the Office of Financial Aid are <strong>legally prohibited from providing tax advice</strong>. The 1098-T form is provided for informational purposes only. Please consult a qualified tax professional or visit <strong>IRS.gov</strong> (Publication 970) for assistance with your tax return.
          </p>
        </div>
      </div>

      {/* 3. Tax Info Grid (Full Width) */}
      <main style={{ width: '100%', padding: '0 6% 60px', boxSizing: 'border-box' }}>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
          gap: '30px',
          width: '100%'
        }}>
          {taxSections.map((section, i) => (
            <section key={i} style={{ 
              backgroundColor: 'white', padding: '40px', borderRadius: '24px', 
              borderTop: '8px solid #004684', 
              boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
              display: 'flex', flexDirection: 'column'
            }}>
              <span style={{ 
                backgroundColor: '#f1f5f9', 
                color: '#004684', 
                padding: '4px 12px', borderRadius: '99px', fontSize: '11px', fontWeight: '900', width: 'fit-content', marginBottom: '15px' 
              }}>
                {section.logic}
              </span>
              <h2 style={{ color: '#004684', fontWeight: '900', fontSize: '24px', marginBottom: '5px' }}>{section.title}</h2>
              <p style={{ color: '#64748b', fontSize: '14px', fontWeight: '700', marginBottom: '20px' }}>Target: {section.who}</p>
              
              <p style={{ color: '#334155', lineHeight: '1.6', marginBottom: '30px', fontSize: '15px', flexGrow: 1 }}>
                {section.desc}
              </p>
              
              <div style={{ padding: '15px', backgroundColor: '#f8fafc', borderRadius: '12px', marginBottom: '25px' }}>
                <p style={{ fontSize: '14px', margin: 0, color: '#004684', fontWeight: 'bold' }}>{section.footer}</p>
              </div>

              <button style={{ 
                textAlign: 'center', 
                backgroundColor: '#004684', 
                color: 'white', padding: '14px', 
                borderRadius: '8px', fontWeight: '800', border: 'none', fontSize: '12px', textTransform: 'uppercase',
                cursor: 'pointer'
              }}>
                {section.title.includes("Access") ? "Log into Aggie Access" : "Read IRS FAQ"}
              </button>
            </section>
          ))}
        </div>

        {/* 4. Common Tax Credits (Student Friendly Visual) */}
        <div style={{ 
          marginTop: '60px', 
          backgroundColor: 'white', 
          padding: '40px', 
          borderRadius: '24px', 
          border: '1px solid #e2e8f0'
        }}>
          <h3 style={{ color: '#004684', fontWeight: '900', fontSize: '22px', marginBottom: '20px', textAlign: 'center' }}>Education Tax Credits</h3>
          <p style={{ textAlign: 'center', color: '#64748b', fontSize: '14px', marginBottom: '30px' }}>The 1098-T is used to determine if you are eligible for the following federal credits:</p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
            <div style={{ padding: '25px', backgroundColor: '#f0fdf4', borderRadius: '15px', border: '1px solid #dcfce7' }}>
              <h4 style={{ color: '#166534', margin: 0 }}>American Opportunity Credit (AOTC)</h4>
              <p style={{ fontSize: '13px', color: '#166534', opacity: 0.8 }}>Worth up to $2,500 per year for the first 4 years of higher education.</p>
            </div>
            <div style={{ padding: '25px', backgroundColor: '#eff6ff', borderRadius: '15px', border: '1px solid #dbeafe' }}>
              <h4 style={{ color: '#1e40af', margin: 0 }}>Lifetime Learning Credit (LLC)</h4>
              <p style={{ fontSize: '13px', color: '#1e40af', opacity: 0.8 }}>Worth up to $2,000 per year for any level of post-secondary study.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TaxForm1098T;