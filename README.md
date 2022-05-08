<div align="center">

<img src="https://www.chartjs.org/img/chartjs-logo.svg" style="width:250px; height:150px"> </img>

<!-- Encabezado -->
### Chart JS con React JS y Nest JS (Typescript)
|Tecnonologias|Descripción|
|---|---|
| React | React es una biblioteca de JavaScript para crear interfaces de usuario |
| Chart JS | Chart.js es una biblioteca JavaScript gratuita de código abierto para la visualización de datos, que admite 8 tipos de gráficos: 1. barra 2. línea 3. área 4. circular 5. burbuja 6. radar 7. polar 8. dispersión |
| Nest | Un marco progresivo de Node.js para crear aplicaciones del lado del servidor eficientes, confiables y escalables |
| TypeORM | El objetivo es admitir siempre las últimas funciones de JavaScript. TypeORM es compatible con los patrones Active Record y Data Mapper, a diferencia de todos los demás ORM de JavaScript que existen actualmente, lo que significa que puede escribir aplicaciones mantenibles, escalables, poco acopladas y de alta calidad de la manera más productiva. TypeORM está muy influenciado por otros ORM, como Hibernate, Doctrine y Entity Framework
| Redux | Redux es un contenedor predecible del estado de aplicaciones JavaScript. Te ayuda a escribir aplicaciones que se comportan de manera consistente, corren en distintos ambientes (cliente, servidor y nativo) |
| NodeJS | Es un marco de back-end y frontend |
|  PostgreSQL  |  Es un sistema de base de datos relacional de alta disponibilidad. Es un entorno de tiempo de ejecución de Javascript.  Uso no-bloqueante, event-driven I/O, permanecer ligero y eficiente en la superficie del uso intensivo de datos en tiempo real de las aplicaciones que se ejecutan en dispositivos distribuidos. Es un código abierto de JavaScript para la creación de aplicaciones de red |
| Docker | Docker es un proyecto de código abierto que automatiza el despliegue de aplicaciones dentro de contenedores de software, proporcionando una capa adicional de abstracción y automatización de virtualización de aplicaciones en múltiples sistemas operativos |
#### Mayo 2022
#### Autor 

| Nombre | Correo |
|:-------:|:-----:|
| Edgar Josué Benedetto Godoy | [Gmail](mailto:ejbg597@gmail.com) |

</div>

_____

### Ejecución del aplicativo web en local
#### Instalaciones necesarias (ejecucion local)
* [Google Chrome](https://www.google.com/chrome/)

* [Node](https://nodejs.org/es/)
  
* [Docker](https://docs.docker.com/get-docker/)

____
#### Configuración previa de Docker
1. Crear el volumen externo
  ```
  docker volume create --name=mysql-volume
  ```

#### Validar la correcta ejecucion de postgresql dockerizado

1. Ejecutar el contenedor
  ```
  docker-compose up -d
  ```

2. Entrar al contenedor de mysql
  ```
  docker-compose exec mysql bash
  ```

3. Conectarse a mysql:
  ```
  mysql -h nombre_servidor -u nombre_usuario -p nombre_base_datos

  mysql -h localhost -u admin -p todosApp
  ```


  * Conectarse a mysql con el usuario root y cambiar zona horaria
  ```
  docker exec -it TodosApp mysql -uroot -p 

  pass: admin

  Cambiar zona horaria: SET GLOBAL time_zone = '-6:00';
  ```

#### Instalación de dependencias

##### Backend
* Nest JS 
  ```terminal
  npm i -g @nestjs/cli
  ```

* TypeORM 
  ```terminal
  npm i --save @nestjs/typeorm typeorm
  ```
  
* TypeORM Class Validator & Class Transformer
  ```terminal
  npm i @nestjs/config @nestjs/typeorm typeorm pg class-validator class-transformer
  ```

* Mysql
  ```terminal
  npm i mysql
  ```

* Swagger
  ```terminal
  npm install --save @nestjs/swagger swagger-ui-express
  ```

* Verify
  ```terminal
  npm install verify
  ```

#### Frontend

* Redux
  ```terminal
  npm install --save redux

  npm install --save react-redux

  npm install --save-dev redux-devtools
  ```

* Axios 
  ```terminal
  npm install --save axios
  ```

____

#### Ejecucion 

1. Directorio raíz:  
  ```
  docker-compose up -d
  ```

2. Directorio backend 
  ``` 
  npm start
  ```
3. Directorio frontend 
  ```
  npm start
  ```
##### Opcionales

4. Prueba de la documentación con Swagger
[Swagger | API Documentación](http://localhost:3000/api)

