import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';

// Core UI Components
import Sidebar from './components/sidebar'; 
import Footer from './components/Footer';
import AggieBot from './components/AggieBot';
import AggieAlert from './components/AggieAlert';

// Page Imports
import Home from './pages/Home';
import Scholarships from './pages/Scholarships';
import SAI from './pages/SAI';
import NetPriceCalculator from './components/NetPriceCalculator';
import TheFormula from './pages/TheFormula';
import FederalLoans from './pages/FederalLoans';
import TuitionAndFees from './pages/TuitionAndFees';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Refunds from './pages/Refunds';
import TaxForm1098T from './pages/TaxForm1098T';
import FAFSASteps from './pages/FAFSASteps';
import DeadlinesPage from './pages/Deadlines';
import SAPPolicy from './pages/SAPPolicy';
import AppealsProcess from './pages/AppealsProcess';
import Withdrawing from './pages/Withdrawing';
import ConsumerInfo from './pages/ConsumerInfo';
import StudentRights from './pages/StudentRights';
import Forms from './pages/Forms';
import Verification from './pages/Verification';
import WorkStudy from './pages/WorkStudy';
import Grants from './pages/Grants';
import TermsAndConditions from './pages/TermsAndConditions';
import StudentDashboard from './pages/StudentDashboard';

// --- HELPER: SCROLL TO TOP ---
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default function App() {
  const [student, setStudent] = useState(null);

  const handleLogin = () => {
    setStudent(student ? null : { name: "Aggie Student", id: "950xxxxxx" });
  };

  return (
    <Router>
      <ScrollToTop />
      
      {/* 1. MASTER WRAPPER: Ensures footer is pushed down */}
      <div className="flex flex-col min-h-screen w-full bg-white font-sans overflow-x-hidden">
        
        <div className="flex flex-row flex-grow w-full relative">
          
          {/* SIDEBAR: Constant width on the left */}
          <Sidebar student={student} onLogin={handleLogin} />

          {/* RIGHT COLUMN */}
          <div className="flex flex-col flex-grow relative min-w-0">
            <AggieAlert />

            {/* MAIN AREA */}
            <main id="main-content" className="flex-grow flex flex-col w-full">
              
              {/* CONTENT WRAPPER: This is the centered 'Box' for your text/pages */}
              <div className="flex-grow w-full max-w-[1100px] mx-auto p-6 md:p-10">
                <Routes>
                  <Route path="/" element={<Navigate to="/welcome" replace />} />
                  <Route path="/welcome" element={<Home student={student} />} />
                  <Route path="/scholarships" element={<Scholarships />} />
                  <Route path="/forms" element={<Forms />} />
                  <Route path="/loans" element={<FederalLoans />} />
                  <Route path="/rates" element={<TuitionAndFees />} />
                  <Route path="/privacy" element={<PrivacyPolicy />} />
                  <Route path="/SAI" element={<SAI />} />
                  <Route path="/NetpriceCalculator" element={<NetPriceCalculator />} />
                  <Route path="/Theformula" element={<TheFormula />} />
                  <Route path="/refunds" element={<Refunds />} />
                  <Route path="/tax" element={<TaxForm1098T />} />
                  <Route path="/student-rights" element={<StudentRights />} />
                  <Route path="/consumer-info" element={<ConsumerInfo />} />
                  <Route path="/fafsa" element={<FAFSASteps />} />
                  <Route path="/deadlines" element={<DeadlinesPage />} />
                  <Route path="/terms" element={<TermsAndConditions />} />
                  <Route path="/sap-rules" element={<SAPPolicy />} />
                  <Route path="/appeals" element={<AppealsProcess />} />
                  <Route path="/withdraw" element={<Withdrawing />} />
                  <Route path="/verification" element={<Verification />} />
                  <Route path="/work-study" element={<WorkStudy />} />
                  <Route path="/student-dashboard" element={<StudentDashboard />} />
                  <Route path="/grants" element={<Grants />} />
                  <Route path="*" element={<Navigate to="/welcome" replace />} />
                </Routes>
              </div>

              {/* 2. FULL-WIDTH FOOTER: Moved outside the max-w container */}
              <Footer />
            </main>

            <AggieBot /> 
          </div>
        </div>
      </div>
    </Router>
  );
}