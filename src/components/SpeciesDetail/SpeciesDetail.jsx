import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useSelector } from 'react-redux';
import Comments from '../Comments/Comments';

const SpeciesDetail = (props) => {
    const [modalShow, setModalShow] = useState(true);
    const [areaName, setAreaName] = useState('');
    let SpeciesData = props.SpeciesTypeDetail;
    const user = useSelector((state) => state.user);

    useEffect(() => {
        const fetchAreas = async () => {
            try {
                const response = await fetch(
                    `https://mammal-excited-tarpon.ngrok-free.app/api/natural-area/list?page=1&pageSize=1000`,
                    {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                            'ngrok-skip-browser-warning': 'true'
                        }
                    }
                );
                const data = await response.json();
                const matchingArea = data.items.find(area => area.id === SpeciesData.naturalAreaId);
                if (matchingArea) {
                    setAreaName(matchingArea.name);
                }
            } catch (err) {
                setAreaName('Desconocido');
            }
        };
        fetchAreas();
    }, [SpeciesData.naturalAreaId]);

    function SpeciesDetailModal(props) {
        return (
            <>
                <Modal
                    {...props}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            {SpeciesData.commonName}
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            <p>Nombre científico: {SpeciesData.scientificName}.</p>
                            <p>Categoría de especie: {SpeciesData.category}.</p>
                            <p>Estado de conservación: {SpeciesData.conservationStatus}</p>
                            <p>Área natural: {areaName}</p>
                        </div>
                        {
                            user ?
                                <div>
                                    <Comments SpeciesData={SpeciesData} />
                                </div>
                                :
                                <></>
                        }
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={props.onHide}>Cerrar</Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }

    return (
        <>
            <SpeciesDetailModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    );
}

export default SpeciesDetail;
