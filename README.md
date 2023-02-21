# The Movie Database

Es una aplicacion creada a partir de Angular para el Frontend, Node.js y Express.js para el Backend, con un llamado a la API de TMDB (The Movie Database).

Permite ver las películas del momento, ordenadas por "Las más vistas de la semana", "Películas en cine" y "Las más populares".  

Pueden verla funcionando en el siguiente link: PENDIENTE

## Instrucciones para correrlo localmente

Instalar node: https://nodejs.org/en/

Clonar el repositorio de GitHub: git clone https://github.com/ManuelGonzalez007/theMovieDatabase.git

Instalar dependencias (dentro de carpeta backend): *npm install*

Instalar dependencias (dentro de carpeta frontend): *npm install*


## Configuracion del archivo controller.js

Dentro de la carpeta servidor, está la carpeta controllers. 

En ella se encuentra el archivo controller.js.


Es necesario cambiar el valor de la constante apiKey. 

Reemplazar el string existente por el valor de la API key proporcionada por TMDB.

## Conseguir API key de TMDB

Una vez registrado en TMDB: https://www.themoviedb.org/

En este link se obtiene de forma gratuita la API key: https://www.themoviedb.org/settings/api

## Levantar app

Levantar el servidor del backend: *npm run dev*

Levantar el servidor de Angular CLI: *npm start*

App disponible en: localhost: 4200
