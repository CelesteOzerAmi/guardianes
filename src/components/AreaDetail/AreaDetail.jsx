import './AreaDetail.css';
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Comments from '../Comments/Comments';
import { useSelector } from 'react-redux';
import Species from '../Species/Species'

const AreaDetail = (props) => {
    let areaData = props.areaTypeDetail;
    const [modalShow, setModalShow] = useState(true);
    const user = useSelector((state) => state.user);
    const [speciesList, setSpeciesList] = useState(null);
    let speciesPerArea = [];


    //    function for filtering species that are related to an area    //   
    const getSpecies = (areaId) => {
        if (speciesList != null) {
            speciesPerArea.length = 0;
            speciesList.map(species => {
                if (species.naturalAreaId === areaId) {
                    speciesPerArea.push(species);
                }
            });
        }
    };


    //    function for fetching species    // 
    useEffect(() => {
        const fetchSpecies = async () => {
            try {
                const response = await fetch(
                    `https://mammal-excited-tarpon.ngrok-free.app/api/species/list?page=1&pageSize=1000`,
                    {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                            'ngrok-skip-browser-warning': 'true'
                        }
                    }
                );

                const text = await response.text();
                const data = JSON.parse(text);
                setSpeciesList(data.items);
                getSpecies(areaData.id);

            } catch (err) {
                setSpeciesList([]);
                
            }
        };
        fetchSpecies();
    }, []);


    //    useEffect for executing getSpecies at speciesList changes    // 
   /* useEffect(() => {
        
    }, [speciesList])*/



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
                    <p>Especies habitantes</p>

                    <div>
                        { 
                            speciesPerArea.map((spec)=>(
                                <p key={spec.id}>npombre</p>
                            ))
                        }
                    </div>


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
