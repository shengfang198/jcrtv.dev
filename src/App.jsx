import './App.css'
import { useState } from 'react'
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

function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
      {/* Below all page content (sibling z-[1] wrapper) — was inside main z-10 and stacked on top of Profile/Projects/Footer */}
      <div
        id="particles-js"
        className="fixed inset-0 pointer-events-none z-0"
        aria-hidden="true"
      />
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
