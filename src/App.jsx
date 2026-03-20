import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import HomeReviewPage from './pages/HomeReviewPage';
import PricingPage from './pages/PricingPage';
import WorkPage from './pages/WorkPage';
import WorkPageImmersive from './pages/WorkPageImmersive';
import ContactPage from './pages/ContactPage';
import CaseStudyUkraine from './pages/CaseStudyUkraine';
import CaseStudyNicaragua from './pages/CaseStudyNicaragua';
import BookingPage from './pages/BookingPage';
import NotFoundPage from './pages/NotFoundPage';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname]);

  return null;
}

export default function App() {
  const location = useLocation();
  const isReviewPage = location.pathname === '/home-review';
  const hideFooter = location.pathname === '/work' || location.pathname === '/work-immersive' || isReviewPage;

  return (
    <div className="min-h-screen bg-parchment text-charcoal font-sans selection:bg-moss selection:text-parchment">
      <ScrollToTop />
      {!isReviewPage && <Navbar />}
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home-review" element={<HomeReviewPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/work" element={<WorkPageImmersive />} />
          <Route path="/work-archive" element={<WorkPage />} />
          <Route path="/work-immersive" element={<WorkPageImmersive />} />
          <Route path="/start" element={<ContactPage />} />
          <Route path="/work/ukraine" element={<CaseStudyUkraine />} />
          <Route path="/work/nicaragua" element={<CaseStudyNicaragua />} />
          <Route path="/book" element={<BookingPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      {!hideFooter && <Footer />}
      <Analytics />
    </div>
  );
}
