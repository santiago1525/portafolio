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


export default function Works({title, data, web}) { 

  return(
    <section id='work' className='portafolio'>
      <h2 className='portafolio_title'>{title}</h2> 
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
            data.map(item => 
              {
                return(
                  <SwiperSlide key={item.link}>
                    <article className={web ? 'portafolio_item' : 'portafolio_item apps'} >
                      <div className="portafolio_item-image">
                        <a href={item.link} target={`_blank`}><img src={item.img} alt="proyect" className={web ? 'img' : 'app'}/></a>
                      </div> 
                      <h3>{item.title}</h3>
                      <div className="portafolio_item-cta">
                        <a href={item.github} className={web ? 'btn-pri btn' : 'btn-pri btn desactive'} target={`_blank`}>GitHub <BsGithub /></a>
                        <a href={item.link} className='btn-sec btn'  target={`_blank`}>Vista <BsFillEyeFill /></a>
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

  
        

