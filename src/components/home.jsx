import '../hojasDeEstilo/home.css';
import img from '../props/img2.jpg';
import Buttons from './button';

function Home() {

  let toogle = () => {
    let element = document.querySelector('.hover-show');
    if (element.classList.contains('active')) {
      element.classList.remove('active')
    }
    else {
      element.classList.add('active')
    }
  }

  return (
    <div id='home' className='container home-container'>
      <div className='logo'>
        <div className='hover-show active' onClick={toogle}>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
        </div>

        <img src={img} alt='' />
      </div>

      <h2 id='about'>
        <span>Sobre Mi</span> <br />
        <p>
          Soy un programador web en constante evolución con experiencia en la creación de páginas web utilizando lenguajes como HTML y CSS. He trabajado en proyectos con conexión a bases de datos usando MYSQL o Firebase, y he administrado algunas de ellas a través de phpMyAdmin. Mis habilidades también incluyen el desarrollo de páginas web utilizando PHP, JavaScript y frameworks de CSS como Materialize o Bootstrap para lograr un diseño completamente responsivo. Además, he implementado proyectos trabajados con React.js, empleando la creación de componentes para una experiencia de usuario dinámica y atractiva. <br /> <br />
          <br />
          * Conocimiento en la creación de aplicaciones nativas para Android e iOS usando Flutter.

          * Experiencia en la creación de aplicaciones no code en plataformas como Glide, Adalo y FlutterFlow.

          * Conocimientos intermedios en Excel.

          * Conocimientos en otros lenguajes como C++ y Matlab.

          * Certificado en formulación de proyectos.

          * Certificado en creación de planes de marketing.
        </p>
      </h2>

      <Buttons />
    </div>
  );
}



export default Home;
