import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import MeetingAndFeedback from './pages/MeetingAndFeedback';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Resume />} />
            <Route path="/meetings-and-feedback" element={<MeetingAndFeedback />} />
            {/* <Route path="/projects" element={<Projects />} />
            <Route path="/resume" element={<Resume />} /> */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
