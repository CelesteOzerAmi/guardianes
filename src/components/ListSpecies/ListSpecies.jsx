import './ListSpecies.css';
import { useState, useEffect } from "react";
import Species from '../Species/Species';
import SpeciesFilter from '../SpeciesFilter/SpeciesFilter';
import './ListSpecies.css';
import { useDispatch } from "react-redux";
import { setSpecies } from '../../storage/speciesSlice';
import { useSelector } from 'react-redux';


const ListSpecies = () => {
    const [listSpecies, setListSpecies] = useState(null); // Estado inicial en null
    const [loading, setLoading] = useState(true); // Estado de carga
    const dispatch = useDispatch();
    const species = useSelector((state) => state.species);

    useEffect(() => {
        const fetchSpecies = async () => {
            try {
                const response = await fetch(
                    `https://mammal-excited-tarpon.ngrok-free.app/api/species/list?page=1&pageSize=10`,
                    {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                            'ngrok-skip-browser-warning': 'true' // Puede evitar bloqueos de ngrok
                        }
                    }
                );

                const text = await response.text();
                console.log("Raw response:", text);

                const data = JSON.parse(text);
                console.log("API Response:", data);

                setListSpecies(data.items || []); // Guardamos las especies en el estado
                dispatch(setSpecies(data.items)); // Cargamos datos en speciesSlice (Redux)

            } catch (err) {
                console.error("Error fetching species:", err);
                setListSpecies([]); // Si hay error, ponemos lista vacía
            } finally {
                setLoading(false); // Terminó la carga
            }
        };

        fetchSpecies();
    }, []);

    useEffect(() => {
        setListSpecies(species);
    }, [species]);

    if (loading) return <p>Cargando especies...</p>; // Mostrar carga mientras se espera la respuesta

    return (
        <div className="list-species">
            <h1>Especies protegidas</h1>
            <p>
                La protección de especies naturales es una tarea esencial para conservar y promover la diversidad de fauna y flora en nuestro medio ambiente. Las especies protegidas en nuestro país se listan a continuación.
            </p>
            <SpeciesFilter className="speciesfilter" />
            <section>
                {listSpecies.length > 0 ? (
                    listSpecies.map((typeSpecies) => (
                        <Species typeSpecies={typeSpecies} key={typeSpecies.id} />
                    ))
                ) : (
                    <p>No hay especies disponibles.</p> // Mensaje si no hay especies
                )}
            </section>
        </div>
    );
};

export default ListSpecies;
