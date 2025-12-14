import './App.css'
import { useState } from 'react'
import Cover from './components/Cover.jsx'
import Header from './components/Header.jsx'
import Body from './components/Body.jsx'
import Profile from './components/Profile.jsx'
import Expertise from './components/Expertise.jsx'
import Projects from './components/Projects.jsx'
import Career from './components/Career.jsx'
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
    <div className="w-full min-h-screen">
      <Cover />
      <Header />
      <Body
        projectsData={projectsData}
        selectedProject={selectedProject}
        isModalOpen={isModalOpen}
        onOpenModal={openProjectModal}
        onCloseModal={closeProjectModal}
      />
      <Profile />
      <Expertise />
      <Projects
        projectsData={projectsData}
        onOpenModal={openProjectModal}
        selectedProject={selectedProject}
        isModalOpen={isModalOpen}
        onCloseModal={closeProjectModal}
      />
      <Career />
      <Footer />
    </div>
  )
}

export default App
