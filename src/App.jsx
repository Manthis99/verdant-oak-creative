import { lazy, Suspense, useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';

const HomeReviewPage = lazy(() => import('./pages/HomeReviewPage'));
const PricingPage = lazy(() => import('./pages/PricingPage'));
const WorkPage = lazy(() => import('./pages/WorkPage'));
const WorkPageImmersive = lazy(() => import('./pages/WorkPageImmersive'));
const WritingPage = lazy(() => import('./pages/WritingPage'));
const ArticlePage = lazy(() => import('./pages/ArticlePage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const CaseStudyUkraine = lazy(() => import('./pages/CaseStudyUkraine'));
const CaseStudyNicaragua = lazy(() => import('./pages/CaseStudyNicaragua'));
const BookingPage = lazy(() => import('./pages/BookingPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));
const PersonalProjectsPage = lazy(() => import('./pages/PersonalProjectsPage'));
const IndexPage = lazy(() => import('./pages/IndexPage'));
const RoommateListingPage = lazy(() => import('./pages/RoommateListingPage'));
const HeadshotPrepPage = lazy(() => import('./pages/HeadshotPrepPage'));
const Analytics = lazy(() => import('@vercel/analytics/react').then((module) => ({ default: module.Analytics })));

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname]);

  return null;
}

function DeferredAnalytics() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if ('requestIdleCallback' in window) {
      const idleId = window.requestIdleCallback(() => setReady(true), { timeout: 3000 });
      return () => window.cancelIdleCallback(idleId);
    }

    const timeoutId = window.setTimeout(() => setReady(true), 1500);
    return () => window.clearTimeout(timeoutId);
  }, []);

  return ready ? (
    <Suspense fallback={null}>
      <Analytics />
    </Suspense>
  ) : null;
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
        <Suspense fallback={<div className="min-h-[60svh] bg-parchment" aria-label="Loading page" />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/index" element={<IndexPage />} />
            <Route path="/home-review" element={<HomeReviewPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/work" element={<WorkPageImmersive />} />
            <Route path="/work-archive" element={<WorkPage />} />
            <Route path="/work-immersive" element={<WorkPageImmersive />} />
            <Route path="/projects" element={<PersonalProjectsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/writing" element={<WritingPage />} />
            <Route path="/writing/:slug" element={<ArticlePage />} />
            <Route path="/start" element={<ContactPage />} />
            <Route path="/work/ukraine" element={<CaseStudyUkraine />} />
            <Route path="/work/nicaragua" element={<CaseStudyNicaragua />} />
            <Route path="/book" element={<BookingPage />} />
            <Route path="/roommate" element={<RoommateListingPage />} />
            <Route path="/headshot-prep" element={<HeadshotPrepPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </main>
      {!hideFooter && <Footer />}
      <DeferredAnalytics />
    </div>
  );
}
