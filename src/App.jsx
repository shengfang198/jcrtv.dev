import { useEffect, useState } from 'react'
import projectsData, { projectOrder } from './data/ProjectsData.jsx'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import ProjectGrid from './components/ProjectGrid.jsx'
import ExpertiseCareer from './components/ExpertiseCareer.jsx'
import Performance from './components/Performance.jsx'
import MiniGame from './components/MiniGame.jsx'
import Footer from './components/Footer.jsx'
import ProjectPage from './components/ProjectPage.jsx'
import ExpertisePage from './components/ExpertisePage.jsx'
import CareerPage from './components/CareerPage.jsx'

function readRoute(hash = window.location.hash) {
  const projectMatch = hash.match(/^#\/project\/([^/?#]+)/)
  if (projectMatch) {
    let id = decodeURIComponent(projectMatch[1])
    if (id === 'product-design') id = 'graphic-product-design'
    if (id === 'nft-marketplace') id = 'ui-ux'
    return { page: 'project', projectId: id }
  }
  if (hash.startsWith('#/expertise')) return { page: 'expertise', projectId: null }
  if (hash.startsWith('#/career')) return { page: 'career', projectId: null }
  return { page: 'home', projectId: null }
}

function App() {
  const [route, setRoute] = useState(() => readRoute())

  useEffect(() => {
    const onHashChange = () => setRoute(readRoute())
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  useEffect(() => {
    if (route.page !== 'home') {
      window.scrollTo({ top: 0, behavior: 'instant' })
      return undefined
    }

    const sectionHash = window.location.hash
    const frame = window.requestAnimationFrame(() => {
      if (sectionHash && sectionHash !== '#' && !sectionHash.startsWith('#/')) {
        const target = document.querySelector(sectionHash)
        if (target) {
          target.scrollIntoView({ behavior: 'instant', block: 'start' })
          return
        }
      }
      window.scrollTo({ top: 0, behavior: 'instant' })
    })

    return () => window.cancelAnimationFrame(frame)
  }, [route])

  const project = route.projectId ? projectsData[route.projectId] : null

  let content
  if (route.page === 'project') {
    content = <ProjectPage project={project} projectOrder={projectOrder} projectsData={projectsData} />
  } else if (route.page === 'expertise') {
    content = <ExpertisePage />
  } else if (route.page === 'career') {
    content = <CareerPage />
  } else {
    content = (
      <main>
        <Hero />
        <ProjectGrid />
        <ExpertiseCareer />
        <Performance />
        <MiniGame />
      </main>
    )
  }

  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-ink">
      <Header />
      {content}
      <Footer />
    </div>
  )
}

export default App
