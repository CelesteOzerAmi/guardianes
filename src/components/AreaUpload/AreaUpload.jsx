import './AreaUpload.css';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import NavBar from '../NavBar/NavBar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { ToastContainer, Bounce, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AreaUpload = () => {

    const user = useSelector((state) => state.user);
    const [areaName, setAreaName] = useState('');
    const [areaLocation, setAreaLocation] = useState('');
    const [areaType, setAreaType] = useState('');
    const [areaRegion, setAreaRegion] = useState('');
    const [conservationStatus, setConservationStatus] = useState('');
    const [areaDescription, setAreaDescription] = useState('');
    const [areaImage, setAreaImage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const areaData = {
            userId: user.id,
            naturalArea: {
                name: areaName,
                location: areaLocation,
                areaType: areaType,
                region: areaRegion,
                conservationStatus: conservationStatus,
                description: areaDescription,
                imageUrl: areaImage
            }
        };

        try {
            const response = await fetch('https://mammal-excited-tarpon.ngrok-free.app/api/natural-area/insert?secret=TallerReact2025!', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'ngrok-skip-browser-warning': 'true'
                },
                body: JSON.stringify(areaData),
            });

            const responseData = await response.json();

            if (response.ok) {
                notify();
            } else {
                console.error("Server Error:", responseData);
                alert("Error en la respuesta del servidor: " + responseData.message);
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    const notify = () => toast.success('Área registrada con éxito', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
    });

    return (
        <>
            <NavBar />
            <div className='area-upload'>
                <h1>
                    Registrar nueva área protegida
                </h1>
                <section>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="areaName">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control type="text"
                                value={areaName}
                                onChange={(e) => setAreaName(e.target.value)}
                                required />
                        </Form.Group>
                        <Form.Label>Tipo de área</Form.Label>
                        <Form.Select aria-label="Default select example"
                            value={areaType}
                            onChange={(e) => setAreaType(e.target.value)}
                            required>
                            <option>Seleccionar</option>
                            <option value="Reserva natural">Reserva natural</option>
                            <option value="Parque nacional">Parque nacional</option>
                            <option value="Sitio urbano">Sitio urbano</option>
                            <option value="Otro">Otro</option>
                        </Form.Select>
                        <br />
                        <Form.Group className="mb-3" controlId="areaLocation">
                            <Form.Label>Ubicación</Form.Label>
                            <Form.Control type="text"
                                value={areaLocation}
                                onChange={(e) => setAreaLocation(e.target.value)}
                                required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="areaLocation">
                            <Form.Label>Región</Form.Label>
                            <Form.Control type="text"
                                value={areaRegion}
                                onChange={(e) => setAreaRegion(e.target.value)}
                                required />
                        </Form.Group>
                        <Form.Label>Estado de conservación</Form.Label>
                        <Form.Select aria-label="Default select example"
                            value={conservationStatus}
                            onChange={(e) => setConservationStatus(e.target.value)}
                            required>
                            <option>Seleccionar</option>
                            <option value="Crítico">Crítico</option>
                            <option value="En riesgo">En riesgo</option>
                            <option value="Estable">Estable</option>
                        </Form.Select>
                        <br />
                        <Form.Group controlId="formFile" className="mb-3">
                            <Form.Label>Cargar imagen</Form.Label>
                            <Form.Control type="file"
                                value={areaImage}
                                onChange={(e) => setAreaImage(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="areaInfo">
                            <Form.Label>Información adicional</Form.Label>
                            <Form.Control as="textarea" rows={3}
                                value={areaDescription}
                                onChange={(e) => setAreaDescription(e.target.value)} />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Registrar
                        </Button>
                        <ToastContainer
                            position="top-center"
                            autoClose={5000}
                            hideProgressBar
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable={false}
                            pauseOnHover={false}
                            theme="dark"
                            transition={Bounce}
                        />
                    </Form>
                </section>
            </div>
        </>
    )
}
export default AreaUpload;