import { Route, Routes, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { NavProvider } from '@/lib/nav-context'
import { Masthead } from '@/components/layout/Masthead'
import { IndexOverlay } from '@/components/layout/IndexOverlay'
import { PageTransition } from '@/components/layout/PageTransition'
import { Footer } from '@/components/layout/Footer'
import { Home } from '@/pages/Home'
import { Work } from '@/pages/Work'
import { Preflight } from '@/pages/work/Preflight'
import { OneFocus } from '@/pages/work/OneFocus'
import { Haze } from '@/pages/work/Haze'
import { PomodoroFocus } from '@/pages/work/PomodoroFocus'
import { Writing } from '@/pages/Writing'
import { WritingArticle } from '@/pages/writing/Article'
import { Visuals } from '@/pages/Visuals'
import { Watch } from '@/pages/Watch'
import { About } from '@/pages/About'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [pathname])
  return null
}

export default function App() {
  return (
    <NavProvider>
      <ScrollToTop />
      <Masthead />
      <IndexOverlay />
      <main>
        <PageTransition>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/work" element={<Work />} />
            <Route path="/work/preflight" element={<Preflight />} />
            <Route path="/work/onefocus" element={<OneFocus />} />
            <Route path="/work/haze" element={<Haze />} />
            <Route path="/work/pomodorofocus" element={<PomodoroFocus />} />
            <Route path="/writing" element={<Writing />} />
            <Route path="/writing/:slug" element={<WritingArticle />} />
            <Route path="/visuals" element={<Visuals />} />
            <Route path="/watch" element={<Watch />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </PageTransition>
      </main>
      <Footer />
    </NavProvider>
  )
}
