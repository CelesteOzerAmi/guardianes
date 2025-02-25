import './ListAreas.css';
import React, { useState, useEffect } from 'react';
import Area from '../Area/Area';
import AreaFilter from '../AreaFilter/AreaFilter';
import { useDispatch, useSelector } from 'react-redux';
import { setArea } from '../../storage/areaSlice';

const ListAreas = () => {
    const [listAreas, setListAreas] = useState(null);
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();
    const area = useSelector((state) => state.area);

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
                console.log("Raw response:", text);

                const data = JSON.parse(text);
                console.log("API Response:", data);

                setListAreas(data.items || []);
                dispatch(setArea(data.items));
            } catch (err) {
                console.error("Error fetching areas:", err);
                setListAreas([]);
            } finally {
                setLoading(false);
            }
        };

        fetchAreas();
    }, []);

    useEffect(() => {
        setListAreas(area);
    }, [area]);

    if (loading) return <p>Cargando áreas protegidas...</p>;

    return (
        <div className='list-areas'>
            <h1>Áreas protegidas</h1>
            <p>
                La protección de áreas naturales es una tarea esencial para conservar
                y promover la diversidad de fauna y flora en nuestro medio ambiente.
                Hasta ahora, las áreas que se encuentran protegidas en nuestro país
                son las que se listan a continuación.
            </p>
            <AreaFilter className='areafilter' />
            <section>
                {listAreas.length > 0 ? (
                    listAreas.map((areaType) => (
                        <Area areaType={areaType} key={areaType.id} />
                    ))
                ) : (
                    <p>No hay áreas disponibles.</p>
                )}
            </section>
        </div>
    );
};

export default ListAreas;
