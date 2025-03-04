import './AreaDetail.css';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Comments from '../Comments/Comments';
import Stars from '../Stars/Stars';
import { useSelector } from 'react-redux';

const AreaDetail = (props) => {
    let areaData = props.areaTypeDetail;
    const [modalShow, setModalShow] = useState(true);
    const user = useSelector((state) => state.user);

    function AreaDetailModal(props) {
        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        {areaData.name}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>{areaData.description}</p>
                    <p>Tipo de área: {areaData.areaType}</p>
                    <p>Ubicación: {areaData.location}</p>
                    <p>Región: {areaData.region}</p>
                    <p>Estado de conservación: {areaData.conservationStatus}</p>
                    <img src={areaData.imageUrl} alt={areaData.name} className="area-image" />
                    
                    {/* Google Maps Embed */}
                    <iframe
                        width="100%"
                        height="300"
                        style={{ border: 0, marginTop: '10px' }}
                        loading="lazy"
                        allowFullScreen
                        src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyAMZyivuWnBZBz6gxSheYUGzoxvu0YJFlI&q=${encodeURIComponent(areaData.name)}`}
                    ></iframe>
                    
                    {user && (
                        <div>
                            <Stars />
                            <Comments areaData={areaData} naturalArea={areaData} />
                        </div>
                    )}
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
    );
};

export default AreaDetail;
