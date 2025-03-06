import React, { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import Area from '../Area/Area';
import Species from '../Species/Species';
import Activities from '../Activities/Activities';
import NavBar from '../NavBar/NavBar';
import './UserProfile.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const UserProfile = () => {

    const user = useSelector((state) => state.user);
    const [listAreas, setListAreas] = useState(null);
    const [listSpecies, setListSpecies] = useState(null);
    const [listActivities, setListActivities] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        // function for fetching areas uploaded by this user
        const fetchAreas = async () => {
            try {
                const responseAreas = await fetch(
                    `https://mammal-excited-tarpon.ngrok-free.app/api/natural-area/byUser?userId=${user.id}&page=1&pageSize=1000`,
                    {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                            'ngrok-skip-browser-warning': 'true'
                        }
                    }
                );

                const textAreas = await responseAreas.text();
                const dataAreas = JSON.parse(textAreas);
                setListAreas(dataAreas.items || []);
            } catch (err) {
                console.error("Error fetching areas:", err);
                setListAreas([]);
            } finally {
                setLoading(false);
            }
        };

        // function for fetching species uploaded by this user
        const fetchSpecies = async () => {
            try {
                const responseSpecies = await fetch(
                    `https://mammal-excited-tarpon.ngrok-free.app/api/species/byUser?userId=${user.id}&page=1&pageSize=1000`,
                    {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                            'ngrok-skip-browser-warning': 'true'
                        }
                    }
                );

                const textSpecies = await responseSpecies.text();
                const dataSpecies = JSON.parse(textSpecies);
                setListSpecies(dataSpecies.items || []);
            } catch (err) {
                console.error("Error fetching species:", err);
                setListSpecies([]);
            } finally {
                setLoading(false);
            }
        };

        // function for fetching activities uploaded by this user
        const fetchActivities = async () => {
            try {
                const responseActivities = await fetch(
                    `https://mammal-excited-tarpon.ngrok-free.app/api/conservation-activity/byUser?userId=${user.id}&page=1&pageSize=1000`,
                    {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                            'ngrok-skip-browser-warning': 'true'
                        }
                    }
                );

                const textActivities = await responseActivities.text();
                const dataActivities = JSON.parse(textActivities);
                setListActivities(dataActivities.items || []);
            } catch (err) {
                console.error("Error fetching activities:", err);
                setListActivities([]);
            } finally {
                setLoading(false);
            }
        };

        fetchAreas();
        fetchSpecies();
        fetchActivities();

    }, []);

    if (loading) return <p>Cargando áreas y especies...</p>;

    var areaSliderSettings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
    };

    var speciesSliderSettings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
    };

    var activitiesSliderSettings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
    };

    return (
        <>
            <NavBar />
            <section className='profile-section'>
                <h1 className='profile-title'>{user.name}</h1>
                <h2 className='profile-subtitle'>Áreas cargadas</h2>
                <section className='profile-arealist'>

                    {
                        listAreas === null || listAreas.length === 0 ?
                            <p className='profile-text'>No hay áreas cargadas.</p> :
                            <>
                                <Slider {...areaSliderSettings}>
                                    {listAreas.map((areaType) => (
                                        <Area areaType={areaType} key={areaType.id} />
                                    ))
                                    }
                                </Slider>
                            </>
                    }
                </section>

                <h2 className='profile-subtitle'>Especies cargadas</h2>
                <section className='profile-arealist'>
                    {
                        listSpecies === null || listSpecies.length === 0 ?
                            <p className='profile-text'>No hay especies cargadas.</p>
                            :
                            <>
                                <Slider {...speciesSliderSettings}>
                                    {
                                        listSpecies.map((speciesType) => (
                                            <Species typeSpecies={speciesType} key={speciesType.id} />
                                        ))
                                    }
                                </Slider>
                            </>
                    }
                </section>

                <h2 className='profile-subtitle'>Actividades cargadas</h2>
                <section className='profile-arealist'>
                    {
                        listActivities === null || listActivities.length === 0 ?
                            <p className='profile-text'>No hay actividades cargadas.</p>
                            :
                            <Slider {...activitiesSliderSettings}>
                                {
                                    listActivities.map((activity) => (
                                        <Activities activity={activity} key={activity.id} />
                                    ))
                                }
                            </Slider>
                    }
                </section>
            </section>
        </>
    )
}

export default UserProfile