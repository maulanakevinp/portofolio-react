import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Page';
import ProjectPage from './pages/projects/Page';
import WorkExperiencePage from './pages/work-experiences/Page';
import MeetingAndFeedback from './pages/meetings-and-feedback/Page';
import EnglishForTechLead from './pages/english-for-tech-lead/Page';
import PresentationAndPublicSpeaking from './pages/presentation-and-public-speaking-in-tech/Page';
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-[#0a1930]">
        <Navbar />
        <main className="grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/meetings-and-feedback" element={<MeetingAndFeedback />} />
            <Route path="/english-for-tech-lead" element={<EnglishForTechLead />} />
            <Route path="/presentation-and-public-speaking-in-tech" element={<PresentationAndPublicSpeaking />} />
            <Route path="/projects" element={<ProjectPage />} />
            <Route path="/work-experiences" element={<WorkExperiencePage />} />
            <Route path="/*" element={<HomePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}