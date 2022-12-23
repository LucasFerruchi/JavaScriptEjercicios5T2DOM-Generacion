export default class Persona{
    constructor(nombre, edad, sexo, peso, altura, fechaNacimiento){
        this.nombre=nombre;
        this.edad=edad;
        this.dni=this.generarDNI();
        this.sexo=sexo;
        this.peso=peso;
        this.altura=altura;
        this.fechaNacimiento=fechaNacimiento;
    }
    mostrarDetalleGeneracion(generacion, marcoTemporal, historia, rasgo){
        return `<ul>
        <li> Generación: ${generacion}</li>
        <li> Marco temporal:  ${marcoTemporal} </li>
        <li> Circunstancia histórica:  ${historia}</li>
        <li> Rasgo característico: ${rasgo} </li>
      </ul>
      `;
    }
    mostrarGeneracion(){
        if (this.fechaNacimiento >= 1930 && this.fechaNacimiento <= 1948) {
            return this.mostrarDetalleGeneracion(
              "Silent Generation",
              "1930-1948",
              "Conflictos bélicos",
              "Austeridad. Sus actitudes se inclinaban a no arriesgar y a ir a lo seguro, tienden a ser ahorrativos e incluso avaros. Buscan un equilibrio entre trabajo y vida. 😐"
            );
          } else if (this.fechaNacimiento >= 1949 && this.fechaNacimiento <= 1968) {
            return this.mostrarDetalleGeneracion(
              "Baby Boom",
              "1949-1968",
              "Paz y explosión demográfica",
              "Ambicion. Experimentador, individualista, espíritu libre. 🤑"
            );
          } else if (this.fechaNacimiento >= 1969 && this.fechaNacimiento < 1980) {
            return this.mostrarDetalleGeneracion(
              "Generación X",
              "1969 - 1980",
              "Crisis del 73 y transición española",
              "Obsesión por el exito. Resistentes, ingeniosos, autogestionados, adaptables. 😎"
            );
          } else if (this.fechaNacimiento >= 1981 && this.fechaNacimiento < 1993) {
            return this.mostrarDetalleGeneracion(
              "Generación Y (Millenials)",
              "1981 - 1993",
              "Inicio de la digitalización",
              "Generación digital, hiperconectada y con altos valores sociales y éticos. 🤗"
            );
          } else if (this.fechaNacimiento >= 1994 && this.fechaNacimiento < 2010) {
            return this.mostrarDetalleGeneracion(
              "Generación Z (Centennials)",
              "1994 - 2010",
              "Expansión masiva de internet",
              "Irreverencia. Tienen un enfoque más social, se sienten cómodos con la diversidad y priorizan los temas de bienestar y salud mental. 😋"
            );
          } else if (this.fechaNacimiento >= 2011) {
            return this.mostrarDetalleGeneracion(
              "Generación Alfa",
              "2011 - Actualidad",
              "Nativos Digitales al 100%",
              "Son predilectos. Expertos en tecnología y no conocerán un mundo sin redes sociales. https://www.chicmagazine.com.mx/estilo-de-vida/generacion-alfa-que-es-y-cuales-son-sus-caracteristicas 😜"
            );
          } else {
            return '<p>No se posee datos para la fecha seleccionada</p>';
          }
    }
    esMayorEdad(){
        if(this.edad>=18){
            return true;
        }else{
            return false;
        }
    }
    mostrarDatos(){
        return `<ul>
        <li>Nombre: ${this.nombre}</li>
        <li>Edad: ${this.edad}</li>
        <li>DNI: ${this.dni}</li>
        <li>Genero:  ${(this.sexo ==='H')?'Hombre':'Mujer'}</li>
        <li>Peso: ${this.peso} kg</li>
        <li>Altura: ${this.altura} mts</li>
        <li>Año de nacimiento: ${this.fechaNacimiento}</li>
        </ul>
        `;
    }
    generarDNI(){
        return parseInt(Math.random()*99999999);
    }
    get mostrarNombre(){
        return this.nombre;
    }
}