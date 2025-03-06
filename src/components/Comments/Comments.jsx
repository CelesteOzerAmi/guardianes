import './Comments.css';
import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { useSelector } from 'react-redux';
import Rating from '@mui/material/Rating';
import { ToastContainer, Bounce, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Comments = (props) => {

    //      fetching comments
    const user = useSelector((state) => state.user);
    const [ratingValue, setRatingValue] = useState(0);
    const [commentList, setCommentList] = useState(null);
    const [commentItem, setCommentItem] = useState(null);
    let entity;
    let entityType;
    let commentText = "";

    //  setting entity to naturalArea or species depending on where Comment component is rendering  //
    if (props.naturalArea) {
        entity = props.naturalArea;
        entityType = "naturalArea";
    };

    if (props.SpeciesData) {
        entity = props.SpeciesData;
        entityType = "species";
    };

    //  fetching comments from api when component renders  //
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

    //  when commentList changes, fetched comments are filtered by user  //
    useEffect(() => {
        if (commentList != null) {
            commentList.map(com => {
                if (com.userId === user.id) {
                    setCommentItem(com);
                    setRatingValue(com.rating);
                }
            });
        }
    }, [commentList]);

    if (commentItem) {
        commentText = commentItem.text;
    };


    //      sending comments
    const [commentInfo, setCommentInfo] = useState('');
    let areaId = null;
    let speciesId = null;

    if (props.areaData != null) {
        areaId = props.areaData.id;
    };

    if (props.SpeciesData != null) {
        speciesId = props.SpeciesData.id;
    };


    //  sending comments to api  //
    const sendComment = async (e) => {
        e.preventDefault();

        try {
            let comment = {
                userId: user.id,
                naturalAreaId: areaId,
                text: commentInfo,
                speciesId: speciesId,
                rating: ratingValue,
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
            notify();
        }
    };

    const notify = () => toast.success('Comentario enviado con éxito', {
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
        <div className='comments'>
            <div className='stars-rating'>
                <p>Puntuación</p>
                <Rating
                    name="simple-controlled"
                    value={ratingValue}
                    onChange={(event, newValue) => {
                        setRatingValue(newValue);
                    }}
                />
            </div>

            {
                commentText != null && commentText != "" ?
                    <div className='registered-comment'>
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
            }
        </div>
    )
}
export default Comments