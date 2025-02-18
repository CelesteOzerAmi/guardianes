import './ListAreas.css';
import React from 'react';
import Area from '../Area/Area';
import database from '../../database/database';
import AreaFilter from '../AreaFilter/AreaFilter';


const ListAreas = () => {

    const listAreas = database.dbAreas;
    

    return (
        <div className='list-areas'>
            <h1>
                Áreas protegidas
            </h1>
            <p>
                La protección de áreas naturales es una tarea esencial para conservar
                y promover la diversidad de fauna y flora en nuestro medio ambiente.
                Hasta ahora, las áreas que se encuentran protegidas en nuestro país
                son las que se listan a continuación.
            </p>
            <AreaFilter className='areafilter' />
            <section> 
                {
                    listAreas.map((areaType) => (
                        <Area areaType={areaType} key={areaType.id} />
                    ))
                }
            </section>
        </div>
    )
}

export default ListAreas