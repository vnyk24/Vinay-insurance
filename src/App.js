import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProviderList from './components/ProviderList';
import PlanSelection from './components/PlanSelection';
import BillingPage from './components/BillingPage';
import InsuranceProvider from './components/InsuranceProvider';
import GuestPaymentPage from './components/GuestPaymentPage';
import CheckoutPage from './components/CheckoutPage';



// Import or define your BillingPage component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProviderList />} />
        <Route path="/providers/:providerId" element={<InsuranceProvider />} />
        <Route path="/plans" element={<PlanSelection />} />
        <Route path="/billing" element={<BillingPage />} />
        <Route path="/guest-payment" element={<GuestPaymentPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />

        {/* Define the route for your billing page */}
        {/* <Route path="/billing" element={<BillingPage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
