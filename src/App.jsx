import './App.css'
import { useEffect, useState } from 'react'
import Header from './components/Header.jsx'
import Body from './components/Body.jsx'
import Profile from './components/Profile.jsx'
import Expertise from './components/Expertise.jsx'
import Projects from './components/Projects.jsx'
import Career from './components/Career.jsx'
import MiniGame from './components/MiniGame.jsx'
import OverviewPanels from './components/OverviewPanels.jsx'
import Clock from './components/Clock.jsx'
import Footer from './components/Footer.jsx'
import projectsData from './data/ProjectsData.jsx'
import useScrollReveal from './hooks/useScrollReveal.js'

function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  useScrollReveal();

  useEffect(() => {
    const layer = document.getElementById('particles-js');
    if (!layer) return undefined;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) {
      layer.style.transform = '';
      return undefined;
    }

    let rafId = 0;
    let targetY = 0;
    let currentY = 0;

    const tick = () => {
      currentY += (targetY - currentY) * 0.08;
      layer.style.transform = `translate3d(0, ${currentY.toFixed(2)}px, 0)`;
      if (Math.abs(targetY - currentY) > 0.1) {
        rafId = requestAnimationFrame(tick);
      } else {
        currentY = targetY;
        layer.style.transform = `translate3d(0, ${currentY.toFixed(2)}px, 0)`;
        rafId = 0;
      }
    };

    const onScroll = () => {
      // Clamp to the oversized buffer so top/bottom never show empty gaps
      const maxShift = window.innerHeight * 1.05;
      targetY = Math.min(window.scrollY * 0.2, maxShift);
      if (!rafId) rafId = requestAnimationFrame(tick);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  const openProjectModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeProjectModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <div className="w-full min-h-screen relative">
      {/* Clip wrapper keeps parallax edges covered; particles layer is oversized */}
      <div className="particles-parallax-clip fixed inset-0 pointer-events-none z-0" aria-hidden="true">
        <div id="particles-js" className="particles-parallax" />
      </div>
      <div className="relative z-[1]">
        <Header />
        <Body
          projectsData={projectsData}
          selectedProject={selectedProject}
          isModalOpen={isModalOpen}
          onOpenModal={openProjectModal}
          onCloseModal={closeProjectModal}
        />
        <Profile />
        <Clock />
        <Projects
          projectsData={projectsData}
          onOpenModal={openProjectModal}
          selectedProject={selectedProject}
          isModalOpen={isModalOpen}
          onCloseModal={closeProjectModal}
        />
        <Expertise />
        <Career />
        <MiniGame />
        <OverviewPanels
          projectsData={projectsData}
          onOpenModal={openProjectModal}
        />
        <Footer />
      </div>
    </div>
  )
}

export default App
