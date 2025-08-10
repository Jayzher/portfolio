import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import Hero from './components/Hero';
import Sidebar from './components/SideBar';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="min-h-screen flex grow-0 shrink-0 overflow-hidden">
          <Sidebar />
          <main className="flex-1 p-6 h-[100vh] justify-center overflow-y-auto">
            <Hero />
            <Footer />
          </main>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
