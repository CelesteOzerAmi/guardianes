import './SpeciesUpload.css';
import React, { useState, useEffect } from 'react';
import NavBar from '../NavBar/NavBar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useSelector } from 'react-redux';
import { ToastContainer, Bounce, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SpeciesUpload = () => {
    const [speciesName, setSpeciesName] = useState('');
    const [scientificName, setScientificName] = useState('');
    const [category, setCategory] = useState('');
    const [naturalAreaId, setNaturalAreaId] = useState(0);
    const [conservationStatus, setConservationStatus] = useState('');
    const [listAreas, setListAreas] = useState(null);
    const user = useSelector((state) => state.user);

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
            }
        };

        fetchAreas();
    }, []);


    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            userId: user.id,
            species: {
                commonName: speciesName,
                scientificName: scientificName,
                category: category,
                conservationStatus: conservationStatus,
                naturalAreaId: naturalAreaId,
            }
        };

        console.log("Payload:", JSON.stringify(payload, null, 2));

        try {
            const response = await fetch('https://mammal-excited-tarpon.ngrok-free.app/api/species/insert', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'ngrok-skip-browser-warning': 'true'
                },
                body: JSON.stringify(payload),
            });

            const responseData = await response.json(); // Read response

            if (response.ok) {
                notify();
            } else {
                console.error("Server Error:", responseData);
                alert("Error en la respuesta del servidor: " + responseData.message);
            }
        } catch (error) {
            console.error("Error:", error);
            alert("Error de conexión o en el servidor");
        }
    };

    const notify = () => toast.success('Especie registrada con éxito', {
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
            <div className='species-upload'>
                <h1>Registrar nueva especie protegida</h1>
                <section>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="speciesName">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control
                                type="text"
                                required
                                value={speciesName}
                                onChange={(e) => setSpeciesName(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="speciesName">
                            <Form.Label>Nombre Científico</Form.Label>
                            <Form.Control
                                type="text"
                                required
                                value={scientificName}
                                onChange={(e) => setScientificName(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Label>Categoría</Form.Label>
                        <Form.Select required onChange={(e) => setCategory(e.target.value)}>
                            <option value="">Seleccionar</option>
                            <option value="Mamífero">Mamífero</option>
                            <option value="Ave">Ave</option>
                            <option value="Planta">Planta</option>
                            <option value="Fungi">Fungi</option>
                        </Form.Select>
                        <br />
                        <Form.Label>Área</Form.Label>
                        <Form.Select aria-label="Default select example" onChange={(e) => setNaturalAreaId(e.target.value)}>

                            {
                                listAreas != null ?
                                    <>
                                        <option>Seleccionar</option>
                                        {listAreas.map((areaType) => (
                                            <option value={areaType.id} key={areaType.id}>{areaType.name}</option>
                                        ))}
                                    </>
                                    :
                                    <option>No hay áreas disponibles</option>
                            }
                        </Form.Select>
                        <br />
                        <Form.Label>Estado de conservación</Form.Label>
                        <Form.Select required onChange={(e) => setConservationStatus(e.target.value)}>
                            <option value="">Seleccionar</option>
                            <option value="En peligro">En peligro</option>
                            <option value="Vulnerable">Vulnerable</option>
                            <option value="En cautiverio">En cautiverio</option>
                            <option value="Estable">Estable</option>
                        </Form.Select>
                        <br />
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
    );
}

export default SpeciesUpload;
