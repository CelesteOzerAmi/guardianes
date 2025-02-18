import './ListSpecies.css';
import database from '../../database/database';
import Species from '../Species/Species';
import SpeciesFilter from '../SpeciesFilter/SpeciesFilter';

const ListSpecies = () => {

    const listSpecies = database.dbSpecies;

    return (
        <div className='list-species'>
            <h1>
                Especies protegidas
            </h1>
            <p>
            La protección de especies naturales es una tarea esencial para conservar y promover la diversidad de fauna y flora en nuestro medio ambiente. Las especies protegidas en nuestro país se listan a continuación.
            </p>
            <SpeciesFilter className='speciesfilter' />
            <section>
                {
                    listSpecies.map((typeSpecies) => (
                        <Species typeSpecies={typeSpecies} key={typeSpecies.id} />
                    ))
                }
            </section>
        </div>
    )
}

export default ListSpecies