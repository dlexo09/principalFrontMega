// filepath: c:\Users\pgonzaleze\OneDrive\Escritorio\htdocs\Front-react-bostrap-vite\my-react-app\sitemap-generator.js
import { Sitemap } from 'react-router-sitemap';
import router from './src/router'; // Asegúrate de exportar tus rutas desde tu archivo de rutas

const generateSitemap = () => {
  const sitemap = new Sitemap(router)
    .build('https://www.megacable.com.mx') // Cambia por tu dominio
    .save('./public/sitemap.xml'); // Guarda el archivo en la carpeta public
};

generateSitemap();