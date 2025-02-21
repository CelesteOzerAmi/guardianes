import './ListAreas.css';
import React from 'react';
import Area from '../Area/Area';
import database from '../../database/database';
import AreaFilter from '../AreaFilter/AreaFilter';
import { useDispatch } from "react-redux";
import { setArea } from '../../storage/areaSlice';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useState } from 'react';


const ListAreas = () => {

    const [listAreas, setListAreas] = useState(database.dbAreas);
    const dispatch = useDispatch();
    const area = useSelector((state) => state.area);
    dispatch(setArea(listAreas));


  


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
            <AreaFilter className='areafilter' listAreas={listAreas} />
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