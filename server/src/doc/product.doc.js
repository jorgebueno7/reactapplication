/**
 * @swagger
 * components:
 *  schemas:
 *      Product:
 *          type: object    
 *          properties:
 *              nombre:
 *                  type: string
 *                  description: Nombre del producto
 *              marca:
 *                  type: string
 *                  description: Marca del producto
 *              tipo:
 *                  type: string
 *                  description: Tipo del producto
 *              precio:
 *                  type: double
 *                  description: Precio del producto
 *          required:
 *              - nombre
 *              - marca
 *              - tipo
 *              - precio
 *          example:
 *              nombre: Zapatillas
 *              marca: Adidas
 *              tipo: Ropa deportiva
 *              precio: 35.99
 */
/**
 * @swagger
 * /api/v1/products:
 *  post:
 *      summary: Crea un nuevo producto 
 *      tags: [Product]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object 
 *                      $ref: '#/components/schemas/Product'
 *      responses:
 *          201:
 *              description: Nuevo producto creado
 */
/**
 * @swagger
 * /api/v1/products:
 *  get:
 *      summary: Devuelve los productos 
 *      tags: [Product]
 *      responses:
 *          200:
 *              description: Devuelve todos los productos 
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items: 
 *                              $ref: '#/components/schemas/Product'                              
 */ 

/**
 * @swagger
 * /api/v1/products/{id}:
 *  get:
 *      summary: Devuelve el producto identificado por el id
 *      tags: [Product]
 *      parameters:
 *          - in: path
 *            nombre: id 
 *            schema:
 *              type: string
 *            required: true    
 *            description: El identificador de cada producto
 *      responses:
 *          200:
 *              description: Devuelve un producto 
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object 
 *                          $ref: '#/components/schemas/Product'    
 *          404:
 *              description: Product_NOT_FOUND                          
 */

/**
 * @swagger
 * /api/v1/products/{id}:
 *  put:
 *      summary: Actualiza el producto identificado por el id
 *      tags: [Product]
 *      parameters:
 *          - in: path
 *            dni: id 
 *            schema:
 *              type: string
 *            required: true    
 *            description: El identificador de cada producto
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object 
 *                      properties:
 *                          precio:
 *                              type: double
 *                              description: Precio del producto
 *      responses:
 *          201:
 *              description: producto actualizado  
 *          404:
 *              description: Product_NOT_FOUND                          
 */
/**
 * @swagger
 * /api/v1/products/{id}:
 *  delete:
 *      summary: Elimina el producto identificado por el id
 *      tags: [Product]
 *      parameters:
 *          - in: path
 *            dni: id 
 *            schema:
 *              type: string
 *            required: true    
 *            description: El identificador de cada producto
 *      responses:
 *          204:
 *              description: Product actualizado  
 *          404:
 *              description: Product_NOT_FOUND                          
 */