import './AreaDetail.css';
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Comments from '../Comments/Comments';
import { useSelector } from 'react-redux';
import InhabitantSpecies from '../InhabitantSpecies/InhabitantSpecies';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


const AreaDetail = (props) => {
    let areaData = props.areaTypeDetail;
    const [modalShow, setModalShow] = useState(true);
    const user = useSelector((state) => state.user);
    const [speciesList, setSpeciesList] = useState(null);
    let speciesPerArea = [];

    //    function for filtering species that are related to an area    //   
    const getSpecies = (areaId) => {
        if (speciesList !== null) {
            speciesPerArea.length = 0;
            speciesList.map(species => {
                if (species.naturalAreaId === areaId) {
                    speciesPerArea.push(species);
                }
            });
        };
        return speciesPerArea;
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

            } catch (err) {
                setSpeciesList([]);
            }
        };
        fetchSpecies();
        getSpecies(areaData.id);

    }, []);

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
    };

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


                    <div className='species-list'>
                        {
                            speciesList !== null ?
                                <>
                                    <p className='speciesList-title'>Especies habitantes</p>
                                    <Slider {...settings}>
                                        {speciesList.map((species) => (
                                            species.naturalAreaId === areaData.id &&
                                            <InhabitantSpecies areaData={areaData} key={species.id} species={species} />
                                        ))}
                                    </Slider>
                                </>
                                :
                                <p>No hay especies asociadas a esta área</p>
                        }

                    </div>


                    {/* Google Maps Embed */}
                    {<iframe
                        width="94%"
                        height="300"
                        style={{ border: 0, margin: '3%' }}
                        loading="lazy"
                        allowFullScreen
                        src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyCyTRiOFc-3Y4supPCGGteJQrfOj04trCQ&q=${encodeURIComponent(areaData.name)}`}
                    ></iframe>}

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
