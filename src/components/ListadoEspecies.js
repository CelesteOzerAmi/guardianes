import './ListadoEspecies.css';
import database from '../database/database';
import Especie from './Especie';

const ListadoEspecies = () => {

    const listaEspecies = database.dbEspecies;

    return (
        <div className='listado-especies'>
            <h1>
                Especies protegidas
            </h1>
            <p>
            La protección de especies naturales es una tarea esencial para conservar y promover la diversidad de fauna y flora en nuestro medio ambiente. Las especies protegidas en nuestro país se listan a continuación.
            </p>
            <section>
                {
                    listaEspecies.map((tipoEspecie) => (
                        <Especie tipoEspecie={tipoEspecie} key={tipoEspecie.id} />
                    ))
                }
            </section>
        </div>
    )
}

export default ListadoEspecies