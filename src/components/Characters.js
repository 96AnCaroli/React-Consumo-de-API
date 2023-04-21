import React from 'react'

function Characters({characters = []}) {
    return (                 //crearé una columna para cada personaje
        <div className='row'> 
            {characters.map((item, index) => (
                <div key={index} className='col mb-5'>
                    <div className='card' style={{minWidth: "200px"}}>
                        <img src={item.image} alt=""></img>
                        <div className='card-body'>
                            <h5 className='card-title'>{item.name}</h5>
                            <hr/>
                            <p>Especie: {item.species}</p>
                            <p>Ubicación: {item.location.name}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Characters
