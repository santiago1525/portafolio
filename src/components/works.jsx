import { UncontrolledCarousel } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../hojasDeEstilo/works.css';

const items = [
  {
    src: require('../props/landingPage.png'),
  },
  {
    src: require('../props/sistemaUsuarios.png'),
    
  },
  {
    src: require('../props/firebase.png'),
    
  },
  {
    src: require('../props/bloCafe.png'),
    
  }
];


export default function Works() { 

  return(
    <div className='container-all'>
        <div id='work' className='about-container'>
            <h1>
                Algunos de mis proyectos
            </h1>
            <UncontrolledCarousel items={items} />
            <a href='https://app.flutterflow.io/embed.html?ffCompiledSrc=https%3A%2F%2Fstorage.googleapis.com%2Fflutterflow-io-6f20.appspot.com%2Fbuild_outputs%2Fportafolio-ov1ma1%2Fweb%2FhbunKimaFnHGRYK0TVI4%2Fmain.dart.js#/'>Click aquí para ver los proyectos</a>
        </div>
    </div>
  );
}



  
        

