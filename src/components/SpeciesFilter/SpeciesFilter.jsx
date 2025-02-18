import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

const SpeciesFilter = () => {


    function BasicExample() {
        return (
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Filtros
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Nombre</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Tipo</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Región</Dropdown.Item>
                    <Dropdown.Item href="#/action-4">Estado</Dropdown.Item>

                </Dropdown.Menu>
            </Dropdown>
        );
    }

    return (
        <>
            <BasicExample />
        </>
    )
}

export default SpeciesFilter