import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import { setArea } from '../../storage/areaSlice';

const AreaFilter = () => {

    const area = useSelector((state) => state.area);
    const dispatch = useDispatch();

    const nameFilter = () => {
        const areaArray = [...area];
        areaArray.sort((a, b) => a.name.localeCompare(b.name));
        dispatch(setArea(areaArray));
    };

    const areaTypeFilter = () => {
        const areaArray = [...area];
        areaArray.sort((a, b) => a.areaType.localeCompare(b.areaType));
        dispatch(setArea(areaArray));
    };

    const regionFilter = () => {
        const areaArray = [...area];
        areaArray.sort((a, b) => a.region.localeCompare(b.region));
        dispatch(setArea(areaArray));
    };

    const conservationStatusFilter = () => {
        const areaArray = [...area];
        areaArray.sort((a, b) => a.conservationStatus.localeCompare(b.conservationStatus));
        dispatch(setArea(areaArray));
    };

    return (
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Filtros
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item onClick={nameFilter}>Nombre común</Dropdown.Item>
                <Dropdown.Item onClick={areaTypeFilter}>Categoría</Dropdown.Item>
                <Dropdown.Item onClick={regionFilter}>Región</Dropdown.Item>
                <Dropdown.Item onClick={conservationStatusFilter}>Estado de conservación</Dropdown.Item>

            </Dropdown.Menu>
        </Dropdown>
    )
}

export default AreaFilter