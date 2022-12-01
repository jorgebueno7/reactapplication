/**
 * @swagger
 * components:
 *  schemas:
 *      Brand:
 *          type: object    
 *          properties:
 *              nombre:
 *                  type: string
 *                  description: Nombre de la marca
 *              localizacion:
 *                  type: string
 *                  description: Marca del marca
 *              tipo:
 *                  type: string
 *                  description: Tipo del marca
 *              anyo_fundacion:
 *                  type: integer
 *                  description: Precio del marca
 *          required:
 *              - nombre
 *              - localizacion
 *              - tipo
 *              - anyo_fundacion
 *          example:
 *              nombre: HSN
 *              localizacion: España
 *              tipo: Suplementación
 *              anyo_fundacion: 2014
 */
/**
 * @swagger
 * /api/v1/brands:
 *  post:
 *      summary: Crea una nueva marca 
 *      tags: [Brand]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object 
 *                      $ref: '#/components/schemas/Brand'
 *      responses:
 *          201:
 *              description: Nueva marca creada
 */
/**
 * @swagger
 * /api/v1/brands:
 *  get:
 *      summary: Devuelve las marcas 
 *      tags: [Brand]
 *      responses:
 *          200:
 *              description: Devuelve todos las marcas 
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items: 
 *                              $ref: '#/components/schemas/Brand'                              
 */ 

/**
 * @swagger
 * /api/v1/brands/{id}:
 *  get:
 *      summary: Devuelve la marca identificada por el id
 *      tags: [Brand]
 *      parameters:
 *          - in: path
 *            nombre: id 
 *            schema:
 *              type: string
 *            required: true    
 *            description: El identificador de cada marca
 *      responses:
 *          200:
 *              description: Devuelve un marca 
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object 
 *                          $ref: '#/components/schemas/Brand'    
 *          404:
 *              description: Brand_NOT_FOUND                          
 */

/**
 * @swagger
 * /api/v1/brands/{id}:
 *  put:
 *      summary: Actualiza la marca identificada por el id
 *      tags: [Brand]
 *      parameters:
 *          - in: path
 *            dni: id 
 *            schema:
 *              type: string
 *            required: true    
 *            description: El identificador de cada marca
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object 
 *                      properties:
 *                          tipo:    
 *                              type: string 
 *                              description: Sector de la marca
 *                          localizacion:
 *                              type: string
 *                              description: Localizacion de la sede de la marca   
 *      responses:
 *          201:
 *              description: marca actualizada  
 *          404:
 *              description: Brand_NOT_FOUND                          
 */
/**
 * @swagger
 * /api/v1/brands/{id}:
 *  delete:
 *      summary: Elimina el marca identificado por el id
 *      tags: [Brand]
 *      parameters:
 *          - in: path
 *            dni: id 
 *            schema:
 *              type: string
 *            required: true    
 *            description: El identificador de cada marca
 *      responses:
 *          204:
 *              description: Marca actualizada
 *          404:
 *              description: Brand_NOT_FOUND                          
 */