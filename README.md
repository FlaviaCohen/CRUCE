# CRUCE - Desafío técnico (API Rest)

## Autor

**Flavia Cohen** - [GitHub](https://github.com/FlaviaCohen)

Es un catálogo de productos con dos vistas. 
La vista Admin (localhost:3000/admin-products) cumple con algunos requisitos, tales como:

- Poder visualizar una grilla de productos
- Rellenar el listado de productos con un archivo default ( seed.js )
- Agregar, editar y eliminar un producto mediante un formulario

La vista Catálogo (localhost:3000/) es la reproducción del diseño recibido en Figma.

Para instalar el proyecto de manera local:

(con Postgres corriendo)

```
createdb cruce
```

Posicionarse en /back y correr en la terminal

```
npm i
```

```
npm run seed.js
```

```
npm start
```

En una nueva terminal y sin cerrar la anterior posicionarse en /front y correr

```
npm i
```

```
npm run build
```

Con ambas terminales corriendo ingresar en:
```
http://localhost:3000
```
## Desarrollado con

- [React](https://es.reactjs.org/docs/getting-started.html)
- [Redux](https://redux.js.org/introduction/getting-started)
- [Bootstrap](https://getbootstrap.com/docs/4.5/getting-started/introduction)
- [Sequelize](https://sequelize.org)
- [Node](https://nodejs.org/es/docs)
