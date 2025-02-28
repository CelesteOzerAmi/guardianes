import React from 'react';
import './ActivitiesList.css';
import NavBar from '../NavBar/NavBar';
import Activities from '../Activities/Activities';
import { useSelector } from 'react-redux';

const ActivitiesList = () => {

  let activitiesArr = [{ id: 1, date: "2024-04-02", description: "actividad de conservación", area: 2 },
  { id: 2, date: "2024-04-02", description: "actividad de conservación", area: 2 },
  { id: 3, date: "2024-04-02", description: "actividad de conservación", area: 2 },
  { id: 4, date: "2024-04-02", description: "actividad de conservación", area: 2 },
  { id: 5, date: "2024-04-02", description: "actividad de conservación", area: 2 }];

  const user = useSelector((state) => state.user);


  return (
    <>
      <NavBar />
      <div className='conservation-body'>

        <h1>Actividades de conservación</h1>
        <h2>En esta sección se muestran las actividades de conservación de áreas naturales dispuestas por los miembros de nuestra organización.</h2>

        {
          user ?
            <a href='/uploadactivities'>Registrar nueva actividad</a>
            :
            <></>
        }

        <section className='activities-grid'>
          {activitiesArr.length > 0 ? (
            activitiesArr.map((activity) => (
              <Activities activity={activity} key={activity.id} />
            ))
          ) : (
            <p>No hay actividades disponibles.</p>
          )}
        </section>
      </div>

    </>
  )
}

export default ActivitiesList