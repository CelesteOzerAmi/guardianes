import React from 'react';
import './ActivitiesList.css';
import NavBar from '../NavBar/NavBar';
import Activities from '../Activities/Activities';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';

const ActivitiesList = () => {

  const user = useSelector((state) => state.user);
  const [listActivities, setListActivities] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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

    fetchActivities();

  }, []);

  if (loading) return <p>Cargando áreas y especies...</p>;


  return (
    <>
      <NavBar />
      <div className='conservation-body'>

        <h1>Actividades de conservación</h1>
        <h2>En esta sección se muestran las actividades de conservación de áreas naturales registradas.</h2>

        <a href='/uploadactivities'>Registrar nueva actividad</a>

        <section className='activities-grid'>
          {listActivities != null ? (
            listActivities.map((activity) => (
              <Activities activity={activity} key={activity.id} />
            ))
          ) : (
            <p>No has registrado ninguna actividad.</p>
          )}
        </section>
      </div>

    </>
  )
}

export default ActivitiesList