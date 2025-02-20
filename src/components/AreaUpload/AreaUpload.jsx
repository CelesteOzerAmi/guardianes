import './AreaUpload.css';
import React from 'react';
import NavBar from '../NavBar/NavBar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const AreaUpload = () => {
    return (
        <>
            <NavBar />
            <div className='area-upload'>
                <h1>
                    Registrar nueva área protegida
                </h1>
                <section>
                    <Form>
                        <Form.Group className="mb-3" controlId="areaName">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control type="text" required/>
                        </Form.Group>
                        <Form.Label>Tipo de área</Form.Label>
                        <Form.Select aria-label="Default select example">
                            <option>Seleccionar</option>
                            <option value="1">Reserva natural</option>
                            <option value="2">Parque nacional</option>
                            <option value="3">Sitio urbano</option>
                            <option value="4">Otro</option>
                        </Form.Select>
                        <br />
                        <Form.Group className="mb-3" controlId="areaLocation">
                            <Form.Label>Ubicación</Form.Label>
                            <Form.Control type="text" required/>
                        </Form.Group>
                        <Form.Label>Estado de conservación</Form.Label>
                        <Form.Select aria-label="Default select example">
                            <option>Seleccionar</option>
                            <option value="1">Crítico</option>
                            <option value="2">En riesgo</option>
                            <option value="3">Estable</option>
                        </Form.Select>
                        <br />
                        <Form.Group controlId="formFile" className="mb-3">
                            <Form.Label>Cargar imagen</Form.Label>
                            <Form.Control type="file" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="areaInfo">
                            <Form.Label>Información adicional</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </section>
            </div>
        </>
    )
}
export default AreaUpload;