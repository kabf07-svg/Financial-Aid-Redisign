import React from 'react';
import { Link } from 'react-router-dom';

const TypesOfAid = () => {
const aidCategories = [
  {
    id: 1,
    title: "1. Scholarships",
    type: "Gift Aid",
    target: "Merit & Talent Based",
    desc: "Funds awarded based on academic excellence, athletic talent, or specific criteria. These do not require repayment.",
    includes: "Includes: Dowdy & Alumni Awards",
    path: "/scholarships", // Points to your existing Scholarships page
    color: "#22c55e"
  },
  {
    id: 2,
    title: "2. Grants",
    type: "Gift Aid",
    target: "Need-Based (FAFSA)",
    desc: "Federal and State funds awarded to students with financial need. Like scholarships, these generally do not need to be repaid.",
    includes: "Includes: Pell & NC NextLine Grants",
    path: "/grants", // 👈 UPDATED: Points to your new Grants page
    color: "#22c55e"
  },
  {
    id: 3,
    title: "3. Federal Loans",
    type: "Self-Help Aid",
    target: "Borrowed Funds",
    desc: "Borrowed money that must be repaid with interest. Includes Subsidized, Unsubsidized, and Parent PLUS options.",
    includes: "Must be repaid with interest",
    path: "/loans", // Points to your Federal Loans page
    color: "#004684"
  },
  {
    id: 4,
    title: "4. Federal Work-Study",
    type: "Self-Help Aid",
    target: "Earned Wages",
    desc: "Part-time employment for students with financial need, allowing them to earn money to help pay education expenses.",
    includes: "Paid via bi-weekly paycheck",
    path: "/work-study", // 👈 UPDATED: Points to your new Work-Study page
    color: "#004684"
  }
];

  return (
    <div style={{ paddingTop: '100px', backgroundColor: '#f1f5f9', minHeight: '100vh', paddingBottom: '80px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        
        <header style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h1 style={{ color: '#004684', fontWeight: '900', fontSize: '42px', textTransform: 'uppercase' }}>Types of Financial Aid</h1>
          <p style={{ color: '#64748b', fontSize: '18px' }}>Explore the various funding sources available to help cover your 2026-2027 educational costs.</p>
        </header>

        {/* NASFAA Disclosure Box */}
        <div style={{ backgroundColor: 'white', padding: '30px', borderRadius: '12px', borderLeft: '8px solid #FDB927', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', marginBottom: '50px' }}>
          <h3 style={{ margin: 0, color: '#004684', fontSize: '14px', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '1px' }}>⚖️ NASFAA Transparency Standard</h3>
          <p style={{ color: '#64748b', fontSize: '15px', lineHeight: '1.6', marginTop: '10px' }}>
            Understanding the difference between <strong>Gift Aid</strong> (Grants/Scholarships) and <strong>Self-Help Aid</strong> (Loans/Work) is essential for responsible borrowing and long-term financial health.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))', gap: '30px' }}>
          {aidCategories.map((aid) => (
            <div key={aid.id} style={{ backgroundColor: 'white', padding: '40px', borderRadius: '24px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', borderBottom: `8px solid ${aid.color}` }}>
              <span style={{ color: aid.color, fontWeight: '900', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px' }}>{aid.type}</span>
              <h2 style={{ color: '#004684', fontSize: '28px', fontWeight: '900', margin: '10px 0' }}>{aid.title}</h2>
              <p style={{ color: '#64748b', fontWeight: 'bold', fontSize: '14px', marginBottom: '20px' }}>Target: {aid.target}</p>
              
              <p style={{ color: '#334155', lineHeight: '1.7', marginBottom: '30px', minHeight: '80px' }}>{aid.desc}</p>
              
              <div style={{ backgroundColor: '#f8fafc', padding: '15px 20px', borderRadius: '12px', marginBottom: '30px' }}>
                <p style={{ margin: 0, fontSize: '13px', color: '#004684', fontWeight: 'bold' }}>{aid.includes}</p>
              </div>

              {/* FUNCTIONAL LINK BUTTON */}
              <Link 
                to={aid.path} 
                style={{ 
                  display: 'block', textAlign: 'center', backgroundColor: '#22c55e', color: 'white', 
                  padding: '16px', borderRadius: '12px', textDecoration: 'none', fontWeight: '900', 
                  fontSize: '14px', textTransform: 'uppercase', transition: 'background 0.2s' 
                }}
                onMouseOver={(e) => e.target.style.backgroundColor = '#16a34a'}
                onMouseOut={(e) => e.target.style.backgroundColor = '#22c55e'}
              >
                View Detailed {aid.title.split('. ')[1]}
              </Link>
            </div>
          ))}
        </div>

        <footer style={{ marginTop: '60px', textAlign: 'center', padding: '40px', borderTop: '1px solid #e2e8f0' }}>
          <h4 style={{ color: '#004684', fontWeight: '900' }}>Required Disclosure</h4>
          <p style={{ color: '#64748b', fontSize: '13px', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
            Financial aid amounts are estimated and subject to change based on FAFSA verification, enrollment status, and availability of federal/state funding. 
            Students are encouraged to review the official NCAT Consumer Information for full details.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default TypesOfAid;