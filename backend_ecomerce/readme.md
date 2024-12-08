# E-commerce con MongoDB

Este proyecto tiene como objetivo aplicar los conocimientos adquiridos en el curso para diseñar y estructurar las colecciones y documentos esenciales de un sistema de e-commerce utilizando MongoDB. Incluye la implementación de un backend que interactúa con la base de datos, permitiendo realizar operaciones CRUD sobre las colecciones.

## Características del Proyecto

1. **Colección de Usuarios:**
   - Campos: `nombre`, `correo`, `dirección`, `teléfono`, `rol` (cliente/administrador), `fecha de registro`.
   - Incluye al menos 5 usuarios (clientes y administradores).
  
    ![image](https://github.com/user-attachments/assets/9a01dae8-61e8-44f5-9531-163e003e7d05)

2. **Colección de Productos:**
   - Campos: `nombre`, `descripción`, `precio`, `imagen`, `categoría`, `stock`.
   - Contiene 5 productos de diferentes categorías.
  
     ![image](https://github.com/user-attachments/assets/6ea8fac2-d333-4f50-bc6e-82543a096d6b)

3. **Colección de Categorías:**
   - Campos: `nombre de la categoría`, `descripción`.
   - Clasifica productos en al menos 5 categorías.

     ![image](https://github.com/user-attachments/assets/4ee0eb72-935c-420e-b4be-042513765f67)

4. **Colección de Carrito de Compras:**
   - Campos: `ID del usuario`, `productos` (con `ID del producto` y `cantidad`).
   - Modela 5 carritos con productos añadidos.

     ![image](https://github.com/user-attachments/assets/20b5a30e-e6ad-4de4-94fd-4aa1ffd6577d)

5. **Colección de Órdenes:**
   - Campos: `ID del usuario`, `productos` (con `ID del producto` y `cantidad`), `estado de la orden` (pendiente, pagado, enviado), `total`.
   - Contiene 5 órdenes con estados variados.

     ![image](https://github.com/user-attachments/assets/88193630-66d7-4064-8a3e-a1d8c809dfc1)

## Tecnologías Utilizadas

- **Base de Datos:** MongoDB Atlas
- **Backend:** Node.js con Express
- **Dependencias:** Mongoose, dotenv, etc.
- **Lenguaje:** JavaScript

## Requisitos Previos

- Node.js instalado.
- MongoDBA atlas configurado y en ejecución.
- Dependencias instaladas (`npm install`).

## Instrucciones de Ejecución

1. Clonar el repositorio:
   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd <NOMBRE_DEL_PROYECTO>
2.Configurar las variables de entorno en un archivo .env.
3. Intalar las dependencias
  ```bash
    npm install
  ```
4. Ejecutar el servidor
   ```bash
   npx nodemon servidor.js
   ```

# Fotografias de las bases de datos
  ## Usuarios
  ![image](https://github.com/user-attachments/assets/74c8712e-5fa7-4b64-b786-00a8d73f43fa)
  ![image](https://github.com/user-attachments/assets/34b0e784-8c74-4062-9830-52deadfd89e2)
  ![image](https://github.com/user-attachments/assets/1d98c3c9-6bff-41ee-9d4b-c52064d8e2db)

  ## Productos
  ![image](https://github.com/user-attachments/assets/a746b430-b5db-40dd-84be-04860a05bdbf)
  ![image](https://github.com/user-attachments/assets/1d557ebf-704e-4c31-ad8a-1bfebeadf7bb)
  ![image](https://github.com/user-attachments/assets/2e4bbafe-3c3c-4ae6-8161-014f58b80e07)
  ![image](https://github.com/user-attachments/assets/0926e81f-2f6c-47f0-bce5-216740e52170)

  ## Categoria
  ![image](https://github.com/user-attachments/assets/e1eb1048-904d-443e-81c5-dcf857c7f7d1)
  ![image](https://github.com/user-attachments/assets/23fd4307-56c4-419c-ac87-c2a744c42733)

  


  





