import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Withdrawing = () => {
  const [completedSteps, setCompletedSteps] = useState([]);

  const toggleStep = (index) => {
    setCompletedSteps(prev => 
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  const progress = Math.round((completedSteps.length / 4) * 100);

  const withdrawPolicies = [
    {
      title: "1. The 60% Rule",
      logic: "Earned vs Unearned",
      desc: "Financial aid is awarded under the assumption you will attend for the entire term. If you withdraw before the 60% point, you have not 'earned' all your aid.",
      impact: "You may owe a refund to the University.",
      color: "#dc2626"
    },
    {
      title: "2. Unofficial Withdrawal",
      logic: "The 'F' Grade Rule",
      desc: "If you stop attending classes without officially withdrawing and receive all 'F' grades, we must treat it as an unofficial withdrawal.",
      impact: "50% of aid may be revoked mid-semester.",
      color: "#004684"
    },
    {
      title: "3. Future Eligibility",
      logic: "SAP Impact",
      desc: "Withdrawing counts as 'Attempted but not Earned' hours, which immediately lowers your Completion Rate (Pace).",
      impact: "Can lead to Financial Aid Suspension.",
      color: "#ea580c"
    }
  ];

  const steps = [
    { level: "Step 1", task: "Consult your Advisor", desc: "See if there is a way to stay in the course or change to a different section." },
    { level: "Step 2", task: "Speak with Financial Aid", desc: "Ask for a 'Return of Title IV' calculation estimate before you drop." },
    { level: "Step 3", task: "Submit Official Form", desc: "Complete the withdrawal process via the Registrar's Office portal." },
    { level: "Step 4", task: "Check your Balance", desc: "Monitor Aggie Access for any new charges resulting from lost aid." }
  ];

  return (
    <div style={{ paddingTop: '80px', backgroundColor: '#f9fafb', minHeight: '100vh', width: '100%' }}>
      
      {/* 1. Full-Width Header */}
      <header style={{ 
        backgroundColor: '#004684', padding: '80px 6%', color: 'white', 
        width: '100%', textAlign: 'center', boxSizing: 'border-box', borderBottom: '6px solid #FDB927'
      }}>
        <h1 style={{ fontSize: '48px', fontWeight: '900', textTransform: 'uppercase', margin: 0 }}>
          Withdrawing <span style={{ color: '#FDB927' }}>& Your Aid</span>
        </h1>
        <p style={{ fontSize: '20px', color: '#cbd5e1', marginTop: '15px', maxWidth: '800px', margin: '15px auto' }}>
          Dropping all classes has significant financial consequences. Know the rules before you go.
        </p>

        {/* Impact Tracker */}
        <div style={{ maxWidth: '600px', margin: '40px auto 0', textAlign: 'left' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', fontSize: '12px', fontWeight: 'bold' }}>
            <span>Exit Process Completion</span>
            <span>{progress}%</span>
          </div>
          <div style={{ width: '100%', height: '10px', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '10px', overflow: 'hidden' }}>
            <div style={{ width: `${progress}%`, height: '100%', backgroundColor: '#FDB927', transition: 'width 0.5s ease' }}></div>
          </div>
        </div>
      </header>

      <main style={{ width: '100%', padding: '40px 6% 60px', boxSizing: 'border-box' }}>
        
        {/* 2. Mandatory NASFAA Disclosure Box */}
        <div style={{ marginBottom: '40px', padding: '25px', backgroundColor: '#fff7ed', border: '2px solid #ea580c', borderRadius: '16px', display: 'flex', gap: '20px', alignItems: 'center' }}>
          <div style={{ fontSize: '30px' }}>📉</div>
          <div>
            <h4 style={{ color: '#9a3412', fontWeight: '900', textTransform: 'uppercase', fontSize: '14px' }}>Return of Title IV (R2T4) Notice</h4>
            <p style={{ color: '#c2410c', fontSize: '14px', lineHeight: '1.5', margin: 0 }}>
              Federal law requires the Office of Financial Aid to calculate how much aid you "earned" based on your last date of attendance. <strong>You may be required to return a portion of your Pell Grant or Loans immediately.</strong>
            </p>
          </div>
        </div>

        {/* 3. Withdrawal Policy Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: '30px', marginBottom: '60px' }}>
          {withdrawPolicies.map((policy, i) => (
            <section key={i} style={{ backgroundColor: 'white', padding: '40px', borderRadius: '24px', borderTop: `8px solid ${policy.color}`, boxShadow: '0 4px 20px rgba(0,0,0,0.08)', display: 'flex', flexDirection: 'column' }}>
              <span style={{ backgroundColor: '#f1f5f9', color: '#004684', padding: '4px 12px', borderRadius: '99px', fontSize: '11px', fontWeight: '900', width: 'fit-content', marginBottom: '15px' }}>{policy.logic}</span>
              <h2 style={{ color: '#004684', fontWeight: '900', fontSize: '26px', marginBottom: '10px' }}>{policy.title}</h2>
              <p style={{ color: '#334155', lineHeight: '1.6', marginBottom: '30px', flexGrow: 1 }}>{policy.desc}</p>
              <div style={{ padding: '15px', backgroundColor: '#fee2e2', borderRadius: '12px', borderLeft: `4px solid ${policy.color}` }}>
                <p style={{ fontSize: '13px', margin: 0, color: '#991b1b', fontWeight: 'bold' }}>Financial Impact: {policy.impact}</p>
              </div>
            </section>
          ))}
        </div>

        {/* 4. Interactive Exit Checklist */}
        <div style={{ backgroundColor: 'white', padding: '50px', borderRadius: '30px', border: '1px solid #e2e8f0' }}>
          <h3 style={{ color: '#004684', fontWeight: '900', fontSize: '24px', marginBottom: '40px', textAlign: 'center' }}>The Official Withdrawal Checklist</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            {steps.map((s, idx) => (
              <div 
                key={idx} 
                onClick={() => toggleStep(idx)}
                style={{ 
                  padding: '30px', 
                  borderRadius: '20px', 
                  cursor: 'pointer',
                  backgroundColor: completedSteps.includes(idx) ? '#f0fdf4' : '#f8fafc',
                  border: completedSteps.includes(idx) ? '2px solid #22c55e' : '2px solid transparent',
                  transition: 'all 0.2s ease'
                }}
              >
                <div style={{ color: completedSteps.includes(idx) ? '#22c55e' : '#FDB927', fontWeight: '900', fontSize: '12px', marginBottom: '10px', display: 'flex', justifyContent: 'space-between' }}>
                  {s.level}
                  {completedSteps.includes(idx) && <span>✓</span>}
                </div>
                <h4 style={{ color: '#004684', margin: '0 0 10px 0', fontSize: '18px' }}>{s.task}</h4>
                <p style={{ fontSize: '13px', color: '#64748b', lineHeight: '1.5', margin: 0 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Links to related help */}
        <div style={{ marginTop: '40px', textAlign: 'center' }}>
           <Link to="/sap-rules" style={{ color: '#004684', fontWeight: 'bold', textDecoration: 'underline', fontSize: '14px' }}>
              View how this affects your SAP Eligibility ➔
           </Link>
        </div>

      </main>
    </div>
  );
};

export default Withdrawing;
