import './App.css';
import Header from './components/header';
import Navbar from './components/nav';
import Home from './components/home';
import Works from './components/works';
import Contact from './components/contact';
import Footer from './components/footer';
// import data
import { itemsWeb } from './data';


function App() {
  return (
    <div className="App">
      <div className='bg-circle1'></div>
      <div className='bg-circle2'></div>
      <Header />
      <Navbar />
      <Home />
      <Works title={'Webs'} data={itemsWeb} web={true}/>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
