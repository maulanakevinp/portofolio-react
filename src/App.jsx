import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import MeetingAndFeedback from './pages/MeetingAndFeedback';
import EnglishForTechLead from './pages/EnglishForTechLead';
import PresentationAndPublicSpeaking from './pages/PresentationAndPublicSpeaking';
import Page from './pages/Page';
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-[#0a1930]">
        <Navbar />
        <main className="grow">
          <Routes>
            <Route path="/" element={<Page />} />
            <Route path="/meetings-and-feedback" element={<MeetingAndFeedback />} />
            <Route path="/english-for-tech-lead" element={<EnglishForTechLead />} />
            <Route path="/presentation-and-public-speaking-in-tech" element={<PresentationAndPublicSpeaking />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
