import './ListadoAreas.css';
import React from 'react';
import Area from './Area';
import database from '../database/database';


const ListadoAreas = () => {

    const listaAreas = database.dbAreas;

    return (
        <div className='listado-areas'>
            <h1>
                Áreas protegidas
            </h1>
            <p>
                La protección de áreas naturales es una tarea esencial para conservar
                y promover la diversidad de fauna y flora en nuestro medio ambiente.
                Hasta ahora, las áreas que se encuentran protegidas en nuestro país
                son las que se listan a continuación.
            </p>
            <section>
                {
                    listaAreas.map((tipoArea) => (
                        <Area tipoArea={tipoArea} key={tipoArea.id} />
                    ))
                }
            </section>
        </div>
    )
}

export default ListadoAreas