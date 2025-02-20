import './SpeciesUpload.css';
import React from 'react';
import NavBar from '../NavBar/NavBar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const SpeciesUpload = () => {
    return (
        <>
            <NavBar />
            <div className='species-upload'>
                <h1>
                    Registrar nueva especie protegida
                </h1>
                <section>
                    <Form>
                        <Form.Group className="mb-3" controlId="speciesName">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control type="text" required />
                        </Form.Group>
                        <Form.Label>Categoría</Form.Label>
                        <Form.Select aria-label="Default select example">
                            <option>Seleccionar</option>
                            <option value="1">Mamífero</option>
                            <option value="2">Ave</option>
                            <option value="3">Planta</option>
                            <option value="3">Fungi</option>
                        </Form.Select>
                        <br />
                        <Form.Group className="mb-3" controlId="speciesLocation">
                            <Form.Label>Ubicación</Form.Label>
                            <Form.Control type="text" required />
                        </Form.Group>
                        <Form.Label>Estado de conservación</Form.Label>
                        <Form.Select aria-label="Default select example">
                            <option>Seleccionar</option>
                            <option value="1">En peligro</option>
                            <option value="2">Vulnerable</option>
                            <option value="3">En cautiverio</option>
                            <option value="4">Estable</option>
                        </Form.Select>
                        <br />
                        <Form.Group controlId="formFile" className="mb-3">
                            <Form.Label>Cargar imagen</Form.Label>
                            <Form.Control type="file" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="speciesInfo">
                            <Form.Label>Información adicional</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Registrar
                        </Button>
                    </Form>
                </section>
            </div>
        </>
    )
}

export default SpeciesUpload