# Gymfood

# Aspectos a comentar
Esta aplicación está realizada en React y he utilizado Vite para el desarrollo de esta.
Vite es una herramienta de compilación que tiene como objetivo proporcionar una experiencia
de desarrollo más rápida y ágil para proyectos web modernos. Además he empleado JSX para poder
emplear sintaxis HTML en cógido Javascript.
# Funcionamiento
Para poner en marcha nuestra aplicación, primera de todo hemos de abrir una consola para correr
la parte del servidor, esta se inicia con el comando `npm run dev`. Una vez el servidor esté en marcha
es momento de arrancar la parte del cliente, de la misma manera, ejecutando el comando `npm run dev`
la parte del cliente se pondrá en marcha y podremos acceder a nuestra aplicación clickando en el enlace
que aparece en la consola del cliente o introduciento `http://localhost:5173` en nuestra barra del navegador
para empezar con la aplicación.

# Partes optativas
- De las partes optativas, empezaré comentando el uso de una estructura de proyecto que genera `npm create vite@latest`
una vez ejecutado ese comando, en la consola nos permite seleccionar qué biblioteca de Javascript utilizar, en mi caso,
como he comentado anteriormente, he utilizado React.

- Además he implementado el CRUD de usuarios y productos, para poder acceder a todas las partes del CRUD, el usuario que haya iniciado
sesión en la aplicación debe ser de tipo administrador, para ello, cuando hagamos login, tanto el email como la contraseña serán respectivamente:
admin@admin.com - adminadmin. Iniciar sesión de esta manera nos permitirá eliminar un usuario o un producto, editar sus datos, listarlos al 
acceder al componente y además he implementado el botón "Ver detalles" para ver información adicional de cada componente sin cambiar de página

- Por otra parte, he realizado animaciones en la camiseta y en el bote de proteinas que aparecen al iniciar la aplicación, de manera que si 
pasamos el ratón sobre cualquiera de estas imágenes se efectuará una rotación y clickando sobre ellas también nos lleva a ver el listado 
de productos que disponemos. Además he añadido copos de nieve por toda la aplicación con motivo de festejo por la navidad y por un próspero 
año nuevo 2023.

- Por lo que respecta al framework de componentes visuales he utilizado **tailwindcss**

- Y por último, he implementado el router para la navegación por la aplicación utilizando `react-router-dom`

# Anotaciones 
En este apartado, voy a comentar unos aspectos que se han de tener en cuenta para probar de manera correcta la aplicación.
Me han surgido unos problemas a la hora de actualizar tanto usuarios como productos, lo que ocurre es que solo deja actualizar 
los datos de manera correcta del último usuario/producto que se haya añadido ya que no he encontrado la forma de realizarlo para 
cualquiera de los componentes disponibles.