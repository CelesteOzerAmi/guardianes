import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import { setArea } from '../../storage/areaSlice';

const AreaFilter = () => {

    const area = useSelector((state) => state.area);
    const dispatch = useDispatch();

    const areaArray = [...area];

    const nameFilter = () => {
        areaArray.sort((a, b) => a.nombre.localeCompare(b.nombre));
        dispatch(setArea(areaArray.area));
        console.log(area);
    }


    return (
        <>
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Filtros
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item onClick={nameFilter}>Nombre</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Tipo</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Región</Dropdown.Item>
                    <Dropdown.Item href="#/action-4">Estado</Dropdown.Item>

                </Dropdown.Menu>
            </Dropdown>
        </>
    )
}

export default AreaFilter