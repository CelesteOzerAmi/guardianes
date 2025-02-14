import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';

const AreaDetail = ({ areaTypeDetail, modalLoad }) => {

    const [modalShow, setModalShow] = useState(modalLoad);

    function MyVerticallyCenteredModal(props) {
        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        {areaTypeDetail.nombre}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>
                        Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                        dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                        consectetur ac, vestibulum at eros.
                    </p>
                    <p>{areaTypeDetail.ubicacion}</p>
                    <p>{areaTypeDetail.puntuacion}</p>

                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide}>Cerrar</Button>
                </Modal.Footer>
            </Modal>
        );
    }


    return (
        <>
            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />

        </>
    )
}

export default AreaDetail