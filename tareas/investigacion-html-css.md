-- Investigación sobre HTML y CSS --

-- Introducción --

HTML y CSS son dos tecnologías fundamentales para el desarrollo de páginas web. Ambas trabajan conjuntamente, pero cumplen funciones diferentes: HTML se utiliza principalmente para estructurar y definir el contenido de una página web, mientras que CSS permite establecer su apariencia y presentación visual.

El conocimiento de estas tecnologías constituye una de las bases principales para el desarrollo web, ya que permite crear páginas organizadas, accesibles y adaptables a diferentes dispositivos.


--  ¿Qué es HTML?  --

HTML significa HyperText Markup Language (Lenguaje de Marcado de Hipertexto). Es el lenguaje de marcado estándar utilizado para estructurar el contenido de las páginas web.

HTML permite indicar al navegador qué tipo de contenido contiene un documento, como títulos, párrafos, imágenes, enlaces, listas, tablas, formularios y diferentes secciones de una página.

HTML no es un lenguaje de programación. Es un lenguaje de marcado porque utiliza elementos y etiquetas para definir la estructura y el significado del contenido.

Por ejemplo, un título puede representarse mediante:

html
<h1>Mi página web</h1>


Y un párrafo mediante:

html
<p>Este es un párrafo de ejemplo.</p>


Evolución y versión actual de HTML

HTML ha evolucionado desde sus primeras especificaciones hasta convertirse en el estándar utilizado actualmente en la Web.

Entre sus etapas más importantes se encuentran:

HTML 1.0: primeras especificaciones utilizadas para estructurar documentos web.
HTML 2.0: estableció una especificación más formal del lenguaje.
HTML 3.2: incorporó nuevas características y elementos.
HTML 4.01: introdujo mejoras importantes en formularios, tablas y estructura de los documentos.
XHTML: adaptación de HTML basada en las reglas de XML.
HTML5: incorporó elementos semánticos, audio, video, gráficos mediante Canvas y mejoras para aplicaciones web.
HTML Living Standard: es el modelo actual de desarrollo de HTML.

-- HTML Living Standard --

Actualmente, HTML no se desarrolla siguiendo el modelo tradicional de una nueva versión numerada cada cierto tiempo.

La especificación principal es el HTML Living Standard, mantenido por WHATWG (Web Hypertext Application Technology Working Group). Se denomina "Living Standard" porque se actualiza continuamente conforme evolucionan las tecnologías web.

Por esta razón, aunque el término HTML5 continúa siendo muy utilizado para referirse al HTML moderno, actualmente es más preciso hablar del HTML Living Standard.


-- ¿Qué es CSS? --

CSS significa Cascading Style Sheets (Hojas de Estilo en Cascada). Es un lenguaje utilizado para definir la presentación visual de documentos estructurados como HTML.

CSS permite controlar diferentes aspectos de una página web, entre ellos:

- Colores.
- Tipos y tamaños de letra.
- Márgenes y espacios.
- Bordes.
- Fondos.
- Dimensiones de los elementos.
- Posicionamiento.
- Distribución del contenido.
- Diseño adaptable a diferentes dispositivos.
- Transiciones y animaciones.

Por ejemplo, HTML puede definir un título:

html
<h1>Mi página web</h1>


Mientras CSS puede establecer su apariencia:

css
h1 {
    color: blue;
    font-size: 32px;
}


De esta manera, HTML establece principalmente la estructura y CSS controla principalmente la presentación.



-- Evolución y estado actual de CSS --

CSS también ha evolucionado desde sus primeras versiones.

Sus principales etapas incluyen:

- CSS1: primera especificación oficial de CSS.
- CSS2: incorporó nuevas capacidades para controlar la presentación de los documentos.
- CSS2.1: revisión de CSS2 que corrigió y aclaró diferentes aspectos de la especificación.
- CSS3: introdujo un enfoque modular, en el que las diferentes características de CSS comenzaron a desarrollarse mediante módulos independientes.

-- ¿Cuál es la versión más reciente de CSS? --

Actualmente no es correcto decir simplemente que existe una única versión llamada CSS4.

CSS se desarrolla mediante diferentes módulos y especificaciones independientes. Cada módulo puede avanzar a un nivel diferente de desarrollo.

Algunos ejemplos de módulos de CSS son:

- CSS Color.
- CSS Selectors.
- CSS Grid Layout.
- CSS Flexible Box Layout.
- CSS Fonts.
- CSS Transitions.
- CSS Animations.
- Media Queries.

El W3C (World Wide Web Consortium) publica los llamados CSS Snapshots, documentos que reúnen las especificaciones que representan el estado de CSS en un determinado momento.

El CSS Snapshot 2026 es el snapshot publicado por el W3C para representar el estado de las especificaciones CSS en 2026.

Por lo tanto, para describir correctamente el estado actual de CSS es mejor hablar de CSS como un conjunto de módulos en evolución, en lugar de referirse a una supuesta versión única denominada CSS4.


-- Diferencias entre HTML y CSS --

            HTML                                                    CSS
Define la estructura del contenido.	              Define principalmente la presentación visual.
Utiliza elementos y etiquetas.	                  Utiliza selectores, propiedades y valores.
Permite crear títulos, párrafos, imágenes,	      Permite definir colores, fuentes, tamaños, espacios y 
 enlaces, formularios, etc.                       distribución.
Se enfoca en la estructura y significado          Se enfoca principalmente en el diseño y apariencia.
del contenido.
Es fundamental para organizar el contenido        Es fundamental para mejorar su presentación y diseño.
de una página web.

HTML y CSS no son tecnologías que compitan entre sí. Por el contrario, se complementan para construir páginas web.



