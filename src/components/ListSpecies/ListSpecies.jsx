import './ListSpecies.css';
import { useState, useEffect } from "react";
import Species from '../Species/Species';
import SpeciesFilter from '../SpeciesFilter/SpeciesFilter';
import { useDispatch, useSelector } from "react-redux";
import { setSpecies } from '../../storage/speciesSlice';

const ListSpecies = () => {
    const [listSpecies, setListSpecies] = useState(null);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize] = useState(10); // Cantidad de especies por página

    const dispatch = useDispatch();
    const species = useSelector((state) => state.species);

    useEffect(() => {
        const fetchSpecies = async () => {
            setLoading(true);
            try {
                const response = await fetch(
                    `https://mammal-excited-tarpon.ngrok-free.app/api/species/list?page=${currentPage}&pageSize=${pageSize}`,
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

                setListSpecies(data.items || []);
                dispatch(setSpecies(data.items));

            } catch (err) {
                console.error("Error fetching species:", err);
                setListSpecies([]);
            } finally {
                setLoading(false);
            }
        };

        fetchSpecies();
    }, [currentPage]); // Se ejecuta cuando cambia la página

    useEffect(() => {
        setListSpecies(species);
    }, [species]);

    const handleNextPage = () => {
        setCurrentPage((prev) => prev + 1);
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage((prev) => prev - 1);
        }
    };

    if (loading) return <p>Cargando especies...</p>;

    return (
        <div className="list-species">
            <h1>Especies protegidas</h1>
            <p>
                La protección de especies naturales es una tarea esencial para conservar y promover la diversidad de fauna y flora en nuestro medio ambiente. Las especies protegidas en nuestro país se listan a continuación.
            </p>
            <SpeciesFilter className="speciesfilter" />
            <section>
                {listSpecies && listSpecies.length > 0 ? (
                    listSpecies.map((typeSpecies) => (
                        <Species typeSpecies={typeSpecies} key={typeSpecies.id} />
                    ))
                ) : (
                    <p className='list-text'>No hay especies disponibles.</p>
                )}
            </section>
            <div className="pagination">
                <button onClick={handlePrevPage} disabled={currentPage === 1}>
                    Anterior
                </button>
                <span>Página {currentPage}</span>
                <button onClick={handleNextPage}>Siguiente</button>
            </div>
        </div>
    );
};

export default ListSpecies;