import React from 'react';
import './InhabitantSpecies.css';

const InhabitantSpecies = (props) => {


    let species = props.species;
    console.log(species);
    

    return (
        <>

            <div className='inhabitant-species'>
                <h1>{species.commonName}</h1>
                <h2>{species.scientificName}</h2>
                <div className='description'>
                    <p>{species.category}</p>
                    <p>|</p>
                    <p className='status'>{species.conservationStatus}</p>
                </div>
            </div>

        </>
    )
}

export default InhabitantSpecies