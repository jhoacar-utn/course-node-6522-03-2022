import { handleProfile } from '../../services/authentication';

export default function Dashboard() {

    /*
        Vas muy bien con la parte de mostrar el perfil del usuario
        solo debes traerlo como lo habias definido en la funcion de handleProfile
        usando un estado con un objeto vacio 
            const profile = useState({});
        
        Luego en un useEffect() encierras la logica de la peticion asincrona del 
        handleProfile y te traes ese perfil, luego muestras en el dashboard

            <div>
                <span>{profile?.name}</span>
                ...
            </div>
            Nota. el '?.' lo que hace esque valide que profile no sea null o undefined y
            no rompa la aplicacion, siempre es una buena practica usarlo
    */
   
    //handleProfile()

    return (
        <>

            <div>
                Estoy en Dashboard
            </div>
        </>
    )
};