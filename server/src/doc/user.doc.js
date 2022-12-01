/**
 * @swagger
 * components:
 *  schemas:
 *      User:
 *          type: object    
 *          properties:
 *              dni:
 *                  type: integer 
 *                  description: DNI del usuario
 *              nombre:
 *                  type: string
 *                  description: Nombre del usuario
 *              apellidos:
 *                  type: string
 *                  description: Apellidos del usuario
 *              edad:
 *                  type: integer
 *                  description: Edad del usuario
 *              email:
 *                  type: string
 *                  description: Email del usuario
 *              password:
 *                  type: string
 *                  description: Contraseña del usuario
 *              telefono:
 *                  type: integer
 *                  description: Telefono del usuario
 *              direccion:
 *                  type: string
 *                  description: Dirección del usuario
 *          required:
 *              - dni
 *              - nombre
 *              - apellidos
 *              - edad
 *              - email
 *              - password
 *              - telefono
 *              - direccion
 *          example:
 *              dni: 49632588R
 *              nombre: Flor
 *              apellidos: Velez Roca
 *              edad: 34
 *              email: florvr@gmail.com
 *              password: 123456
 *              telefono: 603489522
 *              direccion: Av Maissonave 2
 *              
 */
/**
 * @swagger
 * /api/v1/users:
 *  post:
 *      summary: Crea un nuevo usuario 
 *      tags: [User]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object 
 *                      $ref: '#/components/schemas/User'
 *      responses:
 *          201:
 *              description: Nuevo usuario creado
 */
/**
 * @swagger
 * /api/v1/users/login:
 *  post:
 *      summary: Hace login de un usuario
 *      tags: [User]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object 
 *                      properties:
 *                          email:
 *                              type: string
 *                              description: Email del usuario
 *                              required: true
 *                          password:
 *                              type: string
 *                              description: Contraseña del usuario
 *                              required: true
 *      responses:
 *          201:
 *              description: Usuario dado de alta 
 *          401:
 *              description: Contraseña equivocada
 *          404:
 *              description: User_NOT_FOUND
 */
/**
 * @swagger
 * /api/v1/users:
 *  get:
 *      summary: Devuelve los usuarios 
 *      tags: [User]
 *      responses:
 *          200:
 *              description: Devuelve todos los usuarios 
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items: 
 *                              $ref: '#/components/schemas/User'                              
 */ 

/**
 * @swagger
 * /api/v1/users/{id}:
 *  get:
 *      summary: Devuelve el usuario identificado por el id
 *      tags: [User]
 *      parameters:
 *          - in: path
 *            dni: id 
 *            schema:
 *              type: string
 *            required: true    
 *            description: El identificador de cada usuario
 *      responses:
 *          200:
 *              description: Devuelve un usuario 
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object 
 *                          $ref: '#/components/schemas/User'    
 *          404:
 *              description: USER_NOT_FOUND                          
 */

/**
 * @swagger
 * /api/v1/users/{id}:
 *  put:
 *      summary: Actualiza el usuario identificado por el id
 *      tags: [User]
 *      parameters:
 *          - in: path
 *            dni: id 
 *            schema:
 *              type: string
 *            required: true    
 *            description: El identificador de cada usuario
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object 
 *                      properties:
 *                          email:
 *                              type: string
 *                              description: Email del usuario
 *                          password:
 *                              type: string
 *                              description: Contraseña del usuario
 *      responses:
 *          201:
 *              description: Usuario actualizado  
 *          404:
 *              description: USER_NOT_FOUND                          
 */
/**
 * @swagger
 * /api/v1/users/{id}:
 *  delete:
 *      summary: Elimina el usuario identificado por el id
 *      tags: [User]
 *      parameters:
 *          - in: path
 *            dni: id 
 *            schema:
 *              type: string
 *            required: true    
 *            description: El identificador de cada usuario
 *      responses:
 *          204:
 *              description: User eliminado con éxito 
 *          404:
 *              description: USER_NOT_FOUND                          
 */

