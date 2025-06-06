import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Header } from './components'
import { About, Contact, Experience, Home, NotFound, Portfolio } from './pages'
import { useTheme } from './contexts/themeContext'

function App() {

const { theme } = useTheme()

  return (
    <div className={`${theme === 'dark' ? 'bg-gray-900': ''}`}>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/experience' element={<Experience />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/notfound' element={<NotFound />} />
        </Routes>

      </Router>
    </div>
  )
}

export default App
