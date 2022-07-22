import 'bootstrap/dist/css/bootstrap.min.css';
import '../hojasDeEstilo/works.css';
import {BsGithub, BsFillEyeFill} from 'react-icons/bs';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
// import required modules
import { EffectCoverflow, Pagination } from "swiper";



const items = [
  {
    title: 'firebase',
    img: require('../props/react-app.png'),
    link: 'https://cursos-firebase.vercel.app/',
    github: 'https://github.com/santiago1525/cursosFirebase'
  },
  {
    title: 'Relojeria',
    img: require('../props/relojeria.png'),
    link: 'https://relojeria-scc.netlify.app/',
    github: 'https://github.com/santiago1525/relojeria'
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
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <div className="container portafolio_container">
          {
            items.map(item => 
              {
                return(
                  <SwiperSlide key={item.link}>
                    <article className='portafolio_item' >
                      <div className="portafolio_item-image">
                        <a href={item.link} target={`_blank`}><img src={item.img} alt="proyect" /></a>
                      </div> 
                      <h3>{item.title}</h3>
                      <div className="portafolio_item-cta">
                        <a href={item.github} className='btn-pri btn' target={`_blank`}>GitHub <BsGithub /></a>
                        <a href={item.link} className='btn-sec btn' target={`_blank`}>Vista <BsFillEyeFill /></a>
                      </div>
                    </article>
                    </SwiperSlide>
                )
              
              }
            )  
          }  
        </div>
      </Swiper>
    </section>
   
  );
}

  
        

