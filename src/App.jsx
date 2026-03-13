import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import PricingPage from './pages/PricingPage';
import WorkPage from './pages/WorkPage';
import ContactPage from './pages/ContactPage';
import CaseStudyUkraine from './pages/CaseStudyUkraine';
import CaseStudyNicaragua from './pages/CaseStudyNicaragua';
import WritingPage from './pages/WritingPage';
import ArticlePage from './pages/ArticlePage';
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
  return (
    <div className="min-h-screen bg-parchment text-charcoal font-sans selection:bg-moss selection:text-parchment">
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/start" element={<ContactPage />} />
          <Route path="/work/ukraine" element={<CaseStudyUkraine />} />
          <Route path="/work/nicaragua" element={<CaseStudyNicaragua />} />
          <Route path="/writing" element={<WritingPage />} />
          <Route path="/writing/:slug" element={<ArticlePage />} />
          <Route path="/book" element={<BookingPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
