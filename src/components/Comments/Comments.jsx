import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { useSelector } from 'react-redux';
import './Comments.css';

const Comments = (props) => {

    // fetching comments
    const user = useSelector((state) => state.user);
    const [commentList, setCommentList] = useState(null);
    const [commentItem, setCommentItem] = useState(null);
    let entity;
    let entityType;
    let commentText = "";

    if (props.naturalArea) {
        entity = props.naturalArea;
        entityType = "naturalArea";
    };

    if (props.SpeciesData) {
        entity = props.SpeciesData;
        entityType = "species";
    };

    useEffect(() => {
        const fetchComments = async () => {
            try {
                const response = await fetch(
                    `https://mammal-excited-tarpon.ngrok-free.app/api/comment/byEntityId?entityId=${entity.id}&entityType=${entityType}&${entityType}Id=${entity.id}&page=1&pageSize=10`,
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
                setCommentList(data.items || []);
            } catch (err) {
                console.error("Error fetching comments:", err);
                setCommentList([]);
            }

        };

        fetchComments();

    }, []);

    useEffect(() => {
        if (commentList != null) {
            commentList.map(com => {
                if (com.userId === user.id) {
                    setCommentItem(com);
                }
            });
        }
    }, [commentList]);

    if (commentItem) {
        commentText = commentItem.text;
    }


    // sending comments

    const [commentInfo, setCommentInfo] = useState('');

    let areaId = null;
    let speciesId = null;
    const rating = 5;

    if (props.areaData != null) {
        areaId = props.areaData.id;
    };

    if (props.SpeciesData != null) {
        speciesId = props.SpeciesData.id;
    };

    const sendComment = async (e) => {
        e.preventDefault();

        try {
            let comment = {
                userId: user.id,
                naturalAreaId: areaId,
                text: commentInfo,
                speciesId: speciesId,
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

        } catch (err) {
            console.error('Error:', err);
        } finally {
            commentText = commentInfo;
        }
    };



    return (
        <>
            {
                commentText != null && commentText != "" ?
                    <div>
                        <p>
                            Comentaste: {commentText}
                        </p>
                    </div>
                    :
                    <Form onSubmit={sendComment} className='comments-form'>
                        <InputGroup>
                            <InputGroup.Text>Comentar</InputGroup.Text>
                            <Form.Control as="textarea" aria-label="With textarea" value={commentInfo}
                                onChange={(e) => setCommentInfo(e.target.value)} />
                        </InputGroup>
                        <Button variant="primary" type="submit">
                            Enviar
                        </Button>
                    </Form>
            }

        </>

    )
}
export default Comments