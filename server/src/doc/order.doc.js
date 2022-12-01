/**
 * @swagger
 * components:
 *  schemas:
 *      Order:
 *          type: object    
 *          properties:
 *              lineapedido:
 *                  type: integer
 *                  description: Linea de pedido del pedido
 *              descripcion:
 *                  type: string
 *                  description: Descripcion del pedido
 *              cantidad:
 *                  type: integer
 *                  description: Cantidad de productos del pedido
 *              direccion:
 *                  type: string
 *                  description: Direccion de envio del pedido
 *          required:
 *              - lineapedido
 *              - descripcion
 *              - cantidad
 *              - direccion
 *          example:
 *              lineapedido: 36
 *              descripcion: Pedido frágil
 *              cantidad: 3
 *              direccion: Calle San Vicente 23
 */
/**
 * @swagger
 * /api/v1/orders:
 *  post:
 *      summary: Crea un nuevo pedido 
 *      tags: [Order]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object 
 *                      $ref: '#/components/schemas/Order'
 *      responses:
 *          201:
 *              description: Nuevo pedido creado
 */
/**
 * @swagger
 * /api/v1/orders:
 *  get:
 *      summary: Devuelve los pedidos
 *      tags: [Order]
 *      responses:
 *          200:
 *              description: Devuelve todos las pedidos 
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items: 
 *                              $ref: '#/components/schemas/Order'                              
 */ 

/**
 * @swagger
 * /api/v1/orders/{id}:
 *  get:
 *      summary: Devuelve el pedido identificado por el id
 *      tags: [Order]
 *      parameters:
 *          - in: path
 *            numero: id 
 *            schema:
 *              type: string
 *            required: true    
 *            description: El identificador de cada pedido
 *      responses:
 *          200:
 *              description: Devuelve un pedido 
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object 
 *                          $ref: '#/components/schemas/Order'    
 *          404:
 *              description: Order_NOT_FOUND                          
 */

/**
 * @swagger
 * /api/v1/orders/{id}:
 *  put:
 *      summary: Actualiza el pedido identificado por el id
 *      tags: [Order]
 *      parameters:
 *          - in: path
 *            dni: id 
 *            schema:
 *              type: string
 *            required: true    
 *            description: El identificador de cada pedido
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object 
 *                      properties:
 *                          descripcion:    
 *                              type: string 
 *                              description: Descripcion del pedido
 *                          cantidad:    
 *                              type: integer 
 *                              description: Cantidad del pedido 
 *                          direccion:    
 *                              type: string 
 *                              description: Direccion de envío del pedido 
 *      responses:
 *          201:
 *              description: pedido actualizado  
 *          404:
 *              description: Order_NOT_FOUND                          
 */
/**
 * @swagger
 * /api/v1/orders/{id}:
 *  delete:
 *      summary: Elimina el pedido identificado por el id
 *      tags: [Order]
 *      parameters:
 *          - in: path
 *            dni: id 
 *            schema:
 *              type: string
 *            required: true    
 *            description: El identificador de cada pedido
 *      responses:
 *          204:
 *              description: pedido actualizado
 *          404:
 *              description: Order_NOT_FOUND                          
 */