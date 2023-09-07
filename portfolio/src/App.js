import './App.scss';
import{Route, Routes}  from 'react-router-dom'
import Layout from './components/layout';
import Home from './components/Home';
import Sidebar from './components/Sidbar';
import About from './components/About';
import Contact from './components/contact';

function App() {
  return(
    <>
    <Sidebar />
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<Home />} />
      </Route>
    </Routes>
    <Routes>
      <Route>
        <Route path='/about' element={<About />} />
      </Route>
    </Routes>
    <Routes>
      <Route>
        <Route path='/contact' element={<Contact />} />
      </Route>
    </Routes>
    </>
  )
}

export default App;