-- Principales etiquetas utilizadas en HTML --

HTML posee una gran cantidad de elementos. A continuación se presentan algunas de las etiquetas más utilizadas.

<html>

Es el elemento raíz de un documento HTML y contiene los demás elementos de la página.

html
<html>
</html>


<head>

Contiene información y metadatos del documento que normalmente no forman parte del contenido visible de la página.

html
<head>
</head>


<title>

Define el título que normalmente aparece en la pestaña del navegador.

html
<title>Mi página web</title>


<body>

Contiene el contenido visible de la página web.

html
<body>
    Contenido de la página
</body>


<h1> hasta <h6>

Se utilizan para representar encabezados de diferentes niveles.

html
<h1>Título principal</h1>
<h2>Subtítulo</h2>
<h3>Otro encabezado</h3>


<h1> representa el nivel de encabezado más alto y <h6> uno de menor nivel.

<p>

Se utiliza para crear párrafos.

html
<p>Este es un párrafo de ejemplo.</p>


<a>

Permite crear enlaces o hipervínculos.

html
<a href="https://www.ejemplo.com">Visitar sitio</a>


<img>

Permite insertar imágenes.

html
<img src="imagen.jpg" alt="Descripción de la imagen">


El atributo alt proporciona un texto alternativo para la imagen.

<ul>

Crea una lista no ordenada.

html
<ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
</ul>


<ol>

Crea una lista ordenada.

html
<ol>
    <li>Primero</li>
    <li>Segundo</li>
    <li>Tercero</li>
</ol>


<li>

Representa un elemento dentro de una lista.

<div>

Es un contenedor genérico utilizado para agrupar contenido y facilitar su organización y aplicación de estilos.

html
<div>
    <p>Contenido agrupado</p>
</div>


<span>

Es un contenedor genérico para contenido en línea. Se utiliza frecuentemente para aplicar estilos a una parte específica de un texto.

html
<p>Este texto contiene un <span>elemento destacado</span>.</p>


<header>

Representa normalmente el encabezado de una página o de una sección.

html
<header>
    <h1>Mi sitio web</h1>
</header>


<nav>

Representa una sección que contiene enlaces de navegación.

html
<nav>
    <a href="inicio.html">Inicio</a>
    <a href="contacto.html">Contacto</a>
</nav>


<main>

Representa el contenido principal de un documento.

html
<main>
    <h1>Contenido principal</h1>
</main>


<section>

Representa una sección independiente dentro de un documento.

html
<section>
    <h2>Sobre mí</h2>
    <p>Información sobre el estudiante.</p>
</section>


<article>

Representa contenido independiente que puede tener sentido por sí mismo, como un artículo o publicación.

html
<article>
    <h2>Artículo</h2>
    <p>Contenido del artículo.</p>
</article>


<footer>

Representa normalmente el pie de una página o de una sección.

html
<footer>
    <p>© 2026 Mi página web</p>
</footer>


<form>

Se utiliza para crear formularios que permiten introducir y enviar información.

html
<form>
    <input type="text">
    <button>Enviar</button>
</form>


<input>

Permite crear diferentes tipos de campos de entrada.

html
<input type="text">
<input type="email">
<input type="password">


<button>

Crea un botón interactivo.

html
<button>Enviar</button>


<table>

Se utiliza para representar información organizada en filas y columnas.

html
<table>
    <tr>
        <th>Nombre</th>
        <th>Edad</th>
    </tr>
    <tr>
        <td>Ana</td>
        <td>20</td>
    </tr>
</table>

Dentro de una tabla también son comunes:

- <tr>: representa una fila.
- <th>: representa una celda de encabezado.
- <td>: representa una celda de datos.


-- Etiquetas semánticas de HTML --

HTML moderno incluye elementos semánticos que permiten describir mejor la función del contenido dentro de una página.

Entre los principales elementos semánticos se encuentran:

- <header>: encabezado.
- <nav>: navegación.
- <main>: contenido principal.
- <section>: sección temática.
- <article>: contenido independiente.
- <aside>: contenido relacionado o complementario.
- <footer>: pie de página o sección.

El uso de elementos semánticos ayuda a organizar la estructura del documento y puede favorecer la accesibilidad y la comprensión del contenido por parte de diferentes tecnologías.



-- Importancia de HTML y CSS en el desarrollo web --

HTML y CSS son tecnologías fundamentales para la creación de sitios web.

HTML permite organizar y estructurar el contenido de una página, mientras que CSS permite controlar su presentación visual.

La combinación de ambas tecnologías permite crear páginas web con una estructura clara, una apariencia adecuada y diseños que pueden adaptarse a diferentes tamaños de pantalla.

Además, separar la estructura del contenido de su presentación facilita el mantenimiento y modificación de los sitios web.



-- Conclusión --

HTML y CSS son tecnologías fundamentales en el desarrollo web. HTML se utiliza principalmente para estructurar y definir el significado del contenido de una página, mientras que CSS permite controlar su presentación visual.

HTML ha evolucionado hasta convertirse en un estándar vivo mantenido por WHATWG, por lo que actualmente es más preciso referirse al HTML Living Standard que hablar de una nueva versión numerada.

CSS, por su parte, continúa evolucionando mediante módulos independientes. Por esta razón, no existe una única versión actual denominada "CSS4". El W3C utiliza los CSS Snapshots para representar el estado de las especificaciones CSS en determinados momentos, y CSS Snapshot 2026 representa el estado de CSS correspondiente a 2026.

El aprendizaje de HTML y CSS proporciona una base fundamental para continuar estudiando otras tecnologías del desarrollo web, como JavaScript, frameworks y herramientas para la creación de aplicaciones web.


