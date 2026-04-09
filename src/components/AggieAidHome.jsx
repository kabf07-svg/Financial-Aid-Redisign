import React from 'react';

export default function AggieAidHome() {
  const links = [
    "Financial Aid & Loans",
    "Billing, Payments, & Refunds",
    "Courses & Registration",
    "Grades, Transcripts, & Graduation"
  ];

  return (
    <div style={{ fontFamily: 'sans-serif', backgroundColor: '#f9fafb', minHeight: '100vh' }}>
      {/* Navbar - Your Provided Design */}
      <nav style={{ backgroundColor: '#004684', borderBottom: '4px solid #FDB927', width: '100%', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ color: 'white', fontWeight: '900', fontSize: '24px', textTransform: 'uppercase', letterSpacing: '-1px' }}>
              Aggie<span style={{ color: '#FDB927' }}>Aid</span>
            </span>
          </div>
          <ul style={{ display: 'none', lg: 'flex', listStyle: 'none', gap: '30px', margin: 0, padding: 0 }}>
            {links.map((link) => (
              <li key={link} style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                <a href="#" style={{ color: 'white', textDecoration: 'none', fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase' }}>
                  {link}
                </a>
                <span style={{ marginLeft: '8px', fontSize: '10px', color: 'rgba(255,255,255,0.5)' }}>▼</span>
              </li>
            ))}
          </ul>
          <button style={{ backgroundColor: '#FDB927', color: '#004684', border: 'none', padding: '10px 24px', borderRadius: '99px', fontWeight: '900', textTransform: 'uppercase', cursor: 'pointer', fontSize: '12px' }}>
            Aggie Access Login
          </button>
        </div>
      </nav>

      {/* Hero Section - High Contrast Blue */}
      <header style={{ backgroundColor: '#004684', padding: '80px 24px', color: 'white', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '48px', fontWeight: '900', marginBottom: '20px', textTransform: 'uppercase' }}>
            Invest in Your <span style={{ color: '#FDB927' }}>Aggie Pride.</span>
          </h1>
          <p style={{ fontSize: '18px', color: '#cbd5e1', marginBottom: '40px', lineHeight: '1.6' }}>
            Access the tools and resources you need to fund your future at North Carolina A&T. 
            Simple, transparent, and built for your success.
          </p>
        </div>
      </header>

      {/* Pillars Section - 3 Categories */}
      <main style={{ maxWidth: '1200px', margin: '-40px auto 0', padding: '0 24px 80px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
          
          {/* Pillar 1: Scholarships */}
          <div style={{ backgroundColor: 'white', padding: '40px', borderRadius: '24px', border: '1px solid #e2e8f0', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)', display: 'flex', flexDirection: 'column' }}>
            <h2 style={{ color: '#004684', fontSize: '24px', fontWeight: '900', marginBottom: '16px', textTransform: 'uppercase' }}>Scholarships</h2>
            <p style={{ color: '#64748b', fontWeight: 'bold', textTransform: 'uppercase', fontSize: '12px', marginBottom: '8px', color: '#004684' }}>"Free Money"</p>
            <p style={{ color: '#475569', lineHeight: '1.6', marginBottom: '24px' }}>
              Awards based on merit, need, or talent that you do not have to pay back. Check your eligibility today.
            </p>
            <button style={{ marginTop: 'auto', backgroundColor: '#FDB927', color: '#004684', border: 'none', padding: '16px', borderRadius: '12px', fontWeight: '900', cursor: 'pointer', textTransform: 'uppercase' }}>
              Find Scholarships
            </button>
          </div>

          {/* Pillar 2: Loans */}
          <div style={{ backgroundColor: 'white', padding: '40px', borderRadius: '24px', border: '1px solid #e2e8f0', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)', display: 'flex', flexDirection: 'column' }}>
            <h2 style={{ color: '#004684', fontSize: '24px', fontWeight: '900', marginBottom: '16px', textTransform: 'uppercase' }}>Loans</h2>
            <p style={{ color: '#64748b', fontWeight: 'bold', textTransform: 'uppercase', fontSize: '12px', marginBottom: '8px', color: '#004684' }}>"Borrowed Money"</p>
            <p style={{ color: '#475569', lineHeight: '1.6', marginBottom: '24px' }}>
              Borrowed funds to cover the cost of education. Must be repaid with interest after graduation.
            </p>
            <button style={{ marginTop: 'auto', backgroundColor: '#FDB927', color: '#004684', border: 'none', padding: '16px', borderRadius: '12px', fontWeight: '900', cursor: 'pointer', textTransform: 'uppercase' }}>
              Loan Options
            </button>
          </div>

          {/* Pillar 3: Academic Progress */}
          <div style={{ backgroundColor: 'white', padding: '40px', borderRadius: '24px', border: '1px solid #e2e8f0', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)', display: 'flex', flexDirection: 'column' }}>
            <h2 style={{ color: '#004684', fontSize: '24px', fontWeight: '900', marginBottom: '16px', textTransform: 'uppercase' }}>Academic Progress</h2>
            <p style={{ color: '#64748b', fontWeight: 'bold', textTransform: 'uppercase', fontSize: '12px', marginBottom: '8px', color: '#004684' }}>"Stay Eligible"</p>
            <p style={{ color: '#475569', lineHeight: '1.6', marginBottom: '24px' }}>
              Keep your aid by maintaining a 2.0 GPA and a 67% completion pace. Track your status.
            </p>
            <button style={{ marginTop: 'auto', backgroundColor: '#FDB927', color: '#004684', border: 'none', padding: '16px', borderRadius: '12px', fontWeight: '900', cursor: 'pointer', textTransform: 'uppercase' }}>
              Check SAP Status
            </button>
          </div>

        </div>
      </main>

      {/* Compliance Footer */}
      <footer style={{ textAlign: 'center', padding: '40px 24px', color: '#64748b', borderTop: '1px solid #e2e8f0', marginTop: '40px' }}>
        <p style={{ fontSize: '12px', fontWeight: 'bold', marginBottom: '10px' }}>&copy; 2026 North Carolina A&T State University</p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', fontSize: '11px', textTransform: 'uppercase', fontWeight: 'bold' }}>
          <a href="#" style={{ color: '#004684', textDecoration: 'none' }}>Consumer Information</a>
          <a href="#" style={{ color: '#004684', textDecoration: 'none' }}>Privacy Policy</a>
          <a href="#" style={{ color: '#004684', textDecoration: 'none' }}>Net Price Calculator</a>
        </div>
      </footer>
    </div>
  );
}