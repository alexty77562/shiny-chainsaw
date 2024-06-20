

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
    <h1><center>Historia</center></h1>
    <ImageCarousel
    imagen1="https://i0.wp.com/amun.bo/wp-content/uploads/2019/06/WhatsApp-Image-2019-06-28-at-19.49.15-1-1.jpeg?fit=1024%2C793&ssl=1"
    imagen2="https://cdn.forbes.com.mx/2017/03/edificios-culturales.jpg"
    imagen3="https://ovacen.com/wp-content/uploads/2016/05/arquitectura-y-musica.jpg"
    />
    <Div2
    titulo1="Primeros años"
    titulo2="El fundador"
    texto1="Esta es nuestra Historia y lo contaremos."
    texto2="Esta es nuestra Historia y lo mostraremos."
    imagen1="https://viajes.nationalgeographic.com.es/medio/2019/01/30/royal-albert-hall-londres_b6cf814a_1200x630.jpg"
    imagen2="https://fmrockandpop.com/media/k2/items/cache/cd987d7a0c4a555f82bf8ae85d1acd38_L.webp?t=20230321_145352"
    />
    <Div2
    titulo1="La fundacion"
    titulo2="El Futuro"
    texto1="Esta es nuestra Historia y lo contaremos."
    texto2="Esta es nuestra Historia y lo mostraremos."
    imagen1="https://st3.idealista.com/news/archivos/styles/fullwidth_xl/public/2016-09/royal_ontario_museum_0.jpg?VersionId=r18xAD9oba5CQPKKZXLjNLoPjY9y8q4H&itok=a87aZ_Hn"
    imagen2="https://media.admagazine.com/photos/618a6721ac089e092dcc00e1/4:3/w_2828,h_2121,c_limit/67336.jpg"
    />
    <Div2
    titulo1="Primeros profesores"
    titulo2="Primeros estudiantes"
    texto1="Esta es nuestra Historia y lo contaremos."
    texto2="Esta es nuestra Historia y lo mostraremos."
    imagen1="https://images.squarespace-cdn.com/content/v1/5de6b88b8ec727201d648eaa/eff0864d-c8f4-44db-8014-1c6ecd1d7159/Pel%C3%ADculas+y+m%C3%BAsica"
    imagen2="https://los40.com/resizer/v2/TJCHUMIUGBI5LIRLN5EIBUHYFU.jpg?auth=57fd018711fa58b78f5472c0ec2e9eadfcdb0395d2f011f87ec3a74763de6422&quality=70&width=1200&height=675&smart=true"
    />
    <ThreeCards
    titulo="Nuestros Tres Primeros Edificios"
    titulo1="Edificio Gran Inti"
    titulo2="Edificio Luna Blanca"
    titulo3="Edificio Montreal"
    texto1="La Primera gran creacion."
    texto2="La Segunda gran creacion."
    texto3="La Tercera gran creacion."
    imagen1="https://okdiario.com/coolthelifestyle/img/2022/03/03/rkdbdxqa-horizontal.jpg"
    imagen2="https://imagenes.diariodevalladolid.es/files/image_large/uploads/2024/03/14/65f3262eec047.jpeg"
    imagen3="https://i.ytimg.com/vi/NuujgtdwVzI/maxresdefault.jpg"
    />
    <Tituloprincipal
    titulo="Sigue Tu Camino"
    titulo1="El pasado"
    titulo2="EL presente"
    titulo3="El futuro"
    texto1="Añoremos el pasado."
    texto2="Vivamos el presente."
    texto3="Esperemos el futuro."
    imagen="https://img.unocero.com/2022/01/Plataformas-de-musica-streaming-mas-usadas-en-el-mundo-2022.jpg"
    imagen1="https://artehistoria.online/wp-content/uploads/2023/08/musica-andaluza-del-siglo-VIII.webp"
    imagen2="https://www.lavanguardia.com/files/og_thumbnail/uploads/2019/10/07/5fa5300cbe836.jpeg"
    imagen3="https://www.dakotapulse.com/wp-content/uploads/2021/01/vday2020_z6a7.1280-1024x576.jpg"
    />
    <Footer
    titulo="Historia"
    texto="Luchamos para que la musica sea mas escuchada en mas lugares del pais. La Musica es vida sin musica la vida no tendria sentido. "
    />
 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
