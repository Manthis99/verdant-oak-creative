import { Route, Routes } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import PricingPage from './pages/PricingPage';
import AboutPage from './pages/AboutPage';
import CaseStudyUkraine from './pages/CaseStudyUkraine';
import CaseStudyNicaragua from './pages/CaseStudyNicaragua';

export default function App() {
  return (
    <div className="min-h-screen bg-parchment text-charcoal font-sans selection:bg-moss selection:text-parchment">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/work/ukraine" element={<CaseStudyUkraine />} />
          <Route path="/work/nicaragua" element={<CaseStudyNicaragua />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
