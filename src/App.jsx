import { useState } from 'react'
import Hero from './components/hero'
import BlogCard from './components/BlogCard'
import OpenBlog from './components/openblog'
import { BrowserRouter as Router,Routes , Route} from 'react-router-dom'

function App() {
  const [count, setCount] = useState()

  return (
   <Router>
    <Routes>
<Route  path="/" element={<div>
   <Hero/>
  <BlogCard/>

  </div>} />
<Route path="/openblog/:id" element={<OpenBlog/>} />

      </Routes>
   </Router>
   
    
   
  )
}
export default App
