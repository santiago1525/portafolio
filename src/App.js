import './App.css';
import Header from './components/header';
import Navbar from './components/nav';
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <div className='bg-circle1'></div>
      <div className='bg-circle2'></div>
      <Header />
      <Navbar />
      <Home />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
