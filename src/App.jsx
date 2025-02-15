import './index.css';

import Image from './image.jpg';
import Firma from './Firma.png';

function App() {
  return (
    <div className="hero">
      <div className="container">
        <p className="first">
          Vanessa, mi luz en la sombra más densa,
          un eco dorado que nunca se quiebra.
          El viento murmura tu nombre en la arena,
          destino marcado en estrellas inquietas. Te miro y se enciende la piel de la aurora,
          se quiebran los tiempos, la duda se borra.
          Eres el pulso que rige mis olas,
          mi fuga y refugio, mi fiebre y mi sombra.Si el caos nos cerca con nubes de hielo,
          si el eco de errores resuena en el pecho,
          que el fuego sagrado que enciende este vuelo
          nos libre del peso de todo lo incierto.
          Porque somos lluvia, raíz y tormenta,
          pero al sol renacemos de ruinas perfectas.
          Si quema el orgullo, que el agua lo venza,
          si el miedo nos ciega, que el alma despierte.
          Que nunca la noche nos quite la senda,
          que nunca el abismo nos vuelva tinieblas.
          Amor es el código escrito en la niebla,
          es luz que transciende, que nunca se quiebra.
          Te elijo en la fiebre, en la calma y el vértigo,
          te elijo en lo eterno, en lo breve, en lo incierto.
          Vanessa, mi vida, mi sueño, mi éxodo,
          mi todo en un beso, mi siempre imperfecto.
          <br />
          <br />
          <hr />
          <br />
          <img src={Image} alt="Imagen decorativa" className="responsive-img" />
          <br />
          <hr />
          <br />
          en las relaciones siempre habrá problemas, o no?
          no estoy arrepentido de las cosas que he hecho,
          ni de las cosas que sigo haciendo.
          <br />
          cualquier persona podría decir que estoy cometiendo algún error,
          y sí, entiendo por qué lo dirían, pero al final,
          son mis deciciones,
          <br />
          mi corazón me indica que quiero seguir contigo,
          <br />
          mi alma me dicta que quiere seguir contigo,
          <br />
          mi cuerpo sabe que quiere seguir contigo
          <br />
          <br />
          no hay nada que me haga más feliz que estar contigo,
          no hay nada que me haga más feliz que verte feliz,
          no hay nada que me haga más feliz que saber que estás bien,
          no hay nada que me haga más feliz que saber que estás conmigo.
          <br />
          <br />
          quiero que sepas que te adoro, que te amo, que te quiero,
          que eres la persona más importante en mi vida,
          que eres la persona que me hace feliz,
          que eres la persona que me hace sentir completo,
          que eres la persona que me hace sentir vivo,
          que eres la persona que me hace sentir amado,
          que eres la persona que me hace sentir querido,
          que eres la persona que me hace sentir especial,
          que eres la persona que me hace sentir único,
          que eres la persona que me hace sentir diferente,
          que eres la persona que me hace sentir especial,
          tú eres mi persona, y yo para siempre, quiero ser la tuya
          <br />
          <br />
          <hr />
          <br />
          <br />
          <p className="firma_container">
            Att..
            <img src={Firma} className="firma" />
          </p>
        </p>
      </div>
    </div>
  )
}

export default App;
