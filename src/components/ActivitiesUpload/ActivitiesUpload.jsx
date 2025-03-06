import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import NavBar from '../NavBar/NavBar';
import { ToastContainer, Bounce, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ActivitiesUpload = () => {

    const [areaId, setAreaId] = useState('');
    const [dateInfo, setDateInfo] = useState('');
    const [descriptionInfo, setDescriptionInfo] = useState('');
    const user = useSelector((state) => state.user);
    const [listAreas, setListAreas] = useState(null);

    // fetch function for listing areas on select item
    useEffect(() => {
        const fetchAreas = async () => {
            try {
                const response = await fetch(
                    `https://mammal-excited-tarpon.ngrok-free.app/api/natural-area/list?page=1&pageSize=10`,
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
                setListAreas(data.items || []);
            } catch (err) {
                console.error("Error fetching areas:", err);
                setListAreas([]);
            } finally {
            }
        };

        fetchAreas();
    }, []);


    // fetch function for uploading new activity
    const uploadActivity = async (e) => {
        e.preventDefault();

        try {
            let conservationActivity = {
                userId: user.id,
                naturalAreaId: areaId,
                description: descriptionInfo,
                date: dateInfo,
            };

            const response = await fetch(
                'https://mammal-excited-tarpon.ngrok-free.app/api/conservation-activity/insert?secret=TallerReact2025!',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ conservationActivity }),
                }
            );

            if (!response.ok) {
                throw new Error('Error en el servidor');
            }

            const data = await response.json();
            console.log('Respuesta del servidor:', data);

            if (data.result) {
                console.log("data result");
                notify();
            } else {
                console.log('Registro no válido');
            }
        } catch (err) {
            console.error('Error:', err);
            console.log('Error de conexión');
        } finally {
            console.log("finally");
        }
    };

    const notify = () => toast.success('Actividad registrada con éxito', {
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
                    Registrar nueva actividad
                </h1>
                <section>
                    <Form onSubmit={uploadActivity}>
                        <Form.Group className="mb-3" controlId="dateInfo">
                            <Form.Label>Fecha</Form.Label>
                            <Form.Control type="date" value={dateInfo} required
                                onChange={(e) => setDateInfo(e.target.value)} />
                        </Form.Group>
                        <Form.Select aria-label="Default select example" onChange={(e) => setAreaId(e.target.value)} value={areaId}>

                            {
                                listAreas != null ?
                                    <>
                                        <option>Área</option>
                                        {listAreas.map((areaType) => (
                                            <option value={areaType.id} key={areaType.id}>{areaType.name}</option>
                                        ))}
                                    </>
                                    :
                                    <option>No hay áreas disponibles</option>
                            }
                        </Form.Select>
                        <Form.Group className="mb-3" controlId="areaInfo">
                            <Form.Label>Descripción</Form.Label>
                            <Form.Control as="textarea" rows={3} value={descriptionInfo} required
                                onChange={(e) => setDescriptionInfo(e.target.value)} />
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

export default ActivitiesUpload