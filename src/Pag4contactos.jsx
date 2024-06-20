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


const Pag4contactos = () => {
  return (
    <React.Fragment>
      <MenuResponsive/>
    <Tituloprincipal
    titulo="CONTACTOS"
    titulo1="Modalidad de Pago"
    titulo2="Requisitos"
    titulo3="Horarios"
    texto1="Avenida Santacruz"
    texto2="Fundado en 1886"
    texto3="Cuna de Oro."
    imagen="https://www.infobae.com/new-resizer/R9xA4oNSiE8BpgrcxZt73Nqh7DA=/1024x512/filters:format(webp):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/5W5BVUV3ABFMLJAB4C5UQZ2UKQ.png"
    imagen1="https://img.freepik.com/vector-premium/manos-distintos-metodos-pago_23-2147674924.jpg"
    imagen2="https://ctpatcertificacion.com/wp-content/uploads/2022/08/iStock-1303877287.jpeg"
    imagen3="https://www.educaciontrespuntocero.com/wp-content/uploads/2020/08/crear-horarios.jpg"
    />
    <ImageCarousel
    imagen1="https://m.media-amazon.com/images/I/61CzV9aiTTL.jpg"
    imagen2="https://s2.best-wallpaper.net/wallpaper/1920x1080/1609/Mixing-consoles-headphones-colors-music-theme_1920x1080.jpg"
    imagen3="https://previews.123rf.com/images/alfazetchronicles/alfazetchronicles2303/alfazetchronicles230327730/200580817-electric-guitar-surrounded-by-vibrant-and-colorful-artwork-created-with-generative-ai.jpg"
    />
    <ThreeCards
    titulo="Modalidad de paga"
    titulo1="Dinero Efectivo"
    titulo2="Codigo QR"
    titulo3="Tarje De Credito"
    texto1="Pague de la forma que mas le convenga."
    texto2="Pague de la forma que mas le convenga."
    texto3="Pague de la forma que mas le convenga."
    imagen1="https://ca-times.brightspotcdn.com/dims4/default/e1f5fb5/2147483647/strip/true/crop/6500x4565+0+0/resize/1200x843!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F69%2F42%2Fa9b2b3db43e58426f0002322f65c%2Fla-tr-travel-flyguy-20191222-04.jpg"
    imagen2="https://www.proandroid.com/wp-content/uploads/2021/04/codigos-qr.png?width=1200&enable=upscale"
    imagen3="https://static.vecteezy.com/system/resources/previews/001/978/007/non_2x/close-up-images-of-multiple-credit-cards-free-photo.jpg"
    />
    <TwoSectionsComponent
    titulo="Requisitos"
    titulo1="Carnet"
    titulo2="Seguro"
    imagen1="https://cdn.bolivia.com/sdi/2022/01/21/cochabamba-oruro-sucre-el-alto-y-la-paz-vigente-exigencia-carnet-de-vacunacion-989501.jpg"
    imagen2="https://100seguro.com.ar/wp-content/uploads/2021/02/seguros.jpg"
    texto1="Nesesita este documento para realizar su registro."
    texto2="Nesesita este documento para realizar su registro."
    />
    <TwoSectionsComponent
    titulo1="Nit"
    titulo2="Titulo de bachillerato"
    imagen1="https://www.visme.co/wp-content/uploads/2021/11/docs-footer-2021.jpg"
    imagen2="https://designshack.net/wp-content/uploads/Creative-Word-Letterhead-Template.jpg"
    texto1="Nesesita este documento para realizar su registro."
    texto2="Nesesita este documento para realizar su registro."
    />
    <TwoSectionsComponent
    titulo1="Acta de nacimiento"
    titulo2="Matricula"
    imagen1="https://www.materialescolar.es/blog/wp-content/uploads/2023/04/13CD1B35-8D34-4853-B3D4-A30F20BDE62B-min.jpeg"
    imagen2="https://abi.bo/images/2024/Mayo/20/546a0882-195f-4382-adbf-32e4dbf54f55.jpg"
    texto1="Nesesita este documento para realizar su registro."
    texto2="Nesesita este documento para realizar su registro."
   
    />
    <Div2
    titulo="HORARIOS"
    titulo1="MAÑANA"
    titulo2="TARDE"
    texto1="DE OCHO DE LA MAÑANA"
    texto2="DE DOCE DE LA MAÑANA"
    imagen1="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqCk8YyDCchdpsWfw5T1JQuIQ0pyLA1D1CXw&s"
    imagen2="https://c.wallhere.com/photos/6c/50/1280x744_px_Abstract_Field_Abstract_Mountain_Nature_Wallpaper_Image_cool_hs_photos_field_photos_hd_images_for_desktop_hd_wallpapers_landscapes-801783.jpg!d"
    />
    <Div2
    titulo1="NOCHE"
    titulo2="DIURNO"
    texto1="DE OCHO DE LA NOCHE"
    texto2="DE DOCE DE LA NOCHE"
    imagen1="https://i.pinimg.com/originals/22/31/09/223109c96071bb64b41c5aeb98ee7bea.jpg"
    imagen2="https://cdn.pixabay.com/video/2023/09/23/181901-867575991_tiny.jpg"
    />
    <Testimonials
    titulo="TESTIMONIOS"
    subtitulo="Clientes Satisfechos."
    testimonio1="La mejor experiencia."
    testimonio2="Años de aprendizaje."
    testimonio3="Vibrante sensacion."
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
    titulo="Contactos"
    texto="Luchamos para que la musica sea mas escuchada en mas lugares del pais. La Musica es vida sin musica la vida no tendria sentido. "
    />
 
      
    </React.Fragment>

  );
};

export default Pag4contactos