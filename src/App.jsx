import './styling/App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from 'react';


import Layout from './components/AppLayout';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import Faq from './pages/Faq';
import JoinUs from './pages/JoinUs';
import Order from './pages/Order';
import FindUs from './pages/FindUs';
import PageNotFound from './pages/PageNotFound';
import Admin from './pages/Admin';
import Waffles from './pages/Waffles';

const LayoutedSites = () => {
  const [themeState, setThemeState] = useState('dark');
  const [themeMode, setThemeMode] = useState('dark');
  return(
    <Layout themeState={themeState} setThemeState={setThemeState} themeMode={themeMode} setThemeMode={setThemeMode}>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/order' element={<Order/>}/>
        <Route path='/join-us' element={<JoinUs/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/faq' element={<Faq/>}/>
        <Route path='/find-us' element={<FindUs/>}/>
        <Route path='/about-me' element={<AboutMe/>}/>
        <Route path='/waffles' element={<Waffles/>}/>
        <Route path='*' element={<PageNotFound/>}/>
        <Route path='/admin'/>
      </Routes>
    </Layout>
  )
}

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='*' element={<LayoutedSites/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
