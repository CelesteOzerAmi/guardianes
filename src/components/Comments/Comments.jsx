import React from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useSelector } from 'react-redux';

function Comments() {

    const user = useSelector((state) => state.user);

    return (
        <>
            {user ?
                <InputGroup>
                    <InputGroup.Text>Comentar</InputGroup.Text>
                    <Form.Control as="textarea" aria-label="With textarea" />
                </InputGroup>
                : <></>
            }
        </>
    );
}

export default Comments;
