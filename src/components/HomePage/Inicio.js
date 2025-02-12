import './Inicio.css'
import React from 'react';
import { useState } from 'react';
import NavBar from '../NavBar/NavBar';
import ListadoAreas from '../ListAreas/ListadoAreas';
import ListadoEspecies from '../ListSpecies/ListadoEspecies';

const Inicio = () => {


    const [toggleInicio, setToggleInicio] = useState(true);

    return (
        <>  
            <NavBar/>
            <div className='inicio'>
                <div className='button'>
                    <button onClick={() => setToggleInicio(true)}>
                        Áreas
                    </button>
                    <button onClick={() => setToggleInicio(false)}>
                        Especies
                    </button>
                </div>
                {
                    toggleInicio ? (
                        <section>
                            <ListadoAreas />
                        </section>
                    ) : (
                        <section>
                            <ListadoEspecies />
                        </section>
                    )
                }
            </div>
        </>
    )
}

export default Inicio