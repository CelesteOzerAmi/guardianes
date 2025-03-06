import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import Comments from '../Comments/Comments';

const SpeciesDetail = (props) => {

    const [modalShow, setModalShow] = useState(true);
    let SpeciesData = props.SpeciesTypeDetail;
    const user = useSelector((state) => state.user);


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

        </>)
}

export default SpeciesDetail