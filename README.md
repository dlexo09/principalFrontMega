# Frontend React con Vite y Bootstrap

Este proyecto es un frontend desarrollado con **React**, **Vite** y **Bootstrap**, diseñado para integrarse con APIs y proporcionar una experiencia de usuario moderna y responsiva. Actualmente, está configurado para su uso en servidores AWS.

---

## **Características principales**
- **Gestión de canales de TV**:
  - Visualización de canales agrupados por categorías.
  - Identificación de canales disponibles en los paquetes "CONECTA" y "BÁSICO PLUS".
  - Filtros dinámicos para mostrar canales por tipo.
- **Integración con APIs**:
  - Obtención de datos de canales y paquetes desde un servidor remoto.
  - Configuración dinámica basada en la ubicación del usuario (`currentLocation`).
- **Diseño responsivo**:
  - Uso de **Bootstrap** para garantizar compatibilidad en dispositivos móviles y de escritorio.
- **Configuración modular**:
  - Configuración centralizada en `src/config.js` para facilitar cambios en el entorno.

---

## **Requisitos previos**
- **Node.js** (versión 16 o superior).
- **npm** o **yarn** instalado.
- Acceso a las APIs configuradas en `src/config.js`.

---

## **Instalación**
1. Clona el repositorio:
   ```bash
   git clone <URL_DEL_REPOSITORIO>

2. Navega al directorio del proyecto:
    cd my-react-app

3.  Instala las dependencias:
   npm install