import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import Comments from '../Comments/Comments';
import Stars from '../Stars/Stars';

const SpeciesDetail = (props) => {

    const [modalShow, setModalShow] = useState(true);
    let SpeciesData = props.SpeciesTypeDetail;
    let statusSentence = '';
    const user = useSelector((state) => state.user);

    switch (SpeciesData.conservationStatus) {
        case 'Extinto':
            statusSentence = 'extinta.';
            break;
        case 'Población normal':
            statusSentence = 'fuera de peligro, con una población normal.';
            break;
        case 'Sobrepoblación':
            statusSentence = 'fuera de peligro, presentando sobrepoblación.';
            break;
        case 'En peligro':
            statusSentence = 'vulnerable, en peligro de extinción.';
            break;
        case 'Preocupación menor':
            statusSentence = 'vulnerable, pero fuera de riesgo de extinción.';
            break;
        default:
            break;
    };

    let speciesKind = '';

    switch (SpeciesData.category) {
        case 'Ave':
            speciesKind = 'ave'
            break;
        case 'Mamífero':
        case 'Mamifero':
        case 'Mamiferos':
        case 'Tremendo Mamífero':
            speciesKind = 'mamífero'
            break;
        case 'Molusco':
            speciesKind = 'molusco'
            break;
        case 'Arácnido':
            speciesKind = 'arácnido'
            break;
        case 'Planta':
            speciesKind = 'planta'
            break;
        case 'Hongo':
            speciesKind = 'fungi'
            break;
        default:
            break;
    };

    let kingdomType = '';

    switch (speciesKind) {
        case 'ave':
        case 'mamífero':
        case 'arácnido':
        case 'molusco':
            kingdomType = 'animal'
            break;
        case 'planta':
            kingdomType = 'vegetal'
            break;
        case 'fungi':
            kingdomType = 'fungi'
            break;
        default:
            break;
    };


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
                            <p>Su nombre científico es {SpeciesData.scientificName}.</p>
                            <p>Es un espécimen de {speciesKind} dentro del reino {kingdomType}.</p>
                            <p>Actualmente, esta especie se encuentra {statusSentence}</p>
                        </div>
                        {
                            user ?
                                <div>
                                    <Stars />
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