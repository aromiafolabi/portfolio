import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './common/Navbar'
import LandingPage from './common/LandingPage'
import AboutMe from './common/AboutMe'
import Experience from './common/Experience'
import Projects from './common/Projects'
import ContactMe from './common/ContactMe'
function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route exact path="/" element={<LandingPage />} />
      <Route exact path="/about" element={<AboutMe />} />
      <Route exact path="/experience" element={<Experience />} />
      <Route exact path="/projects" element={<Projects />} />
      <Route exact path="/contact" element={<ContactMe />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
