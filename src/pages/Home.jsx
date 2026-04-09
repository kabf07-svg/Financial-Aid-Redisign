import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AdvancedAggieCalculator from '../components/AdvancedAggieCalculator';

const Home = () => {
  return (
    <div style={{ backgroundColor: '#fff', minHeight: '100vh', fontFamily: '"EB Garamond", serif', color: '#333', width: '100%' }}>
      
      {/* 1. HERO HEADER - Set to 100% width */}
      <header style={{ 
        padding: '120px 6% 60px', 
        backgroundColor: '#f8fafc', 
        borderBottom: '1px solid #e2e8f0',
        width: '100%',
        boxSizing: 'border-box'
      }}>
        <div style={{ width: '100%', margin: '0 auto' }}>
          <h1 style={{ fontSize: 'clamp(32px, 8vw, 56px)', fontWeight: '900', color: '#004684', marginBottom: '20px' }}>Financial Aid</h1>
          <h3 style={{ fontSize: '24px', fontWeight: '700', color: '#004684', marginBottom: '20px' }}>Take Charge of Your Future</h3>
          <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#4b5563', maxWidth: '1000px' }}>
            Paying for college can be daunting but have no fear; we're here to help. 
            Financial aid is funding awarded to help you pay educational costs. We work to ensure every Aggie 
            has the resources to succeed, regardless of their financial background.
          </p>
          
          <div style={{ display: 'flex', gap: '15px', marginTop: '40px', flexWrap: 'wrap' }}>
            <Link to="/fafsa" style={{ backgroundColor: '#004684', color: 'white', padding: '15px 30px', borderRadius: '4px', textDecoration: 'none', fontWeight: 'bold', fontSize: '14px' }}>
              APPLY FOR FINANCIAL AID ➔
            </Link>
            <Link to="/sap-rules" style={{ backgroundColor: '#004684', color: 'white', padding: '15px 30px', borderRadius: '4px', textDecoration: 'none', fontWeight: 'bold', fontSize: '14px' }}>
              MAINTAINING ELIGIBILITY ➔
            </Link>
          </div>
        </div>
      </header>

      {/* 3. HOW CAN WE HELP SECTION (Updated with Diverse Image) */}
<section style={{ marginBottom: '80px', width: '100%' }}>
  <h2 style={{ fontSize: '32px', fontWeight: '900', color: '#004684', textAlign: 'center', marginBottom: '40px', textTransform: 'uppercase' }}>How Can We Help You?</h2>
  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '30px' }}>
    
    {/* Scholarships & Grants Card - UPDATED IMAGE */}
    <Link to="/scholarships" style={{ textDecoration: 'none' }}>
      <div style={{ backgroundColor: 'white', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.05)', transition: 'transform 0.2s ease' }} 
           onMouseOver={e => e.currentTarget.style.transform = 'translateY(-5px)'} 
           onMouseOut={e => e.currentTarget.style.transform = 'translateY(0)'}>
        <img 
          src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80" 
          style={{ width: '100%', height: '280px', objectFit: 'cover' }} 
          alt="Diverse group of Aggie students" 
        />
        <div style={{ padding: '30px' }}>
          <h3 style={{ color: '#004684', margin: '0 0 10px', fontWeight: '900' }}>Scholarships & Grants</h3>
          <p style={{ color: '#64748b', fontSize: '14px', margin: 0, lineHeight: '1.6' }}>Discover "Gift Aid" options that do not require repayment. From merit awards to federal grants.</p>
        </div>
      </div>
    </Link>

    <Link to="/loans" style={{ textDecoration: 'none' }}>
      <div style={{ backgroundColor: 'white', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.05)', transition: 'transform 0.2s ease' }}
           onMouseOver={e => e.currentTarget.style.transform = 'translateY(-5px)'} 
           onMouseOut={e => e.currentTarget.style.transform = 'translateY(0)'}>
        <img src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80" style={{ width: '100%', height: '280px', objectFit: 'cover' }} alt="Financial Planning" />
        <div style={{ padding: '30px' }}>
          <h3 style={{ color: '#004684', margin: '0 0 10px', fontWeight: '900' }}>Federal Loans</h3>
          <p style={{ color: '#64748b', fontSize: '14px', margin: 0, lineHeight: '1.6' }}>Explore student and parent loan options with fixed interest rates and flexible repayment plans.</p>
        </div>
      </div>
    </Link>

    <Link to="/basics" style={{ textDecoration: 'none' }}>
      <div style={{ backgroundColor: 'white', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.05)', transition: 'transform 0.2s ease' }}
           onMouseOver={e => e.currentTarget.style.transform = 'translateY(-5px)'} 
           onMouseOut={e => e.currentTarget.style.transform = 'translateY(0)'}>
        <img src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1200&q=80" style={{ width: '100%', height: '280px', objectFit: 'cover' }} alt="Educational Basics" />
        <div style={{ padding: '30px' }}>
          <h3 style={{ color: '#004684', margin: '0 0 10px', fontWeight: '900' }}>Aid Basics</h3>
          <p style={{ color: '#64748b', fontSize: '14px', margin: 0, lineHeight: '1.6' }}>Learn about SAI, Cost of Attendance, and how we calculate your financial aid eligibility.</p>
        </div>
      </div>
    </Link>
  </div>
</section>

      {/* 3. FEATURED CONTENT - Full bleed blocks */}
      <section style={{ width: '100%', backgroundColor: '#f1f5f9' }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          
          <div style={{ display: 'flex', flexWrap: 'wrap', width: '100%' }}>
            <div style={{ padding: '80px 6%', flex: '1 1 500px', minHeight: '400px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <h2 style={{ fontSize: '32px', color: '#004684', fontWeight: '900', marginBottom: '20px' }}>Tuition and Fees</h2>
              <p style={{ color: '#64748b', lineHeight: '1.8', marginBottom: '30px' }}>Learn more about the costs associated with enrollment at A&T in a given year.</p>
              <Link to="/rates" style={{ color: '#004684', fontWeight: 'bold', textDecoration: 'none' }}>LEARN MORE ➔</Link>
            </div>
            <div style={{ flex: '1 1 500px', minHeight: '400px', backgroundImage: 'url("https://images.unsplash.com/photo-1524178232363-1fb28f74b671?auto=format&fit=crop&w=1200&q=80")', backgroundSize: 'cover' }}></div>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap-reverse', width: '100%' }}>
            <div style={{ flex: '1 1 500px', minHeight: '400px', backgroundImage: 'url("https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=80")', backgroundSize: 'cover' }}></div>
            <div style={{ padding: '80px 6%', flex: '1 1 500px', minHeight: '400px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <h2 style={{ fontSize: '32px', color: '#004684', fontWeight: '900', marginBottom: '20px' }}>Financial Aid Policies</h2>
              <p style={{ color: '#64748b', lineHeight: '1.8', marginBottom: '30px' }}>Review University policies related to financial aid and withdrawal procedures.</p>
              <Link to="/sap-rules" style={{ color: '#004684', fontWeight: 'bold', textDecoration: 'none' }}>LEARN MORE ➔</Link>
            </div>
          </div>

        </div>
      </section>

      <section style={{ marginBottom: '80px', width: '100%' }}>
  <div style={{ textAlign: 'center', marginBottom: '50px' }}>
    <h2 style={{ fontSize: '32px', fontWeight: '900', color: '#004684', textTransform: 'uppercase' }}>Parent & Family Guide</h2>
    <div style={{ width: '60px', height: '4px', backgroundColor: '#FDB927', margin: '15px auto' }}></div>
  </div>

  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
    {/* Card 1: Contributors */}
    <div style={{ backgroundColor: 'white', padding: '40px', borderRadius: '24px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)', borderTop: '6px solid #FDB927' }}>
      <h4 style={{ color: '#004684', fontWeight: '900', fontSize: '20px', marginBottom: '15px' }}>FAFSA Contributors</h4>
      <p style={{ fontSize: '15px', color: '#64748b', lineHeight: '1.6' }}>
        Learn how parents and spouses provide information as "Contributors" on the 2026-2027 FAFSA.
      </p>
      <Link to="/fafsa" style={{ color: '#004684', fontWeight: 'bold', textDecoration: 'none', display: 'block', marginTop: '20px' }}>LEARN MORE ➔</Link>
    </div>

    {/* Card 2: PLUS Loans */}
    <div style={{ backgroundColor: 'white', padding: '40px', borderRadius: '24px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)', borderTop: '6px solid #FDB927' }}>
      <h4 style={{ color: '#004684', fontWeight: '900', fontSize: '20px', marginBottom: '15px' }}>Parent PLUS Loans</h4>
      <p style={{ fontSize: '15px', color: '#64748b', lineHeight: '1.6' }}>
        Explore federal credit-based loan options available to help cover remaining educational costs.
      </p>
      <Link to="/loans" style={{ color: '#004684', fontWeight: 'bold', textDecoration: 'none', display: 'block', marginTop: '20px' }}>VIEW OPTIONS ➔</Link>
    </div>

    {/* Card 3: FERPA */}
    <div style={{ backgroundColor: 'white', padding: '40px', borderRadius: '24px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)', borderTop: '6px solid #FDB927' }}>
      <h4 style={{ color: '#004684', fontWeight: '900', fontSize: '20px', marginBottom: '15px' }}>Privacy (FERPA)</h4>
      <p style={{ fontSize: '15px', color: '#64748b', lineHeight: '1.6' }}>
        See how your student can grant you access to view their financial aid records and billing statements.
      </p>
      <Link to="/basics" style={{ color: '#004684', fontWeight: 'bold', textDecoration: 'none', display: 'block', marginTop: '20px' }}>PRIVACY INFO ➔</Link>
    </div>
  </div>
</section>

<AdvancedAggieCalculator />
    </div>
  );
}

export default Home;