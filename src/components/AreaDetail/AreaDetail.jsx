import React from 'react';
import './AreaDetail.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Comments from '../Comments/Comments';
import Stars from '../Stars/Stars';

const AreaDetail = (props) => {

    const [modalShow, setModalShow] = useState(true);
    let areaData = props.areaTypeDetail;


    function AreaDetailModal(props) {
        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton >
                    <Modal.Title id="contained-modal-title-vcenter">
                        {areaData.id}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>
                        Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                        dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                        consectetur ac, vestibulum at eros.
                    </p>
                    <p>{areaData.ubicacion}</p>
                    <p>{areaData.puntuacion}</p>
                    <div>
                        <Stars />
                    </div>
                    <div>
                        <Comments />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide}>Cerrar</Button>
                </Modal.Footer>
            </Modal>
        );
    }


    return (
        <>
            <AreaDetailModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    )
}

export default AreaDetail