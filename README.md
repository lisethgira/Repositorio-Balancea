# Balancea

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://github.com/lisethgira/Repositorio-Balancea/blob/main/LICENSE)

**Balancea** es una aplicación integral diseñada para facilitar la administración financiera personal a través de un panel de control interactivo. Esta herramienta es ideal para individuos que buscan optimizar su control sobre las finanzas, permitiéndoles monitorizar detalladamente sus ingresos y gastos.

<div align="center">
<img style="width: 80px; border-radius:100px" src="https://raw.githubusercontent.com/lisethgira/Repositorio-Balancea/main/Balancea-App/client/public/logo512x512.png"/>

[![Tech Stack](https://skillicons.dev/icons?i=react,redux,tailwind,vercel)](#tech-stack)

<h3 align="center"><b>Balancea</b> - Web App</h3>
   <p align="center">
   Open Source. 
   </p>

[Demo](https://don-henry-cafe-frontend.vercel.app/) · [Related Projects](#related-projects) · [Request Feature](#report-bug)

</div>

## Table of Contents

- [React + Vite](#react--vite)

  - [Installation](#installation)
  - [Resources](#resources)
  - [License](#license)
  - [Report Bug](#report-bug)


  ### PreRequisitos
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Debes tener instalado.

Node:  14.17.0
React.js: 17.0.1
  

### Instalación de PreRequisitos
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Para hacer la instalación de NodeJS dirijase a la fuente oficial

https://nodejs.org/es/

para hacer la instalacón de expressjs dirijase a la fuente oficial

https://expressjs.com/


Para hacer la instalación de ReactJS vamos a seguir estos sencillos pasos:

Paso 1. Instalar NodeJS en su ultima versión si aun no lo tienes instalado, para eso entraremos a su web oficial y descargaremos el instalador más actualizado https://nodejs.org/es/

Paso 2. Actualizar NPM, el gestor de paquetes de node, para bajarnos las dependencias más actuales:

npm install -g npm@latest

Paso 3. Borrar la cache de NPM:

npm cache clean --force

Paso 4. Instalar Create React App, que es un interprete de consola(CLI) que nos va a permitir instalar React facilmente e incluirá webpack para la compilación y minificación del proyecto, un live reload, una estructura básica para los proyectos de ReactJS, etc, veamos como instalar este paquete:

npm install -g create-react-app

Ahora ya esta instalado «create react app» y se puede generar un nuevo proyecto de React.js

Para generar un nuevo proyecto de React.js y finalmente instalarlo, entraremos al directorio donde queramos generar el proyecto de reactjs y ejecutamos este comando:

npx create-react-app NombreDeMiProyecto

Ahora entraremos al directorio de nuestro proyecto y lanzaremos el servidor local de pruebas para React:

cd NombreDeMiProyecto
npm start

se puede comprobar la versión de React que tiene el repositorio dentro del fichero package.json.

Ahora se tiene disponible la webapp de React 16 en http://localhost:3000/ y se verá el proyecto corriendo, con la página de bienvenida por defecto.

Con esto ya conoces como instalar React desde cero y como generar un proyecto base.

o dirijase a la fuente oficial de React js

https://reactjs.org/

 para hacer la instalción con redux dirijase a la fuente oficial

 https://redux.js.org/introduction/getting-started

  ### Instalación y ejecución de proyecto

1. Clonar el repositorio a tu maquina local

   ```bash
   git clone https://github.com/lisethgira/Repositorio-Balancea.git
   ```

2. Cambiar el directorio en tu consola o cmd

   ```bash
   cd Repositorio-Balancea/Balancea-App
   ```

3. Instalar dependencias

   si usas npm

   ```bash
   npm install --legacy-peer-deps
   ```

   si usas yarn

   ```bash
   yarn install --force
   ```

4. configura la variable de conexión a la base de datos

   ```env
   MONGODB_URI="mongodb+srv://usuario:contrasena@ejemplo.mongodb.net/base_de_datos?retryWrites=true&w=majority&appName=AplicacionEjemplo"
   ```

5. corre el servidor

   ```bash
   npm run start
   ```

6. Abrimos una nueva terminal y ejecutamos nuevamente cd para movernos al directorio del cliente

    ```bash
    cd Repositorio-Balancea/Balancea-App/client
    ```

7. Instalar dependencias

   si usas npm

   ```bash
   npm install --legacy-peer-deps
   ```

   si usas yarn

   ```bash
   yarn install --force
   ```

8. corre el cliente

   ```bash
   npm run start
   ```

para correr la landing page vamos a ejecutar los siguientes comandos en una nueva consola

1. Cambiar el directorio en tu consola o cmd

   ```bash
   cd Repositorio-Balancea/landingBalancea
   ```

2. Instalar dependencias

   si usas npm

   ```bash
   npm install --legacy-peer-deps
   ```

   si usas yarn

   ```bash
   yarn install --force

   ```

3. corre el landingPage

   ```bash
   npm run dev
   ```

puedes agrupar las consolas de esa manera tendrás visbilidad de que esta sucediendo en cada entorno

![banner](https://raw.githubusercontent.com/lisethgira/Repositorio-Balancea/main/Documentaci%C3%B3n/project-images/consolas.png)

## Funcionamiento

## Landing Page 🌐

La página de inicio de **Balancea** es el primer punto de contacto con los usuarios, diseñada para captar su atención y guiarlos a través de las funcionalidades principales de la aplicación:

- **Diseño Responsivo**: Optimizada para todos los dispositivos, asegurando una experiencia de usuario consistente ya sea en un móvil, tableta o computador.
- **Navegación Intuitiva**: Menús claros y accesibles que facilitan el descubrimiento de todas las características de la aplicación.
- **Call to Action (CTA) destacados**: Botones y enlaces diseñados para guiar a los usuarios hacia la inscripción o el inicio de sesión, mejorando la conversión de visitantes a usuarios registrados.
- **Información Clave al frente y al centro**: Beneficios, características principales y testimonios de usuarios están visibles para educar a los visitantes sobre el valor de Balancea.

## Características Principales 🌟

### Gestión de Finanzas

- **Registro y actualización de transacciones**: Permite añadir, modificar y eliminar ingresos y gastos de forma dinámica.
- **Organización por categorías**: Clasifica tus transacciones en categorías personalizables para una visión más clara del flujo de dinero.
- **Balance de ingresos y egresos**: Visualización gráfica del balance financiero, facilitando el análisis de tus finanzas en diferentes periodos de tiempo.

### Interfaz y Personalización

- **Dashboard interactivo**: Accede a una vista general de tus finanzas a través de gráficos y resúmenes.
- **Perfil de usuario personalizable**: Configura tu perfil con una foto y ajusta las preferencias de la aplicación.
- **Modo Light/Dark**: Adapta la interfaz según tus preferencias visuales para una experiencia más confortable.

## Funcionalidades Avanzadas 🛠

- **Autenticación segura**: Inicio de sesión y registro con manejo de seguridad avanzado.
- **Reportes detallados**: Genera reportes de ingresos y egresos en intervalos personalizados (anual, mensual, semanal, diario).
- **Últimas transacciones**: Visualización rápida de las transacciones más recientes para un seguimiento fácil.

## Tecnologías Implementadas 👩‍💻

### Front-end

- **React JS**: Para una interfaz de usuario reactiva y dinámica.
- **Material UI**, **React Calendar**: Librerías de componentes para un diseño atractivo y funcional.
- **Javascript**, **CSS**, **SASS**, **HTML**: Tecnologías estándar para desarrollo web.

### Back-end

- **NodeJS**: Entorno de ejecución de JavaScript para el servidor.
- **MongoDB** (Mongoose): Base de datos NoSQL para almacenamiento eficiente de datos.
- **Express**: Framework de aplicaciones web para Node.js.--------

## Arquitectura de Carpetas 📁

El proyecto **Balancea** utiliza una estructura de carpetas organizada para facilitar el desarrollo y la mantenibilidad del código. A continuación se detalla la estructura típica del proyecto:

### Landing Page

```
└── 📁landingBalancea
    └── .eslintrc.cjs
    └── .gitignore
    └── index.html
    └── package-lock.json
    └── package.json
    └── 📁public
        └── apple-touch-icon.png
        └── favicon.ico
        └── logo.svg
        └── logo192x192.png
        └── logo512x512.png
        └── logo64x64.png
        └── vite.svg
    └── README.md
    └── 📁src
        └── App.jsx
        └── 📁assets
            └── 📁Landing
        └── 📁components
            └── 📁atomos
                └── articles.jsx
                └── footer.jsx
                └── header.jsx
                └── hero.jsx
                └── information.jsx
            └── 📁templates
                └── HomeTemplate.jsx
        └── index.css
        └── main.jsx
        └── 📁pages
            └── Home.jsx
        └── 📁styles
            └── common.jsx
            └── globalStyle.jsx
            └── typography.jsx
    └── vite.config.js
```

### Front-end

```
└── 📁Balancea-App
    └── .env
    └── .gitattributes
    └── .gitignore
└── 📁client
    └── package-lock.json
    └── package.json
    └── 📁public
        └── ads.txt
        └── apple-touch-icon.png
        └── favicon.ico
        └── index.html
        └── logo.svg
        └── logo192x192.png
        └── logo512x512.png
        └── logo64x64.png
        └── logocerdo.png
        └── manifest.json
        └── politica_privacidad_balancea.pdf
        └── robots.txt
        └── vite.svg
    └── 📁src
        └── App.css
        └── App.js
        └── App.test.js
        └── 📁assets  # Imágenes y recursos gráficos
            └── 📁Ruleta
        └── 📁components    # Componentes reutilizables de React
            └── 📁Errors
                └── 📁AuthenticationError
                    └── AuthenticationError.css
                    └── AuthenticationError.js
                └── 📁Loading
                    └── Loading.css
                    └── Loading.js
                └── 📁PageNotFoundError
                    └── PageNotFoundError.css
                    └── PageNotFoundError.js
                └── 📁ServiceUnavailable
                    └── ServiceUnavailable.css
                    └── ServiceUnavailable.js
            └── 📁Login
                └── Login.js
                └── Login.module.css
                └── Login.module.css.map
                └── Login.module.scss
            └── 📁menu
                └── 📁ButtonLogOut
                    └── ButtonLogout.js
                    └── ButtonLogout.module.css
                    └── ButtonLogout.module.css.map
                    └── ButtonLogout.module.scss
                └── Menu.js
                └── Menu.module.css
                └── Menu.module.css.map
                └── Menu.module.scss
            └── 📁pages                # Componentes de vistas específicas
                └── 📁Categories
                    └── Categories.js
                    └── Categories.module.css
                    └── Categories.module.css.map
                    └── Categories.module.scss
                └── 📁Dashboard
                    └── Dashboard.js
                    └── Dashboard.module.css
                    └── Dashboard.module.css.map
                    └── Dashboard.module.scss
                    └── 📁Dropdown
                        └── Dropdown.js
                        └── Dropdown.module.css
                        └── Dropdown.module.css.map
                        └── Dropdown.module.scss
                    └── 📁GraphicSection
                        └── GraphicSection.js
                        └── GraphicSection.module.css
                        └── GraphicSection.module.css.map
                        └── GraphicSection.module.scss
                    └── 📁StadisticsSection
                        └── StadisticSection.js
                        └── StadisticsSection.module.css
                        └── StadisticsSection.module.css.map
                        └── StadisticsSection.module.scss
                └── 📁NewCategory
                    └── NewCategory.js
                    └── NewCategory.module.css
                    └── NewCategory.module.css.map
                    └── NewCategory.module.scss
                └── 📁NewTransaction
                    └── NewTransaction.js
                    └── NewTransaction.module.css
                    └── NewTransaction.module.css.map
                    └── NewTransaction.module.scss
                └── 📁Profile
                    └── Profile.js
                    └── Profile.module.css
                    └── Profile.module.css.map
                    └── Profile.module.scss
                └── 📁RIghtSideBar
                    └── 📁Calendar
                        └── Calendar.js
                    └── RightSideBar.js
                └── 📁ShowTransaction
                    └── ShowTransaction.js
                    └── ShowTransaction.module.css
                    └── ShowTransaction.module.css.map
                    └── ShowTransaction.module.scss
                └── 📁Transactions
                    └── AllTransactions.js
                    └── Transactions.module.css
                    └── Transactions.module.css.map
                    └── Transactions.module.scss
                    └── 📁TransitionRow
                        └── TransactionRow.module.css
                        └── TransactionRow.module.css.map
                        └── TransactionRow.module.scss
                        └── TransitionRow.js
                └── 📁UpdateCategory
                    └── UpdateCategory.js
                    └── UpdateCategory.module.css
                    └── UpdateCategory.module.css.map
                    └── UpdateCategory.module.scss
                └── 📁UpdateProfile
                    └── UpdateProfile.js
                    └── UpdateProfile.module.css
                    └── UpdateProfile.module.css.map
                    └── UpdateProfile.module.scss
                └── 📁UpdateTransaction
                    └── UpdateTransaction.js
                    └── UpdateTransaction.module.css
                    └── UpdateTransaction.module.css.map
                    └── UpdateTransaction.module.scss
                └── _modalCategory.scss
                └── _page.scss
                └── _popUp.scss
                └── _transactionInput.scss
            └── 📁Register
                └── Register.js
                └── Register.module.css
                └── Register.module.css.map
                └── Register.module.scss
            └── 📁RightMenu
                └── 📁Calendar
                    └── Calendar.js
                    └── CalendarStyles.css
                └── 📁LastTransactions
                    └── LastTransactions.js
                    └── LastTransactions.module.css
                    └── LastTransactions.module.css.map
                    └── LastTransactions.module.scss
                └── RightMenu.js
                └── RightMenu.module.css
                └── RightMenu.module.css.map
                └── RightMenu.module.scss
            └── 📁sideMenu
                └── sideMenu.js
                └── SideMenu.module.css
                └── SideMenu.module.css.map
                └── SideMenu.module.scss
            └── _session.scss
        └── 📁context  # Contextos de React para el manejo del estado global
            └── AuthContext.js
            └── ThemeContext.js
        └── 📁helpers # Funciones de ayuda y utilidades
            └── dates.js
        └── index.css
        └── index.js   # Punto de entrada de la aplicación
        └── logo.svg
        └── reportWebVitals.js
        └── setupTests.js
        └── 📁uploads
            └── 📁profilePicture
                └── 1654298236285-user7.jpg
        └── 📁server
        └── 📁uploads
```

### Back-end

```
└── 📁Balancea-App
└── .env
└── .gitattributes
└── .gitignore
└── 📁client
└── 📁server
└── 📁config  # Configuraciones del servidor y la base de datos
└── jwt.config.js
└── mongoose.config.js
└── 📁controllers   # Controladores para manejar la lógica de negocio
└── category.controller.js
└── transaction.controller.js
└── user.controller.js
└── 📁models   # Modelos de MongoDB
└── category.model.js
└── image.model.js
└── transaction.model.js
└── user.model.js
└── 📁routes   # Rutas de la API
└── category.routes.js
└── transaction.routes.js
└── user.routes.js
└── 📁service
└── transaction.service.js
└── 📁utils
└── multerUtility.js
└── server.js
└── 📁uploads
└── 1654273782512-user9.png
```
## Usuarios registrados en la app
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
todos estos usuarios podran ser carpoolers y usuarios, dentro la app podras cambiar el rol como mejor te parezca, aca un listado de los usuarios registrados hasta el momento aunque tambien podras registrar uno nuevo desde la pagina de login.

Usuario 1:

email: lisethgiraldo628@gmail.com
clave: 12345678

## Tecnologias Usadas
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Este repositorio cuenta con un servidor y un cliente los cuales fueron construidos con las siguientes tecnologías:

![estructura](https://github.com/lisethgira/ImagenesCarpool/blob/main/WhatsApp%20Image%202021-06-30%20at%208.18.32%20AM.jpeg)

FROTNEND

-React.js: V.17.0.1
-Redux: V.4.1.0

BACKEND
![pruebas-Postman](https://github.com/lisethgira/ImagenesCarpool/blob/main/pruebasConPostman.png)
-Node: 14.17.0 con la libreria de ExpressJS.


BASE DE DATOS

-MongoDB Atlas: El núcleo de nuestra plataforma de datos de aplicaciones es un servicio de base de datos multicloud diseñado para la resiliencia, escalabilidad y los niveles más altos de privacidad y seguridad de los datos. Con MongoDB Atlas, su base de datos es un cimiento de confianza que le permite trabajar con datos de la manera que desee, fácilmente y sin esfuerzo.

datos para la conexión a la base de datos 

host:  '7t3DGUvwp7hL601r@balancea.wh4ftkq.mongodb.net'
user:  'lisethgiraldo628'
database:  'billetera?retryWrites=true&w=majority&appName=Balancea'

## Versionamiento
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
la aplicación fue construida y probada en el sistema operativo windows 10 sin ninguna dificultad, mediante el editor de código de Visual Studio Code.

puedes usar navegadores con soporte de javaScript como:

opera.
Chrome.
mozilla.
edge.
epiphany.
chromium.

## Licencia 🗒

Este proyecto está bajo la licencia [MIT](https://github.com/lisethgira/Repositorio-Balancea/blob/main/LICENS).

![banner](https://raw.githubusercontent.com/lisethgira/Repositorio-Balancea/main/Documentaci%C3%B3n/project-images/LandingPage.png)

![banner](https://raw.githubusercontent.com/lisethgira/Repositorio-Balancea/main/Documentaci%C3%B3n/project-images/login.png)

![banner](https://raw.githubusercontent.com/lisethgira/Repositorio-Balancea/main/Documentaci%C3%B3n/project-images/categor%C3%ADas.png)

![banner](https://raw.githubusercontent.com/lisethgira/Repositorio-Balancea/main/Documentaci%C3%B3n/project-images/detalle%20transacci%C3%B3n.png)

![banner](https://raw.githubusercontent.com/lisethgira/Repositorio-Balancea/main/Documentaci%C3%B3n/project-images/editar%20perfil.png)

![banner](https://raw.githubusercontent.com/lisethgira/Repositorio-Balancea/main/Documentaci%C3%B3n/project-images/informes.png)

![banner](https://raw.githubusercontent.com/lisethgira/Repositorio-Balancea/main/Documentaci%C3%B3n/project-images/perfil.png)

![banner](https://raw.githubusercontent.com/lisethgira/Repositorio-Balancea/main/Documentaci%C3%B3n/project-images/transacciones.png)
