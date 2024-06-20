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


const Pag1instrumentos = () => {
  return (
    <React.Fragment>
      <MenuResponsive />
      <Testimonials
        titulo="INSTRUMENTOS"
        cargo1="HISTORIA DE LOS INSTRUMENTOS"
        cargo2="TIPOS DE INSTRUMENTOS"
        cargo3="INSTRUMENTOS MAS POPULARES"
        imagen1="https://png.pngtree.com/background/20230528/original/pngtree-collection-of-instruments-and-music-instruments-picture-image_2774150.jpg"
        imagen2="https://www.peru.travel/Contenido/General/Imagen/es/621/1.1/quena-zampo%C3%B1a.jpg"
        imagen3="https://otrono.com/web/wp-content/uploads/2021/02/instruments-801271_1920.jpg"
      />
      <Div2
        titulo="TIPOS DE INSTRUMENTOS"
        titulo1="Cuerda"
        titulo2="Percusión"
        texto1="Son instrumentos maravillosos."
        texto2="Son instrumentos maravillosos."
        imagen1="https://img2.wallspic.com/attachments/originals/7/9/9/6/16997-se_inclino_instrumento_de_cuerda-sica-violinista-instrumento_de_cuerda-instrumentos_musicales-3725x2483.jpg"
        imagen2="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhQ8XVBqCUOLVNPX6iEIAsSN4oOrpF_VcjXQHRA3xJZWJonxzGQxwFnz9i7e4iBXyzkd5EIMcT8FChzLJVap-IXsIlXa7qJ0cEmH976isdiX8G4nYFgXChMtisOWTFcznRzWM8AkFYMKmIo/s1600/djembe.jpg"
      />
      <Div2
        titulo1="Viento"
        titulo2="Eléctricos"
        texto1="Son instrumentos maravillosos."
        texto2="Son instrumentos maravillosos."
        imagen1="https://static.vecteezy.com/system/resources/previews/005/731/231/original/abstract-trumpet-wind-musical-instrument-from-multicolored-paints-colored-drawing-illustration-of-paints-vector.jpg"
        imagen2="https://thumbs.dreamstime.com/z/instrumentos-musicales-fondo-de-pantalla-m%C3%BAsica-abstracta-hd-banner-musical-abstracto-con-292193107.jpg"
      />
      <Div2
        titulo1="Membranófonos"
        titulo2="Idiófonos"
        texto1="Son instrumentos maravillosos."
        texto2="Son instrumentos maravillosos."
        imagen1="https://www.esferamusical.com/wp-content/uploads/2020/04/bombo-3-1024x683.jpg"
        imagen2="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgN4rqifmbwgTFLfoQeXaJoalnxKnKpTYNMqiPUNV1uizI1i2jo7j2QjpNafKD1ErvgyZGbIRgeV69NN_3PgzVq3xdRZuqOPL1FVbnQ0nbwNZ2ZNycvh4ASdUc_8ss_mTk_PjIgJl6L9g/s1600/Tabla+07.jpg"
      />
      <ImageCarousel
        imagen1="https://thumbs.dreamstime.com/z/instrumentos-musicales-en-una-sala-de-m%C3%BAsica-un-estudio-grabaci%C3%B3n-vintage-con-amperios-y-sintetizadores-amps-sintetizador-ai-298164455.jpg"
        imagen2="https://st2.depositphotos.com/1177973/9072/i/450/depositphotos_90729746-stock-photo-close-up-view-on-musical.jpg"
        imagen3="https://static.vecteezy.com/system/resources/previews/003/396/672/non_2x/painting-music-instruments-free-photo.jpg"
      />
      <TwoSectionsComponent
        titulo="Instrumentos Más Populares"
        titulo1="Guitarra"
        titulo2="Violín"
        imagen1="https://previews.123rf.com/images/sopotniccy/sopotniccy1606/sopotniccy160600027/59143587-guitarra-ac%C3%BAstica-hermosa-sobre-fondo-negro.jpg"
        imagen2="https://previews.123rf.com/images/fabrikacrimea/fabrikacrimea1710/fabrikacrimea171003391/87425276-viol%C3%ADn-hermoso.jpg"
        texto1="La guitarra es un instrumento hermoso."
        texto2="El violín es un instrumento hermoso."
      />
      <TwoSectionsComponent
        titulo1="Bajo"
        titulo2="Batería"
        imagen1="https://c8.alamy.com/compes/2c3ggme/hermosa-guitarra-de-bajo-azul-sobre-una-superficie-de-madera-2c3ggme.jpg"
        imagen2="https://previews.123rf.com/images/rouslan/rouslan2310/rouslan231001629/215767775-bater%C3%ADa-y-bater%C3%ADa-hermoso-fondo-azul-y-rojo-con-rayos-de-luz-hermosos-efectos-especiales-de-humo-e.jpg"
        texto1="El bajo es un instrumento hermoso."
        texto2="La batería es un instrumento hermoso."
      />
      <TwoSectionsComponent
        titulo1="Piano"
        titulo2="Charango"
        imagen1="https://static.vecteezy.com/system/resources/previews/037/953/611/non_2x/ai-generated-beautiful-black-piano-in-the-concert-hall-photo.jpg"
        imagen2="https://i.etsystatic.com/12129575/r/il/29225d/5056443049/il_fullxfull.5056443049_hfqs.jpg"
        texto1="El piano es un instrumento hermoso."
        texto2="El charango es un instrumento hermoso."
      />
      <TwoSectionsComponent
        titulo1="Acordeón"
        titulo2="Flauta"
        imagen1="https://ortizo.com.co/cdn/shop/articles/1_1024x.jpeg?v=1573686878"
        imagen2="https://www.musicanarias.com/blog/wp-content/uploads/2017/04/bigstock-Professional-Flute-Player-Perf-138587060-1200x801.jpg"
        texto1="El acordeón es un instrumento hermoso."
        texto2="La flauta es un instrumento hermoso."
      />
      <TwoSectionsComponent
        titulo1="Ukulele"
        titulo2="Zampoña"
        imagen1="https://www.musisol.com/blog/wp-content/uploads/2019/09/stock-ukelele-1400x7871-1.jpg"
        imagen2="https://i.pinimg.com/originals/89/26/ef/8926ef60ed1f8d10bbe2dc096d619d31.jpg"
        texto1="El ukulele es un instrumento hermoso."
        texto2="La zampoña es un instrumento hermoso."
      />
      <ThreeCards
        titulo="HISTORIA DE LOS INSTRUMENTOS"
        titulo1="EN LA ANTIGÜEDAD"
        titulo2="EN LA ACTUALIDAD"
        titulo3="EN EL FUTURO"
        texto1="La historia de los instrumentos es maravillosa."
        texto2="Los instrumentos en la actualidad son espléndidos."
        texto3="El futuro de la música es increíble."
        imagen1="https://images.ctfassets.net/i01duvb6kq77/2370aed53c0599a7f5bd23a482c5c9db/ba73611ebe9d47ea6e8c350ded45047d/Instruments-of-War-hero.jpg?w=1100&q=80&fm=jpg&fl=progressive"
        imagen2="https://fotografias.lasexta.com/clipping/cmsimages02/2019/01/02/28B77F72-81F0-4291-9608-0F3DC345907D/98.jpg?crop=718,404,x0,y0&width=1900&height=1069&optimize=low&format=webply"
        imagen3="https://www.djlabcr.com/wp-content/uploads/2019/07/taller-push-dj-lab-2019-080252.jpg"
      />
      <Footer
        titulo="Instrumentos Musicales."
        texto="Luchamos para que la música sea más escuchada en más lugares del país. La música es vida, sin música la vida no tendría sentido."
      />
    </React.Fragment>
  );
};

export default Pag1instrumentos
