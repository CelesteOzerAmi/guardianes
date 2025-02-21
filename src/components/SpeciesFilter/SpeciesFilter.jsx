import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import { setSpecies } from '../../storage/speciesSlice';

const SpeciesFilter = () => {

    const species = useSelector((state) => state.species);
    const dispatch = useDispatch();

    const commonNameFilter = () => {
        const speciesArray = [...species];
        speciesArray.sort((a, b) => a.commonName.localeCompare(b.commonName));
        dispatch(setSpecies(speciesArray));
    };

    const scientificNameFilter = () => {
        const speciesArray = [...species];
        speciesArray.sort((a, b) => a.scientificName.localeCompare(b.scientificName));
        dispatch(setSpecies(speciesArray));
    };
    
    const categoryFilter = () => {
        const speciesArray = [...species];
        speciesArray.sort((a, b) => a.category.localeCompare(b.category));
        dispatch(setSpecies(speciesArray));
    };

    const conservationStatusFilter = () => {
        const speciesArray = [...species];
        speciesArray.sort((a, b) => a.conservationStatus.localeCompare(b.conservationStatus));
        dispatch(setSpecies(speciesArray));
    };

    return (
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Filtros
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item onClick={commonNameFilter}>Nombre común</Dropdown.Item>
                <Dropdown.Item onClick={scientificNameFilter}>Nombre científico</Dropdown.Item>
                <Dropdown.Item onClick={categoryFilter}>Categoría</Dropdown.Item>
                <Dropdown.Item>Región</Dropdown.Item>
                <Dropdown.Item onClick={conservationStatusFilter}>Estado de conservación</Dropdown.Item>

            </Dropdown.Menu>
        </Dropdown>
    )
}

export default SpeciesFilter