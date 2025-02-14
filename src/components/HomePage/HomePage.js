import './HomePage.css'
import React from 'react';
import { useState } from 'react';
import NavBar from '../NavBar/NavBar';
import ListAreas from '../ListAreas/ListAreas';
import ListSpecies from '../ListSpecies/ListSpecies';

const Home = () => {


    const [toggleHome, setToggleHome] = useState(true);

    return (
        <>  
            <NavBar/>
            <div className='home'>
                <div className='button'>
                    <button onClick={() => setToggleHome(true)}>
                        Áreas
                    </button>
                    <button onClick={() => setToggleHome(false)}>
                        Especies
                    </button>
                </div>
                {
                    toggleHome ? (
                        <section>
                            <ListAreas />
                        </section>
                    ) : (
                        <section>
                            <ListSpecies />
                        </section>
                    )
                }
            </div>
        </>
    )
}

export default Home