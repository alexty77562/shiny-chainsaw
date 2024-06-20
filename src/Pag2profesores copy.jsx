
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import MenuResponsive from './Componente';
import Footer from './Componente1';
import ImageCarousel from './Componente2';
import TwoSectionsComponent from './Componente3';
import ThreeCards from './Componente4';
import Testimonials from './Componente5';
import Div2 from './Componente6';
import Tituloprincipal from './Componente7';

import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MenuResponsive/>
    <p></p>
    <Div2
    titulo="Profesores"
    titulo1="Juan Isidoro"
    titulo2="Lucas Belasco"
    texto1="Reconozido Musico Brillante."
    texto2="Reconozido Musico Impecable."
    imagen1="https://upload.wikimedia.org/wikipedia/commons/c/c6/Maazel_08.jpg"
    imagen2="https://www.estadao.com.br/resizer/v2/MK4EGZLWXZIYNN6LO5IMWV66RE.jpg?quality=80&auth=69a48d159f91701c545fb9d9eff5f66f59ad805b5daded275b22afdcb6c131ad&width=1200&height=675&focal=0,0"
    />
    <Div2
    titulo1="Luisa Pereda"
    titulo2="Augusto Luis"
    texto1="Reconozido Musico Brillante."
    texto2="Reconozido Musico Impecable."
    imagen1="https://www.venezuelasinfonica.com/wp-content/uploads/2015/04/maestros-de-musica.jpg"
    imagen2="https://st.depositphotos.com/1158045/4149/i/950/depositphotos_41491619-stock-photo-music-teacher-writing-notes-on.jpg"
    />
    <Div2
    titulo1="Frankiln Jhonson"
    titulo2="Zenon Heredia"
    texto1="Reconozido Musico Brillante."
    texto2="Reconozido Musico Impecable."
    imagen1="https://img2.rtve.es/v/1056480?w=1600&preview=1301329225569.jpg"
    imagen2="https://www.la-razon.com/wp-content/uploads/2022/08/08/12/22.jpg"
    />
    <Div2
    titulo1="Hermanos Carmine"
    titulo2="Inti Bolivar"
    texto1="Reconozido Musico Brillante."
    texto2="Reconozido Musico Impecable."
    imagen1="https://www.eluniverso.com/resizer/A84ZXMJYLUYDg4Xwp0KoIaK0a2w=/1106x670/smart/filters:quality(70)/cloudfront-us-east-1.images.arcpublishing.com/eluniverso/5TIPI7M5KFE2NBQXF2O5ESUGUM.jpg"
    imagen2="https://images.ecestaticos.com/mjFKDs1-Ckypw3kbz34Bf3gIPBk=/0x0:900x600/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2Fc7c%2F122%2Fcda%2Fc7c122cda030a118539895314ea4e749.jpg"
    />
    <ImageCarousel
     imagen1="https://jocejob.com/wp-content/uploads/el-papel-que-desempenan-los-profesores-de-musica-en-la-ensenanza-de-instrumentos-musicales-6491bc8231d98.webp"
     imagen2="https://cdn.nosequeestudiar.net/uploads/2013/08/por-que-ense%C3%B1ar-musica.jpg"
     imagen3="https://www.venezuelasinfonica.com/wp-content/uploads/2016/02/005.jpg"
     />
    <Testimonials
    titulo="TESTIMONIOS"
    subtitulo="De Los Que Pasaron Clases."
    testimonio1="Aprendi a tocar mi alma."
    testimonio2="Desperte mi Imaginacion."
    testimonio3="Volvi a nacer."
    nombre1="Juan Carlos"
    nombre2="Luisa Perez"
    nombre3="Luis Montes"
    cargo1="Gerente"
    cargo2="Policia"
    cargo3="Abogado"
    imagen1="https://i.pinimg.com/236x/1a/d8/e6/1ad8e6267b2af6650cb50e7a57d8c633.jpg"
    imagen2="https://thumbs.dreamstime.com/z/cierre-de-la-mujer-joven-encima-del-retrato-belleza-cara-estilo-pelo-corto-fem-126989439.jpg"
    imagen3="https://modaellos.com/wp-content/uploads/2019/01/cortes-de-pelo-hombres-segun-forma-cara-2020-cara-redonda-estilo-pompadour.jpg"
    />
    <Footer
    titulo="Profesores"
    texto="Luchamos para que la musica sea mas escuchada en mas lugares del pais. La Musica es vida sin musica la vida no tendria sentido. "
    />
 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
