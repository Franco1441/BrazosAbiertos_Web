# Brazos Abiertos Web

Sitio institucional para Iglesia Brazos Abiertos, con secciones informativas, contenido multimedia y navegacion responsive.

## Demo
- Produccion: https://brazos-abiertos-web-one.vercel.app
- Repo: https://github.com/Franco1441/BrazosAbiertos_Web

## Stack
- HTML5
- Tailwind CSS (via CDN)
- JavaScript vanilla
- AOS (Animate On Scroll)
- Font Awesome

## Funcionalidades
- Hero principal con video de fondo
- Menu responsive con toggle mobile
- Secciones institucionales (Nosotros, Actividades, Ministerios, Mensajes, Ofrendas, Contacto)
- Integracion de Google Maps embebido
- Multiples paginas complementarias (`pilares`, `fundacion`, `grupos-edades`, etc.)

## Estructura del proyecto
- `index.html` - landing principal
- `pilares.html` - pilares de la iglesia
- `fundacion.html` - contenido fundacional
- `grupos-edades.html` - grupos y actividades por edad
- `BAEM.html`, `FOCUS.html`, `ROOM.html` - paginas/eventos complementarios
- `img/`, `videos/`, `fonts/` - assets

## Ejecutar en local
1. Clonar repo:
   ```bash
   git clone https://github.com/Franco1441/BrazosAbiertos_Web.git
   cd BrazosAbiertos_Web
   ```
2. Levantar servidor local:
   ```bash
   python3 -m http.server 5500
   ```
3. Abrir: `http://localhost:5500`.

## Autor
Desarrollado por Franco Rotta.