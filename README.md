# Bice-backend

Proyecto generado con nodeJS version v14.15.5

Para el diseño tome una plantilla gratuita de internet y le hice las integraciones con Angular.

Como BD para el Login de usuarios se utlizo MongoDB (cloud free version)

[https://www.mongodb.com/try](https://www.mongodb.com/try)

El Backend también expone un API para autenticar la aplicación.

```
POST localhost:3000/login

```

## Como usar el proyecto

### Pre-requisitos

[https://docs.docker.com/engine/](https://docs.docker.com/engine/)

Luego de tener instalado el docker engine, proceder a ejecutar el docker run en la imagen del proyecto.
```
Backend: docker run -p 3000:3000 -it slackwero/bice-backend:latest

```
Y eso es todo!


## Otros proyectos relacionados al Test

[https://github.com/slackwero/bice-frontend](https://github.com/slackwero/bice-frontend)

[https://github.com/slackwero/bice-backend](https://github.com/slackwero/bice-backend)

[https://github.com/slackwero/bice-api-indecon](https://github.com/slackwero/bice-api-indecon)

[https://github.com/slackwero/bice-api-hackernews](https://github.com/slackwero/bice-api-hackernews)
