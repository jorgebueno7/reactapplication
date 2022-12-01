function Products({productos = []}) {
    return (
      <div>
          {productos.map((item, index) => (
              <div key={index}>
                  <h1>{item.nombre}</h1>
                  <h2>{item.marca}</h2>
                  <p>{item.tipo}</p>
                  <p>{item.precio}</p>
              </div>))
          }
      </div>
    )
  }
  
  export default Products