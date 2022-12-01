/**
 * @swagger
 * components:
 *  schemas:
 *      CreditCard:
 *          type: object    
 *          properties:
 *              numero:
 *                  type: integer
 *                  description: Numero de la tarjeta (9 dígitos)
 *              nombre_completo:
 *                  type: string
 *                  description: Nombre completo del dueño de la tarjeta
 *              fecha:
 *                  type: dateonly
 *                  description: Fecha de caducidad (YYYY-MM-DD)
 *              CVC:
 *                  type: integer
 *                  description: Codigo de verificacion de la tarjeta (3 dígitos)
 *          required:
 *              - numero
 *              - nombre_completo
 *              - fecha
 *              - CVC
 *          example:
 *              numero: 444222111
 *              nombre_completo: Laura Rueda Suarez
 *              fecha: 2027-05-16
 *              CVC: 190
 */
/**
 * @swagger
 * /api/v1/creditcards:
 *  post:
 *      summary: Crea una nueva tarjeta de credito 
 *      tags: [CreditCard]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object 
 *                      $ref: '#/components/schemas/CreditCard'
 *      responses:
 *          201:
 *              description: Nueva tarjeta de credito creada
 */
/**
 * @swagger
 * /api/v1/creditcards:
 *  get:
 *      summary: Devuelve las tarjetas de credito 
 *      tags: [CreditCard]
 *      responses:
 *          200:
 *              description: Devuelve todos las tarjetas de credito 
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items: 
 *                              $ref: '#/components/schemas/CreditCard'                              
 */ 

/**
 * @swagger
 * /api/v1/creditcards/{id}:
 *  get:
 *      summary: Devuelve la tarjeta de credito identificada por el id
 *      tags: [CreditCard]
 *      parameters:
 *          - in: path
 *            numero: id 
 *            schema:
 *              type: string
 *            required: true    
 *            description: El identificador de cada tarjeta de credito
 *      responses:
 *          200:
 *              description: Devuelve un tarjeta de credito 
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object 
 *                          $ref: '#/components/schemas/CreditCard'    
 *          404:
 *              description: CreditCard_NOT_FOUND                          
 */

/**
 * @swagger
 * /api/v1/creditcards/{id}:
 *  put:
 *      summary: Actualiza la tarjeta de credito identificada por el id
 *      tags: [CreditCard]
 *      parameters:
 *          - in: path
 *            dni: id 
 *            schema:
 *              type: string
 *            required: true    
 *            description: El identificador de cada tarjeta de credito
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object 
 *                      properties:
 *                          fecha:    
 *                              type: dateonly 
 *                              description: Fecha de caducidad de la tarjeta de credito 
 *      responses:
 *          201:
 *              description: tarjeta de credito actualizada  
 *          404:
 *              description: CreditCard_NOT_FOUND                          
 */
/**
 * @swagger
 * /api/v1/creditcards/{id}:
 *  delete:
 *      summary: Elimina la tarjeta de credito identificada por el id
 *      tags: [CreditCard]
 *      parameters:
 *          - in: path
 *            dni: id 
 *            schema:
 *              type: string
 *            required: true    
 *            description: El identificador de cada tarjeta de credito
 *      responses:
 *          204:
 *              description: tarjeta de credito actualizada
 *          404:
 *              description: CreditCard_NOT_FOUND                          
 */