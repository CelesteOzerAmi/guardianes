import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { useSelector } from 'react-redux';

const Comments = (props) => {

    const user = useSelector((state) => state.user);
    const [commentInfo, setCommentInfo] = useState('');
    let areaId = null;
    let speciesId = null; 
    const rating = 5;

    if (props.areaData != null) {
        areaId = props.areaData.id;
    };

    if (props.speciesId != null ) {
        speciesId = props.areaData.id;
    };

    const sendComment = async (e) => {
        e.preventDefault();
        console.log(commentInfo);
        console.log("area: " + areaId);
        console.log("especie: " + speciesId);
        console.log("user id: " + user.id);


        try {
            let comment = {
                userId: user.id,
                naturalAreaId: areaId,
                speciesId: speciesId,
                comment: commentInfo,
                rating: rating,
            };


            const response = await fetch(
                'https://mammal-excited-tarpon.ngrok-free.app/api/comment/insert?secret=TallerReact2025!',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ comment }), 
                }
            );

            if (!response.ok) {
                throw new Error('Error en el servidor');
            }

            const data = await response.json();
            console.log('Respuesta del servidor:', data);

            if (data.result) {
                console.log("data result");
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



    return (
        <Form onSubmit={sendComment}>
            <InputGroup>
                <InputGroup.Text>Comentar</InputGroup.Text>
                <Form.Control as="textarea" aria-label="With textarea" value={commentInfo}
                    onChange={(e) => setCommentInfo(e.target.value)} />
            </InputGroup>
            <Button variant="primary" type="submit">
                Enviar
            </Button>
        </Form>
    );
};

export default Comments