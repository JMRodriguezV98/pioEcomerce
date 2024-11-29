# Pio Ecomerce

Este proyecto se creo con la intencion de aplicar lo aprendido en las sesiones vistas de Lenguaje de programación I M-Q1 (SOFT 2024-4 G4) del instituto PIO, utilizando las herramientas del stack MERN

## 📷 Capturas de pantalla

![image](https://github.com/user-attachments/assets/a5fc0f6d-4c87-4739-9da2-1ec023591e62)
![image](https://github.com/user-attachments/assets/71ba29ce-b7e5-4880-b679-4fa390a6298f)

## 🚀 Características

  - Inicio de sesion y validacion de usuarios.
  - Diseño responsivo.
  - Conexiona a base de datos mongoDBAtlas.

## 🛠️ Tecnologías utilizadas

- [React](https://reactjs.org/)
- [React Router](https://reactrouter.com/)
- [Axios](https://axios-http.com/)
- [Tailwind](https://tailwindcss.com/)
- [mongoDBAtlas](https://www.mongodb.com/products/platform/atlas-database)

## 📋 Requisitos previos

Asegúrate de tener instalado:

- [Node.js](https://nodejs.org/) (versión mínima recomendada: 16.x)
- [npm](https://www.npmjs.com/) o [yarn](https://yarnpkg.com/)
- [postgres](https://www.postgresql.org/)

## ⚙️ Instalación

1. Clona este repositorio:
   ```bash
   git clone https://github.com/usuario/nombre-del-proyecto.git
2. Entra a la carpeta backend:
    ```bash
    cd backend_ecomerce
3. El repositorio no cuenta con las tecnologias de desarrollo implementadas, por lo que debes instalar las dependencias para que funcione:
   Dentro de la carpeta *backend_ecomerce*
   ```bash
     npm install
4. Crear la base de datos en postgres y la tabla usuarios con los nombres *pioecommerceusers* para la base de datos y *users* para la tabla de usuarios, si no, puede utilizar la base de datos creada en clase y la tabla
   creada en clase, para esto, es necesario cambiar unas lineas de codigo las cuales son las siguientes:
   ![image](https://github.com/user-attachments/assets/3ff3e03e-a220-4340-b623-22e30130381b)

   En el archivo: controladorUsuarios.js cambiar en donde dice users en todo el documento, por usuarios
   
   ![image](https://github.com/user-attachments/assets/5caf65bd-f0d4-4b2a-bde8-4dede2aba341)

5. Una vez instaladas las dependencias y creada la base de datos es hora de correr el backend.
   ```bash
   npx nodemon servidor.js
6. Una vez este listo esto, salir de la carpeta *backend_ecomerce* con:
   ```bash
   cd ..
7. Entrar a la carpeta de frontend
   ```bash
   cd front_ecomerce
8. repetir la instalacion de dependencias:
   ```bash
   npm install
9. correr el servicio:
    ```bash
    npm start

## Solicitudes HTTP

- POST Usuarios:

  ![image](https://github.com/user-attachments/assets/68df2aa0-edfe-4036-8fa8-e68571509921)

- GET

  ![image](https://github.com/user-attachments/assets/31050372-610f-4464-81aa-bbfb0c7a09a7)

- UPDATE

  ![image](https://github.com/user-attachments/assets/571ebbfb-6200-44b1-9f22-3654ac5d8a60)

-DELETE

  ![image](https://github.com/user-attachments/assets/e06e1b82-21aa-4177-b229-9b4ee6fe2397)


