import 'bootstrap/dist/css/bootstrap.min.css';
import '../hojasDeEstilo/works.css';
import {BsGithub, BsFillEyeFill} from 'react-icons/bs';


const items = [
  {
    title: 'firebase',
    img: require('../props/react-app.png'),
    link: 'https://cursos-firebase.vercel.app/',
    github: 'https://github.com/santiago1525/cursosFirebase'
  },
  {
    title: 'landing page',
    img: require('../props/landingPage.png'),
    link: 'https://landingpage-scc.netlify.app/',
    github: 'https://github.com/santiago1525/landingPage'
  },
  {
    title: 'sistema usuarios',
    img: require('../props/sistema-usuarios.png'),
    link: 'http://sistema-usuarios.epizy.com',
    github: 'https://github.com/sistemausuarios'
  },
  {
    title: 'blog de cafe',
    img: require('../props/bloCafe.png'),
    link: 'https://blogdecafe-scc.netlify.app/',
    github: 'https://github.com/santiago1525/blogCafe'
  }

]


export default function Works() { 

  return(
    <section id='work' className='portafolio'>
      <h2 className='portafolio_title'>Portafolio</h2> 
      <div className="container portafolio_container">
        {
          items.map(item => 
            {
              return(
                  <article className='portafolio_item'>
                    <div className="portafolio_item-image">
                      <img src={item.img} alt="proyect" />
                    </div> 
                    <h3>{item.title}</h3>
                    <div className="portafolio_item-cta">
                       <a href={item.github} className='btn-pri btn' target={`_blank`}>GitHub <BsGithub /></a>
                       <a href={item.link} className='btn-sec btn' target={`_blank`}>Vista <BsFillEyeFill /></a>
                    </div>
                  </article>
              )
            
            }
          )  
        } 
    
      </div>
    </section>
   
  );
}

  
        

