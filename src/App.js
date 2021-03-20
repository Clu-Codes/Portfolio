import React, {useState} from 'react';
import About from './components/About';
import Nav  from './components/Nav';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('About');

  const renderPage = () => {
    switch(currentPage) {
      case 'Portfolio':
        return <Portfolio />;
        case 'Contact':
        return <Contact />;
      case 'Resume':
        return <Resume />;
      default:
        return <About />
    }
  }

  return (
    <div >
      <Nav currentPage={currentPage} setCurrentPage={setCurrentPage}></Nav>
      <main>
        {renderPage(currentPage)}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;