import React from 'react'

const Pagination = (props) => {
    const users = props.users.map(user => {
        return <li key={user.id}>{user.nombre}</li>;
    })
    return (
        <div>
            <h1>Pagina: {props.currentPage}</h1>
            <button onClick={props.prevHandler}>Prev</button>
            <button onClick={props.nextHandler}>Next</button>

            <h2>Usuarios: </h2>
            <ul>
                {users}
            </ul>
        </div>
    )
}

export default Pagination