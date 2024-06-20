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
    <Tituloprincipal
    titulo="Instituto Nacional De Musica"
    titulo1="Donde nos encontramos"
    titulo2="Nuestro pasado"
    titulo3="Profesionales garantizados"
    texto1="Avenida Santacruz"
    texto2="Fundado en 1886"
    texto3="Cuna de Oro."
    imagen="https://images.adsttc.com/media/images/50f8/5a7a/b3fc/4b31/6d00/01d7/large_jpg/03.jpg?1413932893"
    imagen1="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_1020,h_688/https://aycrevista.com.ar/wp-content/uploads/2022/09/arquitectura-musical-03-1020x688.jpg"
    imagen2="https://imagenes.diariodelaltoaragon.es/files/image_990_556/uploads/imagenes/2021/06/10/instituto-musical.jpeg"
    imagen3="https://c.superprof.com/i/a/24137437/11061414/600/20221206115140/violinista-pro-internacional-con-anos-exp-doy-clases-violin-electrico-acustico-enseno-improvisacion-tocar-con.jpg"
    />
    <ImageCarousel
    imagen1="https://www.lostiempos.com/sites/default/files/styles/noticia_detalle/public/media_imagen/2024/4/1/imagen_de_whatsapp_2024-03-28_a_las_00.05.25_251a7e99.jpg?itok=4W59iKlZ"
    imagen2="https://cultura.gov.py/wp-content/uploads/2016/06/orquesta-juvenil.jpg"
    imagen3="https://i0.wp.com/todalacultura.org/wp-content/uploads/2024/06/Orquesta-FOJI-2024.jpg?fit=1153%2C770&ssl=1"
    />
    <TwoSectionsComponent
    titulo="Instrumentos Musicales"
    titulo1="Guitarra"
    titulo2="Violin"
    imagen1="https://previews.123rf.com/images/sopotniccy/sopotniccy1606/sopotniccy160600027/59143587-guitarra-ac%C3%BAstica-hermosa-sobre-fondo-negro.jpg"
    imagen2="https://previews.123rf.com/images/fabrikacrimea/fabrikacrimea1710/fabrikacrimea171003391/87425276-viol%C3%ADn-hermoso.jpg"
    texto1="La Guitarra Es un instrumento hermoso."
    texto2="El Violin Es un instrumento hermoso."
    />
    <TwoSectionsComponent
    titulo1="Bajo"
    titulo2="Bateria"
    imagen1="https://c8.alamy.com/compes/2c3ggme/hermosa-guitarra-de-bajo-azul-sobre-una-superficie-de-madera-2c3ggme.jpg"
    imagen2="https://previews.123rf.com/images/rouslan/rouslan2310/rouslan231001629/215767775-bater%C3%ADa-y-bater%C3%ADa-hermoso-fondo-azul-y-rojo-con-rayos-de-luz-hermosos-efectos-especiales-de-humo-e.jpg"
    texto1="El Bajo Es un instrumento hermoso."
    texto2="La Bateria Es un instrumento hermoso."
    />
    <TwoSectionsComponent
    titulo1="Piano"
    titulo2="Charango"
    imagen1="https://static.vecteezy.com/system/resources/previews/037/953/611/non_2x/ai-generated-beautiful-black-piano-in-the-concert-hall-photo.jpg"
    imagen2="https://i.etsystatic.com/12129575/r/il/29225d/5056443049/il_fullxfull.5056443049_hfqs.jpg"
    texto1="El Piano Es un instrumento hermoso."
    texto2="El Charango Es un instrumento hermoso."
    />
    <ThreeCards
    titulo="¿Que es lo que buscamos?"
    titulo1="Mejores Musicos"
    titulo2="Abrir Mentes"
    titulo3="Culturizar"
    texto1="Mejores Musicos creamos."
    texto2="Abrir Mentes a la gente."
    texto3="Culturizar a la poblacion."
    imagen1="https://indiehoy.com/wp-content/uploads/2023/01/flea.jpg"
    imagen2="https://c8.alamy.com/compes/fxhc0j/los-musicos-callejeros-tocando-en-el-barrio-de-san-telmo-buenos-aires-argentina-fxhc0j.jpg"
    imagen3="https://www.eluniverso.com/resizer/mWkdxcJwnkUoPP7JU8b53pkBCno=/1027x670/smart/filters:quality(70)/cloudfront-us-east-1.images.arcpublishing.com/eluniverso/FWBA73AUABFQHAO7SQWIQ6FC74.jpg"
    />
    <Div2
    titulo="Nuestro Camino"
    titulo1="Fundacion"
    titulo2="Primeros Musicos"
    texto1="La Fundacion fue en 1886 por Keren Inti Luna."
    texto2="Fueron Alvaro Velasco y Efrain Torrez"
    imagen1="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Billie_Holiday%2C_Downbeat%2C_New_York%2C_N.Y.%2C_ca._Feb._1947_%28William_P._Gottlieb_04251%29.jpg/1200px-Billie_Holiday%2C_Downbeat%2C_New_York%2C_N.Y.%2C_ca._Feb._1947_%28William_P._Gottlieb_04251%29.jpg"
    imagen2="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiu43ytcek-uGAufe0YBL0uhdKggk4HvJwUGW0xAvgaozBjbQEXUEjI5WrMghcS43s1xllIp-JBcWB90HhxxM4qC97An3usE8m22FIP-4jFjX7PiGhNcbWJZirVouavJNzsUBfTjaJtxliJ0G2JhZqIidDWwrgw11cEdnG1zOSSz9OyVi2zh3BLKP7OYubO/s2294/0.jpg"
    />
    <Div2
    titulo1="Actualidad"
    titulo2="El Futuro"
    texto1="Luchamos para que la musica sea mas reconozida."
    texto2="Es llegar a mas partes de Bolivia Y el mundo."
    imagen1="https://estaticos.elcolombiano.com/binrepository/1217x730/29c0/1160d730/none/11101/AWRJ/fotos-generacion-web-7_42056527_20230331095945.jpg"
    imagen2="https://www.dakotapulse.com/wp-content/uploads/2021/01/caratula2-1-1200x800-1-1024x683.jpg"
    />
    <Testimonials
    titulo="TESTIMONIOS"
    subtitulo="De Persona que la musica les cambio la vida."
    testimonio1="Cuando los escuche mi piel se puso de gallina."
    testimonio2="Cuando los vi mi piel se puso de gallina."
    testimonio3="Cuando los vi en vivo mi piel se puso de gallina."
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
    titulo="Instituto Nacional De Musica"
    texto="Luchamos para que la musica sea mas escuchada en mas lugares del pais. La Musica es vida sin musica la vida no tendria sentido. "
    />
 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
